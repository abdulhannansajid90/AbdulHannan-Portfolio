import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'smartdoc-connect',
    title: 'SmartDoc Connect',
    summary:
      'Agentic AI full-stack platform using autonomous multi-agent workflows to streamline doctor discovery and automate appointment booking.',
    featured: true,
    status: 'Completed',
    period: 'Jun 2026',
    role: 'Full-stack Developer',
    tags: ['Agentic AI', 'Full-stack', 'Hackathon', 'Healthcare'],
    allTags: ['Agentic AI', 'Next.js', 'Node.js', 'Google Gemini API', 'Hackathon', 'Healthcare'],
    overview:
      'SmartDoc Connect was developed during the MTM Hackathon organized by Google Developer Groups on Campus at the Institute of Space Technology. The platform orchestrates autonomous AI agents to parse patient health requests, evaluate medical specialties, locate matching doctors, and handle conversational booking flows without friction.',
    features: [
      'Multi-agent triage system matching patient symptoms with appropriate medical specialists',
      'Autonomous scheduling pipeline managing availability and appointment requests',
      'Conversational AI interface powered by Google Gemini API',
      'Clean full-stack architecture connecting React frontend with Node.js backend services',
    ],
    links: {
      live: 'https://mtm-hackathonfinal.vercel.app/',
    },
    createdAt: '2026-06-01T00:00:00Z',
  },
  {
    slug: 'easyrent',
    title: 'EasyRent',
    summary:
      'Full-stack rental property management platform featuring interactive listings, admin dashboard, secure authentication, and cloud media storage.',
    featured: false,
    status: 'Live',
    period: 'Aug 2026',
    role: 'Full-stack Developer',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth'],
    allTags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth', 'Vercel Blob'],
    overview:
      'EasyRent is a modern real estate and property rental management web application built with Next.js App Router and PostgreSQL. It features authenticated admin management, seeded database records, and dynamic media uploads via Vercel Blob.',
    features: [
      'Interactive property catalog with detailed rental breakdowns and amenities',
      'Role-based admin control panel for property inventory management',
      'Secure credential authentication powered by NextAuth and bcrypt',
      'Cloud media uploads and asset management integrated with Vercel Blob',
      'Relational data modeling with Prisma ORM and PostgreSQL',
    ],
    links: {
      live: 'https://easyrent-seven.vercel.app',
      code: 'https://github.com/abdulhannansajid90/Easyrent',
    },
    coverImage: '/projects/easyrent.webp',
    createdAt: '2026-08-24T17:51:50Z',
  },

  {
    slug: 'lan-scanner',
    title: 'LAN Scanner in C++',
    summary:
      'High-performance network utility in C++ that sweeps local subnets using ICMP ping requests to map active devices and measure response latencies.',
    featured: false,
    status: 'Completed',
    period: 'Feb 2026',
    role: 'Systems Developer',
    tags: ['C++', 'OOP', 'Networking', 'CLI'],
    allTags: ['C++', 'Object-Oriented Programming', 'Subnet Scanning', 'Windows System Calls', 'std::chrono'],
    overview:
      'A local area network diagnostic console application developed in modern C++. The tool sweeps a user-specified IPv4 subnet range (such as 192.168.1.1 through 192.168.1.254), detecting reachable hosts and outputting round-trip latency statistics.',
    features: [
      'Automated subnet sweep across 254 host IP addresses',
      'Low-overhead ping dispatch with precise execution time measurement via std::chrono',
      'Modular object-oriented architecture organizing network adapters, probes, and report formatters',
      'Native Windows console integration with zero third-party dependencies',
    ],
    links: {
      code: 'https://github.com/abdulhannansajid90/LAN-IP-Identifier',
    },
    createdAt: '2026-02-24T19:17:42Z',
  },
  {
    slug: 'ist-university-website',
    title: 'IST University Website',
    summary:
      'Responsive multi-section academic portal for the Institute of Space Technology showcasing academic departments, admissions, and faculty schedules.',
    featured: false,
    status: 'Completed',
    period: 'Dec 2025',
    role: 'Frontend Developer',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    allTags: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'DOM Manipulation', 'Form Validation'],
    overview:
      'A comprehensive university portal built for the Institute of Space Technology. It implements responsive multi-page layout structures, dynamic section switching, timetable views, and client-side form validation using semantic web standards.',
    features: [
      'Interactive department navigation and academic schedule views',
      'Admissions inquiry form with client-side JavaScript validation',
      'Mobile-responsive layout engineered with clean semantic HTML and modular CSS rules',
      'Fast, dependency-free load times adhering strictly to browser fundamentals',
    ],
    links: {
      code: 'https://github.com/abdulhannansajid90/ICT-project-01',
    },
    createdAt: '2025-12-12T18:58:25Z',
  },
  {
    slug: 'pro-pk',
    title: 'Pro-PK',
    summary:
      'A collaborative web project I contributed to. [Update summary here]',
    featured: false,
    status: 'Live',
    period: '2026',
    role: 'Collaborator',
    tags: ['Web Development', 'Collaboration'],
    allTags: ['Web Development', 'Collaboration'],
    overview:
      'Pro-PK is a collaborative project I contributed to. [Update overview here]',
    features: [
      'Collaborative development',
      '[Add specific feature]',
    ],
    links: {
      live: 'https://incandescent-alpaca-ce90d4.netlify.app',
    },
    createdAt: '2026-09-01T00:00:00Z',
  },
];
