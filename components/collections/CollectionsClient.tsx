"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import { ProductGridSkeleton, CollectionCardSkeleton } from '@/components/ui/LoadingSkeletons'

type Collection = {
  id: string
  name: string
  slug: string
  image: string
  description?: string
  color?: string
}
type Product = any

export default function CollectionsClient({ collections, products }: { collections: Collection[]; products: Product[] }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <section className="py-12 bg-ivory">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <CollectionCardSkeleton key={i} />)
              : collections.map(col => (
                  <Link key={col.id} href={`/collections/${col.slug}`} className="group block rounded-[12px] overflow-hidden border border-cream bg-center bg-cover" style={{ backgroundImage: `linear-gradient(135deg, ${col.color}20, ${col.color}40), url(${col.image})` }}>
                    <div className="p-6 flex flex-col justify-end min-h-[220px]">
                      <h3 className="text-2xl font-serif text-ivory mb-2">{col.name}</h3>
                      <p className="text-sm text-ivory/90 mb-4">{col.description}</p>
                      <span className="inline-block text-sm text-ivory">Explore →</span>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold mb-6">Featured from Collections</h2>
          {loading ? <ProductGridSkeleton /> : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
