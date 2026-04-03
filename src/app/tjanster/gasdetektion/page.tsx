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
  title: 'Gasdetektion med drönare – VOC, H₂S, NH₃ | EcoDrone',
  description:
    'Gasdetektion med drönare för VOC, H₂S, NH₃ och andra gaser. Screening av stora ytor och svårtillgängliga områden. Snabb och säker kartläggning.',
  alternates: { canonical: '/tjanster/gasdetektion' },
  openGraph: {
    title: 'Gasdetektion med drönare | EcoDrone Sverige',
    description:
      'Drönarbaserad gasdetektion av VOC, svavelväte, ammoniak och andra industriella gaser. Effektiv screening utan driftstopp.',
    url: '/tjanster/gasdetektion',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gasdetektion med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Drönarbaserad gasdetektion för screening och kartläggning av VOC, H₂S, NH₃ och andra industriella gaser vid anläggningar och miljöobjekt.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Gasdetektion',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka gaser kan ni detektera med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi detekterar VOC (flyktiga organiska föreningar), H₂S (svavelväte), NH₃ (ammoniak), CO (kolmonoxid), SO₂ (svaveldioxid), NO₂ (kvävedioxid) och andra industriella gaser. Sensoruppsättningen anpassas efter era specifika behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan gasdetektion och gasmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gasdetektion fokuserar på att identifiera var gaser finns och flagga förhöjda nivåer. Gasmätning innefattar dessutom precision i koncentrationsbestämning och eventuell kvantifiering av emissionsflöden. Vi erbjuder båda, beroende på ert behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt kan ni rycka ut vid akuta behov?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vid akuta situationer som misstänkta gasläckage eller miljöincidenter strävar vi efter snabb mobilisering. Kontakta oss direkt så planerar vi insatsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan gasdetektion med drönare ersätta personburen gasmätare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarbaserad gasdetektion är ett kraftfullt komplement till personburna gasmätare. Drönaren ger snabb screening av stora ytor och svårtillgängliga områden som sedan kan följas upp med punktmätning. Vid riskbedömning och zonklassificering ger drönaren en tryggare arbetsmiljö.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Behovsanalys',
    description:
      'Vi identifierar vilka gaser ni behöver detektera, definierar mätområdet och väljer rätt sensoruppsättning. Eventuella riskzoner och säkerhetskrav beaktas.',
  },
  {
    title: 'Sensorförberedelse',
    description:
      'Sensorer konfigureras för de aktuella gaserna och kalibreras. PID-detektorer för VOC, elektrokemiska sensorer för H₂S och NH₃, samt NDIR för CO₂ och CH₄.',
  },
  {
    title: 'Screening-flygning',
    description:
      'Drönaren flyger systematiskt över mätområdet med kontinuerlig gasregistrering. GPS-kopplad data ger spatial kartläggning av gaskoncentrationer.',
  },
  {
    title: 'Hotspot-identifiering',
    description:
      'Områden med förhöjda nivåer identifieras och markeras. Vid behov utförs detaljmätning med tätare flyglinjer för att avgränsa källorna.',
  },
  {
    title: 'Rapportering',
    description:
      'Komplett rapport med koncentrationskartor, hotspot-lista och rekommendationer. Data levereras i format som passar ert HSE-system och GIS.',
  },
]

const deliverables = [
  {
    title: 'Gaskoncentrationskartor',
    description:
      'Georefererade kartor med färgkodade gashalter per detekterad gas. Visar spatial fördelning och identifierar områden med förhöjda koncentrationer.',
  },
  {
    title: 'Hotspot-rapport',
    description:
      'Lista över identifierade hotspots med koordinater, uppmätta nivåer, bedömd källa och rekommenderad åtgärd. Prioriterad efter risk och nivå.',
  },
  {
    title: 'Trendanalys (vid återkommande mätning)',
    description:
      'Jämförelse med tidigare mätresultat som visar hur gaskoncentrationer och hotspots har förändrats över tid. Underlag för effektuppföljning.',
  },
  {
    title: 'Detektionsrapport',
    description:
      'Sammanfattande rapport med metodik, sensorspecifikationer, detektionsgränser, resultat och begränsningar. Redo för HSE-system och tillsyn.',
  },
  {
    title: 'Digitala kartlager',
    description:
      'GeoJSON/KML-filer för integration i ert GIS-system. Möjliggör overlay med egna datalager och jämförelse mellan mättillfällen.',
  },
]

