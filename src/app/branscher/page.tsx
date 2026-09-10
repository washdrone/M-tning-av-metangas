import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'
import { OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Branscher vi mäter utsläpp åt',
  description:
    'Drönarbaserad utsläppsmätning för deponier, biogas, reningsverk, olja & gas, gruvor och hamnar. EcoDrone levererar mätmätunderlag anpassat till ett avtalat rapporteringsändamål.',
  alternates: { canonical: '/branscher' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Branscher vi mäter utsläpp åt – EcoDrone',
    description: 'Drönarbaserad utsläppsmätning för sex nyckelindustrier i Sverige.',
    url: '/branscher',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka branscher erbjuder EcoDrone utsläppsmätning för?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi utför drönarbaserad utsläppsmätning för deponier, biogasanläggningar, reningsverk, olje- och gasindustrin, gruvdrift samt hamnar och LNG-terminaler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fungerar drönarmätning för alla typer av anläggningar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vår metodik anpassas efter varje anläggningstyp – från öppna deponilandskap till komplexa raffinaderier och hamninfrastruktur. Vi väljer sensorer och flygmönster utifrån de specifika förutsättningarna.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser kan EcoDrone mäta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter primärt metan (CH₄) men erbjuder även mätning av lustgas (N₂O), flyktiga organiska föreningar (VOC) och andra gaser beroende på bransch och behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur skiljer sig mätningen mellan olika branscher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varje bransch har unika utmaningar. Deponier kräver ytemissionsmätning över stora arealer, biogas fokuserar på läcksökning vid processkomponenter, och olja & gas kräver LDAR-kompatibla protokoll. Vi anpassar metodik, sensorer och rapportering efter branschens regulatoriska krav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Uppfyller mätdata regulatoriska krav som CSRD och EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ange vilket regelverk och vilken del av rapporteringen ni behöver underlag för. Metod, omfattning och leverans behöver bedömas mot kraven före beställning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan EcoDrone utföra mätningar i hela Sverige?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi är verksamma i hela Sverige, från Skåne till Norrbotten. Kontakta oss för att diskutera ert specifika uppdrag.',
      },
    },
  ],
}

const industries = [
  {
    title: 'Deponier & avfallsanläggningar',
    href: '/branscher/deponier',
    description: 'Ytemissionsmätning och hotspot-identifiering av metanutsläpp genom täckskikt. Uppfyll krav från Avfallsdirektivet och stärk er SMP-rapportering.',
    tags: ['Avfall Sverige 2024:12', 'SMP', 'CH₄'],
  },
  {
    title: 'Biogas',
    href: '/branscher/biogas',
    description: 'Läcksökning och kvantifiering av metanförluster vid rötkammare, gaslager och uppgradering. Minska förluster och förbättra er ESG-profil.',
    tags: ['Läckagekontroll', 'RNG', 'ESG'],
  },
  {
    title: 'Reningsverk',
    href: '/branscher/reningsverk',
    description: 'Kartlägg metan- och lustgasutsläpp från biologisk rening och slamhantering. Ersätt schabloner med faktiska mätvärden för ert klimatbokslut.',
    tags: ['CH₄ + N₂O', 'Slamlagring', 'IPCC'],
  },
  {
    title: 'Olja, gas & raffinaderier',
    href: '/branscher/olja-gas',
    description: 'LDAR-kompatibel gasdetektion och kvantifiering. Uppfyll krav från EU:s metanförordning och OGMP 2.0 med drönarburen OGI och TDLAS.',
    tags: ['LDAR', 'OGMP 2.0', 'EU-metanförordning'],
  },
  {
    title: 'Gruvdrift & tungindustri',
    href: '/branscher/gruva',
    description: 'Mätning av diffusa utsläpp och stoftspridning vid dagbrott, upplag och ventilationsschakt. Stärk er miljörapportering med verklig mätdata.',
    tags: ['Diffusa utsläpp', 'Arealmätning', 'CSRD'],
  },
  {
    title: 'Hamnar & LNG-terminaler',
    href: '/branscher/hamnar',
    description: 'Emissionsinspektion vid komplexa hamninfrastrukturer och LNG-anläggningar. Identifiera läckor i rörledningar, lagring och lastningsoperationer.',
    tags: ['Komplex infrastruktur', 'Svårtillgängliga ytor'],
  },
]

