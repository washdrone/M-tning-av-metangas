import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exempeluppdrag – drönarbaserad utsläppsmätning',
  description:
    'Illustrativa exempel på hur drönarbaserad utsläppsmätning kan se ut. Se typisk frågeställning, metod och leverans för deponier, biogasanläggningar och industri.',
  alternates: { canonical: '/case' },
  openGraph: {
    title: 'Exempeluppdrag – drönarbaserad utsläppsmätning | EcoDrone',
    description: 'Se hur drönarbaserad mätning kan se ut: deponi-metankartering, biogasläcksökning och mer.',
    url: '/case',
  },
}

const cases = [
  {
    title: 'Metankartering av kommunal deponi',
    type: 'Deponi',
    summary:
      'Typiskt uppdrag: kartläggning av diffusa metanutsläpp över en aktiv deponi. Mätningen kan identifiera områden med förhöjda halter, kopplade till brister i täckskiktet. Resultatet används som underlag för åtgärdsplan och uppföljande mätning.',
    deliverables: ['Koncentrationskarta', 'Hotspot-lista', 'Emissionsrapport', 'GeoJSON'],
    href: '/branscher/deponier',
  },
  {
    title: 'Läcksökning vid biogasanläggning',
    type: 'Biogas',
    summary:
      'Typiskt uppdrag: heltäckande läcksökning runt rötkammare, gaslager och uppgraderingsanläggning. Mätningen kan identifiera metanläckor vid flänsförband och tätningar, med potential att minska produktionsförluster.',
    deliverables: ['Läckagekarta', 'Kvantifierad förlust', 'Åtgärdslista', 'Rapport'],
    href: '/branscher/biogas',
  },
]

export default function CasePage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Exempeluppdrag', href: '/case' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Exempeluppdrag</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Illustrativa exempel på hur en drönarbaserad mätning kan se ut.
            Varje exempel visar typisk frågeställning, metod och leverans.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow space-y-6">
          {cases.map((c, i) => (
            <article key={i} className="card-dark p-6 sm:p-8">
              <span className="inline-block rounded-full bg-cyan-600/10 px-3 py-1 text-xs font-medium text-cyan-400">
                {c.type}
              </span>
              <h2 className="mt-3 text-xl font-bold text-white">{c.title}</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{c.summary}</p>
              <div className="mt-5">
                <p className="text-sm font-medium text-slate-400">Leveranser:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.deliverables.map((d) => (
                    <span key={d} className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={c.href} className="mt-5 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                Läs om branschen →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-slate-400">
            Fler referensuppdrag publiceras löpande.{' '}
            <Link href="/kontakt" className="text-cyan-400 underline hover:text-cyan-300">Kontakta oss</Link> om
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
