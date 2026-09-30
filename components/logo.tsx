import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { COMPANY } from '@/lib/data'

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Link href="/" className={cn('inline-flex shrink-0 items-center', className)} aria-label={`${COMPANY.name} home`}>
      <Image
        src="/cdf-logo.png"
        alt=""
        width={1777}
        height={885}
        priority
        className={cn('h-auto w-28 sm:w-32', invert && 'brightness-0 invert')}
      />
    </Link>
  )
}
