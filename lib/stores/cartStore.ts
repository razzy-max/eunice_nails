import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { CartItem, Product, ProductVariant } from '../types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  appliedPromo?: { code: string; discount: number } | null
  addItem: (product: Product, variant: ProductVariant, quantity: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  applyPromo: (code: string) => void
  removePromo: () => void
  openCart: () => void
  closeCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem(product, variant, quantity) {
        const items = get().items.slice()
        const existing = items.find(i => i.variant.id === variant.id && i.product.id === product.id)
        if (existing) {
          existing.quantity += quantity
        } else {
          items.push({ id: `${product.id}_${variant.id}`, product, variant, quantity })
        }
        set({ items })
      },
      removeItem(itemId) {
        set({ items: get().items.filter(i => i.id !== itemId) })
      },
      updateQuantity(itemId, quantity) {
        set({ items: get().items.map(i => i.id === itemId ? { ...i, quantity } : i) })
      },
      clearCart() {
        set({ items: [], appliedPromo: null })
      },
      applyPromo(code) {
        // Simple client-only promo ruleset
        const normalized = code.trim().toUpperCase()
        if (!normalized) return
        if (normalized === 'EUNICE10') {
          set({ appliedPromo: { code: normalized, discount: 0.1 } })
        } else if (normalized === 'FREESHIP') {
          // FREESHIP represented as 0% off subtotal but handled as note; set discount 0
          set({ appliedPromo: { code: normalized, discount: 0 } })
        } else {
          // Unknown code clears any existing promo
          set({ appliedPromo: null })
        }
      },
      removePromo() {
        set({ appliedPromo: null })
      },
      openCart() {
        set({ isOpen: true })
      },
      closeCart() {
        set({ isOpen: false })
      }
    }),
    {
      name: 'eunice-nails-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ items: state.items })
    }
  )
)
