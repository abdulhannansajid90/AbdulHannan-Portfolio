# Deployment Guide

This portfolio website is built with Next.js App Router configured for pure static HTML export (`output: 'export'`), producing a zero-server, high-performance static bundle in the `out/` directory.

Both **Vercel** and **Netlify** are supported out of the box with zero configuration required.

---

## 1. Deploying to Vercel (Recommended)

### Step 1: Push your code to GitHub
Push your local repository to your GitHub account (e.g., `https://github.com/your-username/portfolio`).

### Step 2: Import Project in Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Locate your portfolio repository in the list and click **"Import"**.

### Step 3: Configure Project Settings
Vercel automatically detects Next.js:
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `out` (auto-detected via `next.config.mjs`)
- **Environment Variables**:
  - Add `NEXT_PUBLIC_SITE_URL` = `https://your-custom-domain.com` (or leave empty to let Vercel assign its own URL).

### Step 4: Deploy & Custom Domain
1. Click **"Deploy"**. The build completes in ~30 seconds.
2. Under **Project Settings** &rarr; **Domains**, add your custom domain (e.g. `abdulhannan.dev`).
3. Set the DNS `CNAME` or `A` records according to Vercel's instructions.

### How to Re-deploy
Any push to your `main` branch automatically triggers an atomic production deployment.

---

## 2. Deploying to Netlify

The repository includes a ready-to-use `netlify.toml` file.

### Step 1: Import Project in Netlify
1. Log in to [netlify.com](https://app.netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select **GitHub** and authorize Netlify to access your repository.
4. Select your portfolio repository.

### Step 2: Build & Publish Settings
Netlify will automatically read `netlify.toml`:
- **Base directory**: (leave blank / root)
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `20` (specified in `netlify.toml` and `.nvmrc`)

### Step 3: Environment Variables
Under **Site configuration** &rarr; **Environment variables**:
- Add `NEXT_PUBLIC_SITE_URL` = `https://your-site.netlify.app` or your custom domain.

### Step 4: Deploy & Custom Domain
1. Click **"Deploy site"**.
2. Under **Domain management**, add your custom domain.

### How to Re-deploy
Pushes to `main` trigger automatic atomic builds and rollbacks are supported with one click.

---

## 3. Pre-Launch Checklist

Before sharing your portfolio with reviewers:
- [ ] **Resume**: Drop your PDF file into `public/resume.pdf` and set `resumeUrl: '/resume.pdf'` in `src/content/site.ts`.
- [ ] **Avatar** (Optional): Add your profile photo into `public/avatar.webp` and update `avatar: '/avatar.webp'` in `src/content/site.ts`.
- [ ] **SmartDoc Connect Links**: When your GDGoC hackathon repository or live demo is public, add `live` and `code` links in `src/content/projects.ts`.
- [ ] **Domain**: Set `NEXT_PUBLIC_SITE_URL` in your hosting dashboard so canonical URLs and Open Graph tags point to your production URL.
- [ ] **Test External Links**: Verify your LinkedIn, GitHub, and email links are active.
