'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X, ChevronDown } from 'lucide-react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import QuickReplies from './QuickReplies'
import { motion } from 'framer-motion'

export default function ChatSheet({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; text: string }>>([
    { id: '1', role: 'assistant', text: 'Hi — how can I help with nails today?' }
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
    setIsTyping(true)
    window.setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: id + '-r', role: 'assistant', text: mockResponse(text) }])
    }, 700 + Math.random() * 900)
  }

  const suggestedQuestions = ['Sizing help', 'Order status', 'Returns', 'Product info']

  function mockResponse(text: string) {
    const t = text.toLowerCase()
    if (t.includes('size') || t.includes('sizing')) return 'For sizing, measure the width of your nail bed. We recommend Medium for most customers.'
    if (t.includes('order') || t.includes('status')) return 'Enter your order number and I can look that up. (Mock: Order #12345 — Shipped)'
    if (t.includes('return')) return 'Returns accepted within 30 days. Please ensure items are unused and in original packaging.'
    if (t.includes('product') || t.includes('info')) return 'Which product would you like to know more about?'
    return "Try asking about sizing, order status, returns, or product info."
  }

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="fixed inset-0 z-50 flex flex-col"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />

      {/* Sheet */}
      <div className="ml-auto relative w-full h-full max-h-[80vh] rounded-t-2xl bg-ivory border border-cream flex flex-col">
        {/* Handle + Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cream">
          <div className="flex flex-col gap-1 flex-1">
            <div className="font-medium text-charcoal">Eunice Stylist</div>
            <div className="text-xs text-charcoal/60">Always here to help</div>
          </div>
          <button onClick={onClose} aria-label="Close chat" className="p-2 hover:bg-cream rounded">
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map(m => (
            <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <MessageBubble role={m.role}>{m.text}</MessageBubble>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-cream p-2 rounded-xl border border-cream/50">
                <TypingIndicator />
              </div>
            </div>
          )}
        </div>

        {/* Quick replies */}
        {messages.length === 1 && (
          <div className="px-4 py-2 border-t border-cream/50 bg-ivory/50">
            <QuickReplies options={suggestedQuestions} onSelect={send} />
          </div>
        )}

        {/* Input */}
        <div className="border-t border-cream p-3 bg-ivory">
          <form onSubmit={(e) => { e.preventDefault(); send(input) }} className="flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Message..."
              className="flex-1 rounded-md border border-cream px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded-md bg-charcoal px-3 text-sm text-ivory">Send</button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
