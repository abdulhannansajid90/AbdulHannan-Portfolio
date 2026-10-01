import React from 'react';

interface ProjectCoverProps {
  index: string;
  title: string;
  category?: string;
  className?: string;
}

export function ProjectCover({
  index,
  title,
  category,
  className = '',
}: ProjectCoverProps) {
  return (
    <div
      className={`w-full aspect-[16/10] overflow-hidden bg-[var(--surface)] border-b border-[var(--line)] flex items-center justify-center relative select-none ${className}`}
    >
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-hidden="true"
      >
        <defs>
          {/* Faint grid pattern */}
          <pattern
            id={`grid-${index}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--line)"
              strokeWidth="0.75"
              strokeOpacity="0.8"
            />
          </pattern>
        </defs>

        {/* Background Fill */}
        <rect width="100%" height="100%" fill="var(--surface)" />

        {/* Hairline Grid Overlay */}
        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />

        {/* Diagonal hairline accent line */}
        <line
          x1="0"
          y1="500"
          x2="800"
          y2="0"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Top bar with category and accent dot */}
        <g transform="translate(48, 56)">
          <circle cx="6" cy="6" r="4.5" fill="var(--accent)" />
          {category && (
            <text
              x="24"
              y="10"
              fill="var(--muted)"
              fontFamily="var(--font-mono)"
              fontSize="14"
              fontWeight="500"
              letterSpacing="0.1em"
            >
              {category.toUpperCase()}
            </text>
          )}
        </g>

        {/* Big Mono Index Number in the background */}
        <text
          x="752"
          y="440"
          textAnchor="end"
          fill="var(--line)"
          fontFamily="var(--font-mono)"
          fontSize="180"
          fontWeight="700"
          letterSpacing="-0.06em"
          opacity="0.9"
        >
          {index}
        </text>

        {/* Main Title */}
        <g transform="translate(48, 270)">
          <text
            x="0"
            y="0"
            fill="var(--ink)"
            fontFamily="var(--font-sans)"
            fontSize="38"
            fontWeight="600"
            letterSpacing="-0.03em"
          >
            {title}
          </text>
          <line
            x1="0"
            y1="24"
            x2="80"
            y2="24"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
