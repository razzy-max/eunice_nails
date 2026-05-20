'use client'

import React from 'react'
import type { Product } from '@/lib/types'
import Link from 'next/link'

export default function ProductCard({ product }: { product: Product }) {
  const price = product.variants?.[0]?.price ?? product.basePrice
  const image = product.images?.[0]?.url ?? '/images/sample-1-medium.jpg'
  const color = product.variants?.[0]?.colorHex ?? '#E8DDD3'

  return (
    <Link href={`/shop/${product.slug}`} className="block group" aria-label={`View ${product.name}`}>
      <div
        className="relative aspect-square rounded-[12px] overflow-hidden flex items-end justify-start p-4 mb-3 border border-cream transition-transform group-hover:-translate-y-1 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
        <div className="relative z-10 max-w-[75%]">
          <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60 mb-1">Eunice Nails</div>
          <div className="text-lg font-serif leading-tight text-charcoal">{product.name}</div>
        </div>
      </div>
      <div className="text-sm font-medium text-charcoal">{product.name}</div>
      <div className="text-sm text-charcoal/70">${price.toFixed(2)}</div>
    </Link>
  )
}
