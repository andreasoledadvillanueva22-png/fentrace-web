'use client'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ClientLogos } from '@/components/client-logos'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Videos } from '@/components/videos'
import { Sectors } from '@/components/sectors'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { siteConfig } from '@/lib/site-config'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: siteConfig.name,
  description: 'Servicio técnico integral en refrigeración, climatización, domótica, electricidad y electrónica.',
  areaServed: 'Posadas, Misiones, Argentina',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Posadas',
    addressRegion: 'Misiones',
    addressCountry: 'AR',
  },
  email: siteConfig.email,
  telephone: siteConfig.phoneDisplay,
  openingHours: 'Mo-Sa 08:00-20:00',
}

export default function Page() {
  const ref = useScrollReveal()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main ref={ref}>
        <Hero />
        <Services />
        <ClientLogos />
        <Gallery />
        <Testimonials />
        <Videos />
        <Sectors />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}