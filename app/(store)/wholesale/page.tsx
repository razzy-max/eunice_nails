'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { wholesaleTiers } from '@/lib/mock-data/help'

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    expectedVolume: '',
    productInterest: [] as string[],
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const productCategories = ['All Nails', 'Almond Shape', 'Coffin Shape', 'Square Shape', 'Accessories', 'Custom Orders']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProductChange = (category: string) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.includes(category)
        ? prev.productInterest.filter(c => c !== category)
        : [...prev.productInterest, category]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-charcoal text-ivory py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Wholesale Partnerships</h1>
            <p className="text-lg md:text-xl text-ivory/90 mb-6">
              Join fashion brands, resellers, and boutiques using Eunice Nails. Premium press-ons at wholesale pricing.
            </p>
            <p className="text-ivory/80">Minimum order: 5 units. Custom volumes and pricing available.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Tiered Wholesale Pricing</h2>
            <p className="text-charcoal/70">Standard pricing based on order volume. Larger orders qualify for custom negotiations.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {wholesaleTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-lg border-2 ${
                  idx === 3
                    ? 'border-rose-nude bg-rose-nude/5 ring-2 ring-rose-nude/20'
                    : 'border-cream bg-cream/30'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-charcoal/70">
                    {tier.minQuantity}–{tier.maxQuantity === Infinity ? '∞' : tier.maxQuantity} units
                  </p>
                </div>

                <div className="mb-6 py-4 border-t border-charcoal/10">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold">{tier.pricePerUnit}</span>
                    <span className="text-sm text-charcoal/70">per set</span>
                  </div>
                  <p className="text-sm text-sage">
                    {tier.discountPercentage}% off retail
                  </p>
                </div>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-rose-nude flex-shrink-0" />
                    <span>Free shipping on bulk orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-rose-nude flex-shrink-0" />
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-rose-nude flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wholesale */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Why Eunice Nails for Wholesale?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Best-Sellers',
                description: 'Our designs are tested and approved by thousands of customers. You know what will sell.'
              },
              {
                title: 'Premium Quality',
                description: 'Every set meets our exacting standards. Your reputation is our reputation.'
              },
              {
                title: 'Marketing Support',
                description: 'Access to product photography, descriptions, and content for your storefronts.'
              },
              {
                title: 'Fast Turnaround',
                description: 'Orders ship within 3 business days. Scale your inventory without long lead times.'
              },
              {
                title: 'Flexible Terms',
                description: 'Net 30 invoicing available for verified wholesale partners. Payment plans on request.'
              },
              {
                title: 'Dedicated Support',
                description: 'A real person manages your account. Questions get answered fast.'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-ivory rounded-lg border border-charcoal/10"
              >
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Start Your Partnership</h2>
            <p className="text-charcoal/70">Fill out the form below and our wholesale team will reach out within 24 hours.</p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 rounded-lg bg-sage/10 border border-sage text-sage"
            >
              ✓ Thank you! We'll contact you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Contact Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Expected Monthly Volume</label>
                <select
                  name="expectedVolume"
                  value={formData.expectedVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                >
                  <option value="">Select volume</option>
                  <option value="5-20">5–20 units</option>
                  <option value="20-50">20–50 units</option>
                  <option value="50-100">50–100 units</option>
                  <option value="100+">100+ units</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Product Interest</label>
              <div className="grid md:grid-cols-2 gap-3">
                {productCategories.map(category => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.productInterest.includes(category)}
                      onChange={() => handleProductChange(category)}
                      className="w-4 h-4 rounded border-cream"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell us about your business and what you're looking for..."
                className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Submit Inquiry <ArrowRight size={16} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
