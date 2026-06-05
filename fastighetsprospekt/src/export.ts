/**
 * Export av prospekt till JSON eller CSV (en rad per kontaktperson).
 */

import { toCsv } from './csv'
import type { Prospect } from './types'

export function toJson(prospects: Prospect[]): string {
  return JSON.stringify(prospects, null, 2) + '\n'
}

const CSV_COLUMNS = [
  'orgnummer',
  'foretag',
  'bolagsform',
  'kommun',
  'lan',
  'bestandstyp',
  'foretag_webb',
  'kontaktperson',
  'titel',
  'rollkategori',
  'beslutsomraden',
  'rollkonfidens',
  'kontakt_epost',
  'kontakt_telefon',
  'linkedin',
  'laglig_grund',
  'kalla',
  'insamlad',
]

/** Plattar ut prospekt till en CSV med en rad per kontaktperson. */
export function toCsvExport(prospects: Prospect[]): string {
  const rows: Record<string, string>[] = []

  for (const { company, contacts } of prospects) {
    if (contacts.length === 0) {
      rows.push(companyColumns(company))
      continue
    }
    for (const contact of contacts) {
      rows.push({
        ...companyColumns(company),
        kontaktperson: contact.fullName,
        titel: contact.title ?? '',
        rollkategori: contact.roleCategory,
        beslutsomraden: contact.decisionScopes.join('; '),
        rollkonfidens: contact.roleConfidence.toFixed(2),
        kontakt_epost: contact.email ?? '',
        kontakt_telefon: contact.phone ?? '',
        linkedin: contact.linkedInUrl ?? '',
        laglig_grund: contact.legalBasis,
        kalla: contact.provenance.sourceName ?? contact.provenance.source,
        insamlad: contact.provenance.collectedAt,
      })
    }
  }

  return toCsv(rows, CSV_COLUMNS)
}

function companyColumns(company: Prospect['company']): Record<string, string> {
  return {
    orgnummer: company.orgNumber,
    foretag: company.name,
    bolagsform: company.legalForm ?? '',
    kommun: company.municipality ?? '',
    lan: company.county ?? '',
    bestandstyp: company.portfolioType ?? '',
    foretag_webb: company.website ?? '',
  }
}
