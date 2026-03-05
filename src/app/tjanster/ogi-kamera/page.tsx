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
  title: 'OGI-kamera på drönare – gasvisualisering | EcoDrone',
  description:
    'OGI-kamera (Optical Gas Imaging) monterad på drönare. Visualisera gasläckor i realtid med infraröd teknik. Inspektion av svårtillgängliga komponenter.',
  alternates: { canonical: '/tjanster/ogi-kamera' },
  openGraph: {
    title: 'OGI-kamera på drönare – gasvisualisering | EcoDrone',
    description:
      'Se gasläckor som annars är osynliga. OGI-kamera på drönare ger realtidsvisualisering av kolväten, metan och VOC.',
    url: '/tjanster/ogi-kamera',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OGI-kamera på drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad OGI-inspektion (Optical Gas Imaging) med infraröd kamera för visuell identifiering av gasläckor vid industriella anläggningar.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'OGI-inspektion',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är OGI och hur fungerar det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGI (Optical Gas Imaging) använder en infraröd kamera med kylda detektorer som visualiserar gaser som absorberar infraröd strålning i specifika våglängdsband. Gasplymer som är osynliga för ögat syns tydligt i kamerabilden som rörliga moln.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser kan OGI-kameran detektera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGI-kameran detekterar kolväten inklusive metan, etan, propan och butan, samt många flyktiga organiska föreningar (VOC). Den kan även detektera SF₆ och vissa halogenerade kolväten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är fördelen med OGI på drönare jämfört med handburen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarmonterad OGI ger åtkomst till svårtillgängliga komponenter utan ställning eller kranarbete. Drönaren kan inspektera fackelstackar, rörbryggor och kolonntoppar. Flygperspektivet ger dessutom bredare överblick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan OGI-kameran kvantifiera gasläckor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard OGI ger kvalitativ detektion. För kvantifiering kombinerar vi OGI med TDLAS-mätning eller kalibrerad OGI (qOGI) som ger uppskattade emissionsflöden.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Inspektionsplanering',
    description:
      'Vi kartlägger komponenter och områden som ska inspekteras utifrån er anläggningsritning. Prioritering baseras på riskbedömning och regulatoriska krav.',
  },
  {
    title: 'OGI-flygning',
    description:
      'Drönaren flyger med den kylda OGI-kameran och skannar systematiskt alla definierade komponenter och områden. Piloten analyserar bilden i realtid och markerar misstänkta läckor.',
  },
  {
    title: 'Verifiering',
    description:
      'Identifierade läckor verifieras med upprepade överflygningar från olika vinklar. Falska positiver elimineras genom referensmätningar av bakgrund och termiska artefakter.',
  },
  {
    title: 'Kvantifiering (tillval)',
    description:
      'Signifikanta läckor kvantifieras med TDLAS-traversmätning eller Hi-Flow-teknik. Emissionsflöden dokumenteras i gram eller kilogram per timme.',
  },
  {
    title: 'Rapportering',
    description:
      'Komplett inspektionsrapport med videoklipp, stillbilder, läckageregister och rekommendationer. Alla läckor kopplas till komponent-ID och kartposition.',
  },
]

const deliverables = [
  {
    title: 'OGI-inspektionsrapport',
    description:
      'Sammanfattande rapport med alla identifierade läckor, deras position, allvarlighetsgrad och rekommenderade åtgärder. Utformad för operatörer och HSE-ansvariga.',
  },
  {
    title: 'Videobevis per läcka',
    description:
      'Infraröda videoklipp som tydligt visar gasplymen vid varje identifierad läcka. Tidsstämplade och kopplade till komponent-ID för enkel referens.',
  },
  {
    title: 'Stillbilder med annotation',
    description:
      'Annoterade IR-bilder sida vid sida med visuella bilder för varje läcka. Perfekt som underlag i reparationsorder och underhållssystem.',
  },
  {
    title: 'Läckageregister',
    description:
      'Strukturerat register i tabellformat med komponent-ID, typ, position, datum, bedömd storlek och reparationsprioritering.',
  },
  {
    title: 'Emissionskvantifiering (tillval)',
    description:
      'Kvantifierade emissionsflöden för de mest signifikanta läckorna. Baserat på TDLAS-traversmätning eller kalibrerad OGI-analys.',
  },
]

