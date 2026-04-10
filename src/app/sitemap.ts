import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  // Use a fixed date for lastModified - update this when content changes
  const lastModified = '2026-03-12'

  return [
    // Startsida
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },

    // Tjänster – hubbsida
    { url: `${baseUrl}/tjanster`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tjanster/utslappsmating-dronare`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/metanmatning`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ldar-inspektion`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ogi-kamera`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/plymmating`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/vaxthusgasmatning`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/gasdetektion`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/luftkvalitet`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/leveranser`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tjanster/metodik`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Branscher – hubbsida
    { url: `${baseUrl}/branscher`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/branscher/deponier`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/biogas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/reningsverk`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/olja-gas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/gruva`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/branscher/hamnar`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Compliance – hubbsida
    { url: `${baseUrl}/compliance`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/compliance/csrd`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/eu-metanforordning`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/ogmp`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/miljorapportering`, lastModified, changeFrequency: 'monthly', priority: 0.8 },

    // Blogg
    { url: `${baseUrl}/blogg`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blogg/diffusa-utslapp-guide`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Övrigt
    { url: `${baseUrl}/om-oss`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/case`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integritetspolicy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
