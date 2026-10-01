import { SiteConfig } from '@/types';
import { getBaseUrl } from '@/lib/utils';

export const siteConfig: SiteConfig = {
  name: 'Abdul Hannan',
  role: 'Developer & CS Student',
  kicker: 'Computer Science · Institute of Space Technology, Islamabad',
  institution: 'Institute of Space Technology (IST)',
  location: 'Islamabad, PK',
  email: 'abdulhannansajid90@gmail.com',
  github: 'https://github.com/abdulhannansajid90',
  linkedin: 'https://www.linkedin.com/in/abdul-hannan-110251386',
  resumeUrl: null, // default null; user can add e.g. '/resume.pdf' to show resume button
  avatar: null, // default null; user can add e.g. '/avatar.webp' to display avatar photo
  url: getBaseUrl(),
  metaTitle: 'Abdul Hannan — Developer & GDGoC Member',
  metaDescription:
    'Computer Science student at IST Islamabad & GDGoC member building AI-powered web applications and agentic workflows. Exploring Developer Advocacy.',
};
