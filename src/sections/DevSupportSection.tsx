import { type CSSProperties } from 'react'
import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import './DevSupportSection.css'

export function DevSupportSection() {
  const { t } = useI18n()
  const d = t.sections.devSupport
  const caps = Object.values(d.caps)

  return (
    <section id="dev-support" className="section dev-support-section">
      <div className="container">
        <div className="dev-support-section__inner">
          <Reveal>
            <div className="dev-support-section__copy">
              <p className="eyebrow">{d.eyebrow}</p>
              <span className="dev-support-section__badge">{d.audience}</span>
              <h2 className="display-md">{d.title}</h2>
              <p className="body-lg">{d.body}</p>
              <a href="#contact" className="btn btn--primary">
                {d.cta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} variant="left">
            <ul className="dev-support-section__tags" aria-label={d.eyebrow}>
              {caps.map((cap, i) => (
                <li key={cap} style={{ '--tag-i': i } as CSSProperties}>
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
