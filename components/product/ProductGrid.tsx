'use client'

import React from 'react'
import type { Product } from '@/lib/types'
import ProductCard from './ProductCard'
import { ProductGridSkeleton } from '@/components/ui/LoadingSkeletons'
import { EmptyState } from '@/components/ui/EmptyState'

export default function ProductGrid({ products, loading }: { products?: Product[]; loading?: boolean }) {
  if (loading) return <ProductGridSkeleton />

  if (!products || products.length === 0) {
    return (
      <div className="py-12">
        <EmptyState title="No products found" description="Try adjusting filters or explore our featured collections." ctaLabel="Browse collections" onCtaClick={() => window.location.assign('/collections')} />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
