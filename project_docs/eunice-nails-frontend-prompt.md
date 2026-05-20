# Eunice Nails — Frontend Build Prompt
### For VSCode GitHub Copilot Chat (attach alongside the PDF documentation)

---

## ROLE AND CONTEXT

You are a senior frontend engineer building the complete frontend for **Eunice Nails**, a premium press-on nails ecommerce platform. The full product specification is in the attached PDF. Read it thoroughly before writing any code.

Your job is to build the entire frontend as a **handoff-ready codebase** — meaning a backend engineer should be able to pick it up and wire real API endpoints to it without touching the UI code.

---

## TECH STACK

Use exactly this stack. Do not substitute:

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **State management**: Zustand for global state (cart, auth), React Query (TanStack Query) for server state
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## BRAND AND DESIGN SYSTEM

Build the design system first before any pages. These values are non-negotiable and come directly from the spec:

### Color Tokens (add to tailwind.config.ts)
```
ivory:        #FAF7F2   (primary background)
cream:        #F1ECE4   (secondary background)
charcoal:     #1A1A1A   (primary text)
rose-nude:    #C9A28A   (brand accent)
burnt-mocha:  #6B4A38   (highlight accent)
sage:         #7A8B6F   (success)
rust:         #B5483A   (error/destructive)
```

### Typography
- Display/Headings: `Canela` or fallback to `Georgia` (serif, editorial)
- Body: `Inter` (clean sans-serif)
- Load both via `next/font`

### Design Rules (enforce throughout)
- Border radius: 8–12px on all cards, inputs, buttons
- Shadows: thin borders preferred over heavy drop shadows
- Whitespace: generous — this is editorial, not dense
- Hover states: subtle scale (1.02) + slight darken, 200ms ease
- All animations must respect `prefers-reduced-motion`
- Colour contrast: minimum 4.5:1 for all body text (WCAG 2.1 AA)

### Button Variants (build as reusable components)
- **Primary**: solid charcoal bg, ivory text, 12px radius
- **Secondary**: transparent, charcoal border
- **Tertiary**: text-only, underline on hover
- **Destructive**: muted rust bg, ivory text
- All buttons must have visible focus rings

---

## PROJECT STRUCTURE

Scaffold this exact folder structure:

```
/app
  /(store)
    /page.tsx                  (Home)
    /shop/page.tsx             (Product Listing)
    /shop/[slug]/page.tsx      (Product Detail)
    /collections/[slug]/page.tsx
    /cart/page.tsx
    /checkout/page.tsx
    /order-confirmation/page.tsx
    /account/page.tsx
    /account/orders/page.tsx
    /account/wishlist/page.tsx
    /account/addresses/page.tsx
    /wholesale/page.tsx
    /about/page.tsx
    /journal/page.tsx
    /journal/[slug]/page.tsx
    /help/page.tsx
    /contact/page.tsx
  /layout.tsx                  (root layout)

/components
  /ui                          (shadcn/ui base components)
  /layout
    Header.tsx
    Footer.tsx
    AnnouncementBar.tsx
    MobileNav.tsx
  /product
    ProductCard.tsx
    ProductGrid.tsx
    ProductFilters.tsx
    ProductGallery.tsx
    ProductDetail.tsx
    QuickView.tsx
  /cart
    CartDrawer.tsx
    CartItem.tsx
    CartSummary.tsx
  /checkout
    CheckoutForm.tsx
    ContactStep.tsx
    ShippingStep.tsx
    PaymentStep.tsx            (UI shell only — see Payment section)
    OrderReview.tsx
  /account
    AccountSidebar.tsx
    OrderHistory.tsx
    WishlistGrid.tsx
  /ai-chat
    ChatButton.tsx
    ChatPanel.tsx              (desktop side panel)
    ChatSheet.tsx              (mobile bottom sheet)
    MessageBubble.tsx
    TypingIndicator.tsx
    QuickReplies.tsx
  /home
    HeroSection.tsx
    FeaturedCollections.tsx
    TestimonialSlider.tsx
    StyleRecommender.tsx
  /common
    LoadingSkeletons.tsx
    EmptyState.tsx
    ErrorState.tsx
    Toast.tsx
    PriceDisplay.tsx
    RatingStars.tsx

/lib
  /mock-data                   (all mock API responses — see Mock Data section)
  /api-client.ts               (API abstraction layer)
  /hooks                       (custom hooks)
  /stores                      (Zustand stores)
  /types                       (all TypeScript interfaces)
  /validators                  (Zod schemas)
  /utils

/docs
  /api-contracts.md            (auto-document every API call — see Contracts section)
```

