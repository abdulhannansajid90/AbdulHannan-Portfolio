import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate OG Image (1200 x 630)
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#26272B" stroke-width="0.75" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0E0F11" />
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Outer Hairline Border -->
  <rect x="30" y="30" width="1140" height="570" fill="none" stroke="#26272B" stroke-width="1.5" rx="16" />

  <!-- Top Metadata Bar -->
  <g transform="translate(80, 100)">
    <circle cx="8" cy="8" r="6" fill="#8AB4F8" />
    <text x="32" y="14" fill="#9A9AA3" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" letter-spacing="0.1em">
      COMPUTER SCIENCE · INSTITUTE OF SPACE TECHNOLOGY, ISLAMABAD
    </text>
  </g>

  <!-- Name & Headline -->
  <g transform="translate(80, 240)">
    <text x="0" y="0" fill="#ECECEE" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" letter-spacing="-0.04em">
      Abdul Hannan
    </text>
    <text x="0" y="70" fill="#8AB4F8" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="500">
      Full-stack Engineer &amp; Agentic AI Developer
    </text>
    <text x="0" y="130" fill="#9A9AA3" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="400">
      Developer Advocate Applicant
    </text>
  </g>

  <!-- Footer Meta -->
  <g transform="translate(80, 520)">
    <line x1="0" y1="-30" x2="1040" y2="-30" stroke="#26272B" stroke-width="1" />
    <text x="0" y="0" fill="#9A9AA3" font-family="system-ui, -apple-system, monospace" font-size="16" letter-spacing="0.05em">
      abdulhannansajid90@gmail.com · github.com/abdulhannansajid90
    </text>
    <text x="1040" y="0" text-anchor="end" fill="#ECECEE" font-family="system-ui, -apple-system, monospace" font-size="16" font-weight="600">
      ISLAMABAD, PK
    </text>
  </g>
</svg>
`;

// 2. Generate Apple Touch Icon (180 x 180)
const iconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#111113" rx="36" />
  <text x="36" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="82" font-weight="700" fill="#ECECEE" letter-spacing="-3">AH</text>
  <circle cx="144" cy="114" r="10" fill="#1A73E8" />
</svg>
`;

async function build() {
  console.log('Generating OG Image...');
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og.png'));

  console.log('Generating Apple Touch Icon...');
  await sharp(Buffer.from(iconSvg))
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Assets generated successfully!');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
