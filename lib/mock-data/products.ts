import type { Product } from '../types'

export const mockProducts: Product[] = [
  {
    id: 'prod_001',
    slug: 'rose-nude-almond',
    name: 'Rose Nude Almond',
    description: 'Editorial rose-nude press-on nails in an almond shape.',
    basePrice: 24,
    images: [
      { url: '/images/sample-1-medium.jpg', alt: 'Rose Nude Almond top view', position: 0 }
    ],
    variants: [
      { id: 'var_001_s', sku: 'EN-RNA-001-S', length: 'short', shape: 'almond', color: 'Rose Nude', colorHex: '#C9A28A', stock: 12, price: 24, imageUrl: '/images/sample-1-short.jpg' },
      { id: 'var_001_m', sku: 'EN-RNA-001-M', length: 'medium', shape: 'almond', color: 'Rose Nude', colorHex: '#C9A28A', stock: 14, price: 24, imageUrl: '/images/sample-1-medium.jpg' },
      { id: 'var_001_l', sku: 'EN-RNA-001-L', length: 'long', shape: 'almond', color: 'Rose Nude', colorHex: '#C9A28A', stock: 10, price: 26, imageUrl: '/images/sample-1-long.jpg' },
      { id: 'var_001_xl', sku: 'EN-RNA-001-XL', length: 'extra-long', shape: 'almond', color: 'Rose Nude', colorHex: '#C9A28A', stock: 8, price: 28, imageUrl: '/images/sample-1-extra-long.jpg' }
    ],
    tags: ['bestseller'],
    rating: 4.8,
    reviewCount: 128,
    collectionIds: ['col_001']
  },
  {
    id: 'prod_002',
    slug: 'milky-rose-square',
    name: 'Milky Rose Square',
    description: 'Soft rose tone with a clean square finish.',
    basePrice: 22,
    images: [{ url: '/images/sample-2-medium.jpg', alt: 'Milky Rose Square', position: 0 }],
    variants: [
      { id: 'var_002_s', sku: 'EN-MRS-002-S', length: 'short', shape: 'square', color: 'Milky Rose', colorHex: '#DAB0A4', stock: 18, price: 22, imageUrl: '/images/sample-2-short.jpg' },
      { id: 'var_002_m', sku: 'EN-MRS-002-M', length: 'medium', shape: 'square', color: 'Milky Rose', colorHex: '#DAB0A4', stock: 16, price: 22, imageUrl: '/images/sample-2-medium.jpg' },
      { id: 'var_002_l', sku: 'EN-MRS-002-L', length: 'long', shape: 'square', color: 'Milky Rose', colorHex: '#DAB0A4', stock: 12, price: 24, imageUrl: '/images/sample-2-long.jpg' },
      { id: 'var_002_xl', sku: 'EN-MRS-002-XL', length: 'extra-long', shape: 'square', color: 'Milky Rose', colorHex: '#DAB0A4', stock: 7, price: 26, imageUrl: '/images/sample-2-extra-long.jpg' }
    ],
    tags: ['new'],
    rating: 4.6,
    reviewCount: 56,
    collectionIds: ['col_002']
  },
  {
    id: 'prod_003',
    slug: 'mocha-coffin-gloss',
    name: 'Mocha Coffin Gloss',
    description: 'A glossy mocha set for a deeper neutral look.',
    basePrice: 26,
    images: [{ url: '/images/sample-3-medium.jpg', alt: 'Mocha Coffin Gloss', position: 0 }],
    variants: [
      { id: 'var_003_s', sku: 'EN-MCG-003-S', length: 'short', shape: 'coffin', color: 'Mocha', colorHex: '#8D6A5A', stock: 11, price: 24, imageUrl: '/images/sample-3-short.jpg' },
      { id: 'var_003_m', sku: 'EN-MCG-003-M', length: 'medium', shape: 'coffin', color: 'Mocha', colorHex: '#8D6A5A', stock: 13, price: 26, imageUrl: '/images/sample-3-medium.jpg' },
      { id: 'var_003_l', sku: 'EN-MCG-003-L', length: 'long', shape: 'coffin', color: 'Mocha', colorHex: '#8D6A5A', stock: 9, price: 28, imageUrl: '/images/sample-3-long.jpg' },
      { id: 'var_003_xl', sku: 'EN-MCG-003-XL', length: 'extra-long', shape: 'coffin', color: 'Mocha', colorHex: '#8D6A5A', stock: 5, price: 30, imageUrl: '/images/sample-3-extra-long.jpg' }
    ],
    tags: ['bestseller'],
    rating: 4.9,
    reviewCount: 214,
    collectionIds: ['col_003']
  },
  {
    id: 'prod_004',
    slug: 'ivory-stiletto-set',
    name: 'Ivory Stiletto Set',
    description: 'Sharp editorial stiletto tips in a polished ivory finish.',
    basePrice: 28,
    images: [{ url: '/images/sample-4-medium.jpg', alt: 'Ivory Stiletto Set', position: 0 }],
    variants: [
      { id: 'var_004_s', sku: 'EN-ISS-004-S', length: 'short', shape: 'stiletto', color: 'Ivory', colorHex: '#F0E7DA', stock: 10, price: 26, imageUrl: '/images/sample-4-short.jpg' },
      { id: 'var_004_m', sku: 'EN-ISS-004-M', length: 'medium', shape: 'stiletto', color: 'Ivory', colorHex: '#F0E7DA', stock: 8, price: 28, imageUrl: '/images/sample-4-medium.jpg' },
      { id: 'var_004_l', sku: 'EN-ISS-004-L', length: 'long', shape: 'stiletto', color: 'Ivory', colorHex: '#F0E7DA', stock: 6, price: 30, imageUrl: '/images/sample-4-long.jpg' },
      { id: 'var_004_xl', sku: 'EN-ISS-004-XL', length: 'extra-long', shape: 'stiletto', color: 'Ivory', colorHex: '#F0E7DA', stock: 3, price: 32, imageUrl: '/images/sample-4-extra-long.jpg' }
    ],
    tags: ['new', 'low-stock'],
    rating: 4.7,
    reviewCount: 43,
    collectionIds: ['col_001']
  },
  {
    id: 'prod_005',
    slug: 'blush-almond-dream',
    name: 'Blush Almond Dream',
    description: 'A soft blush almond with a glossy salon finish.',
    basePrice: 24,
    images: [{ url: '/images/sample-5-medium.jpg', alt: 'Blush Almond Dream', position: 0 }],
    variants: [
      { id: 'var_005_s', sku: 'EN-BAD-005-S', length: 'short', shape: 'almond', color: 'Blush', colorHex: '#D7A3A7', stock: 20, price: 22, imageUrl: '/images/sample-5-short.jpg' },
      { id: 'var_005_m', sku: 'EN-BAD-005-M', length: 'medium', shape: 'almond', color: 'Blush', colorHex: '#D7A3A7', stock: 22, price: 24, imageUrl: '/images/sample-5-medium.jpg' },
      { id: 'var_005_l', sku: 'EN-BAD-005-L', length: 'long', shape: 'almond', color: 'Blush', colorHex: '#D7A3A7', stock: 18, price: 26, imageUrl: '/images/sample-5-long.jpg' },
      { id: 'var_005_xl', sku: 'EN-BAD-005-XL', length: 'extra-long', shape: 'almond', color: 'Blush', colorHex: '#D7A3A7', stock: 12, price: 28, imageUrl: '/images/sample-5-extra-long.jpg' }
    ],
    tags: ['bestseller'],
    rating: 4.9,
    reviewCount: 166,
    collectionIds: ['col_002']
  },
  {
    id: 'prod_006',
    slug: 'smoke-slate-square',
    name: 'Smoke Slate Square',
    description: 'Muted slate tones for a cooler minimalist set.',
    basePrice: 23,
    images: [{ url: '/images/sample-6-medium.jpg', alt: 'Smoke Slate Square', position: 0 }],
    variants: [
      { id: 'var_006_s', sku: 'EN-SSS-006-S', length: 'short', shape: 'square', color: 'Slate', colorHex: '#9FA7B3', stock: 14, price: 21, imageUrl: '/images/sample-6-short.jpg' },
      { id: 'var_006_m', sku: 'EN-SSS-006-M', length: 'medium', shape: 'square', color: 'Slate', colorHex: '#9FA7B3', stock: 16, price: 23, imageUrl: '/images/sample-6-medium.jpg' },
      { id: 'var_006_l', sku: 'EN-SSS-006-L', length: 'long', shape: 'square', color: 'Slate', colorHex: '#9FA7B3', stock: 11, price: 25, imageUrl: '/images/sample-6-long.jpg' },
      { id: 'var_006_xl', sku: 'EN-SSS-006-XL', length: 'extra-long', shape: 'square', color: 'Slate', colorHex: '#9FA7B3', stock: 9, price: 27, imageUrl: '/images/sample-6-extra-long.jpg' }
    ],
    tags: [],
    rating: 4.5,
    reviewCount: 38,
    collectionIds: ['col_003']
  }
]
