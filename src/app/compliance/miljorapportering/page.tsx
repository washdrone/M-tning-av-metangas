import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Miljörapportering SMP – metandata för utsläppsredovisning | EcoDrone',
  description:
    'Miljörapportering via SMP med verifierade metandata. Ersätt schabloner med mätbaserade utsläppsdata för Naturvårdsverket. EcoDrone levererar compliance-redo underlag.',
  alternates: { canonical: '/compliance/miljorapportering' },
  openGraph: {
    title: 'Miljörapportering SMP – metandata | EcoDrone',
    description:
      'Verifierad metandata för SMP-rapportering till Naturvårdsverket. Ersätt schabloner med drönarbaserade mätresultat.',
    url: '/compliance/miljorapportering',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Miljörapportering & SMP',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Information om svensk miljörapportering via SMP och hur drönarbaserad mätning levererar verifierad utsläppsdata.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är SMP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SMP (Svenska MiljörapporteringsPortalen) är det system genom vilket tillståndspliktiga verksamheter i Sverige rapporterar sina utsläpp till Naturvårdsverket årligen. Rapporteringen omfattar bland annat utsläpp till luft, inklusive växthusgaser som metan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Varför är mätdata bättre än schabloner för SMP-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schabloner baseras på generiska emissionsfaktorer som inte tar hänsyn till anläggningens specifika förutsättningar. Mätdata ger en mer korrekt bild av de faktiska utsläppen och stärker rapportens trovärdighet vid tillsyn. Ofta visar mätningar att utsläppen avviker markant från schabloner – både uppåt och nedåt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka verksamheter måste rapportera till SMP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alla tillståndspliktiga verksamheter enligt miljöbalken ska lämna miljörapport till SMP. Det gäller bland annat deponier, reningsverk, biogasanläggningar, industriella processer, energianläggningar och avfallshantering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur formaterar EcoDrone data för SMP-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi levererar utsläppsdata i de enheter och format som SMP kräver. Rapporten innehåller emissioner per gas (t.ex. ton CH₄/år), dokumenterad beräkningsmetodik och mätosäkerhet. Ni kan föra in värdena direkt i er miljörapport.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function MiljorapporteringPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Miljörapportering & SMP', href: '/compliance/miljorapportering' },
      ]} />

      <Hero
        title="Miljörapportering och SMP"
        subtitle="Svenska MiljörapporteringsPortalen kräver årlig utsläppsredovisning. Ersätt osäkra schabloner med verifierade mätdata från EcoDrone – direkt användbar i er miljörapport."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['SMP-kompatibel data', 'Ersätt schabloner', 'Tillsynsredo']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Miljörapportering med verifierad metandata</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Tillståndspliktiga verksamheter i Sverige ska årligen rapportera sina utsläpp
            till Naturvårdsverket via Svenska MiljörapporteringsPortalen (SMP). För många
            verksamheter – deponier, reningsverk, biogasanläggningar och industrier –
            omfattar rapporteringen växthusgaser som metan (CH₄) och lustgas (N₂O).
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Idag förlitar sig många verksamheter på generiska schabloner och emissionsfaktorer.
            Forskning visar att dessa ofta avviker kraftigt från de faktiska utsläppen.
            Drönarbaserad mätning ger er platsspecifik data som stärker rapportens
            trovärdighet och ger en mer korrekt bild av era utsläpp.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Fördelar med mätbaserad SMP-rapportering</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Korrekt data', desc: 'Verifierade mätvärden ger en mer korrekt bild av era utsläpp än generiska schabloner.' },
              { title: 'Starkare vid tillsyn', desc: 'Mätbaserad data med dokumenterad metodik och mätosäkerhet ger bättre grund vid tillsyn och prövning.' },
              { title: 'Åtgärdsunderlag', desc: 'Mätdata visar var utsläppen sker och hur stora de är – direkt underlag för prioriterade åtgärder.' },
              { title: 'Jämförbarhet', desc: 'Återkommande mätningar med samma metodik gör det möjligt att följa trender och verifiera åtgärdseffekt.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl">Verksamheter som rapporterar till SMP</h2>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'Deponier – diffusa metanemissioner genom täckskiktet',
              'Avloppsreningsverk – metan och lustgas från reningsprocessen',
              'Biogasanläggningar – metanförluster vid produktion och uppgradering',
              'Industriella processer – processemissioner och fugitiva utsläpp',
              'Energianläggningar – förbränning och diffusa utsläpp',
              'Avfallshantering – kompostering, rötning och mellanlagring',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om miljörapportering och SMP" />

      <CtaBand
        heading="Vill ni förbättra era SMP-rapporter med mätdata?"
        description="Kontakta oss för att diskutera hur vi kan leverera verifierade utsläppsdata anpassade för er miljörapportering."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/compliance/csrd" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              CSRD & ESRS E1
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Växthusgasmätning
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
