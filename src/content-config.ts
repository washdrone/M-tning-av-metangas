/**
 * EcoDrone Content Architecture
 *
 * Central konfiguration för sajtens innehållssystem.
 * Definierar sidtyper, topic clusters, länkrelationer och kvalitetsregler.
 *
 * SYFTE: Säkerställa att varje ny sida har tydlig roll, unik vinkel
 * och stärker helheten – inte duplicerar befintligt innehåll.
 */

// ============================================================
// SIDTYPER (Content Types)
// ============================================================

export type ContentType =
  | 'money-page'        // Tjänstesidor – konverteringsnära
  | 'compliance-page'   // Regulatoriska guider – authority + kommersiell
  | 'industry-page'     // Branschsidor – segmenterade landningssidor
  | 'authority-article' // Djupa artiklar – topical authority
  | 'methodology-page'  // Metodik/process – trovärdighet
  | 'glossary-term'     // Definitionssidor – entity-precision
  | 'hub-page'          // Översiktssidor – navigation
  | 'company-page'      // Om oss, kontakt, case – trust

export interface ContentPageConfig {
  path: string
  type: ContentType
  cluster: string
  role: 'hub' | 'pillar' | 'supporting' | 'transactional'
  relatedPaths: string[]
}

// ============================================================
// TOPIC CLUSTERS
// ============================================================

export const topicClusters = {
  metanmatning: {
    hub: '/tjanster/metanmatning',
    label: 'Metanmätning',
    description: 'Kärnkluster: TDLAS-baserad metanmätning',
    pillars: [
      '/tjanster/metanmatning',
      '/branscher/deponier',
      '/branscher/biogas',
    ],
    supporting: [
      '/tjanster/metodik',
      '/compliance/miljorapportering',
      '/compliance/csrd',
    ],
  },

  ldar: {
    hub: '/tjanster/ldar-inspektion',
    label: 'LDAR & läckdetektion',
    description: 'Kärnkluster: OGI + TDLAS-baserad LDAR',
    pillars: [
      '/tjanster/ldar-inspektion',
      '/tjanster/ogi-kamera',
      '/compliance/eu-metanforordning',
    ],
    supporting: [
      '/compliance/ogmp',
      '/branscher/olja-gas',
      '/branscher/hamnar',
    ],
  },

  compliance: {
    hub: '/compliance',
    label: 'Compliance & regelverk',
    description: 'Regulatorisk authority',
    pillars: [
      '/compliance/csrd',
      '/compliance/eu-metanforordning',
      '/compliance/ogmp',
      '/compliance/miljorapportering',
    ],
    supporting: [
      '/tjanster/metodik',
      '/tjanster/leveranser',
    ],
  },

  vaxthusgaser: {
    hub: '/tjanster/vaxthusgasmatning',
    label: 'Växthusgasmätning',
    description: 'Bredare GHG-mätning: CH₄, N₂O, CO₂, VOC',
    pillars: [
      '/tjanster/vaxthusgasmatning',
      '/tjanster/gasdetektion',
      '/tjanster/plymmating',
    ],
    supporting: [
      '/branscher/reningsverk',
      '/branscher/gruva',
      '/tjanster/luftkvalitet',
    ],
  },
} as const

// ============================================================
// SITE MAP MED ROLLBESKRIVNING
// ============================================================

