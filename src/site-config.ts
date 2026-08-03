/**
 * EcoDrone Site Configuration
 *
 * Enda sanningskälla för webbplatsens primära URL.
 *
 * Vercel är konfigurerat att redirecta icke-www → www, vilket innebär att
 * den primära (kanoniska) domänen är https://www.ecodrone.se.
 *
 * Importera SITE_URL härifrån i stället för att hårdkoda URL:er – så
 * säkerställer vi att sitemap, robots, canonical-taggar, OG-taggar och
 * JSON-LD-schema alla pekar på samma domänform.
 */

export const SITE_URL = 'https://www.ecodrone.se' as const

export const SITE_LOGO_URL = `${SITE_URL}/Facicon%20ecodrone.png` as const

/**
 * Sajtgemensam OG-bild (renderas av src/app/opengraph-image.tsx).
 *
 * VIKTIGT: sidor som definierar ett eget `openGraph`-objekt ersätter hela
 * det ärvda objektet – inklusive bilden från fil-konventionen. Därför måste
 * varje sida med eget openGraph inkludera `images: [OG_IMAGE]` explicit.
 */
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'EcoDrone – Drönarbaserad utsläppsmätning av metan och växthusgaser',
} as const

/**
 * Stabila JSON-LD-identiteter (@id) för sajtens entity-graf.
 *
 * Alla scheman som refererar till företaget eller webbplatsen ska använda
 * dessa @id:n så att Google och AI-system kan koppla ihop Organization,
 * WebSite, Service och Article till EN sammanhängande entitet i stället
 * för att tolka varje sida som en ny, fristående organisation.
 */
export const ORG_ID = `${SITE_URL}/#organization` as const
export const WEBSITE_ID = `${SITE_URL}/#website` as const

/**
 * Standardreferens till organisationen för provider/publisher/author-fält.
 * Juridiskt namn används i schema (se contentRules.entityRules i
 * content-config.ts); "EcoDrone" utan tillägg används endast i löptext.
 */
export const ORG_REF = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'EcoDrone Sverige AB',
  url: SITE_URL,
} as const
