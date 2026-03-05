import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emissionsinspektion hamnar & LNG-terminaler | EcoDrone',
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
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad emissionsinspektion vid hamnar och LNG-terminaler med metandetektering, OGI-screening och compliance-rapportering.',
  areaServed: { '@type': 'Country', name: 'SE' },
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
        text: 'LNG-terminaler kan ha metanutsläpp vid lastning, lossning, lagring och förgasning. Boil-off-gas, läckage vid kopplingar och ventilationsförluster är vanliga källor. EU:s metanförordning kräver att dessa övervakas och minimeras.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni inspektera under pågående drift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Drönarbaserad inspektion sker kontaktfritt och kräver inget driftstopp. Vi samordnar flygningar med er driftledning och hamnens säkerhetsorganisation för att undvika konflikter med fartygsrörelser och lastoperationer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka regulatoriska krav gäller för hamnar och LNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning ställer krav på LDAR och emissionsrapportering för LNG-infrastruktur. Miljöbalken och Seveso-direktivet kan ställa ytterligare krav beroende på anläggningens klassificering. OGMP 2.0 anger bästa praxis för mätmetodik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mäter ni även fartygsutsläpp i hamnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi kan screena gashalter i hamnbassängen under lastoperationer för att kvantifiera emissioner från fartyg vid kaj. Det ger ett komplement till självrapporterade utsläppsdata och stöder hamnens miljöarbete.',
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
        subtitle="Emissionsinspektion vid hamnar och LNG-terminaler med drönare. Detektera metanläckor vid bunkring, lagring och förgasning – utan driftstopp och med compliance-redo dokumentation."
        ctaText="Boka inspektion"
        ctaHref="/kontakt"
        trustItems={['LNG-metandetektering', 'OGI + TDLAS', 'OGMP 2.0-kompatibel']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Emissionsövervakning vid hamnar och LNG-infrastruktur</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Hamnar med LNG-bunkring, LNG-terminaler och gasimportanläggningar har komplexa
            emissionsutmaningar. Metan kan läcka vid kopplingar under lastning och lossning,
            från boil-off-system, lagringstankar och rörledningar. EU:s metanförordning kräver
            att dessa emissioner övervakas och att LDAR-program implementeras.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            EcoDrones drönarbaserade inspektion kombinerar OGI-kamera för visuell läckdetektion
            med TDLAS-sensor för kvantifiering. Vi inspekterar under pågående drift och
            dokumenterar resultaten i rapporter som uppfyller OGMP 2.0 och EU:s krav.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tjänster för hamnar och LNG</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LNG-läcksökning', desc: 'Detektera metanläckor vid lastningsarmar, kopplingar, lagringstankar och förgasningsenheter med OGI och TDLAS.' },
              { title: 'Bunkringsövervakning', desc: 'Screena gashalter under LNG-bunkring för att identifiera och kvantifiera utsläpp vid bunkringsoperationer.' },
              { title: 'VOC-screening', desc: 'Kartlägg VOC-halter vid lastning av petroleumprodukter, kemikalier och andra lösningsmedel.' },
              { title: 'Omgivningskartläggning', desc: 'Kartlägg gashalter och luftkvalitet runt hamnområdet för egenkontroll och miljörapportering.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Regulatoriska krav</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            LNG-infrastruktur i EU omfattas av metanförordningens krav på emissionsövervakning
            och LDAR-program. Hamnverksamheter kan dessutom omfattas av Seveso-direktivet,
            miljöbalken och specifika tillståndsvillkor som ställer krav på regelbunden
            emissionskontroll.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            EcoDrones rapporter är utformade för att fungera som compliance-dokumentation
            vid tillsyn, miljörapportering och klimatbokslut. Vi hjälper er uppfylla kraven
            med verifierade mätdata istället för schabloner.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om mätning vid hamnar och LNG" />

      <CtaBand
        heading="Behöver ni emissionsinspektion vid er hamn eller terminal?"
        description="Kontakta oss för att diskutera era behov och planera en inspektion."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher/olja-gas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Olja, gas & raffinaderier
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGMP 2.0
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
