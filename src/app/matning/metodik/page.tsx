import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodik och kvalitetssäkring – drönarbaserad gasmätning',
  description:
    'Så säkerställer vi datakvaliteten: från planering och kalibrering till bearbetning, mätosäkerhet och spårbarhet. Läs om vår metodik för drönarbaserad gasmätning.',
  alternates: { canonical: '/matning/metodik' },
}

const qaSteps = [
  {
    title: '1. Uppdragsplanering',
    items: [
      'Mätområde och frågeställning definieras tillsammans med kunden.',
      'Flygvägar och mätprotokoll anpassas efter geometri, väderförhållanden och gastyp.',
      'Sensorutrustning kalibreras före varje mättillfälle.',
    ],
  },
  {
    title: '2. Datainsamling',
    items: [
      'Systematisk flygning med GPS-kopplad gaskoncentrationsregistrering.',
      'Meteorologiska parametrar (vind, temperatur, tryck) dokumenteras parallellt.',
      'Mätningen följer ett dokumenterat protokoll för reproducerbarhet.',
    ],
  },
  {
    title: '3. Databearbetning',
    items: [
      'Rådata rensas från artefakter och kalibreras mot referensvärden.',
      'Interpolering till kartlager med dokumenterad metod.',
      'Kvalitetskontroll mot bakgrundsnivåer och rimlighetscheck.',
    ],
  },
  {
    title: '4. Mätosäkerhet',
    items: [
      'Mätosäkerhet uppskattas och dokumenteras i rapporten.',
      'Påverkande faktorer (vind, sensorprecision, flygmönster) redovisas transparent.',
      'Resultat presenteras med angivna förbehåll där det är relevant.',
    ],
  },
  {
    title: '5. Spårbarhet & arkivering',
    items: [
      'Alla rådata, bearbetningssteg och versioner av leveranser arkiveras.',
      'Varje leverans kopplas till uppdragsnummer, datum och ansvarig mättekniker.',
      'Data kan hämtas ut vid behov för uppföljning eller revision.',
    ],
  },
]

export default function MetodikPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Metodik', href: '/matning/metodik' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Metodik och kvalitetssäkring</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Mätdata är bara värdefullt om det går att lita på. Här beskriver vi hur vi säkerställer
            kvaliteten – från planering till leverans.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vårt kvalitetsflöde</h2>
          <div className="mt-8 space-y-8">
            {qaSteps.map((step) => (
              <div key={step.title}>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <ul className="mt-3 space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Mätosäkerhet – en del av leveransen</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            All mätning har en osäkerhet. Vi redovisar den öppet i varje rapport, inklusive vilka
            faktorer som påverkar (sensorprecision, väderförhållanden, flygmönster) och vad
            osäkerheten innebär för tolkningen av resultaten.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Målet är inte att lovar perfektion – utan att ge er ett underlag där ni vet vad ni
            kan dra slutsatser ifrån och vad som kräver kompletterande mätning.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Spårbarhet</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Varje mätuppdrag arkiveras med fullständig spårbarhet: rådata, bearbetningssteg,
            kalibreringsinformation och leveransversioner. Det innebär att ni alltid kan gå
            tillbaka och verifiera resultat, jämföra med framtida mätningar eller hantera
            frågor vid revision eller tillsyn.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade sidor</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/matning/leveranser" className="text-brand-700 font-medium hover:text-brand-800">
              Dataleveranser – vad du får →
            </Link>
            <Link href="/matning/faq" className="text-brand-700 font-medium hover:text-brand-800">
              Vanliga frågor →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Vill ni veta mer om hur vi arbetar?"
        description="Boka en genomgång så berättar vi mer om metodik, utrustning och kvalitetssäkring."
      />
    </>
  )
}
