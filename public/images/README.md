# Zravity image slots

The site currently ships with **no photographic/logo raster images** — every
visual is inline SVG, CSS, or an initials avatar. This is the full list of
places where a real image would go. Drop files at the exact paths below and
tell Claude to wire them in (they are **not** referenced yet, so nothing is
broken while they're missing).

Recommended format: SVG for logos; WebP/JPG for photos. Keep photos ~2× the
display size for retina.

## 1. Partner logos — revolving "trusted by" strip

- Used in: `app/components/logos.tsx` (currently text wordmarks)
- Path: `public/images/partners/<brand>.svg`
- Size: height ~28px, transparent background, single-colour preferred
- Files: `razorpay.svg`, `phonepe.svg`, `paytm.svg`, `upi.svg`,
  `hdfc.svg`, `icici.svg`, `visa.svg`, `mastercard.svg`,
  `delhivery.svg`, `shiprocket.svg`
- ⚠️ Only list brands you actually partner with.

## 2. Team photos

- Used in: `app/team/page.tsx` (currently initials avatars)
- Path: `public/images/team/<first-last>.jpg`
- Size: 480×480 (1:1 square), face centred
- Files: `aarav-mehta.jpg`, `diya-kapadia.jpg`, `rohan-kapoor.jpg`,
  `ishaan-verma.jpg`, `sneha-rao.jpg`, `karan-malhotra.jpg`,
  `ananya-desai.jpg`, `tarun-shetty.jpg`, `riya-sharma.jpg`,
  `aditya-banerjee.jpg`

## 3. Testimonial avatars

- Used in: `app/components/testimonials.tsx` (currently initials)
- Path: `public/images/testimonials/<first-last>.jpg`
- Size: 128×128 (1:1)
- Files: `ananya-rao.jpg`, `vikram-bhatia.jpg`, `priya-nair.jpg`,
  `imran-sheikh.jpg`, `meera-iyer.jpg`, `aditya-menon.jpg`

## 4. Hero shop-card product images

- Used in: `app/components/hero-cards.tsx` → `ShopCard` (currently colour tiles)
- Path: `public/images/products/<slug>.jpg`
- Size: 400×400 (1:1)
- Files (4 tiles): `product-1.jpg` … `product-4.jpg`

## 5. Social / Open Graph image (optional but recommended)

- Used in: `app/layout.tsx` metadata (`openGraph.images`)
- Path: `public/images/og.jpg`
- Size: 1200×630
