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
  title: 'Hitta gasläckor vid industrianläggningar – drönarmätning',
  description:
    'Hitta gasläckor vid er industrianläggning med drönarbaserad mätning. Snabb screening som komplement till systematisk läcksökning (LDAR) – utan driftstopp.',
  alternates: { canonical: '/matning/industri' },
  openGraph: {
    title: 'Hitta gasläckor vid industrianläggningar – WashDrone',
    description: 'Drönarbaserad läcksökning vid industrianläggningar som komplement till LDAR-program.',
    url: '/matning/industri',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industriell gasmätning med drönare',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad läcksökning vid industrianläggningar som komplement till systematiska läcksökningsprogram (LDAR).',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Gasmätning',
}

const steps = [
  { title: 'Uppdragsplanering', description: 'Vi identifierar mätområden, relevanta gaser och säkerhetskrav i samråd med er HSE-/driftansvarig.' },
  { title: 'Screening', description: 'Drönaren flyger systematiskt runt processenheter, tankar, ventiler och ledningsstråk och registrerar gashalter med GPS-koppling.' },
  { title: 'Analys & prioritering', description: 'Mätdata bearbetas till en tydlig läckagekarta. Hotspots identifieras, rangordnas och kopplas till specifika komponenter där möjligt.' },
  { title: 'Rapport', description: 'Ni får en rapport med identifierade läckor, prioriteringslista och underlag som kompletterar ert läcksökningsprogram.' },
]

const deliverables = [
  { title: 'Läckagekarta', description: 'GPS-kopplad karta som visar gashalter runt anläggningens processenheter.' },
  { title: 'Hotspot-prioritering', description: 'Rangordnad lista över hittade utsläppskällor baserat på koncentration och position – så att ni vet var ni ska börja.' },
  { title: 'LDAR-komplement', description: 'Rapport formaterad som komplement till ert befintliga läcksökningsprogram med spårbar metodik.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML för integration i anläggningens GIS eller underhållssystem.' },
]

const faqItems = [
  {
    question: 'Hur kompletterar drönarmätning ett befintligt läcksökningsprogram (LDAR)?',
    answer: 'LDAR-program (Leak Detection and Repair) är systematiska läcksökningsprogram som bygger på komponentvisa punktmätningar. Drönarmätning ger en kompletterande, övergripande bild av hela anläggningen och kan snabbt hitta läckor som kan missas mellan regelbundna LDAR-rundor.',
  },
  {
    question: 'Vilka gaser kan mätas vid industrianläggningar?',
    answer: 'Vi mäter alltid metan (CH₄) och kan med anpassad sensorutrustning även mäta andra kolväten. VOC-screening erbjuds som valbart tillägg – vi klargör tillgänglighet och sensorkapacitet vid uppdragsplaneringen.',
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
        title="Hitta gasläckor vid er industrianläggning"
        subtitle="Snabb screening av metanläckor som komplement till ert läcksökningsprogram (LDAR). Heltäckande, säkert och utan driftstopp."
        trustItems={['LDAR-komplement', 'Heltäckande screening', 'Säkerhetsanpassat']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Komplettera ert läcksökningsprogram med drönare</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Industrianläggningar som hanterar processgas – raffinaderier, petrokemi, kemisk industri –
            har komplexa lednings- och processystem där metanläckor kan uppstå vid ventiler,
            flänsförband, packningar och andra kopplingar. Dessa läckor är svåra att hitta med enbart
            manuella metoder och regleras ofta via systematiska läcksökningsprogram (LDAR – Leak
            Detection and Repair).
          </p>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Drönarbaserad gasmätning ger en snabb och heltäckande screening som kompletterar
            den komponentvisa LDAR-metoden. Genom att systematiskt flyga runt anläggningen kan vi
            hitta områden med förhöjda gashalter – och ge er en prioriterad lista att agera på.
          </p>
        </div>
      </section>

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Metan (CH₄) och kolväten</strong> – kopplat till GPS-position runt processenheter.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Rumslig fördelning</strong> – identifiera zoner med förhöjda gashalter snabbt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">VOC-screening</strong> som valbart tillägg (beroende på sensorutrustning).</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Säkerhet</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Flygning vid industrianläggningar kräver noggrann planering. Vi arbetar alltid i
            samråd med anläggningens HSE-organisation och anpassar flygplan, säkerhetsavstånd och
            procedurer efter gällande regler. Våra piloter har relevant certifiering och erfarenhet
            av flygning i industriell miljö.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om industriell gasmätning" />

      <CtaBand
        heading="Vill ni komplettera ert läcksökningsprogram med drönarbaserad screening?"
        description="Boka en genomgång så diskuterar vi hur en mätning kan anpassas efter er anläggning."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/deponi" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponi – metanmätning
            </Link>
            <Link href="/matning/biogas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Biogas – läcksökning
            </Link>
            <Link href="/matning/reningsverk" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Reningsverk – metan & lustgas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
