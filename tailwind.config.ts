import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#192441',
          dark: '#0f1729',
          light: '#243258',
        },
        softblue: {
          DEFAULT: '#8C99B8',
          light: '#A8B3CC',
          dark: '#6B7A9E',
        },
        khalsa: {
          DEFAULT: '#F9A602',
          light: '#FFBD3D',
          dark: '#D88F00',
        },
        kesri: {
          DEFAULT: '#F4A300',
          light: '#FFB833',
          dark: '#CC8800',
        },
        lightgrey: {
          DEFAULT: '#F5F6FA',
          dark: '#E8EAF0',
        },
        dark: '#0A0A0A',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/patterns/khanda-pattern.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 166, 2, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(249, 166, 2, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config

