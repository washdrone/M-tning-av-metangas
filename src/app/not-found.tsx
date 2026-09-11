import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sidan hittades inte (404)',
  description: 'Sidan du söker finns inte längre eller har flyttats. Hitta rätt via våra tjänster, branscher eller compliance-guider.',
  robots: { index: false, follow: false },
}

const quickLinks = [
  { name: 'Alla tjänster', href: '/tjanster', desc: 'Metanmätning, LDAR-inspektion, gasdetektion och mer.' },
  { name: 'Branscher', href: '/branscher', desc: 'Deponier, biogas, reningsverk, olja & gas, gruvor, hamnar.' },
  { name: 'Compliance & regelverk', href: '/compliance', desc: 'CSRD, EU:s metanförordning, OGMP 2.0 och SMP.' },
  { name: 'Vanliga frågor', href: '/faq', desc: 'Svar på de vanligaste frågorna om drönarbaserad mätning.' },
]

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h1 className="text-4xl font-bold">404 – Sidan hittades inte</h1>
        <p className="mt-4 text-lg text-slate-600">
          Sidan du söker finns inte längre eller har flyttats. Här är några vägar vidare:
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 text-left">
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group card-surface p-5">
              <span className="font-semibold text-slate-900 group-hover:text-teal-800 transition-colors">{link.name}</span>
              <p className="mt-1.5 text-sm text-slate-600">{link.desc}</p>
            </Link>
          ))}
        </div>
        <Link href="/" className="btn-primary mt-10">
          Till startsidan
        </Link>
      </div>
    </section>
  )
}
