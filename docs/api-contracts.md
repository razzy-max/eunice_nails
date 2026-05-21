# Eunice Nails — API Contracts

**Version:** 1.0  
**Last Updated:** May 2026  
**Status:** Frontend Integration Ready

This document defines all API contracts between the frontend and backend. All responses follow a standard format with proper error handling.

---

## Table of Contents

1. [Authentication](#authentication)
2. [Products](#products)
3. [Collections](#collections)
4. [Cart](#cart)
5. [Orders](#orders)
6. [Checkout](#checkout)
7. [Users & Accounts](#users--accounts)
8. [AI Chat](#ai-chat)
9. [Wishlist](#wishlist)
10. [Reviews](#reviews)
11. [Search](#search)
12. [Wholesale](#wholesale)
13. [Common Response Format](#common-response-format)
14. [Error Handling](#error-handling)

---

## Authentication

### POST /api/auth/login

Sign in a user with email and password.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "secure_password"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "Jane Doe",
      "role": "customer",
      "avatar": "https://...",
      "loyaltyPoints": 150
    },
    "token": "jwt_token_here",
    "expiresIn": 86400
  }
}
```

**Error (401):**
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

---

### POST /api/auth/register

Register a new user account.

**Request:**
```json
{
  "email": "newemail@example.com",
  "password": "secure_password",
  "name": "Jane Doe"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_456",
      "email": "newemail@example.com",
      "name": "Jane Doe",
      "role": "customer",
      "loyaltyPoints": 0
    },
    "token": "jwt_token_here"
  }
}
```

---

### POST /api/auth/logout

Invalidate user session (client-side token removal recommended).

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### GET /api/auth/me

Fetch current authenticated user profile.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "Jane Doe",
    "role": "customer",
    "avatar": "https://...",
    "loyaltyPoints": 150
  }
}
```

---

## Products

### GET /api/products

Fetch all products with optional filters and pagination.

**Query Parameters:**
- `page` (integer, default: 1) — pagination page
- `limit` (integer, default: 20) — items per page
- `shape` (string) — filter by shape (almond, square, coffin, stiletto)
- `length` (string) — filter by length (short, medium, long, extra-long)
- `sort` (string) — sort field (featured, price-asc, price-desc, rating)
- `search` (string) — search by product name

**Example Request:**
```
GET /api/products?shape=almond&sort=rating&limit=12
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "prod_1",
        "slug": "rose-nude-almond",
        "name": "Rose Nude Almond",
        "description": "Timeless rosy nude perfect for any occasion",
        "basePrice": 24.00,
        "images": [
          {
            "url": "https://...",
            "alt": "Rose Nude Almond",
            "position": 1
          }
        ],
        "variants": [
          {
            "id": "var_1",
            "sku": "RNA-M-RN",
            "length": "medium",
            "shape": "almond",
            "color": "Rose Nude",
            "colorHex": "#C9A899",
            "stock": 45,
            "price": 24.00,
            "imageUrl": "https://..."
          }
        ],
        "tags": ["bestseller"],
        "rating": 4.8,
        "reviewCount": 124,
        "collectionIds": ["col_1"]
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 12,
      "total": 48,
      "pages": 4
    }
  }
}
```

---

### GET /api/products/:id

Fetch a single product by ID with all variants and related products.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "product": {
      "id": "prod_1",
      "slug": "rose-nude-almond",
      "name": "Rose Nude Almond",
      "description": "...",
      "basePrice": 24.00,
      "images": [...],
      "variants": [...],
      "tags": ["bestseller"],
      "rating": 4.8,
      "reviewCount": 124,
      "collectionIds": ["col_1"]
    },
    "related": [
      { "id": "prod_2", "name": "Milky Rose Square" },
      { "id": "prod_3", "name": "Ivory Stiletto Set" }
    ]
  }
}
```

---

### GET /api/products/:id/reviews

Fetch all reviews for a product.

**Query Parameters:**
- `limit` (integer, default: 10)
- `page` (integer, default: 1)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": "review_1",
        "productId": "prod_1",
        "userId": "user_123",
        "userName": "Jane D.",
        "rating": 5,
        "title": "Perfect fit!",
        "message": "These nails are exactly what I wanted.",
        "variant": {
          "shape": "almond",
          "length": "medium"
        },
        "helpful": 24,
        "createdAt": "2026-05-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 124
    }
  }
}
```

---

## Collections

### GET /api/collections

Fetch all collections.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "collections": [
      {
        "id": "col_1",
        "name": "Editorial Nude",
        "slug": "editorial-nude",
        "description": "Timeless, versatile nudes for every occasion",
        "image": "https://...",
        "color": "#C9A899",
        "productCount": 12
      }
    ]
  }
}
```

---

### GET /api/collections/:slug

Fetch a single collection with all products.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "collection": {
      "id": "col_1",
      "name": "Editorial Nude",
      "slug": "editorial-nude",
      "description": "Timeless, versatile nudes for every occasion",
      "image": "https://...",
      "color": "#C9A899"
    },
    "products": [
      { "id": "prod_1", "name": "Rose Nude Almond" }
    ]
  }
}
```

---

## Cart

### GET /api/cart

Fetch the current user's cart.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "cartId": "cart_123",
    "items": [
      {
        "id": "item_1",
        "product": {
          "id": "prod_1",
          "name": "Rose Nude Almond",
          "basePrice": 24.00
        },
        "variant": {
          "id": "var_1",
          "color": "Rose Nude",
          "length": "medium",
          "price": 24.00
        },
        "quantity": 2
      }
    ],
    "subtotal": 48.00,
    "tax": 4.80,
    "shipping": 5.00,
    "total": 57.80
  }
}
```

---

### POST /api/cart/items

Add a product variant to the cart.

**Request:**
```json
{
  "productId": "prod_1",
  "variantId": "var_1",
  "quantity": 2
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "item": {
      "id": "item_1",
      "quantity": 2
    },
    "cartTotal": 57.80
  }
}
```

---

### PATCH /api/cart/items/:itemId

Update quantity or remove a cart item.

**Request:**
```json
{
  "quantity": 3
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "item": {
      "id": "item_1",
      "quantity": 3
    },
    "cartTotal": 72.00
  }
}
```

---

### DELETE /api/cart/items/:itemId

Remove a single item from cart.

**Response (200):**
```json
{
  "success": true,
  "message": "Item removed from cart"
}
```

---

## Orders

### GET /api/orders

Fetch all orders for the authenticated user.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "order_123",
        "orderNumber": "EN-2026-001",
        "status": "delivered",
        "items": [
          {
            "productId": "prod_1",
            "productName": "Rose Nude Almond",
            "variantColor": "Rose Nude",
            "quantity": 2,
            "price": 24.00
          }
        ],
        "subtotal": 48.00,
        "shipping": 5.00,
        "tax": 4.80,
        "total": 57.80,
        "createdAt": "2026-04-10T14:20:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 8
    }
  }
}
```

---

### GET /api/orders/:orderId

Fetch a single order by ID.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "order": { }
  }
}
```

---

## Checkout

### POST /api/checkout/validate

Validate cart and calculate totals before checkout.

**Request:**
```json
{
  "cartId": "cart_123",
  "shippingAddress": {
    "name": "Jane Doe",
    "street": "123 Main St",
    "city": "Lagos"
  },
  "shippingMethod": "standard"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "subtotal": 48.00,
    "shippingCost": 5.00,
    "tax": 4.80,
    "total": 57.80,
    "estimatedDelivery": "2026-05-28"
  }
}
```

---

### POST /api/checkout/create

Create a pending order and initiate payment.

**Request:**
```json
{
  "cartId": "cart_123",
  "email": "user@example.com",
  "shippingAddress": { },
  "billingAddress": { },
  "shippingMethod": "standard"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "orderId": "order_123",
    "orderNumber": "EN-2026-001",
    "total": 57.80,
    "paymentUrl": "https://paystack.co/pay/...",
    "status": "pending"
  }
}
```

---

## Users & Accounts

### GET /api/users/:userId

Fetch user profile information.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "Jane Doe",
      "role": "customer",
      "loyaltyPoints": 150
    }
  }
}
```

