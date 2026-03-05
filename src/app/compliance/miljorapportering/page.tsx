import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Miljörapportering SMP – utsläppsdata med EcoDrone',
  description: 'Naturvårdsverkets SMP kräver årlig miljörapportering med utsläppsdata. EcoDrone levererar mätdata för metanrapportering till SMP och länsstyrelser.',
  alternates: { canonical: '/compliance/miljorapportering' },
  openGraph: { title: 'Miljörapportering SMP | EcoDrone', url: '/compliance/miljorapportering' },
}

const faqItems = [
  { question: 'Vad är SMP?', answer: 'Svenska MiljörapporteringsPortalen (SMP) är Naturvårdsverkets system för årlig miljörapportering. Verksamheter med tillståndsplikt enligt Miljöbalken rapporterar utsläppsdata till SMP.' },
  { question: 'Vilka verksamheter måste rapportera?', answer: 'Tillståndspliktiga verksamheter inom industri, avfall, VA och energi. Det inkluderar deponier, reningsverk, biogasanläggningar och tung industri.' },
  { question: 'Hur hjälper EcoDrone med SMP-rapportering?', answer: 'Vi mäter era faktiska utsläpp och levererar data i format som kan användas direkt i er miljörapport. Metodik och mätosäkerhet dokumenteras.' },
  { question: 'Kan mätdata ersätta beräkningar med emissionsfaktorer?', answer: 'Ja. Faktisk mätdata ger ofta en mer korrekt bild av utsläppen och accepteras av tillsynsmyndigheter som ett bättre underlag än generella emissionsfaktorer.' },
]

export default function MiljorapporteringPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(i => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) }} />
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Compliance', href: '/compliance' }, { name: 'Miljörapportering', href: '/compliance/miljorapportering' }]} />

      <Hero title="Miljörapportering och SMP" subtitle="Naturvårdsverket och länsstyrelser kräver årliga miljörapporter med utsläppsdata. EcoDrone levererar den mätdata ni behöver – baserad på faktisk mätning, inte schabloner." trustItems={['SMP-kompatibel', 'Faktisk mätdata', 'Tillsyns-redo']} />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">SMP och miljörapportering i Sverige</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">Svenska tillståndspliktiga verksamheter rapporterar årligen till Naturvårdsverkets miljörapporteringsportal (SMP). Utsläppsdata för metan och andra växthusgaser ska baseras på bästa tillgängliga metod. För många verksamheter innebär det att grova emissionsfaktorer behöver ersättas med faktisk mätdata – särskilt för diffusa utsläppskällor som deponier, slamhantering och processventilation.</p>
          <p className="mt-4 text-dark-400 leading-relaxed">EcoDrone mäter era utsläpp med drönarmonterade sensorer och levererar data redo att användas i er miljörapport. Rapporterna inkluderar dokumenterad metodik och mätosäkerhet som tillsynsmyndigheter kan granska.</p>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om miljörapportering" />
      <CtaBand heading="Behöver ni mätdata för er miljörapport?" description="Boka en genomgång så planerar vi en mätning inför er rapporteringsperiod." />
    </>
  )
}
