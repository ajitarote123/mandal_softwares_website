import { company } from '../data/company'

const serviceIcons: Record<string, string> = {
  desktop: '🖥️',
  chart: '📊',
  code: '💻',
  mobile: '📱',
  cart: '🛒',
}

export function ServicesGrid({ showCta = true }: { showCta?: boolean }) {
  return (
    <div className="grid-3">
      {company.services.map((service) => (
        <article key={service.title} className="service-card">
          <div className="service-icon" aria-hidden="true">
            {serviceIcons[service.icon]}
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
      {showCta && (
        <article className="service-cta">
          <h3>Think Less Do More...</h3>
          <p>Get specialized support to resolve any of your business-related problems</p>
          <a className="phone" href={`tel:${company.phoneTel}`}>
            {company.phone}
          </a>
        </article>
      )}
    </div>
  )
}