---

## MOCK DATA LAYER

This is critical. Every piece of data that will eventually come from the backend must be mocked in `/lib/mock-data/`. This means the backend engineer can see exactly what data shape the frontend expects.

Create realistic mock data files for:

```typescript
// /lib/mock-data/products.ts
// /lib/mock-data/collections.ts
// /lib/mock-data/orders.ts
// /lib/mock-data/user.ts
// /lib/mock-data/reviews.ts
// /lib/mock-data/cart.ts
// /lib/mock-data/ai-chat.ts
```

### TypeScript Interfaces to define in /lib/types/

```typescript
interface Product {
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

interface ProductVariant {
  id: string
  sku: string
  length: 'short' | 'medium' | 'long' | 'extra-long'
  shape: 'almond' | 'coffin' | 'square' | 'stiletto'
  color: string
  colorHex: string
  stock: number
  price: number
}

interface ProductImage {
  url: string
  alt: string
  position: number
}

interface CartItem {
  id: string
  product: Product
  variant: ProductVariant
  quantity: number
}

interface Order {
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
}

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'customer' | 'wholesale' | 'admin'
  loyaltyPoints: number
}

interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  body: string
  photos?: string[]
  verified: boolean
  createdAt: string
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  quickReplies?: string[]
}
```

---

## PAGES — DETAILED REQUIREMENTS

### Home Page (`/`)
- Full-bleed hero: editorial image with serif overlay headline + two CTAs ("Shop New Arrivals" primary, "Explore Collections" secondary)
- Scroll indicator at bottom of hero
- Featured collections grid (asymmetric editorial layout)
- Best sellers product row (horizontal scroll on mobile)
- Style recommender teaser (short questionnaire CTA)
- Testimonial slider (3 cards desktop, 1 mobile)
- Journal/blog preview (3 latest posts)
- Newsletter signup section
- Instagram feed placeholder section

### Product Listing (`/shop`)
- 4-column grid desktop, 2-column tablet, 1-column mobile
- Persistent filter sidebar on desktop, full-screen drawer on mobile
- Filters: Length, Shape, Color, Style, Occasion, Price range
- Sort: Newest, Popular, Price low-high, Price high-low
- URL parameter updates on filter change (e.g. `/shop?shape=almond&length=short`)
- Infinite scroll with skeleton loaders
- Each ProductCard: 4:5 image, name, price, color swatches, wishlist heart, tag pill, quick-view on hover
- Show active filter count badge on mobile filter button

### Product Detail (`/shop/[slug]`)
- Image gallery: swipe on mobile, thumbnail strip on desktop
- Variant selector: length, shape, color (show swatches)
- Stock indicator ("Only 3 left" when stock < 5)
- Sticky "Add to Cart" bar on mobile
- Size guide modal/drawer trigger
- Reviews section with star breakdown and filter by rating
- "You may also like" product row
- AI chat CTA: "Not sure about sizing? Ask our stylist"

### Cart (`/cart`)
- Line items with image, name, variant, quantity editor, remove button
- Order summary: subtotal, shipping estimate, tax, total
- Promo code input field
- "Checkout" primary CTA
- "Continue Shopping" link
- Empty cart state with CTA back to shop

### Checkout (`/checkout`)
- Three-step progressive flow: Contact → Shipping → Payment
- Step indicator at top showing progress
- Guest checkout supported (no account required)
- Contact step: email, phone (optional)
- Shipping step: full address form with autofill support, shipping method selector with prices
- Payment step (UI SHELL ONLY — see Payment section below)
- Order summary sidebar on desktop, collapsible on mobile

