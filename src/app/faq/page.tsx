import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vanliga frågor om drönarbaserad utsläppsmätning',
  description:
    'Svar på vanliga frågor om drönarbaserad metan- och miljömätning: metod, CSRD, LDAR, leveranser, noggrannhet och hur det fungerar.',
  alternates: { canonical: '/faq' },
}

const faqItems = [
  {
    question: 'Vad innebär drönarbaserad utsläppsmätning?',
    answer: 'En drönare utrustad med TDLAS-sensorer och/eller OGI-kamera flyger systematiskt över ett område och registrerar gashalter med GPS-koppling. Resultatet blir detaljerade kartor som visar var halterna är höga och var åtgärder behövs – redo att användas i compliance-rapportering.',
  },
  {
    question: 'Vilka gaser kan EcoDrone mäta?',
    answer: 'Primärt mäter vi metan (CH₄) med TDLAS-sensorer. Beroende på uppdrag och utrustning kan även lustgas (N₂O), koldioxid (CO₂), VOC och andra gaser mätas. Vi klargör sensorkapacitet vid uppdragsplaneringen.',
  },
  {
    question: 'Hur exakt är mätningen?',
    answer: 'TDLAS-baserade sensorer ger hög precision. Exakt mätosäkerhet beror på väder, sensor och flygmönster. Vi redovisar alltid mätosäkerheten i rapporten så att ni vet vad resultaten kan användas till.',
  },
  {
    question: 'Kan resultaten användas för CSRD Scope 1-rapportering?',
    answer: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet enligt de krav som ESRS E1 ställer på verifierade utsläppsdata. Data levereras i format som revisorer kan granska.',
  },
  {
    question: 'Uppfyller mätningen EU-metanförordningens LDAR-krav?',
    answer: 'EcoDrone utför LDAR-inspektioner med metoder som är kompatibla med EU-metanförordningens krav. Vår metodik följer principer som stödjer OGMP 2.0 Level 4-rapportering.',
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
    question: 'Hur skiljer sig detta från OGI (optisk gasdetektion)?',
    answer: 'OGI-kameror visar att gas läcker – men mäter inte hur mycket. Drönarbaserad mätning med TDLAS-sensorer ger faktiska koncentrationsvärden. EcoDrone erbjuder båda metoderna och de kan komplettera varandra.',
  },
  {
    question: 'Kan ni jämföra data mellan mättillfällen?',
    answer: 'Ja. Genom att använda samma flygmönster och protokoll kan vi jämföra resultat över tid – till exempel för att se om en åtgärd haft effekt.',
  },
  {
    question: 'Finns det lagkrav på att mäta utsläpp?',
    answer: 'Ja, i ökande grad. CSRD kräver Scope 1-data, EU-metanförordningen kräver LDAR-inspektioner, och svenska SMP kräver miljörapportering. Kontakta oss för en bedömning av just er situation.',
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
        { name: 'Vanliga frågor', href: '/faq' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Vanliga frågor</h1>
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Här samlar vi svar på det vi oftast får frågor om.
            Hittar ni inte svaret? <Link href="/kontakt" className="text-brand-400 hover:text-brand-300 underline">Kontakta oss</Link>.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            <Link href="/tjanster/metodik" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Metodik & kvalitetssäkring →
            </Link>
            <Link href="/tjanster/leveranser" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Dataleveranser – vad du får →
            </Link>
            <Link href="/compliance" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Compliance & regelverk →
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
