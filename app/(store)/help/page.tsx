'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { mockFAQs } from '@/lib/mock-data/help'

export default function HelpPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: 'shipping', label: 'Shipping' },
    { id: 'returns', label: 'Returns & Exchanges' },
    { id: 'sizing', label: 'Sizing' },
    { id: 'products', label: 'Products' },
    { id: 'account', label: 'Account' }
  ]

  const filteredFAQs = mockFAQs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Help Center</h1>
            <p className="text-lg text-ivory/90">
              Got questions? We've got answers. Find help with shipping, sizing, products, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-ivory border-b border-cream">
        <div className="container max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-charcoal/40" size={20} />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-cream focus:border-rose-nude focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream border-b border-cream/50">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-charcoal text-ivory'
                  : 'bg-ivory border border-charcoal/10 text-charcoal hover:bg-cream'
              }`}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-charcoal text-ivory'
                    : 'bg-ivory border border-charcoal/10 text-charcoal hover:bg-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container max-w-3xl">
          {filteredFAQs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-charcoal/60 mb-4">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory(null)
                }}
                className="text-rose-nude hover:underline font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="space-y-2">
              {filteredFAQs.map((faq, idx) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-cream rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream transition-colors text-left"
                  >
                    <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-cream"
                      >
                        <div className="px-6 py-4 text-charcoal/80 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Didn't find what you're looking for?</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Our AI stylist is available 24/7 to answer your questions. Or reach out to our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-charcoal text-ivory hover:bg-charcoal/90 transition-colors font-medium">
              Chat with AI Stylist
            </button>
            <a
              href="mailto:support@eunicenails.com"
              className="px-6 py-3 rounded-lg border border-charcoal text-charcoal hover:bg-ivory transition-colors font-medium"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
