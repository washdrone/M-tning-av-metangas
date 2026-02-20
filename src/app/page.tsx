import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'WashDrone – Metan- och miljömätning med drönare',
  description:
    'Drönarbaserad gasmätning för deponier, biogasanläggningar, reningsverk och industri. Kvantifiera utsläpp och få tillförlitliga beslutsunderlag.',
  alternates: { canonical: '/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WashDrone',
  url: 'https://washdrone.se',
  description:
    'Drönarbaserad metan- och miljömätning. Kvantifiera utsläpp, säkra compliance och fatta bättre beslut.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@washdrone.se',
    availableLanguage: 'Swedish',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Drönarbaserad metan- och miljömätning
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Vi kvantifierar gasemissioner från luften – och levererar kartunderlag, rapporter och
            beslutsunderlag som håller för tillsyn och klimatredovisning.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/matning/kontakt" className="btn-primary">
              Boka genomgång
            </Link>
            <Link href="/matning" className="btn-secondary">
              Se våra mättjänster
            </Link>
          </div>
        </div>
      </section>

      {/* Short intro */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Mätdata du kan lita på
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Våra drönarburna sensorer samlar in georefererade gaskoncentrationsdata
            som bearbetas, kvalitetssäkras och levereras som färdiga underlag.
            Resultatet: tydligare bild av era emissioner, bättre beslut och
            starkare compliance.
          </p>
          <Link href="/matning" className="mt-6 inline-block text-brand-700 font-medium hover:text-brand-800">
            Läs mer om våra mättjänster →
          </Link>
        </div>
      </section>
    </>
  )
}
