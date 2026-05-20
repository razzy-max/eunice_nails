import React from 'react'
import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-ivory border-t border-cream h-20 flex items-center justify-around lg:hidden z-40">
      <Link href="/" onClick={onClose} className="flex flex-col items-center gap-1 text-xs">
        🏠 Home
      </Link>
      <Link href="/shop" onClick={onClose} className="flex flex-col items-center gap-1 text-xs">
        🛍️ Shop
      </Link>
      <Link href="/account" onClick={onClose} className="flex flex-col items-center gap-1 text-xs">
        👤 Account
      </Link>
      <Link href="/account/wishlist" onClick={onClose} className="flex flex-col items-center gap-1 text-xs">
        ❤️ Wishlist
      </Link>
    </nav>
  )
}
