export const company = {
  name: 'Mandal Softwares',
  domain: 'https://software.mandal.one',
  phone: '+91 8652551424',
  phoneTel: '+918652551424',
  email: 'mandalsoftwares@gmail.com',
  address: 'Brahmanwada, Akole, Ahilyanagar 422610',
  logos: {
    light: '/MLogo.png',
    dark: '/MLogoW.png',
  },
  foundedYear: 2019,
  googleBusiness: 'https://share.google/EylmjBwg9ouZnkR4Y',
  social: {
    facebook: 'https://www.facebook.com/mandalsoftwares/',
    linkedin: 'https://in.linkedin.com/company/mandal-softwares',
    instagram: 'https://www.instagram.com/mandal_softwares/',
  },
  pitch:
    'Veteran engineering partnership for software companies, firms, and developers across planning, architecture, debugging, deployment, cloud, infra, delivery, and team practices.',
  services: [
    { id: 'web', label: 'Web', detail: 'Sites & web apps' },
    { id: 'mobile', label: 'Mobile', detail: 'iOS, Android, hybrid' },
    { id: 'erp', label: 'CRM / ERP', detail: 'Operations & workflows' },
    { id: 'commerce', label: 'E‑commerce', detail: 'Stores that convert' },
  ],
  proof: [
    { value: '7+', label: 'Years in the field' },
    { value: '45+', label: 'Projects delivered' },
    { value: '25+', label: 'Teams supported' },
  ],
  pillars: [
    { title: 'Ship fast', body: 'Lean builds, clear milestones, no endless cycles.' },
    { title: 'Build to last', body: 'Modern stack, maintainable code, room to scale.' },
    { title: 'Stay close', body: 'Direct communication from scoping through launch.' },
  ],
  process: [
    { step: '01', title: 'Connect', body: 'You describe where you are stuck.' },
    { step: '02', title: 'Diagnose', body: 'We map the gap and agree on scope.' },
    { step: '03', title: 'Partner', body: 'We work alongside you until it is resolved.' },
  ],
} as const
