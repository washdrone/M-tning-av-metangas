import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodik och kvalitetssäkring | EcoDrone Sverige',
  description:
    'Så säkerställer vi datakvaliteten: planering, kalibrering, bearbetning, mätosäkerhet och spårbarhet. Läs om vår metodik för drönarbaserad gasmätning.',
  alternates: { canonical: '/tjanster/metodik' },
  openGraph: {
    title: 'Metodik och kvalitetssäkring | EcoDrone Sverige',
    description:
      'Dokumenterad metodik för drönarbaserad gasmätning. Kalibrering, kvalitetssäkring, mätosäkerhet och fullständig spårbarhet.',
    url: '/tjanster/metodik',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metodik och kvalitetssäkring',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Dokumenterad metodik och kvalitetssäkring för drönarbaserad gasmätning. Kalibrering, datakvalitet, mätosäkerhet och spårbarhet.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Kvalitetssäkring',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur kalibreras sensorerna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Samtliga sensorer kalibreras mot certifierade referensgaser (spårbara) före varje mätuppdrag. Nollpunkt och spann verifieras och dokumenteras. Kalibreringsintyg biläggs rapporten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur dokumenteras mätosäkerheten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mätosäkerheten uppskattas och redovisas i varje rapport. Vi dokumenterar alla bidragande faktorer: sensorprecision, vindförhållanden, spatial sampling och bearbetningsmetodik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka standarder följer ni?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vår metodik bygger på principer från ISO 14064, GHG Protocol, EU:s metanförordning och Naturvårdsverkets riktlinjer. Vi anpassar dokumentationen efter det regelverk som är relevant för ert uppdrag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan tidigare mätdata hämtas ut för jämförelse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Alla rådata, bearbetningssteg och leveransversioner arkiveras med fullständig spårbarhet. Data kan hämtas ut vid uppföljning, revision eller jämförelse med framtida mätningar.',
      },
    },
  ],
}

const qaSteps = [
  {
    title: '1. Uppdragsplanering',
    items: [
      'Mätområde och frågeställning definieras tillsammans med er.',
      'Flygvägar och mätprotokoll anpassas efter ert område och vädret.',
      'Sensorutrustning väljs baserat på vilka gaser som ska mätas och krävda detektionsgränser.',
      'Sensorerna kalibreras mot certifierade referensgaser före varje mättillfälle.',
    ],
  },
  {
    title: '2. Datainsamling',
    items: [
      'Systematisk flygning med GPS-kopplad gaskoncentrationsregistrering.',
      'Vind, temperatur och tryck dokumenteras kontinuerligt under mätningen.',
      'Mätningen följer ett dokumenterat protokoll för jämförbarhet mellan tillfällen.',
      'Fältobservationer loggas för att stödja datatolkningen.',
    ],
  },
  {
    title: '3. Databearbetning',
    items: [
      'Rådata rensas och kalibreras mot referensvärden.',
      'Data interpoleras till kartlager med dokumenterad metod.',
      'Kvalitetskontroll mot bakgrundsnivåer och rimlighetscheck.',
      'Emissionsberäkningar genomförs med dokumenterade antaganden.',
    ],
  },
  {
    title: '4. Mätosäkerhet',
    items: [
      'Mätosäkerhet uppskattas och dokumenteras i rapporten.',
      'Påverkande faktorer (vind, sensorprecision, flygmönster) redovisas transparent.',
      'Vi berättar vad ni kan dra slutsatser av – och vad som kräver komplettering.',
      'Mätosäkerheten relateras till de krav som gäller för ert rapporteringsändamål.',
    ],
  },
  {
    title: '5. Spårbarhet',
    items: [
      'Alla rådata, bearbetningssteg och leveransversioner arkiveras.',
      'Varje leverans kopplas till uppdragsnummer, datum och ansvarig.',
      'Data kan hämtas ut vid uppföljning, revision eller framtida jämförelse.',
      'Kalibreringsintyg och sensorspecifikationer arkiveras med uppdraget.',
    ],
  },
]

