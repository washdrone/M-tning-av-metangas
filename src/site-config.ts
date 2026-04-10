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
