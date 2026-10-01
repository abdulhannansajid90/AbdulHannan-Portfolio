import React from 'react';
import { writings } from '@/content/writing';
import { Reveal } from '@/components/ui/Reveal';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Writing() {
  if (!writings || writings.length === 0) {
    return null;
  }

  return (
    <section id="writing" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky 3-column mono label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="mono-label block">(05) Writing</span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mt-2">
                Articles &amp; Notes
              </h2>
            </div>
          </div>

          {/* 9 columns content */}
          <div className="lg:col-span-9 space-y-8">
            <Reveal>
              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {writings.map((post) => (
                  <article key={post.slug} className="py-6 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <h3 className="font-semibold text-lg text-[var(--ink)]">
                        {post.url ? (
                          <ExternalLink href={post.url}>{post.title}</ExternalLink>
                        ) : (
                          post.title
                        )}
                      </h3>
                      <span className="font-mono text-xs text-[var(--muted)] shrink-0">
                        {post.date}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {post.summary}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
