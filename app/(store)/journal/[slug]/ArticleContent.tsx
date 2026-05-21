'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { JournalPost } from '@/lib/mock-data/journal'
import Button from '@/components/ui/Button'

interface ArticleContentProps {
  post: JournalPost
  relatedPosts: JournalPost[]
}

export default function ArticleContent({ post, relatedPosts }: ArticleContentProps) {
  return (
    <>
      {/* Featured Image */}
      <section className="py-8 md:py-12 bg-ivory">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-video bg-gradient-to-br from-rose-nude/20 to-burnt-mocha/20 rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-ivory">
        <div className="container max-w-3xl">
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="prose prose-sm md:prose-base max-w-none"
          >
            <div className="space-y-6 text-charcoal leading-relaxed">
              {post.content.split('\n\n').map((paragraph, idx) => {
                // Handle markdown-style headers
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={idx} className="text-3xl font-serif font-bold mt-8 mb-4">
                      {paragraph.replace(/^# /, '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={idx} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.replace(/^## /, '')}
                    </h3>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={idx} className="text-lg font-bold mt-4 mb-2">
                      {paragraph.replace(/^### /, '')}
                    </h4>
                  )
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-charcoal/80">
                          {item.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={idx} className="text-charcoal/80">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-cream">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">More from {post.category.replace('-', ' ')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-lg overflow-hidden border border-charcoal/10"
                >
                  <Link href={`/journal/${relatedPost.slug}`}>
                    <div className="aspect-square bg-gradient-to-br from-rose-nude/20 to-burnt-mocha/20 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-medium text-rose-nude uppercase mb-2">
                        {relatedPost.readTime} min read
                      </p>
                      <h3 className="font-bold line-clamp-2 group-hover:text-rose-nude transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to elevate your nail game?</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Shop our latest collections to find the perfect set inspired by this article.
          </p>
          <Button href="/shop" variant="primary">
            Explore Collections
          </Button>
        </div>
      </section>
    </>
  )
}
