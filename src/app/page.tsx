import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'EcoDrone – Drönarbaserad utsläppsmätning för industri',
  description:
    'EcoDrone erbjuder drönarbaserad mätning av metan, lustgas och växthusgaser. CSRD-redo utsläppsdata, LDAR-inspektioner och compliance-rapporter för deponier, biogas, reningsverk och industri i hela Sverige.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'EcoDrone – Drönarbaserad utsläppsmätning för industri',
    description: 'Mät metan och växthusgaser med drönare. CSRD-redo data, LDAR-inspektioner och compliance-rapporter.',
    url: '/',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'EcoDrone',
  url: 'https://ecodrone.se',
  description:
    'Drönarbaserad utsläppsmätning av metan och miljöfarliga ämnen för industriell ESG- och compliance-rapportering.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@ecodrone.se',
    availableLanguage: 'Swedish',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SE',
  },
  areaServed: 'SE',
  knowsAbout: ['LDAR', 'Metanmätning', 'CSRD', 'OGMP 2.0', 'Utsläppsmätning', 'ESG-rapportering', 'OGI-kamera', 'TDLAS'],
  serviceType: ['Utsläppsmätning', 'Metandetektion', 'LDAR-inspektion', 'Gasdetektion', 'Växthusgasmätning'],
}

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema} />

      {/* Hero – cinematic full viewport */}
      <section className="relative flex min-h-[calc(70vh-5rem)] sm:min-h-[calc(85vh-5rem)] supports-[min-height:1dvh]:min-h-[calc(70dvh-5rem)] supports-[min-height:1dvh]:sm:min-h-[calc(85dvh-5rem)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
          <div className="absolute left-1/2 top-1/4 -z-10 h-[400px] w-[600px] sm:h-[700px] sm:w-[1000px] -translate-x-1/2 rounded-full bg-brand-600/8 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[300px] sm:h-[400px] sm:w-[500px] rounded-full bg-accent-500/5 blur-[120px]" />
        </div>

        <div className="container-narrow text-center pt-8">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-400">
            Drönarbaserad utsläppsmätning · Sverige
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
            Mät det som
            <br />
            <span className="gradient-brand">lagstiftningen kräver.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-dark-300 sm:text-xl">
            EcoDrone levererar certifierad mätning av metan och industriutsläpp för kunder
            med krav på ESG-rapportering, LDAR-compliance och CSRD Scope 1-data.
            Snabb insats. Revisionsklara rapporter.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/kontakt" className="btn-primary">
              Boka konsultation
            </Link>
            <Link href="/tjanster" className="btn-secondary">
              Utforska våra tjänster
            </Link>
          </div>

          {/* Compliance tags */}
          <div className="mx-auto mt-12 flex flex-wrap justify-center gap-3">
            {['CSRD / ESRS E1', 'EU-metanförordning 2024/1787', 'OGMP 2.0 nivå 4/5', 'SMP-rapportering', 'Avfall Sverige 2024:12'].map((tag) => (
              <span key={tag} className="rounded border border-brand-500/30 bg-brand-600/10 px-3 py-1.5 text-xs font-medium text-brand-400 tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-10 sm:mt-14 grid max-w-3xl grid-cols-2 gap-px rounded-2xl border border-dark-800 bg-dark-800 sm:grid-cols-4 overflow-hidden">
            {[
              { value: 'CH₄', label: 'Metan' },
              { value: 'N₂O', label: 'Lustgas' },
              { value: 'CO₂', label: 'Koldioxid' },
              { value: 'VOC', label: 'Kolväten' },
            ].map((stat) => (
              <div key={stat.label} className="bg-dark-900/80 px-4 py-5 text-center">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[12px] text-dark-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-driven messaging */}
      <section className="section-padding section-darker">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Regulatorisk medvind – er utmaning, vår lösning
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-400 leading-relaxed">
            CSRD, EU:s metanförordning och svenska miljörapporteringskrav tvingar tusentals
            anläggningar att mäta och verifiera sina utsläpp. EcoDrone levererar den mätdata
            era revisorer och tillsynsmyndigheter kräver – snabbare, säkrare och med högre
            precision än traditionella metoder.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'CSRD & Scope 1', desc: 'Verifierade utsläppsdata för hållbarhetsrapportering enligt ESRS E1.', href: '/compliance/csrd' },
              { title: 'EU-metanförordningen', desc: 'LDAR-inspektioner och metanmätning som uppfyller EU-kraven.', href: '/compliance/eu-metanforordning' },
              { title: 'SMP & Miljörapportering', desc: 'Mätdata för Naturvårdsverkets miljörapporteringssystem.', href: '/compliance/miljorapportering' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-dark p-6 transition-all hover:border-dark-600 hover:bg-dark-800/60"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-400 group-hover:text-brand-300">
                  Läs mer
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branscher */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Branscher vi betjänar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-dark-400">
            Vi mäter gasemissioner med drönare inom sex branscher. Gemensamt: systematisk
            datainsamling, kvalitetssäkring och compliance-redo leveranser.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Deponier & avfall', desc: 'Hitta var metanet läcker genom täckskiktet. Underlag för tillsyn och klimatrapportering.', href: '/branscher/deponier' },
              { title: 'Biogas', desc: 'Hitta och åtgärda metanläckor. Varje procent ni hittar innebär mer gas i produktionen.', href: '/branscher/biogas' },
              { title: 'Reningsverk', desc: 'Mät metan och lustgas från biologiska processer. Ersätt schabloner med verkliga mätvärden.', href: '/branscher/reningsverk' },
              { title: 'Olja, gas & raffinaderier', desc: 'LDAR-inspektioner och OGMP 2.0-kompatibel metanmätning för petrokemisk industri.', href: '/branscher/olja-gas' },
              { title: 'Gruvdrift', desc: 'Kartlägg diffusa utsläpp från dammdeponier och processer med drönare.', href: '/branscher/gruva' },
              { title: 'Hamnar & LNG-terminaler', desc: 'Mätning av komplex infrastruktur som är svår att inspektera traditionellt.', href: '/branscher/hamnar' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-dark p-6 transition-all hover:border-dark-600 hover:bg-dark-800/60"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-brand-400 group-hover:text-brand-300">
                  Läs mer
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why drone measurement */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Varför EcoDrone?</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Compliance-redo data',
                desc: 'Rapporter med dokumenterad metodik och mätosäkerhet som uppfyller kraven från CSRD, EU-metanförordningen och Naturvårdsverket.',
              },
              {
                title: 'Snabbare & säkrare',
                desc: 'Stora ytor mäts på timmar istället för dagar. Ingen personal på farliga ytor. Mätningen sker kontaktfritt från luften.',
              },
              {
                title: 'Hög rumslig upplösning',
                desc: 'Detaljerad spatial data gör det möjligt att lokalisera enskilda läckor – inte bara mäta totala utsläpp.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-dark-900 to-dark-950" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[100px]" />
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Redo att mäta det lagstiftningen kräver?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dark-300">
            Kontakta oss för en inledande genomgång av er anläggning och era compliance-krav.
            Ingen upphandling krävs för en första konsultation.
          </p>
          <Link href="/kontakt" className="btn-primary mt-8">
            Boka genomgång
          </Link>
        </div>
      </section>
    </>
  )
}
