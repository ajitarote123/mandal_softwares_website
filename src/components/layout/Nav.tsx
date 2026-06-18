import { useEffect, useState } from 'react'
import { LanguageToggle } from '../../features/i18n/LanguageToggle'
import { useI18n } from '../../features/i18n/useI18n'
import { useTheme } from '../../features/theme/useTheme'
import { ThemeToggleCompact } from '../../features/theme/ThemeToggle'
import './Nav.css'

const LINKS = [
  { href: '#dev-support', key: 'devSupport' as const },
  { href: '#work', key: 'work' as const },
  { href: '#process', key: 'process' as const },
] as const

export function Nav() {
  const { t } = useI18n()
  const { resolved } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="container site-nav__inner">
        <a href="#" className="site-nav__brand" onClick={() => setOpen(false)}>
          <img
            src={resolved === 'dark' ? '/MLogoW.png' : '/MLogo.png'}
            alt="Mandal Softwares"
            width={36}
            height={36}
          />
          <span>Mandal Softwares</span>
        </a>

        <nav className={`site-nav__links ${open ? 'site-nav__links--open' : ''}`} aria-label="Main">
          {LINKS.map((link) => (
            <a key={link.key} href={link.href} onClick={() => setOpen(false)}>
              {t.nav[link.key]}
            </a>
          ))}
          <a href="#contact" className="site-nav__cta btn btn--primary" onClick={() => setOpen(false)}>
            {t.nav.cta}
          </a>
        </nav>

        <div className="site-nav__controls">
          <LanguageToggle />
          <ThemeToggleCompact />
          <button
            type="button"
            className="site-nav__menu"
            aria-expanded={open}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
