'use client'
import { useState } from 'react'
import { Snowflake, Wind, Flame, Zap, Home, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'

type ServiceCategory = {
  name: string
  items: string[]
}

type ServiceItem = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: typeof Snowflake
  image: string
  features?: string[]
  categories?: ServiceCategory[]
}

const servicesData: ServiceItem[] = [
  {
    id: 'refrigeracion',
    title: 'Refrigeración',
    subtitle: 'Control y registro de temperaturas',
    description: 'Heladeras familiares, comerciales, cámaras frigoríficas, vitrinas, freezers y centrales de frío.',
    icon: Snowflake,
    image: '/images/refrigeracion.png',
    features: [
      'Limpieza de evaporadores y condensadores',
      'Verificación de presiones de trabajo',
      'Inspección y reparación de fugas',
      'Control de consumos eléctricos',
      'Limpieza química de serpentinas',
      'Reparación de controles electrónicos',
      'Sustitución de ventiladores y motores'
    ]
  },
  {
    id: 'aires',
    title: 'Aires Acondicionados',
    subtitle: 'Climatización Profesional',
    description: 'Rooftop, Split frío/calor, Inverter, Multisplit, Sistemas VRV/VRF, Manejadoras de aire y Chillers.',
    icon: Wind,
    image: '/images/aire-acondicionado.png',
    features: [
      'Instalación y mantenimiento preventivo',
      'Limpieza de filtros y evaporadores',
      'Control de presiones y temperaturas',
      'Desinfección antibacteriana',
      'Reparación de pérdidas de refrigerante',
      'Cambio de capacitores y motores',
      'Reparación de placas y compresores'
    ]
  },
  {
    id: 'calefaccion',
    title: 'Calefacción',
    subtitle: 'Confort térmico con FENT RACE',
    description: 'FENT RACE instala y mantiene calderas, radiadores, losa radiante y calefones. Confort térmico garantizado para tu hogar o comercio en Misiones.',
    icon: Flame,
    image: '/images/calefaccion.png',
    features: [
      'Instalación de calderas y radiadores',
      'Mantenimiento de calefones',
      'Reparación de losa radiante',
      'Purga de radiadores y control de presión',
      'Limpieza de quemadores',
      'Detección de fugas en circuitos',
      'Asesoramiento energético personalizado'
    ]
  },
  {
    id: 'electricidad',
    title: 'Electricidad',
    subtitle: 'Soluciones Eléctricas Integrales',
    description: 'Servicios, soluciones, desarrollo, diseño, proyecto y ejecución integrales eléctricos residencial, comercial e industrial.',
    icon: Zap,
    image: '/images/electricidad.png',
    features: [
      'Termografías y mediciones de cargas',
      'Armado de tableros de automatización y potencia',
      'Informes técnicos y habilitaciones',
      'Certificaciones y regularizaciones eléctricas',
      'Trámites y planos eléctricos',
      'Tableros eléctricos y puesta a tierra',
      'Iluminación interior y exterior',
      'Bancos de capacitores',
      'Reparación de cortocircuitos',
      'Instalaciones hasta 13,2 kV',
      'Reparación de placas y variadores (electrónica)'
    ]
  },
  {
    id: 'domotica',
    title: 'Domótica',
    subtitle: 'Casas Inteligentes',
    description: 'Integración con Google Home y Amazon Alexa. Control centralizado y gestión energética inteligente.',
    icon: Home,
    image: '/images/domotica.png',
    features: [
      'Iluminación inteligente y control remoto',
      'Automatización de persianas y portones',
      'Control de climatización y riego',
      'Cámaras IP, alarmas y sensores',
      'Control de acceso biométrico',
      'Monitoreo remoto y seguridad'
    ]
  },
  {
    id: 'electronica',
    title: 'Electrónica',
    subtitle: 'Servicio Técnico de Electrónica',
    description: 'Reparación de placas electrónicas y componentes para todo tipo de equipos.',
    icon: Cpu,
    image: '/images/electronica.png',
    categories: [
      {
        name: 'Electrónica General',
        items: [
          'Reparación de placas electrónicas de heladeras de sistemas No Frost',
          'Cavas de Vino',
          'Aire Acondicionado',
          'Reparación de placas electrónicas',
          'Reparación de equipos inverter',
          'Reparación de módulos de potencia',
          'Reparación de placas evaporadoras',
          'Reparación de placas condensadoras',
          'Reparación de fuentes electrónicas',
          'Reparación de sensores de temperatura',
          'Reparación de motores electrónicos',
          'Diagnóstico de comunicación entre unidades',
          'Programación y configuración de placas'
        ]
      },
      {
        name: 'Calefacción',
        items: [
          'Reparación de placas electrónicas de calefactores',
          'Reparación de placas de calderas',
          'Reparación de sistemas de encendido electrónico',
          'Reparación de controles digitales',
          'Reparación de sensores de temperatura',
          'Reparación de termostatos electrónicos',
          'Diagnóstico de sistemas de seguridad'
        ]
      },
      {
        name: 'Electricidad Residencial, Comercial e Industrial',
        items: [
          'Diagnóstico electrónico de instalaciones',
          'Reparación de fuentes de alimentación',
          'Reparación de protectores de tensión',
          'Reparación de estabilizadores',
          'Reparación de temporizadores electrónicos',
          'Automatización eléctrica',
          'Programación de controles electrónicos'
        ]
      },
      {
        name: 'Domótica y Automatización',
        items: [
          'Automatización de iluminación',
          'Automatización de climatización',
          'Control remoto de equipos',
          'Programación de temporizadores',
          'Instalación de sensores inteligentes',
          'Control por Wi-Fi',
          'Configuración de sistemas inteligentes para hogares y comercios'
        ]
      },
      {
        name: 'Electrónica Industrial',
        items: [
          'Reparación de fuentes switching',
          'Reparación de fuentes conmutadas',
          'Reparación de placas electrónicas industriales',
          'Reparación de controladores electrónicos',
          'Diagnóstico de componentes electrónicos',
          'Reemplazo de componentes SMD',
          'Soldadura electrónica de precisión',
          'Reparación de circuitos impresos'
        ]
      },
      {
        name: 'Soldadoras Inverter',
        items: [
          'Reparación de placas de potencia',
          'Reparación de módulos IGBT',
          'Reparación de fuentes inverter',
          'Reparación de sistemas de control',
          'Diagnóstico electrónico completo'
        ]
      },
      {
        name: 'Laboratorio Electrónico',
        items: [
          'Reparación de placas electrónicas',
          'Cambio de componentes electrónicos',
          'Reparación de pistas dañadas',
          'Soldadura SMD',
          'Soldadura THT'
        ]
      }
    ]
  }
]

