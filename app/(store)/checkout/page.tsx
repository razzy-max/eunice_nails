'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CreditCard, Lock, MapPin, Truck, Sparkles } from 'lucide-react'
import clsx from 'clsx'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { EmptyState, PriceDisplay } from '@/components/ui'
import { useCartStore } from '@/lib/stores/cartStore'

type DeliveryMethod = 'standard' | 'express'

export default function CheckoutPage() {
  const router = useRouter()
  const items = useCartStore(state => state.items)
  const clearCart = useCartStore(state => state.clearCart)
  const appliedPromo = useCartStore(state => state.appliedPromo)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('standard')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paystack'>('card')

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.variant.price * item.quantity, 0),
    [items]
  )
  const shipping = deliveryMethod === 'express' ? 12 : subtotal >= 50 ? 0 : 6
  const taxes = subtotal * 0.08
  const discountAmount = appliedPromo?.discount ? subtotal * appliedPromo.discount : 0
  const total = Math.max(0, subtotal - discountAmount + shipping + taxes)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Only finalize on last step
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
      return
    }

    setIsSubmitting(true)

    window.setTimeout(() => {
      clearCart()
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 900)
  }

  if (items.length === 0 && !isSuccess) {
    return (
      <main className="container py-14">
        <EmptyState
          icon={<Sparkles size={28} />}
          title="No items to checkout"
          description="Your bag is empty, so there is nothing to pay for yet."
          ctaLabel="Go to shop"
          onCtaClick={() => router.push('/shop')}
        />
      </main>
    )
  }

  if (isSuccess) {
    return (
      <main className="container py-14">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-cream bg-ivory p-8 text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-ivory">
            <Lock size={22} />
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Order placed</p>
            <h1 className="text-3xl font-serif">Your checkout is complete</h1>
            <p className="text-charcoal/70">
              This is the UI shell for now, so the order has been confirmed locally and your cart was cleared.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button onClick={() => router.push('/shop')}>Continue shopping</Button>
            <Button variant="secondary" onClick={() => router.push('/account')}>View account</Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container py-10 lg:py-14">
      <div className="mb-8 space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Checkout</p>
        <h1 className="text-3xl lg:text-4xl font-serif">Complete your order</h1>
        <p className="text-charcoal/70 max-w-2xl">
          A polished checkout shell with shipping, delivery, and payment steps ready for integration.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          {['Contact', 'Shipping', 'Payment'].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className={clsx('h-8 w-8 flex items-center justify-center rounded-full text-sm font-medium', currentStep === i ? 'bg-charcoal text-ivory' : 'border border-cream text-charcoal')}>
                {i + 1}
              </div>
              <div className="text-sm text-charcoal/70">{label}</div>
              {i < 2 && <div className="mx-3 h-px w-6 bg-cream" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_380px] items-start">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 0: Contact */}
          {currentStep === 0 && (
            <CheckoutSection icon={<MapPin size={16} />} title="Contact">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First name" required placeholder="Amina" />
                <Input label="Last name" required placeholder="Cole" />
                <Input label="Email address" type="email" required placeholder="amina@example.com" className="sm:col-span-2" />
                <Input label="Phone number" required placeholder="+1 (555) 000-0000" />
              </div>
            </CheckoutSection>
          )}

          {/* Step 1: Shipping details + delivery method */}
          {currentStep === 1 && (
            <>
              <CheckoutSection icon={<MapPin size={16} />} title="Shipping information">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Company (optional)" placeholder="Eunice Studio" />
                  <Input label="Address line 1" required placeholder="123 Rose Avenue" className="sm:col-span-2" />
                  <Input label="Address line 2" placeholder="Apartment, suite, etc." className="sm:col-span-2" />
                  <Input label="City" required placeholder="Los Angeles" />
                  <Input label="State / region" required placeholder="CA" />
                  <Input label="Postal code" required placeholder="90001" />
                  <Input label="Country" required placeholder="United States" />
                </div>
              </CheckoutSection>

              <CheckoutSection icon={<Truck size={16} />} title="Delivery method">
                <div className="grid gap-3 sm:grid-cols-2">
                  <DeliveryCard
                    title="Standard delivery"
                    description="3-5 business days"
                    price={subtotal >= 50 ? 0 : 6}
                    active={deliveryMethod === 'standard'}
                    onClick={() => setDeliveryMethod('standard')}
                  />
                  <DeliveryCard
                    title="Express delivery"
                    description="1-2 business days"
                    price={12}
                    active={deliveryMethod === 'express'}
                    onClick={() => setDeliveryMethod('express')}
                  />
                </div>
              </CheckoutSection>
            </>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <CheckoutSection icon={<CreditCard size={16} />} title="Payment method">
              <div className="grid gap-3 sm:grid-cols-2">
                <PaymentCard
                  title="Card payment"
                  description="Visa, Mastercard, AMEX"
                  active={paymentMethod === 'card'}
                  onClick={() => setPaymentMethod('card')}
                />
                <PaymentCard
                  title="Paystack"
                  description="Popular local checkout flow"
                  active={paymentMethod === 'paystack'}
                  onClick={() => setPaymentMethod('paystack')}
                />
              </div>

              <div className="rounded-[20px] border border-cream bg-ivory p-4 space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-charcoal">
                  <Lock size={16} />
                  Secure payment placeholder
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Card number" placeholder="1234 1234 1234 1234" />
                  <Input label="Name on card" placeholder="Amina Cole" />
                  <Input label="Expiry date" placeholder="MM / YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>
            </CheckoutSection>
          )}

          <div className="rounded-[24px] border border-cream bg-ivory p-5">
            <label className="flex items-start gap-3 text-sm text-charcoal/75">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-charcoal/30" required />
              <span>
                I agree to the terms and confirm that this checkout is a front-end UI shell, not a live payment processor.
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button type="button" variant="secondary" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>
                  Back
                </Button>
              )}
            </div>
            <div className="ml-auto">
              <Button type="submit" isLoading={isSubmitting} className="sm:min-w-56">
                {currentStep < 2 ? 'Continue' : 'Place order'}
              </Button>
              <Button type="button" variant="secondary" onClick={() => router.push('/cart')}>
                Back to cart
              </Button>
            </div>
          </div>
        </form>

        <aside className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5 lg:sticky lg:top-28">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Order summary</p>
            <h2 className="text-2xl font-serif">{items.length} item{items.length === 1 ? '' : 's'}</h2>
          </div>

          <div className="space-y-4 max-h-[28rem] overflow-y-auto pr-1">
            {items.map(item => (
              <div key={item.id} className="flex items-center gap-3 rounded-[18px] border border-cream p-3">
                <div
                  className="h-16 w-16 shrink-0 rounded-[14px] border border-cream"
                  style={{ background: `linear-gradient(135deg, ${item.variant.colorHex} 0%, #FAF4EE 100%)` }}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium leading-tight">{item.product.name}</div>
                  <div className="text-xs text-charcoal/60 capitalize">{item.variant.length} {item.variant.shape}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">x{item.quantity}</div>
                  <div className="text-sm text-charcoal/60">${(item.variant.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm text-charcoal/70 border-t border-cream pt-4">
            <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            {discountAmount > 0 && <SummaryRow label="Discount" value={`-$${discountAmount.toFixed(2)}`} />}
            <SummaryRow label="Shipping" value={`$${shipping.toFixed(2)}`} />
            <SummaryRow label="Taxes" value={`$${taxes.toFixed(2)}`} />
            <div className="flex items-center justify-between text-base font-semibold text-charcoal pt-2">
              <span>Total</span>
              <PriceDisplay price={total} />
            </div>
          </div>

          <div className="rounded-[20px] border border-sage bg-sage/10 p-4 text-sm text-sage">
            Free shipping kicks in at $50 for the standard delivery option.
          </div>
        </aside>
      </div>
    </main>
  )
}

function CheckoutSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-ivory">
          {icon}
        </div>
        <h2 className="text-xl font-serif">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function DeliveryCard({ title, description, price, active, onClick }: { title: string; description: string; price: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'rounded-[22px] border p-4 text-left transition-all',
        active ? 'border-charcoal bg-charcoal/5' : 'border-cream bg-white hover:border-charcoal/20'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-charcoal/60">{description}</div>
        </div>
        <div className="text-sm font-medium">${price.toFixed(2)}</div>
      </div>
    </button>
  )
}

function PaymentCard({ title, description, active, onClick }: { title: string; description: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'rounded-[22px] border p-4 text-left transition-all',
        active ? 'border-charcoal bg-charcoal/5' : 'border-cream bg-white hover:border-charcoal/20'
      )}
    >
      <div className="font-medium">{title}</div>
      <div className="text-sm text-charcoal/60">{description}</div>
    </button>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
