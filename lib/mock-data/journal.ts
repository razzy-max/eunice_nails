export interface JournalPost {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  publishedAt: string
  author: string
  readTime: number
}

export const mockJournalPosts: JournalPost[] = [
  {
    id: 'journal_001',
    slug: 'how-to-apply-press-on-nails',
    title: 'How to Apply Press-On Nails Like a Pro',
    excerpt: 'Master the art of flawless application in just 5 minutes. Our step-by-step guide will transform your nail game.',
    image: '/images/journal-1.jpg',
    publishedAt: '2026-05-15',
    author: 'Claire Nails',
    readTime: 4
  },
  {
    id: 'journal_002',
    slug: 'spring-nail-trends-2026',
    title: 'Spring Nail Trends for 2026',
    excerpt: 'From soft pastels to bold geometry. Discover the nail colors and shapes taking over this season.',
    image: '/images/journal-2.jpg',
    publishedAt: '2026-05-10',
    author: 'Eunice',
    readTime: 6
  },
  {
    id: 'journal_003',
    slug: 'sustainable-luxury-nails',
    title: 'The Case for Sustainable Luxury in Beauty',
    excerpt: 'How press-on nails are changing the beauty industry for the better. Eco-friendly, cruelty-free, and gorgeous.',
    image: '/images/journal-3.jpg',
    publishedAt: '2026-05-05',
    author: 'Sustainability Team',
    readTime: 5
  }
]
