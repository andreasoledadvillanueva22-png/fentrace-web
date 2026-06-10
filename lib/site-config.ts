// Configuración central del sitio. Reemplazá estos datos por los reales de FENT RACE.
export const siteConfig = {
  name: 'FENT RACE',
  tagline: 'Servicio Técnico Integral',
  // Número de WhatsApp en formato internacional sin "+" ni espacios.
  whatsapp: '5493764697710',
  phoneDisplay: '+54 9 3764 69-7710',
  email: 'fentrace@gmail.com',
  facebook: 'https://www.facebook.com/FENTRACE/',
  location: 'Misiones, Argentina',
  hours: 'Lun a Sáb · 8:00 a 20:00 hs',
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}
