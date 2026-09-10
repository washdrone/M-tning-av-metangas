import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { assignmentTypes, HELP_WITH_MEASUREMENT } from '@/contact-config'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const DEFAULT_FROM = 'EcoDrone Sverige <noreply@ecodrone.se>'

export async function POST(request: NextRequest) {
  try {
    let body: unknown
    const raw = await request.text()
    if (new TextEncoder().encode(raw).length > 16000) {
      return NextResponse.json({ error: 'Förfrågan är för lång.' }, { status: 413 })
    }
    try { body = JSON.parse(raw) } catch {
      return NextResponse.json({ error: 'Förfrågan kunde inte läsas.' }, { status: 400 })
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Ogiltig förfrågan.' }, { status: 400 })
    }
    const input = body as Record<string, unknown>
    const limits: Record<string, number> = { foretag: 160, kontaktperson: 160, epost: 254, telefon: 60, uppdragstyp: 160, plats: 300, tidsram: 100, beskrivning: 5000 }
    const fields: Record<string, string> = {}
    for (const [key, limit] of Object.entries(limits)) {
      const value = input[key] ?? ''
      if (typeof value !== 'string' || value.length > limit) {
        return NextResponse.json({ error: 'Kontrollera formulärets fält och textlängder.' }, { status: 400 })
      }
      fields[key] = value.trim()
    }
    const { foretag, kontaktperson, epost, telefon, plats, tidsram, beskrivning } = fields
    const uppdragstyp = fields.uppdragstyp || HELP_WITH_MEASUREMENT
    if (!foretag || !kontaktperson || !epost || input.gdpr !== true) {
      return NextResponse.json({ error: 'Fyll i obligatoriska fält och godkänn behandlingen av din förfrågan.' }, { status: 400 })
    }
    if (!EMAIL_REGEX.test(epost) || /[\r\n]/.test(epost + foretag + uppdragstyp) || !assignmentTypes.some(type => type === uppdragstyp)) {
      return NextResponse.json({ error: 'Kontrollera e-postadress och typ av uppdrag.' }, { status: 400 })
    }
    if (!process.env.RESEND_API_KEY) {
      console.error('[Kontakt] E-postkonfiguration saknas.')
      return NextResponse.json({ error: 'Formuläret är tillfälligt otillgängligt. Mejla info@ecodrone.se.' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@ecodrone.se'
    const FROM_EMAIL = process.env.FROM_EMAIL || DEFAULT_FROM

    const htmlBody = `
      <h2>Ny förfrågan från ecodrone.se</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Företag</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(foretag)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Kontaktperson</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(kontaktperson)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">E-post</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(epost)}">${escapeHtml(epost)}</a></td></tr>
        ${telefon ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Telefon</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(telefon)}</td></tr>` : ''}
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Uppdragstyp</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(uppdragstyp)}</td></tr>
        ${plats ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Plats</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(plats)}</td></tr>` : ''}
        ${tidsram ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Tidsram</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(tidsram)}</td></tr>` : ''}
        ${beskrivning ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Beskrivning</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(beskrivning)}</td></tr>` : ''}
      </table>
      <p style="margin-top:16px;color:#888;font-size:12px;">Skickad via kontaktformuläret på ecodrone.se</p>
    `

    const { data, error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: epost,
      subject: `Ny förfrågan: ${foretag} – ${uppdragstyp}`,
      html: htmlBody,
    })

    if (sendError || !data?.id) {
      console.error('[Kontakt] E-postleverantören avvisade förfrågan.')
      return NextResponse.json(
        { error: 'Förfrågan kunde inte skickas. Försök igen eller mejla info@ecodrone.se.' },
        { status: 502 }
      )
    }

    console.log('[Kontakt] E-post skickad:', data?.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Kontakt] Fel vid e-postutskick.')
    return NextResponse.json(
      { error: 'Internt fel. Försök igen senare eller kontakta oss direkt via e-post.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
