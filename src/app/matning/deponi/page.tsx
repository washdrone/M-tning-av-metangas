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
  title: 'Metanmätning för deponier – drönarbaserad kartläggning',
  description:
    'Kartlägg diffusa metanemissioner från deponier med drönare. Georefererade koncentrationskartor, hotspot-identifiering och emissionsrapporter för tillsyn och klimatredovisning.',
  alternates: { canonical: '/matning/deponi' },
  openGraph: {
    title: 'Metanmätning för deponier – WashDrone',
    description: 'Drönarbaserad kartläggning av diffusa metanemissioner från deponiytor.',
    url: '/matning/deponi',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metanmätning för deponier',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad kartläggning av diffusa metanemissioner från deponiytor med leverans av koncentrationskartor och emissionsrapporter.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Metanmätning',
}

const steps = [
  { title: 'Förberedelse', description: 'Vi tar del av era underlag (ytgränser, celler, täckskikt) och planerar flygmönster och mätprotokoll.' },
  { title: 'Flygning & mätning', description: 'Drönaren flyger systematiskt över deponiytorna och registrerar metankoncentrationer med GPS-koppling.' },
  { title: 'Databearbetning', description: 'Rådata kalibreras, interpoleras till kartlager och kvalitetskontrolleras. Mätosäkerhet dokumenteras.' },
  { title: 'Leverans & genomgång', description: 'Ni får rapport, koncentrationskartor och hotspot-lista. Vi går igenom resultaten tillsammans.' },
]

const deliverables = [
  { title: 'Koncentrationskarta', description: 'Georefererad karta över metankoncentrationer (ppm) med tydlig färgskala.' },
  { title: 'Hotspot-lista', description: 'Identifierade punkter med förhöjda koncentrationer – prioriterade efter nivå och position.' },
  { title: 'Emissionsrapport', description: 'Sammanfattning av resultat, metodik, mätosäkerhet och rekommenderade åtgärder.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML-filer för import i ert GIS-system eller för vidare analys.' },
]

const faqItems = [
  {
    question: 'Hur ofta bör man mäta metanemissioner från en deponi?',
    answer: 'Det beror på tillståndskrav och deponins status. Aktiva deponier med gasfångst mäts ofta årligen eller halvårsvis för att följa upp täckskikt och gasfångsteffektivitet. Avslutade deponier mäts vanligen i samband med kontrollprogram.',
  },
  {
    question: 'Vad mäts vid en drönarbaserad deponimätning?',
    answer: 'Vi mäter metankoncentrationer (CH₄) i luften ovanför deponiytorna. Mätvärdena kopplas till GPS-koordinater och bearbetas till koncentrationskartor som visar spatial fördelning och hotspots.',
  },
  {
    question: 'Kan resultaten användas vid tillsyn och rapportering?',
    answer: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga som underlag vid tillsyn, klimatredovisning och uppföljning av åtgärder.',
  },
]

export default function DeponiPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Deponi', href: '/matning/deponi' },
      ]} />

      <Hero
        title="Metanmätning för deponier"
        subtitle="Kartlägg diffusa metanemissioner – från yta till rapport. Underlag för tillsyn, klimatrapportering och åtgärdsplanering."
        trustItems={['CH₄-koncentrationskartor', 'Hotspot-identifiering', 'Dokumenterad mätosäkerhet']}
      />

      {/* Utmaningen */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Utmaningen</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Deponier släpper ut metan genom diffus avdunstning från ytan – ojämnt fördelat och
            svårt att fånga med enstaka punktmätningar. Naturvårdsverkets riktlinjer och EU:s
            metanförordning ställer ökade krav på kvantifiering av dessa utsläpp. Markbundna
            mätningar är tidskrävande och ger begränsad rumslig upplösning.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Med drönarbaserad mätning kartläggs hela deponiytan systematiskt. Resultatet är en
            detaljerad bild av var emissionerna sker och hur stora de är – ett underlag som
            traditionella metoder inte kan matcha i samma tidsram.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Metankoncentration (CH₄)</strong> – mätt i ppm ovanför deponiytan, kopplat till GPS-position.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Spatial fördelning</strong> – kartlager som visar koncentrationsvariationer över hela ytan.</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-gray-700"><strong>Hotspots</strong> – punkter med förhöjda koncentrationer som kan kräva åtgärd (t.ex. sprickor i täckskikt).</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      {/* När passar detta */}
      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">När passar drönarbaserad deponimätning?</h2>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Årlig eller periodisk uppföljning av diffusa metanemissioner</li>
            <li>• Kontroll efter sluttäckning eller åtgärd på täckskikt</li>
            <li>• Underlag för tillståndsprövning eller miljörapport</li>
            <li>• Utvärdering av gasfångstsystemets effektivitet</li>
            <li>• Klimatbokslut och emissionsredovisning</li>
          </ul>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om deponimätning" />

      <CtaBand
        heading="Behöver ni mäta metanemissioner från er deponi?"
        description="Vi hjälper er med planering, mätning och leverans. Boka en genomgång så diskuterar vi upplägget."
      />

      {/* Relaterade tjänster */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/biogas" className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-brand-300 hover:text-brand-700">
              Biogas – läcksökning
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
