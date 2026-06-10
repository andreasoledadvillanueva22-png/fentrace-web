'use client'
import { useState } from 'react'
import { Menu, X, ChevronDown, Phone, Snowflake } from 'lucide-react'
import Link from 'next/link'

const specialties = [
  { name: 'Refrigeración', href: '#refrigeracion' },
  { name: 'Aires Acondicionados', href: '#aires' },
  { name: 'Domótica', href: '#domotica' },
  { name: 'Electricidad', href: '#electricidad' },
  { name: 'Electrónica', href: '#electronica' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Snowflake className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-gray-900">FENT <span className="text-blue-600">RACE</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Inicio</Link>
          
          {/* Dropdown Especialidades */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Especialidades <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 border border-gray-100">
                {specialties.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#galeria" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Galería</Link>
          <Link href="#testimonios" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonios</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            <Phone className="h-4 w-4" /> Solicitar Servicio
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-700">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <Link href="/" className="block text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Inicio</Link>
          <div className="pl-4 space-y-2 border-l-2 border-blue-100">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Especialidades</p>
            {specialties.map((service) => (
              <Link key={service.name} href={service.href} className="block text-sm text-gray-600" onClick={() => setIsOpen(false)}>
                {service.name}
              </Link>
            ))}
          </div>
          <Link href="#galeria" className="block text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Galería</Link>
          <Link href="#testimonios" className="block text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Testimonios</Link>
          <Link href="#contacto" className="block w-full text-center rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white mt-4" onClick={() => setIsOpen(false)}>
            Solicitar Servicio
          </Link>
        </div>
      )}
    </nav>
  )
}