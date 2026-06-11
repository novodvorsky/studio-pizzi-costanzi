'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, UserCheck, Layers, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  award: Award,
  'user-check': UserCheck,
  layers: Layers,
  'shield-check': ShieldCheck,
}

export default function WhyUs() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why-us"
      className="py-24 lg:py-32 bg-charcoal relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 59px, white 59px, white 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, white 59px, white 60px)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center top, #8B1E24, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold/80 text-[11px] font-bold tracking-[0.25em] uppercase">
              {t.whyUs.eyebrow}
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </motion.div>

          <motion.h2
            id="why-us-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-5"
          >
            {t.whyUs.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed"
          >
            {t.whyUs.subtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.whyUs.list.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Award

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Index + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 bg-primary/20 group-hover:bg-primary/30 rounded-sm flex items-center justify-center transition-colors duration-300">
                    <Icon size={20} className="text-gold/80" strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-white/10 text-3xl font-bold select-none">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-white font-semibold text-[1.05rem] leading-tight mb-3 group-hover:text-gold/90 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              'Ordine dei Dottori Commercialisti di Milano',
              'Fondato nel 2002',
              'Via Panfilo Castaldi 8, Milano',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-gold/50" />
                <span className="text-white/40 text-[12px] tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
