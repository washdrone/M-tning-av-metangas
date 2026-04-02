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
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        {/* Critical inline CSS – ensures dark theme + basic layout renders immediately,
            even if the external Tailwind CSS file is delayed or fails to load */}
        <style dangerouslySetInnerHTML={{ __html: `
          html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;-webkit-text-size-adjust:100%}
          body{margin:0;background:#020617;color:#e2e8f0;font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif}
          h1,h2,h3,h4,h5,h6{color:#fff;font-weight:700;letter-spacing:-0.025em}
          a{color:inherit;text-decoration:none}
          *,::before,::after{box-sizing:border-box}
          svg{flex-shrink:0}
          .hidden{display:none}
          @media(min-width:1024px){.lg\\:flex{display:flex}.lg\\:hidden{display:none}}
          @media(min-width:640px){.sm\\:h-20{height:5rem}.sm\\:pt-\\[calc\\(5rem\\+env\\(safe-area-inset-top\\,0px\\)\\)\\]{padding-top:calc(5rem + env(safe-area-inset-top,0px))}}
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-[calc(4rem+env(safe-area-inset-top,0px))] sm:pt-[calc(5rem+env(safe-area-inset-top,0px))]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
