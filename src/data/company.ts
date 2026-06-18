export const company = {
  name: 'Mandal Softwares',
  domain: 'https://company.mandal.one',
  phone: '+91 8652551424',
  phoneTel: '+918652551424',
  email: 'mandalsoftwares@gmail.com',
  address: 'Talegaon Dabhade, Maharashtra, India',
  foundedYear: 2019,
  social: {
    facebook: 'https://www.facebook.com/mandalsoftwares/',
    linkedin: 'https://in.linkedin.com/company/mandal-softwares',
    instagram: 'https://www.instagram.com/mandal_softwares/',
  },
  pitch:
    'We design and build web, mobile, and business software for companies that need it done right — not just done.',
  services: [
    { id: 'web', label: 'Web', detail: 'Sites & web apps' },
    { id: 'mobile', label: 'Mobile', detail: 'iOS, Android, hybrid' },
    { id: 'desktop', label: 'Desktop', detail: 'Cross-platform apps' },
    { id: 'erp', label: 'CRM / ERP', detail: 'Operations & workflows' },
    { id: 'commerce', label: 'E‑commerce', detail: 'Stores that convert' },
  ],
  proof: [
    { value: '7+', label: 'Years building' },
    { value: '15+', label: 'Projects shipped' },
    { value: '8+', label: 'Active clients' },
  ],
  pillars: [
    { title: 'Ship fast', body: 'Lean builds, clear milestones, no endless cycles.' },
    { title: 'Build to last', body: 'Modern stack, maintainable code, room to scale.' },
    { title: 'Stay close', body: 'Direct communication from scoping through launch.' },
  ],
  process: [
    { step: '01', title: 'Discover', body: 'You share the problem. We clarify scope and fit.' },
    { step: '02', title: 'Build', body: 'Iterative development with regular check-ins.' },
    { step: '03', title: 'Launch', body: 'Deploy, hand off, and support what we ship.' },
  ],
} as const
