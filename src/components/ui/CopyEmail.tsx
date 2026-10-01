'use client';

import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className = '' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wide bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink)] transition-colors duration-200 cursor-pointer"
        aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
        title="Copy email to clipboard"
      >
        {copied ? (
          <>
            <CheckIcon size={14} className="text-[var(--accent)]" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <CopyIcon size={14} />
            <span>Copy</span>
          </>
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
