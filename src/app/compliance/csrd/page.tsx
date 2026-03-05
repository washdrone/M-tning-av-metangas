import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CSRD Scope 1 utsläppsmätning – EcoDrone',
  description: 'Hur uppfyller ni CSRD:s krav på Scope 1 utsläppsdata? EcoDrone levererar verifierade mätdata för ESRS E1 hållbarhetsrapportering. Ca 4 100 svenska bolag berörs.',
  alternates: { canonical: '/compliance/csrd' },
  openGraph: { title: 'CSRD Scope 1 utsläppsmätning | EcoDrone', url: '/compliance/csrd' },
}

const faqItems = [
  { question: 'Vad kräver CSRD för utsläppsdata?', answer: 'CSRD kräver att företag rapporterar Scope 1-utsläpp (direkta utsläpp från egen verksamhet) med verifierade data enligt ESRS E1. Det innebär att estimat med emissionsfaktorer inte räcker – faktisk mätning krävs för diffusa utsläppskällor.' },
  { question: 'Vilka svenska bolag berörs av CSRD?', answer: 'Cirka 4 100 svenska bolag berörs när CSRD rullas ut 2025–2028. Först ut är stora börsnoterade bolag (>500 anställda), sedan större onoterade bolag.' },
  { question: 'Hur hjälper EcoDrone med CSRD-compliance?', answer: 'EcoDrone mäter era faktiska Scope 1-utsläpp med drönare och levererar rapporter med dokumenterad metodik och mätosäkerhet som revisorer kan granska och verifiera.' },
  { question: 'Kan befintliga schabloner ersättas?', answer: 'Ja. Genom att mäta era faktiska utsläpp kan ni ersätta grova emissionsfaktorer med verklig mätdata. Det ger mer precisa rapporter och ofta visar det att de faktiska utsläppen avviker markant från schablonerna.' },
  { question: 'Vad är ESRS E1?', answer: 'ESRS E1 (European Sustainability Reporting Standards – Climate Change) specificerar kraven på klimatrelaterad rapportering under CSRD, inklusive krav på Scope 1, 2 och 3 utsläppsredovisning.' },
]

export default function CsrdPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(i => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: i.answer } })) }} />
      <Breadcrumbs items={[{ name: 'Hem', href: '/' }, { name: 'Compliance', href: '/compliance' }, { name: 'CSRD', href: '/compliance/csrd' }]} />

      <Hero title="CSRD Scope 1 – verifierade utsläppsdata" subtitle="Ca 4 100 svenska bolag behöver rapportera Scope 1-utsläpp med verifierade data. EcoDrone mäter era faktiska utsläpp och levererar compliance-redo rapporter för ESRS E1." trustItems={['ESRS E1-kompatibel', 'Scope 1 faktisk mätning', 'Revisionsbar data']} />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">CSRD – vad innebär det?</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">Corporate Sustainability Reporting Directive (CSRD) rullas ut 2025–2028 och kräver att ca 4 100 svenska bolag rapporterar kvantifierade utsläppsdata. Scope 1-utsläpp – direkta utsläpp från den egna verksamheten – kräver faktisk mätning, inte bara beräkning med emissionsfaktorer. Industrier med diffusa utsläppskällor – deponier, reningsverk, raffinaderier, biogasanläggningar – har störst behov av professionell mätning.</p>

          <h3 className="mt-8 text-xl font-semibold text-white">Vilka behöver mäta?</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">Alla verksamheter med diffusa utsläppskällor som inte kan kvantifieras exakt genom beräkning behöver mätdata. Det gäller särskilt:</p>
          <ul className="mt-4 space-y-2 text-dark-300">
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" /><Link href="/branscher/deponier" className="hover:text-white">Deponier med metanemissioner</Link></li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" /><Link href="/branscher/reningsverk" className="hover:text-white">Reningsverk med metan och lustgas</Link></li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" /><Link href="/branscher/biogas" className="hover:text-white">Biogasanläggningar med metanläckor</Link></li>
            <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" /><Link href="/branscher/olja-gas" className="hover:text-white">Raffinaderier och petrokemisk industri</Link></li>
          </ul>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Hur EcoDrone hjälper er</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Faktisk mätning', desc: 'Vi mäter era Scope 1-utsläpp med drönarmonterade sensorer – inga estimat.' },
              { title: 'Revisionsbar dokumentation', desc: 'Rapporter med komplett metodik, mätosäkerhet och spårbarhet.' },
              { title: 'ESRS E1-format', desc: 'Data levereras i format som matchar ESRS E1-kraven.' },
              { title: 'Löpande uppföljning', desc: 'Regelbundna mätningar visar trend och effekt av åtgärder.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om CSRD" />
      <CtaBand heading="Behöver ni Scope 1-data för er CSRD-rapportering?" description="Boka en genomgång så planerar vi en mätning anpassad efter er verksamhet." />
    </>
  )
}
