import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ProcessSteps } from '@/components/ProcessSteps'
import { DeliverablesList } from '@/components/DeliverablesList'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metanmätning med drönare – TDLAS-sensorer',
  description:
    'Metanmätning med drönare och TDLAS-sensorer. Detektera och kvantifiera metanläckor från deponier, biogas och industri. Koncentrationskartor och rapporter.',
  alternates: { canonical: '/tjanster/metanmatning' },
  openGraph: {
    title: 'Metanmätning med drönare – TDLAS-sensorer | EcoDrone',
    description:
      'Precis metanmätning med TDLAS-teknik monterad på drönare. Detektera metanläckor, kartlägg koncentrationer och kvantifiera utsläpp.',
    url: '/tjanster/metanmatning',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metanmätning med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Drönarbaserad metanmätning med TDLAS-sensorer för detektering och kvantifiering av CH₄-utsläpp från deponier, biogasanläggningar och industriella verksamheter.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Metanmätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är TDLAS och varför är det bäst för metanmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDLAS (Tunable Diode Laser Absorption Spectroscopy) är en laserbaserad teknik som mäter metan med extremt hög selektivitet. Lasern stäms av till den exakta absorptionslinjen för metan, vilket ger tillförlitliga mätningar utan störning från andra gaser. Det innebär färre falska positiver och högre detektionsnoggrannhet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken detektionsgräns har metanmätningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDLAS-sensorer har en låg detektionsgräns för metan. Den exakta gränsen beror på sensormodell, flygavstånd, vindförhållanden och omgivningsförhållanden. Vi dokumenterar alltid den faktiska detektionsgränsen i rapporten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni kvantifiera metanutsläpp i kg per timme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Genom att kombinera koncentrationsdata med vindmätningar och traversmätning nedvinds kan vi beräkna emissionsflöden i kg/h eller ton/år. Denna metodik kräver lämpliga vindförhållanden och en tydlig plymstruktur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta bör metanmätning genomföras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på verksamhetstyp och regulatoriska krav. Deponier mäts vanligen en till två gånger per år. Biogasanläggningar och industriella verksamheter med LDAR-krav kan behöva kvartalsvis eller halvårsvis mätning. Vi hjälper er hitta rätt intervall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fungerar metanmätningen vid alla väderförhållanden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi behöver torra förhållanden och vindhastigheter under 10 m/s. Stark turbulens eller kraftig inversionsväder kan påverka mätningens representativitet. Vi planerar alltid efter väderprognoser och informerar er om eventuella begränsningar.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Förundersökning',
    description:
      'Vi kartlägger era potentiella metankällor, analyserar anläggningens geometri och bestämmer optimalt flygmönster. Tidigare mätresultat och processdata beaktas.',
  },
  {
    title: 'Kalibrering',
    description:
      'TDLAS-sensorn kalibreras mot certifierade referensgaser med känd metankoncentration. Nollpunkt och spann verifieras. Kalibreringsintyg medföljer rapporten.',
  },
  {
    title: 'Screening-flygning',
    description:
      'Drönaren flyger ett rutnätsmönster på optimerad höjd. Metankoncentrationer registreras kontinuerligt med GPS-koppling. Meteorologisk data loggas parallellt.',
  },
  {
    title: 'Detaljmätning',
    description:
      'Identifierade hotspots undersöks närmare med tätare flyglinjer och lägre flyghöjd för att avgränsa och kvantifiera enskilda utsläppskällor.',
  },
  {
    title: 'Analys och rapport',
    description:
      'Data bearbetas till koncentrationskartor och emissionsberäkningar. Mätosäkerhet dokumenteras och en komplett rapport med rekommendationer levereras.',
  },
]

