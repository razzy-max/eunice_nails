export interface WholesaleTier {
  name: string
  minQuantity: number
  maxQuantity: number
  discountPercentage: number
  pricePerUnit: string
}

export interface FAQItem {
  id: string
  category: 'shipping' | 'returns' | 'sizing' | 'products' | 'account'
  question: string
  answer: string
}

export const wholesaleTiers: WholesaleTier[] = [
  {
    name: 'Starter',
    minQuantity: 5,
    maxQuantity: 19,
    discountPercentage: 15,
    pricePerUnit: '$35.74'
  },
  {
    name: 'Growth',
    minQuantity: 20,
    maxQuantity: 49,
    discountPercentage: 25,
    pricePerUnit: '$30.00'
  },
  {
    name: 'Scale',
    minQuantity: 50,
    maxQuantity: 99,
    discountPercentage: 35,
    pricePerUnit: '$26.00'
  },
  {
    name: 'Enterprise',
    minQuantity: 100,
    maxQuantity: Infinity,
    discountPercentage: 40,
    pricePerUnit: 'Custom'
  }
]

export const mockFAQs: FAQItem[] = [
  {
    id: 'faq_ship_001',
    category: 'shipping',
    question: 'How long does shipping take?',
    answer: 'We offer free standard shipping (5-7 business days) on all orders over $50. Express shipping (2-3 business days) is available for $12. International orders typically take 10-14 business days.'
  },
  {
    id: 'faq_ship_002',
    category: 'shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to over 50 countries worldwide. International shipping rates and times vary by destination. You\'ll see the exact cost at checkout based on your location.'
  },
  {
    id: 'faq_ship_003',
    category: 'shipping',
    question: 'Can I track my order?',
    answer: 'Absolutely. You\'ll receive a tracking number via email as soon as your order ships. You can track your package in real-time through our website or your email.'
  },
  {
    id: 'faq_return_001',
    category: 'returns',
    question: 'What\'s your return policy?',
    answer: 'We offer 30-day returns on all products. Items must be unworn, unused, and in original packaging. Once we receive and inspect your return, we\'ll process a refund to your original payment method within 5-7 business days.'
  },
  {
    id: 'faq_return_002',
    category: 'returns',
    question: 'How do I start a return?',
    answer: 'Log into your account, go to Orders, and select the order with the item you\'d like to return. Click "Return Item" and follow the prompts. We\'ll email you a prepaid shipping label.'
  },
  {
    id: 'faq_return_003',
    category: 'returns',
    question: 'Can I exchange for a different size or color?',
    answer: 'Of course! Exchanges are free within 30 days of purchase. Use our return process to request an exchange for a different size, color, or shape, and we\'ll send your replacement right out.'
  },
  {
    id: 'faq_size_001',
    category: 'sizing',
    question: 'How do I know what size to order?',
    answer: 'We recommend measuring the width of your nail bed using a ruler or measuring tape. Each Eunice Nails set applies to a range of sizes (XS–XL). Our detailed sizing guide in the product description includes photo references.'
  },
  {
    id: 'faq_size_002',
    category: 'sizing',
    question: 'What if my size doesn\'t match any set?',
    answer: 'Press-on nails are trimmed to order at no extra cost. If your natural nails are between sizes, we recommend going up one size and trimming the edges with regular nail clippers for a custom fit.'
  },
  {
    id: 'faq_size_003',
    category: 'sizing',
    question: 'Can I use the sizing guide to find my size?',
    answer: 'Yes! We have a downloadable sizing guide with reference images and measurements. You can also chat with our AI stylist on the product page for personalized sizing help.'
  },
  {
    id: 'faq_prod_001',
    category: 'products',
    question: 'Are your nails made from real nail material?',
    answer: 'Our nails are made from high-quality acrylic that mimics the appearance and feel of natural nails. They\'re pre-shaped, so no filing or shaping is needed—just apply and go.'
  },
  {
    id: 'faq_prod_002',
    category: 'products',
    question: 'How long do press-on nails last?',
    answer: 'With proper care, Eunice Nails last 3–4 weeks on average. Avoid excessive water exposure and harsh chemicals, and they\'ll maintain their shine and adhesion for the full duration.'
  },
  {
    id: 'faq_prod_003',
    category: 'products',
    question: 'Will press-on nails damage my natural nails?',
    answer: 'No. When applied and removed correctly, press-on nails cause no damage to your natural nails. Always remove gently by soaking and never yank them off. Your natural nails stay healthy underneath.'
  },
  {
    id: 'faq_account_001',
    category: 'account',
    question: 'How do I create an account?',
    answer: 'Click "Account" in the header and select "Sign Up." Enter your email, create a password, and you\'re done! Accounts give you order history, saved addresses, and loyalty points.'
  },
  {
    id: 'faq_account_002',
    category: 'account',
    question: 'How do I reset my password?',
    answer: 'Go to the login page and click "Forgot Password." Enter your email and we\'ll send you a link to reset your password. Follow the link and create a new password.'
  },
  {
    id: 'faq_account_003',
    category: 'account',
    question: 'Can I guest checkout?',
    answer: 'Absolutely. Guest checkout is available at no extra cost. You won\'t need an account, but you also won\'t have access to order history or loyalty points.'
  }
]
