import React from 'react';
import { siteConfig } from '@/content/site';
import { writings } from '@/content/writing';
import { Reveal } from '@/components/ui/Reveal';
import { CopyEmail } from '@/components/ui/CopyEmail';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/icons';

export function Contact() {
  const sectionNumber = writings.length > 0 ? '(06)' : '(05)';

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky 3-column mono label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="mono-label block">{sectionNumber} Contact</span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mt-2">
                Connect
              </h2>
            </div>
          </div>

          {/* 9 columns content on the right */}
          <div className="lg:col-span-9 space-y-10">
            <Reveal>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--ink)] max-w-2xl leading-tight">
                Let&apos;s <span className="text-gradient">build something</span> together.
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[var(--muted)] body-measure leading-relaxed">
                Open to internships, AI/ML projects and full-stack collaborations. Email is the fastest way to reach me.
              </p>
            </Reveal>

            {/* Email Contact Block */}
            <Reveal>
              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md shadow-sm hover:border-[var(--accent)]/50 hover:shadow-[0_12px_36px_rgba(56,189,248,0.12)] transition-all duration-300 space-y-4">
                <span className="mono-label block text-[var(--accent)] font-semibold tracking-wider">Direct Email</span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg sm:text-2xl font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <CopyEmail email={siteConfig.email} />
                </div>
              </div>
            </Reveal>

            {/* Social Channels */}
            <Reveal>
              <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-6 text-sm font-mono">
                <ExternalLink
                  href={siteConfig.github}
                  className="inline-flex items-center gap-2 text-[var(--ink)] hover:text-[var(--accent-ink)]"
                  showIcon={false}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <span className="text-[var(--muted)]">&rarr;</span>
                </ExternalLink>

                <ExternalLink
                  href={siteConfig.linkedin}
                  className="inline-flex items-center gap-2 text-[var(--ink)] hover:text-[var(--accent-ink)]"
                  showIcon={false}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <span className="text-[var(--muted)]">&rarr;</span>
                </ExternalLink>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-[var(--ink)] hover:text-[var(--accent-ink)] group"
                >
                  <MailIcon size={16} />
                  <span>Email</span>
                  <span className="text-[var(--muted)] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
