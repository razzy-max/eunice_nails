"use client"

import React from 'react'

export default function MessageBubble({ role, children }: { role: 'user' | 'assistant'; children: React.ReactNode }) {
  const isUser = role === 'user'
  return (
    <div className={`max-w-[80%] ${isUser ? 'ml-auto bg-charcoal text-ivory' : 'bg-ivory text-charcoal'} rounded-xl p-3 shadow-sm`}> 
      <div className="text-sm">{children}</div>
    </div>
  )
}
