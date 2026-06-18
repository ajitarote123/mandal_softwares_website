import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './WorkSection.css'

export function WorkSection() {
  const { t } = useI18n()
  const w = t.sections.work

  return (
    <SectionShell id="work" eyebrow={w.eyebrow} title={w.title}>
      <div className="work-section__grid stagger">
        {w.items.map((item, i) => (
          <Reveal key={item.name} variant="up" delay={i * 40}>
            <article className="work-section__card hover-lift">
              <div className="work-section__thumb" aria-hidden="true">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="work-section__body">
                <span className="work-section__type">{item.type}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
