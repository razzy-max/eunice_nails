'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, Share2, Truck, ShieldCheck, RotateCcw } from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { PriceDisplay, RatingStars } from '@/components/ui/PriceDisplay'
import { useCartStore } from '@/lib/stores/cartStore'
import type { Product, ProductVariant } from '@/lib/types'
import SizeGuideModal from './SizeGuideModal'

type Props = {
  product: Product
  related: Product[]
}

export default function ProductDetailClient({ product, related }: Props) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id)
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState<string | null>(null)
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
  const addItem = useCartStore(state => state.addItem)
  const openCart = useCartStore(state => state.openCart)

  const selectedVariant = useMemo(
    () => product.variants.find(variant => variant.id === selectedVariantId) ?? product.variants[0],
    [product.variants, selectedVariantId]
  ) as ProductVariant

  const heroTone = selectedVariant?.colorHex ?? product.variants[0]?.colorHex ?? '#E8DDD3'
  const stockLeft = selectedVariant?.stock ?? 0
  const heroImage = selectedVariant?.imageUrl ?? product.images[0]?.url ?? '/images/sample-1.jpg'

  const handleAddToCart = () => {
    if (!selectedVariant) return
    addItem(product, selectedVariant, quantity)
    openCart()
    setMessage(`${quantity} added to cart`)
    window.setTimeout(() => setMessage(null), 2200)
  }

  return (
    <div className="space-y-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
        <div className="space-y-4">
          <div
            className="aspect-square rounded-[28px] border border-cream p-6 overflow-hidden relative group"
            style={{ background: `linear-gradient(135deg, ${heroTone} 0%, #FAF4EE 45%, #EFE5DB 100%)` }}
          >
            {/* Product Image */}
            <img
              src={heroImage}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover rounded-[20px] transition-opacity duration-300 opacity-70"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none'
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/30" />
            <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute left-8 bottom-10 h-24 w-24 rounded-full bg-charcoal/10 blur-2xl" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <Badge variant={product.tags.includes('bestseller') ? 'bestseller' : product.tags.includes('new') ? 'new' : 'default'}>
                  {product.tags.includes('bestseller') ? 'Bestseller' : product.tags.includes('new') ? 'New' : 'Collection'}
                </Badge>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/80 text-charcoal shadow-sm">
                  <Share2 size={16} />
                </button>
              </div>

              <div className="max-w-[70%]">
                <p className="text-xs uppercase tracking-[0.24em] text-charcoal/60 mb-2">Eunice Nails</p>
                <h1 className="font-serif text-3xl lg:text-5xl leading-tight text-charcoal">{product.name}</h1>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <InfoTile icon={<Truck size={16} />} title="Free shipping" text="On orders over $50" />
            <InfoTile icon={<ShieldCheck size={16} />} title="Salon quality" text="Reusable press-ons" />
            <InfoTile icon={<RotateCcw size={16} />} title="Easy returns" text="14-day return window" />
          </div>
        </div>

        <div className="space-y-8 lg:sticky lg:top-28">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/70">
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              <span className="hidden sm:inline">•</span>
              <span>{product.reviewCount} reviews</span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <Badge key={tag} variant={tag === 'bestseller' ? 'bestseller' : tag === 'new' ? 'new' : 'default'}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif">{product.name}</h2>
              <p className="text-charcoal/75 leading-7">{product.description}</p>
            </div>

            <PriceDisplay price={selectedVariant?.price ?? product.basePrice} comparePrice={product.basePrice + 4} />
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/60">Choose your set</div>
            <div className="grid gap-3 sm:grid-cols-2">
              {product.variants.map(variant => {
                const isActive = variant.id === selectedVariant?.id
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariantId(variant.id)}
                    className={clsx(
                      'rounded-[18px] border p-4 text-left transition-all',
                      isActive ? 'border-charcoal bg-charcoal/5' : 'border-cream bg-ivory hover:border-charcoal/20'
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-medium capitalize">{variant.length} {variant.shape}</div>
                        <div className="text-sm text-charcoal/60">{variant.color}</div>
                      </div>
                      <span className="h-4 w-4 rounded-full border border-charcoal/20" style={{ backgroundColor: variant.colorHex }} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Length picker */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/60">Length</div>
                <div className="text-xs text-charcoal/60">Choose a length to preview fit and style</div>
              </div>
              <button type="button" className="text-sm text-rose-nude hover:underline" onClick={() => setSizeGuideOpen(true)}>
                Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(product.variants.map(v => v.length))).map(len => (
                <button
                  key={len}
                  type="button"
                  onClick={() => {
                    const match = product.variants.find(v => v.length === len)
                    if (match) setSelectedVariantId(match.id)
                  }}
                  className={clsx(
                    'rounded-[14px] px-4 py-2 text-sm font-medium transition-shadow focus:outline-none',
                    selectedVariant?.length === len
                      ? 'bg-charcoal/5 border border-charcoal shadow-sm'
                      : 'bg-ivory border border-cream hover:shadow-sm'
                  )}
                >
                  {len}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/60">Quantity</div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-cream bg-ivory text-lg"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="min-w-10 text-center text-base font-medium">{quantity}</span>
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-cream bg-ivory text-lg"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
            <div className="text-sm text-charcoal/60">
              {stockLeft > 0 ? `${stockLeft} sets in stock` : 'Sold out'}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button className="w-full inline-flex items-center justify-center gap-2" onClick={handleAddToCart} disabled={stockLeft <= 0}>
              <ShoppingBag size={16} />
              Add to cart
            </Button>
            <Button variant="secondary" className="w-full inline-flex items-center justify-center gap-2">
              <Heart size={16} />
              Wishlist
            </Button>
          </div>

          {/* AI helper card */}
          <div className="mt-4 rounded-[16px] border border-cream bg-ivory p-4">
            <p className="text-sm text-charcoal/75 mb-3">Not sure which length or shape suits you? Ask a stylist for a quick fit recommendation or styling tip.</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-eunice-chat'))}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[12px] bg-rose-nude px-4 py-3 text-sm font-semibold text-ivory shadow-sm hover:opacity-95"
              >
                Ask a stylist
              </button>
              <button type="button" onClick={() => setSizeGuideOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-cream bg-ivory px-4 py-3 text-sm text-charcoal">
                View size guide
              </button>
            </div>
          </div>

          {message && (
            <div className="rounded-[16px] border border-sage bg-sage/10 px-4 py-3 text-sm text-sage">
              {message}
            </div>
          )}

          <div className="rounded-[24px] border border-cream bg-ivory p-5 space-y-4">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/60">Details</div>
            <ul className="space-y-2 text-sm text-charcoal/75 leading-6">
              <li>Reusable press-on nails with salon-inspired finish</li>
              <li>Each set includes adhesive tabs and prep kit</li>
              <li>Ships within 1-2 business days</li>
              <li>Designed for everyday wear or special occasions</li>
            </ul>
          </div>

          <div className="rounded-[24px] border border-cream bg-ivory p-5 space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/60">Materials</div>
            <p className="text-sm text-charcoal/75 leading-6">
              High-quality ABS press-on shells with reusable adhesive support and a glossy finish.
            </p>
          </div>
        </div>

          <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
      </div>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">You may also like</p>
            <h3 className="text-2xl font-serif">Related styles</h3>
          </div>
          <Link href="/shop" className="text-sm text-rose-nude hover:underline">
            View all products
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map(item => (
            <Link key={item.id} href={`/shop/${item.slug}`} className="block rounded-[20px] border border-cream bg-ivory p-4 hover:shadow-sm transition-shadow">
              <div
                className="aspect-square rounded-[16px] mb-4 border border-cream"
                style={{ background: `linear-gradient(135deg, ${item.variants[0]?.colorHex ?? '#E8DDD3'} 0%, #FAF4EE 100%)` }}
              />
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-sm text-charcoal/60">${item.basePrice.toFixed(2)}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function InfoTile({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[20px] border border-cream bg-ivory p-4">
      <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-ivory">
        {icon}
      </div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-sm text-charcoal/60">{text}</div>
    </div>
  )
}
