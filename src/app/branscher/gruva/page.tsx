import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utsläppsmätning gruvdrift – diffusa emissioner | EcoDrone',
  description:
    'Utsläppsmätning vid gruvdrift med drönare. Kartlägg diffusa gasemissioner och dammspridning från gruvor, upplag och anrikningsverk. Hela Sverige.',
  alternates: { canonical: '/branscher/gruva' },
  openGraph: {
    title: 'Utsläppsmätning gruvdrift – diffusa emissioner | EcoDrone',
    description:
      'Drönarbaserad utsläppsmätning för gruvindustrin. Diffusa emissioner, dammspridning och miljöövervakning.',
    url: '/branscher/gruva',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning för gruvindustrin',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad mätning av diffusa gasemissioner och dammspridning vid gruvor, upplag och anrikningsverk.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning gruvdrift',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka emissioner mäts vid gruvor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter diffusa gasemissioner som metan (CH₄) vid kolgruvor, svaveldioxid (SO₂) och svavelväte (H₂S) vid sulfidmalmsgruvor, samt partiklar (PM2.5/PM10) från upplag och transporter. Sensoruppsättningen anpassas efter gruvtyp och specifika behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan drönare mäta dammspridning från gruvupplag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Med optiska partikelräknare monterade på drönare kartlägger vi PM2.5- och PM10-halter runt upplag, krossverk och transportleder. Resultaten visar spridningsmönster och kan användas som underlag för dammbekämpningsåtgärder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hanteras säkerhet vid flygning nära gruvdrift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi samordnar alla flygningar med gruvans driftledning och säkerhetsorganisation. Flygzoner och tider planeras för att undvika konflikter med sprängning, transporter och annan gruvdrift. Våra piloter är certifierade och har erfarenhet av industriell flygning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan resultaten användas för miljötillstånd och kontrollprogram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga som underlag vid tillståndsprövning, kontrollprogram och miljörapportering till SMP.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function GruvaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Gruva', href: '/branscher/gruva' },
      ]} />

      <Hero
        title="Utsläppsmätning för gruvindustrin"
        subtitle="Kartlägg diffusa gasemissioner och dammspridning vid gruvor med drönarbaserad mätning. Stora ytor, svårtillgängliga områden och säkerhetszoner – drönaren når överallt."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['Diffusa emissioner', 'Dammspridning PM2.5/PM10', 'Stora ytor']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Emissionsutmaningar vid gruvdrift</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Gruvdrift genererar diffusa emissioner från flera källor – sprängning, krossning,
            transport, upplag och avfallshantering. Dessa emissioner är geografiskt utspridda
            och varierar med väder, driftförhållanden och årstid. Traditionella mätmetoder
            ger bara punktvisa värden och missar den övergripande bilden.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarbaserad mätning kartlägger emissioner över hela gruvområdet – inklusive
            svårtillgängliga dagbrott, upplag och dammvägar. Ni får en spatial bild av
            var utsläppen är störst och var åtgärder gör mest nytta.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Diffusa gasemissioner', desc: 'Metan, SO₂, H₂S och andra gaser beroende på malmtyp. Kartlägg emissioner från dagbrott, ventilationsschakt och upplag.' },
              { title: 'Dammspridning', desc: 'PM2.5 och PM10 från krossning, transport och vinderodering av upplag. 3D-kartläggning av spridningsmönster.' },
              { title: 'Omgivningspåverkan', desc: 'Luftkvalitetsscreening runt gruvområdet för att bedöma påverkan på närliggande bebyggelse och naturområden.' },
              { title: 'Sprängningsemissioner', desc: 'Kartlägg gashalter efter sprängning för att bedöma ventilationsbehov och omgivningspåverkan.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Varför drönare vid gruvor?</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Stora ytor', text: '– gruvområden omfattar ofta hundratals hektar. Drönaren täcker stora arealer effektivt.' },
              { bold: 'Svårtillgängliga områden', text: '– dagbrott, slänter och upplagshöjder mäts säkert från luften.' },
              { bold: 'Säkerhet', text: '– ingen personal i riskzoner, nära sprängområden eller instabila slänter.' },
              { bold: 'Dokumentation', text: '– GPS-kopplad data ger spårbar dokumentation för kontrollprogram och tillsyn.' },
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

      <FaqAccordion items={faqItems} heading="Vanliga frågor om mätning vid gruvor" />

      <CtaBand
        heading="Behöver ni kartlägga emissioner vid er gruva?"
        description="Kontakta oss för att diskutera era mätbehov och hur vi kan anpassa mätningen efter er gruvdrift."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
            <Link href="/tjanster/luftkvalitet" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Luftkvalitetsmätning
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
