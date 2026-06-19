import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { useTheme } from '../features/theme/useTheme'
import './HeroSection.css'

export function HeroSection() {
  const { t } = useI18n()
  const { resolved } = useTheme()
  const h = t.sections.hero
  const logo = resolved === 'dark' ? '/MLogoW.png' : '/MLogo.png'

  return (
    <section className="hero-section section" aria-label="Introduction">
      <div className="hero-section__grid container">
        <div className="hero-section__copy">
          <Reveal>
            <p className="eyebrow">{h.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl hero-section__title">
              {h.title}
              <em>{h.titleEm}</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg hero-section__sub">{h.sub}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-section__actions">
              <a href="#contact" className="btn btn--primary">
                {h.ctaPrimary}
              </a>
              <a href="#capabilities" className="btn btn--ghost">
                {h.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} variant="scale" className="hero-section__visual-wrap">
          <div className="hero-section__visual" aria-hidden="true">
            <div className="hero-section__ring hero-section__ring--outer" />
            <div className="hero-section__ring hero-section__ring--inner" />
            <img src={logo} alt="" className="hero-section__logo" width={88} height={88} />
          </div>
        </Reveal>
      </div>

      <a href="#proof" className="hero-section__scroll" aria-label={h.scroll}>
        <span>{h.scroll}</span>
        <span className="hero-section__scroll-line" />
      </a>
    </section>
  )
}
