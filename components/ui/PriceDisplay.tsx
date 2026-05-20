import React from 'react'
import clsx from 'clsx'

interface PriceDisplayProps {
  price: number
  comparePrice?: number
  className?: string
}

export function PriceDisplay({ price, comparePrice, className }: PriceDisplayProps) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <span className="text-lg font-semibold text-charcoal">
        ${price.toFixed(2)}
      </span>
      {comparePrice && comparePrice > price && (
        <span className="text-sm text-charcoal/50 line-through">
          ${comparePrice.toFixed(2)}
        </span>
      )}
    </div>
  )
}

interface RatingStarsProps {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function RatingStars({ rating, reviewCount, size = 'md', className }: RatingStarsProps) {
  const sizeClass = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }[size]

  return (
    <div className={clsx('flex items-center gap-2', sizeClass, className)}>
      <span role="img" aria-label={`${rating} out of 5 stars`}>
        {'⭐'.repeat(Math.round(rating))}{rating < 5 && '☆'.repeat(5 - Math.round(rating))}
      </span>
      <span className="text-charcoal/70">
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className="text-charcoal/50">
          ({reviewCount})
        </span>
      )}
    </div>
  )
}
