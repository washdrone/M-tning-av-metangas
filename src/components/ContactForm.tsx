'use client'

import { useState, useRef } from 'react'
import { trackEvent } from './Analytics'

const uppdragsTyper = [
  'Metanmätning – deponi',
  'Emissionsmätning – biogas',
  'Emissionsmätning – reningsverk',
  'Gasmätning – industri (LDAR)',
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

      if (!res.ok) throw new Error('Något gick fel. Försök igen.')

      trackEvent('form_submit', { form_name: 'kontakt_matning', uppdragstyp: form.uppdragstyp })
      setSubmitted(true)
    } catch {
      setError('Något gick fel vid skickandet. Försök igen eller kontakta oss via e-post.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Tack för din förfrågan</h3>
        <p className="mt-2 text-gray-600">
          Vi återkommer inom 1 arbetsdag med ett förslag på upplägg och nästa steg.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="foretag" className="block text-sm font-medium text-gray-700">
            Företag <span className="text-red-500" aria-label="obligatoriskt">*</span>
          </label>
          <input
            type="text"
            id="foretag"
            name="foretag"
            required
            value={form.foretag}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          />
        </div>
        <div>
          <label htmlFor="kontaktperson" className="block text-sm font-medium text-gray-700">
            Kontaktperson <span className="text-red-500" aria-label="obligatoriskt">*</span>
          </label>
          <input
            type="text"
            id="kontaktperson"
            name="kontaktperson"
            required
            value={form.kontaktperson}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className="block text-sm font-medium text-gray-700">
            E-post <span className="text-red-500" aria-label="obligatoriskt">*</span>
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            value={form.epost}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="uppdragstyp" className="block text-sm font-medium text-gray-700">
          Typ av mätuppdrag <span className="text-red-500" aria-label="obligatoriskt">*</span>
        </label>
        <select
          id="uppdragstyp"
          name="uppdragstyp"
          required
          value={form.uppdragstyp}
          onChange={handleChange}
          onFocus={handleFocus}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
        >
          <option value="">Välj typ...</option>
          {uppdragsTyper.map((typ) => (
            <option key={typ} value={typ}>{typ}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="plats" className="block text-sm font-medium text-gray-700">
            Plats (kommun eller anläggning)
          </label>
          <input
            type="text"
            id="plats"
            name="plats"
            value={form.plats}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          />
        </div>
        <div>
          <label htmlFor="tidsram" className="block text-sm font-medium text-gray-700">
            Önskad tidsram
          </label>
          <select
            id="tidsram"
            name="tidsram"
            value={form.tidsram}
            onChange={handleChange}
            onFocus={handleFocus}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
          >
            <option value="">Välj tidsram...</option>
            {tidsramar.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="beskrivning" className="block text-sm font-medium text-gray-700">
          Kort beskrivning
        </label>
        <textarea
          id="beskrivning"
          name="beskrivning"
          rows={3}
          value={form.beskrivning}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Beskriv kort vad ni behöver mäta, var och varför."
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="gdpr"
          name="gdpr"
          checked={form.gdpr}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-600"
        />
        <label htmlFor="gdpr" className="text-sm text-gray-600">
          Jag godkänner att WashDrone behandlar mina uppgifter för att hantera denna förfrågan.{' '}
          <a href="/integritetspolicy" className="text-brand-700 underline hover:text-brand-800">
            Läs vår integritetspolicy
          </a>.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
    </form>
  )
}
