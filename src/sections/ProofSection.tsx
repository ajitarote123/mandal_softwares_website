import { company } from '../data/company'
import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import './ProofSection.css'

export function ProofSection() {
  const { t } = useI18n()
  const p = t.sections.proof
  const labels = [p.years, p.projects, p.clients]

  return (
    <section id="proof" className="proof-section" aria-label="Track record">
      <div className="container proof-section__grid stagger">
        {company.proof.map((item, i) => (
          <Reveal key={item.label}>
            <div className="proof-section__item">
              <span className="proof-section__value">{item.value}</span>
              <span className="proof-section__label">{labels[i]}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
