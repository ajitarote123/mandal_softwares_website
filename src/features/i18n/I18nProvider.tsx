import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getMessages } from './locales'
import {
  applyDocumentLocale,
  detectLocale,
  readStoredLocale,
  resolveInitialLocale,
  storeLocale,
} from './i18n'
import type { Locale, Translations } from './types'

interface I18nContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    storeLocale(next)
    setLocaleState(next)
    applyDocumentLocale(next)
  }, [])

  useEffect(() => {
    applyDocumentLocale(locale)
    document.title = getMessages(locale).meta.title
  }, [locale])

  const t = useMemo(() => getMessages(locale), [locale])

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export { detectLocale, readStoredLocale }
