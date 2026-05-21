'use client'

import React from 'react'

interface QuickRepliesProps {
  options: string[]
  onSelect: (option: string) => void
}

export default function QuickReplies({ options, onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(option)}
          className="px-3 py-1.5 rounded-full bg-cream text-charcoal text-sm hover:bg-rose-nude/20 transition-colors"
        >
          {option}
        </button>
      ))}
    </div>
  )
}
