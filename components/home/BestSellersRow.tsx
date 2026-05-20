'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { mockProducts } from '@/lib/mock-data/products'
import { PriceDisplay, RatingStars } from '@/components/ui/PriceDisplay'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Link from 'next/link'

// Generate more mock products for best sellers
const bestSellerProducts = [
  ...mockProducts,
  ...mockProducts.map((p, i) => ({ ...p, id: `${p.id}_${i}`, slug: `${p.slug}-${i}` }))
]

export default function BestSellersRow() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollAmount = clientWidth * 0.8
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-cream/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
            Best Sellers
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-2 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-ivory transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-2 rounded-full border border-charcoal/20 hover:bg-charcoal hover:text-ivory transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide flex gap-6 pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bestSellerProducts.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-48 md:w-56"
            >
              <Link href={`/shop/${product.slug}`}>
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="relative mb-4 bg-ivory rounded-[10px] aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-cream/50 animate-pulse" />

                    {/* Product Tags */}
                    <div className="absolute top-3 left-3 z-10 flex gap-2 flex-wrap">
                      {product.tags.map(tag => (
                        <Badge key={tag} variant={tag === 'new' ? 'new' : 'bestseller'}>
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Badge>
                      ))}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      aria-label="Add to wishlist"
                      className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full hover:bg-ivory shadow-sm hover:shadow-md transition-all"
                    >
                      <Heart size={18} className="text-charcoal" />
                    </button>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-charcoal/10 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-3"
                      whileHover={{ opacity: 1 }}
                    >
                      <Button variant="primary" size="sm" onClick={e => e.preventDefault()}>
                        Quick View
                      </Button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-charcoal line-clamp-2 group-hover:text-rose-nude transition-colors">
                      {product.name}
                    </h3>

                    {/* Color Swatches */}
                    <div className="flex gap-2">
                      {product.variants.slice(0, 3).map(variant => (
                        <div
                          key={variant.id}
                          className="w-5 h-5 rounded-full border-2 border-charcoal/20 hover:border-charcoal transition-colors cursor-pointer"
                          style={{ backgroundColor: variant.colorHex }}
                          title={variant.color}
                        />
                      ))}
                      {product.variants.length > 3 && (
                        <div className="text-xs text-charcoal/60">+{product.variants.length - 3}</div>
                      )}
                    </div>

                    {/* Price and Rating */}
                    <div className="space-y-1">
                      <PriceDisplay price={product.basePrice} />
                      <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 text-center">
          <Link href="/shop">
            <Button variant="secondary" size="md">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
