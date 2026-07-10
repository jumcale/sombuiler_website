# Sombuiler Online

Premium Software & Website Development Agency Website

## Overview

A high-performance, conversion-optimized agency website for **Sombuiler Online**, a software and website development company headquartered in Hargeisa, Somaliland. Built with a complete full-stack architecture featuring dark mode support, WhatsApp integration, live operational status, and a validated appointment booking form.

## Live Demo

- **Website:** https://kgttx6s7hnew4.kimi.page
- **Repository:** https://github.com/jumcale/sombuiler_website

## Features

| Feature | Description |
|---------|-------------|
| **Glassmorphism Navbar** | Sticky header with frosted glass effect, responsive mobile drawer, prominent WhatsApp CTA |
| **Dynamic Operational Badge** | Live open/closed status based on 24/6 schedule (Sat-Thu open, Fri closed) |
| **High-Impact Hero** | Gradient headline, dual CTA buttons (WhatsApp + Browse Features), animated feature pills, stats grid |
| **Services Architecture** | 8 service cards in responsive grid with icons, descriptions, feature lists, hover effects |
| **Appointment Form** | Full TypeScript-validated form with name, email, phone, business type, budget tier, project details |
| **Trust Block** | 8 trust pillars including wheelchair accessibility, enterprise security, 24/6 availability |
| **Comprehensive Footer** | WhatsApp/email/phone links, Google Maps address, working hours schedule |
| **Floating WhatsApp Button** | Fixed-position CTA with pulse-glow animation |
| **Dark Mode** | Full theme toggle with persistent localStorage, smooth transitions |

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 3.4, shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router (BrowserRouter)
- **Animations:** CSS keyframes, IntersectionObserver

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (Sheet, Button)
│   └── ui-custom/
│       ├── Navbar.tsx          # Glassmorphism navbar + mobile drawer
│       ├── OperationalBadge.tsx # Live status indicator
│       └── WhatsAppFloat.tsx   # Floating action button
├── sections/
│   ├── Hero.tsx               # Hero section with CTAs + stats
│   ├── Services.tsx           # 8-card services grid
│   ├── AppointmentForm.tsx    # Validated booking form
│   ├── TrustBlock.tsx         # Trust & accessibility block
│   └── Footer.tsx             # Full footer with contact info
├── hooks/
│   ├── useTheme.ts            # Dark mode management
│   ├── useScrollPosition.ts   # Scroll detection
│   └── useOperationalStatus.ts # Business hours logic
├── types/
│   └── index.ts               # TypeScript interfaces & types
├── pages/
│   └── Home.tsx               # Page assembly
├── App.tsx                     # Root with Router
└── main.tsx                    # Entry point
```

## WhatsApp Integration

All WhatsApp CTAs link directly to: `https://wa.me/252633322511`

## Getting Started

```bash
# Clone the repository
git clone https://github.com/jumcale/sombuiler_website.git
cd sombuiler_website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Company Info

- **Company:** Sombuiler Online
- **Location:** Road Number 1, Hargeisa, Somaliland
- **Hours:** Open 24/6 (Saturday - Thursday), Closed Fridays
- **WhatsApp:** +252 63 332 2511
