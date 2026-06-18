import { LOCALE_LABELS, LOCALE_NAMES, LOCALES, type Locale } from './types'
import { useI18n } from './useI18n'
import './LanguageToggle.css'

export function LanguageToggle() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          className={`lang-toggle__btn ${locale === loc ? 'lang-toggle__btn--active' : ''}`}
          onClick={() => setLocale(loc)}
          aria-pressed={locale === loc}
          title={LOCALE_NAMES[loc]}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  )
}

export function useLocale(): Locale {
  return useI18n().locale
}
