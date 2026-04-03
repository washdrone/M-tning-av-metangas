import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://ecodrone.se'),
  title: {
    default: 'Drönarbaserad utsläppsmätning för industri | EcoDrone',
    template: '%s | EcoDrone',
  },
  description:
    'EcoDrone erbjuder drönarbaserad mätning av metan, lustgas och växthusgaser för deponier, biogas, reningsverk och industri. CSRD-redo utsläppsdata och LDAR-inspektioner.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'EcoDrone',
    url: 'https://ecodrone.se',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoDrone – Drönarbaserad utsläppsmätning',
    description:
      'Drönarbaserad mätning av metan och växthusgaser för CSRD, LDAR och ESG-rapportering.',
  },
  icons: {
    icon: '/Facicon ecodrone.png',
    apple: '/Facicon ecodrone.png',
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
  alternates: {
    canonical: 'https://ecodrone.se',
    languages: { 'sv-SE': 'https://ecodrone.se' },
  },
  verification: {},
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // Fix M3
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        {/* Critical inline CSS – ensures dark theme renders immediately */}
        <style dangerouslySetInnerHTML={{ __html: `
          html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}
          body{margin:0;background:#020617;color:#cbd5e1;font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif}
          h1,h2,h3,h4,h5,h6{color:#fff;font-weight:700;letter-spacing:-0.025em}
          a{color:inherit;text-decoration:none}
          *,::before,::after{box-sizing:border-box}
          svg{flex-shrink:0}
          .hidden{display:none}
          @media(min-width:1024px){.lg\\:flex{display:flex}.lg\\:hidden{display:none}}
        `}} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-[100dvh] flex-col">
        <Header />
        {/* Fix C3: Header offset via CSS variable */}
        <main className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
