/**
 * Domänmodell för fastighetsprospekt.
 *
 * Grundregel (samma som i huvudprojektet): aldrig gissa eller anta. Alla fält
 * som inte kunnat verifieras lämnas `undefined` – de ska aldrig fyllas med
 * påhittade värden. Källa och insamlingstidpunkt lagras alltid så att varje
 * uppgift är spårbar.
 */

/** Varifrån en uppgift kommer. Avgör laglig grund och tillförlitlighet. */
export type DataSourceKind =
  | 'csv-import' // Manuellt tillhandahållen/uppladdad fil
  | 'commercial-api' // Betald dataleverantör (kräver konfiguration)
  | 'public-registry' // Offentligt register (Bolagsverket/SCB e.d.)
  | 'manual' // Manuellt inmatad uppgift

/**
 * Laglig grund för behandling av personuppgifter (GDPR art. 6).
 * För B2B-prospektering är "legitimate-interest" vanligast, men måste
 * dokumenteras med en intresseavvägning. Sätts aldrig automatiskt till
 * "consent" om samtycke inte faktiskt inhämtats.
 */
export type LegalBasis = 'legitimate-interest' | 'consent' | 'contract' | 'unknown'

/** Spårbarhetsmetadata som följer med varje insamlad uppgift. */
export interface Provenance {
  /** Typ av källa. */
  source: DataSourceKind
  /** Fritt källnamn, t.ex. filnamn eller leverantörens namn. */
  sourceName?: string
  /** ISO-8601-datum då uppgiften samlades in. */
  collectedAt: string
}

/** Typ av fastighetsbestånd ett bolag förvaltar (om känt). */
export type PropertyPortfolioType =
  | 'bostad'
  | 'kommersiellt'
  | 'industri'
  | 'samhallsfastighet'
  | 'blandat'
  | 'okand'

/** Ett svenskt fastighetsbolag. Identifieras unikt via organisationsnummer. */
export interface PropertyCompany {
  /** Normaliserat organisationsnummer (10 siffror, utan bindestreck). */
  orgNumber: string
  /** Registrerat företagsnamn. */
  name: string
  /** Bolagsform, t.ex. "Aktiebolag", "Bostadsrättsförening". */
  legalForm?: string
  /** SNI-koder (näringsgrensindelning). Används för fastighetsfiltrering. */
  sniCodes?: string[]
  website?: string
  /** Allmän kontakt-e-post till bolaget (ej personuppgift). */
  generalEmail?: string
  generalPhone?: string
  address?: PostalAddress
  municipality?: string
  county?: string
  portfolioType?: PropertyPortfolioType
  provenance: Provenance
}

export interface PostalAddress {
  street?: string
  postalCode?: string
  city?: string
}

/**
 * Beslutsområde inom yttre underhåll. Detta är kärnan i målgruppen: vi vill nå
 * personer med faktiskt mandat över dessa områden, inte alla anställda.
 */
export type MaintenanceDecisionScope =
  | 'fasadtvatt'
  | 'taktvatt'
  | 'fonsterputs'
  | 'yttre-underhall-generellt'
  | 'upphandling' // Mandat att upphandla/teckna avtal för tjänsterna

/** En kontaktperson hos ett fastighetsbolag. Detta ÄR personuppgifter. */
export interface ContactPerson {
  /** Stabil intern nyckel (orgnummer + normaliserat namn). */
  id: string
  /** Organisationsnummer för bolaget personen tillhör. */
  companyOrgNumber: string
  fullName: string
  /** Originaltitel som den angavs i källan. */
  title?: string
  /** Klassificerad rollkategori, härledd från titeln. */
  roleCategory: RoleCategory
  /**
   * Beslutsområden personen bedöms ha mandat över, härlett från titeln.
   * Härledning – inte verifierad sanning. Se `roleConfidence`.
   */
  decisionScopes: MaintenanceDecisionScope[]
  /** Konfidens 0–1 för att personen är en relevant beslutsfattare. */
  roleConfidence: number
  email?: string
  phone?: string
  linkedInUrl?: string
  /** GDPR: laglig grund för att behandla denna persons uppgifter. */
  legalBasis: LegalBasis
  /** GDPR: senaste datum uppgiften får lagras (gallring), ISO-8601. */
  retentionUntil?: string
  provenance: Provenance
}

/** Härledd rollkategori utifrån titel. */
export type RoleCategory =
  | 'teknisk-forvaltare'
  | 'fastighetschef'
  | 'driftansvarig'
  | 'underhallsansvarig'
  | 'inkop-upphandling'
  | 'vd-ledning'
  | 'operativ-skotsel' // T.ex. fastighetsskötare – sällan beslutsfattare
  | 'ovrig'

/** Ett färdigt prospekt: ett bolag med dess relevanta kontaktpersoner. */
export interface Prospect {
  company: PropertyCompany
  contacts: ContactPerson[]
}

/** Råpost från en källa innan normalisering och klassificering. */
export interface RawRecord {
  orgNumber?: string
  companyName?: string
  legalForm?: string
  sniCodes?: string[]
  website?: string
  generalEmail?: string
  generalPhone?: string
  street?: string
  postalCode?: string
  city?: string
  municipality?: string
  county?: string
  portfolioType?: string
  // Kontaktperson (valfritt – en råpost kan vara enbart bolag).
  contactName?: string
  contactTitle?: string
  contactEmail?: string
  contactPhone?: string
  contactLinkedInUrl?: string
}
