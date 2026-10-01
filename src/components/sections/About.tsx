import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  const currentlyItems = [
    { label: 'Learning', value: 'advanced AI/ML systems, agentic AI workflows' },
    { label: 'Building', value: 'full-stack apps powered by intelligent agents' },
    { label: 'Exploring', value: 'generative AI, LLM tooling, data-driven products' },
    { label: 'Open to', value: 'internships, AI/ML projects, full-stack collaborations' },
  ];

  const approachItems = [
    {
      title: 'Build',
      desc: 'Full-stack apps with Next.js, Node.js and Python, plus agentic AI workflows that automate real tasks.',
    },
    {
      title: 'Explain',
      desc: 'Clear READMEs and step-by-step docs, written so others can run and learn from the work.',
    },
    {
      title: 'Community',
      desc: 'Active in GDG on Campus at IST through workshops, hackathons and community projects in the AI/Gen AI track.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky 3-column mono label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="mono-label block">(02) About</span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mt-2">
                Perspective
              </h2>
            </div>
          </div>

          {/* 9 columns content on the right */}
          <div className="lg:col-span-9 space-y-12">
            {/* Optional Avatar */}
            {siteConfig.avatar && (
              <Reveal>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[var(--line)]">
                  <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}

            {/* Bio */}
            <Reveal>
              <div className="space-y-4 text-base sm:text-lg text-[var(--ink)] leading-relaxed body-measure">
                <p>
                  I&apos;m a Computer Science student at the Institute of Space Technology in Islamabad, building a strong foundation in AI, Python-based data science and full-stack development.
                </p>
                <p className="text-[var(--muted)]">
                  I&apos;m IBM-certified in Python for Data Science, AI &amp; Development, and an active member of Google Developer Groups on Campus (AI/Gen AI track). Most recently I built an agentic AI system at a GDGoC hackathon that automates real-world appointment booking.
                </p>
              </div>
            </Reveal>

            {/* "Currently" Mono Table */}
            <Reveal>
              <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 font-mono text-xs sm:text-sm">
                <span className="mono-label block text-[var(--muted)] mb-4 font-semibold">
                  Currently
                </span>
                <div className="divide-y divide-[var(--line)]">
                  {currentlyItems.map((item) => (
                    <div
                      key={item.label}
                      className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                    >
                      <span className="w-24 shrink-0 font-medium text-[var(--ink)] uppercase tracking-wider text-xs">
                        {item.label}:
                      </span>
                      <span className="text-[var(--muted)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* "Approach" 3 Columns */}
            <Reveal>
              <div>
                <span className="mono-label block mb-6">Approach</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {approachItems.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-base text-[var(--ink)]">
                            {item.title}
                          </h3>
                          <span className="font-mono text-xs text-[var(--muted)]">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
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
