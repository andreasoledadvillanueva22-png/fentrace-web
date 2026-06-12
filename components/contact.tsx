'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, AlertTriangle } from 'lucide-react'
import { siteConfig, buildWhatsAppUrl } from '@/lib/site-config'

const serviceOptions = [
  'Refrigeración',
  'Aire Acondicionado',
  'Calefacción',
  'Electricidad',
  'Otro / Consulta general',
]

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: siteConfig.phoneDisplay },
  { icon: Mail, label: 'Email', value: siteConfig.email },
  { icon: MapPin, label: 'Zona', value: siteConfig.location },
  { icon: Clock, label: 'Horarios', value: siteConfig.hours },
]

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: serviceOptions[0],
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Hola FENT RACE 👋
Mi nombre es *${form.name || 'Cliente'}*.
Servicio de interés: *${form.service}*.
Teléfono de contacto: ${form.phone || 'no indicado'}.
${form.message ? `\nConsulta: ${form.message}` : ''}`
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Solicitá tu presupuesto sin cargo
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Completá el formulario y te contactamos por WhatsApp a la
              brevedad. También podés escribirnos o llamarnos directamente.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* 🚨 BLOQUE DE EMERGENCIAS 24 HS */}
            <div className="mt-8 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <AlertTriangle className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-red-700 text-base">
                    🚨 Emergencias 24 horas
                  </h3>
                  <p className="mt-1 text-sm text-red-600 leading-relaxed">
                    Atención urgente fuera de horario para:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm font-medium text-red-700">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-500" />
                      Refrigeración (cámaras frigoríficas)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-red-500" />
                      Electricidad (fallas y cortocircuitos)
                    </li>
                  </ul>
                  <p className="mt-3 text-xs text-red-600/80">
                    Llamá directamente al{' '}
                    <a
                      href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`}
                      className="font-bold underline hover:text-red-800"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Nombre y apellido
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Ej: 376 4XX-XXXX"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Servicio requerido
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Contanos qué necesitás..."
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-accent"
              >
                <Send className="size-4" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}