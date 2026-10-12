'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger } from '@/lib/gsap'

let lenis: Lenis | null = null

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // GSAP's ticker drives Lenis, and every Lenis scroll updates ScrollTrigger,
    // so scroll-based animations stay in step with the smoothed position.
    const instance = new Lenis({ autoRaf: false, anchors: { offset: -96 } })
    const update = (time: number) => instance.raf(time * 1000)

    instance.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    lenis = instance

    return () => {
      gsap.ticker.remove(update)
      instance.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    // Keep Lenis in sync with the scroll reset Next.js does on navigation.
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true })
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}
