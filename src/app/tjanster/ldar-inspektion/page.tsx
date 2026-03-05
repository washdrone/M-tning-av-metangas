import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LDAR-inspektion med drönare – läcksökning Sverige | EcoDrone',
  description:
    'LDAR-inspektion i Sverige med drönarbaserad läcksökning. Systematisk detektion av fugitiva utsläpp enligt EU:s metanförordning. Compliance-redo rapporter.',
  alternates: { canonical: '/tjanster/ldar-inspektion' },
  openGraph: {
    title: 'LDAR-inspektion med drönare – läcksökning Sverige | EcoDrone',
    description:
      'Drönarbaserad LDAR-inspektion för systematisk detektion av fugitiva utsläpp. EU-metanförordning, OGI-kamera och kvantifiering.',
    url: '/tjanster/ldar-inspektion',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LDAR-inspektion med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad LDAR-inspektion (Leak Detection and Repair) för systematisk identifiering av fugitiva utsläpp vid industriella anläggningar i Sverige.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'LDAR-inspektion',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är LDAR och varför behövs det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LDAR (Leak Detection and Repair) är ett systematiskt program för att identifiera och åtgärda fugitiva utsläpp vid industriella anläggningar. EU:s metanförordning (2024/1787) kräver att energisektorn implementerar LDAR-program med regelbunden inspektion av komponenter som ventiler, flänsar och kompressorer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur skiljer sig drönarbaserad LDAR från markbunden inspektion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarbaserad LDAR täcker större områden snabbare och kan nå svårtillgängliga komponenter utan ställningsbygge. OGI-kameran på drönaren ger realtidsvisualisering av gasplymer, medan markinspektioner med handhållna detektorer mäter punkt för punkt. Metoderna kompletterar varandra i ett komplett LDAR-program.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka komponenter inspekteras vid LDAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi inspekterar ventiler, flänsar, kompressortätningar, pumpar, öppna tankar, lastningsarmar och rörgenomföringar. Drönaren utrustas med OGI-kamera för visuell detektion och TDLAS-sensor för kvantifiering av identifierade läckor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Uppfyller EcoDrones LDAR-inspektion EU:s metanförordnings krav?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vår metodik är utformad för att uppfylla kraven i EU:s metanförordning (2024/1787) avseende LDAR-program. Vi levererar dokumentation med komponentidentifiering, detektionsgränser, kvantifierade läckflöden och prioriterade åtgärdslistor som är redo för tillsyn.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function LdarInspektionPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'LDAR-inspektion', href: '/tjanster/ldar-inspektion' },
      ]} />

      <Hero
        title="LDAR-inspektion med drönare"
        subtitle="Systematisk läcksökning av fugitiva utsläpp med drönarbaserad LDAR-inspektion. Uppfyll EU:s metanförordning med OGI-visualisering, kvantifiering och compliance-redo dokumentation."
        ctaText="Boka LDAR-inspektion"
        ctaHref="/kontakt"
        trustItems={[
          'EU-metanförordning compliant',
          'OGI + TDLAS kombination',
          'Prioriterad åtgärdslista',
        ]}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">LDAR-inspektion i Sverige – systematisk detektion av fugitiva utsläpp</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Fugitiva utsläpp från ventiler, flänsar, kompressorer och andra komponenter kan stå för
            en betydande del av en anläggnings totala metanutsläpp. LDAR-inspektion (Leak Detection
            and Repair) är den systematiska processen för att identifiera dessa läckor, kvantifiera
            dem och prioritera reparationer.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Med EU:s metanförordning (2024/1787) skärps kraven på regelbunden LDAR inom
            energisektorn. EcoDrone genomför drönarbaserad LDAR-inspektion som kombinerar
            OGI-kamera för visuell detektion med TDLAS-sensorer för kvantifiering – snabbare,
            säkrare och mer heltäckande än enbart markbundna inspektioner.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Så genomför vi LDAR-inspektionen</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Komponentinventering', desc: 'Vi kartlägger era kritiska komponenter – ventiler, flänsar, kompressorer, pumpar och tankar – och planerar inspektionsrutten.' },
              { step: '2', title: 'OGI-screening', desc: 'Drönaren flyger med OGI-kamera (Optical Gas Imaging) och identifierar gasplymer visuellt i realtid. Alla detektioner loggas med GPS-position.' },
              { step: '3', title: 'Kvantifiering', desc: 'Identifierade läckor kvantifieras med TDLAS-sensor eller Hi Flow Sampler. Läckflöden dokumenteras i standardiserade enheter.' },
              { step: '4', title: 'Rapportering', desc: 'Ni får en komplett LDAR-rapport med läcklista, prioritering, kvantifierade flöden och rekommenderade åtgärder – redo för tillsyn och compliance.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Fördelar med drönarbaserad LDAR</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Snabbare genomförande', desc: 'Täck hela anläggningen på en bråkdel av tiden jämfört med enbart markbundna inspektioner.' },
              { title: 'Svårtillgängliga komponenter', desc: 'Nå ventiler och flänsar på höjder, i trånga utrymmen och i riskzoner utan ställningsbygge.' },
              { title: 'Realtids-visualisering', desc: 'OGI-kameran visar gasplymer direkt – operatören ser exakt var läckan sitter under flygningen.' },
              { title: 'Compliance-dokumentation', desc: 'Komplett dokumentation som uppfyller EU:s metanförordning och OGMP 2.0-krav.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Regulatorisk bakgrund</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            EU:s metanförordning (2024/1787) inför bindande krav på LDAR-program för
            energisektorn. Anläggningar ska inspekteras regelbundet, läckor ska kvantifieras
            och repareras inom definierade tidsfrister. Förordningen refererar till OGMP 2.0
            som bästa praxis för mätmetodik.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            I Sverige behöver även verksamheter utanför energisektorn genomföra LDAR som del
            av sin egenkontroll enligt miljöbalken. Drönarbaserad LDAR är ett kostnadseffektivt
            sätt att uppfylla dessa krav och samtidigt minska era faktiska utsläpp.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om LDAR-inspektion" />

      <CtaBand
        heading="Behöver ni genomföra LDAR-inspektion?"
        description="Kontakta oss för planering av en LDAR-inspektion anpassad efter er anläggning och regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/compliance/eu-metanforordning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              EU-metanförordningen
            </Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGMP 2.0
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
