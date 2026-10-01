import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] md:text-xs font-mono tracking-wider uppercase bg-[var(--surface)] text-[var(--muted)] border border-[var(--line)] ${className}`}
    >
      {children}
    </span>
  );
}
