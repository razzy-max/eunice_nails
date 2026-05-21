'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Tag, ArrowRight } from 'lucide-react'
import { mockJournalPosts } from '@/lib/mock-data/journal'
import Button from '@/components/ui/Button'

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: 'style-guide', label: 'Style Guide' },
    { id: 'care-tips', label: 'Care Tips' },
    { id: 'trend', label: 'Trends' },
    { id: 'behind-the-scenes', label: 'Behind the Scenes' }
  ]

  const filteredPosts = selectedCategory
    ? mockJournalPosts.filter(post => post.category === selectedCategory)
    : mockJournalPosts

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-ivory border-b border-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Journal</h1>
            <p className="text-lg text-charcoal/80">
              Style guides, care tips, nail trends, and stories from the Eunice Nails community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-cream border-b border-cream/50">
        <div className="container">
          <h3 className="text-sm font-medium text-charcoal/60 mb-4">Filter by category</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-charcoal text-ivory'
                  : 'bg-ivory border border-charcoal/10 text-charcoal hover:bg-cream'
              }`}
            >
              All
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

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-charcoal/60 mb-4">No posts in this category yet.</p>
              <Button
                onClick={() => setSelectedCategory(null)}
                variant="secondary"
              >
                View all posts
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid md:grid-cols-3 gap-8 border-b border-cream pb-12 last:border-b-0"
                >
                  {/* Image */}
                  <div
                    className="md:col-span-1 aspect-square bg-gradient-to-br from-rose-nude/20 to-burnt-mocha/20 rounded-lg overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-medium text-rose-nude uppercase">
                          {post.category.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-charcoal/50">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <Link href={`/journal/${post.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-rose-nude transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-charcoal/70 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-charcoal/60">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime} min read</span>
                        </div>
                        <span>By {post.author}</span>
                      </div>
                    </div>

                    <Link href={`/journal/${post.slug}`} className="inline-flex items-center gap-2 mt-6 font-medium text-charcoal hover:text-rose-nude transition-colors">
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Don't miss new articles
          </h2>
          <p className="text-charcoal/70 mb-6">
            Sign up for our newsletter to get the latest style guides, trends, and nail care tips delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
