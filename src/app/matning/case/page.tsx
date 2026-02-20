import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Referensuppdrag – drönarbaserad gasmätning',
  description:
    'Läs om referensuppdrag inom drönarbaserad metan- och miljömätning. Exempel på mätningar vi genomfört vid deponier, biogasanläggningar och reningsverk.',
  alternates: { canonical: '/matning/case' },
}

const cases = [
  {
    title: 'Metankartering av kommunal deponi',
    type: 'Deponi',
    summary:
      'Kartläggning av diffusa metanemissioner över en 12 hektar stor aktiv deponi. Mätningen identifierade tre hotspots med förhöjda koncentrationer kopplade till brister i täckskiktet. Resultatet användes som underlag för åtgärdsplan och uppföljande mätning.',
    deliverables: ['Koncentrationskarta', 'Hotspot-lista', 'Emissionsrapport', 'GeoJSON'],
    href: '/matning/deponi',
  },
  {
    title: 'Läcksökning vid biogasanläggning',
    type: 'Biogas',
    summary:
      'Heltäckande läcksökning runt rötkammare, gaslager och uppgraderingsanläggning. Mätningen identifierade metanförluster vid två flänsförband och en membrantätning. Uppskattad förlustminskning efter åtgärd: ca 2 % av produktionen.',
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
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Här beskriver vi exempel på mätuppdrag vi genomfört. Varje referens illustrerar
            frågeställning, metod och leverans.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow space-y-8">
          {cases.map((c, i) => (
            <article key={i} className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {c.type}
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-gray-900">{c.title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{c.summary}</p>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Leveranser:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.deliverables.map((d) => (
                    <span key={d} className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={c.href} className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-800">
                Läs om tjänsten →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-gray-600">
            Fler referensuppdrag publiceras löpande. Vill ni veta mer om ett specifikt
            uppdragstyp? <Link href="/matning/kontakt" className="text-brand-700 underline hover:text-brand-800">Kontakta oss</Link> så berättar vi mer.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Vill ni se hur en mätning kan se ut för er?"
        description="Boka en genomgång så diskuterar vi ert behov och visar relevanta exempel."
      />
    </>
  )
}
