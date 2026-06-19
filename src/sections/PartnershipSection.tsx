import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import './PartnershipSection.css'

export function PartnershipSection() {
  const { t } = useI18n()
  const p = t.sections.partnership

  return (
    <section id="partnership" className="section partnership-section" aria-label={p.eyebrow}>
      <div className="container">
        <div className="partnership-section__inner">
          <Reveal>
            <div className="partnership-section__copy">
              <p className="eyebrow">{p.eyebrow}</p>
              <span className="partnership-section__badge">{p.audience}</span>
              <h2 className="display-lg partnership-section__title">{p.title}</h2>
              <p className="body-lg">{p.body}</p>
              <p className="partnership-section__highlight">{p.highlight}</p>
              <a href="#contact" className="btn btn--primary">
                {p.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
