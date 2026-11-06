'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

const EMPTY_FORM: FormData = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

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

  // No email service is connected yet, so hand the message to the visitor's own mail app.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    const body = [
      formData.message,
      '',
      `${c.form.name}: ${formData.name}`,
      `${c.form.email}: ${formData.email}`,
      formData.phone ? `${c.form.phone}: ${formData.phone}` : '',
    ]
      .filter((line, i, arr) => line !== '' || i < arr.length - 1)
      .join('\n')

    const subject = `${c.title} – ${formData.name}`
    window.location.href = `mailto:${c.info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
    setFormData(EMPTY_FORM)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const labelClass = 'block text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal/70 mb-2'
  const inputBase =
    'w-full bg-white border rounded-sm px-4 py-3 text-charcoal text-sm placeholder-charcoal/50 focus:outline-none focus:border-primary transition-colors'
  const inputBorder = (hasError: boolean) =>
    hasError ? 'border-red-500' : 'border-charcoal/35 hover:border-charcoal/50'

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-[11px] font-bold tracking-[0.25em] uppercase">
              {c.eyebrow}
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          <h2
            id="contact-heading"
            className="font-serif text-charcoal text-3xl sm:text-4xl lg:text-[2.8rem] font-bold mb-4"
          >
            {c.title}
          </h2>

          <p className="text-charcoal/75 max-w-lg mx-auto text-base leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">

          {/* Left: Contact info */}
          <div className="space-y-5">
            {/* Dark card */}
            <div className="bg-charcoal rounded-sm p-7 relative overflow-hidden">
              {/* Accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{ background: 'radial-gradient(circle at top right, #D4B483, transparent)' }}
              />
              <h3 className="font-serif text-white font-bold text-lg mb-1">{c.cardTitle}</h3>
              <p className="text-white/70 text-sm mb-7 leading-relaxed">{c.cardText}</p>

              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: c.info.addressLabel, value: c.info.address, href: undefined },
                  { Icon: Mail, label: c.info.emailLabel, value: c.info.email, href: `mailto:${c.info.email}` },
                  { Icon: Phone, label: c.info.phoneLabel, value: c.info.phone, href: `tel:${c.info.phone.replace(/\s/g, '')}` },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 bg-white/8 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-gold/80" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white/85 text-sm hover:text-white transition-colors leading-relaxed whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-white/85 text-sm leading-relaxed whitespace-pre-line">
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
              <p className="text-charcoal/70 text-xs leading-relaxed">{c.privacy}</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-secondary rounded-sm p-8 lg:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
                role="status"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-green-700" />
                </div>
                <h3 className="font-serif text-charcoal font-bold text-xl mb-3">{c.sentTitle}</h3>
                <p className="text-charcoal/75 max-w-sm leading-relaxed">{c.form.success}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 text-primary text-sm font-medium hover:underline py-2"
                >
                  {c.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
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
                      className={`${inputBase} ${inputBorder(!!errors.name)}`}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-red-700 text-[12px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
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
                      className={`${inputBase} ${inputBorder(!!errors.email)}`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-red-700 text-[12px] flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
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
                    className={`${inputBase} ${inputBorder(false)}`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    {c.form.message} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    className={`${inputBase} resize-none ${inputBorder(!!errors.message)}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-red-700 text-[12px] flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-4 text-[13px] tracking-[0.12em] uppercase rounded-sm hover:bg-primary-dark transition-colors duration-150 flex items-center justify-center gap-2.5"
                >
                  <Send size={14} />
                  {c.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
