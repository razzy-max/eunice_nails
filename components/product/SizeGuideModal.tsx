"use client"

import React from 'react'
import Button from '@/components/ui/Button'

export default function SizeGuideModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-ivory shadow-lg border border-cream">
        <div className="sticky top-0 bg-ivory border-b border-cream p-6 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-serif text-charcoal">Nail sizes explained</h3>
            <p className="text-sm text-charcoal/70 mt-1">Find your perfect length for comfort and style.</p>
          </div>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Measurement Chart */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-charcoal/60">Size Chart</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cream">
                    <th className="text-left py-3 px-3 font-semibold text-charcoal">Length</th>
                    <th className="text-left py-3 px-3 font-semibold text-charcoal">Measurement</th>
                    <th className="text-left py-3 px-3 font-semibold text-charcoal">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cream/50 hover:bg-charcoal/2">
                    <td className="py-3 px-3 font-medium text-charcoal">Short</td>
                    <td className="py-3 px-3 text-charcoal/75">8–10 mm</td>
                    <td className="py-3 px-3 text-charcoal/75">Everyday wear, low profile</td>
                  </tr>
                  <tr className="border-b border-cream/50 hover:bg-charcoal/2">
                    <td className="py-3 px-3 font-medium text-charcoal">Medium</td>
                    <td className="py-3 px-3 text-charcoal/75">11–13 mm</td>
                    <td className="py-3 px-3 text-charcoal/75">Versatile, most popular</td>
                  </tr>
                  <tr className="border-b border-cream/50 hover:bg-charcoal/2">
                    <td className="py-3 px-3 font-medium text-charcoal">Long</td>
                    <td className="py-3 px-3 text-charcoal/75">14–16 mm</td>
                    <td className="py-3 px-3 text-charcoal/75">Statement look, events</td>
                  </tr>
                  <tr className="hover:bg-charcoal/2">
                    <td className="py-3 px-3 font-medium text-charcoal">Extra Long</td>
                    <td className="py-3 px-3 text-charcoal/75">17+ mm</td>
                    <td className="py-3 px-3 text-charcoal/75">Bold glam, special occasions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Measure */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-charcoal/60">How to Measure</h4>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              Use a ruler or caliper to measure from your natural nail tip to where you'd like the press-on to extend. Most people compare to their current nail length or match a reference photo. If you're between sizes, we recommend sizing down for comfort.
            </p>
          </div>

          {/* Style Tips */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-charcoal/60">Length & Lifestyle</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] border border-cream bg-white p-4">
                <div className="text-sm font-semibold text-charcoal mb-2">Short & Medium</div>
                <ul className="text-sm text-charcoal/70 space-y-1 leading-relaxed">
                  <li>✓ Comfortable for typing</li>
                  <li>✓ Great for active lifestyles</li>
                  <li>✓ Easy application & removal</li>
                  <li>✓ Perfect for work environments</li>
                </ul>
              </div>
              <div className="rounded-[14px] border border-cream bg-white p-4">
                <div className="text-sm font-semibold text-charcoal mb-2">Long & Extra Long</div>
                <ul className="text-sm text-charcoal/70 space-y-1 leading-relaxed">
                  <li>✓ Statement and glamorous look</li>
                  <li>✓ Perfect for date night & events</li>
                  <li>✓ Requires gentle handling</li>
                  <li>✓ Best with glue application</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application & Care */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-charcoal/60">Application Tips</h4>
            <ol className="text-sm text-charcoal/75 space-y-2 leading-relaxed list-decimal list-inside">
              <li>Choose the correct size for each finger—your thumb and pinky may be different from your index.</li>
              <li>Clean your natural nails with nail dehydrator or rubbing alcohol for better adhesion.</li>
              <li>Use adhesive tabs for temporary wear (3–5 days); use glue for longer-lasting (up to 3 weeks).</li>
              <li>Press firmly for 10–15 seconds to ensure a secure bond.</li>
              <li>Wait 5 minutes before using your hands if using adhesive tabs.</li>
            </ol>
          </div>

          {/* Fit & Comfort */}
          <div className="rounded-[16px] border border-sage/20 bg-sage/5 p-4 space-y-2">
            <div className="text-sm font-semibold text-charcoal">Pro tip</div>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              A proper fit means the press-on sits flush on your nail with no overhang or gaps on the sides. If it's too wide, try one size down. Our sets come with 10 nails in common sizes, so you can mix and match for the perfect fit on every finger.
            </p>
          </div>

          <div className="pt-4 border-t border-cream">
            <Button onClick={onClose} className="w-full">Got it</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
