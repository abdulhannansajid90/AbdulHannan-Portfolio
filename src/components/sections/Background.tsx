import React from 'react';
import { experiences } from '@/content/experience';
import { educations, certifications } from '@/content/education';
import { Reveal } from '@/components/ui/Reveal';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Background() {
  return (
    <section id="background" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky 3-column mono label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="mono-label block">(03) Background</span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mt-2">
                Experience &amp; Education
              </h2>
            </div>
          </div>

          {/* 9 columns content on the right */}
          <div className="lg:col-span-9 space-y-16">
            {/* Experience Sub-block */}
            <Reveal>
              <div>
                <h3 className="mono-label block mb-6 text-[var(--ink)] font-semibold">
                  Experience
                </h3>
                <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {experiences.map((exp) => (
                    <div key={exp.title + exp.organization} className="py-6 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="font-semibold text-base sm:text-lg text-[var(--ink)]">
                          {exp.title}{' '}
                          <span className="text-[var(--muted)] font-normal">
                            &middot; {exp.organization}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[var(--muted)] shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Education Sub-block */}
            <Reveal>
              <div>
                <h3 className="mono-label block mb-6 text-[var(--ink)] font-semibold">
                  Education
                </h3>
                <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {educations.map((edu) => (
                    <div key={edu.degree} className="py-6 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                        <div className="font-semibold text-base sm:text-lg text-[var(--ink)]">
                          {edu.degree}{' '}
                          <span className="text-[var(--muted)] font-normal">
                            &middot; {edu.institution}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[var(--muted)] shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      {edu.details && (
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certifications & Honors Sub-block */}
            <Reveal>
              <div>
                <h3 className="mono-label block mb-6 text-[var(--ink)] font-semibold">
                  Certifications &amp; Honors
                </h3>
                <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <div>
                        <div className="font-semibold text-base text-[var(--ink)]">
                          {cert.title}{' '}
                          <span className="text-[var(--muted)] font-normal">
                            &middot; {cert.issuer}
                          </span>
                        </div>
                        {cert.credentialUrl && (
                          <div className="mt-1">
                            <ExternalLink
                              href={cert.credentialUrl}
                              className="text-xs font-mono"
                            >
                              Verify Credential ({cert.credentialId})
                            </ExternalLink>
                          </div>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[var(--muted)] shrink-0">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
