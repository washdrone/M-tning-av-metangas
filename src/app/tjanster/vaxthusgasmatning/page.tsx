import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ProcessSteps } from '@/components/ProcessSteps'
import { DeliverablesList } from '@/components/DeliverablesList'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { RelatedContent } from '@/components/RelatedContent'
import Link from 'next/link'
import { ORG_REF, OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Växthusgasmätning industri – CH₄, N₂O, CO₂',
  description:
    'Växthusgasmätning med drönare för industri. Mät CH₄, N₂O och CO₂ från processer och anläggningar. Ersätt schabloner med faktiska mätvärden.',
  alternates: { canonical: '/tjanster/vaxthusgasmatning' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Växthusgasmätning industri | EcoDrone Sverige',
    description:
      'Drönarbaserad mätning av växthusgaser (CH₄, N₂O, CO₂) från industriella processer. Stärk klimatbokslutet med verkliga mätvärden.',
    url: '/tjanster/vaxthusgasmatning',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Växthusgasmätning för industri',
  provider: ORG_REF,
  description:
    'Drönarbaserad mätning av växthusgaser (CH₄, N₂O, CO₂) från industriella processer och anläggningar för klimatrapportering och emissionsövervakning.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'Växthusgasmätning',
}

const steps = [
  {
    title: 'Emissionsinventering',
    description:
      'Vi kartlägger era potentiella växthusgaskällor baserat på processflöden, tillståndshandlingar och befintliga emissionsberäkningar. Mätprioriteter fastställs.',
  },
  {
    title: 'Sensorval och kalibrering',
    description:
      'Vi väljer optimal sensoruppsättning för era gaser: TDLAS för CH₄, NDIR för CO₂, och specialsensorer för N₂O. Tillgängligt kvalitetsunderlag och relevant kontrollmetod behöver specificeras per instrument.',
  },
  {
    title: 'Mätning',
    description:
      'Systematisk flygning över och nedvinds era utsläppskällor. Screening för spatial fördelning kombineras med plymmätning för kvantifiering av enskilda källor.',
  },
  {
    title: 'CO₂-ekvivalentberäkning',
    description:
      'Uppmätta emissioner omräknas till CO₂-ekvivalenter med aktuella GWP-värden (AR5 eller AR6). Resultaten relateras till er befintliga emissionsrapportering.',
  },
  {
    title: 'Rapportering',
    description:
      'Komplett rapport med emissionsdata per källa och gas, CO₂-ekvivalenter, jämförelse med schabloner och rekommendationer för emissionsreduktion.',
  },
]

const deliverables = [
  {
    title: 'Emissionsrapport per växthusgas',
    description:
      'Kvantifierade emissioner per källa uppdelat på CH₄, N₂O och CO₂. Inkluderar uppmätta koncentrationer, beräknade flöden och CO₂-ekvivalenter.',
  },
  {
    title: 'CO₂-ekvivalentsammanställning',
    description:
      'Total klimatpåverkan i ton CO₂e per år. Uppdelat per källa och gas för enkel integration i ert klimatbokslut eller hållbarhetsrapport.',
  },
  {
    title: 'Jämförelse med schabloner',
    description:
      'Analys av hur uppmätta emissioner förhåller sig till era befintliga schablonberäkningar. Identifierar var schablonerna under- eller överskattar verkligheten.',
  },
  {
    title: 'Emissionskartor',
    description:
      'Georefererade kartor med gaskoncentrationer per växthusgastyp. Visar spatial fördelning och identifierar de största utsläppskällorna.',
  },
  {
    title: 'Rekommendationer',
    description:
      'Konkreta förslag på emissionsreducerande åtgärder baserat på mätresultaten. Prioriterade efter potential och genomförbarhet.',
  },
]

const faqItems = [
  {
    question: 'Vilka växthusgaser kan ni mäta?',
    answer:
      'Vi mäter de tre viktigaste växthusgaserna: metan (CH₄), lustgas (N₂O) och koldioxid (CO₂). Dessa täcker merparten av industriella växthusgasutsläpp och är de gaser som rapporteras i klimatbokslut enligt GHG Protocol. CH₄ har en global uppvärmningspotential (GWP) på 28 över 100 år, och N₂O har en GWP på 265 – vilket gör dem särskilt viktiga att kvantifiera korrekt.',
  },
  {
    question: 'Kan mätresultaten användas i klimatbokslut?',
    answer:
      'Ange rapporteringskrav, gas, avgränsning och önskad enhet före beställning. Vilka beräkningar eller mätningar som kan användas behöver bedömas tillsammans med rapporteringsansvarig. En enskild mätning innebär inte i sig att GHG Protocol, ISO 14064 eller EU ETS är uppfyllt.',
  },
  {
    question: 'Varför är faktiska mätvärden bättre än schabloner?',
    answer:
      'Schablonbaserade emissionsfaktorer representerar genomsnitt för en bransch eller processtyp. De tar inte hänsyn till era specifika processförhållanden, utrustningens ålder, underhållsstatus eller lokala förutsättningar. Studier visar att schabloner kan avvika med 50 till 300 procent från verkliga emissioner. Faktisk mätning ger er den verkliga bilden.',
  },
  {
    question: 'Hur förhåller sig mätningen till GHG Protocol?',
    answer:
      'GHG Protocol accepterar både beräknade och uppmätta emissioner för Scope 1-rapportering. Uppmätta värden ger dock högre datakvalitet (Quality Score) och stärker trovärdigheten i er rapportering. Våra mätningar dokumenteras enligt de principer GHG Protocol förespråkar: relevans, fullständighet, konsistens, transparens och noggrannhet.',
  },
  {
    question: 'Vilka branscher har störst nytta av växthusgasmätning?',
    answer:
      'Reningsverk har ofta betydande N₂O- och CH₄-utsläpp från biologiska processer som underskattas av schabloner. Biogasanläggningar behöver kvantifiera CH₄-förluster. Deponier har diffusa CH₄-emissioner som varierar kraftigt. Petrokemisk industri och kraftvärmeverk har processutsläpp av CO₂ och CH₄ som bättre kvantifieras genom mätning.',
  },
]

// FAQ-schemat härleds från de synliga FAQ-frågorna (faqItems) så att
// strukturerad data alltid matchar sidans innehåll – ett krav från Google.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}


export default function VaxthusgasmatningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Växthusgasmätning', href: '/tjanster/vaxthusgasmatning' },
      ]} />

      <Hero
        title="Växthusgasmätning för industri"
        subtitle="Mät CH₄, N₂O och CO₂ från era processer och anläggningar med drönare. Ersätt schabloner med faktiska mätvärden och stärk ert klimatbokslut med verifierade emissionsdata."
        ctaText="Boka växthusgasmätning"
        ctaHref="/kontakt"
        trustItems={[
          'CH₄, N₂O och CO₂',
          'GHG Protocol-kompatibelt',
          'CO₂-ekvivalenter (ton/år)',
        ]}
      />

      {/* Introduktion */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Från schabloner till faktiska mätvärden</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            De flesta verksamheter beräknar sina växthusgasutsläpp med hjälp av emissionsfaktorer
            och schabloner. Det ger en uppskattning, men studier visar att schabloner kan avvika
            med 50 till 300 procent från verkligheten. Särskilt för processutsläpp av metan och
            lustgas, där variationen mellan anläggningar är stor, kan schabloner ge en missvisande
            bild av den verkliga klimatpåverkan.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Vår drönarbaserade växthusgasmätning ger er faktiska emissionsdata baserat på
            mätning vid er anläggning, under era driftförhållanden. Resultaten levereras i
            CO₂-ekvivalenter och är direkt användbara i klimatbokslut enligt GHG Protocol,
            ISO 14064 eller EU ETS.
          </p>
        </div>
      </section>

      {/* Gaserna vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Växthusgaserna vi mäter</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Metan (CH₄)',
                gwp: 'GWP₁₀₀: 28',
                desc: 'Kraftfull växthusgas från deponier, biogas, naturgas, reningsverk och jordbruk. Ofta underskattad i schablonberäkningar.',
                sensor: 'TDLAS / NDIR',
              },
              {
                title: 'Lustgas (N₂O)',
                gwp: 'GWP₁₀₀: 265',
                desc: 'Potent växthusgas från biologisk kväverening vid reningsverk, industriprocesser och förbränning. Svår att uppskatta med schabloner.',
                sensor: 'NDIR / QCL',
              },
              {
                title: 'Koldioxid (CO₂)',
                gwp: 'GWP₁₀₀: 1',
                desc: 'Referensgas för klimatpåverkan. Processutsläpp från förbränning, kalcineringsprocesser och kemisk industri.',
                sensor: 'NDIR',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-cyan-600/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  {item.gwp}
                </span>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                <p className="mt-2 text-xs text-slate-400">Sensor: {item.sensor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branschfokus */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Branscher med störst nytta</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Reningsverk',
                desc: 'N₂O från kväverening och CH₄ från anaerob slambehandling är ofta de största växthusgaskällorna. Schabloner varierar kraftigt – mätning ger den verkliga bilden.',
              },
              {
                title: 'Biogasanläggningar',
                desc: 'CH₄-förluster vid rötning, uppgradering och distribution kan vara 1–5% av producerad gas. Varje procent ni hittar och åtgärdar förbättrar både klimatprestanda och ekonomi.',
              },
              {
                title: 'Deponier',
                desc: 'Diffusa CH₄-emissioner genom täckskiktet varierar kraftigt. Mätning visar verkliga emissioner som kan skilja sig markant från beräkningsmodeller.',
              },
              {
                title: 'Kraft och värme',
                desc: 'Processutsläpp av CO₂ och oförbränt CH₄ från pannor och turbiner. Verifiering av beräknade emissioner i EU ETS-rapportering.',
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

      {/* Regulatorisk kontext */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Regulatorisk kontext och rapportering</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Växthusgasmätning stärker er position i flera rapporteringssystem och regelverk:
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            {[
              'GHG Protocol – högre datakvalitetspoäng för Scope 1-rapportering med uppmätta värden',
              'ISO 14064 – krav på kvantifiering och rapportering behöver bedömas för det aktuella underlaget',
              'EU ETS MRR – verifiering av beräknade emissioner med faktisk mätning',
              'CSRD / ESRS E1 – klimatrapportering enligt EU:s nya hållbarhetsdirektiv',
              'Svensk miljörapportering – underlag för emissionsrapportering till Naturvårdsverket',
              'Frivillig klimatrapportering – CDP, Science Based Targets och andra initiativ',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Mätprocessen" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om växthusgasmätning" />

      <CtaBand
        heading="Redo att mäta era växthusgasutsläpp?"
        description="Kontakta oss för en genomgång av era emissionskällor. Vi planerar mätningen och levererar data som stärker ert klimatbokslut."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'Gasdetektion med drönare', href: '/tjanster/gasdetektion', description: 'Bred gasdetektion av VOC, H₂S och NH₃ – komplement till växthusgasmätning.' },
        { title: 'CSRD Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Växthusgasdata i ton CO₂e för er hållbarhetsrapportering enligt ESRS E1.' },
        { title: 'Utsläppsmätning vid reningsverk', href: '/branscher/reningsverk', description: 'Metan och lustgas från biologiska processer – vår vanligaste växthusgasmätning.' },
      ]} />
    </>
  )
}
