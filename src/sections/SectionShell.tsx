import type { ReactNode } from 'react'
import { Reveal } from '../features/motion/Reveal'
import './SectionShell.css'

interface SectionShellProps {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
  action?: ReactNode
  alt?: boolean
}

export function SectionShell({ id, eyebrow, title, children, action, alt }: SectionShellProps) {
  return (
    <section id={id} className={`section-shell section ${alt ? 'section-shell--alt' : ''}`}>
      <div className="container">
        <Reveal>
          <header className="section-shell__head">
            <p className="eyebrow">{eyebrow}</p>
            <div className="section-shell__title-row">
              <h2 className="display-md">{title}</h2>
              {action}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
