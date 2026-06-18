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
  title: 'FENT RACE | Servicio Técnico Integral en Misiones',
  description:
    'FENT RACE — Servicio técnico integral en refrigeración, climatización, calefacción y electricidad para clientes residenciales, comerciales e industriales en Misiones, Argentina.',
  keywords: [
    'refrigeración Misiones',
    'aire acondicionado Misiones',
    'climatización industrial',
    'calefacción',
    'electricidad trifásica',
    'servicio técnico Misiones',
    'FENT RACE',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'FENT RACE | Servicio Técnico Integral',
    description:
      'Refrigeración, climatización, calefacción y electricidad para hogares, comercios e industrias en Misiones, Argentina.',
    locale: 'es_AR',
    type: 'website',
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
