import React from 'react';
import { ProjectStatus } from '@/types';

interface StatusChipProps {
  status: ProjectStatus | string;
  className?: string;
  showDot?: boolean;
}

export function StatusChip({ status, className = '', showDot = true }: StatusChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] md:text-xs font-mono font-medium tracking-wide bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] ${className}`}
    >
      {showDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{status}</span>
    </span>
  );
}
