import { Shell } from '../components/layout/Shell'
import { ClientsSection } from '../sections/ClientsSection'
import { ContactSection } from '../sections/ContactSection'
import { DevSupportSection } from '../sections/DevSupportSection'
import { HeroSection } from '../sections/HeroSection'
import { ProcessSection } from '../sections/ProcessSection'
import { ProofSection } from '../sections/ProofSection'
import { ReviewsSection } from '../sections/ReviewsSection'
import { ServicesSection } from '../sections/ServicesSection'
import { WorkSection } from '../sections/WorkSection'

export function Site() {
  return (
    <Shell>
      <HeroSection />
      <ProofSection />
      <DevSupportSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <ReviewsSection />
      <ProcessSection />
      <ContactSection />
    </Shell>
  )
}
