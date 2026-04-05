import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { RelatedContent } from '@/components/RelatedContent'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gasdetektion raffinaderi – LDAR olje-gas Sverige',
  description:
    'LDAR-inspektion och gasdetektion för olje- och gasindustrin i Sverige. Raffinaderier, terminaler och rörledningar. OGMP 2.0-kompatibel rapportering. EcoDrone.',
  alternates: { canonical: '/branscher/olja-gas' },
  openGraph: {
    title: 'Gasdetektion raffinaderi – LDAR olje-gas | EcoDrone',
    description:
      'Drönarbaserad LDAR och gasdetektion för raffinaderier, olje- och gasanläggningar. OGMP 2.0 och EU-metanförordning.',
    url: '/branscher/olja-gas',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gasdetektion och LDAR för olja & gas',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Drönarbaserad LDAR-inspektion och gasdetektion vid raffinaderier, terminaler och rörledningar. OGMP 2.0-kompatibel metodik.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'LDAR olja och gas',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka krav ställer EU:s metanförordning på olje- och gassektorn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning (2024/1787) kräver att olje- och gasanläggningar implementerar LDAR-program med regelbundna inspektioner, kvantifiering av läckor och reparation inom fastställda tidsfrister. Förordningen refererar till OGMP 2.0 som riktlinje för bästa mätpraxis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad innebär OGMP 2.0 nivå 4 och 5 för mätrapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 definierar fem rapporteringsnivåer. Nivå 4 kräver platsspecifika mätningar vid anläggningen och nivå 5 kräver att dessa reconcilieras med oberoende top-down-mätningar. EcoDrones metodik levererar data som uppfyller nivå 4-kraven och kan komplettera nivå 5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni inspektera raffinaderier med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi genomför OGI-inspektion och LDAR vid raffinaderier med drönare utrustad med OGI-kamera och TDLAS-sensor. Drönaren når kolonner, facklor och rörledningar på höjd utan ställningsbygge, vilket sparar tid och ökar säkerheten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser detekteras vid raffinaderier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi detekterar metan och andra kolväten med OGI och TDLAS, VOC med PID-sensor, samt H₂S med elektrokemisk sensor. Sensoruppsättningen anpassas efter anläggningens processer och de gaser som är relevanta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt behöver identifierade läckor åtgärdas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning anger specifika reparationstidsfrister beroende på läckans storlek. Stora läckor ska åtgärdas omgående, mindre inom veckor. Uppföljningsinspektion krävs efter reparation för att verifiera att läckan är åtgärdad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hanteras säkerheten vid drönflygning på raffinaderier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi samordnar flygningen med anläggningens HSE-avdelning och följer säkerhetsrutinerna fullt ut. Flygzoner och tider planeras för att undvika konflikter med pågående drift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan EcoDrone kvantifiera utsläppen, inte bara detektera dem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Utöver visuell detektion med OGI kvantifierar vi identifierade läckor med TDLAS-sensor och beräkningsmodeller. Det ger er den kvantitativa data som behövs för OGMP 2.0-rapportering och regulatorisk compliance.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function OljaGasPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Olja, gas & raffinaderier', href: '/branscher/olja-gas' },
      ]} />

      <Hero
        title="Gasdetektion för olja, gas och raffinaderier"
        subtitle="Drönarbaserad LDAR och metandetektion för Sveriges olje- och gasindustri. Uppfyll EU:s metanförordning och OGMP 2.0 med snabbare, säkrare och mer heltäckande inspektioner."
        ctaText="Boka LDAR-inspektion"
        ctaHref="/kontakt"
        trustItems={['LDAR-kompatibel', 'OGMP 2.0 nivå 4', 'OGI + TDLAS']}
      />

      {/* Branschutmaningen */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Olje- och gasindustrin under regulatoriskt tryck</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Olje- och gasindustrin står inför en ny era av utsläppsövervakning. EU:s metanförordning
            (EU 2024/1787) inför obligatorisk LDAR (Leak Detection and Repair) med strikta krav på
            inspektionsfrekvens, detektionsgränser och dokumentation. Samtidigt sätter OGMP 2.0-ramverket
            internationell standard för kvantitativ metanrapportering.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Svenska raffinaderier och andra energianläggningar behöver förbereda sig för dessa
            krav redan nu. Drönarbaserad inspektion erbjuder en snabbare, säkrare och mer
            kostnadseffektiv metod att uppnå compliance jämfört med enbart traditionella
            handhållna metoder.
          </p>
        </div>
      </section>

      {/* Tjänster */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Tjänster för olja och gas</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-inspektion', desc: 'Systematisk inspektion av ventiler, flänsar, kompressorer, pumptätningar och tankar med OGI-kamera och kvantifiering av identifierade läckor med TDLAS.' },
              { title: 'OGI-screening', desc: 'Snabb visuell screening av hela anläggningen med drönarburen infraröd OGI-kamera. Identifiera läckor vid svåråtkomliga komponenter i realtid utan driftstopp.' },
              { title: 'Plymmätning', desc: 'Kvantifiering av totala anläggningsemissioner genom traversmätning nedvinds. Stöd för OGMP 2.0 nivå 5-rapportering med reconciliation.' },
              { title: 'VOC-screening', desc: 'Detektion av flyktiga organiska föreningar vid lagringstankar, lastning och processenheter med PID-sensor monterad på drönare.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU metanförordning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">EU:s metanförordning – vad den kräver</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            EU:s metanförordning är den mest omfattande lagstiftningen hittills för att begränsa
            metanutsläpp från energisektorn. Förordningen trädde i kraft 2024 med stegvis
            implementering och ställer konkreta krav som direkt påverkar svensk olje- och gasindustri.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Obligatorisk LDAR', text: '– alla operatörer ska genomföra regelbundna LDAR-inspektioner med specificerade inspektionsintervall och detektionsgränser.' },
              { bold: 'Kvantifieringskrav', text: '– det räcker inte att bara hitta läckorna. Ni behöver kunna ange hur mycket metan varje källa släpper ut.' },
              { bold: 'Reparationstidsfrister', text: '– identifierade läckor ska repareras inom definierade tidsramar och verifieras med uppföljningsinspektion.' },
              { bold: 'Förbud mot ventilering', text: '– rutinmässig ventilering och flakning förbjuds med begränsade undantag för säkerhet.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-400">
            Läs mer om{' '}
            <Link href="/compliance/eu-metanforordning" className="text-cyan-400 hover:underline">EU:s metanförordning och dess LDAR-krav</Link>.
          </p>
        </div>
      </section>

      {/* OGMP 2.0 */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">OGMP 2.0 – metanrapportering på hög nivå</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Oil and Gas Methane Partnership 2.0 är det ledande internationella ramverket för
            kvantitativ metanrapportering. Ramverket definierar fem nivåer av rapporteringskvalitet,
            där nivå 4 och 5 kräver platsspecifika mätningar. EU:s metanförordning refererar till
            OGMP 2.0 som bästa praxis.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Nivå 4 – platsspecifik mätning', text: '– bottom-up-mätning vid varje anläggning med kalibrerade sensorer. EcoDrones drönarmätningar levererar data som uppfyller dessa krav.' },
              { bold: 'Nivå 5 – reconciliering', text: '– platsspecifik data reconcilieras med top-down-mätningar. Drönarmätning utgör en central del av bottom-up-komponenten.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-400">
            Läs mer om{' '}
            <Link href="/compliance/ogmp" className="text-cyan-400 hover:underline">OGMP 2.0 och hur EcoDrone stödjer er rapportering</Link>.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en LDAR-inspektion till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Planering & HSE-samordning', desc: 'Vi kartlägger anläggningen, identifierar inspektionszoner och samordnar med er HSE-avdelning. Flygtillstånd och säkerhetsprotokoll fastställs.' },
              { step: '2', title: 'OGI-screening', desc: 'Drönaren flyger systematiskt över anläggningen med OGI-kamera och identifierar gasplymer vid alla tillgängliga komponenter – inklusive tak, höga kolonner och rörbryggor.' },
              { step: '3', title: 'Kvantifiering', desc: 'Identifierade läckor kvantifieras med TDLAS-sensor och beräkningsmodeller. Varje läcka kopplas till en specifik komponent med GPS-koordinat och komponent-ID.' },
              { step: '4', title: 'LDAR-rapport', desc: 'Komplett rapport med detekterade läckor, kvantifierade emissioner, prioriterad åtgärdslista och dokumentation som uppfyller regulatoriska krav.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Säkerhet */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Säkerhet vid inspektion</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Drönarbaserad inspektion eliminerar behovet av att skicka personal till svåråtkomliga
            och potentiellt farliga platser – höjdarbete vid fackelstackar, inspektion av tanktoppar
            och kontroll i explosionsklassade zoner. Det minskar riskexponeringen dramatiskt jämfört
            med traditionella metoder.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Vi följer anläggningens säkerhetsrutiner fullt ut och samordnar
            med er driftorganisation för att minimera påverkan på pågående verksamhet.
          </p>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-rapport', desc: 'Komplett inspektionsrapport med alla detekterade läckor, komponent-ID, GPS-position och kvantifierad emissionsrate – redo för regulatorisk rapportering.' },
              { title: 'OGI-dokumentation', desc: 'Video- och bildmaterial från OGI-inspektionen som visar identifierade gasplymer, kopplat till specifika komponenter.' },
              { title: 'Åtgärdslista', desc: 'Prioriterad lista med rekommenderade reparationer, uppskattad utsläppsminskning per åtgärd och föreslagna tidsramar.' },
              { title: 'OGMP 2.0-data', desc: 'Kvantitativ data formaterad för OGMP 2.0 nivå 4-rapportering med definierade osäkerhetsintervall och transparent metodik.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om LDAR och gasdetektion" />

      <CtaBand
        heading="Behöver ni LDAR-inspektion eller gasdetektion?"
        description="Kontakta oss för att diskutera hur vi kan hjälpa er uppfylla kraven i EU:s metanförordning och OGMP 2.0."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion', description: 'Systematisk läckdetektering med OGI och TDLAS – kärnan i er LDAR-compliance.' },
        { title: 'OGI-kamera för gasvisualisering', href: '/tjanster/ogi-kamera', description: 'Visuell gasdetektion med infraröd teknik – identifierar läckor i realtid.' },
        { title: 'EU:s metanförordning och LDAR-krav', href: '/compliance/eu-metanforordning', description: 'Bindande krav på LDAR-program för olje- och gassektorn från 2024.' },
        { title: 'OGMP 2.0 nivå 4/5 metanmätning', href: '/compliance/ogmp', description: 'Platsspecifik mätmetodik som uppfyller OGMP 2.0:s rapporteringskrav.' },
      ]} />
    </>
  )
}
