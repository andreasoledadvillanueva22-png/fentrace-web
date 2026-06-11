export function Gallery() {
  const galleryImages = [
    { src: '/images/felipe-trabajo-1.jpeg', alt: 'Instalación de aire acondicionado' },
    { src: '/images/felipe-trabajo-2.jpeg', alt: 'Mantenimiento de cámara frigorífica' },
    { src: '/images/felipe-trabajo-3.jpeg', alt: 'Tablero eléctrico industrial' },
    { src: '/images/felipe-trabajo-4.jpeg', alt: 'Trabajo de domótica' },
    { src: '/images/felipe-trabajo-5.jpeg', alt: 'Reparación de placa electrónica' },
    { src: '/images/felipe-trabajo-6.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-7.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-8.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-9.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-10.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-11.jpeg', alt: 'Felipe trabajando en sitio' },
    { src: '/images/felipe-trabajo-12.jpeg', alt: 'Felipe trabajando en sitio' },
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Fotos de FENT RACE trabajando</h2>
          <p className="mt-2 text-gray-600">Trabajos reales en Misiones y alrededores</p>
        </div>

        {/* Carrusel Infinito */}
        <div className="relative overflow-hidden">
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Contenedor del carrusel - ancho automático basado en el contenido */}
          <div className="flex animate-scroll w-max">
            {/* Primer grupo de fotos */}
            {galleryImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-[25vw] px-3">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            {/* Segundo grupo duplicado para el efecto infinito */}
            {galleryImages.map((img, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 w-[25vw] px-3">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}