const faqItems = [
  {
    question: 'Hur kalibreras sensorerna?',
    answer:
      'Samtliga sensorer kalibreras mot certifierade referensgaser (spårbara) före varje mätuppdrag. Nollpunkt och spann verifieras och dokumenteras. Efter mätningen görs en kontrollmätning för att verifiera att sensorn inte har driftat under uppdraget. Kalibreringsintyg biläggs alltid rapporten.',
  },
  {
    question: 'Hur dokumenteras mätosäkerheten?',
    answer:
      'Mätosäkerheten uppskattas och redovisas i varje rapport. Vi dokumenterar alla bidragande faktorer: sensorprecision, vindförhållanden, spatial sampling, flyghöjd och bearbetningsmetodik. Ni får en tydlig bild av vad ni kan dra slutsatser av och vad som eventuellt kräver kompletterande mätning.',
  },
  {
    question: 'Vilka standarder följer ni?',
    answer:
      'Vår metodik bygger på principer från ISO 14064, GHG Protocol, EU:s metanförordning (EU 2024/1787), OGMP 2.0 och Naturvårdsverkets riktlinjer för emissionsmätning. Vi anpassar dokumentationen efter det regelverk som är relevant för just ert uppdrag.',
  },
  {
    question: 'Kan tidigare mätdata hämtas ut för jämförelse?',
    answer:
      'Ja. Alla rådata, bearbetningssteg och leveransversioner arkiveras med fullständig spårbarhet. Data kan hämtas ut vid uppföljningsmätningar, revision eller behov av jämförelse. Varje datapunkt är kopplad till uppdragsnummer, datum, sensor och kalibreringstillfälle.',
  },
]

