'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { mockTestimonials } from '@/lib/mock-data/testimonials'
import { RatingStars } from '@/components/ui/PriceDisplay'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length)
  }

  // Get testimonials to show (3 desktop, 1 mobile)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(mockTestimonials[(currentIndex + i) % mockTestimonials.length])
    }
    return result
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-16 md:py-24 bg-cream/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-charcoal">
            Love from Our Customers
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Real reviews from real Eunice Nails lovers
          </p>
        </motion.div>

        {/* Desktop Grid (3 testimonials) */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-ivory border border-cream rounded-[12px] p-8"
              >
                {/* Rating */}
                <RatingStars rating={testimonial.rating} />

                {/* Quote */}
                <p className="mt-4 text-charcoal/80 text-sm leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-nude/20" />
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-xs text-charcoal/60">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel (1 testimonial) */}
        <div className="md:hidden mb-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`mobile-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-ivory border border-cream rounded-[12px] p-6"
            >
              {/* Rating */}
              <RatingStars rating={mockTestimonials[currentIndex].rating} />

              {/* Quote */}
              <p className="mt-4 text-charcoal/80 text-sm leading-relaxed mb-6">
                "{mockTestimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-nude/20" />
                <div>
                  <p className="font-semibold text-charcoal text-sm">{mockTestimonials[currentIndex].name}</p>
                  {mockTestimonials[currentIndex].role && (
                    <p className="text-xs text-charcoal/60">{mockTestimonials[currentIndex].role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-3 border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {mockTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-charcoal w-8' : 'bg-charcoal/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-3 border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
