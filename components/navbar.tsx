'use client'
import { useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
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

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/images/logo-fentrace.jpeg" 
            alt="FENT RACE" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white leading-tight">FENT RACE</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Servicio Técnico Integral</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Inicio</Link>
          
          {/* Dropdown Especialidades - Versión corregida */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
              Especialidades 
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="rounded-lg bg-gray-800 py-2 shadow-xl ring-1 ring-white ring-opacity-10 border border-gray-700">
                {specialties.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href} 
                    className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="#galeria" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Galería</Link>
          <Link href="#testimonios" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Testimonios</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
            <Phone className="h-4 w-4" /> Solicitar Servicio
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-300 hover:text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900 px-4 py-4 space-y-3 shadow-lg">
          <Link href="/" className="block text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Inicio</Link>
          <div className="pl-4 space-y-2 border-l-2 border-blue-600">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Especialidades</p>
            {specialties.map((service) => (
              <Link key={service.name} href={service.href} className="block text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
                {service.name}
              </Link>
            ))}
          </div>
          <Link href="#galeria" className="block text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Galería</Link>
          <Link href="#testimonios" className="block text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Testimonios</Link>
          <Link href="#contacto" className="block w-full text-center rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white mt-4 hover:bg-blue-700 transition-colors" onClick={() => setIsOpen(false)}>
            Solicitar Servicio
          </Link>
        </div>
      )}
    </nav>
  )
}