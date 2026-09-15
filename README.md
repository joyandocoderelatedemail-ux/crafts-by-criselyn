# Crafts by Criselyn — Modern Crochet Bouquet Boutique

A modern, elegant, responsive landing page for **Crafts by Criselyn**, a small handmade crochet bouquet business in the Philippines.

![Brand Theme](https://img.shields.io/badge/Theme-White%20%2B%20Soft%20Pink-ff7799)
![Framework](https://img.shields.io/badge/Framework-Next.js%2014-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-38bdf8)
![Deployment](https://img.shields.io/badge/Deploy-Vercel%20Ready-000000)

---

## 🌸 Brand & Concept

* **Business Name:** Crafts by Criselyn
* **Artisan:** Criselyn Tullao
* **Tagline:** *"Handmade with love, one stitch at a time."*
* **Primary Theme:** White + Soft Pink (Blush, Rose, Petal, subtle Cream, Dark Charcoal text)
* **Aesthetic:** Cute, elegant, warm, feminine, handmade, and premium boutique feeling.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

This repository is **100% Vercel compatible out of the box** with zero configuration:
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project into [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**.

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       └── bouquets/               # Optimized catalog photos
│           ├── blush-crimson-elegance.jpg
│           ├── sunshine-tulip-harmony.jpg
│           ├── rose-bloom-arrangement.jpg
│           └── midnight-scarlet-roses.jpg
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind layers, custom scrollbar, glassmorphism
│   │   ├── layout.tsx              # Root layout, Cormorant Garamond & Jakarta fonts, SEO metadata
│   │   └── page.tsx                # Complete 11-section landing page assembly
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky glassmorphic navbar with mobile menu
│   │   ├── Hero.tsx                # Split-screen hero with floating floral badges
│   │   ├── TrustHighlights.tsx     # 4-pillar trust strip
│   │   ├── FeaturedBouquets.tsx    # Product cards with filter tabs & details trigger
│   │   ├── ImageShowcase.tsx       # Pinterest/Instagram masonry gallery + lightbox modal
│   │   ├── AboutSection.tsx        # Split section with artisan story & features
│   │   ├── WhyChooseUs.tsx         # 4-card benefits of everlasting crochet flowers
│   │   ├── OccasionsSection.tsx    # Birthdays, Anniversaries, Valentine's, Graduations, etc.
│   │   ├── OrderSection.tsx        # High-impact CTA banner with 3-step order guide
│   │   ├── ContactSection.tsx      # Facebook button, telephone link, & Inquiry Message Builder
│   │   ├── Footer.tsx              # Footer with links, contact, social, copyright 2026
│   │   ├── ProductDetailModal.tsx  # Interactive modal for viewing bouquet details
│   │   └── FloatingActions.tsx     # Floating quick Facebook and Phone contact pill
│   └── data/
│       ├── bouquets.ts             # Modular bouquet data & catalog structure
│       ├── trustHighlights.ts      # Trust highlights data
│       ├── benefits.ts             # "Why choose crochet bouquets" data
│       └── occasions.ts            # Occasions data
├── tailwind.config.js              # Custom blush, rosewood, and cream color palette
├── tsconfig.json
└── package.json
```

---

## 📞 Business Contacts

* **Facebook:** [Crafts by Criselyn (criselyn.tullao)](https://www.facebook.com/criselyn.tullao)
* **Phone / SMS:** `09630478946` (tel: `09630478946`)
* **Location:** Philippines (Nationwide courier & local delivery)
