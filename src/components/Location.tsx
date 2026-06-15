'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Mail, Phone, Train } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Location() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const loc = t.location

  return (
    <section
      id="location"
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
              {loc.eyebrow}
            </span>
            <div className="h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            id="location-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-4"
          >
            {loc.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/60 max-w-lg mx-auto text-base leading-relaxed"
          >
            {loc.description}
          </motion.p>
        </div>

        {/* Two-column: Map + Info */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-stretch">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-sm overflow-hidden shadow-luxury min-h-[380px] lg:min-h-[460px] bg-gray-100"
          >
            <iframe
              src="https://maps.google.com/maps?q=Via+Panfilo+Castaldi+8+Milano+MI+20124&output=embed&z=16&hl=it"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '380px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Studio Costanzi & Pizzi – Via Panfilo Castaldi 8, Milano"
            />
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-sm shadow-luxury overflow-hidden flex flex-col"
          >
            {/* Red header */}
            <div className="bg-primary px-7 py-6">
              <h3 className="font-serif text-white font-bold text-lg mb-0.5">
                Studio Costanzi & Pizzi
              </h3>
              <p className="text-white/60 text-sm">Commercialisti</p>
            </div>

            <div className="p-7 flex-1 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/40 mb-1">
                    Indirizzo
                  </div>
                  <div className="text-charcoal font-medium text-[15px] leading-snug">
                    {loc.address.street}
                    <br />
                    {loc.address.cap} {loc.address.city} ({loc.address.province})
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-charcoal/6" />

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/40 mb-1">
                    {loc.hours.title}
                  </div>
                  <div className="text-charcoal font-medium text-[14px] leading-relaxed">
                    {loc.hours.schedule}
                  </div>
                  <div className="text-charcoal/50 text-[12px] mt-0.5">{loc.hours.note}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-charcoal/6" />

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/40 mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${loc.contact.email}`}
                    className="text-primary font-medium text-[14px] hover:underline"
                  >
                    {loc.contact.email}
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-charcoal/6" />

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/40 mb-1">
                    Telefono
                  </div>
                  <a
                    href={`tel:${loc.contact.phone}`}
                    className="text-charcoal font-medium text-[14px] hover:text-primary transition-colors"
                  >
                    {loc.contact.phone}
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-charcoal/6" />

              {/* Directions */}
              <div className="flex gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Train size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/40 mb-1">
                    Come Raggiungerci
                  </div>
                  <div className="text-charcoal/70 text-[13px] leading-relaxed">
                    {loc.directions}
                  </div>
                </div>
              </div>
            </div>

            {/* Get directions button */}
            <div className="px-7 pb-7">
              <a
                href="https://www.google.com/maps/dir//Via+Panfilo+Castaldi+8+Milano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-primary text-primary text-[12px] font-semibold tracking-[0.1em] uppercase py-3 rounded-sm hover:bg-primary hover:text-white transition-all duration-200"
              >
                <MapPin size={13} />
                Ottieni Indicazioni
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
