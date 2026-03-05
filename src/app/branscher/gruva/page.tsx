import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utsläppsmätning gruvdrift – diffusa emissioner',
  description:
    'Drönarbaserad utsläppsmätning för gruvindustrin. Kartlägg diffusa emissioner, stoftspridning och metan vid dagbrott, upplag och ventilationsschakt. EcoDrone Sverige.',
  alternates: { canonical: '/branscher/gruva' },
  openGraph: {
    title: 'Utsläppsmätning gruvdrift | EcoDrone',
    description: 'Drönarbaserad mätning av diffusa emissioner och stoftspridning vid gruvverksamhet.',
    url: '/branscher/gruva',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning för gruvdrift',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad mätning av diffusa emissioner, metan och stoftspridning vid dagbrott, upplag och ventilationsschakt i gruvindustrin.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning gruvdrift',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka utsläpp kan mätas vid gruvverksamhet med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter metan (CH₄) från kolhaltiga bergarter och ventilationsschakt, diffusa gasutsläpp från dagbrott och upplag, samt kartlägger stoftspridning och partikeldeposition vid kross- och transportytor. Sensorvalet anpassas efter gruvans specifika emissionsprofil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur fungerar drönarmätning vid stora dagbrottsgruvor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönaren flyger systematiskt över dagbrott, upplag och transportvägar och kartlägger gaskoncentrationer och stoftspridning med GPS-koppling. Stora arealer kan täckas effektivt utan att störa pågående gruvdrift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätningen användas för miljörapportering och tillsyn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Våra rapporter innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga som underlag för tillsyn, miljökonsekvensbeskrivningar, kontrollprogram och SMP-rapportering till Naturvårdsverket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mäter EcoDrone vid underjordsgruvor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi fokuserar på ytliga emissioner – ventilationsschakt, dagbrott, upplag och transportytor. Vid underjordsgruvor mäter vi emissionerna vid ventilationsöppningar och ovanför dagöppningar, inte inne i gruvgångarna.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka regulatoriska krav gäller för gruvindustrins utsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gruvverksamhet regleras genom miljöbalken och verksamhetens miljötillstånd. CSRD-rapportering kräver att Scope 1-utsläpp från gruvdrift redovisas med verifierad data. Drönarbaserad mätning ger det dataunderlag som krävs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan stoftspridning från gruvor kartläggas med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi kan kartlägga stoftspridning och partikeldeposition vid kross- och transportytor, upplag och sandmagasin. Resultaten ger underlag för att bedöma spridningsmönster och planera åtgärder som dammbindning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hanteras säkerheten vid drönflygning nära gruvdrift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi samordnar flygningen med gruvans driftledning och följer verksamhetens säkerhetsrutiner. Flygzoner planeras för att undvika konflikter med sprängning, tunga transporter och annan gruvverksamhet. Våra piloter har erfarenhet av att arbeta i industriella miljöer.',
      },
    },
  ],
}

