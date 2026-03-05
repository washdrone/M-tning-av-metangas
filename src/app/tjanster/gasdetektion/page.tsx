import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gasdetektion med drönare – VOC, H₂S, NH₃ | EcoDrone',
  description:
    'Gasdetektion med drönare för VOC, svavelväte (H₂S) och ammoniak (NH₃). Snabb screening av industriella gasemissioner med hög känslighet. Hela Sverige.',
  alternates: { canonical: '/tjanster/gasdetektion' },
  openGraph: {
    title: 'Gasdetektion med drönare – VOC, H₂S, NH₃ | EcoDrone',
    description:
      'Drönarbaserad gasdetektion för screening av VOC, svavelväte och ammoniak vid industriella anläggningar.',
    url: '/tjanster/gasdetektion',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gasdetektion med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad gasdetektion för screening av VOC, H₂S, NH₃ och andra industriella gaser vid anläggningar i hela Sverige.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Gasdetektion',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka gaser kan detekteras med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi detekterar flyktiga organiska föreningar (VOC) med PID-detektor, svavelväte (H₂S) och ammoniak (NH₃) med elektrokemiska sensorer, samt metan och andra kolväten med TDLAS. Sensoruppsättningen anpassas efter era specifika behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är skillnaden mellan gasdetektion och gasmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gasdetektion (screening) identifierar var förhöjda halter förekommer och markerar områden som kräver uppföljning. Gasmätning kvantifierar halterna och eventuellt emissionsflöden med högre precision. Vi erbjuder båda nivåerna beroende på ert behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt kan en gasdetektionsscreening genomföras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En typisk screening av en industrianläggning tar en halv till en dag i fält. Screeningsrapporten levereras inom en vecka. Det gör drönarbaserad gasdetektion till ett snabbt verktyg för att identifiera problemområden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan gasdetektion med drönare ersätta portabla gasmätare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarbaserad gasdetektion kompletterar portabla mätare. Drönaren screenas stora ytor snabbt och identifierar hotspots, medan portabla instrument används för detaljmätning vid identifierade punkter. Tillsammans ger de en effektiv och heltäckande kartläggning.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function GasdetektionPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Gasdetektion', href: '/tjanster/gasdetektion' },
      ]} />

      <Hero
        title="Gasdetektion med drönare"
        subtitle="Screena er anläggning för VOC, svavelväte, ammoniak och andra gaser med drönarbaserad gasdetektion. Snabb identifiering av förhöjda halter – utan att personal vistas i riskzoner."
        ctaText="Boka screening"
        ctaHref="/kontakt"
        trustItems={['VOC, H₂S, NH₃', 'PID + elektrokemiska sensorer', 'GPS-kopplade resultat']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Drönarbaserad gasdetektion – snabb screening av industriella gaser</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Gasdetektion med drönare ger er en snabb översikt av gasförekomst vid er anläggning.
            Istället för att skicka personal med handhållna detektorer genom riskzoner flyger
            drönaren systematiskt och registrerar gashalter med GPS-koppling. Resultatet är en
            karta som visar var förhöjda halter förekommer.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Metoden är särskilt effektiv vid initial screening av nya anläggningar, uppföljning
            efter incidenter, och som del av regelbunden egenkontroll. Vi anpassar sensorerna
            efter de gaser ni behöver detektera.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Gaser och sensorteknik</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'VOC (flyktiga organiska föreningar)', text: '– detekteras med PID-sensor (fotojonisation). Hög känslighet för bensen, toluen, xylen och andra lösningsmedel.' },
              { bold: 'Svavelväte (H₂S)', text: '– detekteras med elektrokemisk sensor. Relevant vid reningsverk, pappers- och massaindustri, raffinaderier.' },
              { bold: 'Ammoniak (NH₃)', text: '– detekteras med elektrokemisk sensor. Förekommer vid gödselhantering, kylsystem och kemisk industri.' },
              { bold: 'Kolmonoxid (CO)', text: '– detekteras med elektrokemisk sensor vid förbränningsprocesser och industriugnar.' },
              { bold: 'Metan och kolväten', text: '– detekteras med TDLAS eller NDIR för kompletterande kolvätescreening.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Användningsområden</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Raffinaderier', desc: 'Screening av VOC och kolväteläckor vid lagringstankar, rörledningar och processenheter.' },
              { title: 'Kemisk industri', desc: 'Detektion av lösningsmedel, ammoniak och svavelhaltiga gaser vid produktionsanläggningar.' },
              { title: 'Avfallshantering', desc: 'H₂S-screening vid deponier, kompostanläggningar och biogasverk.' },
              { title: 'Incidentrespons', desc: 'Snabb gasscreening efter incidenter, spill eller processavvikelser för att bedöma riskområdet.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om gasdetektion med drönare" />

      <CtaBand
        heading="Behöver ni screena er anläggning för gasemissioner?"
        description="Kontakta oss för att diskutera vilka gaser ni behöver detektera och hur vi kan hjälpa er."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/tjanster/luftkvalitet" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Luftkvalitetsmätning
            </Link>
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
