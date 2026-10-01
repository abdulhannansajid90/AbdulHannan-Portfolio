# Abdul Hannan — Personal Portfolio

Minimal, fast, accessible portfolio website for **Abdul Hannan**, Computer Science student at the Institute of Space Technology (IST), Islamabad, applying for the Developer Advocate role at Google Developer Groups on Campus (GDGoC).

Built with **Next.js 14 (App Router)**, **TypeScript (strict)**, and **Tailwind CSS v4** with pure static HTML export (`output: 'export'`).

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js 20+ (Node 24 tested)
- npm 10+

### 2. Installation
```bash
git clone https://github.com/abdulhannansajid90/portfolio.git
cd portfolio
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Static Build & Local Preview
```bash
npm run build
node scripts/serve-out.mjs
```
The static HTML export will be generated in `/out` and served at [http://127.0.0.1:3000](http://127.0.0.1:3000).

---

## 📝 How to Update Content

All content is cleanly separated from UI code in typed data files inside `src/content/`:

### 1. How to Add or Edit a Project
Open [`src/content/projects.ts`](src/content/projects.ts). Add an entry conforming to the `Project` type:
```ts
{
  slug: 'my-new-project',
  title: 'My New Project',
  summary: 'A one-line description communicating value.',
  featured: false,
  status: 'Live', // 'Live' | 'In progress' | 'Completed'
  period: 'Oct 2026',
  role: 'Full-stack Developer',
  tags: ['Next.js', 'AI', 'Tailwind'], // Max 4 pills shown on card
  overview: 'Detailed 2-3 sentence overview for the case study.',
  features: [
    'Key architecture feature 1',
    'Key architecture feature 2'
  ],
  links: {
    live: 'https://example.com',
    code: 'https://github.com/abdulhannansajid90/repo'
  },
  createdAt: '2026-10-01T00:00:00Z'
}
```
- If a project doesn't have a screenshot, an adaptive typographic SVG cover is automatically rendered with zero layout shift.
- To use a custom screenshot, place a WebP file in `public/projects/my-project.webp` and set `coverImage: '/projects/my-project.webp'`.

### 2. How to Add Writing
By default, the Writing section and its navigation link are hidden when no articles exist.
To publish an article, open [`src/content/writing.ts`](src/content/writing.ts) and add an item:
```ts
export const writings: Writing[] = [
  {
    slug: 'agentic-ai-hackathon',
    title: 'Architecting Agentic Workflows for Doctor Scheduling',
    date: 'Oct 2026',
    summary: 'A deep dive into multi-agent systems built during the GDGoC MTM Hackathon.',
    url: 'https://dev.to/abdulhannansajid90/article' // Optional external URL
  }
];
```

### 3. How to Add a Resume
1. Place your PDF resume in `public/resume.pdf`.
2. In [`src/content/site.ts`](src/content/site.ts), update:
```ts
export const siteConfig: SiteConfig = {
  ...
  resumeUrl: '/resume.pdf',
};
```
The "Resume" button will automatically appear in the header.

### 4. How to Add an Avatar Photo
1. Place your headshot in `public/avatar.webp`.
2. In [`src/content/site.ts`](src/content/site.ts), update:
```ts
export const siteConfig: SiteConfig = {
  ...
  avatar: '/avatar.webp',
};
```
The photo will smoothly render in the About section.

---

## 🎨 Design System: "Quiet Editorial"

- **Typography**: Self-hosted Geist Variable & Geist Mono Variable via `@fontsource-variable`.
- **Palette**: Minimalist slate & ink with a single Google Blue accent (`#1A73E8` light / `#8AB4F8` dark).
- **Themes**: Zero-flash light and dark modes with persistent `localStorage` and `prefers-color-scheme` support.
- **Accessibility**: Strict WCAG 2.2 AA compliance, visible 2px focus ring, skip-to-content link, semantic landmarks, single `<h1>`, and `prefers-reduced-motion` overrides.
- **Performance**: 100% static HTML export, zero external fonts or CDN requests at runtime.

---

## 📦 Deployment

See [`docs/DEPLOY.md`](docs/DEPLOY.md) for step-by-step guides for **Vercel** and **Netlify**.
