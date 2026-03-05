import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OGI-kamera på drönare – Optical Gas Imaging | EcoDrone',
  description:
    'OGI-kamera monterad på drönare för visuell detektion av gasläckor i realtid. Infraröd gasvisualisering för LDAR, läcksökning och fugitiva utsläpp.',
  alternates: { canonical: '/tjanster/ogi-kamera' },
  openGraph: {
    title: 'OGI-kamera på drönare – Optical Gas Imaging | EcoDrone',
    description:
      'Drönarbaserad OGI-kamera för realtids gasvisualisering. Identifiera gasläckor snabbt med infraröd Optical Gas Imaging-teknik.',
    url: '/tjanster/ogi-kamera',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OGI-kamera på drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad Optical Gas Imaging (OGI) med infraröd kamera för visuell detektion av gasläckor vid industriella anläggningar.',
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
        text: 'OGI (Optical Gas Imaging) använder en specialkamera med infraröda detektorer som visualiserar gaser som annars är osynliga för ögat. Kameran detekterar absorptionsskillnader i det infraröda spektrumet och visar gasplymer som rörliga skuggor i realtid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser kan OGI-kameran detektera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGI-kameror detekterar kolväten som metan, etan, propan och butan, samt flyktiga organiska föreningar (VOC), svaveldioxid och andra gaser beroende på kameramodell och spektralband.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan OGI-kameran kvantifiera utsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OGI-kameran identifierar och lokaliserar läckor visuellt men kvantifierar inte utsläppsflöden direkt. För kvantifiering kompletterar vi med TDLAS-sensor eller Hi Flow Sampler. Kombination av OGI och kvantifiering ger en komplett LDAR-inspektion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Varför montera OGI-kameran på drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarmonterad OGI når svårtillgängliga höjder och riskzoner utan ställningsbygge. Det är säkrare för personalen, snabbare att genomföra och ger bättre översikt. Operatören ser gasplymerna i realtid via nedlänkad video.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

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
        subtitle="Visualisera gasläckor i realtid med Optical Gas Imaging monterad på drönare. Infraröd detektion av kolväten och VOC – snabbt, säkert och utan driftstopp."
        ctaText="Boka OGI-inspektion"
        ctaHref="/kontakt"
        trustItems={[
          'Realtids gasvisualisering',
          'Kolväten, VOC, SF₆',
          'Svårtillgängliga höjder',
        ]}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Optical Gas Imaging – se det osynliga</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            En OGI-kamera (Optical Gas Imaging) gör osynliga gaser synliga genom att utnyttja
            gasernas absorption av infrarött ljus. Kameran visar gasplymer som rörliga skuggor
            i realtid, vilket gör det möjligt att snabbt lokalisera exakt var en läcka sitter.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Genom att montera OGI-kameran på en drönare når vi komponenter på höjder, i trånga
            utrymmen och i potentiellt farliga zoner – utan att personal behöver vistas i
            riskområdet. Operatören ser gasplymerna live via nedlänkad video och kan styra
            drönaren för att undersöka misstänkta punkter närmare.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Gaser som detekteras med OGI</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Kolväten', text: '– metan (CH₄), etan, propan, butan och andra lätta kolväten som är vanliga vid olje- och gasindustrin.' },
              { bold: 'VOC (flyktiga organiska föreningar)', text: '– bensen, toluen, xylen och andra lösningsmedel som förekommer vid raffinaderier och kemiska industrier.' },
              { bold: 'SF₆ (svavelhexafluorid)', text: '– kraftfull växthusgas som används i elektrisk ställverksutrustning.' },
              { bold: 'Övriga gaser', text: '– ammoniak, etanol och andra gaser beroende på OGI-kamerans spektralband och konfiguration.' },
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

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar för drönarbaserad OGI</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'LDAR-inspektion', desc: 'Snabb screening av ventiler, flänsar och kompressorer. Identifiera fugitiva utsläpp visuellt och prioritera reparationer.' },
              { title: 'Raffinaderier', desc: 'Inspektera kolonner, facklor, lagringstankar och rörledningar för kolväteläckor på ett säkert sätt.' },
              { title: 'LNG-terminaler', desc: 'Detektera metanläckor vid lastning, lagring och förgasning. Dokumentera för OGMP 2.0-rapportering.' },
              { title: 'Biogasanläggningar', desc: 'Hitta läckor vid rötkammare, uppgraderingsenheter och gasledningar – varje funnen läcka ökar produktionen.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">OGI kombinerat med kvantifiering</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            OGI-kameran identifierar och lokaliserar läckor visuellt, men kvantifierar inte
            utsläppsflödet direkt. För att få ett komplett resultat kombinerar vi OGI-screening
            med TDLAS-baserad kvantifiering av identifierade läckor. Det ger er både en visuell
            bekräftelse och ett mätvärde i kg/h för varje läcka – precis det som krävs för
            LDAR-dokumentation och EU-compliance.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om OGI-kamera på drönare" />

      <CtaBand
        heading="Vill ni inspektera er anläggning med OGI?"
        description="Kontakta oss för att planera en OGI-inspektion anpassad efter era behov och anläggningens förutsättningar."
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
          </div>
        </div>
      </section>
    </>
  )
}
