import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy',
  description: 'Come Studio Costanzi & Pizzi tratta i dati personali di chi visita cptax.it e di chi lo contatta.',
  alternates: { canonical: 'https://cptax.it/privacy' },
}

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />
}
