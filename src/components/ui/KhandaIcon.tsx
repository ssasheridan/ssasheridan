'use client'

import { motion } from 'framer-motion'

interface KhandaIconProps {
  className?: string
  size?: number
  animated?: boolean
}

export default function KhandaIcon({
  className = '',
  size = 100,
  animated = false,
}: KhandaIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: animated ? 360 : 0 
      }}
      transition={{ 
        duration: animated ? 30 : 0.5,
        repeat: animated ? Infinity : 0,
        ease: animated ? 'linear' : 'easeOut'
      }}
    >
      {/* Simplified Khanda Symbol */}
      <path
        d="M50 5 L50 95 M30 25 Q50 35 70 25 M30 75 Q50 65 70 75 M20 50 A30 30 0 0 1 80 50 A30 30 0 0 1 20 50"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      {/* Chakkar (circle) */}
      <circle
        cx="50"
        cy="50"
        r="25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Kirpans (swords) */}
      <path
        d="M25 20 Q30 50 25 80 M75 20 Q70 50 75 80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

