import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { Tag } from './Tag';
import { StatusChip } from './StatusChip';
import { ExternalLink } from './ExternalLink';
import { ProjectCover } from './ProjectCover';
import { ArrowUpRightIcon } from './icons';
import { getAssetPath } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const indexStr = String(index + 1).padStart(2, '0');
  const isFeatured = project.featured;

  const mainLink = project.links.live || project.links.code || project.links.frontend || project.links.backend || '#';
  const hasLink = mainLink !== '#';

  return (
    <article
      className={`project-card relative group rounded-2xl border border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-sm ${
        isFeatured
          ? 'grid grid-cols-1 lg:grid-cols-12 gap-0'
          : 'flex flex-col h-full'
      }`}
    >
      {/* Cover Media Section */}
      <div
        className={`overflow-hidden relative ${
          isFeatured ? 'lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[var(--line)]' : 'border-b border-[var(--line)]'
        }`}
      >
        <div className="project-cover-inner w-full h-full">
          {project.coverImage ? (
            <div className="w-full aspect-[16/10] relative bg-[var(--surface)]">
              <Image
                src={getAssetPath(project.coverImage)}
                alt={`${project.title} interface preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={isFeatured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                priority={index === 0}
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
      </div>

      {/* Content Section */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between ${
          isFeatured ? 'lg:col-span-5' : 'flex-1'
        }`}
      >
        <div>
          {/* Header row: Index & Status */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="mono-label font-bold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              ({indexStr})
            </span>
            <StatusChip status={project.status} />
          </div>

          {/* Title with stretched link */}
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mb-2.5 flex items-center justify-between group-hover:text-[var(--accent)] transition-colors">
            {hasLink ? (
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="after:absolute after:inset-0 after:z-10 focus:outline-none"
              >
                {project.title}
              </a>
            ) : (
              <span className="after:absolute after:inset-0 after:z-10 focus:outline-none">
                {project.title}
              </span>
            )}
            <ArrowUpRightIcon
              size={18}
              className="arrow-indicator text-[var(--muted)] group-hover:text-[var(--accent)] shrink-0 transition-transform duration-200"
            />
          </h3>

          {/* One-line / concise summary */}
          <p className="text-[var(--muted)] text-sm sm:text-[15px] leading-relaxed mb-6 line-clamp-3">
            {project.summary}
          </p>

          {/* Tag Pills (max 4 on cards) */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {/* Action Link Row (relative z-20 to sit above stretched card link) */}
        <div className="relative z-20 pt-4 border-t border-[var(--line)] flex items-center justify-between gap-3 text-sm font-mono">
          <div className="flex items-center gap-3 flex-wrap">
            {project.links.live && (
              <ExternalLink href={project.links.live}>
                Live
              </ExternalLink>
            )}
            {project.links.code && (
              <ExternalLink href={project.links.code}>
                Code
              </ExternalLink>
            )}
            {project.links.frontend && (
              <ExternalLink href={project.links.frontend}>
                Frontend
              </ExternalLink>
            )}
            {project.links.backend && (
              <ExternalLink href={project.links.backend}>
                Backend
              </ExternalLink>
            )}
          </div>

          {hasLink && (
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-[var(--muted)] hover:text-[var(--ink)] transition-colors z-20 relative"
            >
              View Project &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
