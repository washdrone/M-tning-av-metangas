import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om EcoDrone Sverige AB – drönarbaserad gasmätning | EcoDrone',
  description:
    'EcoDrone Sverige AB levererar drönarbaserad gasmätning för industri och miljö. Läs om vår vision, kompetens, utrustning och certifieringar.',
  alternates: { canonical: '/om-oss' },
  openGraph: {
    title: 'Om EcoDrone Sverige AB – drönarbaserad gasmätning | EcoDrone',
    description:
      'EcoDrone Sverige AB – specialister på drönarbaserad gasmätning. Vår vision, kompetens och utrustning.',
    url: '/om-oss',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EcoDrone Sverige AB',
  description:
    'EcoDrone Sverige AB levererar drönarbaserad gasmätning för industri och miljö i hela Sverige. Utsläppsmätning, LDAR-inspektion och växthusgaskartläggning.',
  areaServed: { '@type': 'Country', name: 'SE' },
  knowsAbout: [
    'Drönarbaserad gasmätning',
    'TDLAS-sensorer',
    'OGI-kamera',
    'LDAR-inspektion',
    'Metanmätning',
    'Växthusgasrapportering',
  ],
}

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Om oss', href: '/om-oss' },
      ]} />

      <Hero
        title="Om EcoDrone Sverige AB"
        subtitle="Vi gör osynliga gasutsläpp synliga. EcoDrone levererar drönarbaserad gasmätning som ger industrin verifierade emissionsdata – för bättre beslut, starkare compliance och lägre klimatpåverkan."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vår vision</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Att göra det enkelt och kostnadseffektivt för svenska verksamheter att mäta
            sina gasemissioner med hög precision. Vi tror att verifierade mätdata – inte
            schabloner – är grunden för meningsfulla utsläppsminskningar och trovärdig
            klimatrapportering.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Genom att kombinera avancerad sensorteknik med industriella drönarplattformar
            gör vi det möjligt att kartlägga emissioner från hela anläggningar snabbt,
            säkert och utan driftstopp. Våra kunder får handlingsbara resultat som
            driver faktisk förändring.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Kompetens</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vårt team kombinerar djup teknisk kompetens inom gasmätning, drönaroperationer
            och dataanalys. Vi har erfarenhet från akademisk forskning, miljökonsulting
            och industriell mätteknik.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Gasmätningsteknik', desc: 'Djup kunskap om TDLAS, NDIR, PID och elektrokemiska sensorer. Kalibrering, mätosäkerhet och kvalitetssäkring.' },
              { title: 'Drönarteknik', desc: 'Certifierade drönarpiloter med erfarenhet av industriell flygning i komplexa miljöer. Systematisk datainsamling.' },
              { title: 'Dataanalys', desc: 'Bearbetning av rumsliga mätdata, interpolering, emissionsberäkning och statistisk osäkerhetsanalys.' },
              { title: 'Regulatorisk kunskap', desc: 'Erfarenhet av CSRD, EU-metanförordning, OGMP 2.0, SMP och svensk miljölagstiftning.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Utrustning</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vi använder industriella drönarplattformar och vetenskapligt validerade
            gassensorer. All utrustning underhålls och kalibreras regelbundet.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'DJI Matrice-serien', text: '– industriella drönarplattformar med lång flygtid, hög stabilitet och kapacitet att bära tunga sensorlaster.' },
              { bold: 'TDLAS-sensorer', text: '– laserbaserade metandetektorer med hög selektivitet och snabb responstid. Kalibrerade mot NIST-spårbara referensgaser.' },
              { bold: 'OGI-kameror', text: '– infraröda kameror för visuell gasdetektering. Visualiserar kolväten, VOC och andra gaser i realtid.' },
              { bold: 'Elektrokemiska sensorer', text: '– för H₂S, NH₃, CO och andra gaser. Kompakta och tillförlitliga för bred gasdetektering.' },
              { bold: 'PID-detektorer', text: '– fotojonisationsdetektorer för VOC-screening med hög känslighet.' },
              { bold: 'Meteorologisk utrustning', text: '– markbaserade väderstationer för parallell registrering av vind, temperatur och luftfuktighet.' },
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

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Certifieringar och kvalitet</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Drönarpiloter', text: '– certifierade enligt EU:s drönarkategorier (A2/STS) med erfarenhet av industriell flygning.' },
              { bold: 'Sensorkalibrering', text: '– alla sensorer kalibreras mot certifierade referensgaser med NIST-spårbarhet före varje uppdrag.' },
              { bold: 'Dokumenterad metodik', text: '– vår mätprocess följer kvalitetssäkrade rutiner med full spårbarhet och reproducerbarhet.' },
              { bold: 'Ansvarsförsäkring', text: '– fullständig ansvarsförsäkring för drönaroperationer vid industriella anläggningar.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Hela Sverige</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            EcoDrone utför mätuppdrag i hela Sverige – från Skåne till Norrbotten.
            Vi reser till er anläggning med all utrustning och genomför mätningen
            på plats. Kontakta oss för att diskutera ert nästa mätprojekt.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Vill ni veta mer om EcoDrone?"
        description="Kontakta oss för att diskutera era mätbehov eller boka ett möte."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Utforska våra tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Alla tjänster
            </Link>
            <Link href="/branscher" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Branscher
            </Link>
            <Link href="/compliance" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Compliance
            </Link>
            <Link href="/case" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Kundcase
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
