import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecodrone.se'
  const now = new Date().toISOString()

  return [
    // Startsida
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },

    // Tjänster
    { url: `${baseUrl}/tjanster`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tjanster/utslappsmating-dronare`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/metanmatning`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ldar-inspektion`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ogi-kamera`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/plymmating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/vaxthusgasmatning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/gasdetektion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/leveranser`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tjanster/metodik`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Branscher
    { url: `${baseUrl}/branscher`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/branscher/deponier`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/biogas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/reningsverk`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/olja-gas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/gruva`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/branscher/hamnar`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Compliance
    { url: `${baseUrl}/compliance`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/compliance/csrd`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/eu-metanforordning`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/ogmp`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/miljorapportering`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Övrigt
    { url: `${baseUrl}/om-oss`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/case`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integritetspolicy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
