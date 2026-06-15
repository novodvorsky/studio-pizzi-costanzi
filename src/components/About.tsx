'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

function Counter({
  target,
  suffix,
  duration = 2000,
  inView,
}: {
  target: number
  suffix: string
  duration?: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

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
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
                {t.about.eyebrow}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight mb-7"
            >
              {t.about.title}
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-charcoal/70 text-base leading-[1.85] mb-5">
              {t.about.description}
            </motion.p>
            <motion.p variants={itemVariants} className="text-charcoal/70 text-base leading-[1.85] mb-8">
              {t.about.description2}
            </motion.p>

            {/* Values */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-2.5 mb-10"
            >
              {t.about.values.map((value) => (
                <div key={value} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span className="text-charcoal text-[13px] font-medium">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Gold divider */}
            <motion.div variants={itemVariants} className="h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent mb-8" />

            {/* Partners */}
            <motion.div variants={itemVariants}>
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
            </motion.div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Stats cards */}
            <div className="grid gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-secondary rounded-sm p-6 overflow-hidden group hover:shadow-card-hover transition-shadow duration-300"
                >
                  {/* Accent bar left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                  {/* Content */}
                  <div className="pl-4">
                    <div className="font-serif text-4xl font-bold text-primary mb-1">
                      <Counter
                        target={stat.value}
                        suffix={stat.suffix}
                        inView={statsInView}
                      />
                    </div>
                    <div className="text-charcoal/60 text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  {/* Decorative number */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 font-serif text-7xl font-bold text-charcoal/4 select-none pointer-events-none">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative bg-charcoal rounded-sm p-8 overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  background: 'radial-gradient(circle at top right, #D4B483, transparent)',
                }}
              />
              {/* Gold quote mark */}
              <div className="font-serif text-6xl text-gold/30 leading-none mb-3 select-none">&ldquo;</div>
              <p className="text-white/80 text-sm leading-relaxed font-light italic">
                {`La nostra missione è costruire relazioni professionali durature, basate sulla competenza, la riservatezza e la fiducia reciproca.`}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-gold/70 text-[11px] tracking-[0.15em] uppercase font-medium">
                  Studio Costanzi & Pizzi
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
