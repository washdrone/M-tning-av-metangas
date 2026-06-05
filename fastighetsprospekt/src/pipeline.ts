/**
 * Pipeline: kör en eller flera källor, normaliserar, klassificerar och
 * filtrerar fram prospekt – fastighetsbolag med kontaktpersoner som har
 * beslutsmandat över yttre underhåll.
 */

import { normalizeRecords } from './normalize'
import type { ProspectSource } from './sources/source'
import type {
  ContactPerson,
  LegalBasis,
  MaintenanceDecisionScope,
  Prospect,
} from './types'

export interface PipelineOptions {
  /** Beslutsområden vi söker. Default: samtliga yttre underhållsområden. */
  scopes?: MaintenanceDecisionScope[]
  /** Lägsta rollkonfidens för att en kontakt ska räknas som beslutsfattare. */
  minConfidence?: number
  /** Laglig grund som sätts på insamlade personuppgifter. */
  legalBasis?: LegalBasis
  /** Gallringsdatum (ISO-8601) för personuppgifter. */
  retentionUntil?: string
  /** Ta bara med bolag som har minst en relevant kontaktperson. */
  requireContact?: boolean
}

const DEFAULT_SCOPES: MaintenanceDecisionScope[] = [
  'fasadtvatt',
  'taktvatt',
  'fonsterputs',
  'yttre-underhall-generellt',
  'upphandling',
]

export interface PipelineResult {
  prospects: Prospect[]
  stats: {
    sources: number
    rawRecords: number
    companies: number
    contactsTotal: number
    contactsMatched: number
    rejected: number
  }
}

/** Behåller en kontakt om någon av dess beslutsområden matchar och konfidensen räcker. */
function contactMatches(
  contact: ContactPerson,
  scopes: MaintenanceDecisionScope[],
  minConfidence: number,
): boolean {
  if (contact.roleConfidence < minConfidence) return false
  return contact.decisionScopes.some((s) => scopes.includes(s))
}

export async function runPipeline(
  sources: ProspectSource[],
  options: PipelineOptions = {},
): Promise<PipelineResult> {
  const scopes = options.scopes ?? DEFAULT_SCOPES
  const minConfidence = options.minConfidence ?? 0.5
  const legalBasis = options.legalBasis ?? 'legitimate-interest'
  const requireContact = options.requireContact ?? true

  let rawRecords = 0
  let rejected = 0
  let contactsTotal = 0

  // Slå ihop data från alla källor (dedup sker per orgnummer/namn nedan).
  const companies = new Map<string, Prospect['company']>()
  const contactsByOrg = new Map<string, ContactPerson[]>()
  const seenContactIds = new Set<string>()

  for (const source of sources) {
    const records = await source.fetch()
    rawRecords += records.length

    const normalized = normalizeRecords(records, {
      provenance: {
        source: source.kind,
        sourceName: source.name,
        collectedAt: new Date().toISOString(),
      },
      defaultLegalBasis: legalBasis,
      retentionUntil: options.retentionUntil,
    })
    rejected += normalized.rejected.length

    for (const [orgNumber, company] of normalized.companies) {
      if (!companies.has(orgNumber)) companies.set(orgNumber, company)
    }
    for (const [orgNumber, list] of normalized.contactsByOrg) {
      const merged = contactsByOrg.get(orgNumber) ?? []
      for (const contact of list) {
        if (seenContactIds.has(contact.id)) continue
        seenContactIds.add(contact.id)
        merged.push(contact)
        contactsTotal++
      }
      contactsByOrg.set(orgNumber, merged)
    }
  }

  // Filtrera kontakter och bygg prospekt.
  let contactsMatched = 0
  const prospects: Prospect[] = []

  for (const [orgNumber, company] of companies) {
    const all = contactsByOrg.get(orgNumber) ?? []
    const matched = all
      .filter((c) => contactMatches(c, scopes, minConfidence))
      .sort((a, b) => b.roleConfidence - a.roleConfidence)
    contactsMatched += matched.length

    if (requireContact && matched.length === 0) continue
    prospects.push({ company, contacts: matched })
  }

  // Sortera prospekt: högst kontaktkonfidens först.
  prospects.sort((a, b) => {
    const ca = a.contacts[0]?.roleConfidence ?? 0
    const cb = b.contacts[0]?.roleConfidence ?? 0
    return cb - ca
  })

  return {
    prospects,
    stats: {
      sources: sources.length,
      rawRecords,
      companies: companies.size,
      contactsTotal,
      contactsMatched,
      rejected,
    },
  }
}