export const siteContentMap: ContentPageConfig[] = [
  // === MONEY PAGES (tjänster) ===
  { path: '/tjanster/metanmatning', type: 'money-page', cluster: 'metanmatning', role: 'pillar', relatedPaths: ['/branscher/deponier', '/branscher/biogas', '/compliance/miljorapportering', '/tjanster/metodik'] },
  { path: '/tjanster/ldar-inspektion', type: 'money-page', cluster: 'ldar', role: 'pillar', relatedPaths: ['/tjanster/ogi-kamera', '/compliance/eu-metanforordning', '/branscher/olja-gas', '/tjanster/metodik'] },
  { path: '/tjanster/ogi-kamera', type: 'money-page', cluster: 'ldar', role: 'pillar', relatedPaths: ['/tjanster/ldar-inspektion', '/compliance/eu-metanforordning', '/branscher/olja-gas'] },
  { path: '/tjanster/plymmating', type: 'money-page', cluster: 'vaxthusgaser', role: 'pillar', relatedPaths: ['/compliance/ogmp', '/branscher/deponier', '/tjanster/metodik'] },
  { path: '/tjanster/vaxthusgasmatning', type: 'money-page', cluster: 'vaxthusgaser', role: 'pillar', relatedPaths: ['/tjanster/gasdetektion', '/compliance/csrd', '/branscher/reningsverk'] },
  { path: '/tjanster/gasdetektion', type: 'money-page', cluster: 'vaxthusgaser', role: 'pillar', relatedPaths: ['/tjanster/vaxthusgasmatning', '/branscher/gruva', '/tjanster/luftkvalitet'] },
  { path: '/tjanster/utslappsmating-dronare', type: 'money-page', cluster: 'metanmatning', role: 'pillar', relatedPaths: ['/tjanster/metanmatning', '/tjanster/metodik', '/compliance/csrd'] },
  { path: '/tjanster/luftkvalitet', type: 'money-page', cluster: 'vaxthusgaser', role: 'supporting', relatedPaths: ['/tjanster/gasdetektion', '/branscher/gruva'] },

  // === METHODOLOGY / AUTHORITY ===
  { path: '/tjanster/metodik', type: 'methodology-page', cluster: 'metanmatning', role: 'pillar', relatedPaths: ['/tjanster/leveranser', '/compliance/csrd', '/compliance/ogmp', '/tjanster/metanmatning'] },
  { path: '/tjanster/leveranser', type: 'methodology-page', cluster: 'metanmatning', role: 'supporting', relatedPaths: ['/tjanster/metodik', '/compliance/miljorapportering'] },

  // === COMPLIANCE PAGES ===
  { path: '/compliance/csrd', type: 'compliance-page', cluster: 'compliance', role: 'pillar', relatedPaths: ['/compliance/miljorapportering', '/compliance/eu-metanforordning', '/branscher/deponier', '/branscher/reningsverk'] },
  { path: '/compliance/eu-metanforordning', type: 'compliance-page', cluster: 'compliance', role: 'pillar', relatedPaths: ['/compliance/ogmp', '/tjanster/ldar-inspektion', '/branscher/olja-gas', '/branscher/hamnar'] },
  { path: '/compliance/ogmp', type: 'compliance-page', cluster: 'compliance', role: 'pillar', relatedPaths: ['/compliance/eu-metanforordning', '/tjanster/plymmating', '/branscher/olja-gas', '/compliance/csrd'] },
  { path: '/compliance/miljorapportering', type: 'compliance-page', cluster: 'compliance', role: 'pillar', relatedPaths: ['/compliance/csrd', '/branscher/deponier', '/branscher/reningsverk', '/tjanster/metodik'] },

  // === INDUSTRY PAGES ===
  { path: '/branscher/deponier', type: 'industry-page', cluster: 'metanmatning', role: 'pillar', relatedPaths: ['/tjanster/metanmatning', '/tjanster/plymmating', '/compliance/miljorapportering', '/compliance/csrd'] },
  { path: '/branscher/biogas', type: 'industry-page', cluster: 'metanmatning', role: 'pillar', relatedPaths: ['/tjanster/metanmatning', '/tjanster/ldar-inspektion', '/compliance/miljorapportering'] },
  { path: '/branscher/reningsverk', type: 'industry-page', cluster: 'vaxthusgaser', role: 'pillar', relatedPaths: ['/tjanster/vaxthusgasmatning', '/tjanster/metanmatning', '/compliance/csrd', '/compliance/miljorapportering'] },
  { path: '/branscher/olja-gas', type: 'industry-page', cluster: 'ldar', role: 'pillar', relatedPaths: ['/tjanster/ldar-inspektion', '/tjanster/ogi-kamera', '/compliance/eu-metanforordning', '/compliance/ogmp'] },
  { path: '/branscher/gruva', type: 'industry-page', cluster: 'vaxthusgaser', role: 'supporting', relatedPaths: ['/tjanster/gasdetektion', '/compliance/miljorapportering', '/compliance/csrd'] },
  { path: '/branscher/hamnar', type: 'industry-page', cluster: 'ldar', role: 'supporting', relatedPaths: ['/tjanster/ldar-inspektion', '/compliance/eu-metanforordning', '/branscher/olja-gas'] },

  // === HUB PAGES ===
  { path: '/tjanster', type: 'hub-page', cluster: 'metanmatning', role: 'hub', relatedPaths: [] },
  { path: '/branscher', type: 'hub-page', cluster: 'metanmatning', role: 'hub', relatedPaths: [] },
  { path: '/compliance', type: 'hub-page', cluster: 'compliance', role: 'hub', relatedPaths: [] },
  { path: '/blogg', type: 'hub-page', cluster: 'metanmatning', role: 'hub', relatedPaths: [] },

  // === COMPANY / TRUST ===
  { path: '/om-oss', type: 'company-page', cluster: 'metanmatning', role: 'supporting', relatedPaths: ['/branscher', '/compliance', '/kontakt'] },
  { path: '/case', type: 'company-page', cluster: 'metanmatning', role: 'supporting', relatedPaths: ['/branscher/deponier', '/branscher/biogas'] },
  { path: '/faq', type: 'company-page', cluster: 'metanmatning', role: 'supporting', relatedPaths: ['/tjanster/metodik', '/compliance', '/tjanster/leveranser'] },
  { path: '/ordlista', type: 'glossary-term', cluster: 'metanmatning', role: 'supporting', relatedPaths: ['/faq', '/tjanster/metodik', '/blogg/diffusa-utslapp-guide'] },
  { path: '/kontakt', type: 'company-page', cluster: 'metanmatning', role: 'transactional', relatedPaths: [] },
]

