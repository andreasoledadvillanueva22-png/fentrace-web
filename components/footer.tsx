import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig, buildWhatsAppUrl } from '@/lib/site-config'

const serviceLinks = [
  'Refrigeración',
  'Aires Acondicionados',
  'Calefacción',
  'Domótica',
  'Electricidad',
]

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

// SVGs inline para redes sociales
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 2 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo-fentrace.png" 
                alt="FENT RACE" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white leading-tight">
                  FENT RACE
                </span>
                <span className="text-[10px] text-background/50 uppercase tracking-wider">
                  Servicio Técnico Integral
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Servicio técnico integral en refrigeración, climatización,
              domótica, electricidad y electrónica en {siteConfig.location}.
            </p>
            {/* Redes Sociales */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/FENTRACE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguinos en Facebook"
                className="inline-flex size-9 items-center justify-center rounded-md bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/fentrace.climatizacion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguinos en Instagram"
                className="inline-flex size-9 items-center justify-center rounded-md bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.tiktok.com/@fent.climatizacion"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguinos en TikTok"
                className="inline-flex size-9 items-center justify-center rounded-md bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <TikTokIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={buildWhatsAppUrl('Hola FENT RACE, quiero hacer una consulta.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-background/70 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-background/70">
                <Mail className="size-4 shrink-0" />
                {siteConfig.email}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-background/70">
                <MapPin className="size-4 shrink-0" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-center">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.tagline}.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}