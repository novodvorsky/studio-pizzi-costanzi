'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, t, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [])

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo + Brand Name */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Torna all'inizio"
            >
              <Logo size={40} />
              <div className="text-left hidden sm:block">
                <div
                  className={`font-serif text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
                    scrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  Studio Pizzi & Costanzi
                </div>
                <div
                  className={`text-[10px] tracking-[0.1em] font-light transition-colors duration-300 ${
                    scrolled ? 'text-charcoal/60' : 'text-white/60'
                  }`}
                >
                  Dottori Commercialisti
                </div>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[13px] font-medium tracking-[0.06em] relative group transition-colors duration-300 ${
                    scrolled ? 'text-charcoal hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 ${
                      scrolled ? 'bg-primary' : 'bg-gold'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language switcher */}
              <div
                className={`flex items-center text-[12px] font-semibold tracking-wider border rounded-sm overflow-hidden transition-colors duration-300 ${
                  scrolled ? 'border-charcoal/20' : 'border-white/30'
                }`}
              >
                <button
                  onClick={() => setLanguage('it')}
                  aria-label="Italiano"
                  className={`px-3 py-1.5 transition-colors duration-200 ${
                    language === 'it'
                      ? 'bg-primary text-white'
                      : scrolled
                      ? 'text-charcoal hover:bg-charcoal/5'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  IT
                </button>
                <div className={`w-px h-4 ${scrolled ? 'bg-charcoal/20' : 'bg-white/30'}`} />
                <button
                  onClick={() => setLanguage('en')}
                  aria-label="English"
                  className={`px-3 py-1.5 transition-colors duration-200 ${
                    language === 'en'
                      ? 'bg-primary text-white'
                      : scrolled
                      ? 'text-charcoal hover:bg-charcoal/5'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-primary text-white text-[12px] font-semibold px-5 py-2.5 tracking-[0.08em] uppercase hover:bg-primary-dark transition-colors duration-200 rounded-sm"
              >
                {t.nav.cta}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 rounded-sm transition-colors duration-200 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <Logo size={36} />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-charcoal p-1"
                    aria-label="Chiudi menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile links */}
                <nav className="flex-1 px-6 py-6 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(link.href)}
                      className="block w-full text-left text-charcoal py-3 font-medium text-[15px] border-b border-gray-50 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile bottom */}
                <div className="px-6 pb-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage('it')}
                      className={`text-sm font-semibold px-4 py-2 rounded-sm transition-colors ${
                        language === 'it' ? 'bg-primary text-white' : 'text-charcoal border border-charcoal/20'
                      }`}
                    >
                      IT
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`text-sm font-semibold px-4 py-2 rounded-sm transition-colors ${
                        language === 'en' ? 'bg-primary text-white' : 'text-charcoal border border-charcoal/20'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="w-full bg-primary text-white font-semibold py-3 text-sm tracking-widest uppercase rounded-sm hover:bg-primary-dark transition-colors"
                  >
                    {t.nav.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
