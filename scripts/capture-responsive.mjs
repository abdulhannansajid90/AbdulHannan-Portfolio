import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const screenshotsDir = path.join(rootDir, 'docs', 'screenshots');
const artifactDir = 'C:\\Users\\786\\.gemini\\antigravity-ide\\brain\\a3080c9e-09bf-4094-af92-b51d45cfe361';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const viewports = [
  { name: 'mobile_light', width: 390, height: 844, dark: false },
  { name: 'mobile_dark', width: 390, height: 844, dark: true },
  { name: 'tablet_light', width: 768, height: 1024, dark: false },
  { name: 'tablet_dark', width: 768, height: 1024, dark: true },
  { name: 'desktop_light', width: 1440, height: 900, dark: false },
  { name: 'desktop_dark', width: 1440, height: 900, dark: true },
];

async function capture() {
  for (const vp of viewports) {
    console.log(`Capturing ${vp.name} (${vp.width}x${vp.height}, dark: ${vp.dark})...`);
    const tempProfile = path.join(process.env.TEMP || 'C:\\Temp', `edge_profile_${vp.name}`);
    const rawPng = path.join(screenshotsDir, `${vp.name}_raw.png`);
    const finalWebp = path.join(screenshotsDir, `${vp.name}.webp`);
    const artifactWebp = path.join(artifactDir, `${vp.name}.webp`);

    const colorSchemeFlag = vp.dark ? '--force-dark-mode' : '';
    const args = [
      '--headless',
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir="${tempProfile}"`,
      `--window-size=${vp.width},${vp.height}`,
      colorSchemeFlag,
      `--screenshot="${rawPng}"`,
      'http://127.0.0.1:3000',
    ].filter(Boolean).join(' ');

    try {
      execSync(`"${edgePath}" ${args}`, { stdio: 'ignore' });
      if (fs.existsSync(rawPng)) {
        await sharp(rawPng)
          .webp({ quality: 85 })
          .toFile(finalWebp);
        fs.copyFileSync(finalWebp, artifactWebp);
        fs.unlinkSync(rawPng);
        console.log(`Saved: ${finalWebp}`);
      }
    } catch (e) {
      console.error(`Failed ${vp.name}:`, e.message);
    }
  }
}

capture();
