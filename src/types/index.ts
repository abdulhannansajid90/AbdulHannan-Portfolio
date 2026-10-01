export type ProjectStatus = 'Live' | 'In progress' | 'Completed';

export interface ProjectLinks {
  live?: string;
  code?: string;
  frontend?: string;
  backend?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  status: ProjectStatus;
  period: string;
  role: string;
  tags: string[];
  allTags?: string[];
  overview: string;
  features?: string[];
  links: ProjectLinks;
  coverImage?: string;
  reflection?: string;
  createdAt: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  kicker: string;
  institution: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string | null;
  avatar: string | null;
  url: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Writing {
  slug: string;
  title: string;
  date: string;
  summary: string;
  url?: string;
}
