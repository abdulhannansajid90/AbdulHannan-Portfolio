'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { writings } from '@/content/writing';
import { ThemeToggle } from './ThemeToggle';
import { ArrowUpRightIcon } from '@/components/ui/icons';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[var(--bg)] transition-all duration-200 ${
        scrolled
          ? 'border-b border-[var(--line)] py-3 shadow-[0_1px_0_0_var(--line)]'
          : 'border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/#top"
          className="text-base sm:text-lg font-semibold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none"
        >
          {siteConfig.name}
        </Link>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium tracking-tight text-[var(--muted)]"
          >
            <Link
              href="/#work"
              className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              Work
            </Link>
            <Link
              href="/#about"
              className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              About
            </Link>
            <Link
              href="/#background"
              className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              Background
            </Link>
            <Link
              href="/#toolbox"
              className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              Toolbox
            </Link>
            {writings.length > 0 && (
              <Link
                href="/#writing"
                className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
              >
                Writing
              </Link>
            )}
            <Link
              href="/#contact"
              className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Optional Resume Button (only rendered if siteConfig.resumeUrl is set) */}
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-mono font-medium tracking-wider uppercase bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-opacity"
              >
                <span>Resume</span>
                <ArrowUpRightIcon size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