const deliverables = [
  {
    title: 'Metankoncentrationskarta',
    description:
      'Georefererad karta med färgkodade CH₄-halter (ppm) över hela mätområdet. Visar spatial fördelning och identifierar områden med förhöjda koncentrationer.',
  },
  {
    title: 'Hotspot-identifiering',
    description:
      'Lista över punkter med förhöjda metanhalter med koordinater, uppmätt nivå och prioriteringsgrad. Direkt användbar som åtgärdslista.',
  },
  {
    title: 'Emissionskvantifiering',
    description:
      'Beräknade metanemissioner per källa eller område (kg CH₄/h). Baserat på massbalansmetodik med dokumenterade antaganden och mätosäkerhet.',
  },
  {
    title: 'Mätrapport',
    description:
      'Komplett rapport med metodik, resultat, mätosäkerhet och rekommendationer. Utformad som underlag för tillsyn, klimatbokslut eller LDAR-uppföljning.',
  },
  {
    title: 'GIS-data',
    description:
      'Digitala kartlager (GeoJSON/KML/Shapefile) för integration i ert GIS-system. Möjliggör trendanalys vid återkommande mätningar.',
  },
]

const faqItems = [
  {
    question: 'Vad är TDLAS och varför är det bäst för metanmätning?',
    answer:
      'TDLAS (Tunable Diode Laser Absorption Spectroscopy) är en laserbaserad teknik som mäter metan med extremt hög selektivitet. Lasern stäms av till den exakta absorptionslinjen för metan, vilket ger tillförlitliga mätningar utan störning från andra gaser. Det innebär färre falska positiver och högre detektionsnoggrannhet jämfört med bredbandsdetektorer.',
  },
  {
    question: 'Vilken detektionsgräns har metanmätningen?',
    answer:
      'TDLAS-sensorer har en låg detektionsgräns för metan. Den exakta gränsen beror på sensormodell, flygavstånd, vindförhållanden och omgivningsförhållanden. Vi dokumenterar alltid den faktiska detektionsgränsen i varje rapport.',
  },
  {
    question: 'Kan ni kvantifiera metanutsläpp i kg per timme?',
    answer:
      'Ja. Genom att kombinera koncentrationsdata med vindmätningar och traversmätning nedvinds källan kan vi beräkna emissionsflöden i kg/h eller ton/år. Denna metodik kräver lämpliga vindförhållanden och en identifierbar plymstruktur. Vi anger alltid mätosäkerhet för kvantifieringen.',
  },
  {
    question: 'Hur ofta bör metanmätning genomföras?',
    answer:
      'Det beror på verksamhetstyp och regulatoriska krav. Deponier mäts vanligen en till två gånger per år. Biogasanläggningar med gasuppgraderingsförluster kan behöva kvartalsvis mätning. EU:s metanförordning ställer specifika krav på mätfrekvens för energisektorn. Vi hjälper er fastställa rätt intervall.',
  },
  {
    question: 'Fungerar metanmätningen vid alla väderförhållanden?',
    answer:
      'Vi behöver torra förhållanden, vindhastigheter under 10 m/s och relativt stabil vindrikting. Stark turbulens, kraftig inversionsväder eller dimma kan påverka mätningens representativitet. Vi planerar alltid efter väderprognoser och har reservdagar inplanerade.',
  },
]

