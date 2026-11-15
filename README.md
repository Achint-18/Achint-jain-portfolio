# Achint Jain — Personal Portfolio Website

A premium, production-quality personal portfolio website for **Achint Jain**, Computer Science & Engineering undergraduate from Rajasthan, India. Designed and built with a modern AI startup & high-end developer aesthetic.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![SEO](https://img.shields.io/badge/SEO-Optimized-emerald?style=flat-square)

---

## 🌟 Positioning & Identity

- **Name**: Achint Jain
- **Primary Title**: Computer Science Student | AI/ML Enthusiast
- **Supporting Positioning**: *Building intelligent products that solve real-world problems.*
- **Alternative Positioning**: *Computer Science student exploring AI/ML and building practical Generative AI applications.*
- **Location**: Rajasthan, India
- **Education**: B.Tech in Computer Science & Engineering, University College of Engineering, Banswara (Govind Guru Tribal University - GGTU), 2024–2028 (Expected: 2028).
- **Verified Resume CGPA**: 7.30 / 10 (Documented in configuration; user noted 8.5/10 ongoing semester target).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom futuristic dark theme with glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: CSS transitions, subtle canvas-driven AI constellation nodes, respecting `prefers-reduced-motion`

### Directory Structure
```
achint-jain-portfolio/
├── app/
│   ├── globals.css          # Dark-first glassmorphism, responsive styles
│   ├── layout.tsx           # Metadata, OpenGraph, JSON-LD Schema.org
│   ├── page.tsx             # Main page composing all sections & modals
│   ├── robots.ts            # Dynamic robots.txt handler
│   └── sitemap.ts           # Dynamic sitemap.xml handler
├── components/
│   ├── ChessWidget.tsx      # Interactive tactical micro-board
│   ├── CommandPalette.tsx   # Cmd/Ctrl+K interactive command bar
│   ├── Footer.tsx           # Minimalist footer
│   ├── HeroVisual.tsx       # Canvas AI constellation & node visual
│   ├── Navbar.tsx           # Sticky blurred navigation with scroll state
│   ├── ProjectModal.tsx     # Deep-dive architecture modal
│   ├── ResumeModal.tsx      # In-browser resume viewer & downloader
│   └── ScrollProgress.tsx   # Top progress line
├── data/
│   ├── portfolio.ts         # Verified projects, skills, education, certs
│   └── siteConfig.ts        # Domain-agnostic metadata configuration
└── sections/
    ├── AboutSection.tsx
    ├── CertificationsSection.tsx
    ├── ChessSection.tsx
    ├── ContactSection.tsx
    ├── EducationSection.tsx
    ├── ExperienceSection.tsx
    ├── HeroSection.tsx
    ├── ProjectsSection.tsx
    └── SkillsSection.tsx
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- pnpm (recommended) or npm

### Installation & Run
```bash
# Navigate to the project directory
cd achint-jain-portfolio

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build the optimized production bundle
pnpm build

# Start the production server
pnpm start
```

---

## ⚡ Deployment to Vercel

The portfolio is architected to be completely domain-independent. You can deploy it to Vercel within minutes:

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production portfolio"
   git remote add origin https://github.com/Achint-18/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **Deploy**.
4. (Optional) Set the environment variable:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` (or your `.vercel.app` URL)

---

## 🔍 Google Search Console & SEO Setup

The website implements comprehensive technical SEO so that Google understands who Achint Jain is.

### Search Intent Targets
- `Achint Jain`
- `Achint Jain portfolio`
- `Achint Jain AI`
- `Achint Jain AI/ML`
- `Achint Jain developer`
- `Achint Jain Computer Science`
- `Achint Jain Rajasthan`

### Steps to Index with Google Search Console:
1. **Deploy the Site**: Ensure your Vercel deployment or custom domain is live and accessible.
2. **Add Property**:
   - Open [Google Search Console](https://search.google.com/search-console).
   - Click **Add Property** and enter your production URL (e.g. `https://achint-jain.vercel.app`).
3. **Verify Ownership**:
   - Choose HTML tag or DNS verification. If using HTML tag, add the verification code to `app/layout.tsx` under `<head>`.
4. **Submit Sitemap**:
   - In Google Search Console, navigate to the **Sitemaps** tab in the sidebar.
   - Enter `sitemap.xml` and click **Submit**.
   - Your sitemap is dynamically generated at `https://your-domain.com/sitemap.xml`.
5. **Inspect Homepage & Request Indexing**:
   - Enter your homepage URL into the top search bar (**URL Inspection**).
   - Click **Request Indexing**.

*(Note: Indexing typically takes 24 to 72 hours depending on Googlebot's crawl schedule).*

---

## 🛡️ Fact-Checking & Verified Information Policy

- **No Fabricated Employment**: The portfolio highlights real hands-on project engineering and Smart India Hackathon participation.
- **No Fabricated Metrics**: All project impact statements are qualitative and defensible.
- **Accurate Social Links**: Configured with verified GitHub (`https://github.com/Achint-18`) and verified email (`jachint85@gmail.com`).
- **CGPA Verification**: Configured to 7.30 / 10 from verified resume records. Can be easily updated in `data/portfolio.ts` once officially verified on university transcripts.

---

## 📄 License
MIT © 2026 Achint Jain
