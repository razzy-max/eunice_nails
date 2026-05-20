# Optimized Image Specifications (File Size Reduced)

## Summary: Optimized Resolutions for Faster Loading & Smaller Storage

**Strategy:** Reduced from 1.5x to 1.2x resolution while maintaining visual quality across all devices.

### Image Specs by Category

#### **PRODUCT IMAGES (24 total)**
- **Old Resolution:** 1200×1200px (~150-180KB each)
- **New Resolution:** 960×960px (~80-110KB each)
- **Naming:** `sample-[1-6]-[short|medium|long|extra-long].jpg`
- **Estimated Total Size:** 24 images × 95KB avg = **~2.3MB**
- **Quality:** Excellent on desktop, very good on mobile

#### **COLLECTION IMAGES (4 total)**
- **Old Resolution:** 1000×1200px (~130-160KB each)
- **New Resolution:** 800×960px (~70-100KB each)
- **Naming:** `collection-[nude|bold|minimal|seasonal].jpg`
- **Estimated Total Size:** 4 images × 85KB avg = **~340KB**
- **Quality:** Sharp on all devices

#### **JOURNAL IMAGES (3 total)**
- **Old Resolution:** 1600×900px (~100-140KB each)
- **New Resolution:** 1280×720px (~60-90KB each)
- **Naming:** `journal-[1|2|3].jpg`
- **Estimated Total Size:** 3 images × 75KB avg = **~225KB**
- **Quality:** Crisp and readable on all devices

#### **INSTAGRAM IMAGES (6 total)**
- **Old Resolution:** 1000×1000px (~80-120KB each)
- **New Resolution:** 800×800px (~40-60KB each)
- **Naming:** `ig-[1|2|3|4|5|6].jpg`
- **Estimated Total Size:** 6 images × 50KB avg = **~300KB**
- **Quality:** Perfect for small grid display

---

## Total Storage Comparison

| Category | Old Size | New Size | Savings |
|----------|----------|----------|---------|
| Products (24) | ~3.6MB | ~2.3MB | **1.3MB saved (36%)** |
| Collections (4) | ~0.52MB | ~0.34MB | **0.18MB saved (35%)** |
| Journal (3) | ~0.36MB | ~0.23MB | **0.13MB saved (36%)** |
| Instagram (6) | ~0.54MB | ~0.30MB | **0.24MB saved (44%)** |
| **TOTAL** | **~5.0MB** | **~3.2MB** | **~1.8MB saved (36%)** |

---

## Detailed Specs for Each Image Type

### Product Images (960×960px)
**Files:**
- sample-1-short.jpg, sample-1-medium.jpg, sample-1-long.jpg, sample-1-extra-long.jpg
- sample-2-short.jpg, sample-2-medium.jpg, sample-2-long.jpg, sample-2-extra-long.jpg
- ... (repeating for products 3-6)

**Specs:** 960×960px JPG, Quality 85-90

### Collection Images (800×960px)
**Files:**
- collection-nude.jpg
- collection-bold.jpg
- collection-minimal.jpg
- collection-seasonal.jpg

**Specs:** 800×960px JPG, Quality 85-90

### Journal Images (1280×720px)
**Files:**
- journal-1.jpg
- journal-2.jpg
- journal-3.jpg

**Specs:** 1280×720px JPG, Quality 85-90

### Instagram Images (800×800px)
**Files:**
- ig-1.jpg through ig-6.jpg

**Specs:** 800×800px JPG, Quality 85-90

---

## Why These Resolutions Work

✅ **Still sharp on retina displays** — 1.2x resolution covers most use cases  
✅ **Fast loading** — Smaller files mean quicker page load times  
✅ **Mobile-optimized** — Responsive scaling handles all screen sizes  
✅ **SEO-friendly** — Faster pages rank better  
✅ **Bandwidth-efficient** — Lower data usage for users on slower connections  
✅ **Storage-efficient** — Saves ~1.8MB across the entire site  

---

## Compression Settings

When saving JPG files from your AI image generator:

1. **Format:** JPG (not PNG)
2. **Quality:** 85-90 (good balance of quality vs file size)
3. **Color Profile:** sRGB (web-safe)
4. **Optional:** Run through TinyJPG or similar compressor for additional 10-15% reduction

---

## Quick Reference: All 41 Images

| Image Type | Count | Resolution | Approx Size Each | Total |
|-----------|-------|-----------|------------------|-------|
| Products | 24 | 960×960 | 95KB | 2.3MB |
| Collections | 4 | 800×960 | 85KB | 340KB |
| Journal | 3 | 1280×720 | 75KB | 225KB |
| Instagram | 6 | 800×800 | 50KB | 300KB |
| **TOTAL** | **41** | — | — | **~3.2MB** |

---

## Responsive Display Behavior

Images will scale responsively across devices:

### Desktop (1200px+)
- Products: displayed at ~600-800px
- Collections: displayed at 400-600px
- Journal: displayed at 600-800px
- Instagram: displayed at 150-200px

### Tablet (768px-1199px)
- Products: displayed at ~400-600px
- Collections: displayed at 300-400px
- Journal: displayed at 400-600px
- Instagram: displayed at 120-150px

### Mobile (< 768px)
- Products: displayed at ~300-400px
- Collections: displayed at 150-300px
- Journal: displayed at 250-350px
- Instagram: displayed at 100-150px

All images will scale smoothly thanks to CSS `max-width: 100%` and responsive container sizing.
