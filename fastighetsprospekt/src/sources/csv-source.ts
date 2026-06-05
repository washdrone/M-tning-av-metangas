/**
 * CSV-källa: läser fastighetsbolag och kontaktpersoner från en CSV-fil.
 *
 * Detta är den enda källan som fungerar direkt utan extern konfiguration och
 * är tänkt som startpunkt: tillhandahåll en lista (egen export, köpt fil,
 * manuellt sammanställd) så strukturerar, normaliserar och filtrerar tjänsten
 * den. Kolumnnamn mappas via `DEFAULT_COLUMN_MAP` men kan skrivas över.
 */

import { readFile } from 'node:fs/promises'
import { parseCsvWithHeader } from '../csv'
import type { RawRecord } from '../types'
import type { ProspectSource } from './source'

/** Mappning från RawRecord-fält → accepterade CSV-rubriker (gemener). */
export type ColumnMap = Record<keyof RawRecord, string[]>

export const DEFAULT_COLUMN_MAP: ColumnMap = {
  orgNumber: ['orgnummer', 'organisationsnummer', 'orgnr', 'org_number'],
  companyName: ['foretag', 'företag', 'foretagsnamn', 'företagsnamn', 'bolag', 'namn', 'company'],
  legalForm: ['bolagsform', 'juridisk_form', 'legal_form'],
  sniCodes: ['sni', 'snikoder', 'sni_codes'],
  website: ['webb', 'webbplats', 'hemsida', 'website', 'url'],
  generalEmail: ['epost', 'e-post', 'email', 'foretagsepost'],
  generalPhone: ['telefon', 'tel', 'phone', 'foretagstelefon'],
  street: ['gatuadress', 'adress', 'street'],
  postalCode: ['postnummer', 'postnr', 'postal_code', 'zip'],
  city: ['ort', 'postort', 'stad', 'city'],
  municipality: ['kommun', 'municipality'],
  county: ['lan', 'län', 'county'],
  portfolioType: ['bestandstyp', 'beståndstyp', 'fastighetstyp', 'portfolio_type'],
  contactName: ['kontaktperson', 'kontakt_namn', 'namn_kontakt', 'contact_name', 'kontakt'],
  contactTitle: ['titel', 'befattning', 'roll', 'title'],
  contactEmail: ['kontakt_epost', 'kontaktepost', 'kontakt_email', 'contact_email'],
  contactPhone: ['kontakt_telefon', 'kontakttelefon', 'contact_phone', 'direktnummer'],
  contactLinkedInUrl: ['linkedin', 'linkedin_url'],
}

const SNI_KEY: keyof RawRecord = 'sniCodes'

export class CsvSource implements ProspectSource {
  readonly id = 'csv'
  readonly kind = 'csv-import' as const
  readonly name: string

  constructor(
    private readonly filePath: string,
    private readonly columnMap: ColumnMap = DEFAULT_COLUMN_MAP,
  ) {
    this.name = filePath
  }

  async fetch(): Promise<RawRecord[]> {
    const text = await readFile(this.filePath, 'utf8')
    const rows = parseCsvWithHeader(text)

    // Bygg en uppslagstabell rubrik(gemener) → faktisk rubrik per rad är
    // onödigt; rubrikerna är desamma för alla rader, så vi löser dem en gång.
    const sample = rows[0] ?? {}
    const headerLookup = new Map<string, string>() // gemen → original
    for (const header of Object.keys(sample)) {
      headerLookup.set(header.toLowerCase().trim(), header)
    }

    const resolved = this.resolveColumns(headerLookup)

    return rows.map((row) => {
      const rec: RawRecord = {}
      for (const field of Object.keys(resolved) as (keyof RawRecord)[]) {
        const header = resolved[field]
        if (!header) continue
        const value = row[header]
        if (value === undefined || value === '') continue
        if (field === SNI_KEY) {
          rec.sniCodes = value
            .split(/[;|]/)
            .map((s) => s.trim())
            .filter(Boolean)
        } else {
          // Alla övriga RawRecord-fält är string | undefined.
          ;(rec as Record<string, unknown>)[field] = value
        }
      }
      return rec
    })
  }

  /** Löser varje RawRecord-fält till en faktisk CSV-rubrik (eller undefined). */
  private resolveColumns(
    headerLookup: Map<string, string>,
  ): Partial<Record<keyof RawRecord, string>> {
    const resolved: Partial<Record<keyof RawRecord, string>> = {}
    for (const field of Object.keys(this.columnMap) as (keyof RawRecord)[]) {
      for (const candidate of this.columnMap[field]) {
        const actual = headerLookup.get(candidate.toLowerCase())
        if (actual) {
          resolved[field] = actual
          break
        }
      }
    }
    return resolved
  }
}