---

### GET /api/users/:userId/addresses

Fetch all saved addresses for a user.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "addresses": [
      {
        "id": "addr_1",
        "name": "Home",
        "street": "123 Main St",
        "city": "Lagos",
        "isDefault": true
      }
    ]
  }
}
```

---

### POST /api/users/:userId/addresses

Add a new address.

**Request:**
```json
{
  "name": "Office",
  "street": "456 Business Ave",
  "city": "Lagos",
  "country": "NG"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "address": { }
  }
}
```

---

## AI Chat

### POST /api/ai-chat

Send a message to the Eunice Stylist AI chat.

**Request:**
```json
{
  "message": "What length should I get for my first time?",
  "context": {
    "previousMessages": []
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "response": "For first-time users, I'd recommend Medium length...",
    "suggestedQuestions": [
      "How do I measure my nail bed?",
      "What's the difference between shapes?"
    ]
  }
}
```

---

## Wishlist

### GET /api/wishlist

Fetch user's wishlist.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "wish_1",
        "productId": "prod_1",
        "addedAt": "2026-05-15T10:30:00Z"
      }
    ],
    "count": 5
  }
}
```

---

### POST /api/wishlist/items

Add a product to wishlist.

**Request:**
```json
{
  "productId": "prod_1"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "item": {
      "id": "wish_1",
      "productId": "prod_1"
    }
  }
}
```

