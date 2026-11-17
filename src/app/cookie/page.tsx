import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Quali strumenti di memorizzazione usa il sito cptax.it e come caricare o revocare la mappa di Google.',
  alternates: { canonical: 'https://cptax.it/cookie' },
}

export default function CookiePage() {
  return <LegalPage kind="cookie" />
}
