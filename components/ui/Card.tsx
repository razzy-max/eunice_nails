import React from 'react'
import clsx from 'clsx'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-ivory border border-cream rounded-[10px] p-5',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('text-lg font-semibold text-charcoal', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={clsx('text-sm text-charcoal/70', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-cream flex gap-2', className)}>
      {children}
    </div>
  )
}
