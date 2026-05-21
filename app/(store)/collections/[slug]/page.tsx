import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { mockCollections } from '@/lib/mock-data/collections'
import { mockProducts } from '@/lib/mock-data/products'
import ProductCard from '@/components/product/ProductCard'

interface Props {
  params: { slug: string }
}

export default function CollectionDetail({ params }: Props) {
  const collection = mockCollections.find(c => c.slug === params.slug)
  if (!collection) return notFound()

  const products = mockProducts.filter(p => p.collectionIds?.includes(collection.id))

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24" style={{ backgroundImage: `linear-gradient(135deg, ${collection.color}10, ${collection.color}20)` }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{collection.name}</h1>
              <p className="text-lg text-charcoal/80 mb-6">{collection.description}</p>
              <Link href="/shop?collection=" className="inline-block px-4 py-2 rounded-lg border border-cream bg-ivory hover:bg-cream">Shop collection</Link>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-ivory">
        <div className="container">
          <h2 className="text-2xl font-serif font-bold mb-6">Products in {collection.name}</h2>
          {products.length === 0 ? (
            <div className="py-12 text-center text-charcoal/70">No products found for this collection.</div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return mockCollections.map(c => ({ slug: c.slug }))
}
