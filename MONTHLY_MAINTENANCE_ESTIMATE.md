# Eunice Nails - Monthly Maintenance Cost Breakdown

## Executive Summary
**Recommended Monthly Maintenance Budget: $800 - $1,200**
**Conservative Estimate (Starting): $900/month**

---

## Detailed Cost Breakdown

### 1. **Frontend Hosting (Vercel)**
- **Service:** Vercel Pro (for production deployments, analytics, edge functions)
- **Estimated Usage:** Moderate traffic e-commerce site
- **Cost:** $20/month
- **What it covers:** Static site hosting, automatic deployments, analytics, serverless functions
- **Notes:** Scaling may increase this to $50-100/month with high traffic

---

### 2. **Backend Server (Node.js/API)**
- **Service:** AWS EC2, DigitalOcean, or Railway
- **Estimated Config:** 2GB RAM, 2 vCPU instance
- **Cost:** $15 - $25/month
- **What it covers:** API endpoints, order processing, user authentication
- **Alternative:** Heroku Hobby tier ($7/month, limited) or Railway ($5-20/month)

---

### 3. **Database (PostgreSQL/MongoDB)**
- **Service:** AWS RDS or DigitalOcean Database
- **Estimated Config:** Shared/Small instance, 10-20GB storage
- **Cost:** $50 - $75/month
- **What it covers:** 
  - Product catalog storage
  - User accounts & orders
  - Promo codes & inventory
  - Analytics data
- **Scaling consideration:** Could grow to $100-150/month with high volume

---

### 4. **AI Services** (StyleRecommender, ChatPanel visible in codebase)
- **Service:** OpenAI API or similar
- **Estimated Usage:** 5,000 API calls/month (moderate)
- **Cost:** $50 - $100/month
  - Style recommendations: ~$30/month
  - Chat support/recommendations: ~$20-70/month
- **Notes:** GPT-4 mini recommended for cost efficiency
- **Scaling:** Could reach $200-300/month with viral adoption

---

### 5. **Email Service (Resend)**
- **Service:** Resend (transactional emails)
- **Estimated Volume:** ~500 emails/month (order confirmations, shipping, receipts, newsletters)
- **Cost:** $20 - $25/month
- **What it covers:**
  - Order confirmations
  - Shipping notifications
  - Password resets
  - Marketing/newsletter emails (up to 1000 recipients for free tier)
- **Notes:** First 3,000 emails/month free, then usage-based (~$0.0001 per email)

---

### 6. **Payment Processing (Stripe/PayPal)**
- **Service:** Stripe or PayPal
- **Estimated Setup:** Per-transaction fees (not monthly recurring)
- **Monthly Overhead Estimate:** Not included (transaction-based, ~2.9% + $0.30/transaction)
- **Note:** Could add $50-200/month depending on sales volume, but not a fixed monthly cost

---

### 7. **Content Delivery Network (CDN)**
- **Service:** Cloudflare (for images, static assets)
- **Cost:** $0 - $20/month
- **What it covers:**
  - Image optimization for product photos
  - DDoS protection
  - Cache management
- **Notes:** Cloudflare free tier often sufficient; Pro ($20/month) recommended

---

### 8. **Monitoring, Logging & Uptime**
- **Service:** DataDog, New Relic, or Logrocket
- **Estimated Cost:** $30 - $50/month
- **What it covers:**
  - Application performance monitoring
  - Error tracking (Sentry alternative)
  - Uptime alerts
  - User session replay (optional)

---

### 9. **Storage & Backups**
- **Service:** AWS S3 or DigitalOcean Spaces (for product images, PDFs)
- **Estimated Usage:** 5-10GB per month
- **Cost:** $10 - $20/month
- **What it covers:**
  - Product image storage
  - Invoice PDFs
  - User-generated content
  - Automatic daily backups

---

### 10. **Domain & SSL**
- **Service:** Domain registrar (Namecheap, Route53) + SSL (Cloudflare/LetsEncrypt)
- **Estimated Cost:** $1 - $3/month
- **What it covers:**
  - Domain registration amortized (~$12/year)
  - SSL certificates (usually free with Cloudflare)

---

### 11. **Miscellaneous & Contingency (5-10%)**
- **Analytics Tools:** Google Analytics (free), Amplitude, or Mixpanel
- **A/B Testing:** Split.io or Optimizely ($50-100)
- **Admin Tools:** Retool or custom dashboards
- **Contingency Buffer:** 10% for unexpected services
- **Cost:** $50 - $100/month

---

## Cost Summary Table

| Service | Min | Max | Likely |
|---------|-----|-----|--------|
| Vercel (Frontend) | $20 | $50 | $20 |
| Backend Server | $15 | $25 | $20 |
| Database | $50 | $75 | $60 |
| AI Services | $50 | $100 | $75 |
| Email (Resend) | $20 | $25 | $25 |
| CDN | $0 | $20 | $10 |
| Monitoring | $30 | $50 | $40 |
| Storage/Backups | $10 | $20 | $15 |
| Domain/SSL | $1 | $3 | $2 |
| Miscellaneous | $50 | $100 | $75 |
| **TOTAL** | **$246** | **$468** | **$342** |

---

## Recommended Monthly Budget: **$900 - $1,200**

### Breakdown by Tier:

**🟢 TIER 1 - Minimum Viable (Startup Phase):** $400-500/month
- Basic hosting, essential services only
- Suitable if traffic is very low
- Risk: Limited scalability

**🟡 TIER 2 - Recommended (Growth Phase):** $800-1,000/month
- Balanced infrastructure
- Room for 2-3x traffic growth
- Includes monitoring & AI features
- **SUGGESTED FOR YOUR PROPOSAL**

**🔴 TIER 3 - Premium/Enterprise:** $1,500-2,500+/month
- Full redundancy, advanced AI, white-label options
- 24/7 support
- High traffic management (100k+ users)

---

## Additional Costs to Consider (Non-Monthly):

1. **Development/Updates:** $2,000 - $5,000/month (if you're adding features)
2. **Content Management:** $500 - $1,500/month (if hiring for product photography, copy)
3. **Marketing/SEO:** Variable
4. **Support Staff:** $1,500 - $3,000/month (if hiring 1 part-time person)

---

## Recommended Proposal to Your Colleague:

**"For ongoing maintenance & 24/7 operations:"**
- **Fixed Monthly Fee: $1,000**
- **Includes:**
  - All infrastructure costs
  - Database management & backups
  - AI features (style recommendations, chat)
  - Email service
  - Monitoring & uptime alerts
  - Security updates

- **Additional/Variable Costs (Discussed Separately):**
  - Payment processing fees (~2.9% + $0.30 per transaction)
  - Feature development ($XX per hour or per sprint)
  - Marketing/content updates

---

## Notes for Peak Seasons:

- During high traffic periods (holidays, sales), you may need to scale up servers
- Budget an additional $100-300/month during peak seasons
- AI API costs may increase with more customer interactions

---

## Recommendation:

**Quote your colleague: $900-$1,200/month for full platform maintenance & operations**

This covers all current services and provides runway for 2-3x traffic growth before needing infrastructure upgrades.

If they prefer a lower starting point: **$750/month (starter tier)** with clear escalation conditions.
