import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { mockProducts } from '@/lib/mock-data/products'
import type { Address, Order, User } from '@/lib/types'
import { Heart, Package, MapPin, Crown, ArrowRight, CheckCircle2, Clock3, Truck } from 'lucide-react'

const mockUser: User = {
  id: 'usr_001',
  name: 'Amina Cole',
  email: 'amina@example.com',
  role: 'customer',
  loyaltyPoints: 1240
}

const mockAddresses: Address[] = [
  {
    id: 'addr_001',
    name: 'Home',
    street: '123 Rose Avenue',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90001',
    country: 'United States',
    isDefault: true
  },
  {
    id: 'addr_002',
    name: 'Studio',
    street: '42 Sunset Boulevard',
    city: 'Beverly Hills',
    state: 'CA',
    postalCode: '90210',
    country: 'United States',
    isDefault: false
  }
]

const mockOrders: Order[] = [
  {
    id: 'ord_001',
    orderNumber: 'EN-20481',
    status: 'delivered',
    items: [
      {
        productId: mockProducts[0].id,
        productName: mockProducts[0].name,
        variantId: mockProducts[0].variants[0].id,
        variantColor: mockProducts[0].variants[0].color,
        quantity: 1,
        price: mockProducts[0].variants[0].price
      }
    ],
    subtotal: 24,
    shipping: 6,
    tax: 1.92,
    total: 31.92,
    shippingAddress: mockAddresses[0],
    createdAt: '2026-05-08T09:20:00Z',
    updatedAt: '2026-05-12T11:45:00Z'
  },
  {
    id: 'ord_002',
    orderNumber: 'EN-20517',
    status: 'fulfilled',
    items: [
      {
        productId: mockProducts[4].id,
        productName: mockProducts[4].name,
        variantId: mockProducts[4].variants[0].id,
        variantColor: mockProducts[4].variants[0].color,
        quantity: 2,
        price: mockProducts[4].variants[0].price
      }
    ],
    subtotal: 48,
    shipping: 0,
    tax: 3.84,
    total: 51.84,
    shippingAddress: mockAddresses[1],
    createdAt: '2026-05-15T14:10:00Z',
    updatedAt: '2026-05-18T17:30:00Z'
  }
]

const statusMap: Record<Order['status'], { label: string; icon: React.ReactNode; tone: string }> = {
  pending: { label: 'Pending', icon: <Clock3 size={14} />, tone: 'bg-rose-nude text-ivory' },
  paid: { label: 'Paid', icon: <CheckCircle2 size={14} />, tone: 'bg-sage text-ivory' },
  fulfilled: { label: 'Fulfilled', icon: <Truck size={14} />, tone: 'bg-burnt-mocha text-ivory' },
  delivered: { label: 'Delivered', icon: <CheckCircle2 size={14} />, tone: 'bg-charcoal text-ivory' },
  returned: { label: 'Returned', icon: <Package size={14} />, tone: 'bg-rust text-ivory' }
}

