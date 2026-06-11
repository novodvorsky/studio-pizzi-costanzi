import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pizzicostanzi.it'),
  title: {
    default: 'Studio Pizzi & Costanzi | Commercialisti Milano dal 2002',
    template: '%s | Studio Pizzi & Costanzi',
  },
  description:
    'Studio Pizzi & Costanzi – Dottori Commercialisti a Milano dal 2002. Consulenza fiscale, societaria, revisione contabile e dichiarazioni fiscali. Via Panfilo Castaldi 8, Milano.',
  keywords: [
    'commercialista Milano',
    'studio commercialista Milano',
    'consulenza fiscale Milano',
    'revisione contabile Milano',
    'dichiarazioni fiscali Milano',
    'dottore commercialista Milano',
    'Studio Pizzi Costanzi',
    'contabilità Milano',
    'consulenza societaria Milano',
    'fiscalista Milano',
  ],
  authors: [
    { name: 'Mario Stefano Pizzi' },
    { name: 'Giuseppe Costanzi' },
  ],
  creator: 'Studio Pizzi & Costanzi',
  publisher: 'Studio Pizzi & Costanzi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: 'en_GB',
    url: 'https://www.pizzicostanzi.it',
    siteName: 'Studio Pizzi & Costanzi',
    title: 'Studio Pizzi & Costanzi – Commercialisti Milano dal 2002',
    description:
      'Oltre 20 anni di esperienza nella consulenza fiscale, societaria e amministrativa a Milano. Professionisti al servizio di imprese, professionisti e privati.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Pizzi & Costanzi – Commercialisti Milano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Pizzi & Costanzi – Commercialisti Milano',
    description:
      'Oltre 20 anni di esperienza nella consulenza fiscale e societaria a Milano.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.pizzicostanzi.it',
    languages: {
      'it-IT': 'https://www.pizzicostanzi.it',
      'en-GB': 'https://www.pizzicostanzi.it/en',
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Studio Pizzi & Costanzi',
  alternateName: 'Pizzi & Costanzi Dottori Commercialisti',
  description:
    'Studio professionale di commercialisti fondato nel 2002 da Mario Stefano Pizzi e Giuseppe Costanzi. Consulenza fiscale, societaria, revisione contabile e dichiarazioni fiscali a Milano.',
  url: 'https://www.pizzicostanzi.it',
  logo: 'https://www.pizzicostanzi.it/logo.svg',
  image: 'https://www.pizzicostanzi.it/og-image.jpg',
  telephone: '+39-02-XXXXXXX',
  email: 'info@pizzicostanzi.it',
  foundingDate: '2002',
  founders: [
    {
      '@type': 'Person',
      name: 'Mario Stefano Pizzi',
      jobTitle: 'Dottore Commercialista',
    },
    {
      '@type': 'Person',
      name: 'Giuseppe Costanzi',
      jobTitle: 'Dottore Commercialista',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Panfilo Castaldi, 8',
    addressLocality: 'Milano',
    addressRegion: 'MI',
    postalCode: '20124',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '45.4835',
    longitude: '9.1975',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Milano',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi Professionali',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consulenza Fiscale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consulenza Societaria' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revisione Contabile' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dichiarazioni Fiscali' } },
    ],
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B1E24" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
