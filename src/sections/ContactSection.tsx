import { company } from '../data/company'
import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './ContactSection.css'

export function ContactSection() {
  const { t } = useI18n()
  const c = t.sections.contact

  return (
    <SectionShell id="contact" eyebrow={c.eyebrow} title={c.title}>
      <div className="contact-section__grid">
        <Reveal variant="left">
          <div className="contact-section__info">
            <p className="body-lg">{c.lead}</p>
            <dl className="contact-section__channels">
              <div className="contact-section__channel">
                <dt>
                  <span className="contact-section__icon" aria-hidden="true">
                    ✉
                  </span>
                  {c.email}
                </dt>
                <dd>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
              <div className="contact-section__channel">
                <dt>
                  <span className="contact-section__icon" aria-hidden="true">
                    ☎
                  </span>
                  {c.phone}
                </dt>
                <dd>
                  <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
                </dd>
              </div>
              <div className="contact-section__channel">
                <dt>
                  <span className="contact-section__icon" aria-hidden="true">
                    ⌖
                  </span>
                  {c.location}
                </dt>
                <dd>{company.address}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            className="contact-section__form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact"
          >
            <div className="contact-section__form-glow" aria-hidden="true" />
            <label>
              <span>{c.formName}</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              <span>{c.formEmail}</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              <span>{c.formMessage}</span>
              <textarea name="message" rows={4} />
            </label>
            <button type="submit" className="btn btn--primary btn--full">
              {c.formSubmit}
            </button>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  )
}
