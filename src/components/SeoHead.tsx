import { useEffect } from 'react'
import { company } from '../data/company'
import { useI18n } from '../features/i18n/useI18n'

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

function setJsonLd() {
  const id = 'ms-jsonld'
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }

  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    url: company.domain,
    email: company.email,
    telephone: company.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressCountry: 'IN',
    },
    sameAs: [
      company.social.linkedin,
      company.social.facebook,
      company.social.instagram,
      company.googleBusiness,
    ],
  })
}

export function SeoHead() {
  const { t } = useI18n()

  useEffect(() => {
    document.title = t.meta.title
    setMeta('description', t.meta.description)
    setMeta('og:title', t.meta.title, 'property')
    setMeta('og:description', t.meta.description, 'property')
    setMeta('og:url', company.domain, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', company.name, 'property')
    setMeta('og:image', `${company.domain}/MLogo.png`, 'property')
    setMeta('twitter:card', 'summary', 'name')
    setMeta('twitter:title', t.meta.title, 'name')
    setMeta('twitter:description', t.meta.description, 'name')
    setCanonical(company.domain)
    setJsonLd()
  }, [t])

  return null
}