### Payment Step (UI Shell)
Build the complete payment UI but DO NOT integrate real payment SDKs. Instead:
- Card payment form: cardholder name, card number (formatted), expiry, CVV fields
- Payment method tabs: Card | Apple Pay | Google Pay | Bank Transfer
- Apple Pay and Google Pay: show the branded button placeholders with correct styling
- Loading state (processing animation)
- Success state (order confirmed)
- Error state (with retry option)
- Add this comment in the component:
  ```
  // BACKEND INTEGRATION REQUIRED:
  // 1. On mount: call POST /api/checkout/initiate to get a payment intent
  // 2. Replace card fields with Stripe Elements or Paystack inline (their iframes)
  // 3. On submit: confirm payment with the provider SDK
  // 4. On success: call POST /api/checkout/complete with { paymentIntentId }
  // 5. Expected response: { orderId: string, orderNumber: string }
  // 6. Redirect to /order-confirmation?order={orderNumber}
  ```

### AI Chat (UI Shell)
Build the complete chat interface but mock the responses. DO NOT call any real AI API.

**Desktop**: Side panel (fixed right, 380px wide, slides in/out)
**Mobile**: Bottom sheet (full width, 60vh height, swipe to dismiss)

Components needed:
- Floating chat button (bottom-right, always visible)
- Message list with scroll to bottom
- User and assistant message bubbles (different styles)
- Typing indicator (3 animated dots)
- Quick reply chips (suggested responses)
- Input area with send button
- "Talking to a human" state for escalation
- Chat header with minimize/close

Mock responses for these intents:
- Product questions → mock product info response
- Order status → mock order tracking response  
- Sizing help → mock sizing guide walkthrough
- Returns → mock return instructions
- Fallback/escalation → "Let me connect you with a team member"

Add this comment at the top of the ChatPanel component:
```
// BACKEND INTEGRATION REQUIRED:
// Connect to POST /api/ai/chat as a streaming endpoint
// Request body: { conversationId?: string, message: string }
// Response: Server-Sent Events stream
// Each event: { type: 'chunk', content: string } | { type: 'done' } | { type: 'quickReplies', options: string[] }
// On escalation event: { type: 'escalate', channel: 'email' | 'whatsapp' }
// Store conversationId from first response and send with subsequent messages
```

### Account Dashboard (`/account`)
- Left sidebar navigation: Orders, Wishlist, Addresses, Loyalty, Settings
- Orders: list with status badges, expandable order detail, re-order button
- Wishlist: product grid with remove and add-to-cart
- Addresses: list with edit/delete, add new address form
- Loyalty: points balance, history, how-to-earn info
- Settings: name, email, password change, notification preferences

### Wholesale (`/wholesale`)
- Hero section with B2B value proposition
- Tiered pricing table (5–19 units, 20–49 units, 50+ units)
- Inquiry form: company name, contact name, email, phone, location, expected volume, product interest, message
- Success state after form submission

---

## GLOBAL COMPONENTS

### Header
- Slim announcement bar above (free shipping threshold, promo text — make it easy to update via a config variable)
- Logo: centered mobile, left-aligned desktop
- Navigation: Shop (mega menu with categories), Collections, Wholesale, About, Journal
- Right actions: Search, Account, Wishlist, Cart (with item count badge)
- Sticky on scroll with reduced height transition
- Search: full-width overlay with predictive results (mock the results)

### Footer
- Four columns desktop, stacked mobile:
  - Shop: New Arrivals, Best Sellers, Wholesale, Gift Cards
  - Help: FAQ, Shipping, Returns, Sizing Guide
  - Company: About, Journal, Contact, Careers
  - Stay Connected: Newsletter signup, Instagram, TikTok, WhatsApp
- Bottom strip: copyright, payment method icons (Visa, Mastercard, AMEX, Paystack, Apple Pay), social links

### Loading and Empty States (REQUIRED — build all of these)
- Product card skeleton
- Product grid skeleton (shows 8 skeleton cards)
- Order list skeleton
- Empty cart state (with illustration placeholder and shop CTA)
- Empty wishlist state
- Empty search results state
- No orders yet state
- AI chat empty state (welcome message + suggested questions)
- Generic error state (with retry button)

---

## API CONTRACTS DOCUMENTATION

Create `/docs/api-contracts.md` and document EVERY API call the frontend makes. Use this format for each:

