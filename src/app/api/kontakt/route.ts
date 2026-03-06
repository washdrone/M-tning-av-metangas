import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { foretag, kontaktperson, epost, telefon, uppdragstyp, plats, tidsram, beskrivning, gdpr } = body

    if (!foretag || !kontaktperson || !epost || !uppdragstyp) {
      return NextResponse.json(
        { error: 'Obligatoriska fält saknas.' },
        { status: 400 }
      )
    }

    if (!gdpr) {
      return NextResponse.json(
        { error: 'GDPR-samtycke krävs.' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@ecodrone.se'
    const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ecodrone.se'

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
      <p style="margin-top:16px;color:#888;font-size:12px;">GDPR-samtycke: Ja</p>
    `

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: epost,
      subject: `Ny förfrågan: ${foretag} – ${uppdragstyp}`,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Kontakt] Fel vid e-postutskick:', error)
    return NextResponse.json(
      { error: 'Internt fel.' },
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
