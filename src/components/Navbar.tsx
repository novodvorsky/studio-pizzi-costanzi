'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from './Logo'

const SECTION_IDS = ['about', 'services', 'why-us', 'location', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { language, t, setLanguage } = useLanguage()

  // Scroll detection for glass effect + height shrink
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy — IntersectionObserver watches each section
  useEffect(() => {
    // Track which sections are currently intersecting so we can pick the topmost one
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top)
          } else {
            visible.delete(entry.target.id)
          }
        })

        if (visible.size > 0) {
          // Activate the section whose top edge is closest to the top of viewport
          const topmost = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0]
          setActiveSection(topmost)
        }
      },
      // Element enters the "active zone" when its top is between 10%–30% from the top
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-200 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_32px_rgba(0,0,0,0.1)] border-b border-white/60'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        {/*
          Persistent dark-to-transparent gradient behind the header text.
          Ensures white labels stay readable even if a light section peeks
          into the top of the viewport before the glass kicks in.
          Fades out once the glass background takes over.
        */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Height shrinks from 80 → 64 px on scroll */}
          <div
            className={`flex items-center justify-between transition-[height] duration-200 ease-out ${
              scrolled ? 'h-16' : 'h-20'
            }`}
          >
            {/* ── Logo ───────────────────────────────────────────── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label={t.nav.backToTop}
            >
              <Logo size={40} />
              <div className="text-left hidden sm:block">
                <div
                  className={`font-serif text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-300 ${
                    scrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  Studio Costanzi & Pizzi
                </div>
                <div
                  className={`text-[11px] tracking-[0.1em] transition-colors duration-200 ${
                    scrolled ? 'text-charcoal/70' : 'text-white/75'
                  }`}
                >
                  Commercialisti
                </div>
              </div>
            </button>

            {/* ── Desktop nav ────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id

                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-colors duration-200 ${
                      scrolled
                        ? isActive
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-gray-900'
                        : isActive
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {/* Animated pill — shared layoutId makes it glide between items */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-md ${
                          scrolled ? 'bg-primary/10' : 'bg-white/15'
                        }`}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* ── Right side ─────────────────────────────────────── */}
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

            {/* ── Mobile hamburger ───────────────────────────────── */}
            <button
              className={`lg:hidden p-2.5 rounded-md transition-colors duration-200 ${
                scrolled
                  ? 'text-charcoal hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
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
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <Logo size={36} />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-charcoal p-2.5 -mr-2.5 rounded-md hover:bg-gray-100"
                    aria-label={t.nav.closeMenu}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 px-6 py-6 space-y-0.5" aria-label="Mobile primary">
                  {navLinks.map((link, i) => {
                    const id = link.href.replace('#', '')
                    const isActive = activeSection === id

                    return (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => scrollTo(link.href)}
                        className={`flex items-center w-full text-left py-3 px-3 rounded-md font-medium text-[15px] transition-colors ${
                          isActive
                            ? 'text-primary bg-primary/[0.06]'
                            : 'text-charcoal hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        {isActive && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2.5 shrink-0" />
                        )}
                        {link.label}
                      </motion.button>
                    )
                  })}
                </nav>

                <div className="px-6 pb-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage('it')}
                      className={`text-sm font-semibold px-4 py-2 rounded-sm transition-colors ${
                        language === 'it'
                          ? 'bg-primary text-white'
                          : 'text-charcoal border border-charcoal/20'
                      }`}
                    >
                      IT
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`text-sm font-semibold px-4 py-2 rounded-sm transition-colors ${
                        language === 'en'
                          ? 'bg-primary text-white'
                          : 'text-charcoal border border-charcoal/20'
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
