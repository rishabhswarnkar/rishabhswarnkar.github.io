# BuilderEdge Landing Page

A modern, responsive landing page for **BuilderEdge**—an enterprise SaaS that combines warranty management (WarrantyPro) and upgrade-sales automation (OptionOptimizer) for large U.S. homebuilders.

## 🚀 Live Demo

Visit the live site: [https://rishabhswarnkar.github.io](https://rishabhswarnkar.github.io)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS 3.x
- **Icons**: lucide-react
- **Font**: Inter (Google Fonts)
- **Deployment**: GitHub Pages (static export)

## 🎨 Brand Guidelines

- **Primary Colors**: 
  - Navy `#0A3C66` (headings/background accents)
  - Gold `#F6A921` (CTAs)
- **Font**: Inter, fallback sans-serif
- **Tone**: Enterprise-trust + innovative tech

## 📋 Page Sections

1. **Hero** - Main headline with CTAs
2. **Trusted Logos** - Homebuilder logos (Lennar, Toll Brothers, KB Home, Kiper)
3. **Problem-Solution Split** - Key pains vs. BuilderEdge solutions
4. **Feature Grid (2×2)** - WarrantyPro, Trade Scheduler, OptionOptimizer, Live SLA Widget
5. **ROI Calculator** - Interactive calculator with upgrade revenue and warranty savings
6. **Testimonial** - Customer quote
7. **Call to Action** - Demo booking
8. **Footer** - Links and copyright

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishabhswarnkar/rishabhswarnkar.github.io.git
   cd builderedge-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## 🌐 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - The GitHub Actions workflow will automatically build and deploy
2. **Manual deployment** - Go to Actions tab and run "Deploy to GitHub Pages" workflow

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `out/` directory to your web server

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
└── components/
    ├── Hero.tsx             # Hero section with main headline
    ├── TrustedLogos.tsx     # Homebuilder logos
    ├── ProblemSolution.tsx  # Problems vs solutions
    ├── FeatureGrid.tsx      # 2x2 feature grid
    ├── ROICalculator.tsx    # Interactive ROI calculator
    ├── Testimonial.tsx      # Customer testimonial
    ├── CTA.tsx              # Call to action
    └── Footer.tsx           # Footer with links
```

## 🧮 ROI Calculator

The interactive calculator uses these formulas:
- **Upgrade Revenue**: `homes × avgUpgrades × 1500 × 0.12`
- **Warranty Savings**: `homes × 300`

## 🎯 Features

- ✅ Fully responsive design
- ✅ Interactive ROI calculator
- ✅ Modern UI with smooth animations
- ✅ SEO optimized
- ✅ Lighthouse score ≥ 90
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ GitHub Pages deployment ready

## 📝 License

© 2025 BuilderEdge. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions about BuilderEdge, contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
