import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodik och kvalitetssäkring – drönarbaserad gasmätning',
  description:
    'Så säkerställer vi datakvaliteten: planering, kalibrering, bearbetning, mätosäkerhet och spårbarhet. Läs om vår metodik för drönarbaserad gasmätning.',
  alternates: { canonical: '/matning/metodik' },
}

const qaSteps = [
  {
    title: '1. Uppdragsplanering',
    items: [
      'Mätområde och frågeställning definieras tillsammans med er.',
      'Flygvägar och mätprotokoll anpassas efter ert område och vädret.',
      'Sensorutrustning kalibreras före varje mättillfälle.',
    ],
  },
  {
    title: '2. Datainsamling',
    items: [
      'Systematisk flygning med GPS-kopplad gaskoncentrationsregistrering.',
      'Vind, temperatur och tryck dokumenteras under mätningen.',
      'Mätningen följer ett dokumenterat protokoll för att vara jämförbar.',
    ],
  },
  {
    title: '3. Databearbetning',
    items: [
      'Rådata rensas och kalibreras mot referensvärden.',
      'Data interpoleras till kartlager med dokumenterad metod.',
      'Kvalitetskontroll mot bakgrundsnivåer och rimlighetscheck.',
    ],
  },
  {
    title: '4. Mätosäkerhet',
    items: [
      'Mätosäkerhet uppskattas och dokumenteras i rapporten.',
      'Påverkande faktorer (vind, sensorprecision, flygmönster) redovisas transparent.',
      'Vi berättar vad ni kan dra slutsatser av – och vad som kräver komplettering.',
    ],
  },
  {
    title: '5. Spårbarhet',
    items: [
      'Alla rådata, bearbetningssteg och leveransversioner arkiveras.',
      'Varje leverans kopplas till uppdragsnummer, datum och ansvarig.',
      'Data kan hämtas ut vid uppföljning eller revision.',
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
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Mätdata är bara värdefullt om man kan lita på det. Här beskriver vi hur vi
            säkerställer kvaliteten – från planering till leverans.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vårt kvalitetsflöde</h2>
          <div className="mt-10 space-y-10">
            {qaSteps.map((step) => (
              <div key={step.title}>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <ul className="mt-4 space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                      <span className="text-dark-300 text-sm">{item}</span>
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
          <p className="mt-5 text-dark-300 leading-relaxed">
            All mätning har en osäkerhet. Vi redovisar den öppet i varje rapport – vilka
            faktorer som påverkar och vad osäkerheten innebär i praktiken. Ni vet vad ni
            kan dra slutsatser av och vad som kräver kompletterande mätning.
          </p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Spårbarhet</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Varje mätuppdrag arkiveras med fullständig spårbarhet: rådata, bearbetningssteg,
            kalibreringsinformation och leveransversioner. Ni kan alltid gå tillbaka och
            jämföra med framtida mätningar eller hantera frågor vid tillsyn.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            <Link href="/matning/leveranser" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Dataleveranser – vad du får →
            </Link>
            <Link href="/matning/faq" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
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
