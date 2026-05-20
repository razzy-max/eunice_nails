'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Sparkles } from 'lucide-react'

export default function StyleRecommender() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rose-nude/20 to-burnt-mocha/20 rounded-[12px] p-8 md:p-16 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles size={40} className="text-burnt-mocha" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-charcoal">
            Discover Your Perfect Nails
          </h2>

          <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto text-lg">
            Take our quick style quiz and get personalized nail recommendations based on your aesthetic, lifestyle, and preferences.
          </p>

          <Button variant="primary" size="lg" onClick={() => window.location.href = '#'}>
            Start the Quiz
          </Button>

          <p className="text-sm text-charcoal/50 mt-4">
            ~2 minutes • No signup required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
