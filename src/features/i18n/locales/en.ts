import type { Translations } from '../types'

const workItems = [
  { name: 'School management platform', type: 'Web · Mobile', summary: 'Attendance, fees & parent portal' },
  { name: 'Sales CRM', type: 'Web app', summary: 'Pipeline, leads & reporting' },
  { name: 'E‑commerce storefront', type: 'Web', summary: 'Catalog, checkout & admin' },
  { name: 'Community app', type: 'Mobile', summary: 'Events, giving & notifications' },
  { name: 'Assessment portal', type: 'Web', summary: 'Booking, reports & payments' },
  { name: 'Ad-tech dashboard', type: 'Web', summary: 'Campaigns, analytics & APIs' },
]

const reviewItems = [
  { rating: 5, text: 'Delivered on time with clear communication throughout.', source: 'Product startup' },
  { rating: 5, text: 'Solid technical work on our CRM — exactly what we needed.', source: 'Service business' },
  { rating: 4, text: 'Reliable partner for ongoing development support.', source: 'Software agency' },
  { rating: 5, text: 'Professional from scoping through launch.', source: 'E‑commerce brand' },
]

export const en: Translations = {
  meta: {
    title: 'Mandal Softwares — Software Studio',
    description:
      'Mandal Softwares builds web, mobile, and business software. Product software and engineering support for software teams.',
  },
  nav: {
    devSupport: 'Dev teams',
    work: 'Work',
    process: 'Process',
    contact: 'Contact',
    cta: 'Start a project',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
  theme: {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
  },
  sections: {
    hero: {
      eyebrow: 'Software studio · Since 2016',
      title: 'Turn your idea into',
      titleEm: 'software that works',
      sub: 'We build product software and partner with software companies and developers who need a reliable engineering bench.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'Dev team support',
      scroll: 'Scroll',
    },
    proof: {
      years: 'Years building',
      projects: 'Projects shipped',
      clients: 'Active clients',
    },
    services: {
      eyebrow: 'What we build',
      title: 'Product software for business.',
      web: 'Web',
      webDetail: 'Sites & web apps',
      mobile: 'Mobile',
      mobileDetail: 'iOS, Android, hybrid',
      erp: 'CRM / ERP',
      erpDetail: 'Operations & workflows',
      commerce: 'E‑commerce',
      commerceDetail: 'Stores that convert',
    },
    devSupport: {
      eyebrow: 'For software teams',
      audience: 'Software companies · Product teams · Indie developers',
      title: 'Engineering support when you need backup.',
      body: 'Extend your capacity without the hiring overhead — from debugging production issues to designing infra and shipping releases.',
      cta: 'Talk to us',
      caps: {
        development: 'Development',
        debugging: 'Debugging',
        devops: 'DevOps',
        deploy: 'Deploy support',
        infra: 'Infra design',
        troubleshoot: 'Troubleshooting',
        architecture: 'Architecture design',
        planning: 'Software planning',
      },
    },
    work: {
      eyebrow: 'Past work',
      title: 'Projects we have shipped.',
      items: workItems,
    },
    clients: {
      eyebrow: 'Clients',
      title: 'Teams that trust us.',
      names: ['DEXT', 'Indus Infotech',  'NZ Solutions', 'Stratveda', 'NirvanaFresh', 'Manovedh', 'RangKatha', 'PrimePlex Pictures', 'OGTA'],
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'What clients say.',
      viewGoogle: 'View on Google',
      items: reviewItems,
    },
    process: {
      eyebrow: 'How it works',
      title: 'Simple path from brief to launch.',
      step1Title: 'Discover',
      step1Body: 'You share the problem. We clarify scope and fit.',
      step2Title: 'Build',
      step2Body: 'Iterative development with regular check-ins.',
      step3Title: 'Launch',
      step3Body: 'Deploy, hand off, and support what we ship.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready when you are.',
      lead: 'Building a product or need engineering backup? Tell us in a few lines.',
      email: 'Email',
      phone: 'Phone',
      location: 'Based in',
      viewGoogle: 'View on Google',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'What are you building?',
      formSubject: 'Project inquiry',
      formSubmit: 'Send message',
      formSending: 'Sending…',
      formSuccess: 'Thank you! Your message has been sent successfully.',
      formError: 'Could not send your message. Please email us directly.',
    },
  },
  footer: {
    tagline: 'Custom software & engineering support.',
    rights: 'All rights reserved.',
  },
}
