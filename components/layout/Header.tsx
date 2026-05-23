'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/stores/cartStore'
import clsx from 'clsx'

const ANNOUNCEMENT = 'Free shipping on orders over $50'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const cartItems = useCartStore(state => state.items)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const shouldReduceMotion = useReducedMotion()
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  React.useEffect(() => {
    let raf = 0
    const thresholdEnter = 120
    const thresholdLeave = 80
    const handleScroll = () => {
      const y = window.scrollY
      // Add small hysteresis to avoid flicker when hovering near the threshold
      setIsSticky(prev => {
        if (prev && y < thresholdLeave) return false
        if (!prev && y > thresholdEnter) return true
        return prev
      })
    }
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(handleScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close mobile menu automatically when header is scrolled out of view
  React.useEffect(() => {
    const onScroll = () => {
      if (!isMobileMenuOpen) return
      const headerEl = headerRef.current
      if (!headerEl) return
      const rect = headerEl.getBoundingClientRect()
      if (rect.bottom <= 0) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobileMenuOpen])

  // Close mobile menu when viewport becomes desktop-sized
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isMobileMenuOpen])

  return (
    <>
      <header ref={headerRef} className="bg-ivory border-b border-cream sticky top-0 z-40 transition-all duration-200">
        {/* Announcement Bar */}
        <div className="bg-charcoal text-ivory text-xs py-2 text-center">
          {ANNOUNCEMENT}
        </div>

        {/* Main Header */}
        <div className={clsx(
          'transition-all duration-300',
          isSticky ? 'py-2' : 'py-4'
        )}>
          <div className="container flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-lg font-serif font-bold">
              Eunice Nails
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm">
              <div className="relative group">
                <a href="/shop" className="hover:text-rose-nude transition-colors flex items-center gap-1">
                  Shop
                </a>
                {/* Mega Menu - no gap, smooth transition */}
                <div className="absolute left-0 top-full hidden group-hover:block bg-ivory border border-cream rounded-[10px] shadow-lg min-w-[300px] py-2 px-4">
                  <div className="space-y-2 text-xs">
                    <a href="/shop?shape=almond" className="block px-3 py-2 hover:bg-cream rounded transition-colors">Almond Shape</a>
                    <a href="/shop?shape=coffin" className="block px-3 py-2 hover:bg-cream rounded transition-colors">Coffin Shape</a>
                    <a href="/shop?shape=square" className="block px-3 py-2 hover:bg-cream rounded transition-colors">Square Shape</a>
                    <a href="/shop?length=short" className="block px-3 py-2 hover:bg-cream rounded transition-colors">Short Length</a>
                  </div>
                </div>
              </div>
              <a href="/collections" className="hover:text-rose-nude transition-colors">Collections</a>
              <a href="/wholesale" className="hover:text-rose-nude transition-colors">Wholesale</a>
              <a href="/about" className="hover:text-rose-nude transition-colors">About</a>
              <a href="/journal" className="hover:text-rose-nude transition-colors">Journal</a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search products"
                className="p-2 hover:bg-cream rounded-lg transition-colors"
              >
                <Search size={20} />
              </button>
              <a
                href="/account"
                aria-label="Account"
                className="p-2 hover:bg-cream rounded-lg transition-colors"
              >
                <User size={20} />
              </a>
              <a
                href="/account/wishlist"
                aria-label="Wishlist"
                className="p-2 hover:bg-cream rounded-lg transition-colors"
              >
                <Heart size={20} />
              </a>
              <a
                href="/cart"
                aria-label={`Cart with ${cartCount} items`}
                className="p-2 hover:bg-cream rounded-lg transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-rust text-ivory text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden p-2 hover:bg-cream rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 top-[90px] bg-black/20 z-30"
          onClick={() => setIsSearchOpen(false)}
        >
          <div className="container py-6" onClick={e => e.stopPropagation()}>
              <div className="relative">
              <input
                type="text"
                placeholder="Search products, collections, articles..."
                autoFocus
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className="w-full px-4 py-3 rounded-[10px] border border-cream bg-ivory"
                onKeyDown={e => {
                  if (e.key === 'Escape') return setIsSearchOpen(false)
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    const q = searchValue.trim()
                    if (q.length > 0) {
                      setIsSearchOpen(false)
                      router.push(`/shop?q=${encodeURIComponent(q)}`)
                    }
                  }
                }}
              />
              <div className="absolute top-full left-0 right-0 mt-2 bg-ivory border border-cream rounded-[10px] max-h-96 overflow-y-auto">
                <div className="p-4 text-sm text-charcoal/60">Start typing to search...</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.22, ease: 'easeInOut' }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-20 lg:hidden mt-[90px]"
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.26, ease: 'easeInOut' }}
              className="fixed top-[90px] left-0 right-0 bg-cream border-b border-ivory z-30 lg:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              <nav className="container py-4 flex flex-col gap-2">
                <a href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 hover:bg-ivory rounded transition-colors">Shop</a>
                <a href="/collections" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 hover:bg-ivory rounded transition-colors">Collections</a>
                <a href="/wholesale" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 hover:bg-ivory rounded transition-colors">Wholesale</a>
                <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 hover:bg-ivory rounded transition-colors">About</a>
                <a href="/journal" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 hover:bg-ivory rounded transition-colors">Journal</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
