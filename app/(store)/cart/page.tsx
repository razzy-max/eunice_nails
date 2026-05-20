'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { EmptyState, PriceDisplay } from '@/components/ui'
import { useCartStore } from '@/lib/stores/cartStore'
import { useState } from 'react'

export default function CartPage() {
  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0),
    [items]
  )
  const appliedPromo = useCartStore(state => state.appliedPromo)
  const applyPromo = useCartStore(state => state.applyPromo)
  const removePromo = useCartStore(state => state.removePromo)
  const [promoCode, setPromoCode] = useState('')

  const discountAmount = appliedPromo?.discount ? subtotal * appliedPromo.discount : 0
  const totalAfterDiscount = Math.max(0, subtotal - discountAmount)

  if (items.length === 0) {
    return (
      <main className="container py-14">
        <EmptyState
          icon={<ShoppingBag size={28} />}
          title="Your cart is empty"
          description="Browse the shop to add a set, then come back here to review your order."
          ctaLabel="Go to shop"
          onCtaClick={() => window.location.assign('/shop')}
        />
      </main>
    )
  }

  return (
    <main className="container py-10 lg:py-14">
      <div className="mb-8 space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Cart</p>
        <h1 className="text-3xl lg:text-4xl font-serif">Review your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] items-start">
        <section className="space-y-4">
          {items.map(item => {
            const image = item.product.images?.[0]?.url ?? '/images/sample-1-medium.jpg'
            return (
            <div key={item.id} className="rounded-[24px] border border-cream bg-ivory p-5">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div
                  className="h-28 w-full rounded-[18px] border border-cream bg-cover bg-center sm:w-32"
                  style={{ backgroundImage: `url(${image})` }}
                />

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-medium">{item.product.name}</h2>
                      <p className="text-sm text-charcoal/60 capitalize">{item.variant.length} {item.variant.shape} · {item.variant.color}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} className="text-sm text-charcoal/50 hover:text-rust">
                      Remove
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <PriceDisplay price={item.variant.price} />

                    <div className="inline-flex items-center gap-2 rounded-full border border-cream bg-white px-2 py-1">
                      <button type="button" className="h-8 w-8 rounded-full hover:bg-cream" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button type="button" className="h-8 w-8 rounded-full hover:bg-cream" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </section>

        <aside className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5 lg:sticky lg:top-28">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Order summary</p>
            <h2 className="text-2xl font-serif">Ready to checkout</h2>
          </div>

          <div className="space-y-3 text-sm text-charcoal/70">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Promo code</label>
              <div className="flex gap-2">
                <input
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 rounded-md border border-cream bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                {appliedPromo ? (
                  <button type="button" onClick={() => removePromo()} className="rounded-md bg-rose-nude px-3 text-sm text-ivory">
                    Remove
                  </button>
                ) : (
                  <button type="button" onClick={() => applyPromo(promoCode)} className="rounded-md bg-charcoal px-3 text-sm text-ivory">
                    Apply
                  </button>
                )}
              </div>
              {appliedPromo && (
                <p className="text-xs text-charcoal/60">Applied: {appliedPromo.code} — {Math.round((appliedPromo.discount || 0) * 100)}% off</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>Calculated later</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span>Calculated later</span>
            </div>
            <div className="border-t border-cream pt-3 flex items-center justify-between text-base font-semibold text-charcoal">
              <span>Total</span>
              <span>${totalAfterDiscount.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="inline-flex w-full items-center justify-center rounded-[12px] bg-charcoal px-4 py-2.5 text-base font-medium text-ivory transition-all duration-200 hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
          >
            Proceed to checkout
          </Link>
          <Link href="/shop" className="block text-center text-sm text-rose-nude hover:underline">
            Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  )
}
