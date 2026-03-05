import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU:s metanförordning – LDAR-krav | EcoDrone',
  description:
    'EU:s metanförordning (2024/1787) ställer nya LDAR-krav på energisektorn. Regelbunden inspektion, kvantifiering och rapportering. EcoDrone hjälper er uppfylla kraven.',
  alternates: { canonical: '/compliance/eu-metanforordning' },
  openGraph: {
    title: 'EU:s metanförordning – LDAR-krav | EcoDrone',
    description:
      'EU-metanförordningen kräver LDAR-program för energisektorn. EcoDrone levererar drönarbaserad inspektion och compliance-rapportering.',
    url: '/compliance/eu-metanforordning',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'EU:s metanförordning – LDAR-krav',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Information om EU:s metanförordning (2024/1787) och dess krav på LDAR-program, emissionsrapportering och minskning av metanutsläpp.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kräver EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen kräver att operatörer inom olje-, gas- och kolsektorn implementerar LDAR-program med regelbundna inspektioner, kvantifierar identifierade läckor och reparerar dem inom definierade tidsfrister. Dessutom ställs krav på emissionsrapportering och förbud mot rutinmässig ventilering och flakning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka verksamheter omfattas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen gäller primärt olje- och gasproduktion, bearbetning, transport, lagring och distribution samt kolgruvor. LNG-terminaler, kompressorstationer och rörledningar omfattas. I Sverige berörs bland annat raffinaderier, LNG-anläggningar och naturgasnät.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta ska LDAR-inspektioner genomföras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inspektionsfrekvensen beror på komponenttyp och anläggning. Förordningen anger specifika intervall – från kvartalsvis till årlig inspektion beroende på komponentens risk och historik. Detaljerade krav specificeras i förordningens bilagor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur kopplar förordningen till OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen refererar till OGMP 2.0 som bästa praxis för mätning och rapportering av metanutsläpp. OGMP 2.0 nivå 4/5 med platsspecifika mätningar uppfyller förordningens krav på datakvalitet.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function EuMetanforordningPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'EU:s metanförordning', href: '/compliance/eu-metanforordning' },
      ]} />

      <Hero
        title="EU:s metanförordning"
        subtitle="Förordning (EU) 2024/1787 inför bindande krav på LDAR-program, emissionsrapportering och förbud mot rutinmässig ventilering för energisektorn. EcoDrone hjälper er uppfylla kraven med drönarbaserad inspektion."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['LDAR-krav', 'Kvantifieringskrav', 'Reparationstidsfrister']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">EU:s metanförordning och LDAR-krav</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            EU:s metanförordning (2024/1787) är det första EU-regelverket som specifikt
            reglerar metanutsläpp. Förordningen trädde i kraft 2024 och ställer bindande
            krav på operatörer inom olje-, gas- och kolsektorn att implementera
            LDAR-program (Leak Detection and Repair) med regelbundna inspektioner.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Identifierade läckor ska kvantifieras och repareras inom definierade tidsfrister.
            Rutinmässig ventilering och flakning förbjuds med begränsade undantag.
            Operatörer ska även rapportera sina metanutsläpp till behöriga myndigheter.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Huvudkrav i förordningen</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-program', desc: 'Systematisk inspektion av komponenter (ventiler, flänsar, kompressorer etc.) med definierade intervall och dokumenterade metoder.' },
              { title: 'Kvantifiering av läckor', desc: 'Identifierade läckor ska kvantifieras med godkända metoder. EcoDrone kombinerar OGI-detektion med TDLAS-kvantifiering.' },
              { title: 'Reparationstidsfrister', desc: 'Läckor ska repareras inom fastställda tidsfrister beroende på läckans storlek. Uppföljningsinspektion krävs efter reparation.' },
              { title: 'Emissionsrapportering', desc: 'Operatörer ska rapportera metanutsläpp till behöriga myndigheter. Mätdata ska uppfylla definierade kvalitetskrav.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Berörda verksamheter i Sverige</h2>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'Raffinaderier och oljedepåer',
              'LNG-terminaler och förgasningsanläggningar',
              'Naturgasnät och kompressorstationer',
              'Underjordiska gaslager',
              'Import och export av fossila bränslen',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Så hjälper EcoDrone er</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            EcoDrone genomför drönarbaserad LDAR-inspektion som uppfyller förordningens
            krav. Vi kombinerar OGI-kamera för visuell detektion med TDLAS-sensor för
            kvantifiering, dokumenterar varje inspektion med GPS-positioner och levererar
            compliance-redo rapporter med läcklistor, kvantifierade flöden och
            prioriterade åtgärder.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om EU:s metanförordning" />

      <CtaBand
        heading="Berörs ni av EU:s metanförordning?"
        description="Kontakta oss för en genomgång av förordningens krav och hur vi hjälper er implementera ett LDAR-program."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGMP 2.0
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
