import Image from 'next/image'
import { ShieldCheck, Clock, Award, Wrench, AlertTriangle, Phone } from 'lucide-react'
import { siteConfig, buildWhatsAppUrl } from '@/lib/site-config'

const badges = [
  { icon: ShieldCheck, label: 'Técnicos matriculados' },
  { icon: Clock, label: 'Respuesta rápida' },
  { icon: Award, label: '+15 años de experiencia' },
  { icon: Wrench, label: 'Garantía en trabajos' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-felipe.jpg"
          alt="Técnico de FENT RACE trabajando en un equipo de climatización industrial"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Misiones · Argentina
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Servicio Técnico Integral en Climatización y Electricidad
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Refrigeración, aire acondicionado, calefacción, electricidad y
            domótica (casas inteligentes) para hogares, comercios e industrias.
            Instalación, mantenimiento y reparación con respaldo profesional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                'Hola FENT RACE, quiero solicitar un presupuesto sin cargo.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-card px-6 py-3.5 text-base font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* Banner de Emergencias 24 hs */}
      <div className="relative border-y border-red-500/30 bg-red-600/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-white">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <AlertTriangle className="size-5" />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg leading-tight">
                  Emergencias 24 horas
                </p>
                <p className="text-xs sm:text-sm text-white/90">
                  Refrigeración (cámaras frigoríficas) y Electricidad
                </p>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-red-600 shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="size-4" />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>

      {/* Trust badges bar */}
      <div className="relative border-t border-primary-foreground/15 bg-primary/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
                <badge.icon className="size-5" />
              </span>
              <span className="text-sm font-medium leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}