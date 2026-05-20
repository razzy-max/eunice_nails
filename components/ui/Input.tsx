import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  error,
  helpText,
  className,
  id,
  type = 'text',
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={clsx(
          'px-3 py-2.5 border rounded-[10px] text-base',
          'bg-ivory border-charcoal/20 text-charcoal',
          'placeholder:text-charcoal/40',
          'focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 focus:border-transparent',
          'transition-all duration-200',
          error && 'border-rust focus:ring-rust',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-rust">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${inputId}-help`} className="text-xs text-charcoal/60">
          {helpText}
        </p>
      )}
    </div>
  )
}
