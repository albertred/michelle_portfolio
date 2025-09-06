# Michelle Lu - Portfolio Website

A modern, pink-themed portfolio website built with Next.js, featuring a memorable landing animation and expandable project/experience cards.

## 🌟 Features

- **Animated Landing**: Canvas-based "rain melt" effect that reveals the main portfolio
- **Project Blog Pages**: Detailed project pages with comprehensive case studies
- **Expandable Experience Cards**: Smooth animations for experience details  
- **Mixed Content Strategy**: Projects navigate to dedicated pages, experience expands inline
- **Pink Theme**: Soft, modern design with custom color palette
- **Responsive Design**: Works beautifully on all devices
- **Accessibility**: Built with keyboard navigation and screen reader support
- **Blog Support**: MDX-powered blog system
- **Performance**: Optimized for speed with Next.js 15

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Content**: MDX for blog posts
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 🎨 Design System

### Colors
- Background: `#FFEAF2` (light pink)
- Accent: `#eac0d0ff` (soft pink)
- Accent Strong: `#E85C91` (bright pink)
- Text: `#1E1E24` (dark ink)
- Text Muted: `#5B5B66` (muted ink)
- Card: `#FFF6FA` (card background)
- Border: `#F9D9E7` (soft border)

### Typography
- Headings: System UI font stack
- Body: System UI font stack
- Spacing: 8px scale
- Cards: `rounded-2xl` with soft shadows

## 🏗️ Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Landing → Main portfolio
│   │   ├── projects/       # Project pages
│   │   │   ├── page.tsx    # Projects index
│   │   │   └── [slug]/     # Individual project pages
│   │   ├── blog/           # Blog index and posts
│   │   └── about/          # About page
│   └── components/         # Reusable components
│       ├── LandingCanvas.tsx   # Rain animation
│       ├── MainPortfolio.tsx   # Main layout
│       └── Card.tsx           # Smart expandable/navigating cards
├── content/                # Content files
│   ├── projects/          # Project data (JSON)
│   ├── experience/        # Experience data (JSON)
│   └── blog/             # Blog posts (MDX)
└── public/               # Static assets
```

## 🏃‍♀️ Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding Content

### Projects
Create JSON files in `content/projects/` with this structure:
```json
{
  "title": "Project Name",
  "period": "Jan 2025 - Present",
  "summary": "Brief description",
  "bullets": ["Detailed point 1", "Detailed point 2"],
  "tech": ["React", "TypeScript"],
  "links": {
    "github": "https://github.com/...",
    "live": "https://project-url.com"
  },
  "images": ["screenshot1.png", "screenshot2.png"]
}
```

### Experience
Create JSON files in `content/experience/` with this structure:
```json
{
  "role": "Software Developer",
  "org": "Company Name",
  "period": "May 2024 - Aug 2024",
  "impact": "Brief impact statement",
  "bullets": ["Achievement 1", "Achievement 2"],
  "tech": ["Python", "Django"]
}
```

### Blog Posts
Create MDX files in `content/blog/` with frontmatter:
```mdx
---
title: "Blog Post Title"
date: "2025-01-15"
excerpt: "Brief description of the post"
---

# Your blog content here

Write in Markdown/MDX format...
```

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. **Connect to Vercel**
   - Push to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

2. **Custom Domain** (optional)
   - Add custom domain in Vercel settings
   - Update DNS records

## 🛠️ Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📈 Performance & Accessibility

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: < 150KB JS on first load
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and landmarks
- **Motion**: Respects `prefers-reduced-motion`
- **Color Contrast**: AA compliance

---

Built with ❤️ by Michelle Lu