import { ImageResponse } from 'next/og'

/**
 * Sajtgemensam OG-bild (1200×630), genererad vid build.
 * Utan denna saknar alla sidor og:image/twitter:image helt,
 * vilket ger svaga delningskort i sociala medier, Slack, Teams m.m.
 */

export const alt = 'EcoDrone – Drönarbaserad utsläppsmätning av metan och växthusgaser'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(to bottom, #f0f7f5, #ffffff)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 300,
            top: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: 'rgba(6, 182, 212, 0.15)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#115e59',
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          Drönarbaserad utsläppsmätning · Sverige
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 96,
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: -2,
          }}
        >
          EcoDrone
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            color: '#475569',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Mätning av metan och växthusgaser för CSRD, LDAR och ESG-rapportering
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 48 }}>
          {['CH₄', 'N₂O', 'CO₂', 'VOC'].map((gas) => (
            <div
              key={gas}
              style={{
                display: 'flex',
                padding: '12px 28px',
                borderRadius: 8,
                border: '1px solid rgba(15, 118, 110, 0.3)',
                background: 'rgba(6, 182, 212, 0.1)',
                color: '#115e59',
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              {gas}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
