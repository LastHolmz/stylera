import Navigation from '@/components/layout/navigation'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import TechnologiesSection from '@/components/technologies-section'
import ProjectsSection from '@/components/projects-section'
import TestimonialsSection from '@/components/testimonials-section'
import CTASection from '@/components/cta-section'
import AboutSection from '@/components/about-section'
import TeamSection from '@/components/team-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/layout/footer'
import PulsingCircle from '@/components/pulsing-circle'
import PulsingCirclePhone from '@/components/pulsing-circle-phone'
import ShaderBackground from '@/components/shader-background'
import WhatsAppButton from '@/components/whats-app'
import LiveChatMock from '@/components/livechat'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function StyleraTechPortfolio({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <div className='relative'>
      <ShaderBackground>
        <Navigation dictionary={dictionary.nav} />
        <HeroSection dictionary={dictionary.homeHero} />
        <div>
          <div className='hidden md:block'>
            <PulsingCircle />
          </div>
          <div className='block md:hidden'>
            <PulsingCirclePhone />
          </div>
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <ServicesSection dictionary={dictionary.services} />
        <TechnologiesSection dictionary={dictionary.technologies} />
        <ProjectsSection dictionary={dictionary.projects} />
        <TestimonialsSection dictionary={dictionary.testimonials} />
        <AboutSection dictionary={dictionary.HomeWhoWeAre} />

        <TeamSection dictionary={dictionary.teamSection} />
        <CTASection dictionary={dictionary.cta} />
        <ContactSection dictionary={dictionary.contactUs} />
        <Footer dictionary={dictionary.footer} />
      </div>

      {/* Floating Buttons */}
      <div className='fixed bottom-6 right-6 flex items-end gap-3 z-50'>
        <LiveChatMock />
        <WhatsAppButton />
      </div>
    </div>
  )
}
