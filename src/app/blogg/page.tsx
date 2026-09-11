import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { blogPosts } from './posts'
import { OG_IMAGE } from '@/site-config'

const description = 'Guider om metanmätning för deponi och biogas: metodval, pris och offert, mätresultat och uppföljning av läckor. Få stöd inför nästa mätuppdrag.'

export const metadata: Metadata = {
  title: 'Kunskapsbank om metanmätning – guider för beställare',
  description,
  alternates: { canonical: '/blogg' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Kunskapsbank om metanmätning | EcoDrone',
    description,
    url: '/blogg',
  },
}

const categories = [
  { name: 'Beställa mätning', id: 'bestalla', description: 'Förbered uppdraget och jämför offerter med rätt frågor.' },
  { name: 'Deponi och biogas', id: 'deponi-biogas', description: 'Avgränsa mätningen efter anläggningen och driftens behov.' },
  { name: 'Metodval', id: 'metodval', description: 'Förstå hur mätprincip, väder och upplägg påverkar vad som går att undersöka.' },
  { name: 'Förstå mätresultat', id: 'matresultat', description: 'Tolka enheter, kartor och beräkningar och se vilka slutsatser underlaget räcker till.' },
  { name: 'Uppföljning', id: 'uppfoljning', description: 'Planera återkontroller och håll ihop observationer, åtgärder och resultat.' },
]

export default function BloggPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Kunskapsbank', href: '/blogg' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <p className="mb-3 text-sm font-semibold text-teal-800">{blogPosts.length} guider för drift- och miljöansvariga</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Kunskapsbank om metanmätning</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
            Ska ni beställa en mätning, tolka en rapport eller följa upp en misstänkt läcka?
            Här får ni praktiska svar för deponier, biogasanläggningar och andra verksamheter med behov av metanmätning.
          </p>
          <Link href="/blogg/hur-dronarbaserad-metanmatning-fungerar" className="mt-6 inline-block font-semibold text-teal-800 underline underline-offset-4">
            Ny inför mätning? Börja med vår guide steg för steg →
          </Link>
          <nav aria-label="Kunskapsbankens ämnen" className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="rounded-full border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-medium text-teal-900 hover:bg-teal-100">
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="section-muted">
        {categories.map((category) => (
          <section key={category.id} aria-labelledby={category.id} className="py-10 sm:py-14">
            <div className="container-wide">
              <h2 id={category.id} className="scroll-mt-28 text-2xl font-bold text-slate-900">{category.name}</h2>
              <p className="mt-3 max-w-2xl text-slate-700">{category.description}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.filter((post) => post.category === category.name).map((post) => (
                  <Link key={post.slug} href={`/blogg/${post.slug}`} className="group card-surface flex flex-col p-6">
                    <time dateTime={post.datePublished} className="text-xs text-slate-600">
                      {new Date(post.datePublished).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Stockholm' })}
                    </time>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-800">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                    <span className="mt-5 text-sm font-semibold text-teal-800">Läs artikel <span aria-hidden="true">→</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
