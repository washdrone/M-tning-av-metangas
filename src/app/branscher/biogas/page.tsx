import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utsläppskontroll biogasanläggning – läcksökning',
  description:
    'Hitta metanläckor vid er biogasanläggning med drönarbaserad gasdetektion. 1–5 % av produktionen kan läcka ut. Stärk ESG-profil och minska förluster med EcoDrone.',
  alternates: { canonical: '/branscher/biogas' },
  openGraph: {
    title: 'Utsläppskontroll biogasanläggning | EcoDrone',
    description: 'Drönarbaserad läcksökning och kvantifiering av metanförluster vid biogasanläggningar.',
    url: '/branscher/biogas',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppskontroll för biogasanläggningar',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad läcksökning och kvantifiering av metanförluster vid biogasanläggningar – biogasläcka detektion med OGI och TDLAS.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning biogas',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur skiljer sig drönarmätning från traditionell läcksökning vid biogasanläggningar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditionell läcksökning med handhållna instrument kräver att någon fysiskt går runt och mäter punkt för punkt – det tar tid och missar lätt ställen som är svåra att nå, som tak på rötkammare och gaslager. Drönarmätning ger en heltäckande bild av hela anläggningen på kort tid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätningen göras utan att störa produktionen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Drönaren flyger ovanför anläggningen och behöver aldrig komma in i processenheter. Mätningen sker helt utan avbrott i er drift och kräver minimal samordning med driftpersonalen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur stora metanläckor är vanliga vid biogasanläggningar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studier visar att metanläckor typiskt motsvarar 1–5 % av produktionen, men kan vara betydligt större om läckor gått oupptäckta. Varje procent som läcker ut innebär både förlorad energi och onödiga växthusgasutsläpp som försämrar anläggningens klimatnytta.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur bidrar mätningen till vår ESG-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metanläckor från biogasanläggningar är Scope 1-utsläpp som ska rapporteras enligt CSRD/ESRS E1. Genom att mäta och dokumentera era faktiska utsläpp – och visa att ni aktivt arbetar med att minimera dem – stärker ni er ESG-profil och uppfyller investerares och kunders förväntningar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka delar av biogasanläggningen kontrolleras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi kartlägger hela anläggningen: rötkammare, gaslager, uppgraderingsanläggning, ledningar, ventiler, facklor, kondensatbrunnar och eventuell eftersedimentering. Fokus läggs på kända riskpunkter som tätningar, genomföringar och membrantak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta bör en biogasanläggning kontrolleras för läckor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi rekommenderar minst en årlig kontroll, men anläggningar med äldre tätningar eller tidigare kända läckor bör mätas oftare. Många verksamheter väljer kvartalsvis mätning för att snabbt fånga nya läckor och följa upp åtgärder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätresultaten användas för att beräkna ekonomiska förluster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi kvantifierar varje hittad läcka och uttrycker förlusten i relation till er produktion. Det ger er ett direkt underlag för att beräkna vad läckorna kostar i förlorad gasproduktion och intäktsbortfall.',
      },
    },
  ],
}

