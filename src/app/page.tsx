import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'WashDrone – Metan- och miljömätning med drönare',
  description:
    'Drönarbaserad gasmätning för deponier, biogasanläggningar, reningsverk och industri. Kartlägg utsläpp och få underlag du kan agera på.',
  alternates: { canonical: '/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WashDrone',
  url: 'https://washdrone.se',
  description:
    'Drönarbaserad metan- och miljömätning. Kartlägg utsläpp och få underlag du kan agera på.',
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

      {/* Hero – cinematic full viewport */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
          <div className="absolute left-1/2 top-1/4 -z-10 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-accent-500/5 blur-[120px]" />
        </div>

        <div className="container-narrow text-center pt-20">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-400">
            Drönarbaserad gasmätning
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
            Synliggör det
            <br />
            <span className="gradient-brand">osynliga</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-300 sm:text-xl">
            Vi flyger drönare med känsliga gassensorer över er anläggning och omvandlar
            osynliga utsläpp till kartunderlag, rapporter och beslutsunderlag som ni
            faktiskt kan agera på.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/matning/kontakt" className="btn-primary">
              Boka genomgång
            </Link>
            <Link href="/matning" className="btn-secondary">
              Utforska mättjänsterna
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px rounded-2xl border border-dark-800 bg-dark-800 sm:grid-cols-4 overflow-hidden">
            {[
              { value: 'CH₄', label: 'Metan' },
              { value: 'N₂O', label: 'Lustgas' },
              { value: 'CO₂', label: 'Koldioxid' },
              { value: 'VOC', label: 'Kolväten' },
            ].map((stat) => (
              <div key={stat.label} className="bg-dark-900/80 px-4 py-5 text-center">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[12px] text-dark-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-padding section-darker">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Mätdata ni kan lita på
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-400 leading-relaxed">
            Sensorn flyger systematiskt med GPS-koppling och registrerar gaskoncentrationer
            med hög noggrannhet. All data bearbetas, kvalitetssäkras och kopplas till
            kartunderlag. Ni får en tydlig bild av var utsläppen finns, hur stora de är
            och vad ni kan göra åt dem.
          </p>
          <Link href="/matning" className="mt-8 inline-flex items-center text-brand-400 font-medium hover:text-brand-300 transition-colors">
            Utforska våra mättjänster
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Use cases overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Deponier', desc: 'Hitta var metanet läcker genom täckskiktet.', href: '/matning/deponi' },
              { title: 'Biogas', desc: 'Hitta och åtgärda metanläckor. Spara gas.', href: '/matning/biogas' },
              { title: 'Reningsverk', desc: 'Mät metan och lustgas från processen.', href: '/matning/reningsverk' },
              { title: 'Industri', desc: 'Snabb screening som komplement till LDAR.', href: '/matning/industri' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-dark p-6 transition-all hover:border-dark-600 hover:bg-dark-800/60"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-400 group-hover:text-brand-300">
                  Läs mer
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-dark-900 to-dark-950" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[100px]" />
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Redo att kartlägga era utsläpp?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dark-300">
            Berätta vad ni behöver mäta. Vi återkommer inom en arbetsdag med ett förslag.
          </p>
          <Link href="/matning/kontakt" className="btn-primary mt-8">
            Boka genomgång
          </Link>
        </div>
      </section>
    </>
  )
}
