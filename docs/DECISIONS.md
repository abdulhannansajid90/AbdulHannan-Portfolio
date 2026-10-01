# Architecture & Design Decisions

## 1. Verified vs. Unverified Facts

| Item | Source | Status | Decision / Handling |
| :--- | :--- | :--- | :--- |
| **Identity & Location** | GitHub, LinkedIn | Verified | Name: Abdul Hannan, Location: Islamabad, Pakistan, Student at Institute of Space Technology (IST). |
| **Email** | User specification | Verified | `abdulhannansajid90@gmail.com` |
| **GitHub Profile** | GitHub API | Verified | 8 public repositories found: `diasporagrid`, `Easyrent`, `frntend`, `bckend`, `LAN-IP-Identifier`, `ICT-project-01`, `abdulhannansajid90` (profile README), `MTMhackathon` (empty). |
| **Discovered Project: Easyrent** | GitHub API, package.json, Vercel | Verified | Added as real project #2 (created Aug 2026). Live URL `https://easyrent-seven.vercel.app` verified returning HTTP 200. |
| **SmartDoc Connect** | LinkedIn, User specification | Verified (details) | Hackathon project (MTM Hackathon at IST, May/Jun 2026) using Gemini API, React + Vite, Node.js/Express. Public repo/demo not active (`MTMHackathonfinal` is 404 / private). Per spec: links left empty, no placeholder text. |
| **Diaspora-Grid** | GitHub repo & package.json | Partially Verified | Repo exists, stack verified (Next.js, Prisma, SQLite, Auth.js, Google Generative AI). Live URL `https://diasporagrid.vercel.app` returned 404 (DEPLOYMENT_NOT_FOUND). Marked as Completed; live link omitted to avoid dead links; typographic SVG cover generated. |
| **EcoSort Campus App** | GitHub repos (`frntend`, `bckend`) | Partially Verified | Repos exist (`frntend`: React 18, Vite, Tailwind CSS; `bckend`: Express, Node.js, Anthropic API). Live URL `https://frntend-seven.vercel.app` returned 404 (DEPLOYMENT_NOT_FOUND). Marked as Completed per spec rule ("status Live if demo responds, else Completed"); live link omitted; code links preserved for both frontend and backend; typographic SVG cover generated. |
| **LAN Scanner** | GitHub repo (`LAN-IP-Identifier`) | Verified | C++ OOP LAN subnet scanner. Code link verified (HTTP 200). |
| **IST University Website** | GitHub repo (`ICT-project-01`) | Verified | University portal with HTML/CSS/JS. Code link verified (HTTP 200). |
| **Education: IST** | LinkedIn, User specification | Verified | BS Computer Science, Institute of Space Technology, Islamabad (Sep 2025 – Present / 2025–2029). |
| **Education: Intermediate** | LinkedIn, User specification | Verified | ICS, Punjab Group of Colleges, Gujrat (Aug 2023 – Jun 2025, Grade A). |
| **Education: Matriculation** | User specification | Verified | Dar-e-Arqam, Gujrat (Aug 2021 – Mar 2023). |
| **Certification: IBM Python** | LinkedIn, Coursera | Verified | IBM Certified: Python for Data Science, AI & Development (Jul 2026, Credential ID: FPBK8WTA4QGW). |
| **Certification: Google Launchpad Python** | User specification | Unverified on LinkedIn | Kept in records as listed in user prompt, flagged as self-reported. |
| **Experience: Fiverr** | LinkedIn conflict | Preferred LinkedIn | LinkedIn shows "Data Entry Specialist · Fiverr · Mar 2026 – Aug 2026". Prompt mentioned "Data Analyst (Freelance) · Fiverr · Dec 2025 – Jun 2026". Per rule "Prefer LinkedIn for titles and dates when they conflict", used title and dates aligned with verified profile. |
| **Experience: GDGoC IST** | LinkedIn, User specification | Verified | General Member, AI/Gen AI Track, Google Developer Groups on Campus at IST (Oct 2025 – Present). |
| **Competition: Master Code** | LinkedIn | Verified | Certificate of Participation in Master Code Coding Competition by AICP – Chapter IST. |

## 2. Design & Aesthetics Decisions
- **Direction**: "Quiet Editorial". Minimal, high-contrast, hairline grid aesthetic.
- **Palette**: Monochromatic slate/ink with single Google Blue accent (`#1A73E8` light / `#8AB4F8` dark) used strictly for focus rings, status indicators, active tabs, and link hover states. Text link contrast meets WCAG 2.2 AA (`#1557B0` on light).
- **Typography**: Geist and Geist Mono self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/geist-mono` with zero layout shift (`font-display: swap`).
- **Covers**:
  - Live screenshot captured for `Easyrent` (`public/projects/easyrent.webp`).
  - Typographic covers dynamically generated via SVG component `ProjectCover` for projects without an active live web URL (`smartdoc-connect`, `diasporagrid`, `ecosort`, `lan-scanner`, `ict-project-01`).
- **Zero dead links**: All external URLs verified via HTTP requests. Only live, valid destinations are linked.

## 3. Technical Architecture
- **Framework**: Next.js 14+ App Router with static export (`output: 'export'`).
- **Styling**: Tailwind CSS v4 CSS-first `@theme` configuration without legacy `tailwind.config.js`.
- **Zero-flash dark mode**: Inline theme initialization script in `<head>` inspecting `localStorage` and `prefers-color-scheme`.
- **Performance**: 0 KB external font downloads at runtime (bundled locally), CSS-only transitions, and unified single `IntersectionObserver` for scroll reveals.
