import Link from 'next/link'
import { LogoFull } from './Logo'

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
  { name: 'Hamnar & LNG-terminaler', href: '/branscher/hamnar' },
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
  { name: 'Ordlista', href: '/ordlista' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950" role="contentinfo">
      <div className="container-wide py-12 sm:py-20 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(5rem+env(safe-area-inset-bottom,0px))]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <LogoFull className="h-9 sm:h-10 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Drönarbaserad utsläppsmätning av metan och miljöfarliga ämnen för industriell
              ESG- och compliance-rapportering.
            </p>
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">Tjänster</p>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {tjanstLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] sm:text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">Branscher</p>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {branschLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] sm:text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">Compliance</p>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] sm:text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">Om oss</p>
            <ul className="mt-3 sm:mt-4 space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] sm:text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500">Kontakt</p>
            <div className="mt-3 sm:mt-4 space-y-2.5 text-sm text-slate-400">
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} EcoDrone. Alla rättigheter förbehållna.</p>
          <Link href="/integritetspolicy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  )
}
