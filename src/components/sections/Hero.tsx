import React from 'react';
import { siteConfig } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';

export function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div>
          {/* Status chip with accent dot */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] mb-6">
            <span
              className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0 animate-pulse"
              aria-hidden="true"
            />
            <span>Open to internships &amp; collaborations</span>
          </div>

          {/* Mono kicker */}
          <p className="mono-label mb-4 text-[var(--muted)] font-medium">
            {siteConfig.kicker}
          </p>

          {/* H1 Heading */}
          <h1 className="hero-title text-[var(--ink)] mb-6 max-w-4xl">
            I build AI-powered apps and make them easy to understand.
          </h1>

          {/* Subheading: max 2 sentences */}
          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed body-measure mb-10">
            GDG on Campus member (AI/Gen AI) shipping full-stack projects with agentic AI. I&apos;m growing into Developer Advocacy by building, documenting and teaching in community.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium tracking-tight bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-opacity focus-visible:outline-none"
            >
              See my work &darr;
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium tracking-tight bg-transparent text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>

          {/* Hairline meta row with 3 mono items */}
          <div className="pt-8 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">&bull;</span>
              <span>Islamabad, PK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">&bull;</span>
              <span>BS Computer Science, IST</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">&bull;</span>
              <span>AI / Full-stack / Dev Advocacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
