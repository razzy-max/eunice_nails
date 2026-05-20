'use client'

import React, { useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Filter, SlidersHorizontal, X } from 'lucide-react'
import clsx from 'clsx'
import { mockProducts } from '@/lib/mock-data/products'
import ProductGrid from '@/components/product/ProductGrid'
import ProductFilters from '@/components/product/ProductFilters'
import type { Product, ProductVariant } from '@/lib/types'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating'

function updateParams(
  pathname: string,
  searchParams: URLSearchParams,
  nextValues: Record<string, string | undefined>
) {
  const params = new URLSearchParams(searchParams.toString())
  Object.entries(nextValues).forEach(([key, value]) => {
    if (!value) params.delete(key)
    else params.set(key, value)
  })
  const query = params.toString()
  return query ? `${pathname}?${query}` : pathname
}

function variantMatches(variant: ProductVariant, shape?: string, length?: string) {
  if (shape && variant.shape !== shape) return false
  if (length && variant.length !== length) return false
  return true
}

export default function ShopPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const products: Product[] = mockProducts
  const shape = searchParams.get('shape') ?? undefined
  const length = searchParams.get('length') ?? undefined
  const sort = (searchParams.get('sort') as SortOption | null) ?? 'featured'

  const filtered = useMemo(() => {
    const matched = products.filter(product => product.variants.some(variant => variantMatches(variant, shape, length)))

    return [...matched].sort((left, right) => {
      if (sort === 'price-asc') return (left.basePrice ?? 0) - (right.basePrice ?? 0)
      if (sort === 'price-desc') return (right.basePrice ?? 0) - (left.basePrice ?? 0)
      if (sort === 'rating') return (right.rating ?? 0) - (left.rating ?? 0)
      return 0
    })
  }, [products, shape, length, sort])

  const activeFilters = Boolean(shape || length)
  const clearFilters = () => {
    router.replace(updateParams(pathname, new URLSearchParams(searchParams.toString()), { shape: undefined, length: undefined }))
  }

  const setFilter = (nextValues: Record<string, string | undefined>) => {
    router.replace(updateParams(pathname, new URLSearchParams(searchParams.toString()), nextValues), { scroll: false })
  }

  return (
    <main className="container py-10 lg:py-14">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Shop</p>
          <h1 className="text-3xl lg:text-4xl font-serif">Press-ons for every shape and moment</h1>
          <p className="max-w-2xl text-sm lg:text-base text-charcoal/70">
            Browse the collection, refine by shape or length, and sort by what matters most to you.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-cream px-4 py-2 text-sm"
          >
            <Filter size={16} />
            Filters
          </button>

          <label className="inline-flex items-center gap-2 rounded-full border border-cream px-4 py-2 text-sm bg-ivory">
            <SlidersHorizontal size={16} />
            <span className="text-charcoal/60">Sort</span>
            <select
              value={sort}
              onChange={e => setFilter({ sort: e.target.value })}
              className="bg-transparent outline-none"
            >
              <option value="featured">Featured</option>
              <option value="rating">Top rated</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block rounded-[24px] border border-cream bg-ivory p-6 h-fit sticky top-28">
          <ProductFilters
            products={products}
            value={{ shape, length }}
            onChange={next => setFilter(next)}
            onClear={clearFilters}
          />
        </aside>

        <section>
          <div className="mb-5 flex items-center justify-between text-sm text-charcoal/60">
            <span>{filtered.length} products</span>
            {activeFilters && (
              <button type="button" onClick={clearFilters} className="hover:text-rose-nude transition-colors">
                Clear filters
              </button>
            )}
          </div>

          <ProductGrid products={filtered} />
        </section>
      </div>

      {isFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory p-6 shadow-2xl overflow-y-auto">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-serif">Filters</h2>
              <button type="button" onClick={() => setIsFiltersOpen(false)} aria-label="Close filters">
                <X size={18} />
              </button>
            </div>

            <ProductFilters
              products={products}
              value={{ shape, length }}
              onChange={next => setFilter(next)}
              onClear={clearFilters}
            />
          </div>
        </div>
      )}
    </main>
  )
}
