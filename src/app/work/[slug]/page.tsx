import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/content/projects';
import { StatusChip } from '@/components/ui/StatusChip';
import { Tag } from '@/components/ui/Tag';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { ProjectCover } from '@/components/ui/ProjectCover';
import { ArrowLeftIcon } from '@/components/ui/icons';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Abdul Hannan`,
      description: project.summary,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study`,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const indexStr = String(currentIndex + 1).padStart(2, '0');

  return (
    <main id="main-content" className="py-12 sm:py-20">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        {/* Back Link */}
        <div className="mb-10 sm:mb-14">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--ink)] transition-colors group"
          >
            <ArrowLeftIcon
              size={14}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span>Back to selected work</span>
          </Link>
        </div>

        {/* Case Study Article */}
        <article className="space-y-12 sm:space-y-16">
          {/* Header */}
          <header className="space-y-6 pb-8 border-b border-[var(--line)]">
            <div className="flex items-center gap-3">
              <span className="mono-label font-bold">({indexStr})</span>
              <StatusChip status={project.status} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--ink)]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed body-measure">
              {project.summary}
            </p>

            {/* Meta Row: period · role · status */}
            <div className="pt-6 border-t border-[var(--line)] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[var(--muted)]">
              <div>
                <span className="block text-[var(--ink)] font-semibold uppercase tracking-wider mb-1">
                  Timeline
                </span>
                <span>{project.period}</span>
              </div>
              <div>
                <span className="block text-[var(--ink)] font-semibold uppercase tracking-wider mb-1">
                  Role
                </span>
                <span>{project.role}</span>
              </div>
              <div>
                <span className="block text-[var(--ink)] font-semibold uppercase tracking-wider mb-1">
                  Status
                </span>
                <span className="text-[var(--ink)] font-medium">{project.status}</span>
              </div>
            </div>
          </header>

          {/* Cover Media */}
          <div className="rounded-2xl border border-[var(--line)] overflow-hidden bg-[var(--surface)]">
            {project.coverImage ? (
              <div className="w-full aspect-[16/10] relative">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} overview display`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1120px) 1120px, 100vw"
                />
              </div>
            ) : (
              <ProjectCover
                index={indexStr}
                title={project.title}
                category={project.tags[0]}
              />
            )}
          </div>

          {/* Case Study Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <section className="space-y-4">
                <h2 className="mono-label font-semibold text-[var(--ink)]">
                  Overview
                </h2>
                <p className="text-base sm:text-lg text-[var(--ink)] leading-relaxed">
                  {project.overview}
                </p>
              </section>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <section className="space-y-4">
                  <h2 className="mono-label font-semibold text-[var(--ink)]">
                    Key Features &amp; Architecture
                  </h2>
                  <ul className="space-y-3 font-mono text-xs sm:text-sm text-[var(--muted)]">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[var(--accent)] font-bold mt-0.5">&bull;</span>
                        <span className="text-[var(--ink)] leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Optional Reflection (renders ONLY if present in data) */}
              {project.reflection && (
                <section className="p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] space-y-3">
                  <h2 className="mono-label font-semibold text-[var(--ink)]">
                    What I Learned
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {project.reflection}
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Built With */}
              <div className="p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] space-y-4">
                <h2 className="mono-label font-semibold text-[var(--ink)]">
                  Built With
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {(project.allTags || project.tags).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              {/* Verified Links */}
              <div className="p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] space-y-4 font-mono text-sm">
                <h2 className="mono-label font-semibold text-[var(--ink)]">
                  Verified Links
                </h2>
                <div className="space-y-2">
                  {project.links.live && (
                    <div>
                      <ExternalLink href={project.links.live}>
                        Live Deployment
                      </ExternalLink>
                    </div>
                  )}
                  {project.links.code && (
                    <div>
                      <ExternalLink href={project.links.code}>
                        Source Repository
                      </ExternalLink>
                    </div>
                  )}
                  {project.links.frontend && (
                    <div>
                      <ExternalLink href={project.links.frontend}>
                        Frontend Repository
                      </ExternalLink>
                    </div>
                  )}
                  {project.links.backend && (
                    <div>
                      <ExternalLink href={project.links.backend}>
                        Backend Repository
                      </ExternalLink>
                    </div>
                  )}
                  {!project.links.live &&
                    !project.links.code &&
                    !project.links.frontend &&
                    !project.links.backend && (
                      <span className="text-xs text-[var(--muted)]">
                        Repository currently private; demo available upon request.
                      </span>
                    )}
                </div>
              </div>
            </aside>
          </div>

          {/* Next Project Footer */}
          <footer className="pt-12 border-t border-[var(--line)] flex items-center justify-between">
            <Link
              href="/#work"
              className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              &larr; All Projects
            </Link>

            <Link
              href={`/work/${nextProject.slug}/`}
              className="group inline-flex items-center gap-2 text-right"
            >
              <div>
                <span className="mono-label block text-[11px]">Next Project</span>
                <span className="text-sm sm:text-base font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title} &rarr;
                </span>
              </div>
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
