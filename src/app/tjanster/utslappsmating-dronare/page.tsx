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
  title: 'Utsläppsmätning med drönare | EcoDrone Sverige',
  description:
    'Drönarbaserad utsläppsmätning för industri och miljö. Kartlägg gasemissioner med hög precision och få handlingsbara rapporter. Hela Sverige.',
  alternates: { canonical: '/tjanster/utslappsmating-dronare' },
  openGraph: {
    title: 'Utsläppsmätning med drönare | EcoDrone Sverige',
    description:
      'Kartlägg och kvantifiera gasemissioner med drönarbaserad utsläppsmätning. Hög rumslig upplösning, dokumenterad mätosäkerhet och beslutsunderlag.',
    url: '/tjanster/utslappsmating-dronare',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad utsläppsmätning för kartläggning och kvantifiering av gasemissioner från industriella anläggningar och miljöobjekt.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur fungerar drönarbaserad utsläppsmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönaren utrustas med kalibrerade gassensorer och flyger systematiskt över mätområdet. Gaskoncentrationer registreras tillsammans med GPS-position, vindhastighet och meteorologiska data. Resultaten bearbetas till kartor och rapporter som visar var utsläppen finns och hur stora de är.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser kan mätas med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter metan (CH₄), koldioxid (CO₂), lustgas (N₂O), flyktiga organiska föreningar (VOC), svavelväte (H₂S), ammoniak (NH₃) och andra industriella gaser. Sensoruppsättningen anpassas efter de gaser ni behöver kartlägga.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur stor yta kan ni täcka per dag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på area, komplexitet och mätupplösning. Större anläggningar planeras över flera dagar. Vi anpassar upplösning och flygmönster efter era behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar en drönarbaserad utsläppsmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priset beror på mätområdets storlek, vilka gaser som ska mätas och leveransens omfattning. Kontakta oss för en offert baserad på era specifika förutsättningar. Vi erbjuder även ramavtal för återkommande mätningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni mäta vid dåligt väder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi flyger inte vid regn, snöfall eller vindhastigheter över 10 m/s. Mätningen kräver också stabila vindförhållanden för tillförlitliga resultat. Vi planerar mätningen efter väderprognoser och har reservdagar inplanerade.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Uppdragsplanering',
    description:
      'Vi analyserar ert mätbehov och planerar flygvägar, sensorval och mätprotokoll. Hänsyn tas till anläggningens geometri, potentiella utsläppskällor och vindförhållanden.',
  },
  {
    title: 'Sensorkalibrering',
    description:
      'Samtliga sensorer kalibreras mot certifierade referensgaser före varje mätuppdrag. Kalibreringsintyg dokumenteras och biläggs rapporten.',
  },
  {
    title: 'Systematisk flygning',
    description:
      'Drönaren flyger förprogrammerade rutter med jämna intervaller över mätområdet. GPS-kopplad gaskoncentrationsregistrering säkerställer heltäckande spatial data.',
  },
  {
    title: 'Databearbetning',
    description:
      'Rådata kvalitetssäkras, kalibreras mot bakgrundsvärden och interpoleras till kartlager. Mätosäkerhet beräknas och dokumenteras.',
  },
  {
    title: 'Leverans och genomgång',
    description:
      'Ni får en komplett rapport med kartor, kvantifieringar och rekommendationer. Vi går igenom resultaten tillsammans och ger förslag på uppföljning.',
  },
]

const deliverables = [
  {
    title: 'Emissionsrapport',
    description:
      'Komplett rapport med uppdragsbeskrivning, metodik, resultat, mätosäkerhet och rekommendationer. Utformad för att fungera vid tillsyn, miljörapportering och klimatbokslut.',
  },
  {
    title: 'Koncentrationskartor',
    description:
      'Georefererade kartor med färgkodade gashalter som visar rumslig fördelning av emissionerna. Identifiera hotspots och prioritera åtgärder visuellt.',
  },
  {
    title: 'Kvantifieringsunderlag',
    description:
      'Beräknade emissionsflöden (kg/h eller ton/år) per identifierad källa eller område. Baserat på massbalansmetodik med dokumenterade antaganden.',
  },
  {
    title: 'Hotspot-lista med prioritering',
    description:
      'Listade punkter med förhöjda halter, sorterade efter storlek och relevans. Inkluderar koordinater, uppmätt nivå och rekommenderad åtgärd.',
  },
  {
    title: 'Digitala kartlager',
    description:
      'GeoJSON, KML eller Shapefile för ert GIS-system. Möjliggör jämförelse mellan mättillfällen och integration med era befintliga datalager.',
  },
]

