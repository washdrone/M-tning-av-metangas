import Link from 'next/link'

const serviceLinks = [
  { name: 'Deponi & avfall', href: '/matning/deponi' },
  { name: 'Biogas', href: '/matning/biogas' },
  { name: 'Reningsverk', href: '/matning/reningsverk' },
  { name: 'Industri & LDAR', href: '/matning/industri' },
]

const aboutLinks = [
  { name: 'Dataleveranser', href: '/matning/leveranser' },
  { name: 'Metodik & kvalitet', href: '/matning/metodik' },
  { name: 'Vanliga frågor', href: '/matning/faq' },
  { name: 'Referensuppdrag', href: '/matning/case' },
]

export function Footer() {
  return (
    <footer className="border-t border-dark-800 bg-dark-950" role="contentinfo">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">WashDrone</p>
            <p className="mt-3 text-sm leading-relaxed text-dark-400">
              Drönarbaserad metan- och miljömätning. Vi hjälper er förstå era utsläpp
              och fatta bättre beslut.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Mättjänster</p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-dark-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-dark-400">Om mätningen</p>
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
                <a href="mailto:info@washdrone.se" className="hover:text-white transition-colors">
                  info@washdrone.se
                </a>
              </p>
              <p>
                <a href="tel:+46XXXXXXXXX" className="hover:text-white transition-colors">
                  +46 (0)XX-XXX XX XX
                </a>
              </p>
              <div className="pt-2">
                <Link href="/matning/kontakt" className="btn-primary !py-2.5 !px-5 !text-[13px]">
                  Boka genomgång
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-dark-800 pt-8 sm:flex-row">
          <p className="text-xs text-dark-500">&copy; {new Date().getFullYear()} WashDrone. Alla rättigheter förbehållna.</p>
          <Link href="/integritetspolicy" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  )
}
