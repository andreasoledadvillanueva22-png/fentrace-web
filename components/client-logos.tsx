export function ClientLogos() {
  // Usamos nombres ficticios de empresas industriales de Misiones/Posadas como placeholders
  const clients = [
    "Frigorífico Misiones", "Cámara de Comercio", "Supermercado Norte", 
    "Hotel Posadas Plaza", "Clínica San Lucas", "Logística Paraná"
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Empresas que confían en nosotros</h2>
          <p className="mt-2 text-gray-600">Brindamos soluciones a las industrias y comercios más importantes de la región.</p>
        </div>
        
        {/* Contenedor del Carrusel Infinito */}
        <div className="relative overflow-hidden">
          <div className="flex w-[200%] animate-scroll">
            {/* Primer grupo de logos */}
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 flex items-center justify-center px-8">
                <div className="h-16 w-40 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-sm border border-gray-200">
                  <span className="text-gray-500 font-bold text-sm text-center px-2">{client}</span>
                </div>
              </div>
            ))}
            {/* Segundo grupo (duplicado para el efecto infinito) */}
            {clients.map((client, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 w-1/6 flex items-center justify-center px-8">
                <div className="h-16 w-40 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 shadow-sm border border-gray-200">
                  <span className="text-gray-500 font-bold text-sm text-center px-2">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}