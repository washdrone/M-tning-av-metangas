import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OGMP 2.0 nivå 4/5 – metanmätning olja & gas | EcoDrone',
  description:
    'OGMP 2.0 nivå 4 och 5 kräver platsspecifika metanmätningar. EcoDrone levererar drönarbaserad mätning som uppfyller OGMP 2.0:s rapporteringskrav för olje- och gassektorn.',
  alternates: { canonical: '/compliance/ogmp' },
  openGraph: {
    title: 'OGMP 2.0 nivå 4/5 – metanmätning olja & gas | EcoDrone',
    description:
      'Uppfyll OGMP 2.0 nivå 4/5 med drönarbaserad metanmätning. Platsspecifika data för olje- och gassektorn.',
    url: '/compliance/ogmp',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'OGMP 2.0 nivå 4/5 – metanmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Information om OGMP 2.0-ramverket och hur drönarbaserad mätning uppfyller nivå 4/5-kraven på platsspecifik metandata.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 (Oil and Gas Methane Partnership 2.0) är ett internationellt ramverk under UNEP för rapportering av metanutsläpp inom olje- och gassektorn. Det definierar fem rapporteringsnivåer med ökande datakvalitet, där nivå 5 representerar platsspecifika mätningar med reconciliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad skiljer nivå 4 och 5 från lägre nivåer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nivå 1-3 baseras på emissionsfaktorer och generiska data. Nivå 4 kräver platsspecifika mätningar av utsläpp. Nivå 5 kräver dessutom reconciliation – att bottom-up-mätningar jämförs med top-down-data (t.ex. plymmätning) för att verifiera totala emissioner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur uppfyller EcoDrones metodik OGMP 2.0 nivå 4/5?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi genomför platsspecifika mätningar med TDLAS-sensor och OGI-kamera (nivå 4) och erbjuder plymmätning med traversmetodik för reconciliation mot bottom-up-data (nivå 5). Alla resultat levereras med dokumenterad mätosäkerhet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är OGMP 2.0 obligatoriskt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 är frivilligt som ramverk, men EU:s metanförordning refererar till det som bästa praxis. Företag som rapporterar enligt OGMP 2.0 nivå 4/5 uppfyller typiskt förordningens krav på datakvalitet och mätmetodik.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function OgmpPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'OGMP 2.0', href: '/compliance/ogmp' },
      ]} />

      <Hero
        title="OGMP 2.0 – nivå 4 och 5"
        subtitle="Oil and Gas Methane Partnership 2.0 sätter standarden för metanrapportering. Nivå 4/5 kräver platsspecifika mätningar – EcoDrone levererar exakt det med drönarbaserad TDLAS och plymmätning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['Nivå 4: platsspecifik mätning', 'Nivå 5: reconciliation', 'UNEP-ramverk']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">OGMP 2.0 – fem nivåer av metanrapportering</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            OGMP 2.0 (Oil and Gas Methane Partnership 2.0) är ett ramverk under UNEP som
            definierar standarder för hur olje- och gasföretag ska mäta och rapportera sina
            metanutsläpp. Ramverket har fem nivåer med ökande datakvalitet och ambitionsnivå.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            EU:s metanförordning refererar till OGMP 2.0 som bästa praxis. Företag som
            når nivå 4/5 uppfyller typiskt förordningens krav och visar branschledande
            transparens i sin metanrapportering.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">De fem rapporteringsnivåerna</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Nivå 1 – Ventilerings- och flakningsfaktorer', desc: 'Grundläggande rapportering baserad på generiska emissionsfaktorer. Lägsta datakvalitet.' },
              { step: '2', title: 'Nivå 2 – Aktivitetsbaserade faktorer', desc: 'Emissionsfaktorer kopplade till specifika utrustningstyper och aktiviteter. Bättre men fortfarande generiskt.' },
              { step: '3', title: 'Nivå 3 – Generiska platsspecifika data', desc: 'Platsspecifik information om utrustning och processer, men med generiska emissionsfaktorer.' },
              { step: '4', title: 'Nivå 4 – Platsspecifika mätningar', desc: 'Faktiska mätningar vid anläggningen med LDAR, OGI och kvantifiering. Detta är vad EcoDrone levererar.' },
              { step: '5', title: 'Nivå 5 – Reconciliation', desc: 'Nivå 4 plus top-down-verifiering. Bottom-up-data (komponentmätningar) jämförs med top-down-data (plymmätning av totala emissioner).' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-dark-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">EcoDrone och OGMP 2.0 nivå 4/5</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR med OGI och TDLAS', desc: 'Komponentvis inspektion med visuell detektion (OGI) och kvantifiering (TDLAS) – kärnan i nivå 4-data.' },
              { title: 'Plymmätning', desc: 'Traversmätning nedvinds för kvantifiering av totala anläggningsemissioner – underlag för nivå 5 reconciliation.' },
              { title: 'Dokumenterad mätosäkerhet', desc: 'Varje mätvärde levereras med osäkerhetsanalys enligt OGMP 2.0:s krav på datatransparens.' },
              { title: 'Spårbar metodik', desc: 'Kalibreringsintyg, flygloggar och bearbetningsparametrar dokumenteras för fullständig spårbarhet.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om OGMP 2.0" />

      <CtaBand
        heading="Vill ni nå OGMP 2.0 nivå 4/5?"
        description="Kontakta oss för att diskutera hur vi kan leverera de mätdata ni behöver för att uppfylla OGMP 2.0:s rapporteringskrav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/compliance/eu-metanforordning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              EU:s metanförordning
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/plymmating" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Plymmätning
            </Link>
            <Link href="/branscher/olja-gas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Olja, gas & raffinaderier
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
