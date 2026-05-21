'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@eunicenails.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon–Fri, 9 AM–5 PM EST'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Chat with our AI stylist anytime'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Los Angeles, CA',
      description: 'By appointment only'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-ivory border-b border-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-charcoal/80">
              We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-ivory rounded-lg border border-charcoal/10 text-center"
                >
                  <Icon size={32} className="mx-auto mb-4 text-rose-nude" />
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="font-medium text-charcoal/80 mb-2">{method.value}</p>
                  <p className="text-sm text-charcoal/60">{method.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Send us a Message</h2>
            <p className="text-charcoal/70">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 rounded-lg bg-sage/10 border border-sage text-sage"
            >
              ✓ Thank you for reaching out! We'll be in touch soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
                />
              </div>
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
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="order-support">Order Support</option>
                <option value="shipping">Shipping Issue</option>
                <option value="return">Return / Exchange</option>
                <option value="wholesale">Wholesale Partnership</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-2 rounded-lg border border-cream focus:ring-2 focus:ring-rose-nude focus:border-transparent"
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="privacy" required className="mt-1" />
              <label htmlFor="privacy" className="text-sm text-charcoal/70">
                I agree to Eunice Nails' privacy policy and terms. We'll only use this information to respond to your inquiry.
              </label>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Message <ArrowRight size={16} />
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 md:py-16 bg-cream text-center">
        <div className="container">
          <p className="text-charcoal/70 mb-4">Have a quick question?</p>
          <a
            href="/help"
            className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-rose-nude transition-colors"
          >
            Check out our Help Center <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  )
}
