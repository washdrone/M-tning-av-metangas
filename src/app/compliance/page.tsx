import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compliance – regelverk för emissionsmätning | EcoDrone',
  description:
    'Översikt av regelverk som kräver emissionsdata: CSRD, EU:s metanförordning, OGMP 2.0 och SMP-miljörapportering. Se hur EcoDrone hjälper er uppfylla kraven.',
  alternates: { canonical: '/compliance' },
  openGraph: {
    title: 'Compliance – regelverk för emissionsmätning | EcoDrone',
    description:
      'CSRD, EU-metanförordning, OGMP 2.0, SMP – regelverk som kräver verifierade emissionsdata. EcoDrone levererar det underlag ni behöver.',
    url: '/compliance',
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Compliance – regelverk för emissionsmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Översikt av regelverk och standarder som kräver verifierade emissionsdata från industriella verksamheter.',
}

export default function CompliancePage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Compliance', href: '/compliance' },
      ]} />

      <Hero
        title="Compliance och regelverk"
        subtitle="Kraven på verifierade emissionsdata skärps. CSRD, EU:s metanförordning, OGMP 2.0 och svensk miljörapportering ställer alla krav på mätdata – inte schabloner. Så hjälper EcoDrone er uppfylla dem."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['CSRD/ESRS E1', 'EU-metanförordning', 'OGMP 2.0']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Regelverkslandskapet förändras</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Flera nya regelverk ställer krav på att företag mäter, rapporterar och minskar
            sina växthusgasutsläpp med verifierade data. Schabloner och uppskattningar räcker
            inte längre. EcoDrone levererar de mätdata ni behöver för att uppfylla kraven –
            oavsett vilka regelverk som gäller för just er verksamhet.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-center">Regelverk och standarder</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'CSRD & ESRS E1',
                desc: 'Corporate Sustainability Reporting Directive kräver att cirka 4 100 svenska företag rapporterar Scope 1-utsläpp med verifierad data. ESRS E1 specificerar klimatrelaterade upplysningskrav.',
                href: '/compliance/csrd',
                linkText: 'Läs om CSRD',
              },
              {
                title: 'EU:s metanförordning',
                desc: 'Förordning (EU) 2024/1787 inför bindande krav på LDAR-program, emissionsrapportering och minskningsmål för energisektorn. Trädde i kraft 2024.',
                href: '/compliance/eu-metanforordning',
                linkText: 'Läs om EU-metanförordningen',
              },
              {
                title: 'OGMP 2.0',
                desc: 'Oil and Gas Methane Partnership 2.0 definierar fem rapporteringsnivåer. Nivå 4/5 kräver platsspecifika mätningar av metanutsläpp – precis det EcoDrone levererar.',
                href: '/compliance/ogmp',
                linkText: 'Läs om OGMP 2.0',
              },
              {
                title: 'Miljörapportering & SMP',
                desc: 'Svenska MiljörapporteringsPortalen kräver årlig redovisning av utsläpp till luft. Verkliga mätdata ger mer korrekt rapportering än schabloner.',
                href: '/compliance/miljorapportering',
                linkText: 'Läs om SMP-rapportering',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-6">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-dark-300 leading-relaxed">{item.desc}</p>
                <Link href={item.href} className="mt-4 inline-block text-brand-400 hover:underline">
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatorisk tracker */}
      <section className="section-padding section-darker">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-center">Aktuella krav &amp; tidslinjer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-400">
            Regelverken som styr era mätbehov. Uppdateras löpande när ny lagstiftning träder i kraft.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">Regelverk</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">Krav</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">Berörda</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">Tidslinje</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-dark-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { reg: 'CSRD / ESRS E1', krav: 'Scope 1-utsläppsmätning i hållbarhetsrapport', berord: 'Stora bolag (>500 ans) → alla stora bolag', datum: '2025/2026', status: 'Aktiv' },
                  { reg: 'EU Metanförordning 2024/1787', krav: 'LDAR-inspektioner, OGMP 2.0 nivå 1–5', berord: 'Olja, gas, gruvdrift i EU', datum: '2025–', status: 'Aktiv' },
                  { reg: 'SMP / Miljöbalken', krav: 'Årlig miljörapportering med utsläppsdata', berord: 'Industri, avfall, VA', datum: '–', status: 'Löpande' },
                  { reg: 'Avfall Sverige 2024:12', krav: 'Kvantitativ mätning av ytemissioner', berord: 'Deponier och avfallsanläggningar', datum: '2024–', status: 'Aktiv' },
                  { reg: 'OGMP 2.0 nivå 4/5', krav: 'Direktmätt data, ej emissionsfaktorer', berord: 'Olje- och gasbolag', datum: 'Löpande', status: 'Frivilligt/krav' },
                ].map((r) => (
                  <tr key={r.reg} className="border-b border-dark-800 hover:bg-dark-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm font-semibold text-white whitespace-nowrap">{r.reg}</td>
                    <td className="px-4 py-4 text-sm text-dark-300">{r.krav}</td>
                    <td className="px-4 py-4 text-sm text-dark-400">{r.berord}</td>
                    <td className="px-4 py-4 text-sm text-dark-400 font-mono">{r.datum}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
                        r.status === 'Aktiv'
                          ? 'bg-accent-500/15 text-accent-400'
                          : 'bg-dark-700/50 text-dark-300'
                      }`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Hur EcoDrone stödjer er compliance</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Verifierade mätdata', text: '– ersätt schabloner med faktiska mätvärden som klarar revision och tillsyn.' },
              { bold: 'Dokumenterad mätosäkerhet', text: '– varje rapport innehåller osäkerhetsanalys enligt etablerade standarder.' },
              { bold: 'Compliance-redo rapporter', text: '– rapporter utformade för CSRD, SMP, OGMP 2.0 och tillsynsmyndigheter.' },
              { bold: 'Spårbarhet', text: '– kalibreringsintyg, flygloggar och bearbetningsparametrar dokumenteras fullständigt.' },
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

      <CtaBand
        heading="Osäker på vilka krav som gäller er?"
        description="Kontakta oss för en genomgång av vilka regelverk som berör er verksamhet och hur vi kan hjälpa er uppfylla dem."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
