import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FENT RACE | Servicio Técnico en Aire Acondicionado, Refrigeración y Electricidad en Misiones',
  description:
    'Servicio técnico integral en Misiones: aire acondicionado, refrigeración, calefacción, electricidad, domótica y electrónica. Instalación, mantenimiento y reparación con más de 15 años de experiencia.',
  keywords: [
    'servicio técnico Misiones',
    'refrigeración Misiones',
    'aire acondicionado Posadas',
    'climatización industrial Misiones',
    'calefacción Misiones',
    'electricidad Misiones',
    'electricista Misiones',
    'domótica Misiones',
    'casas inteligentes Misiones',
    'electrónica Misiones',
    'reparación de placas electrónicas Misiones',
    'emergencias 24 horas Misiones',
    'cámaras frigoríficas Misiones',
    'FENT RACE',
    'técnico aire acondicionado Misiones',
    'mantenimiento aire acondicionado Posadas',
  ],
  openGraph: {
    title: 'FENT RACE | Servicio Técnico en Aire Acondicionado, Refrigeración y Electricidad en Misiones',
    description:
      'Aire acondicionado, refrigeración, calefacción, electricidad, domótica y electrónica para hogares, comercios e industrias en Misiones. Emergencias 24hs. +60 reseñas verificadas.',
    url: 'https://fentrace.com.ar',
    siteName: 'FENT RACE',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/logo-fentrace.png',
        width: 1200,
        height: 630,
        alt: 'FENT RACE - Servicio Técnico Integral',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FENT RACE | Servicio Técnico en Aire Acondicionado, Refrigeración y Electricidad en Misiones',
    description:
      'Aire acondicionado, refrigeración, calefacción, electricidad, domótica y electrónica en Misiones. Emergencias 24hs.',
    images: ['/images/logo-fentrace.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fentrace.com.ar',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}