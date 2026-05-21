'use client'

import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import dynamic from 'next/dynamic'
import { AnimatePresence } from 'framer-motion'

const ChatPanel = dynamic(() => import('./ChatPanel'), { ssr: false })
const ChatSheet = dynamic(() => import('./ChatSheet'), { ssr: false })

export default function ChatButton() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and listen for resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    function onOpen() {
      setOpen(true)
    }
    window.addEventListener('open-eunice-chat', onOpen)
    return () => window.removeEventListener('open-eunice-chat', onOpen)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-rose-nude text-ivory shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle size={20} />
      </button>
      <AnimatePresence>
        {open && (
          isMobile ? (
            <ChatSheet onClose={() => setOpen(false)} />
          ) : (
            <ChatPanel onClose={() => setOpen(false)} />
          )
        )}
      </AnimatePresence>
    </>
  )
}
