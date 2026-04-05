import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om EcoDrone – drönarbaserad utsläppsmätning Sverige',
  description:
    'EcoDrone levererar drönarbaserad utsläppsmätning med avancerade gassensorer. Utbildade piloter, miljövetenskaplig kompetens och compliance-fokus.',
  alternates: { canonical: '/om-oss' },
  openGraph: {
    title: 'Om EcoDrone – drönarbaserad utsläppsmätning | EcoDrone',
    description: 'EcoDrone – specialister på drönarbaserad gasmätning med TDLAS och OGI.',
    url: '/om-oss',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EcoDrone',
  url: 'https://ecodrone.se',
  description:
    'EcoDrone levererar drönarbaserad utsläppsmätning av metan och andra växthusgaser för industriell ESG- och compliance-rapportering i hela Sverige.',
  knowsAbout: [
    'LDAR',
    'Metanmätning',
    'CSRD',
    'OGMP 2.0',
    'Utsläppsmätning',
    'TDLAS',
    'OGI',
    'Ytemissionsmätning',
    'Växthusgasrapportering',
  ],
  areaServed: { '@type': 'Country', name: 'Sweden' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad gör EcoDrone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EcoDrone utför drönarbaserad utsläppsmätning av metan, lustgas och andra gaser vid industrianläggningar i hela Sverige. Vi levererar verifierad mätdata för compliance-rapportering (CSRD, OGMP 2.0, SMP), LDAR-inspektioner och klimatbokslut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka branscher arbetar EcoDrone med?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi arbetar med sex nyckelindustrier: deponier, biogasanläggningar, reningsverk, olje- och gasindustrin, gruvdrift samt hamnar och LNG-terminaler. Vår metodik anpassas efter varje branschs specifika utmaningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken utrustning använder EcoDrone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi använder industriella drönarplattformar med TDLAS-sensorer (Tunable Diode Laser Absorption Spectroscopy) för kvantitativ metanmätning och OGI-kameror (Optical Gas Imaging) för visuell gasdetektion. All utrustning kalibreras regelbundet mot certifierade referensgaser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är EcoDrones piloter certifierade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Våra piloter är utbildade enligt EASA:s regelverk för drönaroperationer och förbereder sig för att flyga i industriella miljöer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Var i Sverige utför EcoDrone mätningar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi utför mätningar i hela Sverige – från Malmö till Kiruna. Vi reser till er anläggning med all utrustning och genomför mätningen på plats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka regelverk kan EcoDrones mätdata användas för?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Våra mätdata uppfyller krav från CSRD/ESRS E1 (Scope 1-rapportering), EU:s metanförordning (LDAR), OGMP 2.0 (nivå 4/5), svenska SMP-krav och miljötillståndsvillkor. En och samma mätning kan ofta generera data för flera regelverk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar en typisk mätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mätningens längd beror på anläggningens storlek och komplexitet. Vi samordnar mätningen med er drift för att minimera påverkan. Kontakta oss för en bedömning av ert specifika uppdrag.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Om oss', href: '/om-oss' },
      ]} />

      <Hero
        title="Om EcoDrone"
        subtitle="Vi gör industrins osynliga utsläpp synliga – med drönare, avancerade sensorer och miljövetenskaplig kompetens. Compliance-redo data som ni kan agera på, rapportera med och bli reviderade mot."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        large
        trustItems={['Hela Sverige', 'Compliance-redo', 'Utbildade piloter']}
      />

      {/* Vision */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vår vision</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            EcoDrone grundades med övertygelsen att bättre mätdata leder till bättre beslut. Vi ser
            en framtid där varje anläggning med utsläppskällor har tillgång till precis,
            kostnadseffektiv och compliance-redo mätdata – inte grova schabloner som kan avvika med
            en faktor 2–10x från verkligheten.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Genom att kombinera avancerad sensorteknik med industriella drönarplattformar gör vi det
            möjligt att kartlägga emissioner från hela anläggningar snabbt, säkert och utan
            driftstopp. Våra kunder får handlingsbara resultat som driver faktisk förändring –
            lägre utsläpp, bättre rapportering och starkare compliance.
          </p>
        </div>
      </section>

      {/* Teamkompetens */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Teamets kompetens</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Vårt team kombinerar djup teknisk kompetens inom gasmätning, drönaroperationer och
            dataanalys med erfarenhet från akademisk forskning, miljökonsulting och industriell
            mätteknik. Det gör att vi inte bara kan mäta – vi förstår vad data betyder och hur
            den ska användas i er verksamhet.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Utbildade drönarpiloter', desc: 'Våra piloter är utbildade enligt EASA:s regelverk för drönaroperationer. Säkerheten är aldrig kompromissbar.' },
              { title: 'Miljövetenskaplig expertis', desc: 'Teamet inkluderar kompetens inom atmosfärskemi, gasmätning och emissionsberäkning. Vi förstår hur diffusa emissioner uppstår, hur de ska mätas korrekt och hur mätosäkerheten ska bedömas.' },
              { title: 'Regulatorisk kompetens', desc: 'Vi följer CSRD/ESRS E1, EU:s metanförordning, OGMP 2.0 och svenska miljörapporteringskrav (SMP) löpande. Våra rapporter utformas för att möta specifika regulatoriska krav.' },
              { title: 'Databearbetning och GIS', desc: 'Avancerad bearbetning av geospatial mätdata med interpolering, kvalitetskontroll, osäkerhetsanalys och leverans i branschstandardformat (GeoJSON, KML, shapefile).' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utrustning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Utrustning och sensorer</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Vi använder industriella drönarplattformar och vetenskapligt validerade gassensorer.
            All utrustning underhålls och kalibreras regelbundet mot certifierade referensgaser.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Industriella drönarplattformar', text: '– drönare med hög lastkapacitet, lång flygtid och stabilitet för exakt sensormontage. Designade för professionell datainsamling i krävande miljöer.' },
              { bold: 'TDLAS-sensorer', text: '– Tunable Diode Laser Absorption Spectroscopy för kvantitativ metanmätning med hög precision och selektivitet.' },
              { bold: 'OGI-kameror', text: '– Optical Gas Imaging med infraröd teknik för realtidsvisualisering av gasplymer. Detekterar kolväten visuellt.' },
              { bold: 'RTK-GPS', text: '– noggrann positionering som säkerställer att varje mätvärde kopplas till geografisk position för georefererade kartlager.' },
              { bold: 'Meteorologisk utrustning', text: '– markbaserade väderstationer för parallell registrering av vindhastighet, vindriktning, temperatur och luftfuktighet – nödvändigt för emissionsberäkning.' },
              { bold: 'Kompletterande gassensorer', text: '– för mätning av H₂S, NH₃, SO₂ och andra gaser beroende på anläggningens emissionsprofil.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifieringar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Certifieringar och kvalitetssäkring</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Kvalitet och spårbarhet genomsyrar allt vi gör. Från sensorkalibrering till
            rapportleverans följer vi kvalitetssäkrade rutiner som säkerställer att era
            mätdata tål granskning.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Utbildade piloter enligt EASA', text: '– våra piloter är utbildade enligt EASA:s regelverk för drönaroperationer med dokumenterad utbildning och flyglogg.' },
              { bold: 'Sensorkalibrering', text: '– alla gassensorer kalibreras mot certifierade referensgaser före varje uppdrag. Kalibreringscertifikat bifogas rapporten.' },
              { bold: 'Dokumenterad mätprocess', text: '– vår mätprocess följer kvalitetssäkrade rutiner med full spårbarhet, definierade kvalitetskontrollsteg och reproducerbar metodik.' },
              { bold: 'Mätosäkerhetsanalys', text: '– varje rapport innehåller en osäkerhetsanalys som beskriver osäkerhetskällor, deras bidrag och det totala osäkerhetsintervallet.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför EcoDrone */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför välja EcoDrone?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Lokal närvaro', desc: 'Svensk verksamhet med förståelse för lokala regelverk, branschförhållanden och tillsynsmyndigheters förväntningar. Vi talar samma språk som er.' },
              { title: 'Kalibrerad precision', desc: 'TDLAS och OGI med dokumenterad kalibrering och mätosäkerhet. Varje mätvärde är spårbart och reproducerbart.' },
              { title: 'Compliance-redo', desc: 'Rapporter formaterade för CSRD, OGMP 2.0, SMP och tillsyn. En mätning kan generera data för flera regelverk.' },
              { title: 'Branschförståelse', desc: 'Vi riktar oss mot sex nyckelindustrier och anpassar metodik och rapportering efter varje branschs specifika utmaningar.' },
              { title: 'Hela Sverige', desc: 'Vi utför mätningar från Malmö till Kiruna. Vi reser till er anläggning med all utrustning och genomför mätningen på plats.' },
              { title: 'Snabb mobilisering', desc: 'Drönarbaserad metodik innebär minimal störning av er drift och korta ledtider från bokning till rapport.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Målgrupp */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka vi arbetar med</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Vi arbetar med HSE-ansvariga, miljöchefer, hållbarhetsansvariga, CFO:er och
            driftingenjörer som behöver verifierade utsläppsdata för att uppfylla regulatoriska
            krav, stärka sin klimatrapportering och driva faktiska utsläppsminskningar.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Vi riktar oss mot sex branscher – från kommunala VA-bolag och
            avfallshanterare till energiföretag och gruvbolag. Gemensamt för
            alla är behovet av tillförlitlig mätdata som ersätter osäkra schabloner.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om EcoDrone" />

      <CtaBand
        heading="Vill ni veta mer om EcoDrone?"
        description="Kontakta oss för att diskutera era mätbehov eller boka ett möte. Vi berättar gärna mer om teamet, utrustningen och hur vi kan hjälpa er."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Utforska vidare</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Branscher vi mäter
            </Link>
            <Link href="/compliance" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Compliance & regelverk
            </Link>
            <Link href="/kontakt" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
