import React from 'react';
import { ArrowUpRightIcon } from './icons';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = '',
  showIcon = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 text-[var(--accent-ink)] hover:underline underline-offset-4 focus-visible:rounded-sm transition-colors duration-200 ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRightIcon
          size={14}
          className="arrow-indicator inline-block shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