---

### DELETE /api/wishlist/items/:wishlistItemId

Remove a product from wishlist.

**Response (200):**
```json
{
  "success": true,
  "message": "Item removed from wishlist"
}
```

---

## Reviews

### POST /api/reviews

Submit a new product review.

**Request:**
```json
{
  "productId": "prod_1",
  "variantId": "var_1",
  "rating": 5,
  "title": "Perfect fit!",
  "message": "These nails are exactly what I wanted."
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "review": {
      "id": "review_1",
      "productId": "prod_1",
      "rating": 5,
      "title": "Perfect fit!",
      "createdAt": "2026-05-21T12:00:00Z"
    }
  }
}
```

---

## Search

### GET /api/search

Global search across products and content.

**Query Parameters:**
- `q` (string, required) — search query
- `type` (string) — filter by type (products, collections)
- `limit` (integer, default: 20)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "results": [
      {
        "type": "product",
        "id": "prod_1",
        "name": "Rose Nude Almond"
      }
    ],
    "count": 12
  }
}
```

---

## Wholesale

### POST /api/wholesale/inquiry

Submit a wholesale inquiry form.

**Request:**
```json
{
  "businessName": "Beauty Boutique Lagos",
  "contactName": "Chioma Okafor",
  "email": "chioma@beautyboutique.com",
  "city": "Lagos",
  "country": "NG"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "inquiryId": "inquiry_123",
    "message": "Thank you for your interest!"
  }
}
```

---

## Common Response Format

All API responses follow this standard structure:

**Success:**
```json
{
  "success": true,
  "data": { }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Human-readable error message",
  "code": "ERROR_CODE"
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 422 | Unprocessable Entity |
| 500 | Server Error |

---

## Error Codes

```
INVALID_TOKEN — JWT token is expired or invalid
UNAUTHORIZED — User not authenticated
PRODUCT_NOT_FOUND — Product ID does not exist
INSUFFICIENT_STOCK — Requested quantity exceeds available stock
INVALID_CART — Cart is empty or invalid
DUPLICATE_EMAIL — Email already registered
```

---

## Authentication

All protected endpoints require:

```
Authorization: Bearer <jwt_token>
```

Tokens are obtained via `/api/auth/login` or `/api/auth/register` and expire after **24 hours**.

---

## Rate Limiting

- **Public endpoints:** 100 requests per minute per IP
- **Authenticated endpoints:** 500 requests per minute per user

---

## Pagination

List endpoints support:
- `page` (integer, ≥ 1)
- `limit` (integer, 1–100)

Response includes pagination metadata.

---

Last updated: May 21, 2026
