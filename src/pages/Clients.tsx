import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { company } from '../data/company'

export function ClientsPage() {
  return (
    <>
      <PageHero title="Our Clients" crumb="Clients" />
      <section className="section section-alt">
        <div className="container">
          <SectionTitle eyebrow="Testimonial" title="What Our Clients Say About Our Services" />
          <div className="grid-3">
            {company.testimonials.map((item) => (
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
    </>
  )
}
