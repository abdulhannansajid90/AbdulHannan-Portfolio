'use client';

import React, { useEffect, useRef } from 'react';

// Single shared IntersectionObserver instance
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof window === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );
  }
  return sharedObserver;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = getSharedObserver();
    if (observer) {
      observer.observe(el);
    } else {
      el.classList.add('revealed');
    }

    return () => {
      if (el && observer) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
