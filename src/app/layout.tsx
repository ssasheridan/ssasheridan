import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ssa-sheridan.vercel.app'),
  title: {
    default: 'Sikh Students Association, Sheridan (SSA Sheridan)',
    template: '%s | SSA Sheridan',
  },
  description:
    'SSA Sheridan is a non-profit student club dedicated to promoting Sikhi, seva, inclusivity, and student support at Sheridan College. Join events, learn Sikh values, and be part of a welcoming community built on humility, service, and inclusivity.',
  keywords: [
    'Sikh Students Association Sheridan',
    'SSA Sheridan',
    'Sikh Club Sheridan College',
    'Sheridan Sikh Students',
    'Sikhi Club SSU',
    'Sikh Youth Canada',
    'Sikh Events Sheridan',
    'Sikh Awareness Sheridan College',
    'Sikh Religion Students Canada',
  ],
  authors: [{ name: 'SSA Sheridan' }],
  creator: 'Sikh Students Association, Sheridan',
  publisher: 'SSA Sheridan',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    siteName: 'SSA Sheridan',
    title: 'Sikh Students Association, Sheridan (SSA Sheridan)',
    description:
      'Empowering Students, Celebrating Sikhi. Your Sheridan Support Hub. Join our community of Sikh students at Sheridan College.',
    images: [
      {
        url: '/banners/Banner_khanda.png',
        width: 1200,
        height: 630,
        alt: 'SSA Sheridan - Empowering Students, Celebrating Sikhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSA Sheridan - Empowering Students, Celebrating Sikhi',
    description:
      'Join SSA Sheridan - Your Sheridan Support Hub. Promoting Sikhi, seva, and inclusivity at Sheridan College.',
    images: ['/banners/Banner_khanda.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logos/logo.png',
    apple: '/logos/logo.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

