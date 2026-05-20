import React from 'react'
import clsx from 'clsx'

type BadgeVariant = 'default' | 'new' | 'bestseller' | 'success' | 'error' | 'warning'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-cream text-charcoal',
  new: 'bg-charcoal text-ivory',
  bestseller: 'bg-burnt-mocha text-ivory',
  success: 'bg-sage text-ivory',
  error: 'bg-rust text-ivory',
  warning: 'bg-rose-nude text-ivory'
}

export default function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block px-2.5 py-1 rounded-full text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
