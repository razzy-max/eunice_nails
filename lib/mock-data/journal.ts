export interface JournalPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  publishedAt: string
  author: string
  authorRole: string
  category: 'style-guide' | 'care-tips' | 'trend' | 'behind-the-scenes'
  readTime: number
}

export const mockJournalPosts: JournalPost[] = [
  {
    id: 'journal_001',
    slug: 'how-to-apply-press-on-nails',
    title: 'How to Apply Press-On Nails Like a Pro',
    excerpt: 'Master the art of flawless application in just 5 minutes. Our step-by-step guide will transform your nail game.',
    content: `# How to Apply Press-On Nails Like a Pro

Applying press-on nails correctly is the key to a flawless, long-lasting finish. Follow our step-by-step guide for perfect results every time.

## Step 1: Prep Your Natural Nails
- File your natural nails short and smooth
- Push back your cuticles gently
- Wash your hands thoroughly with soap and water
- Dry completely (any moisture will prevent adhesion)
- Use a nail file to slightly roughen the surface for better grip

## Step 2: Size Your Nails
- Try each nail to find the perfect fit
- The press-on nail should cover your natural nail completely without touching the skin
- Label them with tape so you don't forget which size is which

## Step 3: Apply Adhesive
- Place a small drop of nail glue on both:
  - The back of the press-on nail
  - Your natural nail
- Use just enough—too much causes mess, too little won't hold

## Step 4: Press and Hold
- Align the nail at a 45-degree angle first
- Slowly lower and press down for 15-20 seconds
- Press firmly into the center until fully adhered
- Avoid touching for at least 5 minutes

## Step 5: Trim and File (If Needed)
- Most sets fit perfectly, but you can trim with nail clippers if needed
- File the edges smooth to prevent snagging
- Buff if desired for a seamless blend

## Pro Tips
- Work in a well-lit area
- Do one hand at a time if you're a beginner
- Keep a warm compress handy to soften a strong-set nail if you need to adjust
- Replace immediately if a nail pops off—don't wait for it to come loose naturally

Your press-ons should feel natural and comfortable. If they feel thick or bulky, you've used too much glue.`,
    image: '/images/journal-1.jpg',
    publishedAt: '2026-05-15',
    author: 'Claire Williams',
    authorRole: 'Application Specialist',
    category: 'care-tips',
    readTime: 4
  },
  {
    id: 'journal_002',
    slug: 'spring-nail-trends-2026',
    title: 'Spring Nail Trends for 2026',
    excerpt: 'From soft pastels to bold geometry. Discover the nail colors and shapes taking over this season.',
    content: `# Spring Nail Trends for 2026

Spring is the perfect time to refresh your look. Here are the nail trends dominating 2026.

## Trend 1: Soft Pastels
Whisper-soft pinks, mints, and lavenders are everywhere this season. They feel fresh and optimistic.

## Trend 2: Statement Metals
Gold, silver, and rose gold accents are used strategically—thin lines, geometric shapes, or accent nails.

## Trend 3: Nature-Inspired
Botanical prints, floral designs, and earthy tones bring springtime directly to your nails.

## Trend 4: Minimalist Line Art
Fine black or nude lines creating abstract shapes. Perfect for anyone who loves understated elegance.

## Trend 5: Monochromatic Everything
Matching nail colors to your outfit (or mood) is having a major moment.

The beauty of these trends? They're all mix-and-match. Combine a soft pastel with metallic accents, or go full monochromatic for a cohesive look.

Which trend speaks to you?`,
    image: '/images/journal-2.jpg',
    publishedAt: '2026-05-10',
    author: 'Zara Mensah',
    authorRole: 'Trend Forecaster',
    category: 'trend',
    readTime: 6
  },
  {
    id: 'journal_003',
    slug: 'sustainable-luxury-nails',
    title: 'The Case for Sustainable Luxury in Beauty',
    excerpt: 'How press-on nails are changing the beauty industry for the better. Eco-friendly, cruelty-free, and gorgeous.',
    content: `# The Case for Sustainable Luxury in Beauty

Sustainability and luxury aren't mutually exclusive. Press-on nails prove it.

## Why Press-Ons Are Better

Traditional acrylic nails require:
- Constant visits to salons
- Chemical exposures
- Frequent fills every 2-3 weeks
- Waste from acrylic removal

Press-on nails reduce all of this.

## Our Commitment

At Eunice Nails, we're committed to:
- **Responsibly sourced materials**
- **Minimal packaging** (recyclable cardboard)
- **Ethical labor practices** throughout our supply chain
- **Cruelty-free production** (never tested on animals)

## The Luxury Angle

Luxury doesn't mean waste. It means:
- Quality materials that last longer
- Thoughtful design that stands the test of time
- Respect for people and the planet

A sustainable luxury product is one you're proud to own and proud to wear.

Join us in choosing beauty that feels good inside and out.`,
    image: '/images/journal-3.jpg',
    publishedAt: '2026-05-05',
    author: 'Sustainability Team',
    authorRole: 'Sustainability Director',
    category: 'behind-the-scenes',
    readTime: 5
  }
]

export const getJournalPost = (slug: string) => {
  return mockJournalPosts.find(post => post.slug === slug)
}

export const getJournalPostsByCategory = (category: JournalPost['category']) => {
  return mockJournalPosts.filter(post => post.category === category)
}
