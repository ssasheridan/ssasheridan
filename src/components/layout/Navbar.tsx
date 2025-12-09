'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Show navbar with background on non-home pages or when scrolled
  // Mobile: Transparent at top, translucent/glassy when scrolled
  // Desktop: Use scroll/page logic
  // Also check for event detail pages and other pages with banners
  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'
  const isEventDetailPage = pathname?.startsWith('/events/')
  const isGalleryDetailPage = pathname?.startsWith('/gallery/')
  const hasBannerPage = isHomePage || isAboutPage || isEventDetailPage || isGalleryDetailPage
  
  // Desktop: Show background on non-banner pages or when scrolled
  const showBackgroundDesktop = !hasBannerPage || scrolled
  
  // Mobile: Show translucent/glassy effect when scrolled (but transparent at top)
  const showMobileGlass = scrolled

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        // Mobile: Transparent at top, translucent when scrolled. Desktop: Use scroll/page logic
        showMobileGlass
          ? 'bg-white/70 backdrop-blur-md shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:shadow-none'
          : 'bg-transparent'
      } ${
        showBackgroundDesktop
          ? 'lg:bg-white/95 lg:backdrop-blur-lg lg:shadow-lg'
          : ''
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logos/logo.png"
                alt="SSA Sheridan Logo"
                width={48}
                height={48}
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
                priority
              />
            </motion.div>
            <div className="block max-w-[calc(100vw-120px)] sm:max-w-none">
              {/* Main title: Sikh Students Association - Always full text */}
              <p
                className={`font-display font-bold leading-tight ${
                  // Mobile: White when transparent, navy when glassy. Desktop: Use scroll/page logic
                  showMobileGlass
                    ? 'text-navy lg:text-white'
                    : 'text-white'
                } ${
                  showBackgroundDesktop && !showMobileGlass
                    ? 'lg:text-navy'
                    : ''
                } ${
                  // Text sizing: smaller on mobile, larger on desktop
                  'text-[10px] sm:text-xs md:text-sm lg:text-base'
                } ${
                  // Add drop shadow when transparent for better visibility
                  !showMobileGlass ? 'drop-shadow-lg' : ''
                }`}
              >
                Sikh Students Association
              </p>
              {/* Subtitle: Sheridan */}
              <p
                className={`text-[8px] sm:text-[9px] md:text-[10px] leading-tight ${
                  // Mobile: White/80 when transparent, softblue when glassy. Desktop: Use scroll/page logic
                  showMobileGlass
                    ? 'text-softblue lg:text-white/70'
                    : 'text-white/80'
                } ${
                  showBackgroundDesktop && !showMobileGlass
                    ? 'lg:text-softblue'
                    : ''
                } ${
                  // Add drop shadow when transparent for better visibility
                  !showMobileGlass ? 'drop-shadow-md' : ''
                }`}
              >
                Sheridan
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-khalsa'
                    : showBackgroundDesktop
                    ? 'text-navy hover:text-khalsa'
                    : 'text-white hover:text-khalsa'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-gold rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
            <Button href="/join" size="sm">
              Join SSA
            </Button>
          </div>

          {/* Mobile Menu Button - Hide when menu is open */}
          {!isOpen && (
            <button
              className="lg:hidden p-2 rounded-lg transition-colors z-[110] relative pointer-events-auto"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsOpen(true)
              }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              style={{ zIndex: 110 }}
            >
              <HiMenu
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  // Mobile: Navy when glassy, white when transparent. Desktop: Use scroll/page logic
                  showMobileGlass
                    ? 'text-navy lg:text-white'
                    : 'text-white'
                } ${
                  showBackgroundDesktop && !showMobileGlass
                    ? 'lg:text-navy'
                    : ''
                }`}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[105]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ 
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'fixed'
              }}
            />
            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed inset-0 right-0 w-full max-w-sm z-[110] shadow-2xl overflow-y-auto border-l-2 border-white/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ 
                top: 0,
                left: 'auto',
                right: 0,
                bottom: 0,
                position: 'fixed',
                height: '100vh',
                width: '100%',
                maxWidth: '24rem',
                background: 'linear-gradient(135deg, rgba(25, 36, 65, 0.95) 0%, rgba(35, 50, 88, 0.95) 50%, rgba(25, 36, 65, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(249, 166, 2, 0.05)'
              }}
            >
              {/* Header with Organization Name */}
              <div className="sticky top-0 z-20 bg-gradient-to-b from-navy/95 via-navy/90 to-transparent backdrop-blur-xl border-b border-white/10 pb-4">
                <div className="flex items-center justify-between p-4">
                  <div className="flex-1">
                    <p className="text-white font-display font-bold text-sm leading-tight mb-1">
                      Sikh Students Association
                    </p>
                    <p className="text-white/70 font-display text-xs">
                      Sheridan
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setIsOpen(false)
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm"
                    aria-label="Close menu"
                  >
                    <HiX className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col items-stretch h-full gap-3 pt-6 pb-24 px-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-4 text-base font-display font-medium rounded-xl transition-all backdrop-blur-sm ${
                        pathname === link.href
                          ? 'bg-gradient-to-r from-khalsa/30 to-khalsa/20 text-khalsa border-l-4 border-khalsa shadow-lg'
                          : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md border-l-4 border-transparent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Button href="/join" size="lg" className="w-full justify-center">
                    Join SSA
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