export default function MetodikPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Metodik', href: '/tjanster/metodik' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Metodik och kvalitetssäkring</h1>
          <p className="mt-5 max-w-2xl text-lg text-dark-300">
            Mätdata är bara värdefullt om man kan lita på det. Här beskriver vi hur vi
            säkerställer kvaliteten – från planering till leverans. Varje steg i processen
            är dokumenterat och spårbart.
          </p>
        </div>
      </section>

      {/* Mätmetoder */}
      <section className="section-padding section-darker">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-center">Mätmetoder</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-400">
            Våra mätresultat är reproducerbara, oberoende granskningsbara och
            dokumenterade enligt de standarder era revisorer och tillsynsmyndigheter kräver.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                id: '01',
                name: 'TDLAS',
                full: 'Tunable Diode Laser Absorption Spectroscopy',
                desc: 'Laserspektroskopi med hög känslighet för metandetektion. Möter OGMP 2.0 nivå 4 och EU-metanförordningens krav.',
                specs: ['Hög känslighet för CH₄', 'OGMP 2.0 nivå 4-kompatibel'],
              },
              {
                id: '02',
                name: 'OGI',
                full: 'Optical Gas Imaging',
                desc: 'Infraröd kamera som visualiserar osynliga gasplymer i realtid. Identifierar läckpunkter och ger bildbevis för revision och reparationsplanering.',
                specs: ['Visualisering i realtid', 'Georefererade bilder'],
              },
              {
                id: '03',
                name: 'Plymmätning',
                full: 'Mass Balance / Flux Wall',
                desc: 'Drönaren flyger tvärgående mot vindriktningen och mäter hela utsläppsplymen från en anläggning. Ger totalutsläpp i kg/h med kvantifierad osäkerhet.',
                specs: ['Totalutsläpp i kg/h', 'Dokumenterad osäkerhet'],
              },
              {
                id: '04',
                name: 'Drönare',
                full: 'Industriell drönare',
                desc: 'Industriell drönarplattform med hög lastkapacitet. Bär sensorer och opererar i krävande industriella miljöer och svårtillgängliga anläggningar.',
                specs: ['Industriell plattform', 'Hög lastkapacitet'],
              },
            ].map((m) => (
              <div key={m.id} className="card-dark p-6 border-l-2 border-l-accent-500">
                <span className="text-xs font-mono text-accent-400">{m.id}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{m.name}</h3>
                <p className="mt-1 text-sm italic text-dark-400">{m.full}</p>
                <p className="mt-3 text-dark-300 leading-relaxed">{m.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {m.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-dark-300">
                      <span className="text-accent-400">→</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifikat & Standarder */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Certifikat &amp; standarder</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-dark-700 bg-dark-700">
            {[
              { label: 'Sensorstandard', val: 'TDLAS kalibrering enligt ISO 6145' },
              { label: 'Mätprotokoll', val: 'OGMP 2.0 · EU 2024/1787' },
              { label: 'Rapportformat', val: 'ESRS E1 · SMP · OGMP-format' },
              { label: 'Dataskydd', val: 'GDPR · NDA vid uppdragsstart' },
            ].map((c) => (
              <div key={c.label} className="flex bg-dark-900">
                <div className="w-44 flex-shrink-0 bg-dark-800 px-4 py-3 text-xs font-medium uppercase tracking-wider text-dark-400 flex items-center">
                  {c.label}
                </div>
                <div className="px-4 py-3 text-sm font-medium text-dark-200 flex items-center">
                  {c.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vårt kvalitetsflöde</h2>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Kvalitetssäkringen är integrerad i varje steg av processen – inte något som
            läggs till i efterhand. Från uppdragsplanering till leverans följer vi ett
            dokumenterat arbetsflöde som säkerställer datakvalitet, spårbarhet och
            mätosäkerhet.
          </p>
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
          <p className="mt-4 text-dark-400 leading-relaxed">
            Mätosäkerheten påverkas av flera faktorer: sensorns precision och kalibrering,
            vindförhållanden under mätningen, flygmönster och spatial sampling, samt
            bearbetningsmetodik. Vi dokumenterar alla dessa faktorer transparent och
            relaterar mätosäkerheten till det rapporteringskrav som gäller för ert uppdrag.
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
          <p className="mt-4 text-dark-400 leading-relaxed">
            Spårbarheten omfattar hela kedjan: från den certifierade referensgasen som
            användes vid kalibrering, via sensorns rådata och bearbetningssteg, till
            den färdiga rapporten och kartleveransen. Varje datapunkt kan spåras tillbaka
            till källan.
          </p>
        </div>
      </section>

      {/* Standarder och ramverk */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Standarder och ramverk vi följer</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'ISO 14064',
                text: '– internationell standard för kvantifiering och rapportering av växthusgasutsläpp. Vår metodik följer principerna för noggrannhet, fullständighet och transparens.',
              },
              {
                bold: 'GHG Protocol',
                text: '– det globala ramverket för klimatrapportering. Våra mätningar ger data som höjer datakvalitetspoängen för Scope 1-rapportering.',
              },
              {
                bold: 'EU:s metanförordning (2024/1787)',
                text: '– förordningens krav på LDAR-inspektion och emissionsmätning. Vår dokumentation är utformad för compliance.',
              },
              {
                bold: 'OGMP 2.0',
                text: '– Oil and Gas Methane Partnership. Level 4/5-metodik med platsspecifik mätning och kvantifiering.',
              },
              {
                bold: 'Naturvårdsverkets riktlinjer',
                text: '– svenska krav på egenkontroll, miljörapportering och emissionsövervakning.',
              },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om metodik och kvalitet" />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Läs mer</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            <Link href="/tjanster/leveranser" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Dataleveranser – vad ni får →
            </Link>
            <Link href="/tjanster" className="text-brand-400 font-medium hover:text-brand-300 transition-colors">
              Alla våra mättjänster →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Vill ni veta mer om hur vi arbetar?"
        description="Boka en genomgång så berättar vi mer om metodik, utrustning och kvalitetssäkring."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
