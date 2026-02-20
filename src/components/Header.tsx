'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  { name: 'Deponi', href: '/matning/deponi' },
  { name: 'Biogas', href: '/matning/biogas' },
  { name: 'Reningsverk', href: '/matning/reningsverk' },
  { name: 'Industri', href: '/matning/industri' },
]

const navItems = [
  { name: 'Leveranser', href: '/matning/leveranser' },
  { name: 'Metodik', href: '/matning/metodik' },
  { name: 'Referensuppdrag', href: '/matning/case' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container-wide flex h-16 items-center justify-between" aria-label="Huvudnavigation">
        <Link href="/" className="text-lg font-bold text-gray-900">
          WashDrone
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Mättjänster
              <svg className="ml-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                <Link href="/matning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Översikt
                </Link>
                {services.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
          <Link href="/matning/kontakt" className="btn-primary ml-4 !py-2 !text-sm">
            Boka genomgång
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Öppna meny"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Mättjänster</p>
            <Link href="/matning" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Översikt
            </Link>
            {services.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                {item.name}
              </Link>
            ))}
            <hr className="my-2" />
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {item.name}
              </Link>
            ))}
            <Link href="/matning/kontakt" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full !text-sm">
              Boka genomgång
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
