'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { hasMapConsent, revokeMapConsent } from '@/lib/mapConsent'
import Logo from './Logo'
import Footer from './Footer'

type Section = { heading: string; paragraphs: string[]; list: string[]; after: string[] }

// Turns plain emails and bare web addresses inside policy text into links.
const LINK_PATTERN = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|(?:[a-z0-9-]+\.)+(?:it|com)(?:\/[\w\-/]*)?)/gi

function RichText({ text }: { text: string }) {
  const parts = text.split(LINK_PATTERN)
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>
        const href = part.includes('@') ? `mailto:${part}` : `https://${part}`
        const external = !part.includes('@') && !part.includes('cptax.it')
        return (
          <a
            key={i}
            href={href}
            className="text-primary underline underline-offset-2 break-words"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {part}
          </a>
        )
      })}
    </>
  )
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-charcoal text-xl sm:text-2xl font-bold mb-4">{section.heading}</h2>
      {section.paragraphs.map((p) => (
        <p key={p} className="text-charcoal/80 leading-[1.8] mb-4">
          <RichText text={p} />
        </p>
      ))}
      {section.list.length > 0 && (
        <ul className="space-y-3 mb-4 list-disc pl-5 marker:text-primary">
          {section.list.map((item) => (
            <li key={item} className="text-charcoal/80 leading-[1.8]">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )}
      {section.after.map((p) => (
        <p key={p} className="text-charcoal/80 leading-[1.8] mb-4">
          <RichText text={p} />
        </p>
      ))}
    </section>
  )
}

function RevokeMapConsent() {
  const { t } = useLanguage()
  const r = t.legalPages.cookie.revoke
  const [result, setResult] = useState<'done' | 'notSet' | null>(null)

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => {
          if (hasMapConsent()) {
            revokeMapConsent()
            setResult('done')
          } else {
            setResult('notSet')
          }
        }}
        className="inline-flex items-center border border-primary text-primary text-[12px] font-semibold tracking-[0.08em] uppercase px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors duration-150"
      >
        {r.button}
      </button>
      <p role="status" aria-live="polite" className="mt-3 text-sm text-charcoal/80 min-h-[1.5rem]">
        {result === 'done' ? r.done : result === 'notSet' ? r.notSet : ''}
      </p>
    </div>
  )
}

export default function LegalPage({ kind }: { kind: 'privacy' | 'cookie' }) {
  const { t, language, setLanguage } = useLanguage()
  const L = t.legalPages
  const page = L[kind]
  const sections = page.sections as Section[]
  const firm = t.firm

  const langButton = (lang: 'it' | 'en', label: string, aria: string) => (
    <button
      type="button"
      onClick={() => setLanguage(lang)}
      aria-label={aria}
      aria-pressed={language === lang}
      className={`px-3 py-1.5 transition-colors duration-200 ${
        language === lang ? 'bg-primary text-white' : 'text-charcoal hover:bg-charcoal/5'
      }`}
    >
      {label}
    </button>
  )

  return (
    <>
      <header className="bg-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={L.back}>
            <Logo size={36} />
            <span className="hidden sm:block font-serif text-[13px] font-bold tracking-[0.12em] uppercase text-charcoal whitespace-nowrap">
              Studio Costanzi & Pizzi
            </span>
          </Link>
          <div className="flex items-center text-[12px] font-semibold tracking-wider border border-charcoal/20 rounded-sm overflow-hidden">
            {langButton('it', 'IT', 'Italiano')}
            <div className="w-px h-4 bg-charcoal/20" />
            {langButton('en', 'EN', 'English')}
          </div>
        </div>
      </header>

      <main className="bg-white">
        <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline py-2 mb-6"
          >
            <ArrowLeft size={14} />
            {L.back}
          </Link>

          <h1 className="font-serif text-charcoal text-3xl sm:text-4xl font-bold mb-3">{page.title}</h1>
          <p className="text-charcoal/70 text-sm mb-8">{L.updated}</p>
          <p className="text-charcoal/80 leading-[1.8]">
            <RichText text={page.intro} />
          </p>

          {kind === 'privacy' && (
            <section className="mt-10">
              <h2 className="font-serif text-charcoal text-xl sm:text-2xl font-bold mb-4">
                {t.legalPages.privacy.controllerHeading}
              </h2>
              <p className="text-charcoal/80 leading-[1.8] mb-3">{t.legalPages.privacy.controllerIntro}</p>
              <address className="not-italic text-charcoal leading-[1.8] bg-secondary rounded-sm p-5">
                <strong className="font-semibold">Studio Costanzi & Pizzi</strong>
                <br />
                <span className="whitespace-pre-line">{t.footer.address}</span>
                <br />
                {t.contact.info.emailLabel}:{' '}
                <a href={`mailto:${t.footer.email}`} className="text-primary underline underline-offset-2">
                  {t.footer.email}
                </a>
                {firm.pec.trim() && (
                  <>
                    <br />
                    {firm.labels.pec}:{' '}
                    <a href={`mailto:${firm.pec}`} className="text-primary underline underline-offset-2">
                      {firm.pec}
                    </a>
                  </>
                )}
                {firm.vatNumber.trim() && (
                  <>
                    <br />
                    {firm.labels.vat} {firm.vatNumber}
                  </>
                )}
              </address>
            </section>
          )}

          {sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}

          {kind === 'cookie' && <RevokeMapConsent />}
        </article>
      </main>

      <Footer />
    </>
  )
}
