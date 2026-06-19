import { SeoHead } from '../components/SeoHead'
import { Shell } from '../components/layout/Shell'
import { AudienceSection } from '../sections/AudienceSection'
import { CapabilitiesSection } from '../sections/CapabilitiesSection'
import { ClientsSection } from '../sections/ClientsSection'
import { ContactSection } from '../sections/ContactSection'
import { HeroSection } from '../sections/HeroSection'
import { PartnershipSection } from '../sections/PartnershipSection'
import { ProcessSection } from '../sections/ProcessSection'
import { ProofSection } from '../sections/ProofSection'
import { ReviewsSection } from '../sections/ReviewsSection'
import { ServicesSection } from '../sections/ServicesSection'
import { WorkSection } from '../sections/WorkSection'

export function Site() {
  return (
    <Shell>
      <SeoHead />
      <HeroSection />
      <ProofSection />
      <PartnershipSection />
      <AudienceSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <ReviewsSection />
      <ContactSection />
    </Shell>
  )
}
