'use client';

import React from 'react';
import { siteConfig } from '@/content/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[var(--line)] py-12 sm:py-16 text-sm text-[var(--muted)] font-mono">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />
          <span>&copy; {currentYear} {siteConfig.name} &middot; Islamabad, Pakistan</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--accent)] focus-visible:outline-none transition-colors duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
