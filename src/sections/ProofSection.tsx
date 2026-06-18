import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import './ProofSection.css'

const VALUES = ['7+', '15+', '8+'] as const

export function ProofSection() {
  const { t } = useI18n()
  const p = t.sections.proof
  const labels = [p.years, p.projects, p.clients]

  return (
    <section id="proof" className="proof-section" aria-label="Track record">
      <div className="container proof-section__grid stagger">
        {labels.map((label, i) => (
          <Reveal key={label}>
            <div className="proof-section__item">
              <span className="proof-section__value">{VALUES[i]}</span>
              <span className="proof-section__label">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
