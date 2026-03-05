import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compliance & regelverk – utsläppsrapportering',
  description:
    'CSRD, EU:s metanförordning, OGMP 2.0 och SMP – regelverk som kräver verifierade utsläppsdata. Läs hur EcoDrone hjälper er uppfylla kraven med drönarbaserad mätning.',
  alternates: { canonical: '/compliance' },
  openGraph: {
    title: 'Compliance & regelverk | EcoDrone',
    description: 'Navigera regelverken för utsläppsrapportering med EcoDrones mätdata.',
    url: '/compliance',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka regelverk kräver verifierade utsläppsdata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSRD kräver Scope 1-data för hållbarhetsrapportering, EU:s metanförordning kräver LDAR-inspektioner för energisektorn, OGMP 2.0 sätter standard för olje- och gasindustrin, och svenska SMP-krav kräver årlig miljörapportering med utsläppsdata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur många svenska företag berörs av CSRD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cirka 4 100 svenska företag berörs av CSRD när direktivet rullas ut fullt 2025–2028. Först ut är stora börsnoterade bolag med fler än 500 anställda, följt av större onoterade bolag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad innebär LDAR för industriverksamheter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LDAR (Leak Detection and Repair) innebär systematisk inspektion av anläggningskomponenter för att identifiera och åtgärda gasläckor. EU:s metanförordning gör LDAR obligatoriskt med specificerade inspektionsintervall och detektionsgränser.',
      },
    },
    {
      '@type': 'Question',
      name: 'Räcker emissionsfaktorer för regulatorisk rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allt fler regelverk kräver faktisk mätdata istället för generella emissionsfaktorer. CSRD, OGMP 2.0 och EU:s metanförordning betonar alla vikten av verifierbara mätningar framför schablonberäkningar – särskilt för diffusa utsläppskällor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan EcoDrone hjälpa oss navigera flera regelverk samtidigt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. En och samma mätning kan generera data som uppfyller krav från flera regelverk – exempelvis CSRD Scope 1-rapportering, SMP-miljörapportering och OGMP 2.0. Vi anpassar rapporteringen efter era specifika regulatoriska behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snart behöver vi agera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CSRD gäller redan för de största bolagen (rapporteringsår 2025). EU:s metanförordning kräver LDAR-program inom 12–18 månader för befintliga anläggningar. SMP-rapportering sker löpande. Vi rekommenderar att börja planera er mätstrategi redan nu.',
      },
    },
  ],
}

const regulations = [
  {
    title: 'CSRD & ESRS E1',
    desc: 'Scope 1-utsläppsmätning för hållbarhetsrapportering. Cirka 4 100 svenska bolag berörs 2025–2028. Verifierade mätdata krävs för revisionsbar rapportering.',
    href: '/compliance/csrd',
  },
  {
    title: 'EU:s metanförordning',
    desc: 'Obligatoriska LDAR-inspektioner och metanmätning för olje-, gas- och gruvbolag. I kraft sedan 2024 med stegvis implementering.',
    href: '/compliance/eu-metanforordning',
  },
  {
    title: 'OGMP 2.0',
    desc: 'Internationellt ramverk för kvantitativ metanrapportering. Nivå 4/5 kräver direkt mätdata – inte estimat med emissionsfaktorer.',
    href: '/compliance/ogmp',
  },
  {
    title: 'Miljörapportering & SMP',
    desc: 'Naturvårdsverkets krav på årlig miljörapportering med utsläppsdata. Tillståndspliktiga verksamheter inom industri, avfall och VA.',
    href: '/compliance/miljorapportering',
  },
]

