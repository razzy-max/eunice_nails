"use client"

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import ChatPanel from './ChatPanel'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatPanel onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="fixed right-6 bottom-6 z-40 rounded-full bg-rose-nude w-14 h-14 flex items-center justify-center text-ivory shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  )
}