export default function BranscherPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
      ]} />

      <Hero
        title="Branscher vi mäter utsläpp åt"
        subtitle="Från deponier och biogasanläggningar till raffinaderier och hamnar – vi anpassar vår drönarbaserade mätmetodik efter er branschs specifika utmaningar och regulatoriska krav."
        large
        trustItems={['Sex nyckelindustrier', 'Regulatorisk compliance', 'Hela Sverige']}
      />

      {/* Introduktion */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Utsläppsmätning anpassad efter er bransch
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Varje industri har unika utmaningar när det gäller att mäta och rapportera utsläpp av växthusgaser.
            Deponier kräver systematisk kartläggning av stora ytor. Biogasanläggningar behöver precisionsläcksökning
            vid komplexa processkomponenter. Raffinaderier måste följa strikta LDAR-protokoll. EcoDrone kombinerar
            avancerad sensorteknik med drönarburen mobilitet för att leverera tillförlitlig mätdata – oavsett
            bransch och anläggningstyp.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Vi förstår de regulatoriska krav som styr er verksamhet. Oavsett om det handlar om CSRD-rapportering,
            EU:s metanförordning, OGMP 2.0 eller svenska SMP-krav så levererar vi data i rätt format med
            dokumenterad metodik och mätosäkerhet.
          </p>
        </div>
      </section>

      {/* Branschkort */}
      <section className="section-padding section-darker">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-white text-center">
            Välj bransch
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="card-dark p-6 flex flex-col gap-3 hover:border-slate-600 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {industry.tags.map((tag) => (
                    <span key={tag} className="rounded border border-slate-700/50 bg-slate-800/50 px-2 py-0.5 text-[11px] font-medium text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto text-cyan-400 text-sm font-medium">
                  Läs mer &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Varför EcoDrone */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Varför välja EcoDrone för utsläppsmätning?
          </h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Branschspecifik anpassning', text: '– vi riktar oss mot sex nyckelindustrier och anpassar protokoll och sensorer efter era förutsättningar.' },
              { bold: 'Regulatorisk kompetens', text: '– vi förstår CSRD, EU:s metanförordning, OGMP 2.0 och svenska SMP-krav och levererar underlag vars användning behöver stämmas av mot rapporteringskraven.' },
              { bold: 'Snabb mobilisering', text: '– drönarbaserad metodik innebär minimal störning av er drift och korta ledtider från bokning till rapport.' },
              { bold: 'Dokumenterad kvalitet', text: '– alla mätningar genomförs med kalibrerade sensorer och dokumenterad mätosäkerhet enligt etablerade protokoll.' },
              { bold: 'Hela Sverige', text: '– vi utför mätningar från Malmö till Kiruna, med lokal närvaro och rikstäckande kapacitet.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-översikt */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Regulatoriska krav vi hjälper er uppfylla
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Kraven varierar med verksamhet, tillstånd och rapporteringsår. CSRD har ändrats på EU-nivå under 2026. EU:s metanförordning gäller avgränsade delar av olje-, fossilgas- och kolsektorn. Utgå från er anläggnings faktiska krav inför beställning.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            EcoDrone tar fram avgränsade mätunderlag. Ange vilka krav som ska styra uppdraget så att metod och leverans kan bedömas i förväg. Läs mer om specifika regelverk på våra{' '}
            <Link href="/compliance" className="text-cyan-400 hover:underline">compliance-sidor</Link>.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))} heading="Vanliga frågor om branschanpassad utsläppsmätning" />

      <CtaBand
        heading="Vilken bransch tillhör ni?"
        description="Kontakta oss för att diskutera hur vi kan anpassa vår mätmetodik efter era specifika behov och regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
