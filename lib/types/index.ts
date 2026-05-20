export interface ProductImage {
  url: string
  alt: string
  position: number
}

export interface ProductVariant {
  id: string
  sku: string
  length: 'short' | 'medium' | 'long' | 'extra-long'
  shape: 'almond' | 'coffin' | 'square' | 'stiletto'
  color: string
  colorHex: string
  stock: number
  price: number
  imageUrl?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  basePrice: number
  images: ProductImage[]
  variants: ProductVariant[]
  tags: ('new' | 'bestseller' | 'low-stock')[]
  rating: number
  reviewCount: number
  collectionIds: string[]
}

export interface CartItem {
  id: string
  product: Product
  variant: ProductVariant
  quantity: number
}

export interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'customer' | 'wholesale' | 'admin'
  loyaltyPoints: number
}

export interface OrderItem {
  productId: string
  productName: string
  variantId: string
  variantColor: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  orderNumber: string
  status: 'pending' | 'paid' | 'fulfilled' | 'delivered' | 'returned'
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: Address
  createdAt: string
  updatedAt: string
}
