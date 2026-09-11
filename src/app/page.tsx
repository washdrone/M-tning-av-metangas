import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { SITE_URL, SITE_LOGO_URL, ORG_ID, OG_IMAGE } from '@/site-config'

const title = 'Metanmätning med drönare för industri och anläggningar'
const description = 'EcoDrone kartlägger metan med drönare för deponier, biogas och industri i Sverige. Få underlag för läcksökning, kontroll och uppföljning. Begär mätupplägg.'
export const metadata: Metadata = {
  title, description, alternates: { canonical: '/' },
  openGraph: { title: `${title} | EcoDrone`, description, images: [OG_IMAGE], url: '/' },
}
const sectors = [
  { title: 'Deponier', text: 'Kartlägg förhöjda metanhalter och välj områden för kontroll av täckning och gasinsamling.', href: '/branscher/deponier' },
  { title: 'Biogasanläggningar', text: 'Undersök misstänkta läckor och ge driftteamet underlag för åtgärder och uppföljning.', href: '/branscher/biogas' },
  { title: 'Reningsverk', text: 'Avgränsa behovet av mätning vid reningsprocesser och slamhantering.', href: '/branscher/reningsverk' },
  { title: 'Olja, gas och industri', text: 'Planera läcksökning utifrån komponenter, åtkomst och kontrollprogrammets krav.', href: '/branscher/olja-gas' },
]
export default function HomePage() {
  return <>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', '@id': ORG_ID, name: 'EcoDrone', url: SITE_URL, logo: SITE_LOGO_URL, description, email: 'info@ecodrone.se', areaServed: { '@type': 'Country', name: 'Sweden' } }} />
    <Hero large title={title} subtitle="Hitta förhöjda metanhalter och få underlag för kontroll, åtgärder och uppföljning. EcoDrone kartlägger utsläpp med drönare för deponier, biogasanläggningar och industri i Sverige. Vi utgår från frågan ni behöver besvara och anpassar mätupplägget därefter." ctaText="Begär mätupplägg" secondaryCtaText="Se rapporter och leveranser" secondaryCtaHref="/tjanster/leveranser" trustItems={['Kartor och mätunderlag', 'Upplägg efter anläggningens behov', 'Uppdrag i Sverige']} />
    <section className="section-padding section-muted"><div className="container-wide">
      <h2 className="text-2xl sm:text-3xl">Vad behöver ni få svar på?</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          { title: 'Var behöver vi kontrollera?', text: 'Lokalisera förhöjda metanhalter och områden som behöver undersökas närmare.', href: '/tjanster/metanmatning', label: 'Metanmätning och kartläggning' },
          { title: 'Finns misstänkta läckor?', text: 'Avgränsa inspektionen och få en observationslista för fortsatt kontroll och uppföljning.', href: '/tjanster/ldar-inspektion', label: 'LDAR och läcksökning' },
          { title: 'Hur stort är utsläppsflödet?', text: 'Bedöm om kvantifiering kan genomföras med koncentrationsdata, vinddata och dokumenterad beräkning.', href: '/tjanster/plymmating', label: 'Plymmätning och kvantifiering' },
        ].map(item => <Link key={item.href} href={item.href} className="card-surface p-6"><h3 className="text-xl">{item.title}</h3><p className="mt-3 text-slate-700">{item.text}</p><span className="mt-5 block text-teal-800 text-sm">{item.label} →</span></Link>)}
      </div>
    </div></section>
    <section className="section-padding"><div className="container-wide">
      <h2 className="text-2xl sm:text-3xl">Mätupplägg för er anläggning</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{sectors.map(item => <Link key={item.href} href={item.href} className="card-surface p-6"><h3 className="text-xl">{item.title}</h3><p className="mt-3 text-sm text-slate-700">{item.text}</p><span className="mt-5 block text-teal-800">Se mätupplägg →</span></Link>)}</div>
      <Link className="mt-6 inline-block text-teal-800 underline" href="/branscher">Se samtliga branscher</Link>
    </div></section>
    <section className="section-padding section-muted"><div className="container-narrow">
      <h2 className="text-2xl sm:text-3xl">Ett underlag som går att arbeta vidare med</h2>
      <p className="mt-5 max-w-3xl text-slate-700 leading-relaxed">Bestäm leveransen efter vem som ska använda resultatet. Driftteamet kan behöva en karta och en observationslista. Miljöansvariga kan behöva metodbeskrivning och underlag för vidare beräkning. Omfattning och format fastställs i förslaget.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">{[
        ['Karta', 'Var mätningen genomfördes och var observationer gjordes, med parameter och enhet.'],
        ['Resultatlista', 'Identifierade punkter eller områden som kan användas för fortsatt kontroll.'],
        ['Rapport', 'Metod, förhållanden, slutsatser och begränsningar – med beräkningar om de ingår.'],
      ].map(([heading,text]) => <div className="card-surface p-6" key={heading}><h3 className="text-lg">{heading}</h3><p className="mt-3 text-sm text-slate-700">{text}</p></div>)}</div>
      <div className="mt-7 flex flex-wrap gap-6"><Link href="/tjanster/leveranser" className="text-teal-800 underline">Läs om leveransens innehåll</Link><Link href="/case" className="text-teal-800 underline">Se illustrativa exempeluppdrag</Link></div>
    </div></section>
    <section className="section-padding"><div className="container-narrow">
      <h2 className="text-2xl sm:text-3xl">Från er fråga till ett avgränsat uppdrag</h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-3">{[
        ['1. Beskriv behovet', 'Berätta om anläggningen, platsen och vad resultatet ska användas till. Ni behöver inte välja mätteknik.'],
        ['2. Stäm av upplägget', 'Avgränsa område, metod, åtkomst, leverans och pris innan arbetet beställs.'],
        ['3. Planera nästa steg', 'Använd mätunderlaget för vidare kontroll eller uppföljning utifrån resultatets förutsättningar.'],
      ].map(([heading,text]) => <li key={heading}><h3 className="text-lg">{heading}</h3><p className="mt-3 text-slate-700">{text}</p></li>)}</ol>
    </div></section>
    <section className="section-padding section-muted"><div className="container-narrow">
      <h2 className="text-2xl sm:text-3xl">Tydligt vad som mäts och vad som beräknas</h2>
      <p className="mt-5 prose-width text-slate-700 leading-relaxed">Detektion, koncentration och utsläppsflöde besvarar olika frågor. Vind, drift och mätmetod påverkar tolkningen. Om underlaget ska användas i ett kontrollprogram behöver kraven stämmas av före beställning.</p>
      <div className="mt-7 flex flex-wrap gap-6"><Link href="/tjanster/metodik" className="text-teal-800 underline">Metod och kvalitet</Link><Link href="/compliance" className="text-teal-800 underline">Regelverk och rapporteringsbehov</Link><Link href="/blogg" className="text-teal-800 underline">Kunskapsbank om utsläppsmätning</Link></div>
    </div></section>
    <CtaBand heading="Vilken fråga behöver ni få svar på?" description="Beskriv anläggningen och ert behov. Vi hjälper er att avgränsa mätning, leverans och nästa steg." />
  </>
}
