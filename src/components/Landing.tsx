import { useEffect, useState, type CSSProperties } from 'react'
import { company } from '../data/company'
import { ContactForm } from './ContactForm'

export function Landing() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="canvas">
      <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--1" />
        <div className="aurora__blob aurora__blob--2" />
        <div className="aurora__blob aurora__blob--3" />
      </div>
      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#" className="nav__brand">
          <span className="nav__mark">M</span>
          <span className="nav__name">{company.name}</span>
        </a>
        <nav className="nav__links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact" className="nav__cta">
            Start a project
          </a>
        </nav>
      </header>

      <main>
        {/* 1 — Attention */}
        <section className="hero">
          <p className="label">Software studio · Since {company.foundedYear}</p>
          <h1 className="hero__title">
            Turn your idea into
            <em> software that works</em>
          </h1>
          <p className="hero__sub">{company.pitch}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--glow">
              Start a project
            </a>
            <a href="#work" className="btn btn--ghost">
              See what we build
            </a>
          </div>
          <div className="hero__orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="orbit-core" />
          </div>
        </section>

        {/* 2 — Proof */}
        <section className="proof" aria-label="Track record">
          {company.proof.map((item) => (
            <div key={item.label} className="proof__item">
              <span className="proof__value">{item.value}</span>
              <span className="proof__label">{item.label}</span>
            </div>
          ))}
        </section>

        {/* 3 — Offer */}
        <section id="work" className="section">
          <div className="section__head">
            <p className="label">What we build</p>
            <h2>One studio. Full stack.</h2>
          </div>
          <ul className="service-grid">
            {company.services.map((s, i) => (
              <li key={s.id} className="service-card" style={{ '--i': i } as CSSProperties}>
                <span className="service-card__idx">0{i + 1}</span>
                <h3>{s.label}</h3>
                <p>{s.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 4 — Differentiation */}
        <section className="section section--pillars">
          <div className="section__head">
            <p className="label">Why us</p>
            <h2>Built for teams who value clarity.</h2>
          </div>
          <div className="pillar-row">
            {company.pillars.map((p) => (
              <article key={p.title} className="pillar">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5 — Process → reduces friction */}
        <section id="process" className="section">
          <div className="section__head">
            <p className="label">How it works</p>
            <h2>Simple path from brief to launch.</h2>
          </div>
          <ol className="process">
            {company.process.map((step) => (
              <li key={step.step} className="process__step">
                <span className="process__num">{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 6 — Conversion */}
        <section id="contact" className="section contact">
          <div className="contact__grid">
            <div className="contact__copy">
              <p className="label">Contact</p>
              <h2>Ready when you are.</h2>
              <p className="contact__lead">
                Share a few lines about your project. We respond within one business day.
              </p>
              <ul className="contact__channels">
                <li>
                  <span className="contact__key">Email</span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <span className="contact__key">Phone</span>
                  <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
                </li>
                <li>
                  <span className="contact__key">Based in</span>
                  <span>{company.address}</span>
                </li>
              </ul>
              <div className="contact__social">
                <a href={company.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={company.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href={company.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {company.name}</span>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </footer>
    </div>
  )
}
