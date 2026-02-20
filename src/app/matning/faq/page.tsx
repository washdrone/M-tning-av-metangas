import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vanliga frågor – drönarbaserad gasmätning',
  description:
    'Svar på vanliga frågor om drönarbaserad metan- och miljömätning: metod, leveranser, noggrannhet, lagkrav och hur det fungerar.',
  alternates: { canonical: '/matning/faq' },
}

const faqItems = [
  {
    question: 'Vad innebär drönarbaserad gasmätning?',
    answer: 'En drönare med gassensorer flyger systematiskt över ett område och registrerar gashalter med GPS-koppling. Resultatet blir kartor som visar var halterna är höga och var åtgärder behövs.',
  },
  {
    question: 'Vilka gaser kan mätas?',
    answer: 'Primärt mäter vi metan (CH₄). Beroende på uppdrag och utrustning kan även lustgas (N₂O) och koldioxid (CO₂) vara aktuella. Exakt vilka gaser som ingår klargörs vid planeringen.',
  },
  {
    question: 'Hur exakt är mätningen?',
    answer: 'Det beror på vädret, sensorn och flygmönstret. Vi redovisar alltid mätosäkerheten i rapporten så att ni vet vad resultaten kan användas till. Genom att flyga flera pass kan osäkerheten minskas.',
  },
  {
    question: 'Kan resultaten användas vid tillsyn?',
    answer: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga vid tillsyn, klimatredovisning och egenkontroll.',
  },
  {
    question: 'Hur stort område kan mätas vid ett tillfälle?',
    answer: 'Det beror på storlek och komplexitet. En typisk deponi eller industrianläggning kan mätas under en dag. Större eller komplexa områden kan kräva flera flygpass.',
  },
  {
    question: 'Påverkas mätningen av väder?',
    answer: 'Ja, framför allt vind och regn påverkar. Vi planerar alltid med hänsyn till vädret och flyttar mätningen vid behov.',
  },
  {
    question: 'Vilken typ av rapport får vi?',
    answer: 'Ni får en sammanfattande rapport (PDF), kartor med gashalter, hotspot-lista och digitala kartlager (GeoJSON/KML). Formaten kan anpassas efter ert behov.',
  },
  {
    question: 'Behöver vi förbereda något?',
    answer: 'Vi behöver tillgång till området, underlag om ytgränser eller processer, och en kontaktperson på plats. Detaljerna diskuterar vi vid planeringen.',
  },
  {
    question: 'Hur skiljer sig detta från OGI (optisk gasdetektion)?',
    answer: 'OGI-kameror visar att gas läcker – men mäter inte hur mycket. Drönarbaserad mätning med sensorer ger faktiska koncentrationsvärden. Metoderna kan komplettera varandra.',
  },
  {
    question: 'Kan ni jämföra data mellan mättillfällen?',
    answer: 'Ja. Genom att använda samma flygmönster och protokoll kan vi jämföra resultat över tid – till exempel för att se om en åtgärd haft effekt.',
  },
  {
    question: 'Finns det lagkrav på att mäta?',
    answer: 'Det beror på bransch och tillståndsvillkor. Deponier har krav på kontrollprogram, industrier kan ha LDAR-krav och reningsverk förväntas redovisa processemissioner i klimatbokslut. Kontakta oss för en bedömning av just er situation.',
  },
  {
    question: 'Hur hanterar ni personuppgifter?',
    answer: 'Vi samlar bara in det som behövs för att hantera er förfrågan och säljer aldrig data vidare. Läs mer i vår integritetspolicy.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Vanliga frågor', href: '/matning/faq' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Vanliga frågor</h1>
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Här samlar vi svar på det vi oftast får frågor om.
            Hittar ni inte svaret? <Link href="/matning/kontakt" className="text-brand-400 hover:text-brand-300 underline">Kontakta oss</Link>.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            <Link href="/matning/metodik" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Metodik & kvalitetssäkring →
            </Link>
            <Link href="/matning/leveranser" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Dataleveranser – vad du får →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Har ni en specifik fråga?"
        description="Hör av er så hjälper vi er vidare."
        ctaText="Kontakta oss"
      />
    </>
  )
}
