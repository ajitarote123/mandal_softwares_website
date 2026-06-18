import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import { ServiceIcon } from './ServiceIcon'
import './ServicesSection.css'

export function ServicesSection() {
  const { t } = useI18n()
  const s = t.sections.services

  const items = [
    { id: 'web', label: s.web, detail: s.webDetail },
    { id: 'mobile', label: s.mobile, detail: s.mobileDetail },
    { id: 'erp', label: s.erp, detail: s.erpDetail },
    { id: 'commerce', label: s.commerce, detail: s.commerceDetail },
  ]

  return (
    <SectionShell id="services" eyebrow={s.eyebrow} title={s.title}>
      <div className="services-section__grid stagger">
        {items.map((item, i) => (
          <Reveal key={item.id} variant="scale">
            <article className="services-section__card hover-lift">
              <div className="services-section__card-top">
                <ServiceIcon id={item.id} />
                <span className="services-section__idx">0{i + 1}</span>
              </div>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
