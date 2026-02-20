import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referensuppdrag – drönarbaserad gasmätning',
  description:
    'Exempel på mätuppdrag vi genomfört. Se frågeställning, metod och leverans för deponier, biogasanläggningar och reningsverk.',
  alternates: { canonical: '/matning/case' },
}

const cases = [
  {
    title: 'Metankartering av kommunal deponi',
    type: 'Deponi',
    summary:
      'Kartläggning av diffusa metanutsläpp över en 12 hektar stor aktiv deponi. Mätningen hittade tre områden med förhöjda halter, kopplade till brister i täckskiktet. Resultatet användes som underlag för åtgärdsplan och uppföljande mätning.',
    deliverables: ['Koncentrationskarta', 'Hotspot-lista', 'Emissionsrapport', 'GeoJSON'],
    href: '/matning/deponi',
  },
  {
    title: 'Läcksökning vid biogasanläggning',
    type: 'Biogas',
    summary:
      'Heltäckande läcksökning runt rötkammare, gaslager och uppgraderingsanläggning. Mätningen hittade metanläckor vid två flänsförband och en membrantätning. Beräknad besparing efter åtgärd: ca 2 % av gasproduktionen.',
    deliverables: ['Läckagekarta', 'Kvantifierad förlust', 'Åtgärdslista', 'Rapport'],
    href: '/matning/biogas',
  },
]

export default function CasePage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Referensuppdrag', href: '/matning/case' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Referensuppdrag</h1>
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Exempel på mätuppdrag vi genomfört. Varje referens visar frågeställning,
            metod och vad kunden fick.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow space-y-6">
          {cases.map((c, i) => (
            <article key={i} className="card-dark p-6 sm:p-8">
              <span className="inline-block rounded-full bg-brand-600/10 px-3 py-1 text-xs font-medium text-brand-400">
                {c.type}
              </span>
              <h2 className="mt-3 text-xl font-bold text-white">{c.title}</h2>
              <p className="mt-3 text-dark-300 leading-relaxed">{c.summary}</p>
              <div className="mt-5">
                <p className="text-sm font-medium text-dark-400">Leveranser:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.deliverables.map((d) => (
                    <span key={d} className="rounded-lg border border-dark-700/50 bg-dark-800/50 px-2.5 py-1 text-xs text-dark-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={c.href} className="mt-5 inline-flex items-center text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                Läs om tjänsten →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-dark-400">
            Fler referensuppdrag publiceras löpande.{' '}
            <Link href="/matning/kontakt" className="text-brand-400 underline hover:text-brand-300">Kontakta oss</Link> om
            ni vill veta mer om en specifik uppdragstyp.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Vill ni se hur en mätning kan se ut för er?"
        description="Boka en genomgång så diskuterar vi ert behov."
      />
    </>
  )
}
