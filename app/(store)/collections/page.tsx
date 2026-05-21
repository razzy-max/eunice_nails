import React from 'react'
import Link from 'next/link'
import { mockCollections } from '@/lib/mock-data/collections'
import { mockProducts } from '@/lib/mock-data/products'
import ProductCard from '@/components/product/ProductCard'

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-ivory border-b border-cream">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Collections</h1>
          <p className="text-lg text-charcoal/70">Curated collections to help you find the perfect set.</p>
        </div>
      </section>

      <section className="py-12 bg-ivory">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCollections.map(col => (
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.slice(0, 8).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
