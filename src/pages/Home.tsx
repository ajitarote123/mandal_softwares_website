import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { SectionTitle } from '../components/SectionTitle'
import { ServicesGrid } from '../components/ServicesGrid'
import { Stats } from '../components/Stats'
import { company } from '../data/company'

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionTitle eyebrow="About Us" title={company.about.title} />
            <p>{company.about.description}</p>
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
          <img className="about-image" src="/images/about.jpg" alt="Mandal Softwares team collaborating" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Why Choose Us" title="We Are Here to Grow Your Business Exponentially" />
          <div className="grid-3">
            {company.features.slice(0, 2).map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  ✦
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
            <img className="feature-image" src="/images/feature.jpg" alt="Team meeting" />
            {company.features.slice(2).map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  ✦
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Services" title="Custom IT Solutions for Your Successful Business" />
          <ServicesGrid />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Testimonial" title="What Our Clients Say About Our Services" />
          <div className="grid-3">
            {company.testimonials.slice(0, 3).map((item) => (
              <article key={item.name} className="testimonial-card">
                <blockquote>&ldquo;{item.text}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Team Members" title="Professional Stuffs Ready to Help Your Business" />
          <div className="grid-3">
            {company.team.map((member) => (
              <article key={member.name} className="team-card">
                <img src={member.image} alt={member.name} />
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social">
                    {member.social.linkedin && (
                      <a className="social-link" href={member.social.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
                        in
                      </a>
                    )}
                    {member.social.instagram && (
                      <a className="social-link" href={member.social.instagram} target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`}>
                        ig
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