export default function MetanmatningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Metanmätning', href: '/tjanster/metanmatning' },
      ]} />

      <Hero
        title="Metanmätning med drönare"
        subtitle="Detektera och kvantifiera metanläckor med TDLAS-sensorer monterade på drönare. Hög selektivitet, låg detektionsgräns och resultat som visar exakt var metanet läcker ut."
        ctaText="Boka metanmätning"
        ctaHref="/kontakt"
        trustItems={[
          'TDLAS-precision',
          'Hög detektionsnoggrannhet',
          'Kvantifiering i kg/h',
        ]}
      />

      {/* Om metanmätning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Precisionsdetektering av metan med TDLAS</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Metan (CH₄) är en kraftfull växthusgas som värmer klimatet cirka 80 gånger mer än
            koldioxid på 20 års sikt. Läckor från deponier, biogasanläggningar, rörledningar och
            industriella processer är ofta diffusa och svåra att identifiera med konventionella
            metoder. Vår drönarbaserade metanmätning med TDLAS-sensorer erbjuder en lösning som
            kombinerar hög detektionsnoggrannhet med effektiv rumslig täckning.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            TDLAS-tekniken (Tunable Diode Laser Absorption Spectroscopy) använder en laser som
            stäms av till metanens specifika absorptionslinje. Det innebär att sensorn bara
            reagerar på metan – inte på andra gaser som kan finnas i omgivningen. Resultatet
            är mätningar med hög tillförlitlighet och minimal risk för falska positiver.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter och detekterar</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'Metankoncentration (CH₄ i ppm)',
                text: '– kontinuerlig mätning med GPS-koppling för spatial kartläggning av metanhalter över hela mätområdet.',
              },
              {
                bold: 'Metanläckor och hotspots',
                text: '– identifiering av enskilda utsläppspunkter med förhöjda koncentrationer, prioriterade efter storlek.',
              },
              {
                bold: 'Emissionsflöden (kg CH₄/h)',
                text: '– kvantifiering av utsläpp från enskilda källor genom traversmätning och massbalansberäkning.',
              },
              {
                bold: 'Spatial emissionsfördelning',
                text: '– detaljerade kartor som visar hur metanemissionerna varierar rumsligt och hjälper er prioritera åtgärder.',
              },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tillämpningar */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar för metanmätning</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Vår drönarbaserade metanmätning används inom en rad branscher och tillämpningar.
            Den gemensamma nämnaren är behovet av att hitta var metanet läcker ut och hur
            mycket som emitteras.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Deponier',
                desc: 'Kartlägg diffusa metanemissioner genom täckskiktet. Identifiera hotspots och utvärdera gasfångstsystemets effektivitet.',
              },
              {
                title: 'Biogasanläggningar',
                desc: 'Hitta läckor vid rötningsprocessen, gasuppgradering och distribution. Varje procent ni hittar och tätar blir mer gas i produktionen.',
              },
              {
                title: 'Olja och naturgas',
                desc: 'Screening av rörledningar, kompressorstationer och terminaler. Uppfyll EU:s metanförordnings krav på LDAR.',
              },
              {
                title: 'Reningsverk',
                desc: 'Mät metanemissioner från biologiska processer, slambehandling och biogasproduktion. Underlag för klimatbokslut.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknisk info */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tekniska specifikationer</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Vår metanmätning bygger på beprövad TDLAS-teknik integrerad med industriella
            drönare. Sensorerna kalibreras mot certifierade referensgaser före varje uppdrag
            och mätdata kvalitetssäkras enligt dokumenterade rutiner.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Sensortyp', value: 'TDLAS (Tunable Diode Laser Absorption Spectroscopy)' },
              { label: 'Detektionsgräns', value: 'Låg – exakt nivå beror på sensor, flygavstånd och förhållanden' },
              { label: 'Mätfrekvens', value: 'Kontinuerlig registrering med hög tidsupplösning' },
              { label: 'Flyghöjd', value: 'Anpassas efter tillämpning och mätområde' },
              { label: 'Spatial upplösning', value: 'Beror på flygmönster och flyghöjd' },
              { label: 'Kalibrering', value: 'Certifierade referensgaser före varje uppdrag' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-slate-300">
                  <strong className="text-white">{item.label}:</strong> {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så genomför vi metanmätningen" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om metanmätning" />

      <CtaBand
        heading="Behöver ni kartlägga metanemissioner?"
        description="Kontakta oss för en kostnadsfri behovsanalys. Vi diskuterar era utmaningar och planerar rätt metanmätning för er anläggning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              LDAR-inspektion
            </Link>
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/tjanster/plymmating" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Plymmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
