import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FaqAccordion } from '@/components/FaqAccordion'
import { ORG_REF, OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Tjänster – drönarbaserad gasmätning',
  description:
    'Utsläppsmätning, metanmätning, LDAR, OGI-kamera, plymmätning, växthusgasmätning och gasdetektion med drönare. Professionella mättjänster i hela Sverige.',
  alternates: { canonical: '/tjanster' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Tjänster – drönarbaserad gasmätning | EcoDrone',
    description:
      'Komplett utbud av drönarbaserade mättjänster för industri, energi och miljö. Kartlägg utsläpp med precision och få beslutsunderlag ni kan agera på.',
    url: '/tjanster',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Drönarbaserade mättjänster',
  provider: ORG_REF,
  description:
    'Komplett utbud av drönarbaserade mättjänster för kartläggning av gasemissioner inom industri, energi och miljö.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  {
    title: 'Behovsanalys',
    description:
      'Vi diskuterar ert behov, identifierar rätt mättjänst och planerar uppdraget utifrån er anläggning, era frågeställningar och eventuella regulatoriska krav.',
  },
  {
    title: 'Fältarbete',
    description:
      'Våra piloter flyger drönaren med kalibrerade sensorer över ert område. Systematisk flygning säkerställer heltäckande datainsamling.',
  },
  {
    title: 'Analys & QA',
    description:
      'Rådata bearbetas, kvalitetssäkras och kopplas till kartunderlag. Mätosäkerhet dokumenteras och alla resultat genomgår intern granskning.',
  },
  {
    title: 'Leverans & uppföljning',
    description:
      'Ni får rapport, kartor och digitala lager. Vi går igenom resultaten tillsammans och ger rekommendationer för åtgärder och uppföljande mätningar.',
  },
]

const faqItems = [
  {
    question: 'Vilka gaser kan ni mäta med drönare?',
    answer:
      'Vi mäter metan (CH₄), koldioxid (CO₂), lustgas (N₂O), flyktiga organiska föreningar (VOC), svavelväte (H₂S), ammoniak (NH₃) och andra industriella gaser. Sensoruppsättningen anpassas efter ert behov och de specifika gaser ni behöver kartlägga.',
  },
  {
    question: 'Hur skiljer sig drönarbaserad mätning från markbunden mätning?',
    answer:
      'Drönarmätning ger snabbare täckning av stora ytor med hög rumslig upplösning. Ni får en heltäckande karta istället för punktvisa värden, och mätningen kan genomföras utan driftstopp eller personalnärvaro i riskzoner. Det innebär lägre kostnad per mätt yta och bättre beslutsunderlag.',
  },
  {
    question: 'Vilka branscher arbetar ni med?',
    answer:
      'Vi arbetar med deponiägare, biogasanläggningar, reningsverk, petrokemisk industri, raffinaderier, kraftverk, gruvnäring och avfallshantering. Våra tjänster anpassas efter varje sektors specifika krav, regelverk och frågeställningar.',
  },
  {
    question: 'Kan mätresultaten användas för regulatorisk rapportering?',
    answer:
      'Ja. Alla rapporter innehåller dokumenterad metodik, mätosäkerhet och fullständig spårbarhet. Resultaten fungerar som underlag vid tillsyn, miljörapportering, klimatbokslut och LDAR-program enligt EU:s metanförordning.',
  },
  {
    question: 'Hur lång tid tar ett typiskt mätuppdrag?',
    answer:
      'Fältarbetets längd beror på anläggningens storlek och komplexitet. Rapport och kartleverans sker enligt överenskommen tidsplan. Vi kan även erbjuda snabbleverans vid akuta behov.',
  },
]

// FAQ-schemat härleds från de synliga FAQ-frågorna (faqItems) så att
// strukturerad data alltid matchar sidans innehåll – ett krav från Google.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}


function DroneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

function MethaneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
}

function LdarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  )
}

function PlumeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  )
}

function GreenhouseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}

function GasDetectionIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function EmissionIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function SurfaceEmissionIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  )
}

function ScreeningIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

function MonitoringIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function ThermalIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  )
}

export default function TjansterHub() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
      ]} />

      <Hero
        title="Drönarbaserade mättjänster för industri och miljö"
        subtitle="EcoDrone erbjuder ett komplett utbud av drönarbaserade mättjänster för kartläggning av gasemissioner. Från metanmätning och LDAR-inspektion till OGI-kameraflygning och generell gasdetektion – vi levererar beslutsunderlag ni kan agera på."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        secondaryCtaText="Se våra tjänster"
        secondaryCtaHref="#tjanster"
        trustItems={[
          'TDLAS- och OGI-teknik',
          'Hela Sverige',
          'Dokumenterad mätosäkerhet',
        ]}
        large
      />

      {/* Tjänsteöversikt */}
      <section id="tjanster" className="section-padding">
        <div className="container-wide">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Våra mättjänster</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Alla uppdrag levereras med georefererad mätdata, dokumenterad mätosäkerhet
            och revisionsklara rapporter formaterade för er specifika compliance-standard.
            Varje tjänst anpassas efter era behov, regulatoriska krav och anläggningsförutsättningar.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Utsläppsmätning med drönare"
              description="Kartlägg och kvantifiera gasemissioner från hela er anläggning. Heltäckande screening som identifierar och prioriterar utsläppskällor."
              href="/tjanster/utslappsmating-dronare"
              icon={<DroneIcon />}
            />
            <ServiceCard
              title="Metanmätning"
              description="Precisionsdetektering av metanläckor med TDLAS-sensorer. Identifiera och kvantifiera CH₄-utsläpp från deponier, biogas och industri."
              href="/tjanster/metanmatning"
              icon={<MethaneIcon />}
            />
            <ServiceCard
              title="LDAR-inspektion"
              description="Leak Detection and Repair med drönare. Uppfyll EU:s metanförordning med effektiv screening av fugitiva emissioner."
              href="/tjanster/ldar-inspektion"
              icon={<LdarIcon />}
            />
            <ServiceCard
              title="OGI-kamera"
              description="Optical Gas Imaging med infraröd kamera monterad på drönare. Se gasläckor i realtid och dokumentera med video."
              href="/tjanster/ogi-kamera"
              icon={<CameraIcon />}
            />
            <ServiceCard
              title="Plymmätning"
              description="Kvantifiera emissioner från enskilda källor genom drönarbaserad traversmätning av gasplymer nedvinds."
              href="/tjanster/plymmating"
              icon={<PlumeIcon />}
            />
            <ServiceCard
              title="Växthusgasmätning"
              description="Mät CH₄, N₂O och CO₂ från industriella processer. Ersätt schabloner med faktiska mätvärden i ert klimatbokslut."
              href="/tjanster/vaxthusgasmatning"
              icon={<GreenhouseIcon />}
            />
            <ServiceCard
              title="Gasdetektion"
              description="Bred gasdetektion av VOC, H₂S, NH₃ och andra gaser. Screening av stora ytor och svårtillgängliga områden."
              href="/tjanster/gasdetektion"
              icon={<GasDetectionIcon />}
            />
            <ServiceCard
              title="Emissionskartering"
              description="Kombinerad mätning med flera sensortyper för en komplett emissionsbild av er anläggning."
              href="/tjanster/utslappsmating-dronare"
              icon={<EmissionIcon />}
            />
            <ServiceCard
              title="Ytemissionsmätning"
              description="Kvantitativ drönarbaserad plymmätning för deponier och reningsverk. Standardiserad metodik för kommunala och privata avfallsanläggningar."
              href="/tjanster/plymmating"
              icon={<SurfaceEmissionIcon />}
            />
            <ServiceCard
              title="Pre-compliance screening"
              description="Kostnadseffektiv inledande flygning för att kartlägga om er anläggning har mätbara utsläppskällor. Naturlig inledning till fullständig LDAR eller plymmätning."
              href="/tjanster/gasdetektion"
              icon={<ScreeningIcon />}
            />
            <ServiceCard
              title="Årsavtal / Löpande monitoring"
              description="Strukturerat abonnemangsupplägg för anläggningar med återkommande mätbehov. Inkluderar trendanalys och jämförbarhet mellan mätperioder."
              href="/kontakt"
              icon={<MonitoringIcon />}
            />
            <ServiceCard
              title="Kombinerad termisk inspektion"
              description="Termokamera och gassensor monterade parallellt. Gasdetektion och termisk kartläggning av processutrustning under ett flygtillfälle."
              href="/tjanster/utslappsmating-dronare"
              icon={<ThermalIcon />}
            />
          </div>
        </div>
      </section>

      {/* Varför EcoDrone */}
      <section className="section-padding section-muted">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Varför välja EcoDrone?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Vi kombinerar avancerad sensorteknik med professionell drönarflygning och djup
            domänkunskap inom emissionsmätning. Det innebär tillförlitliga resultat som håller
            för regulatorisk granskning.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Avancerad teknik',
                desc: 'TDLAS, OGI, elektrokemiska sensorer och PID-detektorer. Vi väljer rätt sensor för rätt uppgift och kalibrerar inför varje uppdrag.',
              },
              {
                title: 'Dokumenterad kvalitet',
                desc: 'Varje mätning levereras med fullständig spårbarhet, dokumenterad mätosäkerhet och transparent redovisning av påverkande faktorer.',
              },
              {
                title: 'Regulatorisk kompetens',
                desc: 'Vi förstår kraven i EU:s metanförordning, MRR, ISO 14064 och svenska miljöbalken. Resultaten anpassas för er rapportering.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så fungerar det" />

      {/* Branscher */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Branscher vi arbetar med</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Våra mättjänster riktar sig till verksamheter som behöver kartlägga, kvantifiera
            eller verifiera gasemissioner – oavsett om det är lagkrav, frivillig rapportering
            eller operativ optimering som driver behovet.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Olja & gas', desc: 'Raffinaderier, terminaler, rörledningar och produktionsanläggningar.' },
              { title: 'Avfall & deponi', desc: 'Aktiva och avslutade deponier, avfallsanläggningar och saneringsprojekt.' },
              { title: 'Biogas & kraftvärme', desc: 'Biogasanläggningar, rötningsanläggningar och kraftvärmeverk.' },
              { title: 'Vatten & avlopp', desc: 'Reningsverk, pumpstationer och slambehandlingsanläggningar.' },
              { title: 'Kemi & petrokemi', desc: 'Kemianläggningar, petrokemiska kluster och processområden.' },
              { title: 'Gruva & mineral', desc: 'Gruvområden, upplag och mineralbearbetningsanläggningar.' },
            ].map((item) => (
              <div key={item.title} className="card-surface p-5">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stödjande tjänster */}
      <section className="section-padding section-muted">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Metodik och leveranser</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Vi levererar inte bara mätdata – vi levererar beslutsunderlag. Läs mer om vår
            metodik och vilka leveranser ni kan förvänta er.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Metodik och kvalitetssäkring',
                desc: 'Så säkerställer vi datakvaliteten: planering, kalibrering, bearbetning och spårbarhet.',
                href: '/tjanster/metodik',
              },
              {
                title: 'Dataleveranser – vad ni får',
                desc: 'Rapporter, koncentrationskartor, hotspot-listor och digitala kartlager.',
                href: '/tjanster/leveranser',
              },
            ].map((item) => (
              <a key={item.href} href={item.href} className="card-surface p-6 hover:border-slate-400 transition-colors block">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om våra mättjänster" />

      <CtaBand
        heading="Redo att kartlägga era emissioner?"
        description="Kontakta oss för en kostnadsfri behovsanalys. Vi identifierar rätt mättjänst och planerar uppdraget utifrån er anläggning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
