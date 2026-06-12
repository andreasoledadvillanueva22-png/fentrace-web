export function ClientLogos() {
  const clientLogos = [
    { src: '/images/logo-cliente-1.jpg', alt: 'Cliente 1' },
    { src: '/images/logo-cliente-2.jpg', alt: 'Cliente 2' },
    { src: '/images/logo-cliente-3.jpg', alt: 'Cliente 3' },
    { src: '/images/logo-cliente-4.jpg', alt: 'Cliente 4' },
    { src: '/images/logo-cliente-5.jpg', alt: 'Cliente 5' },
    { src: '/images/logo-cliente-6.jpg', alt: 'Cliente 6' },
    { src: '/images/logo-cliente-7.jpg', alt: 'Cliente 7' },
    { src: '/images/logo-cliente-8.jpg', alt: 'Cliente 8' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Empresas y Marcas con las que trabajamos</h2>
          <p className="mt-2 text-gray-600">Instalamos y reparamos las mejores marcas del mercado.</p>
        </div>
        
        {/* Carrusel Infinito */}
        <div className="relative overflow-hidden">
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll w-max">
            {/* Primer grupo de logos */}
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[16vw] px-4 sm:px-6">
                <div className="h-24 sm:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-16 sm:max-h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            {/* Segundo grupo duplicado para el efecto infinito */}
            {clientLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 w-[40vw] sm:w-[25vw] md:w-[20vw] lg:w-[16vw] px-4 sm:px-6">
                <div className="h-24 sm:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-16 sm:max-h-14 max-w-full object-contain"
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