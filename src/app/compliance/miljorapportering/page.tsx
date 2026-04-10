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
import { SITE_URL, SITE_LOGO_URL } from '@/site-config'

export const metadata: Metadata = {
  title: 'Miljörapportering SMP metandata – Naturvårdsverket',
  description:
    'Leverera faktisk metandata till SMP och Naturvårdsverket. Ersätt schabloner med drönarbaserad mätning. Utsläppsrapportering för tillståndspliktiga verksamheter.',
  alternates: { canonical: '/compliance/miljorapportering' },
  openGraph: {
    title: 'Miljörapportering SMP metandata | EcoDrone',
    description: 'Faktisk mätdata för SMP-rapportering och Naturvårdsverkets utsläppsrapportering.',
    url: '/compliance/miljorapportering',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Miljörapportering och SMP-data',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad utsläppsmätning för miljörapportering via SMP till Naturvårdsverket. Faktisk metandata för tillståndspliktiga verksamheter.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'Miljörapportering SMP',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är SMP och vilka ska rapportera dit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Svenska MiljörapporteringsPortalen (SMP) är Naturvårdsverkets system för årlig miljörapportering. Tillståndspliktiga verksamheter enligt Miljöbalken – deponier, reningsverk, biogasanläggningar, industri och energianläggningar – rapporterar utsläppsdata via SMP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka utsläppsdata ska rapporteras till SMP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SMP kräver rapportering av utsläpp till luft och vatten enligt verksamhetens tillståndsvillkor. För växthusgaser inkluderar det typiskt koldioxid (CO₂), metan (CH₄) och lustgas (N₂O) i ton per år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätdata ersätta beräkningar med emissionsfaktorer i SMP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Faktisk mätdata ger en mer korrekt bild av utsläppen och accepteras av tillsynsmyndigheter som ett bättre underlag än generella emissionsfaktorer. Mätdata visar ofta att schablonerna avviker markant.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hjälper EcoDrone med SMP-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter era faktiska utsläpp av metan och lustgas med drönarmonterade sensorer och levererar data redo att användas i er miljörapport. Rapporterna inkluderar dokumenterad metodik, mätosäkerhet och resultat i ton per år.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur förhåller sig SMP-rapportering till CSRD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SMP-rapportering och CSRD:s Scope 1-rapportering överlappar delvis. Samma mätdata kan ofta användas för båda ändamålen. EcoDrone levererar rapporter som fungerar för både SMP och CSRD, vilket sparar tid och säkerställer konsistens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka tillståndskrav ställer Miljöbalken på utsläppsövervakning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miljöbalken kräver att verksamhetsutövare bedriver egenkontroll och övervakar sina utsläpp. Kontrollprogrammet anger vilka parametrar som ska mätas och rapporteras. Drönarbaserad mätning kan vara en del av ert kontrollprogram.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta behöver mätning ske för miljörapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på verksamhetens kontrollprogram och tillståndsvillkor. Typiskt krävs årlig rapportering, men mätfrekvensen kan vara årlig, halvårsvis eller kvartalsvis beroende på verksamhetstyp och tillsynsmyndighetens krav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Accepteras drönarbaserad mätning av tillsynsmyndigheter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Drönarbaserad mätning med kalibrerade sensorer och dokumenterad metodik accepteras som bästa tillgängliga teknik för kartläggning av diffusa utsläpp. Vi dokumenterar metod och mätosäkerhet på ett sätt som tillsynsmyndigheter kan granska.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Miljörapportering via SMP – metandata för Naturvårdsverket',
  description: 'Leverera faktisk metandata till SMP och Naturvårdsverket. Ersätt schabloner med drönarbaserad mätning för tillståndspliktiga verksamheter.',
  datePublished: '2024-09-01T08:00:00+02:00',
  dateModified: '2025-03-01T10:00:00+01:00',
  author: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: SITE_LOGO_URL,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/compliance/miljorapportering`,
  },
  inLanguage: 'sv-SE',
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function MiljorapporteringPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Miljörapportering', href: '/compliance/miljorapportering' },
      ]} />

      <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <Author />
        <LastUpdated datePublished="2024-09-01T08:00:00+02:00" dateModified="2025-03-01T10:00:00+01:00" />
      </div>

      <Hero
        title="Miljörapportering och SMP"
        subtitle="Naturvårdsverket och länsstyrelser kräver årliga miljörapporter med utsläppsdata. EcoDrone levererar den mätdata ni behöver – baserad på faktisk mätning vid er anläggning, inte generella schabloner."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['SMP-kompatibel', 'Faktisk mätdata', 'Tillsyns-redo']}
      />

      {/* SMP och miljörapportering */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad är SMP och vilka ska rapportera?</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            <strong className="text-white">SMP (Svenska MiljörapporteringsPortalen) är Naturvårdsverkets system för årlig miljörapportering, och alla tillståndspliktiga verksamheter enligt Miljöbalken är skyldiga att rapportera sina utsläpp.</strong>{' '}
            Utsläppsdata för metan och andra växthusgaser ska baseras på bästa tillgängliga metod, vilket innebär att grova emissionsfaktorer behöver ersättas med faktisk mätdata.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            EcoDrone mäter era utsläpp med drönarmonterade sensorer och levererar data redo att
            användas i er miljörapport. Rapporterna inkluderar dokumenterad metodik och
            mätosäkerhet som tillsynsmyndigheter kan granska och verifiera.
          </p>
        </div>
      </section>

      {/* Vilka ska rapportera */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka verksamheter har rapporteringsplikt till SMP?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Alla tillståndspliktiga verksamheter enligt Miljöbalken ska årligen rapportera sina utsläpp via SMP till Naturvårdsverket.</strong>{' '}
            Det gäller bland annat:
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              { text: 'Deponier och avfallsanläggningar', href: '/branscher/deponier' },
              { text: 'Avloppsreningsverk', href: '/branscher/reningsverk' },
              { text: 'Biogasanläggningar', href: '/branscher/biogas' },
              { text: 'Raffinaderier och petrokemisk industri', href: '/branscher/olja-gas' },
              { text: 'Gruv- och bergbrottverksamhet', href: '/branscher/gruva' },
              { text: 'Energianläggningar och fjärrvärmeverk', href: '/branscher' },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                <Link href={item.href} className="hover:text-white transition-colors">{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vad som rapporteras */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka utsläppsdata krävs i SMP-rapporteringen?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">SMP kräver rapportering av utsläpp till luft och vatten i ton per år, uppdelat per ämne enligt verksamhetens tillståndsvillkor.</strong>{' '}
            För växthusgaser innebär det typiskt:
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Koldioxid (CO₂)', text: '– från förbränning och processemissioner. Ofta beräknat från bränsleförbrukning.' },
              { bold: 'Metan (CH₄)', text: '– från deponier, biogas, slamhantering och processläckor. Diffusa utsläpp som är svåra att beräkna med schabloner.' },
              { bold: 'Lustgas (N₂O)', text: '– från biologisk rening, nitrifikation/denitrifikation och förbränningsprocesser. 265x starkare växthuseffekt än CO₂.' },
              { bold: 'Övriga växthusgaser', text: '– fluorerade gaser, VOC och andra ämnen beroende på verksamhetens art och tillståndsvillkor.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schabloner vs mätning */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför bör schabloner ersättas med faktiska mätvärden?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Schabloner (generella emissionsfaktorer) kan avvika kraftigt från verkliga utsläpp, vilket ger felaktig rapportering och felprioriteringar av åtgärder.</strong>{' '}
            Många verksamheter rapporterar idag sina diffusa utsläpp baserat på dessa grova uppskattningar.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            En deponi kan ha betydligt högre utsläpp än schablonen anger om täckskiktet har brister.
            Ett reningsverk kan ha lägre lustgasutsläpp än schablonen om processen är väloptimerad.
            Utan mätning vet ni inte vilkendera det är. Faktisk mätdata ger er den kunskap som
            behövs för korrekt rapportering – och för att rikta åtgärder dit de gör störst nytta.
          </p>
        </div>
      </section>

      {/* Egenkontroll */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad kräver Miljöbalken för egenkontroll?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Miljöbalken kräver att tillståndspliktiga verksamheter bedriver egenkontroll med ett kontrollprogram som anger vilka parametrar som ska mätas, med vilken frekvens och metodik.</strong>{' '}
            Kontrollprogrammet fastställs i dialog med tillsynsmyndigheten.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Drönarbaserad mätning kan vara en del av ert kontrollprogram. Vi hjälper er utforma
            ett mätprogram som uppfyller tillsynsmyndighetens krav och ger er den datakvalitet
            som behövs. Kontakta oss för att diskutera hur drönarmätning kan integreras i er
            egenkontroll.
          </p>
        </div>
      </section>

      {/* Koppling till CSRD */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">SMP och CSRD – samordna er rapportering</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            SMP-rapportering och{' '}
            <Link href="/compliance/csrd" className="text-cyan-400 hover:underline">CSRD:s krav på Scope 1-rapportering</Link>{' '}
            överlappar delvis. Samma utsläppskällor ska rapporteras i båda systemen, och samma
            mätdata kan ofta användas. EcoDrone levererar rapporter som fungerar för både
            SMP och CSRD, vilket sparar tid och säkerställer konsistens.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Genom att samordna mätningen med era rapporteringscykler kan ni effektivisera
            processen och undvika dubbelarbete. Vi planerar mätningen med hänsyn till era
            rapporteringsdeadlines och levererar data i rätt format för respektive ändamål.
          </p>
        </div>
      </section>

      {/* Hur vi hjälper */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så levererar EcoDrone data för er miljörapport</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Mätning på plats', desc: 'Vi mäter era faktiska utsläpp med drönarmonterade sensorer direkt vid er anläggning. Ingen gissning, inga schabloner.' },
              { title: 'Resultat i ton/år', desc: 'Data levereras i det format SMP kräver – utsläpp i ton per år per ämne, med dokumenterade beräkningsgrunder.' },
              { title: 'Dokumenterad metodik', desc: 'Metodik, sensorspecifikation, kalibreringsstatus och mätosäkerhet dokumenteras för tillsynsmyndighetens granskning.' },
              { title: 'Kartunderlag', desc: 'Georefererade kartor som visar var utsläppen sker – värdefullt för egenkontroll och för att prioritera åtgärder.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om miljörapportering och SMP" />

      <CtaBand
        heading="Behöver ni mätdata för er miljörapport?"
        description="Kontakta oss för att planera en mätning inför er rapporteringsperiod. Vi levererar data redo för SMP och tillsyn."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'CSRD Scope 1 – samordna med SMP-rapportering', href: '/compliance/csrd', description: 'Samma mätdata fungerar för både SMP och CSRD – spara tid och säkerställ konsistens.' },
        { title: 'Metanmätning vid deponier', href: '/branscher/deponier', description: 'Deponier med metanemissioner genom täckskiktet – ersätt schabloner med faktiska mätvärden.' },
        { title: 'Lustgas- och metanmätning vid reningsverk', href: '/branscher/reningsverk', description: 'Mät processemissioner av metan och lustgas vid avloppsreningsverk.' },
        { title: 'Metodik och kvalitetssäkring', href: '/tjanster/metodik', description: 'Hur EcoDrone kvalitetssäkrar mätdata från planering till leverans.' },
      ]} />
    </>
  )
}
