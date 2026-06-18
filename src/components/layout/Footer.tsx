import { company } from '../../data/company'
import { useI18n } from '../../features/i18n/useI18n'
import { useTheme } from '../../features/theme/useTheme'
import './Footer.css'

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
            <strong>Mandal Softwares</strong>
            <p>{t.footer.tagline}</p>
          </div>
        </div>

        <div className="site-footer__links">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
          <a href={company.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {year} Mandal Softwares · {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}
