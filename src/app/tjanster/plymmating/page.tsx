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
  title: 'Drönarbaserad plymmätning – kvantifiera utsläpp',
  description:
    'Drönarbaserad plymmätning för kvantifiering av gasemissioner. Traversmätning nedvinds ger emissionsflöden i kg/h. Metan, CO₂ och andra gaser.',
  alternates: { canonical: '/tjanster/plymmating' },
  openGraph: {
    title: 'Drönarbaserad plymmätning | EcoDrone Sverige',
    description:
      'Kvantifiera gasemissioner med drönarbaserad plymmätning. Traversmätning av gasplymer ger emissionsflöden med dokumenterad mätosäkerhet.',
    url: '/tjanster/plymmating',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Drönarbaserad plymmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Kvantifiering av gasemissioner genom drönarbaserad traversmätning av gasplymer nedvinds utsläppskällan.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Plymmätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är plymmätning och hur fungerar det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plymmätning innebär att drönaren flyger genom gasplymen nedvinds från utsläppskällan och mäter gaskoncentrationer tvärs hela plymens tvärsnitt. Genom att kombinera koncentrationsdata med vindmätningar beräknas det totala emissionsflödet i kg/h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilken noggrannhet har plymmätningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typisk mätosäkerhet för drönarbaserad plymmätning är ±30–50% beroende på vindförhållanden, plymstabilitet och avståndet till källan. Vi dokumenterar alltid den uppskattade mätosäkerheten i rapporten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka förutsättningar krävs för plymmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plymmätning kräver identifierbara vindförhållanden (typiskt 1,5–8 m/s), en definierad utsläppskälla och tillräckligt utrymme nedvinds för traversflygning. Mycket instabila vindförhållanden eller multipla överlappande plymkällor försvårar kvantifieringen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni mäta plymer från flera källor samtidigt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi kan mäta den sammanlagda emissionen från en grupp av källor genom att traversera nedvinds hela gruppen. Enskilda källors bidrag kan identifieras genom flygningar på olika avstånd och från olika positioner.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Källidentifiering',
    description:
      'Vi identifierar utsläppskällan och analyserar omgivningen. Vindmätare placeras strategiskt för att dokumentera vindhastighet och riktning under hela mätningen.',
  },
  {
    title: 'Traversplanering',
    description:
      'Flygvägar planeras nedvinds källan på optimala avstånd. Traverserna utformas för att täcka plymens hela tvärsnitt med tillräcklig marginal.',
  },
  {
    title: 'Traversflygning',
    description:
      'Drönaren flyger horisontella traverser genom plymen på flera höjder. Gaskoncentrationer registreras med hög tidsupplösning tillsammans med GPS-position.',
  },
  {
    title: 'Vertikal profilering',
    description:
      'Vertikala profiler flygs för att fånga plymens höjdutbredning. Kombinerat med horisontella traverser ger det en fullständig bild av plymens tvärsnitt.',
  },
  {
    title: 'Flödesberäkning',
    description:
      'Koncentrationsdata integreras över plymens tvärsnitt och multipliceras med vindhastighetsfältet. Resultatet är ett emissionsflöde i kg/h med dokumenterad mätosäkerhet.',
  },
]

const deliverables = [
  {
    title: 'Emissionskvantifiering',
    description:
      'Beräknat emissionsflöde per källa i kg/h och ton/år. Inkluderar alla traversresultat, medelvärden och statistisk analys.',
  },
  {
    title: 'Plymkartering',
    description:
      'Visuell karta över plymens utbredning med koncentrationsprofiler. Visar plymens position, form och koncentrationsgradient.',
  },
  {
    title: 'Mätosäkerhetsanalys',
    description:
      'Detaljerad analys av mätosäkerhetens komponenter: vindbidrag, sensorbidrag, spatial sampling och bearbetningsmetodik.',
  },
  {
    title: 'Meteorologisk dokumentation',
    description:
      'Fullständig loggning av vindförhållanden, temperatur, lufttryck och stabilitetsklass under mätperioden.',
  },
  {
    title: 'Teknisk rapport',
    description:
      'Komplett rapport med metodik, resultat, mätosäkerhet och kontextuell analys. Utformad för regulatorisk rapportering och internbeslut.',
  },
]

const faqItems = [
  {
    question: 'Vad är plymmätning och hur fungerar det?',
    answer:
      'Plymmätning innebär att drönaren flyger genom gasplymen nedvinds från utsläppskällan och mäter gaskoncentrationer tvärs hela plymens tvärsnitt. Genom att integrera koncentrationsdata över tvärsnittsarean och kombinera med uppmätt vindhastighet beräknas det totala emissionsflödet i kilogram per timme. Metoden kallas ofta massbalansmetodik eller traversmetodik.',
  },
  {
    question: 'Vilken noggrannhet har plymmätningen?',
    answer:
      'Typisk mätosäkerhet för drönarbaserad plymmätning är ±30–50% beroende på vindförhållanden, plymstabilitet och avståndet till källan. Under optimala förhållanden (stabil vind, väl definierad plym) kan osäkerheten minskas till ±20–30%. Vi dokumenterar alltid den uppskattade mätosäkerheten med transparent redovisning av alla bidragande faktorer.',
  },
  {
    question: 'Vilka förutsättningar krävs för plymmätning?',
    answer:
      'Plymmätning kräver identifierbara och relativt stabila vindförhållanden (typiskt 1,5–8 m/s), en definierad eller avgränsbar utsläppskälla och tillräckligt utrymme nedvinds för traversflygning utan hinder. Mycket instabila vindförhållanden, vindstilla eller multipla starkt överlappande plymkällor försvårar kvantifieringen avsevärt.',
  },
  {
    question: 'Kan ni mäta plymer från flera källor samtidigt?',
    answer:
      'Vi kan mäta den sammanlagda emissionen från en grupp av källor genom att traversera nedvinds hela gruppen. Enskilda källors bidrag kan identifieras genom flygningar på olika avstånd, från olika positioner och med stöd av vinddispersionsmodellering. Vid behov kan vi planera mätningen för att separera enskilda bidrag.',
  },
  {
    question: 'Hur lång tid tar en plymmätning?',
    answer:
      'En typisk plymmätning av en enskild källa tar 2–4 timmar inklusive förberedelse och upprepade traverser för statistisk säkerhet. Mätning av en hel anläggning med flera källor kan ta en till två hela dagar. Vi genomför alltid tillräckligt många traverser för att säkerställa statistiskt representativa resultat.',
  },
]

