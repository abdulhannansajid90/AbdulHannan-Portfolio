import React from 'react';
import { skillGroups } from '@/content/skills';
import { Reveal } from '@/components/ui/Reveal';

export function Toolbox() {
  return (
    <section id="toolbox" className="py-20 sm:py-28 border-b border-[var(--line)]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky 3-column mono label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="mono-label block">(04) Toolbox</span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)] mt-2">
                Technologies
              </h2>
            </div>
          </div>

          {/* 9 columns content on the right: grouped mono lists */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {skillGroups.map((group, idx) => (
                <Reveal key={group.category} delayMs={idx * 50}>
                  <div className="p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)]">
                    <span className="mono-label block mb-4 font-semibold text-[var(--ink)]">
                      {group.category}
                    </span>
                    <ul className="space-y-2 font-mono text-xs sm:text-sm text-[var(--muted)]">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <span className="text-[var(--accent)] font-bold">&bull;</span>
                          <span className="text-[var(--ink)]">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
