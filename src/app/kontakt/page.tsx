import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Boka genomgång – begär offert för utsläppsmätning',
  description:
    'Kontakta EcoDrone för att boka en genomgång eller begära offert för drönarbaserad utsläppsmätning. Vi återkommer inom 1 arbetsdag.',
  alternates: { canonical: '/kontakt' },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'EcoDrone Sverige AB',
    email: 'info@ecodrone.se',
    url: 'https://ecodrone.se',
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
            <h1 className="text-3xl font-bold sm:text-4xl">Boka genomgång eller begär offert</h1>
            <p className="mt-5 text-lg text-dark-300">
              Fyll i formuläret nedan så återkommer vi inom 1 arbetsdag med ett förslag
              på upplägg och nästa steg.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

            <div className="mt-12 border-t border-dark-800 pt-8">
              <h2 className="text-xl font-bold">Kontakta oss direkt</h2>
              <p className="mt-2 text-sm text-dark-400">Vi svarar inom en arbetsdag. För akuta uppdrag — ring direkt.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-dark-500">E-post</span>
                  <p className="mt-1">
                    <a href="mailto:info@ecodrone.se" className="text-brand-400 hover:text-brand-300 font-medium">
                      info@ecodrone.se
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-dark-400">Svar inom 1 arbetsdag</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-dark-500">Telefon</span>
                  <p className="mt-1">
                    <a href="tel:+46XXXXXXXXX" className="text-brand-400 hover:text-brand-300 font-medium">
                      +46 (0)XX-XXX XX XX
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm text-dark-400">Mån–fre 07:00–17:00</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-dark-500">Verksamhetsområde</span>
                  <p className="mt-1 font-medium text-white">Hela Sverige</p>
                  <p className="mt-0.5 text-sm text-dark-400">Baserade i Göteborg / Västra Götaland</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-dark-500">Bolag</span>
                  <p className="mt-1 font-medium text-white">EcoDrone Sverige AB</p>
                </div>
              </div>
            </div>

            <div className="mt-8 card-dark p-6">
              <h3 className="font-semibold text-white">Vad händer efter att ni skickat formuläret?</h3>
              <ol className="mt-4 space-y-3 text-sm text-dark-400">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-dark-600 text-xs font-medium text-dark-300">1</span>
                  Vi granskar er förfrågan och bedömer vilken typ av mätning som passar.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-dark-600 text-xs font-medium text-dark-300">2</span>
                  Vi kontaktar er inom 1 arbetsdag för att diskutera upplägg.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-dark-600 text-xs font-medium text-dark-300">3</span>
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
