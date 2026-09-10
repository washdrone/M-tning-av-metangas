import type { Metadata } from 'next'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'
import { OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Vanliga frågor om drönarbaserad utsläppsmätning',
  description:
    'Svar på vanliga frågor om drönarbaserad metan- och miljömätning: metod, CSRD, LDAR, leveranser, noggrannhet och hur det fungerar.',
  alternates: { canonical: '/faq' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Vanliga frågor om utsläppsmätning med drönare | EcoDrone',
    description: 'FAQ om drönarbaserad gasmätning – metod, CSRD, LDAR, noggrannhet och leveranser.',
    url: '/faq',
  },
}

const faqItems = [
  {
    question: 'Vad innebär drönarbaserad utsläppsmätning?',
    answer: 'Drönarbaserad utsläppsmätning innebär att en drönare utrustad med TDLAS-sensorer och OGI-kamera flyger systematiskt över ett område och registrerar gashalter med GPS-koppling. Resultatet blir detaljerade kartor som visar var halterna är höga och var åtgärder behövs – redo att användas i compliance-rapportering.',
  },
  {
    question: 'Vilka gaser kan EcoDrone mäta?',
    answer: 'EcoDrone mäter primärt metan (CH₄) med TDLAS-sensorer, men kan även mäta lustgas (N₂O), koldioxid (CO₂) och flyktiga organiska ämnen (VOC) beroende på uppdrag. Vi klargör sensorkapacitet vid uppdragsplaneringen.',
  },
  {
    question: 'Hur exakt är drönarbaserad gasmätning?',
    answer: 'TDLAS-baserade sensorer ger hög precision med dokumenterad mätosäkerhet som redovisas i varje rapport. Exakt osäkerhet beror på vädret, sensor och flygmönster, och vi anger alltid vad resultaten kan användas till.',
  },
  {
    question: 'Kan resultaten användas för CSRD Scope 1-rapportering?',
    answer: 'Ja, EcoDrones rapporter innehåller dokumenterad metodik och mätosäkerhet enligt ESRS E1:s krav på verifierade Scope 1-utsläppsdata. Data levereras i format som revisorer kan granska direkt.',
  },
  {
    question: 'Uppfyller mätningen EU-metanförordningens LDAR-krav?',
    answer: 'Drönarbaserad läcksökning kan ingå i ett avgränsat upplägg. Om resultatet ska användas i ett föreskrivet LDAR-program behöver metod, detektionsförmåga, täckning och dokumentation bedömas mot de aktuella kraven. Sensorbeteckningen avgör inte i sig om kraven uppfylls.',
  },
  {
    question: 'Kan resultaten användas vid tillsyn och miljörapportering?',
    answer: 'Ja, rapporterna innehåller dokumenterad metodik, mätosäkerhet och spårbarhet som gör dem lämpliga vid tillsyn, SMP-rapportering till Naturvårdsverket och egenkontroll enligt Miljöbalken.',
  },
  {
    question: 'Hur stort område kan mätas vid ett tillfälle?',
    answer: 'En typisk deponi eller industrianläggning kan mätas under en dag med drönarbaserad metodik. Större eller komplexa områden kan kräva flera flygpass under samma mättillfälle.',
  },
  {
    question: 'Påverkas drönarbaserad mätning av väder?',
    answer: 'Ja, framför allt stark vind och regn påverkar mätresultaten och vi planerar alltid mätningen med hänsyn till vädret. Vid olämpliga förhållanden flyttar vi mätningen för att säkerställa datakvaliteten.',
  },
  {
    question: 'Vilken typ av rapport och leverans får vi?',
    answer: 'Ni får en sammanfattande rapport i PDF, georefererade kartor med gashalter, en hotspot-lista och digitala kartlager i GeoJSON/KML-format. Formaten kan anpassas efter ert rapporteringsbehov.',
  },
  {
    question: 'Vad är skillnaden mellan OGI och TDLAS-mätning?',
    answer: 'OGI-kameror visualiserar gasläckor men kvantifierar inte utsläppet, medan TDLAS-sensorer mäter faktiska gaskoncentrationer. EcoDrone erbjuder båda metoderna och de kompletterar varandra – OGI för detektion, TDLAS för kvantifiering.',
  },
  {
    question: 'Kan ni jämföra mätdata mellan olika mättillfällen?',
    answer: 'Ja, genom att använda samma flygmönster, protokoll och referenspunkter kan vi jämföra resultat mellan mättillfällen och visa trender. Det gör det möjligt att verifiera om åtgärder haft önskad effekt.',
  },
  {
    question: 'Finns det lagkrav på att mäta utsläpp i Sverige?',
    answer: 'Ja, lagkraven ökar: CSRD kräver verifierade Scope 1-data, EU:s metanförordning kräver LDAR-inspektioner och svenska SMP kräver årlig miljörapportering för tillståndspliktiga verksamheter. Kontakta oss för en bedömning av er situation.',
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
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Vanliga frågor</h1>
          <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-slate-300">
            Här samlar vi svar på det vi oftast får frågor om.
            Hittar ni inte svaret? <Link href="/kontakt" className="text-cyan-400 hover:text-cyan-300 underline">Kontakta oss</Link>.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
            <Link href="/tjanster/metodik" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Metodik & kvalitetssäkring →
            </Link>
            <Link href="/tjanster/leveranser" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Dataleveranser – vad du får →
            </Link>
            <Link href="/compliance" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Compliance & regelverk →
            </Link>
            <Link href="/ordlista" className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
              Ordlista – alla begrepp förklarade →
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
