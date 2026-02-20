import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dataleveranser – vad du får',
  description:
    'Rapporter, koncentrationskartor, hotspot-listor och digitala kartlager. Läs om vad vi levererar efter en drönarbaserad gasmätning.',
  alternates: { canonical: '/matning/leveranser' },
}

const deliverables = [
  {
    title: 'Sammanfattande rapport',
    description: 'En tydlig rapport med uppdragsbeskrivning, metodik, resultat, mätosäkerhet och rekommendationer. Anpassad för att fungera som underlag vid tillsyn, miljörapport eller klimatbokslut.',
    format: 'PDF',
  },
  {
    title: 'Koncentrationskarta',
    description: 'Georefererad karta med interpolerade gaskoncentrationer (t.ex. CH₄ i ppm) över det mätta området. Visuell färgskala som gör det enkelt att identifiera zoner med förhöjda nivåer.',
    format: 'PDF + digital kartfil',
  },
  {
    title: 'Hotspot-lista',
    description: 'Punkter med förhöjda gaskoncentrationer listade med koordinater, uppmätt nivå och rekommenderad prioritering. Direkt användbar för åtgärdsplanering.',
    format: 'Tabell (Excel/CSV) + karta',
  },
  {
    title: 'Digitala kartlager',
    description: 'Georefererade datafiler för import i ert GIS-system. Möjliggör egen analys, jämförelse mellan mättillfällen och integration med andra datalager.',
    format: 'GeoJSON / KML / Shapefile',
  },
  {
    title: 'Rådata (valbart)',
    description: 'De obearbetade mätvärdena med tidsstämpel och GPS-koordinater – för er som vill göra egen analys eller arkivering.',
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
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Efter varje mätuppdrag levererar vi ett komplett underlag som är redo att användas
            direkt – i tillsyn, rapportering, åtgärdsplanering eller uppföljning.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveransformaten</h2>
          <div className="mt-8 space-y-6">
            {deliverables.map((d, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{d.title}</h3>
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    {d.format}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Anpassat efter er användning</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Leveranserna anpassas efter ert behov. Behöver ni ett specifikt format för ert
            GIS-system, en komprimerad sammanfattning för ledningsgruppen, eller en detaljerad
            teknisk bilaga? Vi diskuterar det i uppdragsplaneringen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/matning/metodik" className="text-brand-700 font-medium hover:text-brand-800">
              Läs om vår metodik och kvalitetssäkring →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveranserna per mättjänst</h2>
          <p className="mt-4 text-gray-600">
            Innehållet i leveranserna varierar beroende på typ av mätuppdrag:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/matning/deponi" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-300">
              <p className="font-semibold text-gray-900">Deponi</p>
              <p className="mt-1 text-sm text-gray-600">Koncentrationskartor, hotspots, täckskiktsanalys</p>
            </Link>
            <Link href="/matning/biogas" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-300">
              <p className="font-semibold text-gray-900">Biogas</p>
              <p className="mt-1 text-sm text-gray-600">Läckagekartor, kvantifierade förluster, åtgärdslista</p>
            </Link>
            <Link href="/matning/reningsverk" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-300">
              <p className="font-semibold text-gray-900">Reningsverk</p>
              <p className="mt-1 text-sm text-gray-600">Emissionskartor, processkorrelation, klimatbokslutsdata</p>
            </Link>
            <Link href="/matning/industri" className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-300">
              <p className="font-semibold text-gray-900">Industri</p>
              <p className="mt-1 text-sm text-gray-600">Läckagekartor, hotspot-prioritering, LDAR-komplement</p>
            </Link>
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
