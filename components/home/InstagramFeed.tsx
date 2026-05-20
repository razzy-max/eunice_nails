'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const instagramPosts = Array.from({ length: 6 }, (_, i) => ({
  id: `ig_${i + 1}`,
  image: `/images/ig-${i + 1}.jpg`
}))

export default function InstagramFeed() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} className="text-charcoal" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-charcoal">
            @EuniceNails
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Follow us on Instagram for daily inspiration and exclusive content
          </p>
        </motion.div>

        {/* Instagram Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/euniceails"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gradient-to-br from-rose-nude/20 to-burnt-mocha/20 rounded-[12px] overflow-hidden group"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-cream flex items-center justify-center" />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: 1 }}
              >
                <Instagram size={32} className="text-ivory" />
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/euniceails"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-charcoal hover:text-rose-nude transition-colors"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
