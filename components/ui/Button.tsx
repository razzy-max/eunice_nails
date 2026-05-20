import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-charcoal text-ivory hover:bg-charcoal/90',
  secondary: 'border border-charcoal text-charcoal bg-transparent hover:bg-charcoal/5',
  tertiary: 'bg-transparent text-charcoal underline hover:no-underline',
  destructive: 'bg-rust text-ivory hover:bg-rust/90'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={clsx(
        'font-medium rounded-[12px] transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? '...' : children}
    </motion.button>
  )
}