export default function GruvaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Gruvdrift', href: '/branscher/gruva' },
      ]} />

      <Hero
        title="Utsläppsmätning för gruvindustrin"
        subtitle="Kartlägg diffusa emissioner, metan och stoftspridning vid dagbrott, upplag och ventilationsschakt. Drönarbaserad mätning som täcker stora arealer utan att störa gruvdriften."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['Diffusa emissioner', 'Stoftspridning', 'Stora arealer']}
      />

      {/* Utmaningen */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Gruvindustrins utsläppsutmaningar
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Gruvindustrin är en av Sveriges viktigaste basnäringar, men verksamheten genererar
            diffusa utsläpp som är svåra att kvantifiera med traditionella metoder. Metan kan
            frigöras från kolhaltiga bergarter vid brytning, stoft sprids från kross- och
            transportytor, och upplag av gråberg och malm kan generera diffusa gasutsläpp
            under lång tid.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            De stora arealerna vid dagbrottsgruvor och de komplexa förutsättningarna vid underjordsgruvor
            gör traditionell punktmätning otillräcklig. Drönarbaserad mätning erbjuder en effektiv
            metod att kartlägga emissioner över stora ytor med hög rumslig upplösning – utan att
            störa pågående verksamhet.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter vid gruvor</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Metan (CH₄)', text: '– från kolhaltiga bergarter, ventilationsschakt och eventuella gasfickor vid brytning.' },
              { bold: 'Diffusa gasutsläpp', text: '– kartläggning av emissioner från dagbrott, upplag av gråberg och malm samt sandmagasin.' },
              { bold: 'Stoftspridning', text: '– kartering av partikelspridning vid kross- och transportytor, upplag och damm från sprängning.' },
              { bold: 'Rumslig fördelning', text: '– georefererade kartlager som visar emissionsmönster över hela gruvområdet.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Användningsområden vid gruvverksamhet
          </h2>

          <h3 className="mt-8 text-xl font-semibold text-white">Dagbrottsgruvor</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Vid dagbrott kartlägger vi emissioner från brytningsytor, transportvägar och upplag.
            De stora arealerna gör drönarbaserad mätning särskilt effektiv – vi täcker ytor som
            skulle ta veckor med markbunden mätning på en bråkdel av tiden.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Ventilationsschakt</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Vid underjordsgruvor mäter vi metanutsläpp vid ventilationsöppningar och dagöppningar.
            Drönarteknik ger möjlighet att kartlägga utsläppsmönster vid flera schakt under samma
            mätkampanj och identifiera vilka ventilationsflöden som bidrar mest till de totala
            emissionerna.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Upplag och sandmagasin</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Gråbergsupplag, malmupplag och sandmagasin kan generera diffusa utsläpp under lång tid.
            Drönarbaserad kartläggning identifierar aktiva emissionsytor och ger underlag för att
            planera täckning, kompaktering eller andra åtgärder.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Stoft och damm</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Stoftspridning från kross, transporter och upplag påverkar både arbetsmiljö och
            omgivning. Med drönarburen sensorik kartlägger vi spridningsmönster och depositionsytor
            – ett värdefullt underlag för att dimensionera dammbindningsåtgärder och följa upp deras
            effekt.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en gruvmätning till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Planering & samordning', desc: 'Vi kartlägger gruvområdet, identifierar prioriterade mätområden och samordnar med driftledningen. Flygtillstånd och säkerhetsprotokoll fastställs i dialog med er.' },
              { step: '2', title: 'Flygning & datainsamling', desc: 'Drönaren flyger systematiskt över dagbrott, upplag, ventilationsschakt och transportytor. Mätdata registreras kontinuerligt med GPS-koppling.' },
              { step: '3', title: 'Analys & kartläggning', desc: 'Data bearbetas till georefererade kartlager som visar emissionsmönster och -intensitet över hela gruvområdet. Kvalitetskontroll och osäkerhetsanalys genomförs.' },
              { step: '4', title: 'Rapport & rekommendationer', desc: 'Ni får rapport med emissionskartor, identifierade utsläppskällor, prioriterade åtgärdsområden och dokumentation för miljörapportering.' },
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

      {/* Regulatoriskt */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Regulatoriska krav och rapportering
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Gruvverksamhet regleras genom miljöbalken och varje verksamhets specifika miljötillstånd.
            Kontrollprogrammet anger vilka utsläpp som ska övervakas och rapporteras. I takt med att
            klimatkraven skärps – genom CSRD, taxonomiförordningen och nationella klimatmål – behöver
            gruvindustrin allt mer detaljerad och verifierbar utsläppsdata.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarbaserad mätning ger det dataunderlag som behövs för att uppfylla både befintliga
            tillståndskrav och kommande rapporteringskrav. Rapporterna är utformade för att fungera
            som underlag vid tillsyn, i miljökonsekvensbeskrivningar och för{' '}
            <Link href="/compliance/miljorapportering" className="text-brand-400 hover:underline">SMP-rapportering</Link> till Naturvårdsverket.
          </p>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Emissionskartor', desc: 'Georefererade kartor som visar emissionsintensitet och -fördelning över hela gruvområdet med tydlig färgskala.' },
              { title: 'Utsläppskällor', desc: 'Identifierade och rangordnade utsläppskällor med GPS-koordinater, uppmätta halter och uppskattade flöden.' },
              { title: 'Mätrapport', desc: 'Komplett rapport med metodik, resultat, mätosäkerhet och rekommendationer – redo för tillsyn och miljörapportering.' },
              { title: 'GIS-data', desc: 'GeoJSON/KML-filer för integration i ert GIS-system. Möjliggör jämförelse över tid och kombination med annan geodata.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om utsläppsmätning vid gruvor"
      />

      <CtaBand
        heading="Behöver ni kartlägga utsläpp vid er gruva?"
        description="Kontakta oss för att diskutera hur vi kan anpassa mätningen efter ert gruvområde och era specifika emissionsutmaningar."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher/olja-gas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Olja, gas & raffinaderier
            </Link>
            <Link href="/branscher/deponier" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponier – metanmätning
            </Link>
            <Link href="/compliance/miljorapportering" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Miljörapportering & SMP
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
