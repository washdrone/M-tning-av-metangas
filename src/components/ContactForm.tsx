'use client'

import { useState, useRef, useEffect } from 'react'
import { trackEvent } from './Analytics'

import { assignmentTypes as uppdragsTyper, HELP_WITH_MEASUREMENT, interestTypes } from '@/contact-config'

const tidsramar = [
  'Inom 1 månad',
  '1–3 månader',
  'Planerar framåt',
  'Akut behov',
]

interface FormData {
  foretag: string
  kontaktperson: string
  epost: string
  telefon: string
  uppdragstyp: string
  plats: string
  tidsram: string
  beskrivning: string
}

const inputClass = 'mt-1.5 block w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-base sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:bg-slate-800 transition-colors'

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    foretag: '',
    kontaktperson: '',
    epost: '',
    telefon: '',
    uppdragstyp: HELP_WITH_MEASUREMENT,
    plats: '',
    tidsram: '',
    beskrivning: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const formStarted = useRef(false)
  const sending = useRef(false)
  const errorRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('behov')
    if (interest && interestTypes[interest]) setForm(prev => ({ ...prev, uppdragstyp: interestTypes[interest] }))
  }, [])
  useEffect(() => { if (error) errorRef.current?.focus() }, [error])
  useEffect(() => { if (submitted) successRef.current?.focus() }, [submitted])

  function handleFocus() {
    if (!formStarted.current) {
      formStarted.current = true
      trackEvent('form_start', { form_name: 'kontakt_matning' })
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (sending.current) return
    setError('')

    if (!form.foretag || !form.kontaktperson || !form.epost || !form.uppdragstyp) {
      setError('Fyll i alla obligatoriska fält.')
      return
    }

    sending.current = true
    setSubmitting(true)

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, gdpr: true }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setError(data?.error || 'Något gick fel vid skickandet. Försök igen eller kontakta oss via e-post.')
        return
      }

      trackEvent('generate_lead', { form_name: 'kontakt_matning', uppdragstyp: form.uppdragstyp })
      setSubmitted(true)
    } catch {
      setError('Kunde inte nå servern. Kontrollera din internetanslutning och försök igen.')
    } finally {
      sending.current = false
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="card-dark p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10">
          <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Tack för din förfrågan</h3>
        <p className="mt-2 text-slate-400">
          Din förfrågan har skickats. Vi återkommer för att stämma av behov, mätupplägg och nästa steg.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={submitting}>
      {error && (
        <div ref={errorRef} tabIndex={-1} className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300" role="alert">
          {error} Du kan också mejla <a href="mailto:info@ecodrone.se" className="underline">info@ecodrone.se</a>.
        </div>
      )}

      <p className="text-sm text-slate-300">Fält med * är obligatoriska. Du behöver inte veta vilken metod som passar.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="foretag" className="block text-sm font-medium text-slate-300">
            Företag <span className="text-cyan-400">*</span>
          </label>
          <input type="text" id="foretag" name="foretag" autoComplete="organization" maxLength={160} required value={form.foretag} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="kontaktperson" className="block text-sm font-medium text-slate-300">
            Kontaktperson <span className="text-cyan-400">*</span>
          </label>
          <input type="text" id="kontaktperson" name="kontaktperson" autoComplete="name" maxLength={160} required value={form.kontaktperson} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className="block text-sm font-medium text-slate-300">
            E-post <span className="text-cyan-400">*</span>
          </label>
          <input type="email" id="epost" name="epost" autoComplete="email" maxLength={254} required value={form.epost} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-slate-300">
            Telefon
          </label>
          <input type="tel" id="telefon" name="telefon" autoComplete="tel" maxLength={60} value={form.telefon} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="uppdragstyp" className="block text-sm font-medium text-slate-300">
          Vad behöver ni hjälp med? <span className="text-cyan-400">*</span>
        </label>
        <select id="uppdragstyp" name="uppdragstyp" required value={form.uppdragstyp} onChange={handleChange} onFocus={handleFocus} className={inputClass}>
          {uppdragsTyper.map((typ) => (
            <option key={typ} value={typ}>{typ}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="plats" className="block text-sm font-medium text-slate-300">
            Plats (kommun eller anläggning)
          </label>
          <input type="text" id="plats" name="plats" autoComplete="off" maxLength={300} value={form.plats} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="tidsram" className="block text-sm font-medium text-slate-300">
            Önskad tidsram
          </label>
          <select id="tidsram" name="tidsram" value={form.tidsram} onChange={handleChange} onFocus={handleFocus} className={inputClass}>
            <option value="">Välj tidsram...</option>
            {tidsramar.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="beskrivning" className="block text-sm font-medium text-slate-300">
          Kort beskrivning
        </label>
        <textarea id="beskrivning" name="beskrivning" maxLength={5000} rows={4} value={form.beskrivning} onChange={handleChange} onFocus={handleFocus} placeholder="Beskriv kort vad ni behöver mäta, var och varför." className={inputClass} />
      </div>

      <div className="flex items-start gap-3 min-h-[44px]">
        <input type="checkbox" id="gdpr" name="gdpr" required className="mt-1 h-5 w-5 min-w-[20px] rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500" />
        <label htmlFor="gdpr" className="text-sm text-slate-300 cursor-pointer">
          Jag samtycker till att mina uppgifter behandlas för att hantera min förfrågan.{' '}
          <a href="/integritetspolicy" className="text-cyan-400 underline hover:text-cyan-300">
            Läs vår integritetspolicy
          </a>.
        </label>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
    </form>
  )
}
