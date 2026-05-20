'use client'

import React, { useState } from 'react'
import { Mail, Instagram, Send } from 'lucide-react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import clsx from 'clsx'

const paymentMethods = ['Visa', 'Mastercard', 'AMEX', 'Paystack', 'Apple Pay']
const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'TikTok', href: '#', icon: Send },
  { label: 'WhatsApp', href: '#', icon: Send }
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeMessage('Thanks for subscribing!')
    setEmail('')
    setTimeout(() => setSubscribeMessage(''), 3000)
  }

  return (
    <footer className="bg-cream border-t border-ivory mt-12">
      <div className="container py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h3 className="font-semibold text-charcoal mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/shop" className="text-charcoal/70 hover:text-charcoal transition-colors">New Arrivals</a></li>
              <li><a href="/shop?sort=popular" className="text-charcoal/70 hover:text-charcoal transition-colors">Best Sellers</a></li>
              <li><a href="/wholesale" className="text-charcoal/70 hover:text-charcoal transition-colors">Wholesale</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-charcoal transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-charcoal mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-charcoal/70 hover:text-charcoal transition-colors">FAQ</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-charcoal transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-charcoal transition-colors">Size Guide</a></li>
              <li><a href="/contact" className="text-charcoal/70 hover:text-charcoal transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-charcoal mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-charcoal/70 hover:text-charcoal transition-colors">About Us</a></li>
              <li><a href="/journal" className="text-charcoal/70 hover:text-charcoal transition-colors">Journal</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-charcoal transition-colors">Careers</a></li>
              <li><a href="#" className="text-charcoal/70 hover:text-charcoal transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-charcoal mb-4">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex gap-2 mb-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 rounded-[10px] border border-charcoal/20 text-sm focus:outline-none focus:ring-2 focus:ring-charcoal"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2 bg-charcoal text-ivory rounded-[10px] hover:bg-charcoal/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              {subscribeMessage && (
                <p className="text-xs text-sage">{subscribeMessage}</p>
              )}
            </form>
            <div className="flex gap-3">
              {socialLinks.map(link => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="p-2 bg-charcoal/10 rounded-lg hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/50 pt-8" />

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal/60">
            © {new Date().getFullYear()} Eunice Nails. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            {paymentMethods.map(method => (
              <div
                key={method}
                className="px-2 py-1 border border-charcoal/20 rounded text-xs text-charcoal/60 bg-ivory"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
