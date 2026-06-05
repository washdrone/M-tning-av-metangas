/**
 * Normalisering och deduplicering.
 *
 * Råposter från olika källor har olika format. Här normaliseras
 * organisationsnummer, namn och e-post, råposter översätts till domänobjekt,
 * och dubbletter slås ihop (bolag på orgnummer, personer på bolag + namn).
 */

import type {
  ContactPerson,
  PostalAddress,
  PropertyCompany,
  PropertyPortfolioType,
  Provenance,
  RawRecord,
} from './types'
import { classifyTitle } from './roles'

/**
 * Normaliserar ett svenskt organisationsnummer till 10 siffror utan
 * bindestreck. Hanterar 12-siffriga (med sekelprefix) genom att ta de sista
 * 10. Returnerar `undefined` om inget giltigt 10-siffrigt nummer kan utläsas.
 */
export function normalizeOrgNumber(input: string | undefined): string | undefined {
  if (!input) return undefined
  const digits = input.replace(/\D/g, '')
  if (digits.length === 10) return digits
  if (digits.length === 12) return digits.slice(2)
  return undefined
}

/** Normaliserar namn för jämförelse (trim, kollapsade mellanslag, gemener). */
export function normalizeNameKey(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, ' ')
}

/** Normaliserar e-post (trim + gemener). Returnerar undefined för tomt. */
export function normalizeEmail(email: string | undefined): string | undefined {
  const e = email?.trim().toLowerCase()
  return e ? e : undefined
}

function cleanString(value: string | undefined): string | undefined {
  const v = value?.trim()
  return v ? v : undefined
}

function toPortfolioType(value: string | undefined): PropertyPortfolioType | undefined {
  if (!value) return undefined
  const v = value.trim().toLowerCase()
  const allowed: PropertyPortfolioType[] = [
    'bostad',
    'kommersiellt',
    'industri',
    'samhallsfastighet',
    'blandat',
    'okand',
  ]
  return (allowed as string[]).includes(v) ? (v as PropertyPortfolioType) : undefined
}

function buildAddress(raw: RawRecord): PostalAddress | undefined {
  const street = cleanString(raw.street)
  const postalCode = cleanString(raw.postalCode)
  const city = cleanString(raw.city)
  if (!street && !postalCode && !city) return undefined
  return { street, postalCode, city }
}

/** Resultat av att tolka en uppsättning råposter. */
export interface NormalizedData {
  companies: Map<string, PropertyCompany>
  contactsByOrg: Map<string, ContactPerson[]>
  /** Råposter som inte kunde användas (saknade giltigt orgnummer/namn). */
  rejected: { record: RawRecord; reason: string }[]
}

/**
 * Tolkar och dedupliceras råposter till bolag och kontaktpersoner.
 * `defaultLegalBasis` och `retentionUntil` styr GDPR-fälten på personerna.
 */
export function normalizeRecords(
  records: RawRecord[],
  options: {
    provenance: Provenance
    defaultLegalBasis: ContactPerson['legalBasis']
    retentionUntil?: string
  },
): NormalizedData {
  const companies = new Map<string, PropertyCompany>()
  const contactsByOrg = new Map<string, ContactPerson[]>()
  const seenContactKeys = new Set<string>()
  const rejected: NormalizedData['rejected'] = []

  for (const raw of records) {
    const orgNumber = normalizeOrgNumber(raw.orgNumber)
    const companyName = cleanString(raw.companyName)

    if (!orgNumber) {
      rejected.push({ record: raw, reason: 'saknar giltigt organisationsnummer' })
      continue
    }
    if (!companyName) {
      rejected.push({ record: raw, reason: 'saknar företagsnamn' })
      continue
    }

    // Bolag: skapa eller komplettera befintligt.
    const existing = companies.get(orgNumber)
    if (!existing) {
      companies.set(orgNumber, {
        orgNumber,
        name: companyName,
        legalForm: cleanString(raw.legalForm),
        sniCodes: raw.sniCodes?.map((c) => c.trim()).filter(Boolean),
        website: cleanString(raw.website),
        generalEmail: normalizeEmail(raw.generalEmail),
        generalPhone: cleanString(raw.generalPhone),
        address: buildAddress(raw),
        municipality: cleanString(raw.municipality),
        county: cleanString(raw.county),
        portfolioType: toPortfolioType(raw.portfolioType),
        provenance: options.provenance,
      })
    } else {
      // Fyll bara i fält som saknas – skriv aldrig över verifierad data.
      existing.legalForm ??= cleanString(raw.legalForm)
      existing.website ??= cleanString(raw.website)
      existing.generalEmail ??= normalizeEmail(raw.generalEmail)
      existing.generalPhone ??= cleanString(raw.generalPhone)
      existing.address ??= buildAddress(raw)
      existing.municipality ??= cleanString(raw.municipality)
      existing.county ??= cleanString(raw.county)
      existing.portfolioType ??= toPortfolioType(raw.portfolioType)
    }

    // Kontaktperson (om råposten har en).
    const contactName = cleanString(raw.contactName)
    if (!contactName) continue

    const nameKey = normalizeNameKey(contactName)
    const dedupeKey = `${orgNumber}::${nameKey}`
    if (seenContactKeys.has(dedupeKey)) continue
    seenContactKeys.add(dedupeKey)

    const classification = classifyTitle(raw.contactTitle)
    const contact: ContactPerson = {
      id: dedupeKey,
      companyOrgNumber: orgNumber,
      fullName: contactName,
      title: cleanString(raw.contactTitle),
      roleCategory: classification.roleCategory,
      decisionScopes: classification.decisionScopes,
      roleConfidence: classification.confidence,
      email: normalizeEmail(raw.contactEmail),
      phone: cleanString(raw.contactPhone),
      linkedInUrl: cleanString(raw.contactLinkedInUrl),
      legalBasis: options.defaultLegalBasis,
      retentionUntil: options.retentionUntil,
      provenance: options.provenance,
    }

    const list = contactsByOrg.get(orgNumber) ?? []
    list.push(contact)
    contactsByOrg.set(orgNumber, list)
  }

  return { companies, contactsByOrg, rejected }
}
