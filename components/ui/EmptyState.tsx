import React from 'react'
import Button from './Button'
import clsx from 'clsx'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  ctaLabel,
  onCtaClick,
  className
}: EmptyStateProps) {
  return (
    <div className={clsx('flex flex-col items-center justify-center py-12 px-4', className)}>
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      <h2 className="text-xl font-semibold text-charcoal mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-charcoal/70 text-center mb-6 max-w-sm">
          {description}
        </p>
      )}
      {ctaLabel && onCtaClick && (
        <Button variant="primary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      )}
    </div>
  )
}

interface ErrorStateProps {
  title?: string
  message: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
  className
}: ErrorStateProps) {
  return (
    <div className={clsx('flex flex-col items-center justify-center py-12 px-4', className)}>
      <div className="mb-4 text-4xl">
        ⚠️
      </div>
      <h2 className="text-xl font-semibold text-rust mb-2">
        {title}
      </h2>
      <p className="text-charcoal/70 text-center mb-6 max-w-sm">
        {message}
      </p>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  )
}
