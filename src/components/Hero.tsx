'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Phone, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden hero-bg"
      aria-label="Hero section"
    >
      {/* ─── Decorative elements ─────────────────────────────────── */}

      {/* Radial glow — brand red at bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,30,36,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Gold vertical accent line left */}
      <div
        className="absolute left-[8%] top-1/2 -translate-y-1/2 w-px h-[260px] opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4B483, transparent)' }}
      />
      {/* Gold vertical accent line right */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-px h-[260px] opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4B483, transparent)' }}
      />

      {/* Top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      {/* ─── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

        {/* Gold top rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-12 h-[1px] bg-gold mx-auto mb-8"
        />

        {/* Eyebrow */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold/90 text-[11px] sm:text-[12px] font-semibold tracking-[0.3em] uppercase mb-6"
        >
          {t.hero.eyebrow}
        </motion.p>

        {/* Main title */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.15] tracking-tight text-balance mb-7"
        >
          {t.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center gap-2.5 bg-primary text-white font-semibold px-8 py-3.5 text-[13px] tracking-[0.1em] uppercase hover:bg-primary-dark transition-all duration-200 rounded-sm shadow-[0_4px_24px_rgba(139,30,36,0.35)] hover:shadow-[0_6px_32px_rgba(139,30,36,0.45)]"
          >
            <Phone size={14} strokeWidth={2.5} />
            {t.hero.cta1}
          </button>

          <button
            onClick={() => scrollTo('#services')}
            className="group inline-flex items-center gap-2 text-white/85 font-medium text-[13px] tracking-[0.08em] uppercase border border-white/25 px-8 py-3.5 hover:bg-white/10 hover:border-white/40 transition-all duration-200 rounded-sm"
          >
            {t.hero.cta2}
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Founding year badge */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex items-center justify-center gap-6"
        >
          <div className="h-px w-16 bg-white/15" />
          <span className="text-white/40 text-[11px] tracking-[0.25em] uppercase font-light">
            Fondato nel 2002 · Milano
          </span>
          <div className="h-px w-16 bg-white/15" />
        </motion.div>
      </div>

      {/* ─── Stats bar ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="absolute bottom-20 left-0 right-0 z-10"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: '20+', label: 'Anni' },
              { value: '500+', label: 'Clienti' },
              { value: '2002', label: 'Fondazione' },
            ].map((stat) => (
              <div key={stat.label} className="py-4 text-center">
                <div className="text-gold font-serif font-bold text-xl sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Scroll indicator ────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors flex flex-col items-center gap-1.5"
        aria-label={t.hero.scrollLabel}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-light">{t.hero.scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  )
}
