import { Star, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcelo Fernández',
    role: 'Cliente residencial - Posadas',
    text: 'Instalaron el split en menos de una hora y quedó perfecto. El equipo Inverter que me recomendaron bajó notablemente la factura de luz. Los recomiendo sin dudarlo.',
    rating: 5,
  },
  {
    name: 'Carlos M.',
    role: 'Comercio - Posadas',
    text: 'Excelente atención y rapidez. Solucionaron el problema de mi comercio en menos de 24 horas. Muy profesionales.',
    rating: 5,
  },
  {
    name: 'Laura G.',
    role: 'Casa inteligente - Misiones',
    text: 'Hicieron la instalación completa de domótica en mi casa. Ahora controlo todo desde el celular. Un lujo.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 6 reseñas verificadas en Google. La confianza de nuestros clientes es nuestro mejor respaldo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Texto */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Autor */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón a Google Reviews */}
        <div className="text-center">
          <a 
            href="https://g.page/r/CS1l1iuxq1FAEBE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Ver todas las reseñas en Google
            <ExternalLink className="h-5 w-5" />
          </a>
          <p className="mt-3 text-sm text-gray-500">
            ¿Ya fuiste cliente? <a href="https://g.page/r/CS1l1iuxq1FAEBE/review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Dejanos tu reseña</a>
          </p>
        </div>
      </div>
    </section>
  );
}