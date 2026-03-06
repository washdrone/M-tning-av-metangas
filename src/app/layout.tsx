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
  },
  robots: {
    index: true,
    follow: true,
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
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