```markdown
### GET /api/products
Purpose: Fetch paginated product list for shop page
Called from: ProductGrid component

Query params:
  - shape?: 'almond' | 'coffin' | 'square' | 'stiletto'
  - length?: 'short' | 'medium' | 'long' | 'extra-long'
  - sort?: 'newest' | 'popular' | 'price-asc' | 'price-desc'
  - page?: number (default: 1)
  - limit?: number (default: 24)

Expected response:
{
  products: Product[]
  total: number
  page: number
  totalPages: number
}

Mock data file: /lib/mock-data/products.ts → mockProductList
```

Document every single endpoint including: cart CRUD, checkout, auth, orders, wishlist, reviews, search, AI chat, wholesale inquiry.

---

## ZUSTAND STORES

Build these three stores:

```typescript
// /lib/stores/cartStore.ts
interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, variant: ProductVariant, quantity: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  subtotal: number  // computed
  itemCount: number // computed
}

// /lib/stores/authStore.ts
interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

// /lib/stores/wishlistStore.ts
interface WishlistStore {
  items: Product[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isWishlisted: (productId: string) => boolean
}
```

Cart state should persist to localStorage for guests.

---

## ACCESSIBILITY REQUIREMENTS

These are not optional:
- WCAG 2.1 AA compliance throughout
- All interactive elements keyboard-navigable (visible focus rings on everything)
- Skip-to-content link on every page (`<a href="#main-content">`)
- `alt` text on all images (use descriptive text in mocks)
- ARIA labels on all icon-only buttons (cart icon, heart icon, search icon, close button)
- Form inputs must have associated labels (not just placeholders)
- Color is never the only indicator of state (use icons + text alongside color)
- Touch targets minimum 44×44px on mobile
- Form inputs use correct `type` attributes (tel, email, number, password)

---

## RESPONSIVE BREAKPOINTS

Follow this exactly:
- Mobile: 320–767px — single column, bottom navigation
- Tablet: 768–1023px — two column product grid, drawer filters
- Desktop: 1024px+ — four column grid, persistent sidebar filters

---

## ANIMATIONS

Use Framer Motion for:
- Page transitions: fade + subtle slide up (250ms)
- Cart drawer: slide in from right
- Mobile filters: slide up from bottom
- Hero scroll reveal
- Product card hover: scale 1.03, 400ms ease-out
- Add to cart: badge bounce + toast notification
- Chat panel: slide in from right (desktop), slide up (mobile)

All animations must be wrapped with `useReducedMotion()` check.

---

## WHAT TO SKIP (do not build these)

- Real payment processing (build UI shell only)
- Real AI responses (mock only)  
- Admin dashboard (separate project)
- Multi-language/i18n
- AR try-on
- Loyalty points calculation logic (show UI only)
- Email sending
- Real authentication (build the UI forms and flows, mock the auth state)

---

## DELIVERABLES CHECKLIST

When done, the following must all work with mock data:

- [ ] All pages render without errors
- [ ] Product filtering updates the URL and re-renders the grid
- [ ] Add to cart works and updates the cart count in the header
- [ ] Cart drawer opens and items can be edited/removed
- [ ] Checkout progresses through all three steps
- [ ] Payment step shows all states (idle, loading, success, error)
- [ ] Account dashboard navigates between all sections
- [ ] AI chat opens, accepts messages, shows mock responses and typing indicator
- [ ] Wishlist toggle works on product cards and detail pages
- [ ] All loading and empty states render correctly
- [ ] Site is fully responsive at 375px, 768px, and 1280px
- [ ] All focus states are visible
- [ ] `/docs/api-contracts.md` is complete

---

## START HERE

Begin in this order:
1. Scaffold the Next.js project with the tech stack above
2. Set up Tailwind config with the brand tokens
3. Build the design system components (buttons, inputs, cards, badges)
4. Build Header and Footer
5. Build the Home page
6. Build the Shop listing page with filters
7. Build the Product Detail page
8. Build the Cart (store + drawer + page)
9. Build the Checkout flow
10. Build the Account dashboard
11. Build the AI Chat UI shell
12. Build remaining pages (Wholesale, About, Journal, Help, Contact)
13. Add all loading/empty states
14. Write the API contracts documentation

Do not proceed to the next item until the current one renders correctly with mock data.
