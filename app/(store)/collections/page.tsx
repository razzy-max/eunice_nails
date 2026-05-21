import React from 'react'
import Link from 'next/link'
import { mockCollections } from '@/lib/mock-data/collections'
import { mockProducts } from '@/lib/mock-data/products'
import CollectionsClient from '@/components/collections/CollectionsClient'

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 bg-ivory border-b border-cream">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Collections</h1>
          <p className="text-lg text-charcoal/70">Curated collections to help you find the perfect set.</p>
        </div>
      </section>

      <CollectionsClient collections={mockCollections} products={mockProducts.slice(0, 8)} />
    </main>
  )
}
