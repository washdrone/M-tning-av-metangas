import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dataleveranser – vad du får',
  description:
    'Rapporter, koncentrationskartor, hotspot-listor och digitala kartlager. Så ser leveransen ut efter en drönarbaserad gasmätning.',
  alternates: { canonical: '/matning/leveranser' },
}

const deliverables = [
  {
    title: 'Sammanfattande rapport',
    description: 'En tydlig rapport med uppdragsbeskrivning, metodik, resultat, mätosäkerhet och våra rekommendationer. Fungerar som underlag vid tillsyn, miljörapport eller klimatbokslut.',
    format: 'PDF',
  },
  {
    title: 'Koncentrationskarta',
    description: 'Georefererad karta med färgkodade gashalter. Ni ser direkt var de förhöjda koncentrationerna finns och kan prioritera åtgärder.',
    format: 'PDF + digital kartfil',
  },
  {
    title: 'Hotspot-lista',
    description: 'Punkter med förhöjda halter listade med koordinater, uppmätt nivå och prioritering. Direkt användbar som åtgärdslista.',
    format: 'Tabell (Excel/CSV) + karta',
  },
  {
    title: 'Digitala kartlager',
    description: 'Georefererade datafiler för ert GIS-system. Möjliggör jämförelse mellan mättillfällen och kombination med era egna datalager.',
    format: 'GeoJSON / KML / Shapefile',
  },
  {
    title: 'Rådata (valbart)',
    description: 'De obearbetade mätvärdena med tidsstämpel och GPS-koordinater – för er som vill göra egen analys.',
    format: 'CSV',
  },
]

export default function LeveranserPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Leveranser', href: '/matning/leveranser' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Dataleveranser – vad du får</h1>
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Efter varje mätuppdrag levererar vi ett komplett underlag. Redo att använda
            direkt – i tillsyn, rapportering, åtgärdsplanering eller uppföljning.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveransformaten</h2>
          <div className="mt-8 space-y-5">
            {deliverables.map((d, i) => (
              <div key={i} className="card-dark p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                  <span className="inline-block rounded-full bg-brand-600/10 px-3 py-1 text-xs font-medium text-brand-400">
                    {d.format}
                  </span>
                </div>
                <p className="mt-3 text-sm text-dark-400 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Anpassat efter er användning</h2>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Leveranserna anpassas efter ert behov. Behöver ni ett specifikt format för ert
            GIS-system, en kortversion för ledningsgruppen, eller detaljerade bilagor? Vi
            diskuterar det vid uppdragsplaneringen.
          </p>
          <Link href="/matning/metodik" className="mt-6 inline-flex items-center text-brand-400 font-medium hover:text-brand-300 transition-colors">
            Läs om vår metodik och kvalitetssäkring
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveranserna per mättjänst</h2>
          <p className="mt-4 text-dark-400">Innehållet varierar beroende på typ av uppdrag:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { name: 'Deponi', desc: 'Koncentrationskartor, hotspots, täckskiktsanalys', href: '/matning/deponi' },
              { name: 'Biogas', desc: 'Läckagekartor, kvantifierade förluster, åtgärdslista', href: '/matning/biogas' },
              { name: 'Reningsverk', desc: 'Emissionskartor, processkorrelation, klimatdata', href: '/matning/reningsverk' },
              { name: 'Industri', desc: 'Läckagekartor, hotspot-prioritering, LDAR-komplement', href: '/matning/industri' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="card-dark p-5 hover:border-dark-600 transition-colors">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-dark-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Vill ni veta mer om vad ni får?"
        description="Boka en genomgång så visar vi exempelrapporter och diskuterar leveransformaten."
      />
    </>
  )
}
