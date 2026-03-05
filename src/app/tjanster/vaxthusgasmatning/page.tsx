import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Växthusgasmätning industri – CH₄, N₂O, CO₂ | EcoDrone',
  description:
    'Växthusgasmätning för industri med drönare. Mät metan (CH₄), lustgas (N₂O) och koldioxid (CO₂) kombinerat. Underlag för klimatbokslut och Scope 1-rapportering.',
  alternates: { canonical: '/tjanster/vaxthusgasmatning' },
  openGraph: {
    title: 'Växthusgasmätning industri – CH₄, N₂O, CO₂ | EcoDrone',
    description:
      'Drönarbaserad växthusgasmätning av metan, lustgas och koldioxid. Komplett Scope 1-underlag för industri.',
    url: '/tjanster/vaxthusgasmatning',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Växthusgasmätning för industri',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad mätning av växthusgaser (CH₄, N₂O, CO₂) för industriella anläggningar. Kombinerad sensor för komplett Scope 1-underlag.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Växthusgasmätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka växthusgaser mäter ni med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter metan (CH₄), koldioxid (CO₂) och lustgas (N₂O) – de tre viktigaste växthusgaserna vid industriella processer. Sensoruppsättningen anpassas efter era behov och vilka gaser som är relevanta vid er anläggning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan resultaten användas för CSRD-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Våra rapporter är utformade för att fungera som underlag för Scope 1-rapportering enligt CSRD/ESRS E1. Emissioner anges i CO₂-ekvivalenter med dokumenterad mätosäkerhet och spårbar metodik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur omvandlas mätvärden till CO₂-ekvivalenter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi använder IPCC:s officiella GWP-faktorer (Global Warming Potential) för att omvandla metan och lustgas till CO₂-ekvivalenter. Metan har GWP 28 (100 år) eller 80 (20 år), lustgas har GWP 265. Vi rapporterar alltid med angivna GWP-värden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka branscher har mest nytta av växthusgasmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reningsverk (CH₄ + N₂O), deponier (CH₄ + CO₂), biogasanläggningar (CH₄), jordbruk (N₂O + CH₄), processindustri och energianläggningar. Alla verksamheter som behöver verifiera sina Scope 1-utsläpp har nytta av drönarbaserad växthusgasmätning.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function VaxthusgasmatningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Växthusgasmätning', href: '/tjanster/vaxthusgasmatning' },
      ]} />

      <Hero
        title="Växthusgasmätning för industri"
        subtitle="Mät metan, lustgas och koldioxid kombinerat med drönarbaserad växthusgasmätning. Komplett Scope 1-underlag med verifierade mätvärden – inte schabloner."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['CH₄ + N₂O + CO₂', 'CO₂-ekvivalenter', 'Scope 1-underlag']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Komplett växthusgasmätning med drönare</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Många industriella verksamheter släpper ut flera växthusgaser samtidigt – metan
            från organiska processer, lustgas från kväveomvandling och koldioxid från förbränning
            eller nedbrytning. Att mäta bara en gas ger en ofullständig bild av klimatpåverkan.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            EcoDrones växthusgasmätning kombinerar sensorer för CH₄, N₂O och CO₂ på samma
            drönarplattform. Ni får en samlad bild av era processemissioner uttryckt i
            CO₂-ekvivalenter – direkt användbar i klimatbokslut, CSRD-rapportering och
            åtgärdsplanering.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Gaser vi mäter</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Metan (CH₄)', desc: 'GWP₁₀₀: 28. Från slamhantering, deponier, biogas, rörledningar. Mäts med TDLAS-sensor.' },
              { title: 'Lustgas (N₂O)', desc: 'GWP₁₀₀: 265. Från biologisk rening, gödselhantering, förbränningsprocesser.' },
              { title: 'Koldioxid (CO₂)', desc: 'GWP: 1. Från förbränning, nedbrytning, kalcineringsprocesser. Mäts med NDIR-sensor.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar per bransch</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Reningsverk', desc: 'CH₄ från slamprocesser + N₂O från biologisk rening. Ersätt schabloner med mätdata.' },
              { title: 'Deponier', desc: 'CH₄ + CO₂ från nedbrytning av organiskt avfall genom täckskiktet.' },
              { title: 'Processindustri', desc: 'Kombinerad mätning vid komplexa anläggningar med flera utsläppskällor.' },
              { title: 'Energianläggningar', desc: 'Verifiering av förbränningsemissioner och diffusa utsläpp.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Från mätvärden till CO₂-ekvivalenter</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vi omvandlar samtliga uppmätta gasemissioner till CO₂-ekvivalenter med IPCC:s
            officiella GWP-faktorer. Rapporten redovisar emissioner per gas och totalt i
            ton CO₂e per år – redo att föras in i ert klimatbokslut, GHG Protocol-rapportering
            eller CSRD-deklaration.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Mätosäkerhet dokumenteras per gas och propageras till totalvärdet. Ni vet inte
            bara hur stora utsläppen är utan också hur säkra värdena är – en kritisk
            kvalitetsparameter vid revision och tillsyn.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om växthusgasmätning" />

      <CtaBand
        heading="Behöver ni kartlägga era växthusgasutsläpp?"
        description="Kontakta oss för att diskutera vilka gaser som är relevanta vid er anläggning och hur vi mäter dem."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
            <Link href="/tjanster/plymmating" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Plymmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
