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
  title: 'Hitta metanläckor vid biogasanläggningar – mätning med drönare',
  description:
    'Hitta och åtgärda metanläckor vid er biogasanläggning med drönarbaserad gasmätning. Studier visar att 1–5 % av produktionen kan läcka ut. Minska förluster och stärk er miljöredovisning.',
  alternates: { canonical: '/matning/biogas' },
  openGraph: {
    title: 'Hitta metanläckor vid biogasanläggningar – drönarmätning | WashDrone',
    description: 'Drönarbaserad läcksökning och kvantifiering av metanförluster vid biogasanläggningar.',
    url: '/matning/biogas',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metanmätning för biogasanläggningar',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad läcksökning och kvantifiering av metanförluster vid biogasanläggningar.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  { title: 'Kartläggning', description: 'Vi går igenom er anläggning tillsammans och identifierar var det är mest troligt att läckor uppstår – rötkammare, gaslager, uppgradering, ledningar.' },
  { title: 'Flygning & mätning', description: 'Drönaren flyger runt och över anläggningen och mäter metanhalten med hög noggrannhet – utan att störa driften.' },
  { title: 'Analys', description: 'Mätdata omvandlas till en tydlig karta som visar var det läcker. Varje läcka kvantifieras och prioriteras.' },
  { title: 'Rapport & åtgärdsförslag', description: 'Ni får en rapport med alla läckagepunkter, uppskattade förluster i procent av produktion och konkreta åtgärdsförslag.' },
]

const deliverables = [
  { title: 'Läckagekarta', description: 'GPS-kopplad karta som visar exakt var förhöjda metanhalter uppmätts runt er anläggning.' },
  { title: 'Kvantifierad förlust', description: 'Uppskattning av hur mycket metan som läcker ut per källa – uttryckt så att ni direkt ser vad det kostar.' },
  { title: 'Åtgärdslista', description: 'Prioriterad lista över hittade läckor med rekommenderad hantering, så att ni vet var ni ska börja.' },
  { title: 'Mätrapport', description: 'Komplett rapport med metod, mätosäkerhet och resultat – redo att användas för egenkontroll och uppföljning.' },
]

const faqItems = [
  {
    question: 'Hur skiljer sig drönarmätning från traditionell läcksökning?',
    answer: 'Traditionell läcksökning med handhållna instrument kräver att någon fysiskt går runt och mäter punkt för punkt – det tar tid och missar lätt ställen som är svåra att nå. Drönarmätning ger en heltäckande bild av hela anläggningen på kort tid, inklusive tak på rötkammare och gaslager.',
  },
  {
    question: 'Kan mätningen göras utan att störa produktionen?',
    answer: 'Ja. Drönaren flyger ovanför anläggningen och behöver aldrig komma in i processenheter. Mätningen sker helt utan avbrott i er drift.',
  },
  {
    question: 'Hur stora metanläckor är vanliga vid biogasanläggningar?',
    answer: 'Studier visar att metanläckor typiskt motsvarar 1–5 % av produktionen, men kan vara betydligt större om läckor gått oupptäckta. Varje procent som läcker ut innebär både förlorad energi (som aldrig når uppgraderingen) och onödiga växthusgasutsläpp.',
  },
]

export default function BiogasPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Biogas', href: '/matning/biogas' },
      ]} />

      <Hero
        title="Hitta metanläckor vid er biogasanläggning"
        subtitle="Studier visar att 1–5 % av biogasproduktionen kan läcka ut. Med drönarmätning hittar vi var det läcker – snabbt, heltäckande och utan driftstopp."
        trustItems={['Heltäckande läcksökning', 'Kvantifierade förluster', 'Ingen driftstörning']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Problemet</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Metanläckor vid biogasanläggningar innebär dubbla förluster: gas som aldrig når
            uppgraderingen och onödiga klimatutsläpp som försämrar er miljöredovisning. Läckorna
            uppstår ofta vid kopplingar, ventiler, tätningar och membrantak – platser som är svåra
            att nå och kontrollera från marken.
          </p>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Med drönarmätning får ni en snabb och heltäckande bild av var metanet läcker. Resultatet
            ger er ett tydligt underlag för att prioritera tätningsåtgärder – och ni kan följa upp
            effekten vid nästa mätning.
          </p>
        </div>
      </section>

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Metanhalt (CH₄)</strong> runt rötkammare, gaslager, uppgradering och ledningar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Rumslig fördelning</strong> – en karta som visar exakt var förhöjda halter finns.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Uppskattad förlust</strong> per hittad läcka (där mätförutsättningarna tillåter).</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Ekonomisk nytta</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Varje metanläcka som hittas och åtgärdas innebär direkt ökad biogasproduktion. Det
            handlar om konkreta besparingar: mer gas till uppgradering, lägre utsläpp per producerad
            enhet och bättre underlag för er egenkontroll. Ofta betalar mätningen sig redan vid
            första åtgärdade läckan.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om biogasmätning" />

      <CtaBand
        heading="Vill ni hitta och åtgärda metanläckor vid er anläggning?"
        description="Boka en genomgång så diskuterar vi hur en mätning kan se ut för just er."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/deponi" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponi – metanmätning
            </Link>
            <Link href="/matning/reningsverk" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Reningsverk – metan & lustgas
            </Link>
            <Link href="/matning/industri" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Industri – läcksökning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
