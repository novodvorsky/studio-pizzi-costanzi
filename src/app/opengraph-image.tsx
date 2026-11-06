import { ImageResponse } from 'next/og'

export const alt = 'Studio Costanzi & Pizzi – Commercialisti a Milano dal 2002'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const RED = '#8B1E24'
const GOLD = '#D4B483'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 88px',
          background: 'linear-gradient(180deg, #0a0505 0%, #1a080a 60%, #0a0304 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div
            style={{
              width: 120,
              height: 120,
              background: RED,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `2px solid ${GOLD}`,
              fontSize: 54,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            PC
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase' }}>
              Studio Costanzi &amp; Pizzi
            </div>
            <div style={{ fontSize: 24, color: GOLD, letterSpacing: 8, textTransform: 'uppercase', marginTop: 8 }}>
              Commercialisti
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 80, height: 2, background: GOLD, marginBottom: 28 }} />
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
            Consulenza fiscale, societaria e amministrativa dal 2002
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            color: 'rgba(255,255,255,0.75)',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: 24,
          }}
        >
          <div>Via Panfilo Castaldi 8 · Milano</div>
          <div style={{ color: GOLD }}>cptax.it</div>
        </div>
      </div>
    ),
    size,
  )
}
