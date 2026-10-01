import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-[70vh] flex items-center justify-center py-20 px-6 sm:px-10"
    >
      <div className="max-w-md w-full text-center space-y-6">
        <span className="mono-label block">(404) Not Found</span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)]">
          Page not found.
        </h1>
        <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          The page or project you requested could not be located. It may have been moved or updated.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-mono font-medium tracking-wider uppercase bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-opacity focus-visible:outline-none"
          >
            Return to Homepage &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