export default function ComplianceHub() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
      ]} />

      <Hero
        title="Compliance och regelverk"
        subtitle="Regulatoriska krav driver behovet av verifierade utsläppsdata. Här förklarar vi vilka regelverk som berör er verksamhet och hur EcoDrones mätdata hjälper er uppfylla kraven."
        large
        trustItems={['CSRD & ESRS E1', 'EU metanförordning', 'OGMP 2.0', 'SMP']}
      />

      {/* Överblick */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Det regulatoriska landskapet skärps
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Under 2024–2028 genomgår regelverket för utsläppsrapportering den mest genomgripande
            förändringen på decennier. CSRD kräver att tusentals svenska företag rapporterar
            Scope 1-utsläpp med verifierad data. EU:s metanförordning inför obligatorisk LDAR
            för hela energisektorn. OGMP 2.0 sätter internationell standard för kvantitativ
            metanrapportering. Och Naturvårdsverkets SMP-krav förväntar sig allt mer detaljerad data.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Gemensamt för alla regelverk är ett skifte från schablonberäkningar till faktisk mätdata.
            Generella emissionsfaktorer räcker inte längre – ni behöver verifierbara mätvärden med
            dokumenterad metodik och mätosäkerhet. Det är här EcoDrone kommer in.
          </p>
        </div>
      </section>

      {/* Regelverkskort */}
      <section className="section-padding section-darker">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-white text-center">
            Regelverk vi hjälper er uppfylla
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {regulations.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group card-dark p-6 sm:p-8 transition-all hover:border-dark-600 hover:bg-dark-800/60"
              >
                <h3 className="text-xl font-bold text-white">{r.title}</h3>
                <p className="mt-3 text-dark-400 leading-relaxed">{r.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-400 group-hover:text-brand-300">
                  Läs mer &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tidslinje */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Regulatorisk tidslinje</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Regelverken implementeras stegvis under 2024–2028. Nedan sammanfattar vi de viktigaste
            milstolparna och vilka sektorer som berörs.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="py-3 pr-4 text-left text-dark-400 font-medium">Regelverk</th>
                  <th className="py-3 pr-4 text-left text-dark-400 font-medium">Krav</th>
                  <th className="py-3 pr-4 text-left text-dark-400 font-medium">Berörda sektorer</th>
                  <th className="py-3 text-left text-dark-400 font-medium">Tidslinje</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                <tr className="border-b border-dark-800">
                  <td className="py-3 pr-4 font-medium text-white">CSRD / ESRS E1</td>
                  <td className="py-3 pr-4">Scope 1 utsläppsmätning</td>
                  <td className="py-3 pr-4">Alla stora bolag (&gt;500 anst.)</td>
                  <td className="py-3">2025–2028</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-3 pr-4 font-medium text-white">EU metanförordning</td>
                  <td className="py-3 pr-4">LDAR-inspektioner</td>
                  <td className="py-3 pr-4">Olja, gas, LNG, gruvdrift</td>
                  <td className="py-3">2025–2027</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-3 pr-4 font-medium text-white">OGMP 2.0</td>
                  <td className="py-3 pr-4">Nivå 4/5 mätdata</td>
                  <td className="py-3 pr-4">Olja & gas</td>
                  <td className="py-3">Löpande</td>
                </tr>
                <tr className="border-b border-dark-800">
                  <td className="py-3 pr-4 font-medium text-white">SMP / Miljöbalken</td>
                  <td className="py-3 pr-4">Årlig miljörapportering</td>
                  <td className="py-3 pr-4">Industri, avfall, VA</td>
                  <td className="py-3">Löpande</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-white">Avfallsdirektivet</td>
                  <td className="py-3 pr-4">Ytemissionsmätning</td>
                  <td className="py-3 pr-4">Deponier</td>
                  <td className="py-3">Löpande</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hur EcoDrone hjälper */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Hur EcoDrone stödjer er compliance
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            En och samma mätning från EcoDrone kan generera data som uppfyller krav från flera
            regelverk samtidigt. Vi förstår de specifika rapporteringskraven och anpassar
            leverabler och dokumentation efter era behov.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Faktisk mätdata', text: '– vi mäter era verkliga utsläpp med kalibrerade sensorer, inte schabloner eller emissionsfaktorer.' },
              { bold: 'Dokumenterad metodik', text: '– varje rapport beskriver mätmetod, kalibreringsstatus, mätosäkerhet och kvalitetskontroll.' },
              { bold: 'Revisionsbar kvalitet', text: '– rapporterna är utformade för att granskas av revisorer, tillsynsmyndigheter och tredjepartsverifierare.' },
              { bold: 'Multi-regelverk-leverans', text: '– data formateras för det eller de regelverk som är relevanta för er: CSRD, OGMP, SMP eller LDAR-program.' },
              { bold: 'Löpande uppföljning', text: '– regelbundna mätningar möjliggör trendanalys och dokumentation av förbättringar över tid.' },
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

      {/* Vilka berörs */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vilka verksamheter berörs?</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            De flesta svenska industriverksamheter med diffusa utsläppskällor berörs av ett eller
            flera av dessa regelverk. Nedan listar vi typiska verksamhetstyper och vilka krav som
            gäller.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { sector: 'Deponier', regs: 'Avfallsdirektivet, SMP, CSRD', href: '/branscher/deponier' },
              { sector: 'Biogasanläggningar', regs: 'SMP, CSRD', href: '/branscher/biogas' },
              { sector: 'Reningsverk', regs: 'SMP, CSRD', href: '/branscher/reningsverk' },
              { sector: 'Olja, gas & raffinaderier', regs: 'EU metanförordning, OGMP 2.0, CSRD', href: '/branscher/olja-gas' },
              { sector: 'Gruvdrift', regs: 'EU metanförordning, SMP, CSRD', href: '/branscher/gruva' },
              { sector: 'Hamnar & LNG', regs: 'EU metanförordning, OGMP 2.0', href: '/branscher/hamnar' },
            ].map((item) => (
              <Link
                key={item.sector}
                href={item.href}
                className="card-dark p-4 hover:border-dark-600 transition-colors group"
              >
                <h3 className="font-semibold text-white group-hover:text-brand-400 transition-colors">{item.sector}</h3>
                <p className="mt-1 text-sm text-dark-400">{item.regs}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om compliance och regelverk"
      />

      <CtaBand
        heading="Osäker på vilka krav som gäller för er?"
        description="Kontakta oss för en genomgång av de regelverk som berör er verksamhet och hur vi kan hjälpa er uppfylla kraven."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
