import { IndustryImage } from '@/components/IndustryImage'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'
import { OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Mätuppdrag – drönarbaserad utsläppsmätning',
  description:
    'Mätuppdrag för deponier och biogasanläggningar. Läs om frågeställningar, mätupplägg och leveranser inför beställning.',
  alternates: { canonical: '/case' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Mätuppdrag – drönarbaserad utsläppsmätning | EcoDrone',
    description: 'Se hur drönarbaserad mätning kan se ut: deponi-metankartering, biogasläcksökning och mer.',
    url: '/case',
  },
}

const cases = [
  {
    title: 'Metankartering av kommunal deponi',
    type: 'Deponi',
    summary:
      'Kartläggning av diffusa metanutsläpp över en aktiv deponi. Mätningen kan identifiera områden med förhöjda halter, kopplade till brister i täckskiktet. Resultatet används som underlag för åtgärdsplan och uppföljande mätning.',
    deliverables: ['Koncentrationskarta', 'Hotspot-lista', 'Emissionsrapport', 'GeoJSON'],
    href: '/branscher/deponier',
  },
  {
    title: 'Läcksökning vid biogasanläggning',
    type: 'Biogas',
    summary:
      'Avgränsad läcksökning runt rötkammare, gaslager och uppgraderingsanläggning. Mätningen kan identifiera metanläckor vid flänsförband och tätningar, med potential att minska produktionsförluster.',
    deliverables: ['Läckagekarta', 'Kvantifiering om avtalad', 'Åtgärdslista', 'Rapport'],
    href: '/branscher/biogas',
  },
]

const caseListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mätuppdrag – drönarbaserad utsläppsmätning',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Metankartering av kommunal deponi',
      description:
        'Kartläggning av diffusa metanutsläpp över aktiv deponi med hotspot-identifiering och SMP-underlag.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Läcksökning vid biogasanläggning',
      description:
        'Avgränsad läcksökning runt rötkammare, gaslager och uppgradering med underlag för fortsatt kontroll.',
    },
  ],
}

export default function CasePage() {
  return (
    <>
      <JsonLd data={caseListSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätuppdrag', href: '/case' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Mätuppdrag</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-700">
            Mätupplägg för deponier och biogasanläggningar.
            Läs om vilka frågor en mätning kan besvara och vilket underlag ni kan beställa.
          </p>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-narrow space-y-6">
          {cases.map((c, i) => (
            <article key={i} className="card-surface p-6 sm:p-8">
              <IndustryImage path={c.href} card />
              <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                {c.type}
              </span>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{c.title}</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">{c.summary}</p>
              <div className="mt-5">
                <p className="text-sm font-medium text-slate-600">Leveranser:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.deliverables.map((d) => (
                    <span key={d} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={c.href} className="mt-5 inline-flex items-center text-sm font-medium text-teal-800 hover:text-teal-800 transition-colors">
                Läs om branschen →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-slate-600">
            Omfattning, metod och leveranser fastställs utifrån er anläggning och ert behov.{' '}
            <Link href="/kontakt" className="text-teal-800 underline hover:text-teal-800">Kontakta oss</Link> om
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
