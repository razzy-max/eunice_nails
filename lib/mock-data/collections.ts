export interface Collection {
  id: string
  slug: string
  name: string
  description: string
  image: string
  color: string
}

export const mockCollections: Collection[] = [
  {
    id: 'col_001',
    slug: 'editorial-nude',
    name: 'Editorial Nude',
    description: 'Timeless, versatile nudes for every occasion',
    image: '/images/collection-nude.jpg',
    color: '#C9A28A'
  },
  {
    id: 'col_002',
    slug: 'bold-statement',
    name: 'Bold Statement',
    description: 'Rich, editorial colors that demand attention',
    image: '/images/collection-bold.jpg',
    color: '#6B4A38'
  },
  {
    id: 'col_003',
    slug: 'minimalist-chic',
    name: 'Minimalist Chic',
    description: 'Clean lines, sophisticated simplicity',
    image: '/images/collection-minimal.jpg',
    color: '#1A1A1A'
  },
  {
    id: 'col_004',
    slug: 'seasonal-vibe',
    name: 'Seasonal Vibe',
    description: 'Trending colors for the season',
    image: '/images/collection-seasonal.jpg',
    color: '#7A8B6F'
  }
]
