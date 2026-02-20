import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vanliga frågor – drönarbaserad gasmätning',
  description:
    'Svar på vanliga frågor om drönarbaserad metan- och miljömätning: metod, leveranser, precision, lagkrav och tillvägagångssätt.',
  alternates: { canonical: '/matning/faq' },
}

const faqItems = [
  {
    question: 'Vad innebär drönarbaserad gasmätning?',
    answer: 'En drönare utrustad med gassensorer flyger systematiskt över ett område och registrerar gaskoncentrationer med GPS-koppling. Resultatet blir georefererade kartlager som visar var och hur höga koncentrationerna är.',
  },
  {
    question: 'Vilka gaser kan mätas?',
    answer: 'Primärt mäter vi metan (CH₄). Beroende på uppdrag och sensorutrustning kan även lustgas (N₂O), koldioxid (CO₂) och andra gaser vara aktuella. Exakt vilka gaser som ingår klargörs vid uppdragsplanering.',
  },
  {
    question: 'Hur exakt är mätningen?',
    answer: 'Mätosäkerheten beror på flera faktorer: sensorns precision, väderförhållanden, flygmönster och gasens egenskaper. Vi redovisar alltid mätosäkerhet i rapporten så att ni vet vad resultaten kan användas till.',
  },
  {
    question: 'Kan resultaten användas för tillsyn och rapportering?',
    answer: 'Ja. Våra rapporter innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga som underlag vid tillsyn, klimatredovisning och egenkontroll. Formatet anpassas efter er användning.',
  },
  {
    question: 'Hur stort område kan mätas vid ett tillfälle?',
    answer: 'Det beror på områdets storlek och komplexitet. En typisk deponi eller industrianläggning kan mätas under en dag. Stora områden eller komplexa anläggningar kan kräva flera flygpass.',
  },
  {
    question: 'Påverkas mätningen av väder?',
    answer: 'Ja. Vindhastighet, regnförhållanden och temperatur påverkar både flygning och mätresultat. Vi planerar mätningar med hänsyn till väderförhållanden och flyttar vid behov till ett lämpligare tillfälle.',
  },
  {
    question: 'Vilken typ av rapport får vi?',
    answer: 'Ni får en sammanfattande rapport (PDF), georefererade koncentrationskartor, hotspot-lista och digitala kartlager (GeoJSON/KML). Formaten kan anpassas efter ert behov.',
  },
  {
    question: 'Behöver vi förbereda något inför mätningen?',
    answer: 'Vi behöver tillgång till området, underlag om ytgränser/processer och kontaktuppgifter till ansvarig på plats. Detaljerna diskuterar vi i uppdragsplaneringen.',
  },
  {
    question: 'Hur skiljer sig detta från optisk gasdetektion (OGI)?',
    answer: 'OGI-kameror (t.ex. FLIR) visualiserar gasutsläpp kvalitativt – man ser att gas läcker, men kvantifierar inte koncentrationen. Drönarbaserad gasmätning med sensorer mäter faktiska koncentrationer och ger kvantitativ data. Metoderna kan komplettera varandra.',
  },
  {
    question: 'Kan ni jämföra data mellan mättillfällen?',
    answer: 'Ja. Genom att använda samma flygmönster och mätprotokoll vid upprepade mätningar kan vi jämföra resultat över tid – till exempel för att följa upp åtgärder eller identifiera trender.',
  },
  {
    question: 'Finns det lagkrav på att mäta emissioner?',
    answer: 'Det beror på bransch och tillståndsvillkor. Deponier har krav på kontrollprogram, industriella anläggningar kan ha LDAR-krav och reningsverk förväntas alltmer redovisa processemissioner i klimatbokslut. Kontakta oss för en bedömning av just er situation.',
  },
  {
    question: 'Hur hanterar ni personuppgifter?',
    answer: 'Vi samlar bara in de uppgifter som krävs för att hantera er förfrågan. Vi säljer aldrig data till tredje part. Läs mer i vår integritetspolicy.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
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
          <h1 className="text-3xl font-bold sm:text-4xl">Vanliga frågor om drönarmätning</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Här samlar vi svar på de vanligaste frågorna vi får om drönarbaserad gas- och
            miljömätning. Hittar du inte svaret du söker? <Link href="/matning/kontakt" className="text-brand-700 hover:text-brand-800 underline">Kontakta oss</Link>.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} />

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/matning/metodik" className="text-brand-700 font-medium hover:text-brand-800">
              Metodik & kvalitetssäkring →
            </Link>
            <Link href="/matning/leveranser" className="text-brand-700 font-medium hover:text-brand-800">
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
