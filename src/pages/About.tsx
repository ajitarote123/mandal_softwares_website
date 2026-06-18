import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { company } from '../data/company'

export function AboutPage() {
  return (
    <>
      <PageHero title="About Company" crumb="About" />
      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow" style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase' }}>
              About Us
            </p>
            <h2>{company.about.title}</h2>
            <p>{company.about.description}</p>
            <p>{company.about.extended}</p>
            <ul className="check-list">
              {company.about.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="phone-cta">
              <div className="phone-icon" aria-hidden="true">
                ☎
              </div>
              <div>
                <p style={{ margin: 0 }}>Call to ask any question</p>
                <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Request A Quote
            </Link>
          </div>
          <img className="about-image" src="/images/about.jpg" alt="About Mandal Softwares" />
        </div>
      </section>
    </>
  )
}
