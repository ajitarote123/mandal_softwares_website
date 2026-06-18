import type { Locale } from './types'

export const LOCALE_STORAGE_KEY = 'ms-locale'

export function detectLocale(): Locale {
  const lang = (navigator.language || 'en').toLowerCase()
  // if (lang.startsWith('hi')) return 'hi'
  if (lang.startsWith('mr')) return 'mr'
  return 'en'
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'en' || stored === 'mr') return stored
  } catch {
    /* ignore */
  }
  return null
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* ignore */
  }
}

export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectLocale()
}

export function applyDocumentLocale(locale: Locale): void {
  document.documentElement.lang = locale
}
