import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { getJournalPost, mockJournalPosts } from '@/lib/mock-data/journal'
import Button from '@/components/ui/Button'
import ArticleContent from './ArticleContent'

interface ArticlePageProps {
  params: { slug: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getJournalPost(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, different post)
  const relatedPosts = mockJournalPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <div className="bg-ivory border-b border-cream">
        <div className="container py-6">
          <Link href="/journal" className="inline-flex items-center gap-2 text-charcoal hover:text-rose-nude transition-colors">
            <ArrowLeft size={16} />
            Back to Journal
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-ivory">
        <div className="container max-w-3xl">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-charcoal/60">
              <span className="text-rose-nude font-medium uppercase">{post.category.replace('-', ' ')}</span>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime} min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 pb-8 border-b border-cream">
              <div className="w-12 h-12 rounded-full bg-rose-nude/20" />
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-charcoal/60">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image & Content */}
      <ArticleContent post={post} relatedPosts={relatedPosts} />
    </main>
  )
}

export async function generateStaticParams() {
  return mockJournalPosts.map(post => ({
    slug: post.slug
  }))
}
