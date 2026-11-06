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
    privacy: 'By submitting this form you agree to our Privacy Policy.',
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
    legal: 'Registered with the Order of Commercialisti of Milan',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
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