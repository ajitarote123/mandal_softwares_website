import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './AudienceSection.css'

export function AudienceSection() {
  const { t } = useI18n()
  const a = t.sections.audience

  return (
    <SectionShell id="audience" eyebrow={a.eyebrow} title={a.title} alt>
      <div className="audience-section__grid stagger">
        {a.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <article className="audience-section__card hover-lift">
              <span className="audience-section__num">0{i + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
