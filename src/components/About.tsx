'use client'

import { CheckCircle2, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ─── Grid ───────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
                {t.about.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h2
              id="about-heading"
              className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight mb-7"
            >
              {t.about.title}
            </h2>

            {/* Description */}
            <p className="text-charcoal/75 text-base leading-[1.85] mb-5">
              {t.about.description}
            </p>
            <p className="text-charcoal/75 text-base leading-[1.85] mb-8">
              {t.about.description2}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {t.about.values.map((value) => (
                <div key={value} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span className="text-charcoal text-[13px] font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Gold divider */}
            <div className="h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent mb-8" />

            {/* Partners */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users size={15} className="text-primary" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                  {t.about.partners.title}
                </span>
              </div>
              <div className="space-y-2">
                {t.about.partners.list.map((partner) => (
                  <div key={partner} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="font-serif text-charcoal font-semibold text-[15px]">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-6">
            {/* Stats cards */}
            <div className="grid gap-4">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative bg-secondary rounded-sm p-6 overflow-hidden"
                >
                  {/* Accent bar left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                  {/* Content */}
                  <div className="pl-4">
                    <div className="font-serif text-4xl font-bold text-primary mb-1 tabular-nums">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-charcoal/75 text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  {/* Decorative number */}
                  <div
                    aria-hidden="true"
                    className="absolute right-4 top-1/2 -translate-y-1/2 font-serif text-7xl font-bold text-charcoal/4 select-none pointer-events-none"
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative quote block */}
            <div className="relative bg-charcoal rounded-sm p-8 overflow-hidden">
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  background: 'radial-gradient(circle at top right, #D4B483, transparent)',
                }}
              />
              {/* Gold quote mark */}
              <div aria-hidden="true" className="font-serif text-6xl text-gold/30 leading-none mb-3 select-none">&ldquo;</div>
              <p className="text-white/85 text-sm leading-relaxed italic">
                {t.about.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-gold/80 text-[11px] tracking-[0.15em] uppercase font-medium">
                  Studio Costanzi & Pizzi
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
