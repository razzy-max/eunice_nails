"use client"

import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

const ChatPanel = dynamic(() => import('./ChatPanel'), { ssr: false })

export default function ChatButton(){
  const [open, setOpen] = useState(false)

  React.useEffect(() => {
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
        className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-rose-nude text-ivory shadow-lg"
      >
        <MessageCircle size={20} />
      </button>
      {open && <ChatPanel onClose={() => setOpen(false)} />}
    </>
  )
}
