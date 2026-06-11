export function Videos() {
  // IDs de los Reels de Instagram que te pasó Felipe
  const reels = [
    {
      id: 'DT4CDT0jhAm',
      title: 'Instalación de Split Inverter',
    },
    {
      id: 'DS1LNu9Dt_k',
      title: 'Mantenimiento de Cámara Frigorífica',
    },
    {
      id: 'DSOHI5RjiWj',
      title: 'Trabajo en Tablero Eléctrico',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Domótica y Tecnología en Acción</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Mirá cómo transformamos hogares y comercios con soluciones inteligentes.
          </p>
        </div>

        {/* Video Principal de Domótica - YouTube Embed */}
        <div className="mb-16">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/_yqimPPhAMA" 
              className="absolute inset-0 w-full h-full"
              title="Video de Domótica FENT RACE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Reels de Instagram - Embeds reales */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Nuestros Trabajos en Instagram</h3>
          <p className="mt-2 text-gray-600">
            Seguinos en{' '}
            <a 
              href="https://www.instagram.com/fentrace.climatizacion" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline font-medium"
            >
              @fentrace.climatizacion
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Instagram Embed */}
              <div className="aspect-[9/16] bg-gray-100">
                <iframe 
                  src={`https://www.instagram.com/reel/${reel.id}/embed`}
                  className="w-full h-full"
                  title={reel.title}
                  allowFullScreen
                ></iframe>
              </div>
              {/* Título del Reel */}
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-900 text-sm text-center">{reel.title}</p>
                <a 
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-blue-600 mt-2 hover:underline"
                >
                  Ver en Instagram →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}