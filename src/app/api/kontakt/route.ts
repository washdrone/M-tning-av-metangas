import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { foretag, kontaktperson, epost, uppdragstyp, gdpr } = body

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

    // Webhook integration stub.
    // Replace with your actual webhook URL or email service:
    //
    // Option 1: Forward to webhook (e.g. Make/Zapier/n8n)
    // await fetch(process.env.WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(body) })
    //
    // Option 2: Send email via Resend/SendGrid/etc.
    // await resend.emails.send({ ... })

    console.log('[Lead]', JSON.stringify(body, null, 2))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Internt fel.' },
      { status: 500 }
    )
  }
}
