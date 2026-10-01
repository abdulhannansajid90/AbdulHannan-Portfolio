import React from 'react';
import { siteConfig } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';

import Image from 'next/image';

export function Hero() {
  return (
    <section id="top" className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--line)] overflow-hidden">
      {/* Subtle Ambient Aura */}
      <div className="ambient-aura absolute inset-0 pointer-events-none -z-10" />

      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div>
          {/* Profile Picture & Live Status Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="relative group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-[var(--line)] via-[var(--accent)] to-[var(--line)]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--surface)]">
                  <Image
                    src="/avatar.webp"
                    alt={siteConfig.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
              {/* Pulsing online status indicator */}
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[var(--bg)] p-0.5 flex items-center justify-center">
                <span className="w-full h-full rounded-full bg-[var(--accent)] relative">
                  <span className="animate-beacon-ping absolute inset-0 rounded-full bg-[var(--accent)] opacity-75" />
                </span>
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] mb-1">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0 animate-pulse" />
                <span>Open to internships &amp; collaborations</span>
              </div>
              <p className="mono-label text-[var(--muted)] font-medium">
                {siteConfig.kicker}
              </p>
            </div>
          </div>

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
