import Link from 'next/link'
import { IndustryImage } from './IndustryImage'

export function DeliveryFeature() {
  return <section className="section-padding">
    <div className="container-wide grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <IndustryImage path="/branscher/olja-gas" inline />
      <div>
        <h2 className="text-2xl sm:text-3xl">Från fältarbete till nästa beslut</h2>
        <p className="mt-5 text-slate-700 leading-relaxed">Vad behöver driftteamet kontrollera, och vilket underlag behöver miljöansvariga? Vi utgår från hur resultatet ska användas när vi avgränsar mätning och leverans.</p>
        <p className="mt-4 text-slate-700 leading-relaxed">Karta, observationslista och rapport ger olika stöd i arbetet. Innehåll, format och behov av uppföljning fastställs i mätupplägget.</p>
        <Link href="/tjanster/leveranser" className="btn-secondary mt-7">Se rapporter och leveranser</Link>
      </div>
    </div>
  </section>
}
