import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Boka genomgång – begär offert för gasmätning',
  description:
    'Kontakta oss för att boka en genomgång eller begära offert för drönarbaserad metan- och miljömätning. Vi återkommer inom 1 arbetsdag.',
  alternates: { canonical: '/matning/kontakt' },
}

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Mätning', href: '/matning' },
        { name: 'Kontakt', href: '/matning/kontakt' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Boka genomgång eller begär offert</h1>
            <p className="mt-4 text-lg text-gray-600">
              Fyll i formuläret nedan så återkommer vi inom 1 arbetsdag med ett förslag
              på upplägg och nästa steg.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold">Kontakta oss direkt</h2>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  <span className="font-medium text-gray-900">E-post: </span>
                  <a href="mailto:info@washdrone.se" className="text-brand-700 hover:text-brand-800">
                    info@washdrone.se
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-900">Telefon: </span>
                  <a href="tel:+46XXXXXXXXX" className="text-brand-700 hover:text-brand-800">
                    +46 (0)XX-XXX XX XX
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">Vad händer efter att ni skickat formuläret?</h3>
              <ol className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">1.</span>
                  Vi granskar er förfrågan och bedömer vilken typ av mätning som passar.
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">2.</span>
                  Vi kontaktar er inom 1 arbetsdag för att diskutera upplägg och förutsättningar.
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-gray-900">3.</span>
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
