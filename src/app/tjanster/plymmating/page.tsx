import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Drönarbaserad plymmätning – massflödeskvantifiering | EcoDrone',
  description:
    'Drönarbaserad plymmätning för kvantifiering av gasutsläpp. Massflödesberäkning med traversmätning och invers dispersionsmodellering. Hela Sverige.',
  alternates: { canonical: '/tjanster/plymmating' },
  openGraph: {
    title: 'Drönarbaserad plymmätning – massflödeskvantifiering | EcoDrone',
    description:
      'Kvantifiera gasutsläpp med drönarbaserad plymmätning. Traversmätning, invers dispersionsmodellering och massflödesberäkning.',
    url: '/tjanster/plymmating',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Drönarbaserad plymmätning',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Kvantifiering av gasutsläpp genom drönarbaserad plymmätning med traversmätning nedvinds och invers dispersionsmodellering.',
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
        text: 'Plymmätning innebär att drönaren flyger genom eller nedvinds en gasplym och mäter koncentrationer tvärs plymens utbredning. Genom att kombinera koncentrationsprofilen med vindhastighet och vindriktning kan massflödet beräknas – alltså hur många kg gas per timme som emitteras från källan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad är invers dispersionsmodellering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invers dispersionsmodellering (IDM) är en beräkningsmetod som utgår från uppmätta koncentrationer nedvinds och räknar baklänges till källstyrkan. Metoden tar hänsyn till atmosfärisk stabilitet, vindprofil och turbulens för att beräkna emissionsflödet med dokumenterad mätosäkerhet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur exakt är plymmätningen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mätosäkerheten beror på vindförhållanden, plymens struktur och avstånd till källan. Typisk osäkerhet ligger mellan 20 och 50 procent (95 % konfidensintervall). Vi dokumenterar alltid den specifika mätosäkerheten för varje mätning.',
      },
    },
    {
      '@type': 'Question',
      name: 'När är plymmätning bättre än fluxkammare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plymmätning passar bäst för att kvantifiera totala emissioner från hela anläggningar eller stora områden, medan fluxkammare mäter punkt för punkt. Plymmätning är snabbare vid stora ytor och fångar även diffusa emissioner som fluxkammare kan missa.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function PlymmatingPage() {
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
        subtitle="Kvantifiera gasutsläpp från hela er anläggning med drönarbaserad plymmätning. Massflödesberäkning genom traversmätning och invers dispersionsmodellering – resultat i kg/h med dokumenterad mätosäkerhet."
        ctaText="Boka plymmätning"
        ctaHref="/kontakt"
        trustItems={[
          'Massflöde i kg/h',
          'Invers dispersionsmodellering',
          'Dokumenterad mätosäkerhet',
        ]}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Kvantifiera utsläpp med plymmätning</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Plymmätning är den metod som ger er ett faktiskt emissionsflöde – inte bara
            koncentrationer, utan hur många kilogram gas per timme som lämnar er anläggning.
            Drönaren flyger traverser nedvinds källan och mäter gaskoncentrationer med hög
            spatial upplösning. Genom att kombinera dessa med vinddata beräknas massflödet.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Metoden är särskilt värdefull för att verifiera emissionsberäkningar, uppfylla
            OGMP 2.0 nivå 4/5-krav och ge beslutsunderlag för åtgärder. Vi använder invers
            dispersionsmodellering (IDM) för att beräkna källstyrkan med dokumenterad
            mätosäkerhet.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Metodik</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Traversmätning', desc: 'Drönaren flyger horisontella traverser nedvinds källan på en eller flera höjder. TDLAS-sensorn mäter gaskoncentrationer kontinuerligt med GPS-koppling.' },
              { step: '2', title: 'Meteorologisk datainsamling', desc: 'Vindhastighet, vindriktning och turbulensparametrar loggas parallellt med markbaserad väderstation och/eller drönarens sensorer.' },
              { step: '3', title: 'Massflödesberäkning', desc: 'Koncentrationsdata integreras över traverssektionen och multipliceras med vindhastighetsprofilen för att beräkna massflödet (kg/h).' },
              { step: '4', title: 'Invers dispersionsmodellering', desc: 'IDM-analys verifierar och förfinar kvantifieringen genom att modellera plymens spridning och beräkna källstyrkan med angiven konfidensgrad.' },
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

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Emissionsverifiering', desc: 'Jämför uppmätta emissioner med beräknade schabloner. Stöd för OGMP 2.0 nivå 4/5-rapportering.' },
              { title: 'Deponikvantifiering', desc: 'Beräkna totala metanemissioner från deponier som komplement till ytemissionsmätning.' },
              { title: 'Processoptimering', desc: 'Kvantifiera emissioner före och efter åtgärder för att verifiera att åtgärderna ger effekt.' },
              { title: 'Regulatorisk rapportering', desc: 'Underlag för SMP, klimatbokslut och tillsyn med verifierade emissionsvärden.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om plymmätning" />

      <CtaBand
        heading="Behöver ni kvantifiera era utsläpp?"
        description="Kontakta oss för att diskutera hur plymmätning kan ge er verifierade emissionsdata för er anläggning."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
            <Link href="/tjanster/vaxthusgasmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Växthusgasmätning
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
