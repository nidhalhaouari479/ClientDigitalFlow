'use client'

import { useEffect, useState } from 'react'

// Live clock for a time zone. Renders a placeholder on the server to avoid hydration mismatches.
export function LocalTime({ timeZone, locale = 'en', className }: { timeZone: string; locale?: string; className?: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone })
    const update = () => setTime(format.format(new Date()))
    update()
    const id = window.setInterval(update, 15_000)
    return () => window.clearInterval(id)
  }, [timeZone, locale])

  return (
    <time suppressHydrationWarning className={className}>
      {time ?? '--:--'}
    </time>
  )
}
