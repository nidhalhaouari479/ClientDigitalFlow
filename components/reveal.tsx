'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: delay / 1000,
            ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top bottom-=40', once: true },
          },
        )
      })
    },
    { scope: ref, dependencies: [delay] },
  )

  return (
    <Tag ref={ref} className={cn('opacity-0 motion-reduce:opacity-100', className)}>
      {children}
    </Tag>
  )
}
