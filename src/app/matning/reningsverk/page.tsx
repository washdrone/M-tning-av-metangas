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
  title: 'Emissionsmätning reningsverk – metan och lustgas med drönare',
  description:
    'Mät processemissioner av metan och lustgas från reningsverk med drönare. Stärk ert klimatbokslut, identifiera emissionskällor och få underlag för processoptimering.',
  alternates: { canonical: '/matning/reningsverk' },
  openGraph: {
    title: 'Emissionsmätning reningsverk – WashDrone',
    description: 'Drönarbaserad mätning av metan- och lustgasemissioner från reningsverk.',
    url: '/matning/reningsverk',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emissionsmätning för reningsverk',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad mätning av metan- och lustgasemissioner från reningsverk.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  { title: 'Processgenomgång', description: 'Vi identifierar relevanta processteg och bassänger: luftning, sedimentering, slamhantering, utgående vatten.' },
  { title: 'Mätning', description: 'Drönaren flyger över processytorna och registrerar metan- och/eller lustgaskoncentrationer med GPS-koppling.' },
  { title: 'Databearbetning', description: 'Koncentrationsdata kopplas till processzoner. Emissionsmönster analyseras och kvalitetssäkras.' },
  { title: 'Leverans', description: 'Emissionskarta, processkorrelation och sammanfattande rapport med rekommendationer.' },
]

const deliverables = [
  { title: 'Emissionskarta', description: 'Georefererad karta som visar gaskoncentrationer kopplade till processzoner och bassänger.' },
  { title: 'Processkorrelation', description: 'Analys av vilka processteg som bidrar mest till emissionerna.' },
  { title: 'Emissionsrapport', description: 'Rapport med metodik, resultat, mätosäkerhet och rekommendationer – anpassad för klimatbokslut.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML för integration i ert GIS eller driftsystem.' },
]

const faqItems = [
  {
    question: 'Varför behöver reningsverk mäta processemissioner?',
    answer: 'Reningsverk är betydande källor till metan (CH₄) och lustgas (N₂O), båda med kraftig klimatpåverkan. Allt fler kommuner och VA-bolag inkluderar dessa emissioner i sina klimatbokslut. Utan mätning saknas underlag för att bedöma storleksordningen och prioritera åtgärder.',
  },
  {
    question: 'Vilka gaser kan mätas med drönare vid reningsverk?',
    answer: 'Vi fokuserar på metan (CH₄) och lustgas (N₂O) som är de klimatmässigt mest relevanta processemissionerna. Beroende på sensorutrustning kan även andra gaser som svavelväte (H₂S) vara aktuella – detta specificeras i uppdragsplaneringen.',
  },
  {
    question: 'Kan mätningen kopplas till specifika processzoner?',
    answer: 'Ja. Genom att mäta systematiskt över anläggningen med GPS-koppling kan vi knyta koncentrationsnivåer till specifika bassänger och processteg. Det ger er underlag för att identifiera vilka delar av processen som bidrar mest.',
  },
]

export default function ReningsverkPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Reningsverk', href: '/matning/reningsverk' },
      ]} />

      <Hero
        title="Emissionsmätning för reningsverk"
        subtitle="Mät processemissioner av metan och lustgas med drönare. Stärk ert klimatbokslut och identifiera optimeringsmöjligheter."
        trustItems={['CH₄ & N₂O', 'Processkopplad data', 'Klimatbokslut-redo']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Varför mäta emissioner från reningsverk?</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Biologisk avloppsvattenrening producerar metan och lustgas som biprodukter – gaser med
            betydande klimatpåverkan (lustgas har ca 265 gånger högre växthuseffekt än koldioxid per
            kg). Många VA-bolag saknar idag mätdata på sina processemissioner och förlitar sig på
            schabloner som kan avvika kraftigt från verkliga utsläpp.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Drönarbaserad mätning ger en rumsligt upplöst bild av var emissionerna uppstår i
            processen. Det är ett värdefullt komplement till eventuell stationär mätning och ger
            underlag för att prioritera åtgärder där de gör störst skillnad.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Metan (CH₄)</strong> – från slamhantering, förprocesser och eventuella biogasläckor.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Lustgas (N₂O)</strong> – framför allt från biologiska processteg som nitrifikation/denitrifikation (valbart tillägg).</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Rumslig koppling</strong> – koncentrationsdata knyts till specifika bassänger och processzoner.</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Processoptimering</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Genom att veta vilka processteg som genererar mest emissioner kan ni rikta åtgärder dit
            de gör mest nytta: justera luftning, ändra slamålder eller förbättra täckning av
            slamhantering. Resultatet blir ett lägre klimatavtryck – och ofta bättre processekonomi.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om reningsverksmätning" />

      <CtaBand
        heading="Vill ni kartlägga emissionerna från ert reningsverk?"
        description="Boka en genomgång så planerar vi en mätning anpassad efter er anläggning och era frågeställningar."
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
            <Link href="/matning/industri" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Industri – LDAR
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
