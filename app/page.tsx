'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
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
  description:
    'Servicio técnico integral en refrigeración, climatización, calefacción y electricidad.',
  areaServed: 'Misiones, Argentina',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Misiones',
    addressCountry: 'AR',
  },
  email: siteConfig.email,
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
        <Sectors />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
