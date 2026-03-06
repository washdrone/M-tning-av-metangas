import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dataleveranser – vad ni får | EcoDrone Sverige',
  description:
    'Rapporter, koncentrationskartor, hotspot-listor och digitala kartlager. Så ser leveransen ut efter en drönarbaserad gasmätning med EcoDrone.',
  alternates: { canonical: '/tjanster/leveranser' },
  openGraph: {
    title: 'Dataleveranser – vad ni får | EcoDrone Sverige',
    description:
      'Komplett leverans efter drönarbaserad gasmätning: emissionsrapporter, koncentrationskartor, hotspot-listor och GIS-data.',
    url: '/tjanster/leveranser',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dataleveranser från drönarbaserad gasmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Leverans av emissionsrapporter, koncentrationskartor, hotspot-listor och digitala kartlager efter drönarbaserad gasmätning.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Dataleverans',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'I vilka format levereras resultaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rapporter levereras som PDF. Kartor som PDF samt digitala kartfiler (GeoJSON, KML, Shapefile). Tabelldata som Excel eller CSV. Vi anpassar format efter era behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur snabbt får vi resultaten efter mätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leveranstiden beror på uppdragets omfattning och komplexitet. Vi diskuterar tidsplan vid uppdragsplaneringen och kan erbjuda snabbleverans med preliminära resultat vid akuta behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan vi integrera data i vårt GIS-system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alla georefererade data levereras i standardformat som GeoJSON, KML eller Shapefile. Ni kan direkt importera data i ArcGIS, QGIS eller andra GIS-plattformar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fungerar rapporterna som underlag vid tillsyn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Rapporterna innehåller dokumenterad metodik, mätosäkerhet och fullständig spårbarhet. De är utformade för att fungera som underlag vid tillsyn, miljörapportering och klimatbokslut.',
      },
    },
  ],
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

const faqItems = [
  {
    question: 'I vilka format levereras resultaten?',
    answer:
      'Rapporter levereras som PDF. Kartor levereras som PDF för tryckt presentation samt som digitala kartfiler (GeoJSON, KML, Shapefile) för GIS-integration. Tabelldata levereras som Excel eller CSV. Vi anpassar formaten efter era behov – diskutera gärna vid uppdragsplaneringen.',
  },
  {
    question: 'Hur snabbt får vi resultaten efter mätning?',
    answer:
      'Leveranstiden beror på uppdragets omfattning och komplexitet. Vi diskuterar tidsplan vid uppdragsplaneringen och kan erbjuda snabbleverans med preliminära resultat vid akuta behov. Den slutgiltiga rapporten med fullständig kvalitetssäkring levereras enligt överenskommen tidsplan.',
  },
  {
    question: 'Kan vi integrera data i vårt GIS-system?',
    answer:
      'Ja. Alla georefererade data levereras i standardformat som GeoJSON, KML eller Shapefile. Ni kan direkt importera data i ArcGIS, QGIS eller andra GIS-plattformar. Vi kan även anpassa koordinatsystem och attributstruktur efter era specifika krav.',
  },
  {
    question: 'Fungerar rapporterna som underlag vid tillsyn?',
    answer:
      'Ja. Rapporterna innehåller dokumenterad metodik, mätosäkerhet, kalibreringsinformation och fullständig spårbarhet. De är utformade för att fungera som underlag vid tillsyn av miljömyndigheter, i miljörapportering enligt miljöbalken och som grund för klimatbokslut.',
  },
]

export default function LeveranserPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Leveranser', href: '/tjanster/leveranser' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl text-skiffer">Dataleveranser – vad ni får</h1>
          <p className="mt-5 max-w-2xl text-lg text-kol">
            Efter varje mätuppdrag levererar vi ett komplett underlag. Redo att använda
            direkt – i tillsyn, rapportering, åtgärdsplanering eller uppföljning. Varje
            leverans anpassas efter ert specifika behov och den mättjänst som genomförts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-dimma border-t border-mossa">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-skiffer">Leveransformaten</h2>
          <div className="mt-8 space-y-5">
            {deliverables.map((d, i) => (
              <div key={i} className="border border-mossa bg-white p-6" style={{ borderRadius: '8px' }}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-skiffer">{d.title}</h3>
                  <span className="inline-block rounded-full bg-dimma px-3 py-1 text-xs font-medium text-jarnmalm">
                    {d.format}
                  </span>
                </div>
                <p className="mt-3 text-sm text-aska leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-skiffer">Anpassat efter er användning</h2>
          <p className="mt-4 text-aska leading-relaxed">
            Leveranserna anpassas efter ert behov. Behöver ni ett specifikt format för ert
            GIS-system, en kortversion för ledningsgruppen, eller detaljerade bilagor? Vi
            diskuterar det vid uppdragsplaneringen. Alla leveranser innehåller dokumenterad
            metodik och mätosäkerhet oavsett format.
          </p>
          <Link href="/tjanster/metodik" className="mt-6 inline-flex items-center text-jarnmalm font-medium hover:text-skiffer transition-colors">
            Läs om vår metodik och kvalitetssäkring
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="section-padding bg-dimma border-t border-mossa">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-skiffer">Leveranserna per mättjänst</h2>
          <p className="mt-4 text-aska">Innehållet varierar beroende på typ av uppdrag:</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { name: 'Utsläppsmätning', desc: 'Emissionskartor, kvantifieringsunderlag, hotspot-lista', href: '/tjanster/utslappsmating-dronare' },
              { name: 'Metanmätning', desc: 'Koncentrationskartor, hotspots, emissionskvantifiering', href: '/tjanster/metanmatning' },
              { name: 'LDAR-inspektion', desc: 'Läckageregister, OGI-videodokumentation, compliance-rapport', href: '/tjanster/ldar-inspektion' },
              { name: 'OGI-kamera', desc: 'Videobevis, annoterade bilder, läckageregister', href: '/tjanster/ogi-kamera' },
              { name: 'Plymmätning', desc: 'Emissionskvantifiering, plymkartering, mätosäkerhetsanalys', href: '/tjanster/plymmating' },
              { name: 'Växthusgasmätning', desc: 'CO₂-ekvivalenter, jämförelse med schabloner, klimatdata', href: '/tjanster/vaxthusgasmatning' },
              { name: 'Gasdetektion', desc: 'Gaskoncentrationskartor, hotspot-rapport, trendanalys', href: '/tjanster/gasdetektion' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="border border-mossa bg-white p-5 hover:border-feltsten transition-colors" style={{ borderRadius: '8px' }}>
                <p className="font-semibold text-skiffer">{item.name}</p>
                <p className="mt-1 text-sm text-aska">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om leveranser" />

      <CtaBand
        heading="Vill ni veta mer om vad ni får?"
        description="Boka en genomgång så visar vi exempelrapporter och diskuterar leveransformaten."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
