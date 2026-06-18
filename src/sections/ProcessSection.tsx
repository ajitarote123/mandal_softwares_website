import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './ProcessSection.css'

export function ProcessSection() {
  const { t } = useI18n()
  const p = t.sections.process

  const steps = [
    { num: '01', title: p.step1Title, body: p.step1Body },
    { num: '02', title: p.step2Title, body: p.step2Body },
    { num: '03', title: p.step3Title, body: p.step3Body },
  ]

  return (
    <SectionShell id="process" eyebrow={p.eyebrow} title={p.title} alt>
      <ol className="process-section__list">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 80}>
            <li className="process-section__step">
              <div className="process-section__marker">
                <span className="process-section__dot" />
              </div>
              <div className="process-section__content">
                <span className="process-section__num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  )
}
