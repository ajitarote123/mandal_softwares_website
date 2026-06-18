import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { ServicesGrid } from '../components/ServicesGrid'

export function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" />
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Services" title="Custom IT Solutions for Your Successful Business" />
          <ServicesGrid />
        </div>
      </section>
    </>
  )
}
