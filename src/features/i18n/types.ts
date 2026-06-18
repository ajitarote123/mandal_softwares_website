export type Locale = 'en' | 'hi' | 'mr'

export const LOCALES: Locale[] = ['en', 'hi', 'mr']

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  hi: 'हि',
  mr: 'म',
}

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  mr: 'मराठी',
}

export interface WorkItem {
  name: string
  type: string
  summary: string
}

export interface ReviewItem {
  rating: number
  text: string
  source: string
}

export interface Translations {
  meta: {
    title: string
    description: string
  }
  nav: {
    devSupport: string
    work: string
    process: string
    contact: string
    cta: string
    menuOpen: string
    menuClose: string
  }
  theme: {
    auto: string
    light: string
    dark: string
  }
  sections: {
    hero: {
      eyebrow: string
      title: string
      titleEm: string
      sub: string
      ctaPrimary: string
      ctaSecondary: string
      scroll: string
    }
    proof: {
      years: string
      projects: string
      clients: string
    }
    services: {
      eyebrow: string
      title: string
      web: string
      webDetail: string
      mobile: string
      mobileDetail: string
      erp: string
      erpDetail: string
      commerce: string
      commerceDetail: string
    }
    devSupport: {
      eyebrow: string
      audience: string
      title: string
      body: string
      cta: string
      caps: {
        development: string
        debugging: string
        devops: string
        deploy: string
        infra: string
        troubleshoot: string
        architecture: string
        planning: string
      }
    }
    work: {
      eyebrow: string
      title: string
      items: WorkItem[]
    }
    clients: {
      eyebrow: string
      title: string
      names: string[]
    }
    reviews: {
      eyebrow: string
      title: string
      viewGoogle: string
      items: ReviewItem[]
    }
    process: {
      eyebrow: string
      title: string
      step1Title: string
      step1Body: string
      step2Title: string
      step2Body: string
      step3Title: string
      step3Body: string
    }
    contact: {
      eyebrow: string
      title: string
      lead: string
      email: string
      phone: string
      location: string
      viewGoogle: string
      formName: string
      formEmail: string
      formMessage: string
      formSubject: string
      formSubmit: string
      formSending: string
      formSuccess: string
      formError: string
    }
  }
  footer: {
    tagline: string
    rights: string
  }
}
