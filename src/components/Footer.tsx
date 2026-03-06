import Link from 'next/link'

const tjanstLinks = [
  { name: 'Utsläppsmätning med drönare', href: '/tjanster/utslappsmating-dronare' },
  { name: 'Metanmätning', href: '/tjanster/metanmatning' },
  { name: 'LDAR-inspektion', href: '/tjanster/ldar-inspektion' },
  { name: 'OGI-kamera', href: '/tjanster/ogi-kamera' },
  { name: 'Gasdetektion', href: '/tjanster/gasdetektion' },
]

const branschLinks = [
  { name: 'Deponier & avfall', href: '/branscher/deponier' },
  { name: 'Biogas', href: '/branscher/biogas' },
  { name: 'Reningsverk', href: '/branscher/reningsverk' },
  { name: 'Olja, gas & raffinaderier', href: '/branscher/olja-gas' },
  { name: 'Gruvdrift', href: '/branscher/gruva' },
]

const complianceLinks = [
  { name: 'CSRD & Scope 1', href: '/compliance/csrd' },
  { name: 'EU-metanförordningen', href: '/compliance/eu-metanforordning' },
  { name: 'OGMP 2.0', href: '/compliance/ogmp' },
  { name: 'Miljörapportering (SMP)', href: '/compliance/miljorapportering' },
]

const aboutLinks = [
  { name: 'Om EcoDrone', href: '/om-oss' },
  { name: 'Referensuppdrag', href: '/case' },
  { name: 'Metodik & kvalitet', href: '/tjanster/metodik' },
  { name: 'Vanliga frågor', href: '/faq' },
]

export function Footer() {
  return (
    <footer className="border-t border-mossa bg-skiffer" role="contentinfo">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="font-display text-xl text-white tracking-wide">
              EcoDrone
            </span>
            <p className="mt-3 text-sm leading-relaxed text-dimma/70">
              Drönarbaserad utsläppsmätning av metan och miljöfarliga ämnen.
              Revisionsklara rapporter för egenkontroll och compliance.
            </p>
          </div>

          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-feltsten" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Tjänster</p>
            <ul className="mt-4 space-y-2.5">
              {tjanstLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dimma/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-feltsten" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Branscher</p>
            <ul className="mt-4 space-y-2.5">
              {branschLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dimma/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-feltsten" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Compliance</p>
            <ul className="mt-4 space-y-2.5">
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dimma/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-feltsten" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Om oss</p>
              </li>
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dimma/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-feltsten" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Kontakt</p>
            <div className="mt-4 space-y-2.5 text-sm text-dimma/70">
              <p>
                <a href="mailto:info@ecodrone.se" className="hover:text-white transition-colors">
                  info@ecodrone.se
                </a>
              </p>
              <div className="pt-2">
                <Link href="/kontakt" className="inline-flex items-center justify-center bg-jarnmalm px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#253f5a] transition-colors" style={{ borderRadius: '6px', fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-dimma/50">&copy; {new Date().getFullYear()} EcoDrone Sverige AB. Alla rättigheter förbehållna.</p>
          <Link href="/integritetspolicy" className="text-xs text-dimma/50 hover:text-dimma transition-colors">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  )
}
