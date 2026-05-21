'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Leaf, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-ivory border-b border-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Eunice Nails</h1>
            <p className="text-lg text-charcoal/80 mb-4">
              We believe every person deserves to feel confident, beautiful, and powerful in their own skin. Eunice Nails exists to make that possible—one perfect set at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p>
                Eunice Nails was born from frustration. Our founder, Eunice, spent years searching for press-on nails that didn't feel like a compromise. They were either too stiff, came in limited shades, or were made with practices that didn't align with her values.
              </p>
              <p>
                She didn't just want nails. She wanted nails that felt luxurious, lasted longer, came in colors created specifically for her skin tone, and were made by people who were treated fairly. That seemed like the bare minimum.
              </p>
              <p>
                So she decided to build the company she'd always wanted to buy from. She spent months sourcing materials, testing formulas, and redesigning the application process. She traveled across three continents to find production partners who shared her values. The result? Eunice Nails.
              </p>
              <p>
                Today, thousands of people wear Eunice Nails every day. They wear them to boardrooms and music festivals. To job interviews and first dates. To escape domestic abuse and claim their power back. We don't take that responsibility lightly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Empowerment',
                description: "We believe beauty is a tool for confidence. When you feel good, you perform better. We're in the business of helping you feel your absolute best."
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                description: 'We respect our planet. Every decision—from materials to packaging to waste—is made with the next generation in mind. No compromises, no greenwashing.'
              },
              {
                icon: Users,
                title: 'Fair Labour',
                description: 'Every person involved in making Eunice Nails is treated with dignity and paid fairly. We believe luxury should never come at the cost of human welfare.'
              }
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-lg border border-cream bg-cream/30"
                >
                  <Icon size={32} className="mb-4 text-rose-nude" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-charcoal/70">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">By the Numbers</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '12', label: 'Countries Served' },
              { number: '98%', label: 'Repeat Purchase Rate' },
              { number: '3–4 weeks', label: 'Average Wear Duration' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-rose-nude mb-2">{stat.number}</p>
                <p className="text-charcoal/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Meet Our Team</h2>
          <p className="text-lg text-charcoal/80 mb-12">
            We're a diverse group of designers, engineers, customer advocates, and beauty experts united by one mission: to create the most beautiful, sustainable, and empowering press-on nails on the planet.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Eunice Cole', role: 'Founder & Creative Director', bio: 'Former fashion editor turned nail entrepreneur.' },
              { name: 'Amara Williams', role: 'Head of Product', bio: 'Obsessed with quality and craft. Spends weeks perfecting each shade.' },
              { name: 'Zara Khan', role: 'Sustainability Lead', bio: 'Ensuring every nail is made with conscience.' },
              { name: 'James Okonkwo', role: 'Head of Customer Care', bio: 'Your voice matters. He makes sure we listen.' }
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-cream bg-cream/30"
              >
                <div className="w-16 h-16 rounded-full bg-rose-nude/20 mb-4" />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-rose-nude font-medium mb-2">{member.role}</p>
                <p className="text-charcoal/70">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Feel Your Best?</h2>
          <p className="text-lg text-ivory/90 mb-8">
            Browse our collections and find the perfect set that matches your energy.
          </p>
          <Link href="/shop">
            <Button variant="secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
