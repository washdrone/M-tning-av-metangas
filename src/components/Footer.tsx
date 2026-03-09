import Link from 'next/link'
import Image from 'next/image'

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
    <footer className="border-t border-dark-800 bg-dark-950" role="contentinfo">
      <div className="container-wide py-16 sm:py-20 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image src="/Logotup ecodrone.png" alt="EcoDrone" width={120} height={34} className="h-8 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-dark-400">
              Drönarbaserad utsläppsmätning av metan och miljöfarliga ämnen för industriell
              ESG- och compliance-rapportering.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Tjänster</p>
            <ul className="mt-4 space-y-2.5">
              {tjanstLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Branscher</p>
            <ul className="mt-4 space-y-2.5">
              {branschLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Compliance</p>
            <ul className="mt-4 space-y-2.5">
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Om oss</p>
            <ul className="mt-4 space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Kontakt</p>
            <div className="mt-4 space-y-2.5 text-sm text-dark-300">
              <p>
                <a href="mailto:info@ecodrone.se" className="hover:text-white transition-colors">
                  info@ecodrone.se
                </a>
              </p>
              <div className="pt-2">
                <Link href="/kontakt" className="btn-primary btn-sm">
                  Boka genomgång
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-dark-800 pt-8 sm:flex-row">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} EcoDrone. Alla rättigheter förbehållna.</p>
          <Link href="/integritetspolicy" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  )
}
