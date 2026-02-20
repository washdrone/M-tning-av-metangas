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
  title: 'Emissionsmätning biogas – läcksökning med drönare',
  description:
    'Identifiera och kvantifiera metanläckor vid biogasanläggningar med drönarbaserad gasmätning. Minska förluster, uppfyll egenkontrollkrav och optimera er produktion.',
  alternates: { canonical: '/matning/biogas' },
  openGraph: {
    title: 'Emissionsmätning biogas – läcksökning med drönare | WashDrone',
    description: 'Drönarbaserad läcksökning och emissionskvantifiering för biogasanläggningar.',
    url: '/matning/biogas',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emissionsmätning för biogasanläggningar',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad läcksökning och emissionskvantifiering för biogasanläggningar.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  { title: 'Kartläggning', description: 'Vi identifierar relevanta mätpunkter tillsammans med er: rötkammare, gaslager, uppgraderingsanläggning, ledningsstråk.' },
  { title: 'Flygning & mätning', description: 'Drönaren flyger runt och över anläggningen och registrerar metankoncentrationer med hög rumslig upplösning.' },
  { title: 'Analys', description: 'Data bearbetas till läckagekartor. Identifierade läckor kvantifieras och prioriteras.' },
  { title: 'Rapport & åtgärdsförslag', description: 'Ni får en tydlig rapport med läckagepunkter, uppskattade förluster och rekommenderade åtgärder.' },
]

const deliverables = [
  { title: 'Läckagekarta', description: 'Georefererad karta som visar var förhöjda metankoncentrationer uppmätts runt anläggningen.' },
  { title: 'Kvantifierad förlust', description: 'Uppskattning av metanförlust per identifierad källa (där data och metod medger det).' },
  { title: 'Åtgärdslista', description: 'Prioriterad lista över identifierade läckor med rekommenderad hantering.' },
  { title: 'Emissionsrapport', description: 'Fullständig rapport med metodik, mätosäkerhet och resultat – redo för egenkontroll och uppföljning.' },
]

const faqItems = [
  {
    question: 'Hur skiljer sig drönarmätning från traditionell läcksökning?',
    answer: 'Traditionell läcksökning med handhållna instrument (t.ex. FID/PID) är punktvis och tidskrävande. Drönarmätning ger en heltäckande bild av hela anläggningen på kort tid, inklusive svåråtkomliga ytor som tak på rötkammare och gaslager.',
  },
  {
    question: 'Kan mätningen göras utan att störa produktionen?',
    answer: 'Ja. Drönaren opererar ovanför anläggningen och kräver ingen fysisk åtkomst till processenheter. Mätningen sker utan avbrott i driften.',
  },
  {
    question: 'Hur stora metanförluster är vanliga vid biogasanläggningar?',
    answer: 'Studier visar att metanförluster typiskt ligger på 1–5 % av produktionen, men kan vara betydligt högre vid oupptäckta läckor. Varje procent förlorad metan innebär både förlorad energi och ökade växthusgasutsläpp.',
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
        title="Läcksökning och emissionsmätning – biogasanläggningar"
        subtitle="Identifiera metanläckor, kvantifiera förluster och optimera er biogasproduktion med drönarbaserad gasmätning."
        trustItems={['Heltäckande läcksökning', 'Kvantifierade förluster', 'Ingen driftstörning']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Problemet</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Metanläckor vid biogasanläggningar innebär dubbla förluster: förlorad energi som aldrig
            når uppgraderingen och ökade klimatutsläpp som påverkar er miljöredovisning. Läckorna
            uppstår ofta vid kopplingar, ventiler, tätningar och membrantak – platser som är svåra
            att nå och övervaka med markbundna metoder.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Drönarbaserad mätning ger en snabb och heltäckande bild av var metanet läcker. Ni får
            underlag för att prioritera tätningsåtgärder och följa upp effekten – mätning efter
            mätning.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Metankoncentration (CH₄)</strong> runt rötkammare, gaslager, uppgradering och ledningsstråk.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Rumslig fördelning</strong> som visar exakt var förhöjda koncentrationer finns.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Emissionsuppskattning</strong> per identifierad källa (där mätförutsättningarna tillåter).</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Ekonomisk nytta</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Varje procent metanförlust som identifieras och åtgärdas innebär direkt ökad
            biogasproduktion. Det handlar om mätbara besparingar: mer gas till uppgradering, lägre
            utsläpp per producerad enhet och bättre underlag för er egenkontroll.
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
          <h2 className="text-xl font-bold">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/deponi" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Deponi – metanmätning
            </Link>
            <Link href="/matning/reningsverk" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Reningsverk – processemissioner
            </Link>
            <Link href="/matning/industri" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Industri – LDAR
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
