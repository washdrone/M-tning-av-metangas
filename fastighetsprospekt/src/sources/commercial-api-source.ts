/**
 * Kommersiell data-API-källa (mall som kräver konfiguration).
 *
 * VIKTIGT – grundregeln "aldrig gissa": den här adaptern hittar INTE på en
 * leverantör, endpoint eller fältmappning. För att den ska fungera måste du
 * ange din egen dataleverantörs bas-URL, API-nyckel och en `mapResponse`-
 * funktion som översätter leverantörens svar till `RawRecord[]`.
 *
 * Lagligt rena leverantörer i Sverige som brukar tillhandahålla bolag OCH
 * beslutsfattare via API är t.ex. Roaring, Bisnode/Dun & Bradstreet, Vainu
 * eller Bizzdo – men avtal, endpoint och svarsformat måste du tillhandahålla.
 * Avtalet med leverantören styr också vilken laglig grund som gäller.
 */

import type { RawRecord } from '../types'
import type { ProspectSource } from './source'

export interface CommercialApiConfig {
  /** Människoläsbart leverantörsnamn för spårbarhet. */
  providerName: string
  /** Bas-URL till leverantörens API. */
  baseUrl: string
  /** API-nyckel. Läs helst från miljövariabel, lägg aldrig i kod/versionshantering. */
  apiKey: string
  /** Söksträng/query enligt leverantörens API (t.ex. SNI-kod för fastighet). */
  query: Record<string, string>
  /**
   * Översätter leverantörens råa JSON-svar till RawRecord[]. Måste skrivas
   * mot just din leverantörs svarsformat – det finns ingen standard.
   */
  mapResponse: (json: unknown) => RawRecord[]
}

export class CommercialApiSource implements ProspectSource {
  readonly id: string
  readonly kind = 'commercial-api' as const
  readonly name: string

  constructor(private readonly config: CommercialApiConfig) {
    if (!config.baseUrl || !config.apiKey) {
      throw new Error(
        'CommercialApiSource är inte konfigurerad: baseUrl och apiKey krävs. ' +
          'Ange din dataleverantörs uppgifter – tjänsten gissar aldrig dessa.',
      )
    }
    this.id = config.providerName.toLowerCase().replace(/\s+/g, '-')
    this.name = config.providerName
  }

  async fetch(): Promise<RawRecord[]> {
    const url = new URL(this.config.baseUrl)
    for (const [key, value] of Object.entries(this.config.query)) {
      url.searchParams.set(key, value)
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.config.apiKey}`,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(
        `Dataleverantören svarade ${response.status} ${response.statusText}`,
      )
    }

    const json: unknown = await response.json()
    return this.config.mapResponse(json)
  }
}
