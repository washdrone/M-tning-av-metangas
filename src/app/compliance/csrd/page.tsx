import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'
import { RelatedContent } from '@/components/RelatedContent'
import { Author } from '@/components/Author'
import { LastUpdated } from '@/components/LastUpdated'

export const metadata: Metadata = {
  title: 'CSRD Scope 1 utsläppsmätning – ESG utsläppsdata',
  description:
    'Uppfyll CSRD:s krav på Scope 1 utsläppsdata med drönarbaserad mätning. Verifierad ESG utsläppsdata för ESRS E1. Ca 4 100 svenska bolag berörs 2025–2028.',
  alternates: { canonical: '/compliance/csrd' },
  openGraph: {
    title: 'CSRD Scope 1 utsläppsmätning – ESG utsläppsdata | EcoDrone',
    description:
      'Uppfyll CSRD:s krav på Scope 1-rapportering med drönarbaserade mätdata. ESRS E1, hållbarhetsrapportering och revision.',
    url: '/compliance/csrd',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CSRD Scope 1 utsläppsmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad mätning av Scope 1-utsläpp för CSRD/ESRS E1-compliance och hållbarhetsrapportering.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'ESG utsläppsdata',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kräver CSRD avseende Scope 1-utsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSRD kräver att berörda företag rapporterar sina Scope 1-utsläpp (direkta utsläpp) i ton CO₂-ekvivalenter enligt ESRS E1. Data ska vara verifierbar och mätmetodik ska dokumenteras. Generella schabloner accepteras som startpunkt men verifierade mätdata förväntas på sikt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många svenska företag berörs av CSRD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cirka 4 100 svenska företag berörs stegvis mellan 2025 och 2028. Stora börsnoterade företag rapporterar först (2025 avseende 2024), följt av övriga stora företag och sedan noterade SME-företag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Räcker schabloner för CSRD-rapportering av diffusa utsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schabloner kan användas initialt men innebär stor osäkerhet, särskilt för diffusa utsläpp av metan och lustgas. Verifierade mätdata stärker rapportens trovärdighet och uppfyller ESRS E1:s krav på datakvalitet. Revisorer förväntas gradvis kräva bättre dataunderlag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hjälper EcoDrone med CSRD-compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi levererar verifierade Scope 1-emissionsdata baserade på faktiska mätningar vid er anläggning. Rapporterna innehåller CO₂-ekvivalenter, dokumenterad mätosäkerhet och spårbar metodik – redo att föras in i ert hållbarhetsbokslut och granskas av revisorer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är ESRS E1 och vilka klimatupplysningar krävs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ESRS E1 (European Sustainability Reporting Standards – Climate Change) specificerar kraven på klimatrelaterad rapportering under CSRD. Standarden kräver redovisning av Scope 1, 2 och 3-utsläpp, klimatmål, omställningsplaner och åtgärder för utsläppsminskning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka Scope 1-utsläpp kan EcoDrone mäta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter diffusa utsläpp av metan (CH₄) och lustgas (N₂O) från processer som deponier, reningsverk, biogasanläggningar, raffinaderier och gruvdrift. Dessa är typiskt de mest osäkra Scope 1-posterna i ett klimatbokslut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Behöver CSRD-data verifieras av tredje part?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, CSRD kräver begränsad säkerhet (limited assurance) av en oberoende revisor. EcoDrones rapporter innehåller den metodik- och kvalitetsdokumentation som revisorer behöver – sensorspecifikationer, kalibreringscertifikat, mätprotokoll och osäkerhetsberäkningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta behöver mätning genomföras för CSRD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSRD kräver årlig rapportering men mätfrekvensen beror på utsläppskällornas karaktär och väsentlighet. Vi hjälper er fastställa rätt mätfrekvens och kan genomföra mätningar från årlig baslinje till kvartalsvis uppföljning.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'CSRD Scope 1 utsläppsmätning – ESG utsläppsdata',
  description: 'Uppfyll CSRD:s krav på Scope 1 utsläppsdata med drönarbaserad mätning. Verifierad ESG utsläppsdata för ESRS E1.',
  datePublished: '2024-06-01T08:00:00+02:00',
  dateModified: '2025-03-15T10:00:00+01:00',
  author: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    url: 'https://ecodrone.se',
  },
  publisher: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    url: 'https://ecodrone.se',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ecodrone.se/Facicon%20ecodrone.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ecodrone.se/compliance/csrd',
  },
  inLanguage: 'sv-SE',
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function CsrdPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'CSRD', href: '/compliance/csrd' },
      ]} />

      <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <Author />
        <LastUpdated datePublished="2024-06-01T08:00:00+02:00" dateModified="2025-03-15T10:00:00+01:00" />
      </div>

      <Hero
        title="CSRD Scope 1 – verifierade utsläppsdata"
        subtitle="Cirka 4 100 svenska bolag behöver rapportera Scope 1-utsläpp med verifierade data enligt ESRS E1. EcoDrone mäter era faktiska utsläpp och levererar compliance-redo rapporter för er hållbarhetsredovisning."
        ctaText="Boka genomgång"
        ctaHref="/kontakt"
        trustItems={['ESRS E1-kompatibel', 'Scope 1 mätdata', 'Revisionsbar kvalitet']}
      />

      {/* Vad är CSRD */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad kräver CSRD för Scope 1-utsläpp?</h2>
          <p className="mt-5 prose-width text-slate-300 leading-relaxed">
            <strong className="text-white">CSRD (Corporate Sustainability Reporting Directive) kräver att berörda företag rapporterar sina direkta växthusgasutsläpp (Scope 1) i ton CO₂-ekvivalenter enligt ESRS E1.</strong>{' '}
            I Sverige berörs uppskattningsvis 4 100 företag stegvis mellan 2025 och 2028. Direktivet ersätter NFRD och utökar kretsen av rapporteringspliktiga företag avsevärt.
          </p>
          <p className="mt-4 prose-width text-slate-400 leading-relaxed">
            För många verksamheter innebär detta att diffusa emissioner av metan (CH₄), lustgas (N₂O)
            och andra växthusgaser måste kvantifieras med tillräcklig datakvalitet för att klara extern
            revision. Drönarbaserad mätning ger er de verifierade mätvärden som behövs – och ersätter
            osäkra schabloner med faktisk data.
          </p>
        </div>
      </section>

      {/* Tidslinje */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">När börjar CSRD gälla i Sverige?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">CSRD implementeras stegvis mellan 2025 och 2028, och totalt berörs cirka 4 100 svenska företag samt dotterbolag till EU-moderbolag.</strong>{' '}
            Här är tidsplanen:
          </p>
          <div className="mt-8 space-y-8">
            {[
              { step: '2025', title: 'Fas 1 – Stora börsnoterade bolag', desc: 'Företag som redan rapporterade under NFRD: börsnoterade bolag med fler än 500 anställda. Rapporterar för räkenskapsåret 2024.' },
              { step: '2026', title: 'Fas 2 – Övriga stora bolag', desc: 'Företag som uppfyller minst två av tre kriterier: >250 anställda, >40 MEUR omsättning, >20 MEUR balansomslutning. Rapporterar för 2025.' },
              { step: '2027', title: 'Fas 3 – Noterade SME', desc: 'Noterade små och medelstora företag (exkl. mikroföretag). Förenklade standarder tillämpas. Möjlighet till opt-out till 2028.' },
              { step: '2028', title: 'Full implementering', desc: 'Samtliga berörda företag rapporterar enligt CSRD. Tredjelandsföretag med >150 MEUR EU-omsättning inkluderas.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-10 w-16 flex-shrink-0 items-center justify-center rounded bg-cyan-500 text-sm font-bold text-white">
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

      {/* ESRS E1 */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad kräver ESRS E1 för klimatdata?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">ESRS E1 specificerar att företag ska redovisa Scope 1, 2 och 3-utsläpp, klimatmål och omställningsplaner med dokumenterad datakvalitet.</strong>{' '}
            Standarden kräver bland annat:
          </p>
          <div className="mt-6 space-y-4">
            {[
              { bold: 'Scope 1-utsläpp', text: '– direkta utsläpp i ton CO₂e per år, uppdelat per växthusgastyp (CO₂, CH₄, N₂O).' },
              { bold: 'Metodik och datakvalitet', text: '– beskrivning av mätmetod, beräkningsunderlag, använda GWP-värden och uppgift om datans osäkerhet.' },
              { bold: 'Klimatmål och omställningsplan', text: '– företag ska ange sina klimatmål och beskriva hur de planerar att minska utsläppen.' },
              { bold: 'Jämförbarhet', text: '– möjlighet att jämföra data mellan år och mot basår. Regelbundna mätningar möjliggör trendanalys.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vilka behöver mäta */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka behöver mäta Scope 1-utsläpp?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Alla verksamheter med diffusa utsläppskällor som inte kan kvantifieras exakt genom
            beräkning behöver mätdata. Diffusa utsläpp av metan och lustgas är typiskt de poster
            i klimatbokslutet som har störst osäkerhet.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              { text: 'Deponier med metanemissioner genom täckskiktet', href: '/branscher/deponier' },
              { text: 'Reningsverk med metan- och lustgasutsläpp', href: '/branscher/reningsverk' },
              { text: 'Biogasanläggningar med processläckor', href: '/branscher/biogas' },
              { text: 'Raffinaderier och petrokemisk industri', href: '/branscher/olja-gas' },
              { text: 'Gruvdrift med diffusa emissioner', href: '/branscher/gruva' },
              { text: 'Hamnar och LNG-terminaler', href: '/branscher/hamnar' },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                <Link href={item.href} className="hover:text-white transition-colors">{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hur EcoDrone hjälper */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så hjälper EcoDrone er med CSRD</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Faktisk mätning', desc: 'Vi mäter era Scope 1-utsläpp med drönarmonterade sensorer – ingen gissning, inga schabloner. Faktisk mätdata från er anläggning.' },
              { title: 'Revisionsbar dokumentation', desc: 'Rapporter med komplett metodik, mätosäkerhet, kalibreringsstatus och spårbarhet. Utformade för revisorsgranskning.' },
              { title: 'ESRS E1-format', desc: 'Data levereras i ton CO₂e med rätt GWP-värden, osäkerhetsangivelser och metodikbeskrivning som matchar ESRS E1:s krav.' },
              { title: 'Löpande uppföljning', desc: 'Regelbundna mätningar visar trend och effekt av åtgärder. Dokumentera er utsläppsminskning med verifierbara data.' },
              { title: 'Väsentlighetsanalys', desc: 'Vi hjälper er identifiera vilka utsläppskällor som är väsentliga och var mätning ger störst värde för er rapportering.' },
              { title: 'ESG-kommunikation', desc: 'Mätdata som stärker er kommunikation med investerare, kunder och andra intressenter om er faktiska klimatprestanda.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schabloner vs mätning */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför räcker inte schabloner för CSRD-rapportering?</h2>
          <p className="mt-4 prose-width text-slate-300 leading-relaxed">
            <strong className="text-white">Schabloner (generella emissionsfaktorer) kan avvika från verkliga utsläpp med en faktor 2–10x, vilket innebär att ert klimatbokslut kan vara allvarligt felaktigt utan att ni vet om det.</strong>{' '}
            Många företag förlitar sig idag på dessa för att beräkna sina utsläpp.
          </p>
          <p className="mt-4 prose-width text-slate-400 leading-relaxed">
            Faktisk mätning eliminerar denna osäkerhet. Dessutom identifierar mätningen var de
            största utsläppen sker, vilket gör det möjligt att rikta åtgärder dit de ger störst
            effekt. CFO:er och hållbarhetschefer som arbetar med CSRD-implementering får ett
            komplett underlag som tål revision.
          </p>
        </div>
      </section>

      {/* Verifiering */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Hur verifieras CSRD-data av revisorer?</h2>
          <p className="mt-4 prose-width text-slate-300 leading-relaxed">
            <strong className="text-white">CSRD kräver att hållbarhetsrapporter granskas med begränsad säkerhet (limited assurance) av en oberoende revisor, vilket innebär att utsläppsdata ska vara spårbara till dokumenterade mätningar.</strong>{' '}
            Era data ska ha känd metodik och mätosäkerhet.
          </p>
          <p className="mt-4 prose-width text-slate-400 leading-relaxed">
            EcoDrones rapporter är utformade specifikt för att möta revisionskraven. Vi dokumenterar
            sensorspecifikationer, kalibreringscertifikat, mätprotokoll, kvalitetskontrollsteg
            och osäkerhetsberäkningar – allt som en revisor behöver för sin granskning.
          </p>
        </div>
      </section>

      {/* Key takeaway callout */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="callout">
            <p className="callout-title">Sammanfattning</p>
            <p className="callout-body">
              CSRD kräver att berörda företag rapporterar Scope 1-utsläpp med verifierade data enligt ESRS E1.
              Schabloner kan användas initialt men revisorer förväntas gradvis kräva faktiska mätdata.
              EcoDrone levererar mätrapporter som uppfyller revisionskraven – med dokumenterad metodik, mätosäkerhet och spårbarhet.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om CSRD och utsläppsmätning" />

      <CtaBand
        heading="Behöver ni Scope 1-data för er CSRD-rapportering?"
        description="Kontakta oss för en genomgång av era utsläppskällor och hur vi kan leverera mätdata för er hållbarhetsrapport."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'SMP-rapportering för tillståndspliktiga verksamheter', href: '/compliance/miljorapportering', description: 'Samma mätdata kan användas för både CSRD Scope 1 och svensk miljörapportering via SMP.' },
        { title: 'EU:s metanförordning och LDAR-krav', href: '/compliance/eu-metanforordning', description: 'LDAR-program och emissionsrapportering enligt EU:s metanförordning 2024/1787.' },
        { title: 'Metanmätning vid deponier och avfall', href: '/branscher/deponier', description: 'Deponier har ofta de mest osäkra Scope 1-posterna – drönarbaserad mätning ger verifierbara data.' },
        { title: 'Utsläppsmätning vid reningsverk', href: '/branscher/reningsverk', description: 'Mät metan och lustgas från biologiska processer – ersätt schabloner med faktiska mätvärden.' },
      ]} />
    </>
  )
}
