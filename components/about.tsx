const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+1.500', label: 'Servicios realizados' },
  { value: '4', label: 'Especialidades técnicas' },
  { value: '100%', label: 'Trabajos garantizados' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">
            Profesionalismo, confianza y respuesta rápida
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
            En FENT RACE combinamos experiencia técnica, herramientas
            adecuadas y compromiso con cada cliente. Atendemos hogares,
            comercios e industrias en toda la provincia de Misiones.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="reveal rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center"
            >
              <dt className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-primary-foreground/80">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
