import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { RelatedContent } from '@/components/RelatedContent'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emissionsinspektion hamnar & LNG-terminaler',
  description:
    'Emissionsinspektion vid hamnar och LNG-terminaler med drönare. Metanläcksökning vid bunkring, lagring och förgasning. OGMP 2.0-kompatibel dokumentation.',
  alternates: { canonical: '/branscher/hamnar' },
  openGraph: {
    title: 'Emissionsinspektion hamnar & LNG-terminaler | EcoDrone',
    description:
      'Drönarbaserad emissionsinspektion vid hamnar och LNG-terminaler. Metandetektering, VOC-screening och compliance-rapportering.',
    url: '/branscher/hamnar',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emissionsinspektion för hamnar och LNG-terminaler',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Drönarbaserad emissionsinspektion vid hamnar och LNG-terminaler med metandetektering, OGI-screening och compliance-rapportering enligt EU:s metanförordning och OGMP 2.0.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'Emissionsinspektion LNG',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka emissioner uppstår vid LNG-terminaler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LNG-terminaler kan ha metanutsläpp vid lastning, lossning, lagring och förgasning. Boil-off-gas, läckage vid kopplingar och ventilationsförluster är vanliga källor. EU:s metanförordning kräver att dessa övervakas och minimeras genom LDAR-program.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni inspektera under pågående hamnverksamhet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Drönarbaserad inspektion sker kontaktfritt och kräver inget driftstopp. Vi samordnar flygningar med er driftledning och hamnens säkerhetsorganisation för att undvika konflikter med fartygsrörelser och lastoperationer. Inspektionen är helt icke-invasiv.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka regulatoriska krav gäller för hamnar och LNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning (2024/1787) ställer krav på LDAR och emissionsrapportering för LNG-infrastruktur. Miljöbalken och Seveso-direktivet kan ställa ytterligare krav beroende på anläggningens klassificering. OGMP 2.0 anger bästa praxis för mätmetodik vid olje- och gasinfrastruktur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mäter ni även fartygsutsläpp i hamnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi kan screena gashalter i hamnbassängen under lastoperationer och vid kaj för att kvantifiera emissioner från fartyg. Det ger ett komplement till självrapporterade utsläppsdata och stöder hamnens miljöarbete och klimatbokslut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka svenska hamnar och terminaler berörs av EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hamnar med LNG-bunkringsinfrastruktur berörs direkt. LNG-terminaler och planerade utbyggnader omfattas fullt ut. Även hamnar som hanterar petroleumprodukter och kemikalier kan beröras av relaterade emissionskrav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur dokumenteras inspektionsresultaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varje inspektion dokumenteras med identifierade läckor, GPS-positioner, komponent-ID, kvantifierat emissionsflöde, OGI-videomaterial och inspektionsdatum. Rapporterna uppfyller OGMP 2.0 nivå 4-krav och EU:s metanförordnings dokumentationskrav för LDAR-program.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan drönaren flyga i hamnens restriktionsområden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarflygning i kontrollerade luftrum och restriktionsområden kräver tillstånd och samordning. Vi koordinerar med Transportstyrelsen, hamnmyndigheten och relevanta säkerhetsorganisationer. Alla flygningar genomförs med piloter utbildade enligt EASA:s regelverk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar en emissionsinspektion vid en hamn eller LNG-terminal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kostnaden beror på anläggningens storlek, antal komponenter och inspektionsomfattning. Kontakta oss för en skräddarsydd offert baserad på era specifika behov och regulatoriska krav.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function HamnarPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Hamnar & LNG-terminaler', href: '/branscher/hamnar' },
      ]} />

      <Hero
        title="Hamnar och LNG-terminaler"
        subtitle="Emissionsinspektion vid hamnar och LNG-terminaler med drönare. Detektera metanläckor vid bunkring, lagring och förgasning – utan driftstopp och med compliance-redo dokumentation enligt EU:s metanförordning."
        ctaText="Boka inspektion"
        ctaHref="/kontakt"
        trustItems={['LNG-metandetektering', 'OGI + TDLAS', 'OGMP 2.0-kompatibel']}
      />

      {/* Branschutmaning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Emissionsövervakning vid hamnar och LNG-infrastruktur</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Hamnar med LNG-bunkring, LNG-terminaler och gasimportanläggningar har komplexa
            emissionsutmaningar. Metan kan läcka vid kopplingar under lastning och lossning,
            från boil-off-system, lagringstankar och rörledningar. EU:s metanförordning
            (2024/1787) kräver att dessa emissioner övervakas systematiskt och att LDAR-program
            implementeras för all LNG-infrastruktur inom EU.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Sverige har flera hamnar med LNG-infrastruktur som omfattas direkt av EU:s
            metanförordning. Dessa anläggningar behöver implementera systematisk
            emissionsövervakning med dokumenterad metodik.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            EcoDrones drönarbaserade inspektion kombinerar OGI-kamera för visuell läckdetektion
            med TDLAS-sensor för kvantifiering. Vi inspekterar under pågående drift utan att
            störa lastoperationer eller fartygsrörelser, och dokumenterar resultaten i rapporter
            som uppfyller OGMP 2.0 nivå 4 och EU:s krav på LDAR-dokumentation.
          </p>
        </div>
      </section>

      {/* Tjänster */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Tjänster för hamnar och LNG-terminaler</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Vi erbjuder ett komplett utbud av emissionsinspektionstjänster anpassade för
            hamnmiljöer och LNG-infrastruktur. Varje tjänst levereras med dokumentation
            som uppfyller gällande regulatoriska krav.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-inspektion LNG', desc: 'Systematisk läckdetektering och kvantifiering vid LNG-terminaler. Inspekterar lastningsarmar, kopplingar, lagringstankar, rörledningar, ventiler och förgasningsenheter med OGI och TDLAS.' },
              { title: 'Bunkringsövervakning', desc: 'Screena gashalter under LNG-bunkringsoperationer för att identifiera och kvantifiera metanutsläpp. Dokumenterar emissioner vid varje bunkringstillfälle för spårbarhet och optimering.' },
              { title: 'VOC-screening vid lastning', desc: 'Kartlägg flyktiga organiska ämnen (VOC) vid lastning och lossning av petroleumprodukter, kemikalier och andra lösningsmedel. Identifiera emissionskällor och bedöm omgivningspåverkan.' },
              { title: 'Omgivningskartläggning', desc: 'Kartlägg gashalter och luftkvalitet runt hamnområdet för egenkontroll och miljörapportering. Bedöm påverkan på närliggande bebyggelse och verksamma i hamnen.' },
              { title: 'Plymmätning vid terminaler', desc: 'Traversmätning nedvinds om LNG-terminaler för att kvantifiera totala anläggningsemissioner. Underlag för OGMP 2.0 nivå 5 reconciliation.' },
              { title: 'Fartygsutsläppsscreening', desc: 'Screena metanhalter runt fartyg vid kaj under lastoperationer. Identifiera oplanerade utsläpp och ge oberoende data som komplement till fartygens egenrapportering.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU:s metanförordning och hamnar */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">EU:s metanförordning och hamninfrastruktur</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            EU:s metanförordning (2024/1787) är det första EU-regelverket som specifikt
            reglerar metanutsläpp från energisektorn. LNG-infrastruktur i hamnar – terminaler,
            lagringsanläggningar, förgasningsverk och bunkringsinfrastruktur – omfattas fullt
            ut av förordningens krav på LDAR-program och emissionsrapportering.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'LDAR-krav', text: '– systematisk inspektion av alla komponenter med definierade inspektionsintervall. Ventiler, flänsar, kopplingar, pumptätningar och lagringstankar ska inspekteras regelbundet.' },
              { bold: 'Kvantifieringskrav', text: '– identifierade läckor ska kvantifieras med godkända metoder. OGI och TDLAS godkänns som inspektionsmetoder enligt förordningen.' },
              { bold: 'Reparationstidsfrister', text: '– läckor ska åtgärdas inom specifika tidsfrister beroende på storlek. Stora läckor kräver omedelbar åtgärd. Uppföljningsinspektion krävs efter reparation.' },
              { bold: 'Rapporteringskrav', text: '– operatörer ska rapportera metanutsläpp till behöriga myndigheter med specificerad datakvalitet och dokumenterad metodik.' },
              { bold: 'Ventileringsförbud', text: '– rutinmässig ventilering och flakning av metan förbjuds med begränsade undantag för säkerhet. Boil-off-gas ska hanteras, inte ventileras.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seveso och säkerhet */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Säkerhet och Seveso-klassificering</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Många LNG-terminaler och hamnar med gasinfrastruktur klassificeras under
            Seveso-direktivet (2012/18/EU), vilket ställer särskilda krav på riskhantering
            och säkerhet. Emissionsövervakning bidrar inte bara till miljöcompliance utan
            också till säkerhetsarbetet genom tidig identifiering av läckor som kan
            utgöra brand- eller explosionsrisk.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            EcoDrones drönarbaserade inspektion är särskilt lämpad för Seveso-klassificerade
            anläggningar. Inspektionen sker kontaktfritt från säkert avstånd – ingen personal
            behöver befinna sig i riskzoner nära gasinfrastruktur. OGI-kameran detekterar
            läckor visuellt i realtid, vilket möjliggör omedelbar säkerhetsbedömning om
            en allvarlig läcka identifieras.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Kontaktfri inspektion', desc: 'Drönaren inspekterar från säkert avstånd. Ingen personal i riskzoner, inga gnistkällor nära gasinfrastruktur. Idealisk för ATEX-klassificerade områden.' },
              { title: 'Realtidsdetektering', desc: 'OGI-kameran ger livebild av gasutsläpp. Vid allvarliga läckor kan driftpersonalen larmas omedelbart för säkerhetsåtgärder.' },
              { title: 'Utbildade piloter', desc: 'Alla piloter är utbildade enligt EASA:s regelverk för drönaroperationer.' },
              { title: 'Samordnad flygning', desc: 'Flygplanen samordnas med hamnens driftledning, VTS (Vessel Traffic Service) och säkerhetsorganisation för att undvika konflikter med fartygsrörelser och lastoperationer.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Leverabler och dokumentation</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Varje inspektion levereras med komplett dokumentation som uppfyller OGMP 2.0
            nivå 4-krav och EU:s metanförordnings dokumentationskrav. Rapporterna är
            utformade för att fungera som compliance-underlag vid tillsyn, miljörapportering
            och klimatbokslut.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'LDAR-rapport', text: '– komplett lista över inspekterade komponenter med identifierade läckor, GPS-positioner, komponent-ID och kvantifierade emissionsflöden.' },
              { bold: 'OGI-videodokumentation', text: '– visuellt material som visar identifierade läckor med OGI-kamera. Varje läcka dokumenteras med tidsstämpel och position.' },
              { bold: 'Kvantifieringsrapport', text: '– beräknade emissionsflöden per läcka och totalt för anläggningen med dokumenterad mätosäkerhet och konfidensintervall.' },
              { bold: 'Åtgärdsplan', text: '– prioriterad lista med reparationsrekommendationer baserade på läckornas storlek och utsläppsbidrag. Stöder planering av underhållsstopp.' },
              { bold: 'Compliance-sammanfattning', text: '– sammanfattande dokument som visar hur inspektionen uppfyller EU:s metanförordnings krav och OGMP 2.0-standarden.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om mätning vid hamnar och LNG" />

      <CtaBand
        heading="Behöver ni emissionsinspektion vid er hamn eller terminal?"
        description="Kontakta oss för att diskutera era behov och planera en inspektion anpassad efter era regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion', description: 'Systematisk läckdetektering vid LNG-infrastruktur och bunkringsanläggningar.' },
        { title: 'EU:s metanförordning och LDAR-krav', href: '/compliance/eu-metanforordning', description: 'Bindande krav på LDAR-program som direkt berör LNG-terminaler och gashantering.' },
        { title: 'Utsläppsmätning för olja, gas och raffinaderier', href: '/branscher/olja-gas', description: 'Kompletterande bransch inom samma regulatoriska ramverk.' },
      ]} />
    </>
  )
}
