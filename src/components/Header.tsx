'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const tjanster = [
  { name: 'Utsläppsmätning med drönare', href: '/tjanster/utslappsmating-dronare' },
  { name: 'Metanmätning', href: '/tjanster/metanmatning' },
  { name: 'LDAR-inspektion', href: '/tjanster/ldar-inspektion' },
  { name: 'OGI-kamera', href: '/tjanster/ogi-kamera' },
  { name: 'Gasdetektion', href: '/tjanster/gasdetektion' },
]

const branscher = [
  { name: 'Deponier & avfall', href: '/branscher/deponier' },
  { name: 'Biogas', href: '/branscher/biogas' },
  { name: 'Reningsverk', href: '/branscher/reningsverk' },
  { name: 'Olja, gas & raffinaderier', href: '/branscher/olja-gas' },
  { name: 'Gruvdrift', href: '/branscher/gruva' },
]

const navItems = [
  { name: 'Compliance', href: '/compliance' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Referensuppdrag', href: '/case' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [tjansterOpen, setTjansterOpen] = useState(false)
  const [branscherOpen, setBranscherOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-dark-800/60 bg-dark-950/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-[72px] items-center justify-between" aria-label="Huvudnavigation">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="EcoDrone" width={140} height={40} className="h-9 w-auto" priority />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {/* Tjänster dropdown */}
          <div className="relative">
            <button
              onClick={() => { setTjansterOpen(!tjansterOpen); setBranscherOpen(false) }}
              onBlur={() => setTimeout(() => setTjansterOpen(false), 200)}
              className="px-4 py-2 text-[14px] font-medium text-dark-300 hover:text-white transition-colors"
              aria-expanded={tjansterOpen}
              aria-haspopup="true"
            >
              Tjänster
              <svg className="ml-1 inline-block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {tjansterOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-dark-700/50 bg-dark-900/95 backdrop-blur-xl py-2 shadow-2xl">
                <Link href="/tjanster" className="block px-4 py-2.5 text-[14px] text-dark-300 hover:text-white hover:bg-dark-800/50">
                  Alla tjänster
                </Link>
                <div className="my-1 border-t border-dark-800" />
                {tjanster.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-[14px] text-dark-300 hover:text-white hover:bg-dark-800/50">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Branscher dropdown */}
          <div className="relative">
            <button
              onClick={() => { setBranscherOpen(!branscherOpen); setTjansterOpen(false) }}
              onBlur={() => setTimeout(() => setBranscherOpen(false), 200)}
              className="px-4 py-2 text-[14px] font-medium text-dark-300 hover:text-white transition-colors"
              aria-expanded={branscherOpen}
              aria-haspopup="true"
            >
              Branscher
              <svg className="ml-1 inline-block h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {branscherOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-dark-700/50 bg-dark-900/95 backdrop-blur-xl py-2 shadow-2xl">
                <Link href="/branscher" className="block px-4 py-2.5 text-[14px] text-dark-300 hover:text-white hover:bg-dark-800/50">
                  Alla branscher
                </Link>
                <div className="my-1 border-t border-dark-800" />
                {branscher.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2.5 text-[14px] text-dark-300 hover:text-white hover:bg-dark-800/50">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-4 py-2 text-[14px] font-medium text-dark-300 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
          <div className="ml-6 flex items-center gap-3">
            <Link href="/faq" className="text-[14px] font-medium text-dark-400 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/kontakt" className="btn-primary !py-2.5 !px-6 !text-[13px]">
              Boka genomgång
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-dark-300 hover:text-white lg:hidden"
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

      {mobileOpen && (
        <div className="border-t border-dark-800 bg-dark-950/98 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-5 pb-6 pt-3">
            <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-500">Tjänster</p>
            <Link href="/tjanster" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-dark-200 hover:bg-dark-800/50">
              Alla tjänster
            </Link>
            {tjanster.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-dark-300 hover:bg-dark-800/50">
                {item.name}
              </Link>
            ))}
            <div className="my-3 border-t border-dark-800" />
            <p className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-500">Branscher</p>
            <Link href="/branscher" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-dark-200 hover:bg-dark-800/50">
              Alla branscher
            </Link>
            {branscher.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-dark-300 hover:bg-dark-800/50">
                {item.name}
              </Link>
            ))}
            <div className="my-3 border-t border-dark-800" />
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-dark-300 hover:bg-dark-800/50">
                {item.name}
              </Link>
            ))}
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-dark-300 hover:bg-dark-800/50">
              FAQ
            </Link>
            <div className="pt-3">
              <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
                Boka genomgång
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
