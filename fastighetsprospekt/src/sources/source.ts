/**
 * Källadapter-gränssnitt.
 *
 * Tjänsten är medvetet källagnostisk. Varje datakälla implementerar
 * `ProspectSource` och returnerar normaliseringsbara råposter. Det gör att en
 * ny källa (t.ex. en kommersiell data-API eller ett offentligt register) kan
 * läggas till utan att ändra normaliserings-, klassificerings- eller
 * exportlogiken.
 */

import type { DataSourceKind, RawRecord } from '../types'

export interface ProspectSource {
  /** Stabil identifierare, t.ex. "csv" eller "roaring". */
  readonly id: string
  /** Typ av källa (styr GDPR-behandling och tillförlitlighet). */
  readonly kind: DataSourceKind
  /** Människoläsbart namn för spårbarhet (t.ex. filnamn eller leverantör). */
  readonly name: string
  /** Hämtar råposter. Får läsa fil, anropa API m.m. */
  fetch(): Promise<RawRecord[]>
}
