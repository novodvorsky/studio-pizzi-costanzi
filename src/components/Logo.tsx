interface LogoProps {
  size?: number
  variant?: 'dark' | 'light' | 'white'
  showText?: boolean
}

export default function Logo({ size = 48, variant = 'dark', showText = false }: LogoProps) {
  const bgColor = variant === 'white' ? '#ffffff' : '#8B1E24'
  const textColor = variant === 'white' ? '#8B1E24' : '#ffffff'
  const borderColor = variant === 'white' ? 'rgba(139,30,36,0.3)' : 'rgba(212,180,131,0.5)'

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Studio Costanzi & Pizzi Logo"
        role="img"
      >
        {/* Background square */}
        <rect width="60" height="60" fill={bgColor} />
        {/* Inner decorative border */}
        <rect
          x="4"
          y="4"
          width="52"
          height="52"
          stroke={borderColor}
          strokeWidth="1"
          fill="none"
        />
        {/* Gold accent top line */}
        <line x1="12" y1="10" x2="48" y2="10" stroke="#D4B483" strokeWidth="0.8" opacity="0.7" />
        {/* P letter - serif style */}
        <text
          x="14"
          y="40"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="28"
          fontWeight="700"
          fill={textColor}
          letterSpacing="1"
        >
          P
        </text>
        {/* C letter */}
        <text
          x="32"
          y="40"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="28"
          fontWeight="700"
          fill={textColor}
          letterSpacing="1"
        >
          C
        </text>
        {/* Gold accent bottom line */}
        <line x1="12" y1="48" x2="48" y2="48" stroke="#D4B483" strokeWidth="0.8" opacity="0.7" />
      </svg>

      {showText && (
        <div>
          <div
            className="font-serif font-bold tracking-widest uppercase text-xs"
            style={{ color: variant === 'white' ? '#8B1E24' : '#1F1F1F' }}
          >
            Studio Costanzi & Pizzi
          </div>
          <div
            className="text-xs tracking-wider"
            style={{ color: variant === 'white' ? 'rgba(139,30,36,0.7)' : 'rgba(31,31,31,0.6)' }}
          >
            Commercialisti
          </div>
        </div>
      )}
    </div>
  )
}

export function LogoSVGString(color = '#8B1E24') {
  return `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" fill="${color}"/>
    <rect x="4" y="4" width="52" height="52" stroke="rgba(212,180,131,0.5)" stroke-width="1" fill="none"/>
    <line x1="12" y1="10" x2="48" y2="10" stroke="#D4B483" stroke-width="0.8" opacity="0.7"/>
    <text x="14" y="40" font-family="Georgia, serif" font-size="28" font-weight="700" fill="white" letter-spacing="1">P</text>
    <text x="32" y="40" font-family="Georgia, serif" font-size="28" font-weight="700" fill="white" letter-spacing="1">C</text>
    <line x1="12" y1="48" x2="48" y2="48" stroke="#D4B483" stroke-width="0.8" opacity="0.7"/>
  </svg>`
}
