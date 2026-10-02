export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.URL) {
    // Netlify deploy URL
    return process.env.URL.replace(/\/$/, '');
  }
  return 'http://localhost:3000';
}

export function getAssetPath(path: string): string {
  // Always ensure path starts with a slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true') {
    return `/AbdulHannan-Portfolio${cleanPath}`;
  }
  return cleanPath;
}
