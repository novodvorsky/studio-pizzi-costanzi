'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { grantMapConsent, hasMapConsent } from '@/lib/mapConsent'

const MAP_SRC =
  'https://maps.google.com/maps?q=Via+Panfilo+Castaldi+8+Milano+MI+20124&output=embed&z=16&hl=it'

export default function MapEmbed() {
  const { t } = useLanguage()
  const loc = t.location
  const [showMap, setShowMap] = useState(false)
  const noteId = useId()

  useEffect(() => {
    if (hasMapConsent()) setShowMap(true)
  }, [])

  if (showMap) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', minHeight: '380px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={loc.mapTitle}
      />
    )
  }

  return (
    <div
      role="region"
      aria-label={loc.map.title}
      className="h-full min-h-[380px] flex flex-col items-center justify-center text-center gap-5 px-8 py-10 bg-white"
    >
      <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center">
        <MapPin size={22} className="text-primary" />
      </div>
      <p className="text-charcoal font-medium text-[15px] leading-snug">
        {loc.address.street}
        <br />
        {loc.address.cap} {loc.address.city} ({loc.address.province})
      </p>
      <p id={noteId} className="text-charcoal/75 text-sm leading-relaxed max-w-sm">
        {loc.map.note}{' '}
        <Link href="/cookie" className="text-primary font-medium underline underline-offset-2">
          {loc.map.cookieLink}
        </Link>
      </p>
      <button
        type="button"
        onClick={() => {
          grantMapConsent()
          setShowMap(true)
        }}
        aria-describedby={noteId}
        className="inline-flex items-center gap-2 bg-primary text-white text-[12px] font-semibold px-6 py-3 tracking-[0.08em] uppercase rounded-sm hover:bg-primary-dark transition-colors duration-150"
      >
        <MapPin size={13} />
        {loc.map.button}
      </button>
    </div>
  )
}
