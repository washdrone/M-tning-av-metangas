import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { ProcessSteps } from '@/components/ProcessSteps'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Metan- och miljömätning med drönare',
  description:
    'Drönarbaserad gasmätning för deponier, biogas, reningsverk och industri. Kartlägg utsläpp med drönare och få underlag ni kan agera på.',
  alternates: { canonical: '/matning' },
  openGraph: {
    title: 'Metan- och miljömätning med drönare – WashDrone',
    description:
      'Kartlägg utsläpp med drönare. Koncentrationskartor, rapporter och beslutsunderlag för deponier, biogas, reningsverk och industri.',
    url: '/matning',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metan- och miljömätning med drönare',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad gasmätning med leverans av koncentrationskartor, emissionsrapporter och beslutsunderlag.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  {
    title: 'Planering',
    description: 'Vi planerar flygvägar och mätprotokoll utifrån ert område och era frågeställningar.',
  },
  {
    title: 'Datainsamling',
    description: 'Drönaren flyger systematiskt och samlar in gaskoncentrationer med GPS-koppling.',
  },
  {
    title: 'Bearbetning & QA',
    description: 'Data kvalitetssäkras, kopplas till kartunderlag och mätosäkerhet dokumenteras.',
  },
  {
    title: 'Leverans',
    description: 'Ni får rapport, kartor och digitala lager – redo för beslut eller tillsyn.',
  },
]

function GasIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  )
}

function IndustryIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  )
}

function WaterIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function FactoryIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
}

export default function MatningHub() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
      ]} />

      <Hero
        title="Metan- och miljömätning med drönare"
        subtitle="Vi flyger känsliga gassensorer över ert område och levererar kartor, rapporter och beslutsunderlag som visar exakt var utsläppen finns."
        secondaryCtaText="Så fungerar det"
        secondaryCtaHref="#tjanster"
        trustItems={[
          'Georefererad data',
          'Dokumenterad mätosäkerhet',
          'Digitala kartlager',
        ]}
      />

      {/* Tjänster */}
      <section id="tjanster" className="section-padding">
        <div className="container-wide">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Våra mättjänster</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-400">
            Vi mäter gasemissioner med drönare inom fyra områden. Gemensamt: systematisk
            datainsamling, kvalitetssäkring och leverans av underlag ni kan agera på.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Deponi & avfall"
              description="Hitta var metanet läcker genom täckskiktet. Underlag för tillsyn, klimatrapportering och åtgärdsplanering."
              href="/matning/deponi"
              icon={<GasIcon />}
            />
            <ServiceCard
              title="Biogas"
              description="Hitta metanläckor vid er anläggning. Varje procent ni hittar och tätar innebär mer gas in i produktionen."
              href="/matning/biogas"
              icon={<IndustryIcon />}
            />
            <ServiceCard
              title="Reningsverk"
              description="Mät metan och lustgas från biologiska processer. Stärk ert klimatbokslut med faktiska mätvärden istället för schabloner."
              href="/matning/reningsverk"
              icon={<WaterIcon />}
            />
            <ServiceCard
              title="Industri & LDAR"
              description="Snabb screening av fugitiva emissioner som komplement till ert befintliga LDAR-program. Effektivt och utan driftstopp."
              href="/matning/industri"
              icon={<FactoryIcon />}
            />
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      {/* Varför drönarmätning */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Varför mäta med drönare?</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Snabbare',
                desc: 'Stora ytor mäts på timmar. Mätresultat samma vecka istället för efter veckor av markbunden mätning.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'Säkrare',
                desc: 'Ingen personal på farliga ytor eller i riskzoner. Mätningen sker kontaktfritt från luften.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Bättre upplösning',
                desc: 'Hög rumslig upplösning gör det möjligt att identifiera enskilda läckor – inte bara totala utsläpp.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-400">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Redo att kartlägga era emissioner?"
        description="Boka en kostnadsfri genomgång. Vi diskuterar ert behov och hur en mätning kan se ut."
      />
    </>
  )
}
