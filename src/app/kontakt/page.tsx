import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL } from '@/site-config'

export const metadata: Metadata = {
  title: 'Boka genomgång – begär offert för utsläppsmätning',
  description:
    'Kontakta EcoDrone för att boka en genomgång eller begära offert för drönarbaserad utsläppsmätning. Vi återkommer inom 1 arbetsdag.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Boka genomgång – begär offert | EcoDrone',
    description: 'Kontakta EcoDrone för offert på drönarbaserad utsläppsmätning. Svar inom 1 arbetsdag.',
    url: '/kontakt',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'EcoDrone',
    email: 'info@ecodrone.se',
    url: SITE_URL,
  },
}

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Kontakt', href: '/kontakt' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Boka genomgång eller begär offert</h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300">
              Fyll i formuläret nedan så återkommer vi inom 1 arbetsdag med ett förslag
              på upplägg och nästa steg.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-400">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Svar inom 1 arbetsdag
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Ingen bindning
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Kostnadsfri behovsanalys
              </span>
            </div>

            <div className="mt-10">
              <ContactForm />
            </div>

            <div className="mt-12 border-t border-slate-800 pt-8">
              <h2 className="text-xl font-bold">Kontakta oss direkt</h2>
              <p className="mt-2 text-sm text-slate-400">Vi svarar inom en arbetsdag.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">E-post</span>
                  <p className="mt-1">
                    <a href="mailto:info@ecodrone.se" className="text-cyan-400 hover:text-cyan-300 font-medium">
                      info@ecodrone.se
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-slate-400">Svar inom 1 arbetsdag</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Verksamhetsområde</span>
                  <p className="mt-1 font-medium text-white">Hela Sverige</p>
                  <p className="mt-0.5 text-sm text-slate-400">Baserade i Göteborg / Västra Götaland</p>
                </div>
              </div>
            </div>

            <div className="mt-8 card-dark p-6">
              <h3 className="font-semibold text-white">Vad händer efter att ni skickat formuläret?</h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-600 text-xs font-medium text-slate-300">1</span>
                  Vi granskar er förfrågan och bedömer vilken typ av mätning som passar.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-600 text-xs font-medium text-slate-300">2</span>
                  Vi kontaktar er inom 1 arbetsdag för att diskutera upplägg.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-600 text-xs font-medium text-slate-300">3</span>
                  Ni får ett skriftligt förslag med metodik, leveranser och pris.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
