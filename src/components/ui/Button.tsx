'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  external?: boolean
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-full
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-khalsa
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variants = {
    primary: `
      gradient-gold text-navy
      hover:shadow-lg hover:shadow-khalsa/30
      active:scale-95
    `,
    secondary: `
      bg-navy text-white
      hover:bg-navy-light hover:shadow-lg
      active:scale-95
    `,
    outline: `
      border-2 border-khalsa text-khalsa bg-transparent
      hover:bg-khalsa hover:text-navy
      active:scale-95
    `,
    ghost: `
      text-navy bg-transparent
      hover:bg-navy/10
      active:scale-95
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { duration: 0.2 },
  }

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          {...motionProps}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <Link href={href} className={combinedStyles}>
        <motion.span
          className="inline-flex items-center gap-2"
          {...motionProps}
        >
          {children}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

