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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors z-[110] relative pointer-events-auto"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ zIndex: 110 }}
          >
            {isOpen ? (
              <HiX
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
            ) : (
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
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ top: 0 }}
            />
            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed inset-0 right-0 w-full max-w-sm bg-navy/98 backdrop-blur-lg z-[60] shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ top: 0 }}
            >
              {/* Close Button inside Menu Panel */}
              <div className="sticky top-0 bg-navy/98 backdrop-blur-lg z-10 flex justify-end p-4 border-b border-white/10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="flex flex-col items-stretch h-full gap-4 pt-4 pb-24 px-6">
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
                      className={`block px-4 py-3 text-lg font-display font-medium rounded-lg transition-colors ${
                        pathname === link.href
                          ? 'bg-khalsa/20 text-khalsa border-l-4 border-khalsa'
                          : 'text-white hover:bg-white/10 hover:text-khalsa'
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

