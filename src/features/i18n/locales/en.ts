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
  {
    rating: 5,
    text: 'They unblocked our release when we were stuck on infra and deployment — clear, fast, no drama.',
    source: 'Software agency',
  },
  {
    rating: 5,
    text: 'Solid architecture guidance when our team was green on cloud and DevOps.',
    source: 'Product startup',
  },
  {
    rating: 5,
    text: 'Exactly the senior backup we needed — debugging, planning, and shipping without hiring.',
    source: 'Indie developer',
  },
  {
    rating: 4,
    text: 'Professional from scoping through launch on our CRM build.',
    source: 'Service business',
  },
]

export const en: Translations = {
  meta: {
    title: 'Mandal Softwares — Engineering Partner for Software Teams',
    description:
      'Veteran engineering partnership for software companies, firms, and developers — architecture, debugging, DevOps, cloud, delivery, and team practices across the full SDLC.',
  },
  nav: {
    partnership: 'Partnership',
    capabilities: 'Expertise',
    work: 'Work',
    process: 'How we work',
    contact: 'Contact',
    cta: 'Get help',
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
      eyebrow: 'Engineering partner · Since 2019',
      title: 'Veteran guidance across the',
      titleEm: 'full software lifecycle',
      sub: 'Software companies, firms, and independent developers call us when they hit gaps — planning, architecture, complex bugs, deployment, cloud, infra, delivery, or team practices. We bring 7+ years across the entire IT playground so you do not have to hire for every skill.',
      ctaPrimary: 'Get engineering help',
      ctaSecondary: 'See our expertise',
      scroll: 'Scroll',
    },
    proof: {
      years: 'Years in the field',
      projects: 'Projects delivered',
      clients: 'Teams supported',
    },
    partnership: {
      eyebrow: 'Engineering partnership',
      audience: 'Software companies · Firms · Indie developers',
      title: 'Your bench when the SDLC gets hard.',
      body: 'Most new firms and solo builders are strong in one area and thin in another. That is normal — and it is where we fit. We embed as your experienced partner across planning, build, debug, deploy, cloud, infra, scheduling, and team practices.',
      highlight:
        'No helpdesk tickets. Senior engineers who have shipped, broken, fixed, and scaled real systems.',
      cta: 'Discuss your challenge',
    },
    audience: {
      eyebrow: 'Who we help',
      title: 'Built for teams that build software.',
      cards: [
        {
          title: 'New software firms',
          body: 'You ship code but struggle with architecture, releases, or cloud. We fill the experience gap so you look seasoned from day one.',
        },
        {
          title: 'Independent developers',
          body: 'Deep in one stack, blocked on DevOps, infra, or delivery? We get you unstuck without a full-time hire.',
        },
        {
          title: 'Growing product teams',
          body: 'Need senior backup for complex bugs, sprint planning, or team efficiency — without expanding payroll.',
        },
      ],
    },
    capabilities: {
      eyebrow: 'What we cover',
      title: 'End-to-end across the SDLC.',
      subtitle: 'From first architecture sketch to production traffic and team rhythm.',
      pillars: [
        {
          title: 'Planning & architecture',
          summary: 'Decisions that age well.',
          items: ['Software planning & roadmaps', 'System & solution architecture', 'Version & release planning'],
        },
        {
          title: 'Development & debugging',
          summary: 'When the hard problems land.',
          items: ['Complex bugs & production issues', 'Code review & unblocking', 'Stack guidance & best practices'],
        },
        {
          title: 'DevOps & deployment',
          summary: 'Ship with confidence.',
          items: ['CI/CD pipelines', 'Release & deploy support', 'Environment & build automation'],
        },
        {
          title: 'Cloud & infrastructure',
          summary: 'Servers that stay up.',
          items: ['Cloud & VPS management', 'IT infra design & setup', 'Monitoring, scaling & security basics'],
        },
        {
          title: 'Delivery & scheduling',
          summary: 'Predictable momentum.',
          items: ['Project timelines & milestones', 'Scope & version planning', 'Risk and dependency mapping'],
        },
        {
          title: 'Team & scrum practices',
          summary: 'Teams that deliver.',
          items: ['Scrum & agile facilitation', 'Team management support', 'Efficiency & process analysis'],
        },
      ],
    },
    services: {
      eyebrow: 'Also available',
      title: 'Custom product development.',
      subtitle: 'When you need software built — not just guided.',
      web: 'Web',
      webDetail: 'Sites & web apps',
      mobile: 'Mobile',
      mobileDetail: 'iOS, Android, hybrid',
      erp: 'CRM / ERP',
      erpDetail: 'Operations & workflows',
      commerce: 'E‑commerce',
      commerceDetail: 'Stores that convert',
    },
    work: {
      eyebrow: 'Past work',
      title: 'Products we have shipped.',
      items: workItems,
    },
    clients: {
      eyebrow: 'Clients',
      title: 'Teams that trust us.',
      names: [
        'DEXT',
        'Indus Infotech',
        'NZ Solutions',
        'Stratveda',
        'NirvanaFresh',
        'KalaClap',
        'RangKatha',
        'PrimePlex Pictures',
        'OGTA',
        'MoreFilmy',
        'Parashar Agri',
      ],
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'What partners say.',
      viewGoogle: 'View on Google',
      items: reviewItems,
    },
    process: {
      eyebrow: 'How we work',
      title: 'From stuck to shipping.',
      step1Title: 'Connect',
      step1Body: 'You describe where you are stuck — a bug, an architecture call, a release, or a team process.',
      step2Title: 'Diagnose',
      step2Body: 'We map the gap, propose a clear path, and agree on scope — advisory, embedded, or hands-on.',
      step3Title: 'Partner',
      step3Body: 'We work alongside you until the issue is resolved, the release is out, or the practice is in place.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us where you are stuck.',
      lead: 'Architecture, deployment, a nasty bug, team delivery, or a new product — a few lines is enough to start.',
      email: 'Email',
      phone: 'Phone',
      location: 'Based in',
      address: 'Brahmanwada, Akole, Ahilyanagar 422610',
      viewGoogle: 'View on Google',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'What do you need help with?',
      formSubject: 'Engineering partnership inquiry',
      formSubmit: 'Send message',
      formSending: 'Sending…',
      formSuccess: 'Thank you! Your message has been sent successfully.',
      formError: 'Could not send your message. Please email us directly.',
    },
  },
  footer: {
    tagline: 'Engineering partnership across the full SDLC.',
    rights: 'All rights reserved.',
  },
}
