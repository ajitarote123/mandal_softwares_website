import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './ClientsSection.css'

function initial(name: string) {
  return name.slice(0, 2).toUpperCase()
}

export function ClientsSection() {
  const { t } = useI18n()
  const c = t.sections.clients

  return (
    <SectionShell id="clients" eyebrow={c.eyebrow} title={c.title} alt>
      <div className="clients-section__track" aria-hidden="true">
        <div className="clients-section__marquee">
          {[...c.names, ...c.names].map((name, i) => (
            <span key={`${name}-${i}`} className="clients-section__pill">
              <span className="clients-section__avatar">{initial(name)}</span>
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="clients-section__grid stagger">
        {c.names.map((name) => (
          <Reveal key={name} variant="scale">
            <div className="clients-section__card surface">
              <span className="clients-section__avatar clients-section__avatar--lg">
                {initial(name)}
              </span>
              <span>{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
