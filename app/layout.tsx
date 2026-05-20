import '../styles/globals.css'
import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CartDrawer from '../components/cart/CartDrawer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Eunice Nails',
  description: 'Premium press-on nails',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a className="sr-only focus:not-sr-only" href="#main-content">Skip to content</a>
        <Header />
        <CartDrawer />
        <main id="main-content" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