const faqItems = [
  {
    question: 'Vad är OGI och hur fungerar det?',
    answer:
      'OGI (Optical Gas Imaging) använder en infraröd kamera med kylda detektorer som visualiserar gaser som absorberar infraröd strålning i specifika våglängdsband. Gasplymer som normalt är osynliga för ögat syns tydligt i kamerabilden som rörliga moln eller dimma. Tekniken möjliggör snabb och visuell lokalisering av gasläckor vid industriella anläggningar – helt kontaktfritt.',
  },
  {
    question: 'Vilka gaser kan OGI-kameran detektera?',
    answer:
      'OGI-kameran detekterar kolväten inklusive metan, etan, propan och butan, samt många flyktiga organiska föreningar (VOC). Den kan även detektera SF₆ och vissa halogenerade kolväten. Exakt vilka gaser som visualiseras beror på kamerans våglängdsband (typiskt mid-wave IR, 3–5 mikrometer) och gasernas specifika absorptionsegenskaper.',
  },
  {
    question: 'Vad är fördelen med OGI på drönare jämfört med handburen?',
    answer:
      'Drönarmonterad OGI ger åtkomst till svårtillgängliga komponenter utan ställning, skylift eller kranarbete. Drönaren kan inspektera fackelstackar, rörbryggor, kolonntoppar och tankytor som annars kräver kostsam och tidskrävande åtkomstlösning. Flygperspektivet ger dessutom bredare överblick som kan avslöja läckor som missas från marknivå.',
  },
  {
    question: 'Kan OGI-kameran kvantifiera gasläckor?',
    answer:
      'Standard OGI ger kvalitativ detektion – den visar var en läcka finns men inte dess exakta storlek. För kvantifiering kombinerar vi OGI-detektionen med TDLAS-mätning nedvinds eller använder kalibrerad OGI (qOGI) för uppskattade emissionsflöden. Vi rekommenderar alltid kvantitativ uppföljning av de mest signifikanta läckorna.',
  },
]

export default function OgiKameraPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'OGI-kamera', href: '/tjanster/ogi-kamera' },
      ]} />

      <Hero
        title="OGI-kamera på drönare"
        subtitle="Se gasläckor som annars är osynliga. Vår OGI-kamera (Optical Gas Imaging) monterad på drönare visualiserar kolväten och VOC i realtid – från marknivå till skorstenstopp."
        ctaText="Boka OGI-inspektion"
        ctaHref="/kontakt"
        trustItems={[
          'Infraröd gasvisualisering',
          'Realtidsanalys',
          'Videodokumentation',
        ]}
      />

      {/* Om OGI */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Optical Gas Imaging – se det osynliga</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Optical Gas Imaging (OGI) revolutionerade läcksökning när tekniken introducerades.
            Genom att använda infraröda kameror som är känsliga för specifika våglängdsband
            kan gasplymer visualiseras i realtid – gaser som normalt är helt osynliga för
            mänskliga ögat framträder tydligt som rörliga moln i kamerabilden.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Genom att montera OGI-kameran på en drönare tar vi tekniken till nästa nivå.
            Drönaren ger åtkomst till svårtillgängliga komponenter utan ställning eller
            kranarbete, och flygperspektivet ger en bredare överblick som avslöjar läckor
            som kan missas från marknivå. Det gör inspektionen snabbare, säkrare och mer
            heltäckande.
          </p>
        </div>
      </section>

      {/* Detekterbara gaser */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Gaser vi detekterar med OGI</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            OGI-kameran detekterar gaser som absorberar infraröd strålning i kamerans
            våglängdsband. Här är de vanligaste gaserna vi identifierar:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Metan (CH₄)', desc: 'Huvudkomponent i naturgas och biogas. Synlig med hög känslighet i OGI.' },
              { title: 'Etan, propan, butan', desc: 'Kolväten som ofta förekommer tillsammans med metan vid petrokemiska anläggningar.' },
              { title: 'VOC (flyktiga organiska)', desc: 'Bensen, toluen, xylen och andra flyktiga organiska föreningar från industriprocesser.' },
              { title: 'SF₆ (svavelhexafluorid)', desc: 'Potent växthusgas som används som isolergas i elektriska ställverk och brytare.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tillämpningar */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar för OGI-inspektion</h2>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'LDAR-inspektion enligt EU:s metanförordning – snabb visuell screening av komponentgrupper',
              'Fackelsysteminspektion – kontrollera att fackelbrännare fungerar korrekt och att inget okontrollerat utsläpp sker',
              'Lastnings- och lossningsoperationer – övervaka gasemissioner vid tankfartyg och järnvägsvagnar',
              'Lagringstankar – identifiera läckor vid tank-tak, skalväggar och anslutningar',
              'Rörbryggor och rörgator – inspektion av flänsar och kopplingar på höjd',
              'Avblåsnings- och ventilationsystem – verifiera att system fungerar som avsett',
              'Incidentutredning – snabb identifiering av utsläppskälla vid larm eller misstänkt läckage',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tekniska detaljer */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Teknisk specifikation</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Kameratyp', text: '– kyld InSb-detektor, mid-wave IR (3,2–3,4 mikrometer)' },
              { bold: 'Detektionsbeteende', text: '– kvalitativ visualisering av gasplymer i realtid' },
              { bold: 'Bildfrekvens', text: '– 30 fps för jämn videodokumentation' },
              { bold: 'Inspektionsavstånd', text: '– effektiv detektion upp till 5–15 meter beroende på läckagets storlek' },
              { bold: 'Drönare', text: '– industriell plattform med stabiliserad gimbal och lång flygtid' },
              { bold: 'Komplement', text: '– visuell kamera för simultana referensbilder och komponentidentifiering' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="text-dark-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så genomför vi OGI-inspektionen" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om OGI-kamera" />

      <CtaBand
        heading="Vill ni se era gasläckor?"
        description="Kontakta oss för en OGI-inspektion. Vi visualiserar era emissioner och ger er ett komplett underlag för åtgärder."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/gasdetektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Gasdetektion
            </Link>
            <Link href="/tjanster/plymmating" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Plymmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
