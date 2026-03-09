'use client'

import { useState, useRef } from 'react'
import { trackEvent } from './Analytics'

const uppdragsTyper = [
  'Metanmätning – deponi',
  'Emissionsmätning – biogas',
  'Emissionsmätning – reningsverk',
  'Gasmätning – industri (LDAR)',
  'LDAR-inspektion – raffinaderi',
  'OGI-kamerainspektion',
  'Växthusgasmätning',
  'CSRD / Scope 1 – utsläppsdata',
  'Annat',
]

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
  gdpr: boolean
}

const inputClass = 'mt-1.5 block w-full rounded-xl border border-dark-700 bg-dark-800/50 px-4 py-2.5 text-sm text-white placeholder:text-dark-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:bg-dark-800 transition-colors'

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    foretag: '',
    kontaktperson: '',
    epost: '',
    telefon: '',
    uppdragstyp: '',
    plats: '',
    tidsram: '',
    beskrivning: '',
    gdpr: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const formStarted = useRef(false)

  function handleFocus() {
    if (!formStarted.current) {
      formStarted.current = true
      trackEvent('form_start', { form_name: 'kontakt_matning' })
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setForm((prev) => ({ ...prev, [target.name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!form.foretag || !form.kontaktperson || !form.epost || !form.uppdragstyp) {
      setError('Fyll i alla obligatoriska fält.')
      return
    }

    if (!form.gdpr) {
      setError('Du behöver godkänna att vi behandlar dina uppgifter.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setError(data?.error || 'Något gick fel vid skickandet. Försök igen eller kontakta oss via e-post.')
        return
      }

      trackEvent('form_submit', { form_name: 'kontakt_matning', uppdragstyp: form.uppdragstyp })
      setSubmitted(true)
    } catch {
      setError('Kunde inte nå servern. Kontrollera din internetanslutning och försök igen.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="card-dark p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10">
          <svg className="h-7 w-7 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Tack för din förfrågan</h3>
        <p className="mt-2 text-dark-400">
          Vi återkommer inom 1 arbetsdag med ett förslag på upplägg och nästa steg.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300" role="alert">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="foretag" className="block text-sm font-medium text-dark-300">
            Företag <span className="text-brand-400">*</span>
          </label>
          <input type="text" id="foretag" name="foretag" required value={form.foretag} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="kontaktperson" className="block text-sm font-medium text-dark-300">
            Kontaktperson <span className="text-brand-400">*</span>
          </label>
          <input type="text" id="kontaktperson" name="kontaktperson" required value={form.kontaktperson} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className="block text-sm font-medium text-dark-300">
            E-post <span className="text-brand-400">*</span>
          </label>
          <input type="email" id="epost" name="epost" required value={form.epost} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-dark-300">
            Telefon
          </label>
          <input type="tel" id="telefon" name="telefon" value={form.telefon} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="uppdragstyp" className="block text-sm font-medium text-dark-300">
          Typ av mätuppdrag <span className="text-brand-400">*</span>
        </label>
        <select id="uppdragstyp" name="uppdragstyp" required value={form.uppdragstyp} onChange={handleChange} onFocus={handleFocus} className={inputClass}>
          <option value="">Välj typ...</option>
          {uppdragsTyper.map((typ) => (
            <option key={typ} value={typ}>{typ}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="plats" className="block text-sm font-medium text-dark-300">
            Plats (kommun eller anläggning)
          </label>
          <input type="text" id="plats" name="plats" value={form.plats} onChange={handleChange} onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="tidsram" className="block text-sm font-medium text-dark-300">
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
        <label htmlFor="beskrivning" className="block text-sm font-medium text-dark-300">
          Kort beskrivning
        </label>
        <textarea id="beskrivning" name="beskrivning" rows={3} value={form.beskrivning} onChange={handleChange} onFocus={handleFocus} placeholder="Beskriv kort vad ni behöver mäta, var och varför." className={inputClass} />
      </div>

      <label htmlFor="gdpr" className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" id="gdpr" name="gdpr" checked={form.gdpr} onChange={handleChange} className="mt-1 h-4 w-4 flex-shrink-0 rounded border-dark-600 bg-dark-800 text-brand-600 focus:ring-brand-500 cursor-pointer" />
        <span className="text-sm text-dark-400">
          Jag godkänner att EcoDrone behandlar mina uppgifter för att hantera denna förfrågan.{' '}
          <a href="/integritetspolicy" className="text-brand-400 underline hover:text-brand-300">
            Läs vår integritetspolicy
          </a>.
        </span>
      </label>

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
    </form>
  )
}
