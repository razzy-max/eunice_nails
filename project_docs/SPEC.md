# EUNICE NAILS
## Website Specification and Product Documentation

**Project Type:** Ecommerce Platform with AI Customer Service
**Industry:** Beauty, Cosmetics, Fashion
**Reference Inspiration:** deedee.co
**Document Version:** 1.0
**Audience:** UI/UX Designers, Frontend Developers, Backend Developers, AI Engineers, Project Managers

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Direction](#2-brand-direction)
3. [Website Structure](#3-website-structure)
4. [User Interface Description](#4-user-interface-description)
5. [User Experience](#5-user-experience)
6. [Features Documentation](#6-features-documentation)
7. [Authentication System](#7-authentication-system)
8. [Payment System](#8-payment-system)
9. [AI Features](#9-ai-features)
10. [Admin Dashboard](#10-admin-dashboard)
11. [Technical Requirements](#11-technical-requirements)
12. [Integrations](#12-integrations)
13. [Mobile Responsiveness](#13-mobile-responsiveness)
14. [SEO and Marketing](#14-seo-and-marketing)
15. [Future Scalability](#15-future-scalability)
16. [Final Development Notes](#16-final-development-notes)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Document Control](#appendix-b-document-control)

---

## 1. Project Overview

### 1.1 Business Goals

Eunice Nails is being built as a premium direct-to-consumer ecommerce platform for press-on nails and nail accessories, positioned to serve both individual buyers and bulk purchasers in the fashion and beauty supply chain.

The platform should:

- Drive online sales of press-on nail sets, nail care accessories, and related beauty products.
- Establish Eunice Nails as a recognisable brand in the African and international nail fashion space.
- Reduce customer service load through an always-on AI agent that handles product questions, order tracking, sizing, and basic complaints.
- Build a repeat-customer base through accounts, wishlists, and loyalty features.
- Enable B2B wholesale orders for fashion companies and resellers.

### 1.2 User Goals

| User Type | Primary Goal |
|---|---|
| Retail Customer | Browse, find a style she loves, purchase quickly, track delivery |
| Bulk Buyer / Reseller | Find wholesale pricing, place large orders, get invoices |
| First-Time Visitor | Understand the brand, see social proof, feel confident buying |
| Returning Customer | Re-order favourites, redeem loyalty, manage account |
| Fashion Company Buyer | Find suitable styles, request quote or partnership |

### 1.3 Problems the Website Solves

- Lack of a polished, trustworthy online presence for premium press-on nails in the target market.
- Customer service bottlenecks during peak shopping periods.
- High cart abandonment caused by friction in checkout and payment.
- Difficulty for international buyers in finding reliable shipping and payment options.
- Limited reach for the brand beyond informal social channels (Instagram, WhatsApp).

### 1.4 Core Objectives

- Build a fast, mobile-first storefront optimised for conversion.
- Integrate a multi-channel payment system supporting cards, Apple Pay, and local payment rails.
- Deploy an AI customer service agent capable of handling 70 to 80 percent of routine support queries.
- Provide an admin dashboard for inventory, orders, customers, and revenue insight.
- Lay the foundation for future scaling into adjacent product lines and markets.

---

## 2. Brand Direction

### 2.1 Color Palette

The brand should feel feminine, luxurious, and clean. Inspired by the muted, editorial tone of deedee.co, the palette should avoid loud or saturated colors and lean into warm neutrals with a single rich accent.

| Role | Color Name | Hex |
|---|---|---|
| Primary Background | Soft Ivory | `#FAF7F2` |
| Secondary Background | Warm Cream | `#F1ECE4` |
| Primary Text | Deep Charcoal | `#1A1A1A` |
| Accent (Brand) | Rose Nude | `#C9A28A` |
| Accent (Highlight) | Burnt Mocha | `#6B4A38` |
| Success | Sage Green | `#7A8B6F` |
| Error | Muted Rust | `#B5483A` |

### 2.2 Typography

| Use | Suggested Font | Notes |
|---|---|---|
| Display / Headings | Canela or Editorial New | Serif, editorial, fashion-forward |
| Body | Inter or Söhne | Clean, modern sans-serif |
| Accent / Quotes | Italic serif variant | For testimonials and pull quotes |

Typographic hierarchy should rely on size and weight rather than color, keeping the design quiet and confident.

### 2.3 UI Style Direction

- Generous whitespace, asymmetrical product layouts, and editorial photography.
- Soft rounded corners on inputs and cards (8 to 12px radius).
- Thin borders rather than heavy shadows.
- Photography-first hero sections with overlaid type.
- Subtle hover states, no aggressive animations.

### 2.4 Mood and Visual Identity

The brand voice is calm, confident, and modern. Visually it should feel closer to a beauty editorial than a typical ecommerce store. Think clean magazine layouts, soft daylight product photography, and minimal but considered typography.

---

## 3. Website Structure

### 3.1 Sitemap

```
Home
├── Shop
│   ├── All Nails
│   ├── New Arrivals
│   ├── Best Sellers
│   ├── By Length (Short / Medium / Long / Extra Long)
│   ├── By Shape (Almond / Coffin / Square / Stiletto)
│   ├── By Style (Classic / Bridal / Editorial / Seasonal)
│   └── Accessories (Glue, Files, Kits)
├── Collections
│   └── [Dynamic collection pages]
├── Wholesale / B2B
├── About
├── Journal (Blog)
├── Contact
├── Account
│   ├── Login / Signup
│   ├── Orders
│   ├── Wishlist
│   ├── Addresses
│   └── Loyalty
├── Cart
├── Checkout
└── Help Center
    ├── FAQ
    ├── Shipping
    ├── Returns
    └── Sizing Guide
```

### 3.2 Required Pages

| Page | Purpose |
|---|---|
| Home | Brand introduction, featured collections, social proof |
| Product Listing | Browse and filter products |
| Product Detail | Full product info, sizing, reviews, purchase |
| Cart | Review items before checkout |
| Checkout | Capture shipping, payment, and confirm |
| Order Confirmation | Confirm purchase, set expectations |
| Account Dashboard | Manage user data, view orders |
| Wishlist | Save items for later |
| Wholesale | B2B inquiry and bulk ordering |
| About | Brand story, founder, mission |
| Journal | SEO content and brand storytelling |
| Help Center | Self-service support |
| Contact | Direct inquiries, fallback from AI agent |
| Legal | Privacy, Terms, Refund Policy |

### 3.3 Navigation Structure

**Top Navigation (Desktop):**
Logo | Shop | Collections | Wholesale | About | Journal | Search | Account | Cart

**Mobile Navigation:**
Hamburger menu with accordion sections, sticky cart icon, and a bottom-anchored quick action bar (Search, Wishlist, Account, Cart).

### 3.4 Footer Structure

Four-column layout on desktop, stacked on mobile:

| Column 1: Shop | Column 2: Help | Column 3: Company | Column 4: Stay Connected |
|---|---|---|---|
| New Arrivals | FAQ | About | Newsletter signup |
| Best Sellers | Shipping | Journal | Instagram |
| Wholesale | Returns | Contact | TikTok |
| Gift Cards | Sizing Guide | Careers | WhatsApp |

Bottom strip: copyright, payment method icons, language and currency switcher, social links.

---

## 4. User Interface Description

### 4.1 Header

- Slim top announcement bar (free shipping threshold, current promo).
- Main header with logo centered on mobile, left-aligned on desktop.
- Sticky on scroll with reduced height.
- Cart icon with live item count badge.
- Search opens a full-width overlay with predictive results.

### 4.2 Hero Section (Home)

- Full-bleed editorial image or short looping video (muted, autoplay, 6 to 10 seconds).
- Overlay headline in serif display font.
- Primary CTA: "Shop New Arrivals".
- Secondary CTA: "Explore Collections".
- Scroll indicator at the bottom.

### 4.3 Buttons

| Type | Style |
|---|---|
| Primary | Solid charcoal background, ivory text, 12px radius |
| Secondary | Transparent with charcoal border |
| Tertiary | Text-only with underline on hover |
| Destructive | Muted rust background, ivory text |

Hover states: subtle scale (1.02) and slight darken. All buttons must have a visible focus ring for accessibility.

### 4.4 Cards

**Product Card:**
- Image (4:5 aspect ratio).
- Quick-view icon on hover.
- Product name, price, and color swatches.
- "Add to Wishlist" heart icon top-right.
- Tag pill for "New", "Bestseller", or "Low Stock".

**Collection Card:**
- Larger image, overlaid title, hover zoom effect.

### 4.5 Forms

- Inputs use floating labels.
- Inline validation with subtle color feedback.
- Error messages appear below the input in muted rust.
- All forms must support autofill and password manager integration.

### 4.6 Testimonials

- Slider with three visible cards on desktop, one on mobile.
- Each card shows: customer photo or initials, name, rating, short review, and product purchased.
- Pulled live from verified reviews in the database.

### 4.7 Pricing Sections

The retail store uses straightforward unit pricing. Wholesale pricing requires:

- Tiered pricing table (5 to 19 units, 20 to 49 units, 50 plus).
- Volume discount badges.
- "Request Quote" CTA for orders above a defined threshold.

### 4.8 Dashboard Layout

**Customer Dashboard:**
Left sidebar navigation, main content area, sticky header with account name and logout. Sections include Orders, Wishlist, Addresses, Loyalty, and Settings.

**Admin Dashboard:**
Covered in detail in Section 10.

### 4.9 Mobile Responsiveness

- Mobile-first design.
- Bottom navigation bar with key actions.
- Product image galleries swipe horizontally.
- Filters open as a full-screen drawer.
- Checkout collapses into a single scrollable flow.

### 4.10 Animations and Interactions

- Page transitions: fade plus subtle slide (200 to 300ms).
- Image hover: scale 1.03 with 400ms ease-out.
- Add-to-cart: small badge bounce and toast notification.
- Scroll-triggered fade-in on hero and section reveals.
- All animations respect `prefers-reduced-motion`.

---

## 5. User Experience

### 5.1 Primary User Flow

```
Landing → Browse Shop → Product Detail → Add to Cart →
Checkout → Payment → Confirmation → Account Created →
Order Tracking → Repeat Purchase
```

### 5.2 Customer Journey

| Stage | Touchpoint | Goal |
|---|---|---|
| Awareness | Instagram, TikTok, Google | Click through to site |
| Discovery | Home, Shop, Journal | Find styles they like |
| Consideration | Product detail, reviews, AI chat | Resolve doubts |
| Purchase | Cart, checkout | Complete transaction |
| Post-purchase | Email, account, AI agent | Track and re-engage |
| Loyalty | Account, promotions, referrals | Return and advocate |

### 5.3 CTA Placements

- Above the fold on every key page.
- Sticky CTA on mobile product pages ("Add to Cart").
- Exit-intent overlay on first visit (newsletter signup with discount).
- AI agent floating button bottom-right on all pages.

### 5.4 Accessibility Considerations

- WCAG 2.1 AA compliance target.
- Color contrast ratio of at least 4.5:1 for body text.
- All interactive elements keyboard-navigable.
- Skip-to-content link on every page.
- Alt text for all product and editorial images.
- ARIA labels on icon buttons and form controls.
- Captions on any video content.

### 5.5 Mobile-First Experience

- Touch targets minimum 44 by 44 pixels.
- Forms use appropriate keyboard types (numeric for card, email for email).
- One-tap payment options (Apple Pay, Google Pay) prioritised in checkout.
- AI chat opens as a bottom sheet on mobile, not a full overlay.

---

## 6. Features Documentation

### 6.1 Product Catalog

**What it does:** Displays all available products with rich filtering and sorting.

**Why it exists:** The catalog is the heart of the storefront. It needs to make discovery easy and confidence-building.

**User interaction:** Browse, filter by length, shape, color, occasion, and price. Sort by newest, popular, price.

**Frontend behavior:** Infinite scroll with skeleton loaders. Filters update URL parameters for shareable links. Lazy-loaded images.

**Backend logic:** Query database with filter parameters, return paginated results. Cache popular queries in Redis.

**API requirements:**
- `GET /api/products` with query params (filter, sort, page)
- `GET /api/products/{slug}` for product detail
- `GET /api/collections/{slug}/products` for collection pages

**Database requirements:**
- `products` table: id, slug, name, description, base_price, status, created_at, updated_at
- `product_variants` table: id, product_id, sku, length, shape, color, stock, price
- `product_images` table: id, product_id, url, alt_text, position
- `collections` table and `collection_products` join table

### 6.2 Cart and Checkout

**What it does:** Allows users to gather items and complete purchase.

**Why it exists:** Conversion endpoint.

**User interaction:** Add to cart from product or quick view, edit quantities in cart, proceed through three-step checkout (Contact, Shipping, Payment).

**Frontend behavior:** Cart persists across sessions via local storage for guests, database for logged-in users. Checkout uses a single-page progressive flow.

**Backend logic:** Cart state synced via API. On checkout, server validates stock, calculates totals (subtotal, shipping, tax), and creates a pending order. Payment confirmation triggers fulfilment workflow.

**API requirements:**
- `GET/POST/PATCH/DELETE /api/cart`
- `POST /api/checkout/initiate`
- `POST /api/checkout/complete`
- `POST /api/orders/webhook` for payment events

**Database requirements:**
- `carts` and `cart_items` tables
- `orders` and `order_items` tables
- `addresses` table linked to user and order

### 6.3 Wishlist

**What it does:** Lets users save items for later.

**User interaction:** Tap heart icon on product card or detail page. View saved items in account.

**Backend logic:** Guest wishlists stored in local storage. Logged-in wishlists synced to database.

**Database requirements:** `wishlists` table: id, user_id, product_id, added_at.

### 6.4 Reviews and Ratings

**What it does:** Collects and displays verified customer reviews.

**User interaction:** Submit review after delivery, optionally with photo. Browse reviews on product page with filtering by star rating.

**Backend logic:** Only orders marked delivered can submit reviews. Moderation queue for new submissions.

**API requirements:**
- `GET /api/products/{id}/reviews`
- `POST /api/reviews` (authenticated, post-delivery only)

**Database requirements:** `reviews` table: id, product_id, user_id, order_id, rating, title, body, photos, verified, status, created_at.

### 6.5 Search

**What it does:** Lets users find products by name, attribute, or natural language.

**User interaction:** Type in search bar, see predictive suggestions, view results page.

**Backend logic:** Use Elasticsearch, Algolia, or Meilisearch for fast indexed search. Optionally augment with vector search for natural language queries.

### 6.6 Wholesale Inquiry

**What it does:** Captures B2B leads.

**User interaction:** Fill form with company info, expected order volume, and product interest.

**Backend logic:** Submission creates a lead in the database and notifies sales team via email and admin dashboard.

---

## 7. Authentication System

### 7.1 Signup and Login

- Email and password.
- Phone number (OTP) as an alternative.
- Social login: Google, Apple.
- Guest checkout permitted with optional account creation after purchase.

### 7.2 Google Login

Implemented via OAuth 2.0. On first login, the system creates a user record using the Google profile (email, name, avatar) and skips password creation.

### 7.3 Password Reset

- "Forgot password" link on login page.
- User enters email, receives a time-limited reset link (valid 30 minutes).
- Link routes to a reset form, which updates the password and invalidates all existing sessions.

### 7.4 User Roles

| Role | Permissions |
|---|---|
| Guest | Browse, add to cart, checkout as guest |
| Customer | All guest abilities plus account, wishlist, reviews, order history |
| Wholesale | Customer abilities plus wholesale pricing and bulk order form |
| Support Agent | Read access to orders and customer data, AI agent oversight |
| Content Editor | Manage journal posts, collections, banners |
| Admin | Full access to all features and settings |

### 7.5 Admin Access

- Separate admin portal at `/admin`.
- Mandatory two-factor authentication.
- Session timeout after 30 minutes of inactivity.
- All admin actions logged in an audit trail.

---

## 8. Payment System

### 8.1 Payment Flow

```
Cart → Checkout → Contact Info → Shipping Address →
Shipping Method → Payment Method → Review →
Pay → Webhook → Order Confirmed → Email Receipt
```

### 8.2 Payment Gateways

| Method | Provider | Region |
|---|---|---|
| Cards (Visa, Mastercard, AMEX, Discover, JCB, UnionPay) | Stripe, Shopify Payments, or Paystack | Global |
| Apple Pay | Stripe / native | Global |
| Google Pay | Stripe / native | Global |
| Paystack | Paystack | Nigeria, Ghana, South Africa |
| Flutterwave | Flutterwave | Africa-wide |
| Bank Transfer | Manual confirmation | Nigeria |
| PayPal | PayPal | International |

Currency switching should be automatic based on geolocation, with manual override.

### 8.3 Invoices

- Auto-generated PDF invoice on successful payment.
- Sent via email and accessible in the customer account.
- Wholesale orders include VAT and structured billing info.

### 8.4 Wallet and Payment History

- All transactions visible in the customer dashboard.
- Filters by status (paid, refunded, failed) and date.
- Each transaction links to the order and invoice.

### 8.5 Failed Payment Handling

- Show clear inline error with retry option.
- Save the cart so the customer does not lose progress.
- Send a follow-up email with a one-click resume link valid for 24 hours.
- For repeated failures, AI agent proactively offers help.

---

## 9. AI Features

### 9.1 AI Customer Service Agent

**What it does:** Handles inbound customer support inquiries in natural language.

**Why it exists:** Reduces support cost, provides 24/7 coverage, scales as the business grows.

**Capabilities:**
- Answer product questions (sizing, application, durability).
- Look up order status given email or order number.
- Initiate returns and provide return instructions.
- Recommend products based on stated preferences.
- Escalate to a human agent when confidence is low or the customer requests it.

**User interaction:** Floating chat button on every page. Opens as a side panel on desktop, bottom sheet on mobile.

**Frontend behavior:** Streaming responses, typing indicator, suggested quick replies, smooth handoff to human via email or WhatsApp when needed.

**Backend logic:**
- Multi-turn conversation managed by LangGraph or a similar orchestration layer.
- RAG pipeline over product catalog, FAQ, shipping policies, and order data.
- Tool use for order lookup, return creation, and stock checks.
- Guardrails to prevent the agent from making promises about pricing, discounts, or delivery dates without verification.

**API requirements:**
- `POST /api/ai/chat` (streaming)
- `GET /api/internal/order/{id}` (internal tool)
- `POST /api/internal/return/initiate` (internal tool)

**Database requirements:**
- `ai_conversations` table: id, user_id (nullable), started_at, status, escalated
- `ai_messages` table: id, conversation_id, role, content, metadata, created_at

### 9.2 AI Assistant Features

- **Style recommender:** Short questionnaire on the home page suggests products based on occasion, length preference, and aesthetic.
- **Sizing helper:** Walks the user through measuring their nail bed.
- **Restock alert:** AI watches for items the user has favourited and alerts when back in stock.

### 9.3 Automation Features

- AI-generated product descriptions reviewed by a human editor before publishing.
- Automated abandoned cart sequences personalised by the AI based on items in the cart.
- AI-tagged reviews for sentiment monitoring.

### 9.4 AI Workflow Logic

```
User message → Intent classification →
Route to appropriate agent (FAQ / Order / Sales / Returns) →
Retrieve context (RAG over catalog and policies) →
Generate response with tool calls if needed →
Stream to user → Log conversation →
Trigger escalation if confidence below threshold
```

### 9.5 AI Integrations and APIs

| Component | Suggested Provider |
|---|---|
| LLM | OpenAI GPT-4o or Anthropic Claude |
| Orchestration | LangGraph |
| Vector Store | pgvector on PostgreSQL or Pinecone |
| Embeddings | OpenAI text-embedding-3-small |
| Speech (future) | ElevenLabs or OpenAI |
| Translation (future) | DeepL |

---

## 10. Admin Dashboard

### 10.1 Analytics

- Revenue (today, week, month, year) with comparison to previous period.
- Orders by status (pending, paid, fulfilled, delivered, returned).
- Top-selling products and collections.
- Conversion funnel: visit, add-to-cart, checkout initiated, completed.
- AI agent performance: total conversations, resolution rate, escalation rate, satisfaction.
- Traffic sources via Google Analytics integration.

### 10.2 User Management

- Searchable list of all users with filters by role, location, and order count.
- View user profile with order history, lifetime value, and AI conversation history.
- Manual role assignment.
- Ability to issue store credit or refunds.

### 10.3 Content Management

- Product creation and editing with variant management.
- Collection management with drag-and-drop ordering.
- Journal (blog) editor with rich-text and image upload.
- Banner and promotion scheduling.
- SEO fields (meta title, meta description, OG image) on every content type.

### 10.4 Financial Overview

- Daily, weekly, and monthly revenue dashboards.
- Payout reconciliation with payment providers.
- Refunds and chargebacks log.
- Wholesale invoices and outstanding balances.
- Export to CSV for accounting.

### 10.5 Notifications

Delivered via email, in-dashboard, and optionally Slack or WhatsApp:

- New orders
- Low stock alerts
- New wholesale inquiries
- AI escalations to human
- Failed payments
- Negative reviews

### 10.6 Settings

- Store details (name, currency, timezone).
- Shipping zones and rates.
- Tax configuration.
- Payment provider keys (encrypted).
- AI agent configuration (system prompt, guardrails, escalation thresholds).
- Team and roles.
- Integrations (email, social, CRM).

---

## 11. Technical Requirements

### 11.1 Recommended Frontend Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with shadcn/ui components |
| State | Zustand or React Query |
| Forms | React Hook Form plus Zod |
| Animations | Framer Motion |

### 11.2 Backend Stack

| Layer | Choice |
|---|---|
| Framework | FastAPI (Python) or NestJS (Node) |
| Auth | Auth.js / NextAuth or custom JWT with refresh tokens |
| Background Jobs | Celery (Python) or BullMQ (Node) |
| AI Orchestration | LangGraph |
| Caching | Redis |

FastAPI is the recommended choice and aligns with the AI agent requirements.

### 11.3 Database

- **Primary:** PostgreSQL (with pgvector extension for AI memory and product embeddings)
- **Cache:** Redis
- **Search:** Meilisearch or Algolia
- **File Storage:** AWS S3 or Cloudflare R2 for product images and invoices

### 11.4 Hosting

| Component | Suggested Host |
|---|---|
| Frontend | Vercel |
| Backend | Render, Railway, or AWS ECS |
| Database | Supabase, Neon, or DigitalOcean Managed PostgreSQL |
| Object Storage | Cloudflare R2 or AWS S3 |
| CDN | Cloudflare |

### 11.5 Security Requirements

- HTTPS enforced site-wide.
- PCI DSS compliance handled by payment providers (no card data touches the server).
- Encrypted secrets via environment variables and a secrets manager.
- Rate limiting on auth and checkout endpoints.
- CSRF and XSS protection.
- Input validation on every endpoint.
- Audit logging for admin actions.
- Regular dependency scanning (Dependabot, Snyk).

### 11.6 SEO Requirements

- Server-side rendering or static generation for all public pages.
- Structured data (JSON-LD) for products, reviews, and articles.
- Auto-generated sitemap and `robots.txt`.
- Canonical URLs to prevent duplicate content.
- Open Graph and Twitter Card metadata.

### 11.7 Performance Optimization

- Target Largest Contentful Paint under 2.5 seconds.
- Image optimisation via Next.js Image or imgix.
- Code splitting and lazy loading.
- Edge caching for product listing and home page.
- Database query optimisation with indexes on common filters.

---

## 12. Integrations

| Category | Integration |
|---|---|
| Email | Resend, Postmark, or SendGrid for transactional; Mailchimp or Klaviyo for marketing |
| CRM | HubSpot or Zoho for wholesale leads |
| Payments | Stripe, Paystack, Flutterwave, PayPal |
| Messaging | WhatsApp Business API, Instagram DM |
| Social | Instagram Shopping, TikTok Shop, Pinterest |
| AI APIs | OpenAI, Anthropic, ElevenLabs (future voice) |
| Analytics | Google Analytics 4, Meta Pixel, TikTok Pixel, Hotjar |
| Shipping | DHL, FedEx, GIG Logistics (Nigeria), Sendcloud |
| Reviews | Trustpilot or Judge.me |
| Customer Support | Crisp or Intercom as fallback to AI agent |

---

## 13. Mobile Responsiveness

### 13.1 Mobile (320 to 767 pixels)

- Single-column layouts.
- Bottom-anchored navigation.
- Full-screen overlays for filters and menu.
- Sticky "Add to Cart" bar on product pages.
- AI chat as bottom sheet.

### 13.2 Tablet (768 to 1023 pixels)

- Two-column product grid.
- Sidebar filters collapse into a drawer.
- Hybrid navigation with key items visible.

### 13.3 Desktop (1024 pixels and above)

- Four-column product grid.
- Persistent filter sidebar on listing pages.
- Multi-column footer.
- AI chat as side panel.

All breakpoints share the same component library, with variants controlled by responsive props.

---

## 14. SEO and Marketing

### 14.1 SEO Structure

- Clean, descriptive URLs (e.g. `/shop/almond/blush-rose`).
- One H1 per page.
- Logical heading hierarchy.
- Schema markup for products, breadcrumbs, FAQ, and articles.
- Internal linking from journal posts to product pages.

### 14.2 Metadata

Every page must define:

- Title (50 to 60 characters)
- Description (140 to 160 characters)
- Open Graph image (1200 by 630 pixels)
- Twitter card type
- Canonical URL

### 14.3 Blog (Journal) System

- Categories: Trends, Tutorials, Behind the Scenes, Brand Stories.
- Author profiles.
- Related products at the end of each post.
- Newsletter signup embedded in posts.
- Comment system (optional, moderated).

### 14.4 Marketing Funnels

| Funnel | Stages |
|---|---|
| New Visitor | Exit-intent popup → newsletter signup → first-purchase discount → welcome email series |
| Abandoned Cart | Email 1 (1 hour) → Email 2 (24 hours) → Email 3 (3 days) with discount |
| Post-Purchase | Order confirmation → shipping → delivery → review request → repeat-purchase incentive |
| Win-Back | Inactive 60 days → personalised email → 90 days → final offer |

### 14.5 Analytics Tracking

- Page views, sessions, sources via GA4.
- Ecommerce events (view item, add to cart, begin checkout, purchase).
- AI agent interactions logged with anonymised metadata.
- Heatmaps and session replays via Hotjar on key pages.

---

## 15. Future Scalability

### 15.1 Future Features

- Native iOS and Android apps.
- Voice-enabled AI agent.
- AR try-on for nail designs.
- Subscription box (monthly nail drops).
- Influencer and affiliate program with custom dashboards.
- Multi-language storefront (French, Spanish, Portuguese, Arabic).
- Marketplace model for nail technicians and small brands.

### 15.2 Scalability Considerations

- Stateless backend services behind a load balancer.
- Read replicas for the database as traffic grows.
- CDN for static assets globally.
- Queue-based architecture for emails, AI tasks, and order processing.
- Feature flags for safe rollout of new functionality.

### 15.3 Expansion Possibilities

- Adjacent product lines: lashes, hair accessories, jewellery.
- Geographic expansion with localised payment and shipping.
- White-label storefront for fashion partners.
- B2B portal for salons and spas.

---

## 16. Final Development Notes

### 16.1 Recommended Development Phases

| Phase | Scope | Duration Estimate |
|---|---|---|
| Phase 1: MVP | Core storefront, product catalog, cart, checkout with one payment provider, basic admin | 8 to 10 weeks |
| Phase 2: AI and Accounts | Full auth, customer dashboard, AI customer service agent, wishlist, reviews | 6 to 8 weeks |
| Phase 3: Growth | Wholesale portal, additional payment providers, marketing automation, journal | 4 to 6 weeks |
| Phase 4: Scale | Mobile app, AR try-on, subscription, multi-language | 12 weeks plus |

### 16.2 MVP Recommendation

The MVP should ship with:

- Home, Shop, Product Detail, Cart, Checkout, Account, Help Center.
- Stripe (or Paystack for Nigeria-first launch) plus Apple Pay.
- Basic admin with order and product management.
- A first version of the AI agent limited to product FAQ and order lookup.
- Newsletter capture and transactional email.

**Skip in MVP:** wholesale portal, full loyalty program, advanced analytics, multi-language, AR features.

### 16.3 Estimated Complexity

| Area | Complexity |
|---|---|
| Storefront UI | Medium |
| Cart and Checkout | Medium-High |
| Payment Integration | Medium |
| AI Customer Service | High |
| Admin Dashboard | Medium-High |
| Wholesale System | Medium |
| Loyalty and Referrals | Medium |
| Multi-language | High |

### 16.4 Priority Features

In order of priority for launch:

1. Product catalog and detail pages
2. Cart and checkout with at least one card provider plus Apple Pay
3. Order confirmation and email receipts
4. Customer accounts with order history
5. AI customer service agent (FAQ and order lookup at minimum)
6. Admin dashboard for orders and products
7. Reviews and ratings
8. Wishlist
9. Journal and SEO content
10. Wholesale inquiry form

### 16.5 Open Questions for the Client

Before development starts, the team should confirm with the client:

- Preferred primary market for launch (Nigeria, US, UK, global).
- Initial product range and inventory model (made-to-order or stocked).
- Fulfilment partner and shipping carriers.
- Whether the brand will offer custom or made-to-order designs.
- Budget envelope for AI usage (LLM costs scale with conversation volume).
- Existing assets (logo, brand guide, product photography).

---

## Appendix A: Glossary

| Term | Definition |
|---|---|
| RAG | Retrieval Augmented Generation — a method of grounding AI responses in your own data |
| LangGraph | A framework for building stateful, multi-agent AI workflows |
| pgvector | PostgreSQL extension for storing and querying vector embeddings |
| LCP | Largest Contentful Paint, a Core Web Vital |
| SSR | Server-Side Rendering |
| OG | Open Graph — metadata standard for social link previews |

---

## Appendix B: Document Control

| Field | Value |
|---|---|
| Document Owner | Eunice Nails Project Lead |
| Version | 1.0 |
| Status | Draft for Review |
| Next Review | After client feedback |

---

*End of Document*
