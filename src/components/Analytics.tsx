'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

const GA_ID = 'G-8X2EQZZFK4'
const CONSENT_KEY = 'ecodrone-analytics-consent-v1'
type Choice = 'granted' | 'denied' | null

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: `ga-disable-${string}`]: boolean }

export function Analytics() {
  const pathname = usePathname()
  const lastTrackedPath = useRef<string | null>(null)
  const [choice, setChoice] = useState<Choice>(null)
  const [ready, setReady] = useState(false)
  const [settings, setSettings] = useState(false)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_KEY)
      if (saved === 'granted' || saved === 'denied') setChoice(saved)
    } catch { /* Analytics stays disabled when storage is unavailable. */ }
    setReady(true)
  }, [])

  useEffect(() => {
    if (choice !== 'granted') return
    const win = window as unknown as AnalyticsWindow
    if (win.gtag && lastTrackedPath.current !== pathname) {
      win.gtag('event', 'page_view', { page_location: window.location.origin + pathname })
      lastTrackedPath.current = pathname
    }
  }, [pathname, choice])

  function choose(value: Exclude<Choice, null>) {
    try { localStorage.setItem(CONSENT_KEY, value) } catch { /* Session-only choice. */ }
    const win = window as unknown as AnalyticsWindow
    win[`ga-disable-${GA_ID}`] = value !== 'granted'
    win.gtag?.('consent', 'update', { analytics_storage: value })
    if (value === 'denied') {
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.split('=')[0].trim()
        if (!name.startsWith('_ga')) continue
        const host = window.location.hostname
        const domains = ['', host, ...host.split('.').map((_, index, parts) => '.' + parts.slice(index).join('.'))]
        for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''}`
      }
    }
    setChoice(value)
    setSettings(false)
  }

  return <>
    {choice === 'granted' && <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" onReady={() => {
      const win = window as unknown as AnalyticsWindow
      win.dataLayer = win.dataLayer || []
      win.gtag = win.gtag || function () { win.dataLayer?.push(arguments) }
      win[`ga-disable-${GA_ID}`] = false
      win.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
      win.gtag('js', new Date())
      win.gtag('config', GA_ID, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false })
      if (lastTrackedPath.current !== pathname) {
        win.gtag('event', 'page_view', { page_location: window.location.origin + pathname })
        lastTrackedPath.current = pathname
      }
    }} />}
    <div className="bg-white pb-6 text-center"><button type="button" className="text-sm text-slate-700 underline p-3" onClick={() => setSettings(true)}>Inställningar för webbanalys</button></div>
    {ready && (choice === null || settings) && <section aria-label="Val för webbanalys" className="fixed inset-x-0 bottom-0 z-[60] max-h-[60dvh] overflow-y-auto border-t border-slate-400 bg-white p-5 shadow-2xl">
      <div className="mx-auto max-w-5xl flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1"><h2 className="text-lg">Vill du tillåta webbanalys?</h2><p className="mt-2 text-sm text-slate-700">Vi använder Google Analytics för att förstå hur webbplatsen används. Analys laddas bara om du tillåter det. Du kan ändra ditt val längst ner på sidan. <a href="/integritetspolicy" className="text-teal-800 underline">Läs om personuppgifter och cookies</a>.</p></div>
        <div className="flex flex-wrap gap-3"><button type="button" onClick={() => choose('denied')} className="btn-secondary">Avstå</button><button type="button" onClick={() => choose('granted')} className="btn-secondary">Tillåt analys</button></div>
      </div>
    </section>}
  </>
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return
  try { if (localStorage.getItem(CONSENT_KEY) !== 'granted') return } catch { return }
  ;(window as unknown as AnalyticsWindow).gtag?.('event', eventName, params)
}
