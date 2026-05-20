'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen bg-charcoal flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
      />

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-rose-nude/10 via-transparent to-burnt-mocha/10 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 flex flex-col items-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif text-ivory mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Editorial Luxury at Your Fingertips
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-ivory/80 mb-10 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium press-on nails crafted for the modern woman. Timeless, versatile, always on-brand.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" onClick={() => window.location.href = '/shop'}>
            Shop New Arrivals
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.location.href = '/collections'}>
            Explore Collections
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-8 z-20 text-ivory hover:text-rose-nude transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