export default function PlymmatningPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Plymmätning', href: '/tjanster/plymmating' },
      ]} />

      <Hero
        title="Drönarbaserad plymmätning"
        subtitle="Kvantifiera gasemissioner från enskilda källor med drönarbaserad traversmätning. Vi flyger genom gasplymen nedvinds och beräknar emissionsflöden med dokumenterad mätosäkerhet."
        ctaText="Boka plymmätning"
        ctaHref="/kontakt"
        trustItems={[
          'Emissionsflöden i kg/h',
          'Massbalansmetodik',
          'Dokumenterad mätosäkerhet',
        ]}
      />

      {/* Om plymmätning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Kvantifiera utsläpp med plymmätning</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Medan screening och läcksökning identifierar var utsläppen finns, svarar plymmätning
            på frågan hur mycket som släpps ut. Genom att flyga drönaren genom gasplymen nedvinds
            en utsläppskälla och mäta gaskoncentrationer över hela plymens tvärsnitt kan vi
            beräkna det totala emissionsflödet – i kilogram per timme eller ton per år.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarbaserad plymmätning, ibland kallad massbalansmetodik eller traversmetodik,
            är en av de mest tillförlitliga metoderna för att kvantifiera emissioner från
            enskilda punktkällor och diffusa areakällor. Metoden ger resultat som kan
            jämföras med beräknade emissionsfaktorer och användas i emissionsrapportering
            enligt GHG Protocol, ISO 14064 och EU ETS.
          </p>
        </div>
      </section>

      {/* Hur det fungerar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Hur plymmätning fungerar</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'Traversflygning',
                text: '– drönaren flyger horisontella traverser tvärs gasplymen på flera höjder nedvinds källan. Koncentrationer registreras med hög tidsupplösning.',
              },
              {
                bold: 'Plymtvärsnittet kartläggs',
                text: '– genom att kombinera horisontella och vertikala profiler byggs en tvådimensionell bild av plymens koncentrationsfördelning.',
              },
              {
                bold: 'Vinddata integreras',
                text: '– vindmätare på marken och/eller på drönaren ger realtidsdata om vindhastighet och riktning som används i flödesberäkningen.',
              },
              {
                bold: 'Massflöde beräknas',
                text: '– koncentrationsdata integreras över plymens tvärsnitt och multipliceras med vindhastighetsfältet. Resultatet är emissionsflödet.',
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

      {/* Tillämpningar */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Anläggningsemissioner',
                desc: 'Kvantifiera totala emissioner från en industrianläggning genom traversmätning nedvinds hela anläggningsområdet.',
              },
              {
                title: 'Enskilda processutsläpp',
                desc: 'Mät emissioner från specifika processsteg, ventilationer eller avluftningar. Verifiera emissionsberäkningar.',
              },
              {
                title: 'Deponier',
                desc: 'Kvantifiera totala metanemissioner från deponiytor genom korsvindsmätning. Komplement till ytscreening.',
              },
              {
                title: 'Verifiering av åtgärder',
                desc: 'Mät emissioner före och efter åtgärder för att verifiera att utsläppen har minskat. Dokumentera effekten.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jämförelse med andra metoder */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Plymmätning vs andra kvantifieringsmetoder</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Det finns flera metoder för att kvantifiera gasemissioner. Drönarbaserad plymmätning
            erbjuder en unik kombination av noggrannhet och flexibilitet som gör den särskilt
            lämpad för mellanstora till stora utsläppskällor.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                bold: 'vs emissionsfaktorer',
                text: '– faktisk mätning istället för schabloner. Avslöjar skillnader mellan beräknade och verkliga emissioner.',
              },
              {
                bold: 'vs fasta mätstationer',
                text: '– flexibelt placeringsbar, kan mäta flera källor samma dag utan permanent infrastruktur.',
              },
              {
                bold: 'vs inversionsmodellering',
                text: '– direkt mätning i plymen ger snabbare resultat och kräver färre antaganden om dispersion.',
              },
              {
                bold: 'vs tracer-metodik',
                text: '– kräver ingen tracer-utsläppning. Helt oberoende mätmetod som kan validera tracer-resultat.',
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

      <ProcessSteps steps={steps} heading="Mätprocessen steg för steg" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om plymmätning" />

      <CtaBand
        heading="Behöver ni kvantifiera era emissioner?"
        description="Kontakta oss för en genomgång. Vi planerar plymmätningen utifrån era specifika källförutsättningar och rapporteringsbehov."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Växthusgasmätning
            </Link>
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              LDAR-inspektion
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
