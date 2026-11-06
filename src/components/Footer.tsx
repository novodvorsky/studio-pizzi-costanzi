'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Logo from './Logo'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#111111] text-white" role="contentinfo">
      {/* Gold top accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr] gap-12">

          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo size={44} />
              <div>
                <div className="font-serif text-sm font-bold tracking-widest uppercase text-white">
                  Studio Costanzi & Pizzi
                </div>
                <div className="text-white/65 text-[11px] tracking-wider">
                  Commercialisti
                </div>
              </div>
            </div>

            <p className="text-white/65 text-sm leading-[1.8] mb-6 max-w-xs">{f.tagline}</p>

            {/* Contact quick links */}
            <div className="space-y-1">
              <a
                href={`mailto:${f.email}`}
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm py-1.5"
              >
                <div className="w-7 h-7 bg-white/5 rounded-sm flex items-center justify-center shrink-0">
                  <Mail size={12} className="text-gold/70" />
                </div>
                {f.email}
              </a>
              <a
                href={`tel:${f.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors text-sm py-1.5"
              >
                <div className="w-7 h-7 bg-white/5 rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={12} className="text-gold/70" />
                </div>
                {f.phone}
              </a>
              <div className="flex items-start gap-3 text-white/65 text-sm py-1.5">
                <div className="w-7 h-7 bg-white/5 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={12} className="text-gold/70" />
                </div>
                <span className="whitespace-pre-line leading-relaxed">{f.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 mb-4">
              {f.links.title}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1">
                {f.links.items.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="text-white/65 hover:text-white text-sm transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 mb-5">
              {f.contact.title}
            </h3>
            <div className="space-y-4 text-sm text-white/65 leading-relaxed">
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-white/60 mb-1">{f.officeLabel}</div>
                <p className="whitespace-pre-line">{f.address}</p>
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-white/60 mb-1">{f.hoursLabel}</div>
                <p>{f.hours}</p>
                <p className="text-white/60">{f.hoursNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <p className="text-white/60 text-[12px] tracking-wide">{f.copyright}</p>
              <span aria-hidden="true" className="hidden sm:block text-white/30">·</span>
              <p className="text-white/60 text-[12px] tracking-wide">{f.legal}</p>
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-11 h-11 bg-white/8 hover:bg-primary rounded-sm flex items-center justify-center transition-colors duration-150"
                aria-label={t.nav.backToTop}
              >
                <ArrowUp size={16} className="text-white/80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