const faqItems = [
  {
    question: 'Vilka gaser kan ni detektera med drönare?',
    answer:
      'Vi detekterar en bred uppsättning gaser: VOC (flyktiga organiska föreningar som bensen, toluen, xylen), H₂S (svavelväte), NH₃ (ammoniak), CO (kolmonoxid), SO₂ (svaveldioxid), NO₂ (kvävedioxid), CH₄ (metan) och CO₂ (koldioxid). Sensoruppsättningen anpassas efter era specifika behov och de gaser som är relevanta för er verksamhet.',
  },
  {
    question: 'Vad är skillnaden mellan gasdetektion och gasmätning?',
    answer:
      'Gasdetektion fokuserar på att identifiera var gaser finns i förhöjda koncentrationer och flagga riskområden. Det är en screening-metod som täcker stora ytor snabbt. Gasmätning innefattar dessutom högre precision i koncentrationsbestämning och eventuell kvantifiering av emissionsflöden. Vi erbjuder båda nivåerna beroende på era krav och frågeställningar.',
  },
  {
    question: 'Hur snabbt kan ni rycka ut vid akuta behov?',
    answer:
      'Vid akuta situationer som misstänkta gasläckage, miljöincidenter eller olyckor strävar vi efter snabb mobilisering. Vi kan anpassa sensoruppsättningen efter den misstänkta gasen. Kontakta oss direkt så planerar vi insatsen.',
  },
  {
    question: 'Kan gasdetektion med drönare ersätta personburen gasmätare?',
    answer:
      'Drönarbaserad gasdetektion är ett kraftfullt komplement till personburna gasmätare. Drönaren excellerar vid snabb screening av stora ytor, inspektion av svårtillgängliga områden och kartläggning utan att exponera personal. Personburna mätare behövs fortfarande för punktmätning, verifiering och arbete i trånga utrymmen. Kombinationen ger det bästa resultatet.',
  },
  {
    question: 'Vilka detektionsgränser har era sensorer?',
    answer:
      'Detektionsgränserna varierar per gas och sensortyp. Den exakta nivån beror på sensor, flygavstånd och omgivningsförhållanden. Vi specificerar alltid de faktiska detektionsgränserna i rapporten för varje gas och mätning.',
  },
]

