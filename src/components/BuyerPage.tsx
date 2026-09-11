import Link from 'next/link'
import { Hero } from './Hero'
import { Breadcrumbs } from './Breadcrumbs'
import { CtaBand } from './CtaBand'
import { FaqAccordion } from './FaqAccordion'
import { JsonLd } from './JsonLd'
import { ORG_REF, SITE_URL, OG_IMAGE } from '@/site-config'
import type { Metadata } from 'next'

export interface BuyerContent {
  path: string
  title: string
  description: string
  intro: string
  cta?: string
  interest?: string
  sections: { heading: string; paragraphs: string[]; items?: string[] }[]
  faq?: { question: string; answer: string }[]
  related: { href: string; title: string; description: string }[]
  sources?: { href: string; title: string }[]
  service?: boolean
}

export function buyerMetadata(page: BuyerContent): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title: `${page.title} | EcoDrone`, description: page.description, url: page.path, images: [OG_IMAGE] },
  }
}

export function BuyerPage({ page }: { page: BuyerContent }) {
  const contact = page.interest ? `/kontakt?behov=${encodeURIComponent(page.interest)}` : '/kontakt'
  const parent = page.path.startsWith('/tjanster/') ? { name: 'Tjänster', href: '/tjanster' }
    : page.path.startsWith('/branscher/') ? { name: 'Branscher', href: '/branscher' }
    : page.path.startsWith('/compliance/') ? { name: 'Regelverk', href: '/compliance' } : null
  return <>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': page.service ? 'Service' : 'WebPage', name: page.title, description: page.description, url: `${SITE_URL}${page.path}`, ...(page.service ? { provider: ORG_REF, areaServed: { '@type': 'Country', name: 'Sweden' } } : {}) }} />
    <Breadcrumbs items={[{ name: 'Hem', href: '/' }, ...(parent ? [parent] : []), { name: page.title, href: page.path }]} />
    <Hero title={page.title} subtitle={page.intro} ctaText={page.cta || 'Begär mätupplägg'} ctaHref={contact} secondaryCtaText={page.path === "/tjanster/leveranser" ? "Förstå mätmetoden" : "Se vad leveransen kan innehålla"} secondaryCtaHref={page.path === "/tjanster/leveranser" ? "/tjanster/metodik" : "/tjanster/leveranser"} />
    {page.sections.map((section, i) => <section key={section.heading} className={`section-padding ${i % 2 === 0 ? 'section-muted' : ''}`}>
      <div className="container-narrow">
        <h2 className="text-2xl sm:text-3xl">{section.heading}</h2>
        <div className="prose-width space-y-4 mt-5 text-slate-700 leading-relaxed">
          {section.paragraphs.map(p => <p key={p}>{p}</p>)}
        </div>
        {section.items && <ul className="mt-7 grid gap-4 sm:grid-cols-2">{section.items.map(item => <li key={item} className="card-surface p-5 text-slate-700 leading-relaxed">{item}</li>)}</ul>}
      </div>
    </section>)}
    {!!page.faq?.length && <FaqAccordion items={page.faq} heading="Frågor inför beställning" />}
    {!!page.sources?.length && <section className="section-padding"><div className="container-narrow">
      <h2 className="text-xl">Källor och vidare läsning</h2>
      <p className="mt-3 text-sm text-slate-600">Text uppdaterad 10 september 2026. Kontrollera tillämplig regelversion och ert rapporteringsår inför beställning.</p>
      <ul className="mt-4 space-y-3">{page.sources.map(source => <li key={source.href}><a href={source.href} className="text-teal-800 underline underline-offset-4">{source.title}</a></li>)}</ul>
    </div></section>}
    <section className="section-padding section-muted"><div className="container-narrow">
      <h2 className="text-2xl">Välj nästa steg</h2>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">{page.related.map(item => <Link href={item.href} key={item.href} className="card-surface p-6"><h3 className="text-lg text-teal-800">{item.title} →</h3><p className="mt-2 text-sm text-slate-700">{item.description}</p></Link>)}</div>
    </div></section>
    <CtaBand heading="Vilken fråga behöver er mätning besvara?" description="Beskriv anläggningen, platsen och vad ni vill använda resultatet till. Ni behöver inte välja sensor eller metod i förväg." ctaText={page.cta || 'Begär mätupplägg'} ctaHref={contact} />
  </>
}
