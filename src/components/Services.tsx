'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  index,
  inView,
}: {
  icon: string
  title: string
  description: string
  index: number
  inView: boolean
}) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Briefcase

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-charcoal/8 rounded-sm p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Background corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-secondary/50 group-hover:bg-primary/5 transition-colors duration-300" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-12 h-12 bg-secondary group-hover:bg-primary/10 rounded-sm flex items-center justify-center transition-colors duration-300">
          <Icon
            size={22}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
          />
        </div>
        {/* Index number */}
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
          <span className="text-primary text-[9px] font-bold">0{index + 1}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-charcoal font-bold text-[1.15rem] leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{description}</p>

      {/* Learn more */}
      <div className="flex items-center gap-1.5 text-primary text-[12px] font-semibold tracking-wide opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <span>Scopri di più</span>
        <ArrowRight size={12} />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-secondary"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
              {t.services.eyebrow}
            </span>
            <div className="h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            id="services-heading"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-5"
          >
            {t.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {t.services.list.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
              inView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-charcoal/50 text-sm mb-4">
            Hai bisogno di una consulenza personalizzata?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center gap-2 bg-primary text-white text-[12px] font-semibold px-6 py-3 tracking-[0.08em] uppercase rounded-sm hover:bg-primary-dark transition-colors duration-200"
          >
            Contattaci
            <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
