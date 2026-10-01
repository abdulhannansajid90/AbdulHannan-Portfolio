'use client';

import React, { useState } from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site';

type FilterType = 'all' | 'ai' | 'systems';

export function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') {
      return (
        p.tags.includes('Agentic AI') ||
        p.tags.includes('Next.js') ||
        p.tags.includes('React')
      );
    }
    if (activeFilter === 'systems') {
      return (
        p.tags.includes('C++') ||
        p.tags.includes('Networking') ||
        p.tags.includes('HTML5')
      );
    }
    return true;
  });

  const featuredProject = filteredProjects.find((p) => p.featured);
  const gridProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-[var(--line)]">
            <div>
              <span className="mono-label block mb-2">(01) Work</span>
              <h2 className="section-title text-[var(--ink)]">Selected Projects</h2>
            </div>
            
            {/* Interactive Filter Pills */}
            <div className="flex items-center gap-2 p-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[var(--ink)] text-[var(--bg)] font-semibold'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                All (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('ai')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  activeFilter === 'ai'
                    ? 'bg-[var(--ink)] text-[var(--bg)] font-semibold'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                AI &amp; Web (4)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('systems')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  activeFilter === 'systems'
                    ? 'bg-[var(--ink)] text-[var(--bg)] font-semibold'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                Systems (2)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Featured Project */}
        {featuredProject && (
          <Reveal className="mb-8 sm:mb-12">
            <ProjectCard project={featuredProject} index={0} />
          </Reveal>
        )}

        {/* Remaining Projects in 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {gridProjects.map((project, idx) => (
            <Reveal key={project.slug} delayMs={idx * 50}>
              <ProjectCard project={project} index={featuredProject ? idx + 1 : idx} />
            </Reveal>
          ))}
        </div>

        {/* Bottom GitHub Link */}
        <Reveal className="pt-6 flex justify-center sm:justify-start">
          <ExternalLink
            href={siteConfig.github}
            className="text-sm font-mono tracking-wide text-[var(--ink)] hover:text-[var(--accent-ink)] inline-flex items-center gap-1.5"
          >
            All repositories on GitHub
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
