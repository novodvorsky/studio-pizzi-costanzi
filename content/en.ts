import type { Translations } from './it'

export const en: Translations = {
  nav: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    backToTop: 'Back to top',
    about: 'About Us',
    services: 'Services',
    whyUs: 'Why Us',
    location: 'Location',
    contact: 'Contact',
    cta: 'Request Consultation',
  },
  hero: {
    founded: 'Founded in 2002 · Milan',
    stats: [
      { value: '20+', label: 'Years' },
      { value: '500+', label: 'Clients' },
      { value: '2002', label: 'Founded' },
    ],
    eyebrow: 'Studio Costanzi & Pizzi — Commercialisti',
    title: 'Tax, Corporate & Administrative Advisory Since 2002',
    subtitle: 'Over twenty years of experience serving businesses, professionals, and individuals.',
    cta1: 'Contact Us',
    cta2: 'Explore Services',
    scrollLabel: 'Scroll to discover',
  },
  about: {
    quote:
      'Our mission is to build lasting professional relationships grounded in expertise, confidentiality, and mutual trust.',
    eyebrow: 'Our Story',
    title: 'About Us',
    description:
      'Studio Costanzi & Pizzi is a professional firm founded in 2002 by Commercialisti Giuseppe Costanzi and Mario Stefano Pizzi. For over twenty years we have provided tax, corporate, and administrative assistance to businesses, professionals, and individuals, with a rigorously personalized approach focused on maximum reliability.',
    description2:
      'Our philosophy is built on technical expertise, continuity of professional relationships, and the ability to anticipate our clients\' needs in a constantly evolving regulatory environment.',
    stats: [
      { value: 20, suffix: '+', label: 'Years of Experience' },
      { value: 500, suffix: '+', label: 'Clients Assisted' },
      { value: 100, suffix: '%', label: 'Client Dedication' },
    ],
    partners: {
      title: 'Founding Partners',
      list: ['Dr. Giuseppe Costanzi', 'Rag. Mario Stefano Pizzi'],
    },
    values: [
      'Professionalism',
      'Reliability',
      'Expertise',
      'Confidentiality',
    ],
  },
  services: {
    ctaPrompt: 'Need tailored advice?',
    ctaButton: 'Contact us',
    eyebrow: 'What We Do',
    title: 'Our Services',
    subtitle:
      'Comprehensive professional solutions for every tax, corporate, and administrative need.',
    list: [
      {
        icon: 'briefcase',
        title: 'Tax, Corporate & Administrative Advisory',
        description:
          'Integrated support in tax planning, corporate management, and administrative process optimization for businesses and professionals.',
      },
      {
        icon: 'search',
        title: 'Statutory Audit',
        description:
          'Professional audit and accounting verification activities, financial statement analysis, and regulatory compliance review with maximum precision.',
      },
      {
        icon: 'calculator',
        title: 'General & Simplified Accounting',
        description:
          'Integrated management of ordinary and simplified bookkeeping, with periodic reporting and support for management and strategic decisions.',
      },
      {
        icon: 'file-text',
        title: 'Tax Returns',
        description:
          'Preparation, verification, and filing of all types of tax returns in full compliance with deadlines and current regulations.',
      },
    ],
  },
  whyUs: {
    trust: ['Order of Commercialisti of Milan', 'Founded in 2002', 'Via Panfilo Castaldi 8, Milan'],
    eyebrow: 'Our Commitment',
    title: 'Why Choose Us',
    subtitle:
      'Four pillars that define our professional approach and distinguish us in Milan\'s tax advisory landscape.',
    list: [
      {
        icon: 'award',
        title: 'Over 20 Years of Experience',
        description:
          'A solid professional history built on expertise, concrete results, and lasting trust relationships with our clients.',
      },
      {
        icon: 'user-check',
        title: 'Personalized Approach',
        description:
          'Every client receives tailored assistance, adapted to their specific operational and fiscal needs and growth objectives.',
      },
      {
        icon: 'layers',
        title: 'Multidisciplinary Expertise',
        description:
          'A team with cross-disciplinary expertise in tax, accounting, corporate, and administrative matters, always up to date on regulatory developments.',
      },
      {
        icon: 'shield-check',
        title: 'Ongoing Support',
        description:
          'Always available to meet your needs with timely and proactive updates on regulatory and tax developments.',
      },
    ],
  },
  location: {
    cardSubtitle: 'Commercialisti',
    addressLabel: 'Address',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    directionsLabel: 'Getting here',
    directionsCta: 'Get directions',
    mapTitle: 'Map of Studio Costanzi & Pizzi – Via Panfilo Castaldi 8, Milan',
    eyebrow: 'Our Office',
    title: 'Where to Find Us',
    address: {
      street: 'Via Panfilo Castaldi, 8',
      city: 'Milan',
      province: 'MI',
      cap: '20124',
      country: 'Italy',
    },
    description:
      'A short walk from Milan Central Station and Piazza della Repubblica, in the heart of Milan\'s business district.',
    hours: {
      title: 'Office Hours',
      schedule: 'Monday – Friday: 9:00 AM – 1:00 PM / 2:00 PM – 6:00 PM',
      note: 'By appointment',
    },
    contact: {
      email: 'info@cptax.it',
      phone: '+39 02 63793485',
    },
    directions: 'Easily accessible via Metro lines MM2 Gioia and MM3 Repubblica.',
    map: {
      title: 'Google map',
      note: 'The map is provided by Google: if you load it, Google receives browsing data and may set cookies.',
      cookieLink: 'Cookie Policy',
      button: 'Show map',
    },
  },
  contact: {
    cardTitle: "We're here for you",
    cardText: 'Get in touch for a consultation or for more information about our services.',
    sentTitle: 'Almost done',
    sendAnother: 'Write another message',
    eyebrow: 'Get in Touch',
    title: 'Contact Us',
    subtitle:
      'We are at your disposal for any information or to schedule an appointment. We will respond within 24 business hours.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Mario Rossi',
      email: 'Email Address',
      emailPlaceholder: 'mario.rossi@email.com',
      phone: 'Phone Number',
      phonePlaceholder: '+39 02 63793485',
      message: 'Your message',
      messagePlaceholder: 'Briefly describe your needs...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success:
        'Your email app has opened with the message filled in: press Send to finish. If it did not open, write to us at info@cptax.it.',
      error: 'An error occurred. Please try again.',
      required: 'Required field',
      invalidEmail: 'Please enter a valid email address',
    },
    info: {
      address: 'Via Panfilo Castaldi, 8\nMilan, 20124 MI',
      email: 'info@cptax.it',
      phone: '+39 02 63793485',
      addressLabel: 'Address',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
    },
    privacy: {
      before: 'Before writing to us, read how we handle your data in our ',
      link: 'Privacy Policy',
      after: '.',
    },
  },
  footer: {
    officeLabel: 'Office',
    hoursLabel: 'Hours',
    hours: 'Mon – Fri: 9:00–13:00 / 14:00–18:00',
    hoursNote: 'By appointment',
    tagline: 'Excellence in tax and corporate advisory since 2002.',
    links: {
      title: 'Navigation',
      items: [
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Why Us', href: '#why-us' },
        { label: 'Location', href: '#location' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    contact: {
      title: 'Contact',
    },
    address: 'Via Panfilo Castaldi, 8\nMilan, 20124 MI',
    email: 'info@cptax.it',
    phone: '+39 02 63793485',
    copyright: '© 2026 Studio Costanzi & Pizzi. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
  },
  // Dati obbligatori dello Studio: da compilare. Ogni riga compare nel footer solo quando è valorizzata.
  firm: {
    vatNumber: '',
    pec: '',
    register: 'Ordine dei Dottori Commercialisti e degli Esperti Contabili di Milano',
    registrations: [
      {
        name: 'Dott. Giuseppe Costanzi',
        number: '',
      },
      {
        name: 'Rag. Mario Stefano Pizzi',
        number: '',
      },
    ],
    labels: {
      vat: 'VAT no.',
      pec: 'PEC (certified email)',
      registeredWith: 'Registered with the ',
      registerNumber: 'no.',
    },
  },
  legalPages: {
    updated: 'Last updated: 17 November 2026',
    back: 'Back to the site',
    privacy: {
      title: 'Privacy Policy',
      intro: 'Under Article 13 of Regulation (EU) 2016/679 (GDPR), this notice explains how we process the personal data of people who visit cptax.it and of people who contact us.',
      controllerHeading: '1. Data controller',
      controllerIntro: 'The data controller is:',
      sections: [
        {
          heading: '2. What data we process',
          paragraphs: [
          ],
          list: [
            'Browsing data: when you visit the site, the hosting provider automatically logs technical data such as IP address, date and time, requested page and browser type. The site uses no analytics, profiling or marketing tools.',
            'Data you send us: the contact form does not send data to any server of ours. Pressing “Send Message” opens your email app with a pre-filled message (name, email, phone if given, text). We only receive the data if you send that email to info@cptax.it yourself. The same applies if you email or call us directly.',
            'Data collected by Google Maps: only if you choose to load the map. See the Cookie Policy.',
          ],
          after: [
          ],
        },
        {
          heading: '3. Why we process it and on what legal basis',
          paragraphs: [
          ],
          list: [
            'Replying to your enquiries and, if you ask, preparing a quote or an engagement: steps taken at your request before entering into a contract (Art. 6(1)(b) GDPR).',
            'Replying to general requests for information: the firm\'s legitimate interest in following up on people who contact it (Art. 6(1)(f) GDPR).',
            'Keeping the site working and secure (browsing data): legitimate interest (Art. 6(1)(f) GDPR).',
          ],
          after: [
            'Providing your data is optional, but without contact details we cannot reply. We do not use your data to send you advertising and we make no decisions based solely on automated processing.',
          ],
        },
        {
          heading: '4. How long we keep it',
          paragraphs: [
          ],
          list: [
            'Emails we receive are kept for as long as needed to handle the enquiry. If no engagement follows, we delete them within 12 months of the last contact. If an engagement follows, the data becomes part of the records of the professional relationship and is kept for the periods required by law.',
            'Browsing data is kept by the hosting provider for a limited period, under its terms of service.',
          ],
          after: [
          ],
        },
        {
          heading: '5. Who may receive it',
          paragraphs: [
          ],
          list: [
            'The firm\'s email service provider, which stores emails on our behalf as a data processor.',
            'Vercel Inc. (United States), which hosts the site and logs browsing data. Transfers to the United States rely on the safeguards provided by the GDPR (EU-U.S. Data Privacy Framework or the European Commission\'s standard contractual clauses).',
            'Google Ireland Limited and Google LLC, only if you choose to load the map.',
          ],
          after: [
            'Your data is not published or sold. It may be disclosed to authorities only where the law requires it.',
          ],
        },
        {
          heading: '6. Your rights',
          paragraphs: [
            'At any time you can ask to access, correct or erase your data, restrict its processing, object to processing based on legitimate interest, and receive the data you gave us in a structured format (Articles 15–22 GDPR). To do so, write to info@cptax.it.',
            'If you believe the processing breaches the GDPR, you can lodge a complaint with the Italian Data Protection Authority, the Garante per la protezione dei dati personali (www.garanteprivacy.it).',
          ],
          list: [
          ],
          after: [
          ],
        },
      ],
    },
    cookie: {
      title: 'Cookie Policy',
      intro: 'This page explains what storage the cptax.it site uses, following the Italian Data Protection Authority\'s cookie guidelines (10 June 2021).',
      sections: [
        {
          heading: '1. No profiling or analytics cookies',
          paragraphs: [
            'The site sets no profiling, analytics or marketing cookies and uses no third-party tracking tools.',
          ],
          list: [
          ],
          after: [
          ],
        },
        {
          heading: '2. Technical storage',
          paragraphs: [
            'To work, the site saves two technical values in your browser (localStorage). They are not sent to us or to anyone else:',
          ],
          list: [
            'spc-lang: the language you chose (Italian or English).',
            'spc-map-consent: whether you chose to show the Google map.',
          ],
          after: [
            'They are strictly necessary to provide the service you ask for, so they do not require consent.',
          ],
        },
        {
          heading: '3. Google Maps',
          paragraphs: [
            'The map in the “Location” section is Google content and is not loaded until you press “Show map”. Only from that moment does Google receive browsing data, such as your IP address, and it may set its own cookies under its policy (policies.google.com/technologies/cookies).',
            'Without loading the map you can still use the “Get directions” link, which opens Google Maps in a new tab.',
          ],
          list: [
          ],
          after: [
          ],
        },
        {
          heading: '4. How to withdraw your choice',
          paragraphs: [
            'You can withdraw your choice to show the map at any time with the button below. You can also clear the data saved by the site and Google\'s cookies in your browser settings.',
          ],
          list: [
          ],
          after: [
          ],
        },
      ],
      revoke: {
        button: 'Withdraw consent to the map',
        done: 'Done: the map will not load until you press “Show map” again.',
        notSet: 'The map is not active at the moment: there is nothing to withdraw.',
      },
    },
  },
  meta: {
    title: 'Studio Costanzi & Pizzi | Commercialisti Milan Since 2002',
    description:
      'Studio Costanzi & Pizzi – Commercialisti in Milan since 2002. Tax advisory, corporate services, statutory audit, and tax returns. Via Panfilo Castaldi 8.',
    keywords:
      'commercialista Milan, tax advisory Milan, accounting firm Milan, statutory audit Milan, tax returns Milan, Costanzi Pizzi',
    ogTitle: 'Studio Costanzi & Pizzi – Commercialisti Milan',
    ogDescription:
      'Over 20 years of experience in tax, corporate, and administrative advisory in Milan. Professionals serving businesses, professionals, and individuals.',
  },
}