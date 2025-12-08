# SSA Sheridan Website

Official website for the **Sikh Students Association, Sheridan (SSA Sheridan)** - a non-profit student club dedicated to promoting Sikhi, seva, inclusivity, and student support at Sheridan College.

🌐 **Live Site:** [ssa-sheridan.vercel.app](https://ssa-sheridan.vercel.app)

---

## ✨ Features

- **Modern Stack:** Built with Next.js 14 (App Router), TypeScript, TailwindCSS
- **Dynamic Content:** Powered by Sanity CMS for easy content management
- **Beautiful UI:** Elegant Sikh-themed design with smooth Framer Motion animations
- **Fully Responsive:** Optimized for all devices and screen sizes
- **SEO Optimized:** Full meta tags, OpenGraph, sitemap, and robots.txt
- **Accessible:** Built with accessibility best practices
- **Vercel-Ready:** Optimized for deployment on Vercel

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#192441` | Primary color |
| Soft Blue | `#8C99B8` | Secondary text |
| Khalsa Orange | `#F9A602` | Accent, CTAs |
| Gold/Kesri | `#F4A300` | Highlights |
| Light Grey | `#F5F6FA` | Backgrounds |
| White | `#FFFFFF` | Cards, text |
| Black | `#0A0A0A` | Dark text |

### Typography

- **Display Font:** Playfair Display (elegant headings)
- **Body Font:** Inter (clean, readable body text)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── events/
│   │   └── [slug]/
│   ├── gallery/
│   │   └── [slug]/
│   ├── join/
│   ├── team/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── cards/              # Event, Team, Gallery cards
│   ├── embeds/             # YouTube, Instagram embeds
│   ├── gallery/            # Gallery grid with lightbox
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── sanity/
│   ├── client.ts           # Sanity client
│   ├── config.ts           # Sanity configuration
│   ├── queries.ts          # GROQ queries
│   └── schemas/            # Content schemas
└── types/                  # TypeScript definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (for CMS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssasheridan/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

4. Update `.env.local` with your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_SITE_URL=https://ssa-sheridan.vercel.app
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

---

## 📝 Sanity CMS Setup

> **📖 For detailed setup instructions, see:**
> - **[QUICK_START.md](./QUICK_START.md)** - Quick reference checklist
> - **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete step-by-step guide with explanations
> - **[SANITY_SETUP.md](./SANITY_SETUP.md)** - Sanity-specific setup details

### Quick Overview

1. Create a new Sanity project at [sanity.io](https://sanity.io)
2. Copy your Project ID to the environment variables
3. Deploy the schemas to Sanity Studio

### Content Schemas

| Schema | Description |
|--------|-------------|
| `event` | Events with title, date, description, images, location |
| `team` | Team members with name, role, program, social links |
| `gallery` | Photo albums with cover image and gallery |
| `siteSettings` | Global site configuration |

---

## 🌐 Deployment

> **📖 Complete deployment guide: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

### Quick Steps

1. **Set up Sanity CMS first** (required for content)
2. Push your code to GitHub
3. Import the project in Vercel
4. Add environment variables
5. Deploy!

### Order of Operations

**IMPORTANT:** Follow this order:
1. Sanity CMS Setup ← **Do this first!**
2. Local Environment Setup
3. Local Testing
4. Prepare for Deployment
5. Deploy to Vercel
6. Post-Deployment Configuration
7. Add Content

See **[QUICK_START.md](./QUICK_START.md)** for checklist or **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for detailed instructions.

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, values, events preview, campus info |
| About | `/about` | Mission, Sikh philosophy, values |
| Events | `/events` | Upcoming and past events |
| Event Detail | `/events/[slug]` | Individual event with gallery |
| Team | `/team` | Current and past executives |
| Gallery | `/gallery` | Photo albums |
| Gallery Detail | `/gallery/[slug]` | Album with lightbox viewer |
| Contact | `/contact` | Contact info, join form |
| Join | `/join` | Redirects to membership form |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://framer.com/motion/)
- **CMS:** [Sanity](https://sanity.io/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Icons:** [React Icons](https://react-icons.github.io/)

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- SSA Sheridan Executive Team
- Sheridan College
- The Sikh community

---

**ੴ ਸਰਬੱਤ ਦਾ ਭਲਾ** - May everyone prosper

Built with ❤️ by SSA Sheridan

