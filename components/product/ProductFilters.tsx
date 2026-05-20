'use client'

import React, { useMemo } from 'react'
import type { Product } from '@/lib/types'

type Props = {
  products: Product[]
  value: { shape?: string; length?: string }
  onChange: (v: { shape?: string; length?: string }) => void
  onClear?: () => void
}

export default function ProductFilters({ products, value, onChange, onClear }: Props) {
  const shapes = useMemo(() => {
    const s = new Set<string>()
    products.forEach(p => p.variants?.forEach(v => v.shape && s.add(v.shape)))
    return Array.from(s)
  }, [products])

  const lengths = useMemo(() => {
    const s = new Set<string>()
    products.forEach(p => p.variants?.forEach(v => v.length && s.add(v.length)))
    return Array.from(s)
  }, [products])

  const hasActiveFilters = Boolean(value.shape || value.length)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70">Filters</h3>
        {hasActiveFilters && onClear && (
          <button type="button" onClick={onClear} className="text-xs text-rose-nude hover:underline">
            Clear all
          </button>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Shape</h4>
        <div className="space-y-1">
          {shapes.map(shape => (
            <label key={shape} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="shape"
                checked={value.shape === shape}
                onChange={() => onChange({ shape })}
                className="form-radio"
              />
              <span className="capitalize">{shape}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="shape"
              checked={!value.shape}
              onChange={() => onChange({ shape: undefined })}
              className="form-radio"
            />
            <span>All</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Length</h4>
        <div className="space-y-1">
          {lengths.map(length => (
            <label key={length} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="length"
                checked={value.length === length}
                onChange={() => onChange({ length })}
                className="form-radio"
              />
              <span className="capitalize">{length}</span>
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="length"
              checked={!value.length}
              onChange={() => onChange({ length: undefined })}
              className="form-radio"
            />
            <span>All</span>
          </label>
        </div>
      </div>
    </div>
  )
}
