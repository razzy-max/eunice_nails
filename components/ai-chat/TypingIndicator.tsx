"use client"

import React from 'react'

export default function TypingIndicator(){
  return (
    <div className="flex items-center gap-1">
      <span className="h-2 w-2 rounded-full bg-charcoal animate-pulse" />
      <span className="h-2 w-2 rounded-full bg-charcoal animate-pulse delay-75" />
      <span className="h-2 w-2 rounded-full bg-charcoal animate-pulse delay-150" />
    </div>
  )
}
