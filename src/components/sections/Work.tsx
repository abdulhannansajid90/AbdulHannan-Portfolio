import React from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site';

export function Work() {
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const gridProjects = projects.filter((p) => p.slug !== featuredProject.slug);

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[var(--line)]">
            <div>
              <span className="mono-label block mb-2">(01) Work</span>
              <h2 className="section-title text-[var(--ink)]">Selected Projects</h2>
            </div>
            <p className="text-sm text-[var(--muted)] max-w-md font-mono">
              Systems, web platforms, and agentic workflows built for hackathons, client problems, and open exploration.
            </p>
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
            <Reveal key={project.slug} delayMs={idx * 60}>
              <ProjectCard project={project} index={idx + 1} />
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
