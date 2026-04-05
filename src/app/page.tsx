import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'

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
  name: 'EcoDrone Sverige AB',
  legalName: 'EcoDrone Sverige AB',
  url: 'https://ecodrone.se',
  logo: 'https://ecodrone.se/Facicon%20ecodrone.png',
  description:
    'EcoDrone Sverige AB är ett svenskt miljöteknikföretag som levererar drönarbaserad utsläppsmätning av metan och växthusgaser för industriell ESG- och compliance-rapportering.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@ecodrone.se',
    availableLanguage: ['Swedish', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SE',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Sweden',
  },
  knowsAbout: ['LDAR', 'Metanmätning', 'CSRD', 'OGMP 2.0', 'Utsläppsmätning', 'ESG-rapportering', 'OGI-kamera', 'TDLAS'],
  serviceType: ['Utsläppsmätning', 'Metandetektion', 'LDAR-inspektion', 'Gasdetektion', 'Växthusgasmätning'],
}

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema} />

      {/* Hero – cinematic full viewport (Fix M6: dvh units) */}
      <section className="relative flex min-h-[calc(65dvh-5rem)] sm:min-h-[calc(85dvh-5rem)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          <div className="absolute left-1/2 top-1/4 -z-10 h-[400px] w-[600px] sm:h-[700px] sm:w-[1000px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[300px] sm:h-[400px] sm:w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>

        <div className="container-narrow text-center pt-6 sm:pt-8">
          <p className="mb-3 sm:mb-4 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Drönarbaserad utsläppsmätning · Sverige
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl lg:text-7xl">
            Mät det som
            <br />
            <span className="gradient-brand">lagstiftningen kräver.</span>
          </h1>
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-slate-400 lg:text-xl">
            <strong className="text-slate-200">EcoDrone är ett svenskt miljöteknikföretag som levererar drönarbaserad mätning av metan och växthusgaser för industri med regulatoriska krav.</strong>{' '}
            Vi mäter era faktiska Scope 1-utsläpp och levererar revisionsklara rapporter för CSRD, LDAR och ESG-compliance.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Link href="/kontakt" className="btn-primary w-full sm:w-auto">
              Boka konsultation
            </Link>
            <Link href="/tjanster" className="btn-secondary w-full sm:w-auto">
              Utforska våra tjänster
            </Link>
          </div>

          {/* Compliance tags */}
          <div className="mx-auto mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['CSRD / ESRS E1', 'EU-metanförordning 2024/1787', 'OGMP 2.0 nivå 4/5', 'SMP-rapportering', 'Avfall Sverige 2024:12'].map((tag) => (
              <span key={tag} className="rounded border border-cyan-500/30 bg-cyan-500/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium font-mono text-cyan-400 tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats bar – font-mono for chemical formulas */}
          <div className="mx-auto mt-8 sm:mt-14 grid max-w-3xl grid-cols-4 gap-px rounded-2xl border border-slate-800 bg-slate-800 overflow-hidden">
            {[
              { value: 'CH₄', label: 'Metan' },
              { value: 'N₂O', label: 'Lustgas' },
              { value: 'CO₂', label: 'Koldioxid' },
              { value: 'VOC', label: 'Kolväten' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900/80 px-2 sm:px-4 py-4 sm:py-5 text-center">
                <p className="text-base sm:text-xl font-bold font-mono text-white">{stat.value}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[12px] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance-driven messaging */}
      <section className="section-padding section-darker">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Vilka regelverk kräver utsläppsmätning?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-relaxed">
            <strong className="text-slate-200">CSRD, EU:s metanförordning och svenska SMP-krav tvingar tusentals anläggningar att mäta och verifiera sina växthusgasutsläpp med faktiska data.</strong>{' '}
            EcoDrone levererar den compliance-redo mätdata era revisorer och tillsynsmyndigheter kräver – snabbare, säkrare och med högre precision än traditionella metoder.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'CSRD & Scope 1',
                desc: 'Verifierade utsläppsdata för hållbarhetsrapportering enligt ESRS E1.',
                href: '/compliance/csrd',
                icon: (
                  <svg className="h-5 w-5" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                title: 'EU-metanförordningen',
                desc: 'LDAR-inspektioner och metanmätning som uppfyller EU-kraven.',
                href: '/compliance/eu-metanforordning',
                icon: (
                  <svg className="h-5 w-5" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'SMP & Miljörapportering',
                desc: 'Mätdata för Naturvårdsverkets miljörapporteringssystem.',
                href: '/compliance/miljorapportering',
                icon: (
                  <svg className="h-5 w-5" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card-dark p-5 sm:p-6 text-left"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
                  Läs mer
                  <svg className="ml-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
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
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Vilka branscher behöver drönarbaserad utsläppsmätning?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            <strong className="text-slate-200">Sex branscher i Sverige har lagkrav eller starka affärsdrivkrafter att mäta sina diffusa växthusgasutsläpp med faktiska mätdata.</strong>{' '}
            EcoDrone levererar systematisk datainsamling, kvalitetssäkring och compliance-redo rapporter för samtliga.
          </p>
          <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group card-dark p-5 sm:p-6 flex flex-row sm:flex-col items-start gap-4 sm:gap-0"
              >
                <div className="flex-1 sm:flex-none">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-sm text-slate-400">{item.desc}</p>
                  <span className="mt-3 sm:mt-4 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
                    Läs mer
                    <svg className="ml-1 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
                <div className="flex h-10 w-10 sm:hidden flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <svg className="h-5 w-5" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why drone measurement */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Varför välja drönarbaserad utsläppsmätning?</h2>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Compliance-redo data',
                desc: 'Rapporter med dokumenterad metodik och mätosäkerhet som uppfyller kraven från CSRD, EU-metanförordningen och Naturvårdsverket.',
                icon: (
                  <svg className="h-6 w-6" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: 'Snabbare & säkrare',
                desc: 'Stora ytor mäts på timmar istället för dagar. Ingen personal på farliga ytor. Mätningen sker kontaktfritt från luften.',
                icon: (
                  <svg className="h-6 w-6" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'Hög rumslig upplösning',
                desc: 'Detaljerad spatial data gör det möjligt att lokalisera enskilda läckor – inte bara mäta totala utsläpp.',
                icon: (
                  <svg className="h-6 w-6" width={24} height={24} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Redo att mäta det lagstiftningen kräver?"
        description="Kontakta oss för en inledande genomgång av er anläggning och era compliance-krav. Ingen upphandling krävs för en första konsultation."
      />
    </>
  )
}
