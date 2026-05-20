'use client'

import React from 'react'
import type { Product } from '@/lib/types'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return <div className="text-center py-12 text-charcoal/60">No products found.</div>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
