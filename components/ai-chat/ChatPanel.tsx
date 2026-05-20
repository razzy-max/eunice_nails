"use client"

import React, { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; text: string }>>([
    { id: '1', role: 'assistant', text: 'Hi — how can I help with nails today? Try: "Sizing help" or "Order status"' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight })
  }, [messages, isTyping])

  const send = (text: string) => {
    if (!text.trim()) return
    const id = String(Date.now())
    setMessages(prev => [...prev, { id, role: 'user', text }])
    setInput('')
    // Mock assistant reply
    setIsTyping(true)
    window.setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: id + '-r', role: 'assistant', text: mockResponse(text) }])
    }, 700 + Math.random() * 900)
  }

  function mockResponse(text: string) {
    const t = text.toLowerCase()
    if (t.includes('size') || t.includes('sizing')) return 'For sizing, measure the width of your nail bed. We recommend Medium for most customers. Would you like visual guide?'
    if (t.includes('order') || t.includes('status')) return 'Enter your order number and I can look that up. (Mock response: Order #12345 — Shipped)'
    if (t.includes('return')) return 'Returns accepted within 30 days. Please ensure items are unused and in original packaging.'
    return "Sorry, I'm a mock assistant — try 'Sizing help' or 'Order status'."
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 w-[380px] max-h-[80vh] rounded-xl border border-cream bg-ivory shadow-lg flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-cream">
        <div className="font-medium">Eunice Stylist</div>
        <button onClick={onClose} aria-label="Close chat" className="p-2 hover:bg-cream rounded">
          <X size={18} />
        </button>
      </div>
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(m => (
          <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <MessageBubble role={m.role}>{m.text}</MessageBubble>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-ivory p-2 rounded-xl border border-cream"><TypingIndicator /></div>
          </div>
        )}
      </div>
      <div className="border-t border-cream p-3">
        <form onSubmit={(e) => { e.preventDefault(); send(input) }} className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about sizing, orders, returns..." className="flex-1 rounded-md border border-cream px-3 py-2" />
          <button type="submit" className="rounded-md bg-charcoal px-3 text-sm text-ivory">Send</button>
        </form>
      </div>
    </div>
  )
}
