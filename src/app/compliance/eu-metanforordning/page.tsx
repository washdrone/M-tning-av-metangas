import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EU-metanförordningen – LDAR-krav för industrin',
  description: 'EU:s metanförordning kräver LDAR-inspektioner för olje-, gas- och gruvbolag. Läs om kraven och hur EcoDrone hjälper er uppfylla dem med drönarbaserad inspektion.',
  alternates: { canonical: '/compliance/eu-metanforordning' },
  openGraph: { title: 'EU-metanförordningen | EcoDrone', url: '/compliance/eu-metanforordning' },
}

const faqItems = [
  { question: 'Vad kräver EU-metanförordningen?', answer: 'Förordningen kräver att olje-, gas- och gruvbolag genomför systematiska LDAR-inspektioner (Leak Detection and Repair) med certifierade mätmetoder, rapporterar metanutsläpp och åtgärdar hittade läckor inom bestämda tidsramar.' },
  { question: 'Vilka branscher berörs?', answer: 'Primärt olje- och gasbolag, raffinaderier, gruvdrift och relaterad infrastruktur. I förlängningen kan fler sektorer inkluderas.' },
  { question: 'Hur ofta ska inspektioner genomföras?', answer: 'Inspektionsfrekvensen varierar mellan var 3:e och var 12:e månad beroende på komponentkategori och anläggningstyp.' },
  { question: 'Vilka mätmetoder godkänns?', answer: 'Förordningen godkänner bland annat OGI-kamera och TDLAS-baserade sensorer – båda metoder som EcoDrone erbjuder monterade på drönare.' },
]

export default function EuMetanPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(i => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) }} />
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Compliance', href: '/compliance' }, { name: 'EU-metanförordningen', href: '/compliance/eu-metanforordning' }]} />

      <Hero title="EU-metanförordningen" subtitle="EU:s metanförordning kräver LDAR-inspektioner och metanmätning med certifierade metoder. EcoDrone levererar drönarbaserade inspektioner som uppfyller kraven." trustItems={['LDAR-krav', 'Certifierade metoder', 'I kraft 2024']} />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Om förordningen</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">EU:s metanförordning trädde i kraft 2024 och ställer direkta krav på olje-, gas- och gruvbolag att genomföra LDAR-inspektioner med certifierade mätmetoder. OGMP 2.0 kräver nivå 4/5-rapportering med direkt mätdata – inte estimat. Drönarmonterade sensorer är den ledande tekniken för att uppnå dessa nivåer effektivt och kostnadseffektivt.</p>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Relaterade tjänster</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/tjanster/ldar-inspektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">LDAR-inspektion</Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">OGMP 2.0</Link>
            <Link href="/branscher/olja-gas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white transition-colors">Olja, gas & raffinaderier</Link>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor" />
      <CtaBand heading="Behöver ni uppfylla EU-metanförordningens krav?" description="Boka en genomgång så planerar vi en LDAR-inspektion." />
    </>
  )
}
