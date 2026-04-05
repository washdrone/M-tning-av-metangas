'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { LogoFull } from './Logo'

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

  const tjansterRef = useRef<HTMLDivElement>(null)
  const branscherRef = useRef<HTMLDivElement>(null)
  const tjansterTimeout = useRef<ReturnType<typeof setTimeout>>(null)
  const branscherTimeout = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeDropdowns = useCallback(() => {
    setTjansterOpen(false)
    setBranscherOpen(false)
  }, [])

  // Hover handlers with small delay to prevent flicker
  const openTjanster = useCallback(() => {
    if (branscherTimeout.current) clearTimeout(branscherTimeout.current)
    if (tjansterTimeout.current) clearTimeout(tjansterTimeout.current)
    setBranscherOpen(false)
    setTjansterOpen(true)
  }, [])

  const closeTjanster = useCallback(() => {
    tjansterTimeout.current = setTimeout(() => setTjansterOpen(false), 150)
  }, [])

  const openBranscher = useCallback(() => {
    if (tjansterTimeout.current) clearTimeout(tjansterTimeout.current)
    if (branscherTimeout.current) clearTimeout(branscherTimeout.current)
    setTjansterOpen(false)
    setBranscherOpen(true)
  }, [])

  const closeBranscher = useCallback(() => {
    branscherTimeout.current = setTimeout(() => setBranscherOpen(false), 150)
  }, [])

  // Cancel close when re-entering dropdown
  const cancelCloseTjanster = useCallback(() => {
    if (tjansterTimeout.current) clearTimeout(tjansterTimeout.current)
  }, [])

  const cancelCloseBranscher = useCallback(() => {
    if (branscherTimeout.current) clearTimeout(branscherTimeout.current)
  }, [])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeDropdowns()
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [closeDropdowns])

  return (
    <header
      className={`fixed top-0 z-50 w-full pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-[var(--header-h)] items-center justify-between" aria-label="Huvudnavigation">
        <Link href="/" className="flex items-center border-0 outline-none ring-0 no-underline">
          <LogoFull className="h-8 sm:h-10 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {/* Tjänster dropdown – hover on desktop */}
          <div
            className="relative"
            ref={tjansterRef}
            onMouseEnter={openTjanster}
            onMouseLeave={closeTjanster}
          >
            <Link
              href="/tjanster"
              className="px-4 py-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center"
              aria-expanded={tjansterOpen}
              aria-haspopup="true"
            >
              Tjänster
              <svg className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${tjansterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            {tjansterOpen && (
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={cancelCloseTjanster}
                onMouseLeave={closeTjanster}
              >
                <div className="w-64 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl py-2 shadow-2xl">
                  <Link href="/tjanster" onClick={closeDropdowns} className="block px-4 py-2.5 text-[14px] text-slate-300 hover:text-white hover:bg-slate-800/50">
                    Alla tjänster
                  </Link>
                  <div className="my-1 border-t border-slate-800" />
                  {tjanster.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeDropdowns} className="block px-4 py-2.5 text-[14px] text-slate-400 hover:text-white hover:bg-slate-800/50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Branscher dropdown – hover on desktop */}
          <div
            className="relative"
            ref={branscherRef}
            onMouseEnter={openBranscher}
            onMouseLeave={closeBranscher}
          >
            <Link
              href="/branscher"
              className="px-4 py-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center"
              aria-expanded={branscherOpen}
              aria-haspopup="true"
            >
              Branscher
              <svg className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${branscherOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            {branscherOpen && (
              <div
                className="absolute left-0 top-full pt-2"
                onMouseEnter={cancelCloseBranscher}
                onMouseLeave={closeBranscher}
              >
                <div className="w-64 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl py-2 shadow-2xl">
                  <Link href="/branscher" onClick={closeDropdowns} className="block px-4 py-2.5 text-[14px] text-slate-300 hover:text-white hover:bg-slate-800/50">
                    Alla branscher
                  </Link>
                  <div className="my-1 border-t border-slate-800" />
                  {branscher.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeDropdowns} className="block px-4 py-2.5 text-[14px] text-slate-400 hover:text-white hover:bg-slate-800/50">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-4 py-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
          <div className="ml-6 flex items-center gap-3">
            <Link href="/faq" className="text-[14px] font-medium text-slate-400 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/kontakt" className="btn-primary btn-sm">
              Boka genomgång
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-slate-300 hover:text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
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

      {/* Fix C1 & C2: Mobile menu – fixed overlay with internal scroll */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3">
            <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Tjänster</p>
            <Link href="/tjanster" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-200 hover:bg-slate-800/50">
              Alla tjänster
            </Link>
            {tjanster.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-400 hover:bg-slate-800/50">
                {item.name}
              </Link>
            ))}
            <div className="my-3 border-t border-slate-800" />
            <p className="px-3 pb-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Branscher</p>
            <Link href="/branscher" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-200 hover:bg-slate-800/50">
              Alla branscher
            </Link>
            {branscher.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-400 hover:bg-slate-800/50">
                {item.name}
              </Link>
            ))}
            <div className="my-3 border-t border-slate-800" />
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-300 hover:bg-slate-800/50">
                {item.name}
              </Link>
            ))}
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-400 hover:bg-slate-800/50">
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
