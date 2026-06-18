import { company } from '../../data/company'
import { useI18n } from '../../features/i18n/useI18n'
import { useTheme } from '../../features/theme/useTheme'
import './Footer.css'

const SOCIAL = [
  { href: company.social.linkedin, label: 'LinkedIn' },
  { href: company.social.facebook, label: 'Facebook' },
  { href: company.social.instagram, label: 'Instagram' },
  { href: company.googleBusiness, label: 'Google' },
] as const

export function Footer() {
  const { t } = useI18n()
  const { resolved } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img
            src={resolved === 'dark' ? company.logos.dark : company.logos.light}
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
          />
          <div>
            <strong>{company.name}</strong>
            <p>{t.footer.tagline}</p>
          </div>
        </div>

        <div className="site-footer__cols">
          <div className="site-footer__links">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
          </div>
          <div className="site-footer__links">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {year} {company.name} · {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}
