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
import { SITE_URL, SITE_LOGO_URL, ORG_REF, OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'OGMP 2.0 nivå 4 mätning – metanrapportering',
  description:
    'OGMP 2.0 nivå 4 och 5 kräver platsspecifika metanmätningar. EcoDrone levererar drönarbaserad TDLAS-mätning som uppfyller OGMP 2.0:s rapporteringskrav för olje- och gassektorn.',
  alternates: { canonical: '/compliance/ogmp' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'OGMP 2.0 nivå 4 mätning | EcoDrone',
    description:
      'Uppfyll OGMP 2.0 nivå 4/5 med drönarbaserad metanmätning. Platsspecifika data för olje- och gassektorn.',
    url: '/compliance/ogmp',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OGMP 2.0 nivå 4/5 metanmätning',
  provider: ORG_REF,
  description: 'Drönarbaserad metanmätning med TDLAS och OGI som uppfyller OGMP 2.0 nivå 4/5-kraven på platsspecifik data och reconciliation.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'OGMP 2.0 mätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 (Oil and Gas Methane Partnership 2.0) är ett internationellt ramverk under UNEP för rapportering av metanutsläpp inom olje- och gassektorn. Det definierar fem rapporteringsnivåer med ökande datakvalitet, där nivå 5 representerar platsspecifika mätningar med reconciliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad skiljer nivå 4 och 5 från lägre nivåer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nivå 1–3 baseras på emissionsfaktorer och generiska data. Nivå 4 kräver platsspecifika mätningar av utsläpp vid anläggningen. Nivå 5 kräver dessutom reconciliation – att bottom-up-mätningar jämförs med top-down-data för att verifiera totala emissioner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur uppfyller EcoDrones metodik OGMP 2.0 nivå 4?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi genomför platsspecifika mätningar med TDLAS-sensor och OGI-kamera direkt vid anläggningen. Varje komponent inspekteras, identifierade läckor kvantifieras och alla resultat levereras med dokumenterad mätosäkerhet enligt OGMP 2.0:s krav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan EcoDrone stödja nivå 5 reconciliation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi erbjuder plymmätning med traversmetodik nedvinds för att kvantifiera totala anläggningsemissioner. Dessa top-down-data kan jämföras med komponentvisa bottom-up-mätningar för nivå 5 reconciliation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Är OGMP 2.0 obligatoriskt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 är frivilligt som ramverk, men EU:s metanförordning refererar till det som bästa praxis. Företag som rapporterar enligt OGMP 2.0 nivå 4/5 uppfyller typiskt förordningens krav och visar branschledande transparens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka företag rapporterar enligt OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Över 100 olje- och gasföretag globalt har åtagit sig att rapportera enligt OGMP 2.0, inklusive flera av de största internationella energibolagen. I takt med att EU:s metanförordning implementeras förväntas fler europeiska operatörer ansluta sig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur dokumenteras mätosäkerheten enligt OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGMP 2.0 kräver att mätosäkerheten dokumenteras transparent med definierade konfidensintervall. EcoDrone levererar osäkerhetsanalys baserad på sensorns detektionsgräns, mätförhållanden och beräkningsmetodik.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'OGMP 2.0 nivå 4 och 5 – metanmätning och rapportering',
  description: 'OGMP 2.0 nivå 4 och 5 kräver platsspecifika metanmätningar. EcoDrone levererar drönarbaserad TDLAS-mätning som uppfyller kraven.',
  datePublished: '2024-07-01T08:00:00+02:00',
  dateModified: '2025-01-10T10:00:00+01:00',
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
    '@id': `${SITE_URL}/compliance/ogmp`,
  },
  inLanguage: 'sv-SE',
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function OgmpPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'OGMP 2.0', href: '/compliance/ogmp' },
      ]} />

      <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <Author />
        <LastUpdated datePublished="2024-07-01T08:00:00+02:00" dateModified="2025-01-10T10:00:00+01:00" />
      </div>

      <Hero
        title="OGMP 2.0 – nivå 4 och 5 mätning"
        subtitle="Oil and Gas Methane Partnership 2.0 sätter standarden för metanrapportering. Nivå 4/5 kräver platsspecifika mätningar – EcoDrone levererar exakt det med drönarbaserad TDLAS och plymmätning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['Nivå 4: platsspecifik', 'Nivå 5: reconciliation', 'UNEP-ramverk']}
      />

      {/* Om OGMP 2.0 */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad är OGMP 2.0 och varför är det viktigt?</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            <strong className="text-white">OGMP 2.0 (Oil and Gas Methane Partnership 2.0) är ett UNEP-ramverk som definierar fem rapporteringsnivåer för metanutsläpp inom olje- och gassektorn, där nivå 4/5 kräver platsspecifika mätningar.</strong>{' '}
            Över 100 företag globalt har åtagit sig att rapportera enligt OGMP 2.0, och EU:s metanförordning refererar till det som bästa praxis. Företag som når nivå 4/5 visar branschledande transparens.
          </p>
        </div>
      </section>

      {/* De fem nivåerna */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka är OGMP 2.0:s fem rapporteringsnivåer?</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Nivå 1 – Ventilerings- och flakningsfaktorer', desc: 'Grundläggande rapportering baserad på generiska emissionsfaktorer och antaganden om utrustningstyp. Lägsta datakvalitet.', highlight: false },
              { step: '2', title: 'Nivå 2 – Aktivitetsbaserade faktorer', desc: 'Emissionsfaktorer kopplade till specifika utrustningstyper och aktiviteter. Bättre men fortfarande baserat på generiska data.', highlight: false },
              { step: '3', title: 'Nivå 3 – Generiska platsspecifika data', desc: 'Platsspecifik information om utrustning och processer, men med generiska emissionsfaktorer. Ger bättre uppskattning men inte mätdata.', highlight: false },
              { step: '4', title: 'Nivå 4 – Platsspecifika mätningar', desc: 'Faktiska mätningar vid anläggningen med LDAR, OGI och kvantifiering. Komponentvisa mätningar ger detaljerade emissionsinventeringar. EcoDrone levererar detta.', highlight: true },
              { step: '5', title: 'Nivå 5 – Reconciliation', desc: 'Nivå 4 plus top-down-verifiering. Bottom-up-data jämförs med oberoende top-down-mätningar (plymmätning, satellit) för att verifiera totala emissioner.', highlight: true },
            ].map((item) => (
              <div key={item.step} className={`flex gap-4 ${item.highlight ? 'rounded-lg border border-cyan-500/30 p-4' : ''}`}>
                <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${item.highlight ? 'bg-cyan-500' : 'bg-slate-700'}`}>
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

      {/* EcoDrone och OGMP */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">EcoDrone och OGMP 2.0 nivå 4/5</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            EcoDrones drönarbaserade metodik är designad för att leverera den datakvalitet som
            OGMP 2.0 nivå 4 och 5 kräver. Vi kombinerar komponentvis inspektion med
            anläggningsövergripande plymmätning för komplett dataunderlag.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR med OGI och TDLAS', desc: 'Komponentvis inspektion med visuell detektion (OGI) och kvantifiering (TDLAS) – kärnan i nivå 4-data. Varje läcka identifieras och kvantifieras individuellt.' },
              { title: 'Plymmätning', desc: 'Traversmätning nedvinds för kvantifiering av totala anläggningsemissioner – underlag för nivå 5 reconciliation mot bottom-up-inventering.' },
              { title: 'Dokumenterad mätosäkerhet', desc: 'Varje mätvärde levereras med osäkerhetsanalys och konfidensintervall enligt OGMP 2.0:s krav på datatransparens.' },
              { title: 'Spårbar metodik', desc: 'Kalibreringsintyg, flygloggar, meteorologiska data och bearbetningsparametrar dokumenteras för fullständig spårbarhet.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför nivå 4/5 */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför behöver ni nå OGMP 2.0 nivå 4/5?</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Regulatorisk compliance', text: '– EU:s metanförordning refererar till OGMP 2.0 och förväntar sig platsspecifik data. Nivå 4/5 säkerställer att ni uppfyller förordningens krav.' },
              { bold: 'Investerarförväntningar', text: '– institutionella investerare och klimatinitiativ som Climate Action 100+ förväntar sig att olje- och gasbolag rapporterar enligt OGMP 2.0.' },
              { bold: 'Bättre beslutsunderlag', text: '– platsspecifika mätningar identifierar var de största utsläppen sker, vilket möjliggör riktade och kostnadseffektiva åtgärder.' },
              { bold: 'Trovärdighet', text: '– verifierad mätdata stärker er klimatrapportering och visar att ni tar metanfrågan på allvar med konkreta data.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconciliation */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Hur fungerar OGMP 2.0 nivå 5 reconciliation?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Nivå 5 kräver att bottom-up-mätningar (komponentvis LDAR) jämförs med oberoende top-down-mätningar för att verifiera totala anläggningsemissioner.</strong>{' '}
            Om resultaten skiljer sig väsentligt indikerar det okända utsläppskällor som behöver identifieras.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            EcoDrone erbjuder plymmätning med traversmetodik nedvinds om anläggningen som
            top-down-metod. Genom att kombinera komponentvisa mätningar med
            anläggningsövergripande plymmätning ger vi er ett komplett dataunderlag för
            nivå 5-rapportering med reconciliation.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om OGMP 2.0" />

      <CtaBand
        heading="Vill ni nå OGMP 2.0 nivå 4/5?"
        description="Kontakta oss för att diskutera hur vi kan leverera de mätdata ni behöver för OGMP 2.0-rapportering."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'EU:s metanförordning och LDAR-krav', href: '/compliance/eu-metanforordning', description: 'EU:s metanförordning refererar till OGMP 2.0 som bästa praxis för mätmetodik och rapportering.' },
        { title: 'Plymmätning för anläggningsemissioner', href: '/tjanster/plymmating', description: 'Top-down-mätning med traversmetodik – nyckeln till OGMP 2.0 nivå 5 reconciliation.' },
        { title: 'Metanmätning vid raffinaderier och olje-gasanläggningar', href: '/branscher/olja-gas', description: 'Platsspecifik metanmätning för olje- och gassektorns compliance-krav.' },
        { title: 'CSRD Scope 1 och verifierade utsläppsdata', href: '/compliance/csrd', description: 'OGMP 2.0-data kan komplettera Scope 1-rapportering under CSRD/ESRS E1.' },
      ]} />
    </>
  )
}
