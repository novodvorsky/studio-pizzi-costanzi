'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { it, type Translations } from '../../content/it'
import { en } from '../../content/en'

type Language = 'it' | 'en'

interface LanguageContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('it')

  useEffect(() => {
    const saved = localStorage.getItem('spc-lang') as Language | null
    if (saved === 'it' || saved === 'en') {
      setLanguageState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('spc-lang', lang)
  }, [])

  const t = language === 'it' ? it : en

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
