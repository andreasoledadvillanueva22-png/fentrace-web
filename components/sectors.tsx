import { Home, Building2, Factory } from 'lucide-react'

const sectors = [
  {
    icon: Home,
    title: 'Residencial',
    description:
      'Confort y seguridad para tu hogar: instalación y reparación de aire acondicionado, calefacción y electricidad domiciliaria.',
  },
  {
    icon: Building2,
    title: 'Comercial',
    description:
      'Soluciones para locales, oficinas y gastronomía: refrigeración comercial, climatización y tableros eléctricos.',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description:
      'Proyectos de gran escala: frío industrial, sistemas VRV/Chillers, instalaciones trifásicas y mantenimiento programado.',
  },
]

export function Sectors() {
  return (
    <section id="sectores" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            A quién servimos
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Sectores que Atendemos
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Adaptamos cada solución a la escala y exigencia de tu proyecto.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="reveal group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <sector.icon className="size-7" />
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                {sector.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