const faqItems = [
  {
    question: 'Hur fungerar drönarbaserad utsläppsmätning?',
    answer:
      'Drönaren utrustas med kalibrerade gassensorer och flyger systematiskt över mätområdet. Gaskoncentrationer registreras tillsammans med GPS-position, vindhastighet och meteorologiska data. Resultaten bearbetas till kartor och rapporter som visar var utsläppen finns och hur stora de är. Hela processen följer ett dokumenterat protokoll för jämförbarhet och spårbarhet.',
  },
  {
    question: 'Vilka gaser kan mätas med drönare?',
    answer:
      'Vi mäter metan (CH₄), koldioxid (CO₂), lustgas (N₂O), flyktiga organiska föreningar (VOC), svavelväte (H₂S), ammoniak (NH₃) och andra industriella gaser. Sensoruppsättningen anpassas efter de specifika gaser ni behöver kartlägga. Vi kan även kombinera flera sensorer för att fånga hela emissionsbilden.',
  },
  {
    question: 'Hur stor yta kan ni täcka per dag?',
    answer:
      'Det beror på area, komplexitet och önskad mätupplösning. Större anläggningar planeras över flera dagar. Vi anpassar upplösning och flygmönster efter era behov och budget.',
  },
  {
    question: 'Vad kostar en drönarbaserad utsläppsmätning?',
    answer:
      'Priset beror på mätområdets storlek, vilka gaser som ska mätas, önskad upplösning och leveransens omfattning. Kontakta oss för en offert baserad på era specifika förutsättningar. Vi erbjuder även ramavtal för återkommande mätningar med förmånliga villkor.',
  },
  {
    question: 'Kan ni mäta vid dåligt väder?',
    answer:
      'Vi flyger inte vid regn, snöfall eller vindhastigheter över 10 m/s. Mätningen kräver också relativt stabila vindförhållanden för tillförlitliga resultat. Vi planerar mätningen efter väderprognoser och har alltid reservdagar inplanerade för att minimera risk för förseningar.',
  },
]

