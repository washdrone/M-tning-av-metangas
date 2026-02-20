import Link from 'next/link'

const serviceLinks = [
  { name: 'Metanmätning – deponi', href: '/matning/deponi' },
  { name: 'Emissionsmätning – biogas', href: '/matning/biogas' },
  { name: 'Emissionsmätning – reningsverk', href: '/matning/reningsverk' },
  { name: 'Gasmätning – industri', href: '/matning/industri' },
]

const aboutLinks = [
  { name: 'Dataleveranser', href: '/matning/leveranser' },
  { name: 'Metodik & kvalitet', href: '/matning/metodik' },
  { name: 'Vanliga frågor', href: '/matning/faq' },
  { name: 'Referensuppdrag', href: '/matning/case' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50" role="contentinfo">
      <div className="container-wide section-padding">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <p className="text-lg font-bold text-gray-900">WashDrone</p>
            <p className="mt-2 text-sm text-gray-600">
              Drönarbaserad metan- och miljömätning. Kvantifiera utsläpp, säkra compliance och fatta bättre beslut.
            </p>
          </div>

          {/* Col 2: Mättjänster */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Mättjänster</p>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-700">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Om mätningen */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Om mätningen</p>
            <ul className="mt-3 space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-brand-700">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Kontakt</p>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <p>
                <a href="mailto:info@washdrone.se" className="hover:text-brand-700">
                  info@washdrone.se
                </a>
              </p>
              <p>
                <a href="tel:+46XXXXXXXXX" className="hover:text-brand-700">
                  +46 (0)XX-XXX XX XX
                </a>
              </p>
              <Link href="/matning/kontakt" className="btn-primary mt-4 !py-2 !text-sm">
                Boka genomgång
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} WashDrone. Alla rättigheter förbehållna.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/integritetspolicy" className="hover:text-gray-700">Integritetspolicy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
