'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

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
      className="relative min-h-[100svh] flex flex-col overflow-hidden hero-bg"
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
        className="hidden lg:block absolute left-[8%] top-1/2 -translate-y-1/2 w-px h-[260px] opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4B483, transparent)' }}
      />
      {/* Gold vertical accent line right */}
      <div
        className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-px h-[260px] opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #D4B483, transparent)' }}
      />

      {/* Top gold bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />

      {/* ─── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 pb-10 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-5 sm:px-8 text-center"
      >
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />

        <p className="text-gold/90 text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] sm:tracking-[0.3em] uppercase mb-6 text-balance">
          {t.hero.eyebrow}
        </p>

        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.15] tracking-tight text-balance mb-7">
          {t.hero.title}
        </h1>

        <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2.5 bg-primary text-white font-semibold px-8 py-3.5 text-[13px] tracking-[0.1em] uppercase hover:bg-primary-dark transition-colors duration-150 rounded-sm shadow-[0_4px_24px_rgba(139,30,36,0.35)]"
          >
            <Mail size={14} strokeWidth={2.5} />
            {t.hero.cta1}
          </button>

          <button
            onClick={() => scrollTo('#services')}
            className="inline-flex items-center gap-2 text-white/85 font-medium text-[13px] tracking-[0.08em] uppercase border border-white/25 px-8 py-3.5 hover:bg-white/10 hover:border-white/40 transition-colors duration-150 rounded-sm"
          >
            {t.hero.cta2}
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-4 sm:gap-6">
          <div className="h-px w-8 sm:w-16 bg-white/15" />
          <span className="text-white/60 text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase">
            {t.hero.founded}
          </span>
          <div className="h-px w-8 sm:w-16 bg-white/15" />
        </div>
      </motion.div>
      </div>

      {/* ─── Stats bar ───────────────────────────────────────────── */}
      <div className="relative z-10 w-full pb-6 sm:pb-4">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="border border-white/10 bg-white/5 rounded-sm grid grid-cols-3 divide-x divide-white/10">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="py-4 text-center">
                <div className="text-gold font-serif font-bold text-xl sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[11px] tracking-widest uppercase mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Scroll indicator ────────────────────────────────────── */}
      <button
        onClick={() => scrollTo('#about')}
        className="relative z-10 hidden sm:flex mx-auto mb-5 text-white/60 hover:text-white/85 transition-colors flex-col items-center gap-1.5 py-1"
        aria-label={t.hero.scrollLabel}
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">{t.hero.scrollLabel}</span>
        <ArrowDown size={14} strokeWidth={1.5} />
      </button>
    </section>
  )
}