export function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestras Especialidades</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones técnicas integrales para sectores residenciales, comerciales e industriales en toda Misiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-24 group relative h-[420px] w-full cursor-pointer [perspective:1000px]"
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`relative h-full w-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] ${
                  flippedIndex === index 
                    ? '[transform:rotateY(180deg)]' 
                    : 'group-hover:[transform:rotateY(180deg)]'
                }`}
              >
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white rounded-xl overflow-hidden [backface-visibility:hidden]"
                  style={{ 
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/90 backdrop-blur-sm text-white shadow-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-1.5">{service.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                      <span className="hidden sm:inline">Pasa el mouse para ver más</span>
                      <span className="sm:hidden">Tocá para ver más</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div 
                  className="absolute inset-0 flex flex-col p-5 text-white rounded-xl bg-blue-700 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl border border-blue-600"
                >
                  <div className="flex items-center gap-3 mb-3 border-b border-blue-500/50 pb-3">
                    <service.icon className="h-7 w-7 text-blue-200" />
                    <div>
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-blue-100 mb-3 leading-relaxed">{service.description}</p>
                  
                  <div className="flex-grow overflow-y-auto pr-1 scrollbar-hide">
                    <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Características y Servicios:</h4>
                    {service.categories ? (
                      <div className="space-y-3">
                        {service.categories.map((category) => (
                          <div key={category.name}>
                            <h5 className="text-xs font-semibold text-blue-200 mb-1.5">{category.name}</h5>
                            <ul className="space-y-1.5">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-sm text-white">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                  <span className="leading-tight">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1.5">
                        {service.features?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-white">
                            <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}