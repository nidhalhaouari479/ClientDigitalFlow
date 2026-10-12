'use client'

import Link from 'next/link'
import StarBorder from '@/components/react-bits/StarBorder'
import { cn } from '@/lib/utils'

// Primary CTA with the React Bits StarBorder light trail around the edge.
export function StarButtonLink({
  href,
  size = 'lg',
  className,
  children,
}: {
  href: string
  size?: 'md' | 'lg'
  className?: string
  children: React.ReactNode
}) {
  // Internal routes go through next/link; tel:, mailto: and external URLs use a plain anchor.
  const internal = href.startsWith('/')

  return (
    <StarBorder
      as={internal ? Link : 'a'}
      href={href}
      radius={size === 'lg' ? 8 : 6}
      duration={5}
      glow={0.8}
      color="#ffffff"
      backgroundColor="var(--primary)"
      textColor="var(--primary-foreground)"
      borderColor="rgba(255, 255, 255, 0.25)"
      className={cn(
        'whitespace-nowrap transition-[filter] hover:brightness-110',
        size === 'lg' ? 'h-12 px-6 text-[0.95rem]' : 'h-10 px-4 py-0 text-sm',
        className,
      )}
    >
      {children}
    </StarBorder>
  )
}
