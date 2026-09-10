import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/site-config'
import { blogPosts } from './blogg/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  return [
    // Startsida
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },

    // Tjänster – hubbsida
    { url: `${baseUrl}/tjanster`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tjanster/utslappsmating-dronare`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/metanmatning`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ldar-inspektion`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/ogi-kamera`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tjanster/plymmating`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/vaxthusgasmatning`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/gasdetektion`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/luftkvalitet`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tjanster/leveranser`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tjanster/metodik`, changeFrequency: 'monthly', priority: 0.6 },

    // Branscher – hubbsida
    { url: `${baseUrl}/branscher`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/branscher/deponier`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/biogas`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/reningsverk`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/olja-gas`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/branscher/gruva`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/branscher/hamnar`, changeFrequency: 'monthly', priority: 0.7 },

    // Compliance – hubbsida
    { url: `${baseUrl}/compliance`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/compliance/csrd`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/eu-metanforordning`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/ogmp`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compliance/miljorapportering`, changeFrequency: 'monthly', priority: 0.8 },

    // Blogg – artiklarna hämtas från posts.ts så att sitemap aldrig
    // driftar mot faktiskt publicerade inlägg
    { url: `${baseUrl}/blogg`, changeFrequency: 'weekly', priority: 0.7 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blogg/${post.slug}`,
      lastModified: post.dateModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Övrigt
    { url: `${baseUrl}/ordlista`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/om-oss`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/case`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/integritetspolicy`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