export default function BiogasPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Biogas', href: '/branscher/biogas' },
      ]} />

      <Hero
        title="Utsläppskontroll för biogasanläggningar"
        subtitle="Studier visar att 1–5 % av biogasproduktionen kan läcka ut. Med drönarbaserad gasdetektion hittar vi var det läcker – snabbt, heltäckande och utan driftstopp. Stärk er ESG-profil och minska förluster."
        ctaText="Boka läcksökning"
        ctaHref="/kontakt"
        trustItems={['Heltäckande läcksökning', 'Kvantifierade förluster', 'ESG-redo rapporter']}
      />

      {/* Problemet */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Metanläckor – en dubbel förlust</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Metanläckor vid biogasanläggningar innebär dubbla förluster: gas som aldrig når uppgraderingen
            och onödiga klimatutsläpp som försämrar anläggningens miljöredovisning. Läckorna uppstår ofta
            vid kopplingar, ventiler, tätningar och membrantak – platser som är svåra att nå och kontrollera
            från marken.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Biogasbranschen växer snabbt i Sverige, med ambitiösa produktionsmål och ökande krav på
            hållbarhetsredovisning. Investerare, kunder och regulatorer förväntar sig att anläggningar
            kan visa att deras klimatnytta är reell – inte underminerad av okontrollerade metanläckor.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-darker section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Metanhalt (CH₄)', text: '– runt rötkammare, gaslager, uppgradering, ledningar och ventiler med hög noggrannhet.' },
              { bold: 'Rumslig fördelning', text: '– en georefererad karta som visar exakt var förhöjda halter finns, kopplade till specifika anläggningskomponenter.' },
              { bold: 'Kvantifierad förlust', text: '– uppskattning av metanförlust per källa uttryckt som procent av produktion och i ekonomiska termer.' },
              { bold: 'OGI-visualisering', text: '– optisk gasavbildning (Optical Gas Imaging) som visar gasplymer i realtid för omedelbar identifiering av läckkällor.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG och hållbarhet */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">ESG-rapportering och hållbarhetskrav</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Biogasanläggningar befinner sig i en unik position: er verksamhet bidrar till klimatomställningen
            genom att producera förnybar energi från avfall, men okontrollerade metanläckor kan underminera
            den klimatnyttan. I takt med att ESG-kraven skärps förväntas ni kunna dokumentera er verkliga
            miljöprestanda med mätdata – inte bara schablonvärden.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">CSRD och Scope 1-utsläpp</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Metanläckor från biogasanläggningar klassificeras som Scope 1-utsläpp enligt{' '}
            <Link href="/compliance/csrd" className="text-brand-400 hover:underline">CSRD/ESRS E1</Link>.
            Från 2025 ska dessa rapporteras med verifierad data för allt fler företag. EcoDrones mätrapporter
            ger er den dokumentation som krävs för revisionsbar hållbarhetsrapportering.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Investerarförväntningar</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Gröna obligationer, hållbara fonder och infrastrukturinvesterare ställer allt högre krav på
            verifierad klimatdata. Genom regelbunden läckkontroll med dokumenterade resultat visar ni att
            er anläggning levererar den klimatnytta som utlovats – och att ni proaktivt arbetar med att
            minimera oönskade utsläpp.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en biogasmätning till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Kartläggning & planering', desc: 'Vi går igenom er anläggning tillsammans och identifierar var det är mest troligt att läckor uppstår – rötkammare, gaslager, uppgradering, ledningar, ventiler och kondensatbrunnar.' },
              { step: '2', title: 'Flygning & mätning', desc: 'Drönaren flyger runt och över anläggningen och mäter metanhalten med hög noggrannhet – utan att störa driften. OGI-kameran ger realtidsvisualisering av eventuella gasplymer.' },
              { step: '3', title: 'Analys & kvantifiering', desc: 'Mätdata omvandlas till en tydlig karta som visar var det läcker. Varje läcka kvantifieras, kopplas till specifik komponent och prioriteras efter storlek och åtgärdsbarhet.' },
              { step: '4', title: 'Rapport & åtgärdsförslag', desc: 'Ni får en rapport med alla läckagepunkter, uppskattade förluster i procent av produktion, konkreta åtgärdsförslag och ESG-redo dokumentation.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-dark-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Läckagekarta', desc: 'GPS-kopplad karta som visar exakt var förhöjda metanhalter uppmätts runt er anläggning, kopplat till specifika komponenter.' },
              { title: 'Kvantifierad förlust', desc: 'Uppskattning av hur mycket metan som läcker ut per källa – uttryckt i procent av produktion och ekonomiska termer.' },
              { title: 'Åtgärdslista', desc: 'Prioriterad lista över hittade läckor med rekommenderad hantering, tidsramar och förväntad effekt av åtgärd.' },
              { title: 'ESG-rapport', desc: 'Komplett rapport med metod, mätosäkerhet och resultat – redo att användas för egenkontroll, hållbarhetsrapportering och investerarkommunikation.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekonomisk nytta */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Ekonomisk nytta</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Varje metanläcka som hittas och åtgärdas innebär direkt ökad biogasproduktion. Det handlar
            om konkreta besparingar: mer gas till uppgradering, lägre utsläpp per producerad enhet och
            bättre underlag för er egenkontroll. Ofta betalar mätningen sig redan vid första åtgärdade
            läckan.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            En anläggning som producerar 10 GWh biogas per år och har 3 % läckage förlorar gas till
            ett värde av hundratusentals kronor årligen. Drönarbaserad läcksökning identifierar dessa
            förluster på en dag – och åtgärdskostnaden är ofta en bråkdel av den årliga besparingen.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om biogasmätning"
      />

      <CtaBand
        heading="Vill ni hitta och åtgärda metanläckor vid er anläggning?"
        description="Boka en genomgång så diskuterar vi hur en mätning kan se ut för just er biogasanläggning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher/deponier" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponier – metanmätning
            </Link>
            <Link href="/branscher/reningsverk" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Reningsverk – processemissioner
            </Link>
            <Link href="/compliance/csrd" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              CSRD-compliance
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