// ============================================================
// CONTENT QUALITY RULES
// ============================================================

export const contentRules = {
  /**
   * MINIMILÄNGD per sidtyp (antal ord i body content).
   * Syftet är att förhindra thin content.
   */
  minimumWordCount: {
    'money-page': 600,
    'compliance-page': 800,
    'industry-page': 500,
    'authority-article': 800,
    'methodology-page': 600,
    'glossary-term': 200,
    'hub-page': 150,
    'company-page': 300,
  } as Record<ContentType, number>,

  /**
   * Obligatoriska sektioner per sidtyp.
   * Varje sida MÅSTE innehålla dessa element.
   */
  requiredSections: {
    'money-page': [
      'definition-intro',        // Vad tjänsten är
      'how-it-works',           // Hur det fungerar praktiskt
      'when-relevant',          // När det behövs
      'related-regulations',    // Koppling till regelverk
      'related-content-links',  // Interna länkar
    ],
    'compliance-page': [
      'definition-intro',       // Vad regelverket innebär
      'who-is-affected',        // Vem som berörs
      'practical-requirements', // Konkreta krav
      'timeline-or-deadlines',  // Tidsfrister
      'measurement-connection', // Koppling till mätning
      'faq-section',            // FAQ
      'related-content-links',  // Interna länkar
    ],
    'industry-page': [
      'industry-challenge',     // Branschens utsläppsutmaning
      'measurement-approach',   // Hur mätning genomförs
      'regulatory-drivers',     // Regulatoriska drivkrafter
      'related-content-links',  // Interna länkar
    ],
    'authority-article': [
      'definition-intro',       // Ämnet definieras
      'practical-explanation',  // Praktisk förklaring
      'common-mistakes',        // Vanliga fel/missförstånd
      'decision-perspective',   // Beslutsperspektiv
      'internal-links',         // Internlänkar till money pages
    ],
    'methodology-page': [
      'process-overview',       // Översikt av arbetsmetod
      'quality-assurance',      // Kvalitetssäkring
      'limitations',            // Begränsningar/osäkerhet
      'traceability',           // Spårbarhet
    ],
    'glossary-term': [
      'definition',             // Tydlig definition
      'usage-context',          // Användningskontext
      'related-terms',          // Relaterade termer
    ],
  } as Record<string, string[]>,

  /**
   * AEO-struktur: regler för AI-extraherbarthet.
   */
  aeoRules: {
    h2Format: 'question-first',    // H2 ska som regel vara frågor
    firstSentence: 'bold-answer',  // Första mening efter H2 = bold + komplett svar
    wordCountAnswer: { min: 30, max: 60 }, // Svarslängd
    definitionFirst: true,         // Inledningar ska definiera entiteten
  },

  /**
   * Förbjudna mönster.
   */
  forbidden: [
    'generic-opening',          // "I en värld där..." / "I takt med att..."
    'duplicate-content',        // Text som redan finns på annan sida
    'weak-anchor-text',         // "läs mer", "klicka här"
    'unverified-claims',        // Siffror/namn utan källa
    'repetitive-ai-tone',       // Samma formuleringsmönster om och om
    'thin-blog-posts',          // Blogginlägg under 600 ord
  ],

  /**
   * Entity-disciplin: hur EcoDrone och facktermer ska användas.
   */
  entityRules: {
    companyName: 'EcoDrone',               // Inte "EcoDrone AB" eller "EcoDrone Sverige" i löptext
    companyLegalName: 'EcoDrone Sverige AB', // Bara i schema och juridisk kontext
    tdlas: 'TDLAS (Tunable Diode Laser Absorption Spectroscopy)', // Expandera vid första omnämnande per sida
    ogi: 'OGI (Optical Gas Imaging)',       // Expandera vid första omnämnande per sida
    ldar: 'LDAR (Leak Detection and Repair)', // Expandera vid första omnämnande per sida
  },
} as const

