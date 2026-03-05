import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om EcoDrone – drönarbaserad utsläppsmätning',
  description: 'EcoDrone Sverige AB erbjuder drönarbaserad utsläppsmätning med TDLAS-sensorer och OGI-kameror. Certifierade piloter, miljövetenskaplig kompetens och compliance-fokus.',
  alternates: { canonical: '/om-oss' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EcoDrone Sverige AB',
  url: 'https://ecodrone.se',
  description: 'Drönarbaserad utsläppsmätning av metan och miljöfarliga ämnen för industriell ESG- och compliance-rapportering.',
  knowsAbout: ['LDAR', 'Metanmätning', 'CSRD', 'OGMP 2.0', 'Utsläppsmätning', 'TDLAS', 'OGI'],
  areaServed: { '@type': 'Country', name: 'SE' },
}

export default function OmOssPage() {
  return (
    <>
      <JsonLd data={orgSchema} />
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Om oss', href: '/om-oss' }]} />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
          <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[120px]" />
        </div>
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Om EcoDrone</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-300">
            Vi gör industrins osynliga utsläpp synliga – med drönare, sensorer och
            miljövetenskaplig kompetens. Compliance-redo data som ni kan agera på.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vår vision</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            EcoDrone grundades med övertygelsen att bättre mätdata leder till bättre beslut.
            Vi ser en framtid där varje anläggning med utsläppskällor har tillgång till precis,
            kostnadseffektiv och compliance-redo mätdata – inte grova schabloner. Drönarteknologi
            gör detta möjligt idag.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Kompetens</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Certifierade drönarpiloter', desc: 'Våra piloter har relevant certifiering enligt EU:s drönareregelverk och erfarenhet av flygning i industriell miljö, inklusive ATEX-zoner.' },
              { title: 'Miljövetenskaplig expertis', desc: 'Teamet inkluderar kompetens inom atmosfärskemi, gasmätning och emissionsberäkning. Vi förstår inte bara hur man mäter – utan vad data betyder.' },
              { title: 'Regulatory intelligence', desc: 'Vi följer CSRD, EU-metanförordningen, OGMP 2.0 och svenska miljörapporteringskrav löpande och anpassar våra metoder efter gällande regelverk.' },
              { title: 'Databearbetning & GIS', desc: 'Avancerad bearbetning av geospacial mätdata, interpolering, kvalitetskontroll och leverans i branschstandardformat.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Utrustning</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'DJI Matrice-plattform', text: '– industridrönare med hög lastkapacitet och stabilitet för sensormontage.' },
              { bold: 'TDLAS-sensorer', text: '– Tunable Diode Laser Absorption Spectroscopy för kvantitativ metanmätning med hög precision.' },
              { bold: 'OGI-kameror', text: '– Optical Gas Imaging med infraröd teknik för realtidsvisualisering av gasplymer.' },
              { bold: 'GPS & meteorologisk utrustning', text: '– RTK-GPS för centimeternoggrannhet och vindmätning för emissionsberäkning.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Varför EcoDrone?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Lokal närvaro', desc: 'Svensk verksamhet med förståelse för lokala regelverk och branschförhållanden.' },
              { title: 'Certifierad precision', desc: 'TDLAS och OGI med dokumenterad kalibrering och mätosäkerhet.' },
              { title: 'Compliance-redo', desc: 'Rapporter formaterade för CSRD, OGMP 2.0, SMP och tillsyn.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            <Link href="/tjanster/metodik" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">Metodik & kvalitetssäkring →</Link>
            <Link href="/case" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">Referensuppdrag →</Link>
            <Link href="/compliance" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">Compliance & regelverk →</Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Vill ni veta mer om EcoDrone?" description="Boka en genomgång så berättar vi mer om teamet, utrustningen och hur vi kan hjälpa er." />
    </>
  )
}