export default function AccountPage() {
  const wishlistCount = 3
  const orderCount = mockOrders.length
  const defaultAddress = mockAddresses.find(address => address.isDefault) ?? mockAddresses[0]

  return (
    <main className="container py-10 lg:py-14 space-y-10">
      <section className="rounded-[32px] border border-cream bg-ivory p-6 lg:p-8 shadow-[0_16px_40px_rgba(60,40,26,0.05)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <Badge variant="new" className="inline-flex items-center gap-2">
              <Crown size={12} />
              Member since 2024
            </Badge>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Account dashboard</p>
              <h1 className="mt-2 text-3xl lg:text-5xl font-serif">Welcome back, {mockUser.name.split(' ')[0]}</h1>
            </div>
            <p className="max-w-xl text-sm lg:text-base text-charcoal/70 leading-7">
              Track orders, manage addresses, and review your wishlist from one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-[12px] border border-charcoal px-4 py-2.5 text-base font-medium text-charcoal transition-all duration-200 hover:bg-charcoal/5 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
            >
              Continue shopping <ArrowRight size={16} />
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-[12px] bg-charcoal px-4 py-2.5 text-base font-medium text-ivory transition-all duration-200 hover:bg-charcoal/90 focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2"
            >
              View cart <Package size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon={<Package size={16} />} label="Orders placed" value={String(orderCount)} description="Completed and active orders" />
        <MetricCard icon={<Heart size={16} />} label="Wishlist" value={String(wishlistCount)} description="Saved styles to revisit" />
        <MetricCard icon={<Crown size={16} />} label="Loyalty points" value={mockUser.loyaltyPoints.toLocaleString()} description="Redeemable at checkout" />
        <MetricCard icon={<MapPin size={16} />} label="Saved addresses" value={String(mockAddresses.length)} description="Default shipping destinations" />
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px] items-start">
        <div className="space-y-8">
          <div id="orders" className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Orders</p>
                <h2 className="text-2xl font-serif">Recent purchases</h2>
              </div>
              <Link href="#addresses" className="text-sm text-rose-nude hover:underline">View saved addresses</Link>
            </div>

            <div className="space-y-4">
              {mockOrders.map(order => {
                const status = statusMap[order.status]
                return (
                  <article key={order.id} className="rounded-[22px] border border-cream bg-white p-5 space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Order {order.orderNumber}</p>
                        <h3 className="text-lg font-medium">{order.items[0].productName}</h3>
                        <p className="text-sm text-charcoal/60">Placed {formatDate(order.createdAt)}</p>
                      </div>
                      <Badge variant={order.status === 'returned' ? 'error' : order.status === 'pending' ? 'warning' : 'success'} className="inline-flex items-center gap-1 w-fit">
                        {status.icon}
                        {status.label}
                      </Badge>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 text-sm">
                      <SummaryBlock label="Subtotal" value={`$${order.subtotal.toFixed(2)}`} />
                      <SummaryBlock label="Shipping" value={`$${order.shipping.toFixed(2)}`} />
                      <SummaryBlock label="Total" value={`$${order.total.toFixed(2)}`} emphasize />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-charcoal/60">
                        Delivered to {order.shippingAddress.city}, {order.shippingAddress.state}
                      </p>
                      <Link href="/shop" className="text-sm text-rose-nude hover:underline">
                        Reorder style
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div id="wishlist" className="rounded-[28px] border border-cream bg-charcoal p-6 text-ivory space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-ivory/60">Wishlist</p>
              <h2 className="text-2xl font-serif">Saved for later</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {mockProducts.slice(1, 4).map(product => (
                <Link key={product.id} href={`/shop/${product.slug}`} className="rounded-[20px] border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                  <div
                    className="aspect-square rounded-[16px] mb-4 border border-white/10"
                    style={{ background: `linear-gradient(135deg, ${product.variants[0]?.colorHex ?? '#E8DDD3'} 0%, rgba(255,255,255,0.15) 100%)` }}
                  />
                  <div className="text-sm font-medium">{product.name}</div>
                  <div className="text-sm text-ivory/70">${product.basePrice.toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <section className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Profile</p>
              <h2 className="text-2xl font-serif">Account details</h2>
            </div>

            <div className="space-y-4">
              <DetailRow label="Name" value={mockUser.name} />
              <DetailRow label="Email" value={mockUser.email} />
              <DetailRow label="Role" value={mockUser.role} />
              <DetailRow label="Default address" value={`${defaultAddress.street}, ${defaultAddress.city}`} />
            </div>

            <div className="grid gap-3">
              <button type="button" className="w-full rounded-[12px] border border-charcoal px-4 py-2.5 text-base font-medium text-charcoal transition-all duration-200 hover:bg-charcoal/5">
                Edit profile
              </button>
              <button type="button" className="w-full rounded-[12px] bg-transparent px-4 py-2.5 text-base font-medium text-charcoal underline hover:no-underline">
                Change password
              </button>
            </div>
          </section>

          <section id="addresses" className="rounded-[28px] border border-cream bg-ivory p-6 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">Addresses</p>
              <h2 className="text-2xl font-serif">Saved shipping</h2>
            </div>

            <div className="space-y-3">
              {mockAddresses.map(address => (
                <div key={address.id} className="rounded-[20px] border border-cream bg-white p-4 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium">{address.name}</div>
                    {address.isDefault && <Badge variant="success">Default</Badge>}
                  </div>
                  <p className="text-sm text-charcoal/70 leading-6">
                    {address.street}<br />
                    {address.city}, {address.state} {address.postalCode}<br />
                    {address.country}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  )
}

function MetricCard({ icon, label, value, description }: { icon: React.ReactNode; label: string; value: string; description: string }) {
  return (
    <div className="rounded-[24px] border border-cream bg-ivory p-5 space-y-3 shadow-[0_12px_30px_rgba(60,40,26,0.04)]">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-ivory">
        {icon}
      </div>
      <div>
        <p className="text-sm text-charcoal/60">{label}</p>
        <p className="text-3xl font-serif">{value}</p>
      </div>
      <p className="text-sm text-charcoal/60">{description}</p>
    </div>
  )
}

function SummaryBlock({ label, value, emphasize = false }: { label: string; value: string; emphasize?: boolean }) {
  return (
    <div className="rounded-[18px] border border-cream bg-ivory p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-charcoal/50">{label}</p>
      <p className={emphasize ? 'mt-1 text-base font-semibold text-charcoal' : 'mt-1 text-sm text-charcoal/75'}>{value}</p>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="text-charcoal/60">{label}</span>
      <span className="text-right font-medium text-charcoal">{value}</span>
    </div>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(iso))
}
