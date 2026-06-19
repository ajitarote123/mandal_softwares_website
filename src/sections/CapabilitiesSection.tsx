import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './CapabilitiesSection.css'

export function CapabilitiesSection() {
  const { t } = useI18n()
  const c = t.sections.capabilities

  return (
    <SectionShell id="capabilities" eyebrow={c.eyebrow} title={c.title}>
      <p className="capabilities-section__subtitle body-lg">{c.subtitle}</p>
      <div className="capabilities-section__grid stagger">
        {c.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 60} variant="scale">
            <article className="capabilities-section__card hover-lift">
              <header className="capabilities-section__head">
                <span className="capabilities-section__idx">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p className="capabilities-section__summary">{pillar.summary}</p>
                </div>
              </header>
              <ul>
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
