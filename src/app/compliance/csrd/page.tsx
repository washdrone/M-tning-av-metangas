import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSRD Scope 1 utsläppsmätning – ESRS E1 | EcoDrone',
  description:
    'CSRD kräver Scope 1-rapportering med verifierad data. Cirka 4 100 svenska företag berörs 2025–2028. EcoDrone levererar mätdata som klarar revision enligt ESRS E1.',
  alternates: { canonical: '/compliance/csrd' },
  openGraph: {
    title: 'CSRD Scope 1 utsläppsmätning – ESRS E1 | EcoDrone',
    description:
      'Uppfyll CSRD:s krav på Scope 1-rapportering med drönarbaserade mätdata. ESRS E1, klimatbokslut och revision.',
    url: '/compliance/csrd',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'CSRD & ESRS E1 – Scope 1 utsläppsmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Information om CSRD:s krav på Scope 1-utsläppsrapportering och hur drönarbaserad mätning levererar verifierade data för ESRS E1.',
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
        text: 'CSRD kräver att berörda företag rapporterar sina Scope 1-utsläpp (direkta utsläpp) i ton CO₂-ekvivalenter. ESRS E1 specificerar att data ska vara verifierbar och att mätmetodik ska dokumenteras. Schabloner accepteras som startpunkt men verifierade mätdata förväntas på sikt.',
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
      name: 'Räcker det med schabloner för CSRD-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schabloner kan användas initialt men innebär större osäkerhet och risk vid revision. Verifierade mätdata stärker rapportens trovärdighet och uppfyller ESRS E1:s krav på datakvalitet. Revisorerna förväntas gradvis kräva bättre dataunderlag.',
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
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function CsrdPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'CSRD & ESRS E1', href: '/compliance/csrd' },
      ]} />

      <Hero
        title="CSRD & ESRS E1"
        subtitle="Corporate Sustainability Reporting Directive kräver att cirka 4 100 svenska företag rapporterar Scope 1-utsläpp med verifierbar data. EcoDrone levererar mätdata som klarar revision."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['~4 100 svenska företag', 'Scope 1 i CO₂e', 'Revisionsredo data']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">CSRD och Scope 1-utsläppsmätning</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            CSRD (Corporate Sustainability Reporting Directive) ersätter det tidigare
            NFRD-direktivet och utökar kretsen av rapporteringspliktiga företag avsevärt.
            I Sverige berörs uppskattningsvis 4 100 företag stegvis mellan 2025 och 2028.
            ESRS E1 (European Sustainability Reporting Standards – Climate) specificerar
            att företag ska rapportera sina direkta växthusgasutsläpp (Scope 1) i ton
            CO₂-ekvivalenter.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            För många verksamheter innebär detta att diffusa emissioner av metan (CH₄),
            lustgas (N₂O) och andra växthusgaser måste kvantifieras med tillräcklig
            datakvalitet för att klara extern revision. Drönarbaserad mätning ger er
            de verifierade mätvärden som behövs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tidslinje för CSRD</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '2025', title: 'Stora börsnoterade företag', desc: 'Rapportering avseende räkenskapsåret 2024. Företag med >500 anställda som redan omfattades av NFRD.' },
              { step: '2026', title: 'Övriga stora företag', desc: 'Rapportering avseende 2025. Företag som uppfyller minst två av tre kriterier: >250 anställda, >40 MEUR omsättning, >20 MEUR balansomslutning.' },
              { step: '2027', title: 'Noterade SME-företag', desc: 'Rapportering avseende 2026. Noterade små och medelstora företag (med möjlighet till opt-out till 2028).' },
              { step: '2028', title: 'Full implementering', desc: 'Samtliga berörda företag rapporterar enligt CSRD. Förväntningen på datakvalitet och verifierbarhet ökar successivt.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-dark-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad ESRS E1 kräver</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Scope 1-utsläpp', text: '– direkta utsläpp i ton CO₂e per år, uppdelat per växthusgastyp.' },
              { bold: 'Metodik', text: '– beskrivning av mätmetod, beräkningsunderlag och använda emissionsfaktorer/GWP-värden.' },
              { bold: 'Datakvalitet', text: '– uppgift om datans osäkerhet och om den baseras på mätning, beräkning eller uppskattning.' },
              { bold: 'Jämförbarhet', text: '– möjlighet att jämföra data mellan år och mot basår/minskningsmål.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Så hjälper EcoDrone er med CSRD</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vi mäter era Scope 1-emissioner av metan, lustgas och koldioxid med drönarbaserad
            teknik. Resultaten levereras i ton CO₂-ekvivalenter med dokumenterad mätosäkerhet
            och spårbar metodik. Rapporterna är utformade för att fungera som underlag vid
            extern revision och kan direkt integreras i ert hållbarhetsbokslut.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om CSRD och emissionsmätning" />

      <CtaBand
        heading="Omfattas ni av CSRD?"
        description="Kontakta oss för att diskutera hur vi kan leverera de Scope 1-data ni behöver för ESRS E1-rapportering."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/compliance/miljorapportering" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Miljörapportering & SMP
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Växthusgasmätning
            </Link>
            <Link href="/compliance/eu-metanforordning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              EU-metanförordningen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
