'use client'

import { Briefcase, Search, Calculator, FileText, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const iconMap = {
  briefcase: Briefcase,
  search: Search,
  calculator: Calculator,
  'file-text': FileText,
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Briefcase

  return (
    <div className="relative bg-white border border-charcoal/8 rounded-sm p-8 overflow-hidden">
      {/* Background corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-secondary/50" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center">
          <Icon size={22} className="text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-charcoal font-bold text-[1.15rem] leading-tight mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="relative text-charcoal/75 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
              {t.services.eyebrow}
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          <h2
            id="services-heading"
            className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-5"
          >
            {t.services.title}
          </h2>

          <p className="text-charcoal/75 text-base max-w-xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.list.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal/75 text-sm mb-4">{t.services.ctaPrompt}</p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center gap-2 bg-primary text-white text-[12px] font-semibold px-6 py-3 tracking-[0.08em] uppercase rounded-sm hover:bg-primary-dark transition-colors duration-150"
          >
            {t.services.ctaButton}
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  )
}
