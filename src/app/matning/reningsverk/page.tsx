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
  title: 'Mät utsläpp från reningsverk – metan och lustgas med drönare',
  description:
    'Mät metan- och lustgasutsläpp från ert reningsverk med drönare. Lustgas har ca 265 gånger starkare växthuseffekt än CO₂ – ersätt schabloner med verkliga mätvärden.',
  alternates: { canonical: '/matning/reningsverk' },
  openGraph: {
    title: 'Mät utsläpp från reningsverk – WashDrone',
    description: 'Drönarbaserad mätning av metan- och lustgasutsläpp från reningsverk.',
    url: '/matning/reningsverk',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning för reningsverk',
  provider: { '@type': 'Organization', name: 'WashDrone' },
  description: 'Drönarbaserad mätning av metan- och lustgasutsläpp från reningsverk.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning',
}

const steps = [
  { title: 'Processgenomgång', description: 'Vi går igenom er anläggning och identifierar var utsläppen troligen uppstår – luftningsbassänger, sedimentering, slamhantering, utlopp.' },
  { title: 'Mätning', description: 'Drönaren flyger över processytorna och mäter metan- och/eller lustgashalter med GPS-koppling, så varje mätvärde kopplas till rätt plats.' },
  { title: 'Databearbetning', description: 'Mätdata kopplas till era processzoner. Vi analyserar var utsläppen är störst och kvalitetssäkrar resultaten.' },
  { title: 'Leverans', description: 'Ni får en utsläppskarta, analys av vilka processteg som bidrar mest och en sammanfattande rapport med konkreta rekommendationer.' },
]

const deliverables = [
  { title: 'Utsläppskarta', description: 'GPS-kopplad karta som visar gashalter knutna till era processzoner och bassänger.' },
  { title: 'Processanalys', description: 'Analys av vilka processteg som bidrar mest till utsläppen – så att ni vet var åtgärder ger störst effekt.' },
  { title: 'Mätrapport', description: 'Rapport med metod, resultat och mätosäkerhet – redo att använda i ert klimatbokslut.' },
  { title: 'Digitala kartlager', description: 'GeoJSON/KML för integration i ert GIS eller driftsystem.' },
]

const faqItems = [
  {
    question: 'Varför behöver reningsverk mäta sina utsläpp?',
    answer: 'Reningsverk släpper ut metan (CH₄) och lustgas (N₂O) som biprodukter av reningsprocessen. Lustgas har ungefär 265 gånger starkare växthuseffekt än koldioxid per kg. Många VA-bolag förlitar sig idag på grova schabloner i stället för faktiska mätningar – det gör det svårt att veta hur stora utsläppen verkligen är och var insatser gör mest nytta.',
  },
  {
    question: 'Vilka gaser kan mätas med drönare vid reningsverk?',
    answer: 'Vi mäter alltid metan (CH₄), som är den klimatmässigt viktigaste gasen från slamhantering och förprocesser. Lustgas (N₂O) erbjuds som valbart tillägg – vi klargör tillgänglighet och sensorkapacitet i uppdragsplaneringen.',
  },
  {
    question: 'Kan mätningen kopplas till specifika processteg?',
    answer: 'Ja. Genom att mäta systematiskt över hela anläggningen med GPS-koppling kan vi knyta mätvärdena till specifika bassänger och processteg. Det ger er underlag för att se vilka delar av processen som bidrar mest – och var åtgärder ger störst effekt.',
  },
]

export default function ReningsverkPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Reningsverk', href: '/matning/reningsverk' },
      ]} />

      <Hero
        title="Mät utsläpp från ert reningsverk"
        subtitle="Lustgas har ca 265 gånger starkare växthuseffekt än CO₂. Med drönarmätning ersätter ni grova schabloner med verkliga mätvärden – och ser var åtgärder ger störst effekt."
        trustItems={['Metan (CH₄)', 'Lustgas N₂O (valbart tillägg)', 'Klimatbokslut-redo']}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför mäta utsläpp från reningsverk?</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Biologisk avloppsrening bildar metan och lustgas som biprodukter. Lustgas (N₂O) har
            ungefär 265 gånger starkare växthuseffekt än koldioxid per kg, vilket gör den till en
            av de mest betydande utsläppskällorna vid reningsverk. Trots det förlitar sig många
            VA-bolag idag på grova schabloner istället för verkliga mätningar – och schablonerna
            kan avvika kraftigt från de faktiska utsläppen.
          </p>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Drönarmätning ger en detaljerad bild av var utsläppen uppstår i processen. Det är ett
            värdefullt komplement till eventuell stationär mätning och ger er underlag för att
            prioritera åtgärder där de gör störst skillnad.
          </p>
        </div>
      </section>

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Metan (CH₄)</strong> – från slamhantering, förprocesser och eventuella biogasläckor.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Lustgas (N₂O)</strong> – framför allt från biologiska reningssteg som nitrifikation/denitrifikation <em>(valbart tillägg)</em>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span className="text-dark-300"><strong className="text-white">Rumslig koppling</strong> – mätdata knyts till specifika bassänger och processzoner.</span>
            </li>
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} />

      <DeliverablesList items={deliverables} />

      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Gå från schabloner till faktiska mätvärden</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Genom att veta vilka processteg som genererar mest utsläpp kan ni rikta insatserna dit
            de gör mest nytta: justera luftning, ändra slamålder eller förbättra täckning av
            slamhantering. Resultatet blir ett lägre klimatavtryck, bättre data i ert klimatbokslut
            – och ofta bättre processekonomi.
          </p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om mätning vid reningsverk" />

      <CtaBand
        heading="Vill ni kartlägga utsläppen från ert reningsverk?"
        description="Boka en genomgång så planerar vi en mätning anpassad efter er anläggning och era frågeställningar."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterade mättjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/matning/deponi" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponi – metanmätning
            </Link>
            <Link href="/matning/biogas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Biogas – läcksökning
            </Link>
            <Link href="/matning/industri" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Industri – läcksökning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
