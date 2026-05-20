'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { mockJournalPosts } from '@/lib/mock-data/journal'
import Button from '@/components/ui/Button'

export default function JournalPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-charcoal">
            From Our Journal
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Tips, trends, and stories from the Eunice Nails team
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockJournalPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/journal/${post.slug}`}>
                <div className="group cursor-pointer">
                  {/* Featured Image */}
                  <div className="relative mb-6 bg-cream rounded-[12px] aspect-video overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-nude/30 to-burnt-mocha/30" />
                    <motion.div
                      className="absolute inset-0 bg-charcoal/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Post Meta */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-charcoal/60">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>{post.readTime} min read</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-rose-nude transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-charcoal/70 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <p className="text-xs text-charcoal/50">
                      By {post.author}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/journal">
            <Button variant="secondary" size="md">
              Read More Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
