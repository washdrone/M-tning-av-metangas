import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, WEBSITE_ID, ORG_REF } from '@/site-config'

// Self-hostade fonter via next/font: eliminerar render-blockerande extern
// CSS + två tredjepartsanslutningar och ger automatisk fallback-justering
// (size-adjust) som minimerar CLS vid fontswap.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false,
  weight: ['400', '500', '600'],
})

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'EcoDrone',
  url: SITE_URL,
  description: 'Drönarbaserad utsläppsmätning av metan och växthusgaser för industri och compliance.',
  inLanguage: 'sv-SE',
  publisher: ORG_REF,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Drönarbaserad utsläppsmätning för industri | EcoDrone',
    template: '%s | EcoDrone',
  },
  description:
    'EcoDrone erbjuder drönarbaserad mätning av metan, lustgas och växthusgaser för deponier, biogas, reningsverk och industri. Mätunderlag för kontroll, läcksökning och uppföljning.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'EcoDrone',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoDrone – Drönarbaserad utsläppsmätning',
    description:
      'Drönarbaserad mätning av metan och växthusgaser för CSRD, LDAR och ESG-rapportering.',
  },
  icons: {
    icon: { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
    apple: { url: '/icons/apple-touch-icon-180.png', sizes: '180x180', type: 'image/png' },
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // OBS: ingen global canonical här. Varje sida sätter sin egen
  // self-canonical – en global canonical mot startsidan skulle ge
  // "Alternate page with canonical" i Search Console för varje ny
  // sida som glömmer sätta en egen.
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
  viewportFit: 'cover', // Fix M3
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Critical inline CSS – ensures the light theme renders immediately */}
        <style dangerouslySetInnerHTML={{ __html: `
          html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;-webkit-text-size-adjust:100%}
          body{margin:0;background:#ffffff;color:#334155;font-family:var(--font-inter),system-ui,-apple-system,'Segoe UI',sans-serif}
          h1,h2,h3,h4,h5,h6{color:#0f172a;font-weight:700;letter-spacing:-0.025em}
          a{color:inherit;text-decoration:none}
          *,::before,::after{box-sizing:border-box}
          svg{flex-shrink:0}
          .hidden{display:none}
          @media(min-width:1280px){.xl\\:flex{display:flex}.xl\\:hidden{display:none}}
          @media(min-width:1024px){.lg\\:flex{display:flex}.lg\\:hidden{display:none}}
        `}} />
      </head>
      <body className="flex min-h-[100dvh] flex-col">
        <JsonLd data={websiteSchema} />
        <a href="#main-content" className="skip-link">Hoppa till innehållet</a>
        <Header />
        {/* Fix C3: Header offset via CSS variable */}
        <main id="main-content" tabIndex={-1} className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
