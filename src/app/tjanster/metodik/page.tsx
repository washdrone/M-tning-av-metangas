import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CtaBand } from '@/components/CtaBand'
import { JsonLd } from '@/components/JsonLd'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Author } from '@/components/Author'
import { LastUpdated } from '@/components/LastUpdated'
import { RelatedContent } from '@/components/RelatedContent'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodik och kvalitetssäkring',
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
  areaServed: { '@type': 'Country', name: 'Sweden' },
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hur EcoDrone kvalitetssäkrar drönarbaserad gasmätning',
  description: 'EcoDrones kvalitetsflöde i fem steg – från uppdragsplanering till spårbar leverans av mätdata.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Uppdragsplanering',
      text: 'Mätområde och frågeställning definieras. Flygvägar och mätprotokoll anpassas efter område och väder. Sensorutrustning väljs baserat på gaser och detektionsgränser. Sensorerna kalibreras mot certifierade referensgaser.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Datainsamling',
      text: 'Systematisk flygning med GPS-kopplad gaskoncentrationsregistrering. Vind, temperatur och tryck dokumenteras kontinuerligt. Mätningen följer ett dokumenterat protokoll för jämförbarhet.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Databearbetning',
      text: 'Rådata rensas och kalibreras mot referensvärden. Data interpoleras till kartlager med dokumenterad metod. Kvalitetskontroll mot bakgrundsnivåer och emissionsberäkningar genomförs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Mätosäkerhet',
      text: 'Mätosäkerhet uppskattas och dokumenteras i rapporten. Påverkande faktorer som vind, sensorprecision och flygmönster redovisas transparent och relateras till rapporteringskraven.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Spårbarhet',
      text: 'Alla rådata, bearbetningssteg och leveransversioner arkiveras. Varje leverans kopplas till uppdragsnummer, datum och ansvarig. Data kan hämtas ut vid uppföljning eller revision.',
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
      <JsonLd data={howToSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Metodik', href: '/tjanster/metodik' },
      ]} />

      <div className="container-narrow mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <Author />
        <LastUpdated datePublished="2024-06-15T08:00:00+02:00" dateModified="2025-02-01T10:00:00+01:00" />
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Hur säkerställer EcoDrone datakvaliteten?</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            <strong className="text-white">EcoDrones kvalitetssäkring är en dokumenterad femstegsprocess – från uppdragsplanering och kalibrering till leverans med fullständig spårbarhet.</strong>{' '}
            Varje steg i processen är utformat för att ge mätdata som tål revision och tillsyn.
          </p>
        </div>
      </section>

      {/* Mätmetoder */}
      <section className="section-padding section-darker">
        <div className="container-wide">
          <h2 className="text-2xl font-bold sm:text-3xl text-center">Vilka mätmetoder använder EcoDrone?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            <strong className="text-slate-200">EcoDrone använder fyra kompletterande mättekniker – TDLAS, OGI, plymmätning och industriella drönare – som ger reproducerbara, granskningsbara resultat.</strong>
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
              <div key={m.id} className="card-dark p-6 border-l-2 border-l-cyan-500">
                <span className="text-xs font-mono text-cyan-400">{m.id}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{m.name}</h3>
                <p className="mt-1 text-sm italic text-slate-400">{m.full}</p>
                <p className="mt-3 text-slate-300 leading-relaxed">{m.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {m.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400">→</span> {s}
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
          <div className="mt-8 overflow-x-auto">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>Standard</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Sensorstandard', val: 'TDLAS kalibrering enligt ISO 6145' },
                  { label: 'Mätprotokoll', val: 'OGMP 2.0 · EU 2024/1787' },
                  { label: 'Rapportformat', val: 'ESRS E1 · SMP · OGMP-format' },
                  { label: 'Dataskydd', val: 'GDPR · NDA vid uppdragsstart' },
                ].map((c) => (
                  <tr key={c.label}>
                    <td>{c.label}</td>
                    <td>{c.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vårt kvalitetsflöde</h2>
          <p className="mt-4 prose-width text-slate-400 leading-relaxed">
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
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                      <span className="text-slate-300 text-sm">{item}</span>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Hur dokumenteras mätosäkerheten?</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            <strong className="text-white">Mätosäkerheten uppskattas, dokumenteras och redovisas öppet i varje rapport med alla påverkande faktorer och praktiska implikationer.</strong>{' '}
            Ni vet exakt vad ni kan dra slutsatser av och vad som kräver kompletterande mätning.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
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
          <p className="mt-5 text-slate-300 leading-relaxed">
            Varje mätuppdrag arkiveras med fullständig spårbarhet: rådata, bearbetningssteg,
            kalibreringsinformation och leveransversioner. Ni kan alltid gå tillbaka och
            jämföra med framtida mätningar eller hantera frågor vid tillsyn.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
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
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om metodik och kvalitet" />

      <RelatedContent items={[
        { title: 'Dataleveranser – vad ni får', href: '/tjanster/leveranser', description: 'Rapporter, kartor, hotspot-listor och digitala kartlager som levereras efter varje mätuppdrag.' },
        { title: 'CSRD Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Hur vår metodik ger data som uppfyller ESRS E1:s krav på Scope 1-rapportering.' },
        { title: 'OGMP 2.0 nivå 4/5 metanmätning', href: '/compliance/ogmp', description: 'Platsspecifik mätmetodik som uppfyller OGMP 2.0:s krav på datakvalitet.' },
        { title: 'Metanmätning med TDLAS-sensor', href: '/tjanster/metanmatning', description: 'Kvantitativ metanmätning med hög precision – vår mest efterfrågade tjänst.' },
      ]} />

      <CtaBand
        heading="Vill ni veta mer om hur vi arbetar?"
        description="Boka en genomgång så berättar vi mer om metodik, utrustning och kvalitetssäkring."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />
    </>
  )
}
