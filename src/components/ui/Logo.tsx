'use client'

import Image from 'next/image'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
  priority?: boolean
}

/**
 * Real clinic logo (Dr. Kadri Badr — Cabinet Dentaire).
 * The source PNG is dark on transparent, so on dark backgrounds we
 * invert it to white via CSS filter (variant="light").
 */
export default function Logo({ variant = 'light', className = '', priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Dr. Kadri Badr — Cabinet Dentaire"
      width={185}
      height={117}
      priority={priority}
      className={`${variant === 'light' ? 'brightness-0 invert' : ''} ${className}`}
    />
  )
}
