# PT Girana Pratama Mandiri — Corporate Landing Page

> Solusi Tenaga Kerja Profesional & Terpercaya untuk Bisnis Anda

Modern, responsive corporate landing page for **PT Girana Pratama Mandiri**, a professional outsourcing company based in Bandung, Indonesia. Built with Next.js App Router and Chakra UI.

🌐 **Live:** [giranapratama.co.id](https://giranapratama.co.id)

---

## ✨ Features

- **Fully Responsive** — Optimised for mobile, tablet, and desktop
- **Scroll Animations** — Smooth entrance animations powered by Framer Motion
- **Glassmorphism Navbar** — Sticky header with blur effect and mobile drawer menu
- **Dynamic OG Image** — Auto-generated branded preview for link sharing (WhatsApp, Telegram, Facebook, Twitter)
- **SEO Optimised** — Comprehensive metadata, Open Graph, Twitter Cards, JSON-LD structured data, robots.txt, sitemap.xml
- **All Bahasa Indonesia** — Full Indonesian language content

## 📄 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Headline, tagline, and call-to-action buttons |
| **Tentang Kami** | Company overview and mission |
| **Layanan Kami** | 5 service cards — Marketing & Sales, Administrasi, Customer Service, Operasional, Kebersihan & Keamanan |
| **Mengapa Kami** | Numbered benefits list with icons |
| **Kontak Kami** | Contact info + message form |
| **Footer** | Company details, contact links, Google Maps embed |

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org) | React framework (App Router, JavaScript) |
| [Chakra UI v2](https://chakra-ui.com) | Component library & styling |
| [Framer Motion](https://www.framer.com/motion) | Scroll-triggered animations |
| [Lucide React](https://lucide.dev) | Icon library |
| [React Icons](https://react-icons.github.io/react-icons) | Additional icons |

## 📁 Project Structure

```
app/
├── layout.js             # Root layout, metadata, fonts
├── page.js               # Landing page (composes all sections)
├── globals.css            # Minimal CSS reset
├── opengraph-image.js     # Dynamic OG image generation
├── twitter-image.js       # Twitter card image
├── robots.js              # robots.txt generation
├── sitemap.js             # sitemap.xml generation
└── favicon.ico

components/
├── Navbar.js              # Sticky navbar with mobile drawer
├── Hero.js                # Hero section
├── TentangKami.js         # About Us section
├── LayananKami.js         # Services section (5 cards)
├── MengapaKami.js         # Why Choose Us section
├── KontakKami.js          # Contact section with form
├── Footer.js              # Footer with maps embed
├── AnimateOnScroll.js     # Reusable scroll animation wrapper
├── ChakraProviders.js     # Chakra UI theme provider
└── JsonLd.js              # Structured data (LocalBusiness)
```

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Yarn (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/azukhrufy/girana-pratama-landing.git
cd girana-pratama-landing

# Install dependencies
yarn install

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
yarn build
yarn start
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Orange | `#F05117` | Primary accent, CTAs, highlights |
| Navy | `#10108A` | Primary brand, headings, navbar |
| Deep Navy | `#0B0B5E` | Footer background |

## 📝 License

This project is proprietary to PT Girana Pratama Mandiri.

---

Built with ❤️ for PT Girana Pratama Mandiri
