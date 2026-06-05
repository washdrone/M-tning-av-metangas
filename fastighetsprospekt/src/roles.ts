/**
 * Rollklassificering.
 *
 * Det finns inget register som anger "person med beslutsmandat över
 * fasad-/tak-/fönstertvätt". Den uppgiften måste härledas, främst från
 * personens titel. Den här modulen gör en transparent, regelbaserad härledning
 * och returnerar både en rollkategori, sannolika beslutsområden och en
 * konfidenssiffra – så att resultatet kan filtreras och granskas, aldrig tas
 * för absolut sanning.
 */

import type { MaintenanceDecisionScope, RoleCategory } from './types'

export interface RoleClassification {
  roleCategory: RoleCategory
  decisionScopes: MaintenanceDecisionScope[]
  /** 0–1: hur sannolikt personen är en relevant beslutsfattare för yttre underhåll. */
  confidence: number
}

const ALL_EXTERIOR: MaintenanceDecisionScope[] = [
  'fasadtvatt',
  'taktvatt',
  'fonsterputs',
  'yttre-underhall-generellt',
]

/**
 * Regler i prioritetsordning. Första matchande regel vinner. Nyckelorden
 * matchas mot gemener av titeln. Håll listan konservativ – hellre låg
 * konfidens än falska beslutsfattare.
 */
interface RoleRule {
  category: RoleCategory
  keywords: string[]
  scopes: MaintenanceDecisionScope[]
  confidence: number
}

const RULES: RoleRule[] = [
  {
    category: 'teknisk-forvaltare',
    keywords: ['teknisk förvaltare', 'teknisk forvaltare', 'teknisk fastighetsförvaltare'],
    scopes: [...ALL_EXTERIOR],
    confidence: 0.9,
  },
  {
    category: 'underhallsansvarig',
    keywords: ['underhållsansvarig', 'underhallsansvarig', 'underhållschef', 'underhallschef', 'underhållsledare'],
    scopes: [...ALL_EXTERIOR],
    confidence: 0.85,
  },
  {
    category: 'driftansvarig',
    keywords: ['driftchef', 'driftansvarig', 'driftledare', 'drift- och underhåll', 'teknisk chef'],
    scopes: [...ALL_EXTERIOR],
    confidence: 0.8,
  },
  {
    category: 'fastighetschef',
    keywords: ['fastighetschef', 'chef fastighet', 'head of property', 'property manager', 'fastighetsdirektör'],
    scopes: [...ALL_EXTERIOR, 'upphandling'],
    confidence: 0.75,
  },
  {
    category: 'inkop-upphandling',
    keywords: ['inköpschef', 'inkopschef', 'inköpsansvarig', 'upphandlare', 'upphandlingschef', 'upphandlingsansvarig', 'kategoriansvarig'],
    scopes: ['upphandling'],
    confidence: 0.6,
  },
  {
    // "Förvaltare"/"fastighetsförvaltare" utan "teknisk" – ofta ekonomisk
    // eller blandad roll, lägre säkerhet på yttre underhåll.
    category: 'teknisk-forvaltare',
    keywords: ['fastighetsförvaltare', 'fastighetsforvaltare', 'förvaltare', 'forvaltare'],
    scopes: ['yttre-underhall-generellt'],
    confidence: 0.55,
  },
  {
    category: 'vd-ledning',
    keywords: ['vd', 'verkställande direktör', 'verkstallande direktor', 'ceo', 'ägare', 'agare'],
    // I små bolag fattar VD ofta dessa beslut – men osäkert i stora.
    scopes: ['yttre-underhall-generellt', 'upphandling'],
    confidence: 0.4,
  },
  {
    // Operativ skötsel utför, men beslutar sällan/upphandlar inte.
    category: 'operativ-skotsel',
    keywords: ['fastighetsskötare', 'fastighetsskotare', 'fastighetstekniker', 'vaktmästare', 'vaktmastare'],
    scopes: [],
    confidence: 0.15,
  },
]

const TITLELESS: RoleClassification = {
  roleCategory: 'ovrig',
  decisionScopes: [],
  confidence: 0,
}

/**
 * Klassificerar en titel till rollkategori, sannolika beslutsområden och
 * konfidens. Returnerar en nollklassning om titeln saknas eller inte matchar.
 */
export function classifyTitle(title: string | undefined): RoleClassification {
  if (!title || !title.trim()) return { ...TITLELESS }

  const normalized = title.toLowerCase()

  for (const rule of RULES) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      let confidence = rule.confidence
      // Liten boost om titeln uttryckligen nämner ett yttre underhållsområde.
      if (/(fasad|tak|fönster|fonster)/.test(normalized)) {
        confidence = Math.min(1, confidence + 0.1)
      }
      return {
        roleCategory: rule.category,
        decisionScopes: [...rule.scopes],
        confidence,
      }
    }
  }

  return {
    roleCategory: 'ovrig',
    decisionScopes: [],
    confidence: 0,
  }
}
