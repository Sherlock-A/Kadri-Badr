import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import ServicesSection from '@/components/sections/ServicesSection'
import InternationalSection from '@/components/sections/InternationalSection'
import DoctorSection from '@/components/sections/DoctorSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <InternationalSection />
      <DoctorSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
