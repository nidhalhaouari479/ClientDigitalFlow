"use client"

import { useEffect, useMemo, useRef, useState } from 'react'

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const match = useMemo(() => value.match(/^([+-]?\d+(?:\.\d+)?)(.*)$/), [value])
  const target = match ? Number(match[1]) : null
  const suffix = match?.[2] ?? ''
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node || target === null) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  useEffect(() => {
    if (!visible || target === null) return
    let frame = 0
    const frames = 42

    const tick = () => {
      frame += 1
      const progress = 1 - Math.pow(1 - frame / frames, 3)
      setCount(Math.round(target * progress))
      if (frame < frames) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [visible, target])

  if (target === null) return <span ref={ref}>{value}</span>

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
