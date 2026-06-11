'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const c = t.contact

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!formData.name.trim()) errs.name = c.form.required
    if (!formData.email.trim()) {
      errs.email = c.form.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = c.form.invalidEmail
    }
    if (!formData.message.trim()) errs.message = c.form.required
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('submitting')

    // ── Connect to your email service here (e.g. Resend, SendGrid, Formspree) ──
    // Example with Formspree: replace YOUR_FORM_ID with your actual form ID
    try {
      await new Promise((res) => setTimeout(res, 1400)) // Remove this line when connecting real API
      // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!res.ok) throw new Error()
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="contact-heading"
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
              {c.eyebrow}
            </span>
            <div className="h-px w-10 bg-primary" />
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-4"
          >
            {c.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/60 max-w-lg mx-auto text-base leading-relaxed"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* Dark card */}
            <div className="bg-charcoal rounded-sm p-7 relative overflow-hidden">
              {/* Accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{ background: 'radial-gradient(circle at top right, #D4B483, transparent)' }}
              />
              <h3 className="font-serif text-white font-bold text-lg mb-1">Siamo qui per voi</h3>
              <p className="text-white/50 text-sm mb-7 leading-relaxed">
                Contattateci per una consulenza o per ulteriori informazioni sui nostri servizi.
              </p>

              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: c.info.addressLabel, value: c.info.address, href: undefined },
                  { Icon: Mail, label: c.info.emailLabel, value: c.info.email, href: `mailto:${c.info.email}` },
                  { Icon: Phone, label: c.info.phoneLabel, value: c.info.phone, href: `tel:${c.info.phone}` },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-gold/80" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white/80 text-sm hover:text-white transition-colors leading-relaxed whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy note */}
            <div className="bg-secondary rounded-sm p-5">
              <p className="text-charcoal/50 text-xs leading-relaxed">{c.privacy}</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-secondary rounded-sm p-8 lg:p-10"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-charcoal font-bold text-xl mb-3">
                  Messaggio Inviato!
                </h3>
                <p className="text-charcoal/60 max-w-sm leading-relaxed">{c.form.success}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-7 text-primary text-sm font-medium hover:underline"
                >
                  Invia un altro messaggio
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/50 mb-2">
                      {c.form.name} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={c.form.namePlaceholder}
                      className={`w-full bg-white border rounded-sm px-4 py-3 text-charcoal text-sm placeholder-charcoal/30 focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-red-400' : 'border-charcoal/15 hover:border-charcoal/25'}`}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/50 mb-2">
                      {c.form.email} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={c.form.emailPlaceholder}
                      className={`w-full bg-white border rounded-sm px-4 py-3 text-charcoal text-sm placeholder-charcoal/30 focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-red-400' : 'border-charcoal/15 hover:border-charcoal/25'}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-red-500 text-[11px] flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/50 mb-2">
                    {c.form.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={c.form.phonePlaceholder}
                    className="w-full bg-white border border-charcoal/15 hover:border-charcoal/25 rounded-sm px-4 py-3 text-charcoal text-sm placeholder-charcoal/30 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/50 mb-2">
                    {c.form.message} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    className={`w-full bg-white border rounded-sm px-4 py-3 text-charcoal text-sm placeholder-charcoal/30 focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-charcoal/15 hover:border-charcoal/25'}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-red-500 text-[11px] flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Error alert */}
                {status === 'error' && (
                  <div className="flex items-center gap-2.5 text-red-600 bg-red-50 border border-red-200 rounded-sm p-4">
                    <AlertCircle size={16} className="shrink-0" />
                    <p className="text-sm">{c.form.error}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white font-semibold py-4 text-[13px] tracking-[0.12em] uppercase rounded-sm hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      {c.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      {c.form.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