// ============================================================
// TOPIC MAP: FRAMTIDA CONTENT ROADMAP
// ============================================================

/**
 * Definierar vilka ämnen sajten ska täcka för att bygga
 * långsiktig topical authority. Prioriterad ordning.
 *
 * Varje topic har en status:
 * - 'exists': sidan finns redan
 * - 'planned': bör skapas
 * - 'not-needed': skulle duplicera befintligt
 */
export const topicRoadmap = [
  // === PRIORITET 1: Befintliga sidor att förbättra ===
  { topic: 'Metanmätning med TDLAS', path: '/tjanster/metanmatning', status: 'exists' as const, action: 'Förbättra med AEO-struktur' },
  { topic: 'LDAR-inspektion', path: '/tjanster/ldar-inspektion', status: 'exists' as const, action: 'Förbättra med AEO-struktur' },
  { topic: 'Metodik och kvalitetssäkring', path: '/tjanster/metodik', status: 'exists' as const, action: 'Lägg till Author/LastUpdated' },

  // === PRIORITET 2: Bloggartiklar som authority content ===
  { topic: 'Diffusa utsläpp: vad de är och varför de är svåra att mäta', path: '/blogg/diffusa-utslapp', status: 'planned' as const, action: 'Ny authority article — definierar nyckelbegrepp, förklarar mätutmaningen' },
  { topic: 'Schabloner vs mätdata: vad är skillnaden och varför spelar det roll?', path: '/blogg/schabloner-vs-matdata', status: 'exists' as const, action: 'Publicerad — beslutfokuserad jämförelse med AEO-struktur' },
  { topic: 'Hur en drönarbaserad metanmätning går till steg för steg', path: '/blogg/hur-dronarbaserad-metanmatning-fungerar', status: 'exists' as const, action: 'Publicerad — processförklaring ur beställarperspektiv, kompletterar metodik-sidan' },

  // === PRIORITET 3: Ordlista ===
  { topic: 'Ordlista: nyckelbegrepp inom utsläppsmätning', path: '/ordlista', status: 'exists' as const, action: 'Skapad med DefinedTermSet-schema. Utöka med fler termer vid behov.' },

  // === EJ REKOMMENDERAT ===
  { topic: 'CSRD Scope 1 guide (blogg)', path: '/blogg/csrd-scope-1-guide', status: 'exists' as const, action: 'AVVECKLA — duplicerar /compliance/csrd' },
  { topic: 'LDAR EU-metanförordning (blogg)', path: '/blogg/ldar-eu-metanforordning', status: 'exists' as const, action: 'AVVECKLA — duplicerar /compliance/eu-metanforordning' },
  { topic: 'Metanmätning deponier (blogg)', path: '/blogg/metanmatning-deponier', status: 'exists' as const, action: 'AVVECKLA — duplicerar /branscher/deponier' },
] as const

// ============================================================
// HELPER: Hämta relaterade sidor för en given path
// ============================================================

export function getRelatedPaths(path: string): string[] {
  const page = siteContentMap.find(p => p.path === path)
  return page?.relatedPaths ?? []
}

export function getPageConfig(path: string): ContentPageConfig | undefined {
  return siteContentMap.find(p => p.path === path)
}
