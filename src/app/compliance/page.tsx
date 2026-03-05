import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compliance – regelverk för utsläppsmätning',
  description: 'CSRD, EU-metanförordningen, OGMP 2.0 och SMP – regelverk som kräver verifierade utsläppsdata. Läs hur EcoDrone hjälper er uppfylla kraven.',
  alternates: { canonical: '/compliance' },
}

const regulations = [
  { title: 'CSRD & ESRS E1', desc: 'Scope 1-utsläppsmätning för hållbarhetsrapportering. Ca 4 100 svenska bolag berörs från 2025.', href: '/compliance/csrd' },
  { title: 'EU-metanförordningen', desc: 'LDAR-inspektioner och metanmätning för olje-, gas- och gruvbolag. I kraft sedan 2024.', href: '/compliance/eu-metanforordning' },
  { title: 'OGMP 2.0', desc: 'Nivå 4/5-rapportering med direkt mätdata för olje- och gassektorn.', href: '/compliance/ogmp' },
  { title: 'SMP & Miljörapportering', desc: 'Naturvårdsverkets krav på årlig miljörapportering med utsläppsdata.', href: '/compliance/miljorapportering' },
]

export default function ComplianceHub() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Compliance', href: '/compliance' }]} />

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
          <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[120px]" />
        </div>
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Compliance & regelverk</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-300">
            Regulatoriska krav driver behovet av verifierade utsläppsdata. Här förklarar vi vilka
            regelverk som berör er och hur EcoDrone hjälper er uppfylla dem.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-5 sm:grid-cols-2">
            {regulations.map((r) => (
              <Link key={r.href} href={r.href} className="group card-dark p-6 sm:p-8 transition-all hover:border-dark-600 hover:bg-dark-800/60">
                <h2 className="text-xl font-bold text-white">{r.title}</h2>
                <p className="mt-3 text-dark-400">{r.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-400 group-hover:text-brand-300">
                  Läs mer
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-center">Regulatorisk tidslinje</h2>
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
                <tr className="border-b border-dark-800"><td className="py-3 pr-4 font-medium text-white">CSRD / ESRS E1</td><td className="py-3 pr-4">Scope 1 utsläppsmätning</td><td className="py-3 pr-4">Alla stora bolag (&gt;500 ans)</td><td className="py-3">2025/2026</td></tr>
                <tr className="border-b border-dark-800"><td className="py-3 pr-4 font-medium text-white">EU Metanförordning</td><td className="py-3 pr-4">LDAR-inspektioner</td><td className="py-3 pr-4">Olja, gas, gruvdrift</td><td className="py-3">2025–</td></tr>
                <tr className="border-b border-dark-800"><td className="py-3 pr-4 font-medium text-white">SMP / Miljöbalken</td><td className="py-3 pr-4">Årlig miljörapportering</td><td className="py-3 pr-4">Industri, avfall, VA</td><td className="py-3">Löpande</td></tr>
                <tr><td className="py-3 pr-4 font-medium text-white">Avfallsdirektivet</td><td className="py-3 pr-4">Ytemissionsmätning</td><td className="py-3 pr-4">Deponier</td><td className="py-3">Löpande</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand heading="Osäker på vilka krav som gäller för er?" description="Boka en genomgång så hjälper vi er navigera regelverken." />
    </>
  )
}
