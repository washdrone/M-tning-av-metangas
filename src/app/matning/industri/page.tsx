import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ProcessSteps } from '@/components/ProcessSteps'
import { DeliverablesList } from '@/components/DeliverablesList'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industriell gasmätning med drönare – LDAR-komplement',
  description:
    'Drönarbaserad gasmätning som komplement till LDAR-program. Effektiv screening av fugitiva emissioner vid raffinaderier, kemisk industri och petrokemiska anläggningar.',
  alternates: { canonical: '/matning/industri' },
  openGraph: {
    title: 'Industriell gasmätning med drönare – WashDrone',
    description: 'Effektiv screening av fugitiva emissioner med drönarbaserad gasmätning.',
    url: '/matning/industri',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industriell gasmätning med drönare',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad gasmätning som komplement till LDAR-program för industriella anläggningar.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Gasmätning',
}

const steps = [
  { title: 'Uppdragsplanering', description: 'Vi identifierar mätområden, relevanta gaser och säkerhetskrav i samråd med er HSE-/driftansvarig.' },
  { title: 'Screening', description: 'Drönaren flyger systematiskt runt processenheter, tankar, ventiler och ledningsstråk och registrerar gaskoncentrationer.' },
  { title: 'Analys & prioritering', description: 'Data bearbetas till en läckagekarta. Hotspots identifieras, rangordnas och kopplas till specifika komponenter där möjligt.' },
  { title: 'Rapport', description: 'Ni får en rapport med identifierade källor, prioriteringslista och underlag som kompletterar ert LDAR-program.' },
]

const deliverables = [
  { title: 'Läckagekarta', description: 'Georefererad karta som visar gaskoncentrationsnivåer runt anläggningens processenheter.' },
  { title: 'Hotspot-prioritering', description: 'Rangordnad lista över identifierade emissionskällor baserat på koncentrationsnivå och position.' },
  { title: 'LDAR-komplement', description: 'Rapport formaterad som komplement till ert befintliga LDAR-program med spårbar metodik.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML för integration i anläggningens GIS eller underhållssystem.' },
]

const faqItems = [
  {
    question: 'Hur kompletterar drönarmätning ett befintligt LDAR-program?',
    answer: 'LDAR-program bygger typiskt på komponentvisa punktmätningar (OGI eller sniffers). Drönarmätning ger en kompletterande, övergripande bild av hela anläggningen och kan snabbt identifiera utsläppskällor som kan missas mellan regelbundna LDAR-rundor.',
  },
  {
    question: 'Vilka gaser kan mätas vid industrianläggningar?',
    answer: 'Primärt mäter vi metan (CH₄) och kan med anpassad sensorutrustning även mäta andra kolväten (VOC). Specifika gaser som H₂S eller bensen kan vara möjliga som valbart tillägg – detta klargörs vid uppdragsplaneringen.',
  },
  {
    question: 'Hur hanteras säkerhet vid flygning nära processutrustning?',
    answer: 'Vi följer anläggningens säkerhetsregler och arbetar alltid i dialog med HSE-ansvarig. Drönarna flygs av certifierade piloter och flygning sker med säkerhetsavstånd anpassade till aktuell anläggning och zon.',
  },
  {
    question: 'Kan mätningen göras utan att stoppa produktionen?',
    answer: 'Ja. Drönaren opererar utanför processutrustning och kräver ingen nerstängning. Vi planerar flygningen för att minimera påverkan på pågående drift.',
  },
]

export default function IndustriPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Industri', href: '/matning/industri' },
      ]} />

      <Hero
        title="Industriell gasmätning med drönare"
        subtitle="Effektiv screening av fugitiva emissioner som komplement till ert LDAR-program. Snabbt, säkert och utan driftstopp."
        trustItems={['LDAR-komplement', 'Heltäckande screening', 'Säkerhetsanpassat']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">LDAR-komplement med drönare</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Industriella anläggningar med processgas – raffinaderier, petrokemi, kemisk industri –
            hanterar stora volymer kolväten genom komplexa lednings- och processystem. Fugitiva
            emissioner (oavsiktliga läckor från ventiler, flänsförband, packningar etc.) är en
            betydande utsläppskälla och regleras via LDAR-program (Leak Detection and Repair).
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Drönarbaserad gasmätning erbjuder en snabb och övergripande screening som kompletterar
            den komponentvisa LDAR-metoden. Genom att systematiskt flyga runt anläggningen kan vi
            identifiera områden med förhöjda koncentrationer – och ge er en prioriterad lista att
            agera på.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Metan (CH₄)</strong> och kolväten – kopplat till GPS-position runt processenheter.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Spatial fördelning</strong> – identifiera zoner med förhöjda koncentrationer snabbt.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>VOC-screening</strong> som valbart tillägg (beroende på sensorutrustning).</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Säkerhet</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Flygning vid industrianläggningar kräver noggrann planering. Vi arbetar alltid i
            samråd med anläggningens HSE-organisation och anpassar flygplan, säkerhetsavstånd och
            procedurer efter gällande regler. Våra piloter har relevant certifiering och erfarenhet
            av flygning i industriell miljö.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om industriell gasmätning" />

      <CtaBand
        heading="Vill ni komplettera ert LDAR-program med drönarbaserad screening?"
        description="Boka en genomgång så diskuterar vi hur en mätning kan anpassas efter er anläggning."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/deponi" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Deponi – metanmätning
            </Link>
            <Link href="/matning/biogas" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Biogas – läcksökning
            </Link>
            <Link href="/matning/reningsverk" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Reningsverk – processemissioner
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
