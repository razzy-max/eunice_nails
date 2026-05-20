'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import { EmptyState, PriceDisplay } from '@/components/ui'
import { useCartStore } from '@/lib/stores/cartStore'
import { useState } from 'react'

export default function CartDrawer() {
  const isOpen = useCartStore(state => state.isOpen)
  const items = useCartStore(state => state.items)
  const closeCart = useCartStore(state => state.closeCart)
  const removeItem = useCartStore(state => state.removeItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const shouldReduceMotion = useReducedMotion()

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <motion.button
            type="button"
            aria-label="Close cart"
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
            onClick={closeCart}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-2xl border-l border-cream flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-cream px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Your bag</p>
                <h2 className="text-xl font-serif">Cart</h2>
              </div>
              <button type="button" aria-label="Close cart" onClick={closeCart} className="rounded-full p-2 hover:bg-cream">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <EmptyState
                  icon={<ShoppingBag size={28} />}
                  title="Your bag is empty"
                  description="Add a set from the shop or product page to start building your order."
                  ctaLabel="Browse shop"
                  onCtaClick={closeCart}
                  className="py-16"
                />
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="rounded-[20px] border border-cream bg-white p-4">
                      <div className="flex gap-4">
                        <div
                          className="h-24 w-24 shrink-0 rounded-[16px] border border-cream"
                          style={{ background: `linear-gradient(135deg, ${item.variant.colorHex} 0%, #FAF4EE 100%)` }}
                        />

                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-medium leading-tight">{item.product.name}</h3>
                              <p className="text-sm text-charcoal/60 capitalize">
                                {item.variant.length} {item.variant.shape} · {item.variant.color}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-charcoal/50 hover:text-rust"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="flex items-center justify-between gap-3">
                            <PriceDisplay price={item.variant.price} />

                            <div className="inline-flex items-center gap-2 rounded-full border border-cream bg-ivory px-2 py-1">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="rounded-full p-1 hover:bg-cream"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="min-w-6 text-center text-sm font-medium">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="rounded-full p-1 hover:bg-cream"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={clsx('border-t border-cream px-6 py-5', items.length === 0 && 'hidden')}>
              <div className="space-y-3">
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
                      <button
                        type="button"
                        onClick={() => applyPromo(promoCode)}
                        className="rounded-md bg-charcoal px-3 text-sm text-ivory"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {appliedPromo && (
                    <p className="text-xs text-charcoal/60">Applied: {appliedPromo.code} — {Math.round((appliedPromo.discount || 0) * 100)}% off</p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-charcoal/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-sm text-charcoal/70">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm text-charcoal/70">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="inline-flex w-full items-center justify-center rounded-[12px] bg-charcoal px-4 py-2.5 text-base font-medium text-ivory transition-all duration-200 hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
                >
                  Proceed to checkout
                </Link>
                <Link href="/cart" onClick={closeCart} className="block text-center text-sm text-rose-nude hover:underline">
                  View full cart
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
