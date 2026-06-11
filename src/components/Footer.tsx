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
                  Studio Pizzi & Costanzi
                </div>
                <div className="text-white/40 text-[10px] tracking-wider font-light">
                  Dottori Commercialisti
                </div>
              </div>
            </div>

            <p className="text-white/45 text-sm leading-[1.8] mb-6 max-w-xs">{f.tagline}</p>

            {/* Contact quick links */}
            <div className="space-y-3">
              <a
                href={`mailto:${f.email}`}
                className="flex items-center gap-3 text-white/45 hover:text-white/80 transition-colors text-sm group"
              >
                <div className="w-7 h-7 bg-white/5 group-hover:bg-primary/30 rounded-sm flex items-center justify-center transition-colors shrink-0">
                  <Mail size={12} className="text-gold/60" />
                </div>
                {f.email}
              </a>
              <a
                href={`tel:${f.phone}`}
                className="flex items-center gap-3 text-white/45 hover:text-white/80 transition-colors text-sm group"
              >
                <div className="w-7 h-7 bg-white/5 group-hover:bg-primary/30 rounded-sm flex items-center justify-center transition-colors shrink-0">
                  <Phone size={12} className="text-gold/60" />
                </div>
                {f.phone}
              </a>
              <div className="flex items-start gap-3 text-white/45 text-sm">
                <div className="w-7 h-7 bg-white/5 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={12} className="text-gold/60" />
                </div>
                <span className="whitespace-pre-line leading-relaxed">{f.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              {f.links.title}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {f.links.items.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-gold/60 transition-all duration-200 overflow-hidden" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              {f.contact.title}
            </h3>
            <div className="space-y-4 text-sm text-white/50 leading-relaxed">
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-1">Sede</div>
                <p className="whitespace-pre-line">{f.address}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-1">Orari</div>
                <p>Lun – Ven: 9:00–13:00 / 14:00–18:00</p>
                <p className="text-white/30">Su appuntamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <p className="text-white/30 text-[11px] tracking-wide">{f.copyright}</p>
              <span className="hidden sm:block text-white/15">·</span>
              <p className="text-white/20 text-[10px] tracking-wide">{f.legal}</p>
            </div>

            <div className="flex items-center gap-5">
              <button className="text-white/30 hover:text-white/60 text-[11px] tracking-wide transition-colors">
                {f.privacyPolicy}
              </button>
              <button className="text-white/30 hover:text-white/60 text-[11px] tracking-wide transition-colors">
                {f.cookiePolicy}
              </button>
              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-8 h-8 bg-white/8 hover:bg-primary rounded-sm flex items-center justify-center transition-colors duration-200"
                aria-label="Torna in cima"
              >
                <ArrowUp size={14} className="text-white/60" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
