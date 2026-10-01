'use client';

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@/components/ui/icons';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] flex items-center justify-center transition-colors duration-200 cursor-pointer"
      aria-label={
        mounted ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : 'Toggle color theme'
      }
      title="Toggle color theme"
    >
      {/* Icon with graceful fallback */}
      {mounted && theme === 'dark' ? (
        <SunIcon size={17} />
      ) : (
        <MoonIcon size={17} />
      )}
    </button>
  );
}
