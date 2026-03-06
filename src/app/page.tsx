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

      {/* Hero – skandinavisk industriell auktoritet */}
      <section className="bg-skiffer pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <p className="mb-6 text-feltsten uppercase tracking-[0.12em]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem' }}>
            Drönarbaserad utsläppsmätning · Sverige
          </p>
          <h1 className="font-display text-white font-bold leading-[1.15]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Compliance-redo mätdata för<br />
            <em className="text-dimma">er miljörapportering.</em>
          </h1>
          <p className="mt-6 max-w-xl text-dimma/80 font-light" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
            EcoDrone levererar drönarbaserad mätning av metan och industriutsläpp.
            Georefererad mätdata med dokumenterad mätosäkerhet – redo för
            revisorn, tillsynsmyndigheten och er miljörapport.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/kontakt" className="btn-primary">
              Kontakta oss
            </Link>
            <Link href="/tjanster" className="inline-flex items-center justify-center border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/80 hover:text-white hover:border-white/40 transition-all duration-200" style={{ borderRadius: '6px', fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Våra tjänster
            </Link>
          </div>

          {/* Compliance tags */}
          <div className="mt-12 flex flex-wrap gap-3">
            {['CSRD / ESRS E1', 'EU 2024/1787', 'OGMP 2.0', 'SMP-rapportering'].map((tag) => (
              <span key={tag} className="border border-feltsten/40 bg-feltsten/10 px-3 py-1.5 text-feltsten tracking-wide" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', borderRadius: '4px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Gas types */}
          <div className="mt-14 grid max-w-3xl grid-cols-2 border border-white/10 sm:grid-cols-4 overflow-hidden" style={{ borderRadius: '8px' }}>
            {[
              { value: 'CH\u2084', label: 'Metan' },
              { value: 'N\u2082O', label: 'Lustgas' },
              { value: 'CO\u2082', label: 'Koldioxid' },
              { value: 'VOC', label: 'Kolväten' },
            ].map((stat, i) => (
              <div key={stat.label} className={`px-4 py-5 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{stat.value}</p>
                <p className="mt-1 text-dimma/60" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.05em' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster – kopplade till standarder */}
      <section className="py-20 sm:py-28 bg-papper">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <p className="text-feltsten uppercase tracking-[0.12em] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem' }}>Tjänster</p>
          <h2 className="font-display text-skiffer font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
            Mättjänster kopplade till era regelverk
          </h2>
          <p className="text-aska max-w-xl mb-10 font-light" style={{ lineHeight: '1.75' }}>
            Varje tjänst är utformad för att leverera data som uppfyller specifika
            regulatoriska krav. Ni får mätresultat formaterade för direkt
            användning i er rapportering.
          </p>
          <div className="grid gap-0 border border-mossa overflow-hidden sm:grid-cols-3" style={{ borderRadius: '8px' }}>
            {[
              {
                label: 'CSRD / ESRS E1',
                title: 'Scope 1-mätning',
                desc: 'Direktmätta utsläppsdata för er hållbarhetsrapportering. Revisionsklart underlag som uppfyller ESRS E1-krav.',
                href: '/compliance/csrd',
              },
              {
                label: 'EU 2024/1787',
                title: 'LDAR-inspektion',
                desc: 'Drönarbaserad läcksökning som uppfyller EU-metanförordningens krav på LDAR-inspektioner.',
                href: '/tjanster/ldar-inspektion',
              },
              {
                label: 'SMP / Miljöbalken',
                title: 'Egenkontroll',
                desc: 'Mätdata formaterade för direkt användning i er miljörapportering till Naturvårdsverkets SMP.',
                href: '/compliance/miljorapportering',
              },
            ].map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group bg-white p-8 transition-colors hover:bg-dimma ${i < 2 ? 'sm:border-r border-mossa' : ''}`}
              >
                <p className="text-feltsten uppercase tracking-[0.08em] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.62rem' }}>{item.label}</p>
                <h3 className="font-display text-skiffer font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-aska text-sm" style={{ lineHeight: '1.6' }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Branscher */}
      <section className="py-20 sm:py-28 bg-dimma border-t border-mossa">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <p className="text-feltsten uppercase tracking-[0.12em] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem' }}>Branscher</p>
          <h2 className="font-display text-skiffer font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
            Vi förstår ert regelverk
          </h2>
          <p className="text-aska max-w-xl mb-10 font-light" style={{ lineHeight: '1.75' }}>
            Varje bransch har sina specifika krav på mätning och rapportering.
            Vi anpassar metodik, leveranser och rapportformat efter ert regelverk.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Deponier & avfall', desc: 'Kartlägg var metanet läcker genom täckskiktet. Underlag för egenkontroll och SMP-rapportering.', href: '/branscher/deponier' },
              { title: 'Biogas', desc: 'Hitta och kvantifiera metanläckor. Varje procent ni hittar innebär mer gas i produktionen.', href: '/branscher/biogas' },
              { title: 'Reningsverk', desc: 'Mät metan och lustgas från biologiska processer. Ersätt schabloner med verkliga mätvärden.', href: '/branscher/reningsverk' },
              { title: 'Olja, gas & raffinaderier', desc: 'LDAR-inspektioner och metanmätning som uppfyller EU-metanförordningen och OGMP 2.0.', href: '/branscher/olja-gas' },
              { title: 'Gruvdrift', desc: 'Kartlägg diffusa utsläpp från dammdeponier och processer med drönarbaserad mätning.', href: '/branscher/gruva' },
              { title: 'Hamnar & LNG-terminaler', desc: 'Mätning av komplex infrastruktur som är svår att inspektera med traditionella metoder.', href: '/branscher/hamnar' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-mossa bg-white p-6 transition-all hover:border-feltsten hover:shadow-md"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="font-display text-skiffer font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-aska" style={{ lineHeight: '1.6' }}>{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-jarnmalm group-hover:text-skiffer transition-colors">
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

      {/* Varför EcoDrone */}
      <section className="py-20 sm:py-28 bg-papper border-t border-mossa">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <p className="text-feltsten uppercase tracking-[0.12em] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem' }}>Varför EcoDrone</p>
          <h2 className="font-display text-skiffer font-bold mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
            Mätdata som håller för granskning
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Compliance-redo data',
                desc: 'Rapporter med dokumenterad metodik och mätosäkerhet som uppfyller kraven från CSRD, EU-metanförordningen och Naturvårdsverket.',
              },
              {
                title: 'Snabbare och säkrare',
                desc: 'Stora ytor mäts utan driftstopp och utan personal på farliga ytor. Mätningen sker kontaktfritt från luften.',
              },
              {
                title: 'Hög rumslig upplösning',
                desc: 'Detaljerad spatial data gör det möjligt att lokalisera enskilda läckor – inte bara mäta totala utsläpp.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-skiffer font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-aska leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dataskydd – proaktivt */}
      <section className="py-16 sm:py-20 bg-dimma border-t border-b border-mossa">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <div className="border-l-[3px] border-feltsten pl-6">
            <p className="text-feltsten uppercase tracking-[0.12em] mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem' }}>Dataskydd & sekretess</p>
            <h2 className="font-display text-skiffer font-bold mb-3" style={{ fontSize: '1.25rem' }}>
              Er mätdata stannar hos er
            </h2>
            <p className="text-aska max-w-2xl" style={{ lineHeight: '1.75' }}>
              All mätdata behandlas konfidentiellt och i enlighet med GDPR. Vi erbjuder
              NDA och DPA-avtal. Mätdata lagras på servrar inom EU och raderas
              efter överenskommen tidsperiod. Vi delar aldrig data med tredje part
              utan ert skriftliga medgivande.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-skiffer">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-white font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.2' }}>
            Behöver ni mätdata för er miljörapportering?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-dimma/80 font-light" style={{ lineHeight: '1.75' }}>
            Kontakta oss för en inledande genomgång av er anläggning och era
            rapporteringskrav. Ingen upphandling krävs för en första konsultation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakta oss
            </Link>
            <p className="text-dimma/60 text-sm">
              <a href="mailto:info@ecodrone.se" className="hover:text-white transition-colors">info@ecodrone.se</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
