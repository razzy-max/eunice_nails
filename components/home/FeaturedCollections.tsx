'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { mockCollections } from '@/lib/mock-data/collections'
import clsx from 'clsx'

export default function FeaturedCollections() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-charcoal">
            Curated Collections
          </h2>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-max gap-6">
          {mockCollections.map((collection, i) => {
            const isLarge = i === 0 || i === 3
            const rowSpan = isLarge ? 'md:row-span-2' : ''
            const colSpan = isLarge ? 'md:col-span-2' : ''

            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/collections/${collection.slug}`}>
                  <div
                    className={clsx(
                      'relative h-64 md:h-96 rounded-[12px] overflow-hidden group cursor-pointer',
                      colSpan,
                      rowSpan
                    )}
                    style={{
                      background: `linear-gradient(135deg, ${collection.color}20, ${collection.color}40)`
                    }}
                  >
                    {/* Background Color Based on Collection */}
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${collection.color}15` }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-end justify-end p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
                      <motion.div
                        className="text-right"
                        whileHover={{ x: 10 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-2">
                          {collection.name}
                        </h3>
                        <p className="text-sm text-ivory/80 mb-4">
                          {collection.description}
                        </p>
                        <span className="inline-block text-ivory text-sm hover:underline">
                          Explore →
                        </span>
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-charcoal/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
