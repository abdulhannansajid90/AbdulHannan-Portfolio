import React from 'react';
import { siteConfig } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';

import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export function Hero() {
  return (
    <section id="top" className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--line)] overflow-hidden">
      {/* Subtle Ambient Aura */}
      <div className="ambient-aura absolute inset-0 pointer-events-none -z-10" />

      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div>
          {/* Name + Status */}
          <div className="mb-8">
            {/* Large glowing name */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 leading-none">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC]"
                style={{ filter: 'drop-shadow(0 0 32px rgba(56,189,248,0.35))' }}
              >
                Abdul Hannan
              </span>
            </h2>

            {/* Small status + kicker below */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium tracking-wide bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] shadow-sm hover:border-[var(--accent)]/50 transition-colors backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 animate-pulse shadow-[0_0_8px_var(--accent)]" />
                <span>Open to internships &amp; collaborations</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[var(--muted)] font-medium uppercase">
                {siteConfig.kicker}
              </p>
            </div>
          </div>

          {/* H1 Heading */}
          <h1 className="hero-title text-[var(--ink)] mb-6 max-w-4xl">
            I build <span className="text-gradient">AI-powered apps</span> and make them easy to understand.
          </h1>

          {/* Subheading: max 2 sentences */}
          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed body-measure mb-10">
            Shipping full-stack projects with agentic AI. I&apos;m growing into Developer Advocacy by building, documenting and teaching in community.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium tracking-tight bg-[var(--ink)] text-[var(--bg)] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none"
            >
              See my work &darr;
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-medium tracking-tight bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none"
            >
              Get in touch
            </a>
          </div>

          {/* Hairline meta row with 3 mono items */}
          <div className="pt-8 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)] drop-shadow-[0_0_6px_var(--accent)]">&bull;</span>
              <span>Islamabad, PK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)] drop-shadow-[0_0_6px_var(--accent)]">&bull;</span>
              <span>BS Computer Science, IST</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)] drop-shadow-[0_0_6px_var(--accent)]">&bull;</span>
              <span>AI / Full-stack / Dev Advocacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
