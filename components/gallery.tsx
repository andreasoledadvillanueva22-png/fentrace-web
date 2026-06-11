export function Gallery() {
  // Usamos las imágenes que ya tenés en public/images/
  const galleryImages = [
    { src: '/images/hero-tecnico.png', alt: 'Felipe trabajando' },
    { src: '/images/industrial-refrigeration.jpg', alt: 'Instalación industrial' },
    { src: '/images/electricidad.png', alt: 'Tablero eléctrico' },
    { src: '/images/aire-acondicionado.png', alt: 'Aire acondicionado' },
    { src: '/images/domotica.png', alt: 'Trabajo de domótica' },
    { src: '/images/electronica.png', alt: 'Electrónica' },
    { src: '/images/refrigeracion.png', alt: 'Refrigeración' },
    { src: '/images/calefaccion.png', alt: 'Calefacción' },
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Fotos de FENTRACE trabajando</h2>
          <p className="mt-2 text-gray-600">Trabajos reales en Misiones y alrededores</p>
        </div>

        {/* Carrusel Infinito */}
        <div className="relative overflow-hidden">
          {/* Gradientes laterales para suavizar los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-[200%] animate-scroll">
            {/* Primer grupo de fotos */}
            {galleryImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-3">
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
              <div key={`dup-${index}`} className="flex-shrink-0 w-1/4 px-3">
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