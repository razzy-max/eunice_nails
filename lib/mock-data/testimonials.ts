export interface Testimonial {
  id: string
  name: string
  role?: string
  avatar?: string
  content: string
  rating: number
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 'test_001',
    name: 'Sarah Chen',
    role: 'Makeup Artist',
    avatar: '/images/avatar-1.jpg',
    content: 'Eunice Nails are absolutely stunning. The quality is unmatched and they last forever. My clients are obsessed!',
    rating: 5
  },
  {
    id: 'test_002',
    name: 'Jessica Williams',
    role: 'Fashion Influencer',
    avatar: '/images/avatar-2.jpg',
    content: 'Finally press-ons that actually look editorial. The nude shades are my go-to for every event.',
    rating: 5
  },
  {
    id: 'test_003',
    name: 'Maria Rodriguez',
    role: 'Business Owner',
    avatar: '/images/avatar-3.jpg',
    content: 'Perfect for my busy lifestyle. Beautiful, durable, and customer service is impeccable.',
    rating: 5
  },
  {
    id: 'test_004',
    name: 'Emma Thompson',
    avatar: '/images/avatar-4.jpg',
    content: 'Love these nails! They come in so many colors and the fit is always perfect.',
    rating: 5
  }
]
