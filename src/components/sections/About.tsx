import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';
import { getAssetPath } from '@/lib/utils';

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
      desc: 'Active in tech communities through workshops, hackathons and collaborative projects in the AI/Gen AI space.',
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
            {/* Editorial Portrait Card */}
            <Reveal>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md shadow-sm hover:border-[var(--accent)]/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-300 max-w-xl">
                {/* Name Badge */}
                <div className="relative group cursor-default shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
                  <div className="relative px-5 py-4 bg-[var(--surface)] border border-[var(--line)] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#C084FC]">
                      AH
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="mono-label text-[11px] text-[var(--accent)] font-semibold tracking-wider">
                    Abdul Hannan &middot; Profile
                  </span>
                  <h3 className="font-semibold text-lg text-[var(--ink)]">
                    Student &amp; Full-Stack AI Engineer
                  </h3>
                  <p className="text-xs text-[var(--muted)] font-mono">
                    Institute of Space Technology, Islamabad &middot; Class of 2029
                  </p>
                </div>
              </div>
            </Reveal>

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
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md shadow-sm p-6 font-mono text-xs sm:text-sm">
                <span className="mono-label block text-[var(--accent)] mb-4 font-semibold tracking-wider">
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
                <span className="mono-label block mb-6 text-[var(--accent)] font-semibold tracking-wider">Approach</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {approachItems.map((item, idx) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md shadow-sm hover:border-[var(--accent)]/50 hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-base text-[var(--ink)]">
                            {item.title}
                          </h3>
                          <span className="font-mono text-xs text-[var(--accent)] font-bold">
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
