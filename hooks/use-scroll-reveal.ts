'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they scroll into view. Lightweight replacement for AOS.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = containerRef.current ?? document
    const elements = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}
