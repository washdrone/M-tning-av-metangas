import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://washdrone.se'),
  title: {
    default: 'Metan- och miljömätning med drönare | WashDrone',
    template: '%s | WashDrone',
  },
  description:
    'Kvantifiera utsläpp med drönarbaserad gasmätning. Vi levererar koncentrationskartor, emissionsrapporter och beslutsunderlag för deponier, biogas, reningsverk och industri.',
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'WashDrone',
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
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
