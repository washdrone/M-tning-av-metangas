import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leveranser – rapporter, kartor och data | EcoDrone',
  description:
    'Vad ni får levererat efter en mätning med EcoDrone. PDF-rapporter, koncentrationskartor, hotspot-listor, digitala kartlager (GeoJSON/KML) och rådata.',
  alternates: { canonical: '/tjanster/leveranser' },
  openGraph: {
    title: 'Leveranser – rapporter, kartor och data | EcoDrone',
    description:
      'Komplett leveransöversikt: mätrapporter, emissionskartor, hotspot-listor, GIS-lager och rådata från EcoDrones drönarbaserade mätningar.',
    url: '/tjanster/leveranser',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mätleveranser',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Leveranser från EcoDrones drönarbaserade mätningar: rapporter, emissionskartor, hotspot-listor, digitala kartlager och rådata.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Mätleveranser',
}

export default function LeveranserPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Leveranser', href: '/tjanster/leveranser' },
      ]} />

      <Hero
        title="Vad ni får levererat"
        subtitle="Varje mätuppdrag resulterar i handlingsbara leveranser: rapporter, kartor, prioriteringslistor och digitala data. Allt utformat för att fungera vid tillsyn, i klimatbokslut och som beslutsunderlag."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['PDF-rapport', 'GIS-kartlager', 'Compliance-redo']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveransöversikt</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Våra leveranser är utformade för att ge er maximal nytta av mätdata. Varje
            uppdrag resulterar i en kombination av följande leverabler, anpassade efter
            uppdragstyp och era behov.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-12">
            {[
              {
                title: 'Mätrapport (PDF)',
                desc: 'Komplett rapport med uppdragsbeskrivning, metodik, resultat, mätosäkerhet och rekommendationer. Innehåller sammanfattning för ledning och teknisk bilaga med fullständiga detaljer. Utformad för att fungera vid tillsyn, i miljörapporter och som underlag för klimatbokslut.',
                items: ['Sammanfattning och slutsatser', 'Metodbeskrivning med sensorspecifikationer', 'Resultat med kartor och tabeller', 'Mätosäkerhetsanalys', 'Rekommendationer och åtgärdsförslag', 'Kalibreringsintyg som bilaga'],
              },
              {
                title: 'Koncentrationskartor',
                desc: 'Georefererade kartor med färgkodade gashalter som visar rumslig fördelning av emissionerna. Identifiera hotspots och prioritera åtgärder visuellt. Levereras som högupplösta bilder i rapporten samt som digitala kartlager.',
                items: ['Färgkodad haltkarta med skala', 'Överlagring på satellitbild eller ortofoto', 'Anpassad för utskrift och digital visning'],
              },
              {
                title: 'Hotspot-lista',
                desc: 'Identifierade punkter med förhöjda gashalter, sorterade efter storlek och relevans. Varje hotspot dokumenteras med koordinater, uppmätt nivå och rekommenderad åtgärd. Direkt användbar som åtgärdslista för driftpersonal.',
                items: ['GPS-koordinater per hotspot', 'Uppmätt haltnivå', 'Prioriteringsgrad (hög/medel/låg)', 'Rekommenderad åtgärd'],
              },
              {
                title: 'Digitala kartlager (GeoJSON/KML)',
                desc: 'Kartlager i standardformat för integration i ert GIS-system. Möjliggör jämförelse mellan mättillfällen, trendanalys och kombination med era egna datalager.',
                items: ['GeoJSON för webbaserade GIS', 'KML för Google Earth', 'Shapefile vid behov', 'Attributdata per mätpunkt'],
              },
              {
                title: 'Rådata',
                desc: 'Fullständig mätdatafil med samtliga registrerade värden, tidsstämplar och GPS-positioner. Levereras på begäran för kunder som vill göra egna analyser eller arkivera för framtida jämförelser.',
                items: ['CSV eller Excel-format', 'Tidsstämpel per mätpunkt', 'GPS-koordinater', 'Sensordata och kvalitetsflaggor'],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                <p className="mt-3 text-dark-300 leading-relaxed">{section.desc}</p>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-400">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leveranstid</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Standardleveranstid för rapport och kartlager är 2–3 veckor efter genomförd
            fältmätning. Preliminära resultat och hotspot-lista kan levereras inom 3–5
            arbetsdagar vid behov. Leveranstiden kan anpassas efter er tidplan – kontakta
            oss för att diskutera era specifika behov.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Vill ni veta mer om våra leveranser?"
        description="Kontakta oss för att diskutera vilka leverabler som passar bäst för ert uppdrag."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/metodik" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Vår metodik
            </Link>
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
