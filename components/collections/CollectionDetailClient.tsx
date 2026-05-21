'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import { ProductGridSkeleton } from '@/components/ui/LoadingSkeletons'
import { EmptyState } from '@/components/ui/EmptyState'

type Collection = {
  id: string
  name: string
  slug: string
  image: string
  description?: string
  color?: string
}

type Product = any

export default function CollectionDetailClient({
  collection,
  products
}: {
  collection: Collection
  products: Product[]
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="py-12 bg-ivory">
      <div className="container">
        <h2 className="text-2xl font-serif font-bold mb-6">Products in {collection.name}</h2>
        {loading ? (
          <ProductGridSkeleton />
        ) : products.length === 0 ? (
          <div className="py-12">
            <EmptyState
              title="No products in this collection"
              description="Try exploring other collections or browse the shop."
              ctaLabel="Browse shop"
              onCtaClick={() => window.location.assign('/shop')}
            />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
