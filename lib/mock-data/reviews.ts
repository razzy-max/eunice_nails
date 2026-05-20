export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  body: string
  photos?: string[]
  verified: boolean
  createdAt: string
}

export const mockReviews: Review[] = [
  {
    id: 'rev_001',
    productId: 'prod_001',
    userId: 'user_001',
    userName: 'Sarah M.',
    rating: 5,
    title: 'Perfection!',
    body: 'These nails exceeded all my expectations. The fit is flawless and they look so elegant.',
    verified: true,
    createdAt: '2026-05-10'
  },
  {
    id: 'rev_002',
    productId: 'prod_001',
    userId: 'user_002',
    userName: 'Jessica T.',
    rating: 5,
    title: 'Best press-ons I\'ve tried',
    body: 'Durability is insane. Wore them for 2 weeks with zero damage. Highly recommend.',
    verified: true,
    createdAt: '2026-05-05'
  },
  {
    id: 'rev_003',
    productId: 'prod_001',
    userId: 'user_003',
    userName: 'Emma L.',
    rating: 4,
    title: 'Really great, minor issue',
    body: 'Love the color but the longest size was slightly too big. Ordered the next size down and it\'s perfect.',
    verified: true,
    createdAt: '2026-04-28'
  }
]