export default function GasdetektionPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Gasdetektion', href: '/tjanster/gasdetektion' },
      ]} />

      <Hero
        title="Gasdetektion med drönare"
        subtitle="Bred gasdetektion av VOC, H₂S, NH₃ och andra industriella gaser med drönare. Screena stora ytor och svårtillgängliga områden snabbt och säkert – utan att exponera personal."
        ctaText="Boka gasdetektion"
        ctaHref="/kontakt"
        trustItems={[
          'VOC, H₂S, NH₃, CO, SO₂',
          'PID + elektrokemiska sensorer',
          'Snabb screening av stora ytor',
        ]}
      />

      {/* Introduktion */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Bred gasdetektion – snabbt och säkert</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Industriella verksamheter hanterar ofta gaser som kan vara hälsofarliga,
            explosionsbenägna eller miljöskadliga. Traditionell gasdetektion med personburna
            instrument är tidskrävande och begränsad till platser som är fysiskt åtkomliga.
            Dessutom exponeras personal för potentiellt farliga miljöer.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Vår drönarbaserade gasdetektion löser dessa utmaningar. Drönaren flyger med
            kalibrerade gassensorer över stora ytor och svårtillgängliga områden och
            kartlägger gaskoncentrationer utan att personal behöver vistas i riskzoner.
            Resultatet är en heltäckande bild av var gaser finns i förhöjda nivåer – redo
            att använda som underlag för åtgärder, riskbedömning och egenkontroll.
          </p>
        </div>
      </section>

      {/* Gaser vi detekterar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Gaser vi detekterar</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'VOC (flyktiga organiska)',
                desc: 'Bensen, toluen, xylen och andra VOC från industri, kemilager och processventilationer.',
                sensor: 'PID-detektor',
              },
              {
                title: 'H₂S (svavelväte)',
                desc: 'Giftig gas från raffinaderier, reningsverk, pappersmassa och biogasanläggningar.',
                sensor: 'Elektrokemisk',
              },
              {
                title: 'NH₃ (ammoniak)',
                desc: 'Från kylanläggningar, jordbruk, gödselhantering och kemisk industri.',
                sensor: 'Elektrokemisk',
              },
              {
                title: 'CO (kolmonoxid)',
                desc: 'Ofullständig förbränning, industriprocesser och läckor från gasinstallationer.',
                sensor: 'Elektrokemisk',
              },
              {
                title: 'SO₂ (svaveldioxid)',
                desc: 'Förbränning av svavelhaltiga bränslen, metallsmältverk och massa/papper.',
                sensor: 'Elektrokemisk',
              },
              {
                title: 'NO₂ (kvävedioxid)',
                desc: 'Förbränningsprocesser, salpetersyraproduktion och tung trafik.',
                sensor: 'Elektrokemisk',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                <p className="mt-2 text-xs text-slate-400">Sensor: {item.sensor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tillämpningar */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              'Screening av industriområden för hälso- och miljöfarliga gaser',
              'Riskbedömning och zonklassificering av explosionsfarliga områden (ATEX)',
              'Kartläggning av luktproblem vid reningsverk, deponier och kompostanläggningar',
              'Incidentutredning – snabb identifiering av utsläppskälla vid gaslarm',
              'Kontroll av markföroreningar – detektion av avgående gaser från förorenad mark',
              'Övervakning vid sanerings- och rivningsarbeten',
              'Egenkontroll enligt miljöbalken – kartlägg emissioner från er verksamhet',
              'Gränsövervakningsprogram – mätning vid anläggningsgräns mot bostadsområden',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Fördelar med drönarbaserad gasdetektion</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Ökad arbetssäkerhet',
                desc: 'Ingen personal i riskzoner. Drönaren detekterar gaser på avstånd och kartlägger farliga områden innan personal behöver gå in.',
              },
              {
                title: 'Snabb ytäckning',
                desc: 'Stora industriområden screenas på timmar istället för dagar. Perfekt för periodisk egenkontroll och akuta insatser.',
              },
              {
                title: 'Svårtillgängliga platser',
                desc: 'Drönaren når platser som normalt kräver ställning, lyft eller klätterutrustning. Tankytor, rörbryggor och höga skorstenar.',
              },
              {
                title: 'Georefererade resultat',
                desc: 'Varje mätvärde kopplas till en GPS-position. Resultaten presenteras som kartor som visar exakt var problemen finns.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Sensorteknik</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Vi använder en kombination av sensortekniker beroende på vilka gaser ni behöver
            detektera. Sensorerna monteras på industriella drönare med stabiliserad flygning
            och lång operativ räckvidd.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'PID (fotojonisationsdetektor)',
                text: '– för VOC-screening med hög känslighet. Detekterar en bred uppsättning flyktiga organiska föreningar.',
              },
              {
                bold: 'Elektrokemiska sensorer',
                text: '– specifika sensorer för H₂S, NH₃, CO, SO₂ och NO₂. Kompakta, pålitliga och med snabb responstid.',
              },
              {
                bold: 'NDIR (nondispersive infrared)',
                text: '– för CO₂ och CH₄. Stabil och robust teknik med god långtidsrepeterbarhet.',
              },
              {
                bold: 'Multigas-konfiguration',
                text: '– vi kan montera flera sensortyper samtidigt för att detektera flera gaser i samma flygning.',
              },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så genomför vi gasdetektionen" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om gasdetektion" />

      <CtaBand
        heading="Behöver ni kartlägga gasmiljön?"
        description="Kontakta oss för en behovsanalys. Vi identifierar rätt sensoruppsättning och planerar gasdetektionen utifrån era förutsättningar."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Växthusgasmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
