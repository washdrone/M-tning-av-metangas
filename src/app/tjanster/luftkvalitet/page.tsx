import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { RelatedContent } from '@/components/RelatedContent'
import Link from 'next/link'
import { ORG_REF, OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Luftkvalitetsmätning med drönare – industri',
  description:
    'Luftkvalitetsmätning med drönare vid industrianläggningar. Kartlägg spridning av gaser och partiklar i 3D. Underlag för MKB, egenkontroll och omgivningspåverkan.',
  alternates: { canonical: '/tjanster/luftkvalitet' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Luftkvalitetsmätning med drönare – industri | EcoDrone',
    description:
      'Drönarbaserad luftkvalitetsmätning för kartläggning av gashalter och partiklar vid industriella anläggningar.',
    url: '/tjanster/luftkvalitet',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luftkvalitetsmätning med drönare',
  provider: ORG_REF,
  description:
    'Drönarbaserad luftkvalitetsmätning för kartläggning av gashalter och partiklar i industriell omgivning. 3D-kartläggning av spridningsmönster.',
  areaServed: { '@type': 'Country', name: 'Sweden' },
  serviceType: 'Luftkvalitetsmätning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad mäter ni vid en luftkvalitetsmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter gashalter (VOC, H₂S, NH₃, SO₂, NO₂) och partiklar (PM2.5, PM10) beroende på era behov. Alla mätningar GPS-kopplas för rumslig kartläggning av spridningsmönster runt er anläggning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan luftkvalitetsmätning med drönare ersätta fasta mätstationer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarmätning ger en heltäckande ögonblicksbild av luftkvaliteten i tre dimensioner, medan fasta stationer ger kontinuerlig data i enstaka punkter. Metoderna kompletterar varandra – drönaren kartlägger spridningen, stationerna följer trender över tid.',
      },
    },
    {
      '@type': 'Question',
      name: 'I vilka sammanhang används drönarbaserad luftkvalitetsmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vanliga tillämpningar är miljökonsekvensbeskrivning (MKB), egenkontroll enligt miljöbalken, klagomålsutredningar vid luktproblem, validering av spridningsberäkningar och kartläggning av omgivningspåverkan vid industriella processer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur presenteras resultaten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ni får georefererade kartlager med gashalter och/eller partikelkoncentrationer, en sammanfattande rapport med metodik och mätosäkerhet, samt digitala filer (GeoJSON/KML) för integration i ert GIS-system.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function LuftkvalitetPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Luftkvalitetsmätning', href: '/tjanster/luftkvalitet' },
      ]} />

      <Hero
        title="Luftkvalitetsmätning med drönare"
        subtitle="Kartlägg luftkvaliteten runt er anläggning i tre dimensioner. Mät gashalter och partiklar med drönare för egenkontroll, MKB och omgivningsanalyser."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['3D-kartläggning', 'Gaser + partiklar', 'MKB-underlag']}
      />

      <section className="section-padding section-muted">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Luftkvalitetsmätning för industri – heltäckande kartläggning</h2>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Traditionella metoder för luftkvalitetsmätning ger data i enstaka punkter. Med
            drönarbaserad luftkvalitetsmätning kartlägger vi gashalter och partiklar i tre
            dimensioner runt er anläggning. Ni ser hur emissioner sprids, i vilken riktning
            och hur långt de når – värdefull information för egenkontroll, MKB och
            grannrelationer.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Drönaren flyger systematiskt på flera höjder och registrerar koncentrationer med
            GPS-koppling. Resultaten visualiseras som kartlager som visar rumslig fördelning
            av luftföroreningar – ett komplement till fasta mätstationer och
            spridningsberäkningar.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Vad vi mäter</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Gaser', desc: 'VOC, H₂S, NH₃, SO₂, NO₂, CO och andra relevanta gaser med elektrokemiska sensorer och PID.' },
              { title: 'Partiklar', desc: 'PM2.5 och PM10 med optiska partikelräknare. Relevant vid stoftgenererande verksamheter.' },
              { title: 'Lukt', desc: 'Screening av luktkällor med VOC- och H₂S-sensorer för att kartlägga spridning vid luktproblem.' },
              { title: 'Meteorologi', desc: 'Vind, temperatur och luftfuktighet loggas parallellt för att koppla halter till spridningsförhållanden.' },
            ].map((item) => (
              <div key={item.title} className="card-surface p-5">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-muted">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Tillämpningar</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            {[
              'Miljökonsekvensbeskrivning (MKB) vid nya eller ändrade verksamheter',
              'Egenkontroll och villkorsuppföljning enligt miljöbalken',
              'Klagomålsutredning vid luktproblem eller omgivningspåverkan',
              'Validering av spridningsberäkningar och modellresultat',
              'Arbetsmiljöbedömning av gasexponering i uteområden',
              'Kartläggning av omgivningspåverkan vid hamnar, industrier och gruvor',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-teal-700" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om luftkvalitetsmätning" />

      <CtaBand
        heading="Behöver ni kartlägga luftkvaliteten runt er anläggning?"
        description="Kontakta oss för att diskutera vilka parametrar som är relevanta och hur vi planerar mätningen."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'Gasdetektion med drönare', href: '/tjanster/gasdetektion', description: 'Bred gasdetektion av VOC, H₂S, NH₃ och andra gaser vid industrianläggningar.' },
        { title: 'Utsläppsmätning vid gruvdrift', href: '/branscher/gruva', description: 'Kartlägg luftkvalitet och diffusa utsläpp vid gruvor och tungindustri.' },
      ]} />
    </>
  )
}
