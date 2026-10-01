import { getBaseUrl } from './utils';

export const siteMetadata = {
  title: 'Abdul Hannan — Portfolio',
  titleTemplate: '%s · Abdul Hannan',
  description:
    'Computer Science student at IST Islamabad & GDGoC member building AI-powered web applications and agentic workflows. Exploring Developer Advocacy.',
  author: 'Abdul Hannan',
  siteUrl: getBaseUrl(),
  locale: 'en_US',
  social: {
    github: 'https://github.com/abdulhannansajid90',
    linkedin: 'https://www.linkedin.com/in/abdul-hannan-110251386',
    email: 'abdulhannansajid90@gmail.com',
  },
};

export function getPersonJsonLd() {
  const url = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdul Hannan',
    url: url,
    email: 'abdulhannansajid90@gmail.com',
    jobTitle: 'Developer & Computer Science Student',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Institute of Space Technology (IST)',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
    },
    sameAs: [
      'https://github.com/abdulhannansajid90',
      'https://www.linkedin.com/in/abdul-hannan-110251386',
    ],
  };
}
