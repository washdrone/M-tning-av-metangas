import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'OGMP 2.0 nivå 4/5 mätning – EcoDrone',
  description: 'OGMP 2.0 kräver nivå 4/5-rapportering med direkt mätdata. EcoDrone levererar TDLAS-baserad metanmätning som uppfyller OGMP 2.0-protokollen.',
  alternates: { canonical: '/compliance/ogmp' },
  openGraph: { title: 'OGMP 2.0 mätning | EcoDrone', url: '/compliance/ogmp' },
}

const faqItems = [
  { question: 'Vad är OGMP 2.0?', answer: 'Oil & Gas Methane Partnership 2.0 är ett ramverk under UNEP för standardiserad metanrapportering inom olje- och gassektorn. Det definierar fem nivåer av rapportering, där nivå 4 och 5 kräver direkt mätdata.' },
  { question: 'Vad krävs för nivå 4?', answer: 'Nivå 4 kräver mätningar på anläggningsnivå (site-level) med certifierade mätmetoder. TDLAS-baserade drönarmätningar uppfyller detta krav.' },
  { question: 'Vad krävs för nivå 5?', answer: 'Nivå 5 kräver att mätdata reconcilieras med bottom-up-inventarier på källnivå. EcoDrone kan leverera både anläggningsövergripande data och källspecifika mätningar.' },
  { question: 'Är EcoDrones metoder OGMP 2.0-kompatibla?', answer: 'Ja. Vi använder TDLAS-sensorer kalibrerade enligt OGMP 2.0-protokoll och levererar rapporter med den dokumentation som krävs för nivå 4/5-rapportering.' },
]

export default function OgmpPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(i => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) }} />
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Compliance', href: '/compliance' }, { name: 'OGMP 2.0', href: '/compliance/ogmp' }]} />

      <Hero title="OGMP 2.0 – nivå 4/5 mätning" subtitle="OGMP 2.0 kräver direkt mätdata för metanrapportering inom olje- och gassektorn. EcoDrone levererar TDLAS-baserade mätningar som uppfyller nivå 4 och 5." trustItems={['Nivå 4 site-level', 'Nivå 5 source-level', 'TDLAS-certifierad']} />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">OGMP 2.0 – rapporteringsnivåer</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">Oil & Gas Methane Partnership 2.0 definierar fem nivåer av metanrapportering. Nivå 1–3 baseras på estimat och emissionsfaktorer. Nivå 4 och 5 kräver direkt mätdata – det vill säga faktiska mätningar vid anläggningen. EcoDrone levererar den mätdata som krävs för att rapportera på nivå 4 (anläggningsnivå) och nivå 5 (källnivå med reconciliering).</p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om OGMP 2.0" />
      <CtaBand heading="Behöver ni uppnå OGMP 2.0 nivå 4/5?" description="Boka en genomgång så planerar vi mätningen." />
    </>
  )
}
