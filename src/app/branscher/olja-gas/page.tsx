import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LDAR olja & gas – gasdetektion raffinaderi | EcoDrone',
  description:
    'LDAR-inspektion och gasdetektion för olje- och gasindustrin i Sverige. Raffinaderier, terminaler och rörledningar. OGMP 2.0-kompatibel rapportering.',
  alternates: { canonical: '/branscher/olja-gas' },
  openGraph: {
    title: 'LDAR olja & gas – gasdetektion raffinaderi | EcoDrone',
    description:
      'Drönarbaserad LDAR och gasdetektion för raffinaderier, olje- och gasanläggningar. OGMP 2.0 och EU-metanförordning.',
    url: '/branscher/olja-gas',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emissionsmätning för olja och gas',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad LDAR-inspektion och gasdetektion vid raffinaderier, terminaler och rörledningar. OGMP 2.0-kompatibel metodik.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'LDAR olja och gas',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka krav ställer EU:s metanförordning på olje- och gassektorn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning (2024/1787) kräver att olje- och gasanläggningar implementerar LDAR-program med regelbundna inspektioner, kvantifiering av läckor och reparation inom fastställda tidsfrister. Förordningen refererar till OGMP 2.0 som riktlinje för bästa mätpraxis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad innebär OGMP 2.0 för mätrapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 (Oil and Gas Methane Partnership) definierar fem rapporteringsnivåer. Nivå 4 och 5 kräver platsspecifika mätningar istället för schabloner. EcoDrones mätmetodik är utformad för att leverera data som uppfyller nivå 4/5-kraven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni inspektera raffinaderier med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi genomför OGI-inspektion och LDAR vid raffinaderier med drönare utrustad med OGI-kamera och TDLAS-sensor. Drönaren når kolonner, facklor och rörledningar på höjd utan ställningsbygge, vilket sparar tid och ökar säkerheten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser detekteras vid raffinaderier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi detekterar metan och andra kolväten med OGI och TDLAS, VOC med PID-sensor, samt H₂S med elektrokemisk sensor. Sensoruppsättningen anpassas efter anläggningens processer och de gaser som är relevanta.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function OljaGasPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Olja, gas & raffinaderier', href: '/branscher/olja-gas' },
      ]} />

      <Hero
        title="Olja, gas och raffinaderier"
        subtitle="LDAR-inspektion och gasdetektion vid raffinaderier, terminaler och rörledningar med drönare. Uppfyll EU:s metanförordning och OGMP 2.0 med verifierade mätdata."
        ctaText="Boka inspektion"
        ctaHref="/kontakt"
        trustItems={['LDAR-inspektion', 'OGMP 2.0 nivå 4/5', 'EU-metanförordning']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">LDAR och gasdetektion för olje- och gassektorn</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Olje- och gasindustrin står inför skärpta krav på metanövervakning genom EU:s
            metanförordning (2024/1787). Raffinaderier, kompressorstationer, lagringsterminaler
            och rörledningar ska inspekteras regelbundet med LDAR-program. Fugitiva utsläpp
            från ventiler, flänsar och kompressorer ska identifieras, kvantifieras och åtgärdas.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            EcoDrone genomför drönarbaserad LDAR-inspektion med OGI-kamera och TDLAS-sensor
            som kombinerar visuell läckdetektion med kvantifiering. Resultaten dokumenteras
            i rapporter som uppfyller OGMP 2.0 nivå 4/5-krav och är redo för tillsyn.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tjänster för olja och gas</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-inspektion', desc: 'Systematisk inspektion av ventiler, flänsar, kompressorer och tankar med OGI-kamera och kvantifiering av identifierade läckor.' },
              { title: 'OGI-screening', desc: 'Snabb visuell screening av hela anläggningen med infraröd kamera. Identifiera läckor i realtid utan driftstopp.' },
              { title: 'Plymmätning', desc: 'Kvantifiering av totala anläggningsemissioner genom traversmätning nedvinds. Stöd för OGMP 2.0 nivå 5-rapportering.' },
              { title: 'VOC-screening', desc: 'Detektion av flyktiga organiska föreningar vid lagringstankar, lastning och processenheter med PID-sensor.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Regulatoriskt landskap</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'EU:s metanförordning (2024/1787)', text: '– bindande LDAR-krav med definierade inspektionsintervall och reparationstidsfrister för energisektorn.' },
              { bold: 'OGMP 2.0', text: '– branschramverk med fem rapporteringsnivåer. Nivå 4/5 kräver platsspecifika mätningar – precis det EcoDrone levererar.' },
              { bold: 'Miljöbalken', text: '– svensk egenkontroll och tillståndsvillkor som kan kräva regelbunden emissionsövervakning.' },
              { bold: 'CSRD/ESRS E1', text: '– Scope 1-rapportering av metanutsläpp för företag som omfattas av CSRD.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om LDAR för olja och gas" />

      <CtaBand
        heading="Behöver ni LDAR-inspektion eller gasdetektion?"
        description="Kontakta oss för planering av en inspektion anpassad efter er anläggning och regulatoriska krav."
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
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGMP 2.0
            </Link>
            <Link href="/compliance/eu-metanforordning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              EU-metanförordningen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