export default function UtslappsmatningDronarePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Utsläppsmätning med drönare', href: '/tjanster/utslappsmating-dronare' },
      ]} />

      <Hero
        title="Utsläppsmätning med drönare"
        subtitle="Kartlägg och kvantifiera gasemissioner från hela er anläggning med drönarbaserad utsläppsmätning. Hög rumslig upplösning, systematisk datainsamling och resultat ni kan agera på – utan driftstopp."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={[
          'Georefererade emissionskartor',
          'Kvantifierade utsläpp (kg/h)',
          'Dokumenterad mätosäkerhet',
        ]}
      />

      {/* Introduktion */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Drönarbaserad utsläppsmätning – komplett kartläggning</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Utsläppsmätning med drönare ger er en heltäckande bild av gasemissioner från er anläggning.
            Till skillnad från traditionella markbundna metoder som mäter punkt för punkt, flyger vår
            drönare systematiskt över hela området och registrerar gaskoncentrationer kontinuerligt.
            Resultatet är en detaljerad emissionskarta som visar exakt var utsläppen finns, hur stora
            de är och hur de varierar rumsligt.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Metoden är särskilt effektiv för att identifiera diffusa emissioner och fugitiva utsläpp
            som är svåra att fånga med fasta mätstationer. Ni får ett komplett beslutsunderlag för
            åtgärdsplanering, regulatorisk rapportering och uppföljning – allt baserat på faktiska
            mätvärden istället för schabloner.
          </p>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Fördelar med drönarbaserad utsläppsmätning</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Heltäckande spatial data',
                desc: 'Istället för punktvisa mätningar får ni en sammanhängande karta med gashalter över hela anläggningen. Inga blinda fläckar.',
              },
              {
                title: 'Snabbare genomförande',
                desc: 'Stora ytor mäts snabbare än med traditionella metoder. Drönarbaserad mätning minimerar fältarbete och ger snabbare resultat.',
              },
              {
                title: 'Ingen driftpåverkan',
                desc: 'Mätningen sker kontaktfritt från luften. Er produktion fortlöper som vanligt under hela mätperioden.',
              },
              {
                title: 'Ökad arbetssäkerhet',
                desc: 'Ingen personal behöver vistas i riskzoner, på höjder eller i svårtillgängliga områden. Drönaren gör jobbet säkert.',
              },
              {
                title: 'Dokumenterad kvalitet',
                desc: 'Alla resultat levereras med dokumenterad mätosäkerhet, kalibreringsintyg och fullständig spårbarhet. Redo för tillsyn.',
              },
              {
                title: 'Kostnadseffektivt',
                desc: 'Lägre kostnad per mätt yta jämfört med traditionella metoder. Särskilt vid stora anläggningar eller regelbundna mätningar.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Teknik och sensorer</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vår utsläppsmätning bygger på en kombination av avancerade sensortekniker som
            monteras på industriella drönare med lång flygtid och hög stabilitet. Vi väljer
            sensoruppsättning baserat på vilka gaser ni behöver mäta, detektionsgränser och
            de specifika förutsättningarna vid er anläggning.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'TDLAS (Tunable Diode Laser Absorption Spectroscopy)',
                text: '– för högprecisionsmätning av metan och andra kolväten. Hög selektivitet och snabb responstid.',
              },
              {
                bold: 'Elektrokemiska sensorer',
                text: '– för detektion av H₂S, NH₃, CO och andra gaser. Kompakta och pålitliga för bred gasdetektion.',
              },
              {
                bold: 'PID-detektorer (fotojonisationsdetektor)',
                text: '– för VOC-screening med hög känslighet. Detekterar flyktiga organiska föreningar i låga koncentrationer.',
              },
              {
                bold: 'NDIR-sensorer',
                text: '– för mätning av CO₂ och metan. Robust teknik med lång driftstabilitet.',
              },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Användningsområden</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Drönarbaserad utsläppsmätning passar för alla verksamheter som behöver kartlägga,
            kvantifiera eller verifiera gasemissioner. Här är några av de vanligaste tillämpningarna:
          </p>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'Årlig eller periodisk emissionskartläggning av anläggningar',
              'Screening av fugitiva emissioner som komplement till LDAR-program',
              'Verifiering av emissionsberäkningar och schablonvärden',
              'Uppföljning efter åtgärder – har läckorna tätats?',
              'Underlag för miljörapportering och klimatbokslut',
              'Tillståndsprövning och MKB (miljökonsekvensbeskrivning)',
              'Kartläggning av diffusa emissioner från deponier och våtmarker',
              'Identifiering av okända utsläppskällor vid nya förvärv eller ombyggnationer',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så genomför vi utsläppsmätningen" />
      <DeliverablesList items={deliverables} heading="Vad ni får levererat" />

      {/* Regulatorisk kontext */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Regulatorisk kontext</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Kraven på emissionsövervakning skärps successivt. EU:s metanförordning (EU 2024/1787)
            ställer nya krav på detektion och kvantifiering av metanutsläpp inom energisektorn.
            Samtidigt ställer svenska miljöbalken och Naturvårdsverkets föreskrifter krav på
            egenkontroll och rapportering av utsläpp till luft.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarbaserad utsläppsmätning ger er det underlag ni behöver för att uppfylla dessa
            krav. Rapporterna är utformade för att fungera vid tillsyn, i miljörapporter och som
            grund för klimatbokslut enligt GHG Protocol eller ISO 14064.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om utsläppsmätning med drönare" />

      <CtaBand
        heading="Redo att kartlägga era utsläpp?"
        description="Kontakta oss för en kostnadsfri behovsanalys. Vi planerar mätningen utifrån era förutsättningar och levererar resultat ni kan agera på."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/plymmating" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Plymmätning
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Växthusgasmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
