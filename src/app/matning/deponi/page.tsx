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
  title: 'Metanmätning för deponier – kartlägg utsläpp med drönare',
  description:
    'Hitta var metanet läcker genom täckskiktet. Drönarbaserad kartläggning ger er koncentrationskartor, hotspots och rapporter för tillsyn och klimatredovisning.',
  alternates: { canonical: '/matning/deponi' },
  openGraph: {
    title: 'Metanmätning för deponier – WashDrone',
    description: 'Kartlägg diffusa metanemissioner från deponier med drönare.',
    url: '/matning/deponi',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metanmätning för deponier',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad kartläggning av diffusa metanemissioner från deponiytor.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Metanmätning',
}

const steps = [
  { title: 'Förberedelse', description: 'Vi tar del av era underlag – ytgränser, celler, täckskikt – och planerar flygmönster och mätprotokoll.' },
  { title: 'Flygning', description: 'Drönaren flyger systematiskt över deponiytorna och registrerar metankoncentrationer med GPS-koppling.' },
  { title: 'Databearbetning', description: 'Rådata kalibreras, interpoleras till kartlager och kvalitetskontrolleras. Mätosäkerheten dokumenteras.' },
  { title: 'Leverans', description: 'Ni får rapport, koncentrationskartor och hotspot-lista. Vi går igenom resultaten tillsammans.' },
]

const deliverables = [
  { title: 'Koncentrationskarta', description: 'Georefererad karta över metankoncentrationer (ppm) med tydlig färgskala – ni ser direkt var det läcker.' },
  { title: 'Hotspot-lista', description: 'Punkter med förhöjda halter, rangordnade efter nivå och position – direkt användbar för åtgärdsplanering.' },
  { title: 'Emissionsrapport', description: 'Resultat, metodik och mätosäkerhet sammanfattat – redo för tillsyn, miljörapport eller klimatbokslut.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML-filer för ert GIS. Jämför mellan mättillfällen och kombinera med egna datalager.' },
]

const faqItems = [
  {
    question: 'Hur ofta bör en deponi mätas?',
    answer: 'Det beror på tillståndskrav och deponins status. Aktiva deponier med gasfångst mäts vanligen årligen eller halvårsvis. Avslutade deponier mäts oftast i samband med kontrollprogram. Vi hjälper er hitta rätt intervall.',
  },
  {
    question: 'Vad är det som faktiskt mäts?',
    answer: 'Vi mäter metankoncentrationer (CH₄) i luften ovanför deponiytorna. Varje mätvärde kopplas till en GPS-position. Tillsammans ger de en karta som visar var och hur mycket metan som läcker ut.',
  },
  {
    question: 'Fungerar resultaten som underlag vid tillsyn?',
    answer: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga vid tillsyn, klimatredovisning och uppföljning av åtgärder.',
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
        subtitle="Hitta var metanet läcker genom täckskiktet. Få kartor och rapporter som visar exakt vilka ytor som behöver åtgärdas."
        trustItems={['CH₄-koncentrationskartor', 'Hotspot-identifiering', 'Dokumenterad mätosäkerhet']}
      />

      {/* Utmaningen */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Problemet</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Metan som bildas i deponier tar sig ut genom täckskiktet – ojämnt fördelat och
            omöjligt att se med blotta ögat. Idag finns över 4 000 nedlagda avfallsupplag bara i
            Sverige, och utsläppen är ofta större än man tror. Metan är en kraftfull växthusgas
            som värmer klimatet ungefär 80 gånger mer än koldioxid på 20 års sikt.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Markbundna mätningar tar lång tid och ger bara punktvisa värden. Med drönare kartlägger
            vi hela ytan systematiskt – och ni ser direkt var läckorna finns.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Metankoncentration (CH₄)', text: '– mätt i ppm ovanför deponiytan, kopplat till GPS-position.' },
              { bold: 'Spatial fördelning', text: '– kartlager som visar hur halterna varierar över hela ytan.' },
              { bold: 'Hotspots', text: '– punkter med förhöjda halter som ofta beror på brister i täckskiktet.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} />
      <DeliverablesList items={deliverables} />

      {/* När passar detta */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">När passar drönarbaserad deponimätning?</h2>
          <ul className="mt-6 space-y-3 text-dark-300">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />Årlig eller periodisk uppföljning av metanutsläpp</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />Kontroll efter sluttäckning eller reparation av täckskikt</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />Underlag för tillståndsprövning eller miljörapport</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />Utvärdering av gasfångstsystemets effektivitet</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />Klimatbokslut och emissionsredovisning</li>
          </ul>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om deponimätning" />

      <CtaBand
        heading="Behöver ni kartlägga metanutsläpp från er deponi?"
        description="Vi hjälper er planera mätningen, genomföra den och leverera underlag ni kan agera på."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/biogas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Biogas – läcksökning
            </Link>
            <Link href="/matning/reningsverk" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Reningsverk – processemissioner
            </Link>
            <Link href="/matning/industri" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Industri – LDAR
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
