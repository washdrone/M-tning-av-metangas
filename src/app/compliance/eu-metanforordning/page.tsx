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
  title: 'EU metanförordning LDAR krav',
  description:
    'EU:s metanförordning (2024/1787) kräver LDAR-inspektioner för energisektorn. Regelbunden inspektion, kvantifiering och rapportering. EcoDrone hjälper er uppfylla kraven.',
  alternates: { canonical: '/compliance/eu-metanforordning' },
  openGraph: {
    title: 'EU metanförordning LDAR krav | EcoDrone',
    description:
      'EU:s metanförordning kräver LDAR-program för energisektorn. EcoDrone levererar drönarbaserad inspektion och compliance-rapportering.',
    url: '/compliance/eu-metanforordning',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LDAR-inspektion enligt EU:s metanförordning',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad LDAR-inspektion som uppfyller EU:s metanförordnings krav på systematisk läckdetektering, kvantifiering och rapportering.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'LDAR EU metanförordning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad kräver EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen kräver att operatörer inom olje-, gas- och kolsektorn implementerar LDAR-program med regelbundna inspektioner, kvantifierar identifierade läckor och reparerar dem inom definierade tidsfrister. Dessutom förbjuds rutinmässig ventilering och flakning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka verksamheter i Sverige omfattas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen gäller primärt olje- och gasproduktion, bearbetning, transport, lagring och distribution samt kolgruvor. I Sverige berörs raffinaderier, LNG-terminaler, naturgasnät, kompressorstationer och gaslagringsanläggningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta ska LDAR-inspektioner genomföras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inspektionsfrekvensen varierar mellan kvartalsvis och årlig inspektion beroende på komponenttyp, risknivå och anläggning. Förordningens bilagor specificerar detaljerade krav per komponentkategori.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka mätmetoder godkänns enligt förordningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen godkänner bland annat OGI-kameror (Optical Gas Imaging) och TDLAS-baserade sensorer för läckdetektion. Kvantifiering ska ske med godkända beräkningsmetoder. EcoDrone erbjuder båda metoderna monterade på drönare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur kopplar förordningen till OGMP 2.0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning refererar till OGMP 2.0 som bästa praxis för mätning och rapportering. OGMP 2.0 nivå 4/5 med platsspecifika mätningar uppfyller typiskt förordningens krav på datakvalitet och mätmetodik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad händer om läckor inte åtgärdas i tid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen anger specifika tidsfrister för reparation beroende på läckans storlek. Stora läckor ska åtgärdas omgående, mindre inom veckor. Uppföljningsinspektion krävs efter reparation. Bristande efterlevnad kan leda till sanktioner.',
      },
    },
    {
      '@type': 'Question',
      name: 'När börjar LDAR-kraven gälla för befintliga anläggningar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Förordningen trädde i kraft 2024 med stegvis implementering. Befintliga anläggningar ska ha LDAR-program etablerade inom 12–18 månader, vilket innebär full efterlevnad senast 2026 för de flesta operatörer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur dokumenteras LDAR-inspektioner enligt förordningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varje inspektion ska dokumenteras med identifierade läckor, GPS-position, komponent-ID, kvantifierat utsläpp, inspektionsdatum och åtgärdsstatus. EcoDrones rapporter uppfyller dessa dokumentationskrav och levereras digitalt med spårbarhet.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'EU:s metanförordning – LDAR-krav för energisektorn',
  description: 'EU:s metanförordning (2024/1787) kräver LDAR-inspektioner för energisektorn. Regelbunden inspektion, kvantifiering och rapportering.',
  datePublished: '2024-08-01T08:00:00+02:00',
  dateModified: '2025-03-15T10:00:00+01:00',
  author: {
    '@type': 'Person',
    name: 'EcoDrone Redaktion',
    url: 'https://ecodrone.se/om-oss',
  },
  publisher: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    url: 'https://ecodrone.se',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ecodrone.se/Facicon ecodrone.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ecodrone.se/compliance/eu-metanforordning',
  },
  inLanguage: 'sv-SE',
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function EuMetanforordningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'EU:s metanförordning', href: '/compliance/eu-metanforordning' },
      ]} />

      <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <Author />
        <LastUpdated datePublished="2024-08-01T08:00:00+02:00" dateModified="2025-03-15T10:00:00+01:00" />
      </div>

      <Hero
        title="EU:s metanförordning – LDAR-krav"
        subtitle="Förordning (EU) 2024/1787 inför bindande krav på LDAR-program, emissionsrapportering och förbud mot rutinmässig ventilering för energisektorn. EcoDrone hjälper er uppfylla kraven med drönarbaserad inspektion."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['LDAR-krav', 'Kvantifieringskrav', 'Reparationstidsfrister']}
      />

      {/* Om förordningen */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad kräver EU:s metanförordning?</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            <strong className="text-white">EU:s metanförordning (EU 2024/1787) är det första EU-regelverket som specifikt reglerar metanutsläpp, med bindande krav på LDAR-program, emissionsrapportering och förbud mot rutinmässig ventilering.</strong>{' '}
            Förordningen trädde i kraft 2024 och riktar sig mot operatörer inom olje-, gas- och kolsektorn.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Identifierade läckor ska kvantifieras och repareras inom definierade tidsfrister.
            Rutinmässig ventilering och flakning förbjuds med begränsade undantag. Operatörer
            ska även rapportera sina metanutsläpp till behöriga myndigheter med definierad
            datakvalitet.
          </p>
        </div>
      </section>

      {/* Huvudkrav */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka är huvudkraven i EU:s metanförordning?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-program', desc: 'Systematisk inspektion av ventiler, flänsar, kompressorer, pumptätningar och andra komponenter med definierade inspektionsintervall och dokumenterade metoder.' },
              { title: 'Kvantifiering av läckor', desc: 'Identifierade läckor ska kvantifieras med godkända metoder. EcoDrone kombinerar OGI-detektion med TDLAS-kvantifiering för att leverera den data som krävs.' },
              { title: 'Reparationstidsfrister', desc: 'Läckor ska repareras inom fastställda tidsfrister beroende på läckans storlek och allvarlighetsgrad. Uppföljningsinspektion krävs efter reparation.' },
              { title: 'Emissionsrapportering', desc: 'Operatörer ska rapportera metanutsläpp till behöriga myndigheter med specificerad datakvalitet och transparens kring mätmetodik.' },
              { title: 'Förbud mot ventilering', desc: 'Rutinmässig ventilering och flakning förbjuds med begränsade undantag för säkerhet. Operativ ventilering ska minimeras och dokumenteras.' },
              { title: 'Importkrav', desc: 'Förordningen ställer även krav på importerad fossil energi, vilket innebär att hela leveranskedjan påverkas av LDAR-kraven.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berörda i Sverige */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka svenska verksamheter berörs av metanförordningen?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Svenska raffinaderier, LNG-terminaler, naturgasnät och gaslagringsanläggningar berörs direkt av EU:s metanförordning.</strong>{' '}
            Även om Sverige saknar storskalig olje- och gasproduktion omfattas flera verksamhetstyper fullt ut.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              'Raffinaderier och oljedepåer',
              'LNG-terminaler och förgasningsanläggningar',
              'Naturgasnät och kompressorstationer',
              'Underjordiska gaslager',
              'Import- och exportanläggningar för fossila bränslen',
              'Hamnar med LNG-bunkringsinfrastruktur',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tidslinje */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">När träder LDAR-kraven i kraft?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            <strong className="text-white">Förordningen trädde i kraft 2024 med stegvis implementering, och full efterlevnad krävs senast 2026 för befintliga anläggningar.</strong>{' '}
            Tidslinjen ser ut så här:
          </p>
          <div className="mt-8 space-y-6">
            {[
              { year: '2024', desc: 'Förordningen träder i kraft. Operatörer börjar planera implementering av LDAR-program.' },
              { year: '2025', desc: 'LDAR-program ska vara under etablering. Första inspektionscykler genomförs vid nya anläggningar.' },
              { year: '2026', desc: 'Full efterlevnad krävs för befintliga anläggningar. Regelbundna inspektioner och rapportering påbörjas.' },
              { year: '2027+', desc: 'Löpande skärpning av krav. Importkrav börjar tillämpas. Eventuell utökning av förordningens tillämpningsområde.' },
            ].map((item) => (
              <div key={item.year} className="flex gap-4">
                <span className="flex h-10 w-14 flex-shrink-0 items-center justify-center rounded bg-cyan-500 text-sm font-bold text-white">
                  {item.year}
                </span>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hur EcoDrone hjälper */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så hjälper EcoDrone er</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            EcoDrone genomför drönarbaserad LDAR-inspektion som uppfyller förordningens krav.
            Vi kombinerar OGI-kamera för visuell detektion med TDLAS-sensor för kvantifiering,
            dokumenterar varje inspektion med GPS-positioner och komponent-ID, och levererar
            compliance-redo rapporter med läcklistor, kvantifierade flöden och prioriterade
            åtgärder.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'OGI + TDLAS', text: '– detektion och kvantifiering i samma inspektion. Uppfyller förordningens krav på både identifiering och mätning.' },
              { bold: 'Drönarburen effektivitet', text: '– snabbare och säkrare inspektion av svåråtkomliga komponenter: kolonner, tanktoppar, rörbryggor och fackelstackar.' },
              { bold: 'Digital dokumentation', text: '– varje läcka dokumenteras med GPS, komponent-ID, kvantifierat flöde och OGI-material. Spårbart och revisionsbart.' },
              { bold: 'Åtgärdsuppföljning', text: '– vi genomför uppföljningsinspektioner efter reparation för att verifiera att läckan är åtgärdad, som förordningen kräver.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om EU:s metanförordning" />

      <CtaBand
        heading="Berörs ni av EU:s metanförordning?"
        description="Kontakta oss för en genomgång av förordningens krav och hur vi hjälper er implementera ett LDAR-program."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'OGMP 2.0 nivå 4/5 metanmätning', href: '/compliance/ogmp', description: 'OGMP 2.0 är bästa praxis-ramverket som EU:s metanförordning refererar till för mätmetodik.' },
        { title: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion', description: 'Drönarbaserad LDAR-inspektion med OGI och TDLAS som uppfyller förordningens krav.' },
        { title: 'Utsläppsmätning för olja, gas och raffinaderier', href: '/branscher/olja-gas', description: 'LDAR-program och metanmätning för petrokemisk industri enligt EU-krav.' },
        { title: 'Mätning vid hamnar och LNG-terminaler', href: '/branscher/hamnar', description: 'Inspektion av komplex infrastruktur vid LNG-bunkring och gashantering.' },
      ]} />
    </>
  )
}
