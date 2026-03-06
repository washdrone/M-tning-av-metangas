import type { Metadata } from 'next'
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
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ecodrone.se',
    languages: { 'sv-SE': 'https://ecodrone.se' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
