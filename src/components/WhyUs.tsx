'use client'

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
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold/80 text-[11px] font-bold tracking-[0.25em] uppercase">
              {t.whyUs.eyebrow}
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>

          <h2
            id="why-us-heading"
            className="font-serif text-white text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-5"
          >
            {t.whyUs.title}
          </h2>

          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.whyUs.list.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Award

            return (
              <div
                key={item.title}
                className="relative bg-white/5 border border-white/10 rounded-sm p-7 overflow-hidden"
              >
                <div className="w-11 h-11 bg-primary/20 rounded-sm flex items-center justify-center mb-6">
                  <Icon size={20} className="text-gold/80" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-white font-semibold text-[1.05rem] leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {t.whyUs.trust.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-1 h-1 rounded-full bg-gold/50" />
                <span className="text-white/65 text-[12px] tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
