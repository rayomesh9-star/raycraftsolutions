import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.join(process.cwd(), 'public', 'screenshots');

const sections = [
  { id: 'top', name: 'hero' },
  { id: 'about', name: 'about' },
  { id: 'skills', name: 'skills' },
  { id: 'work', name: 'projects' },
  { id: 'process', name: 'process' },
  { id: 'testimonials', name: 'testimonials' },
  { id: 'contact', name: 'contact' },
];

async function waitForAnimations(page) {
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
}

async function screenshotSection(page, selector, name) {
  const element = await page.$(selector);
  if (element) {
    await element.screenshot({ path: path.join(OUT_DIR, `${name}.png`) });
    console.log(`✓ ${name}.png`);
  } else {
    console.log(`✗ ${name} not found`);
  }
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await waitForAnimations(page);

  // Full page
  await page.screenshot({ path: path.join(OUT_DIR, 'full-page.png'), fullPage: true });
  console.log('✓ full-page.png');

  // Per-section screenshots
  for (const { id, name } of sections) {
    await screenshotSection(page, `#${id}`, name);
  }

  // Project cards individually
  const cards = await page.$$('#work .tilt-card');
  for (let i = 0; i < cards.length; i++) {
    await cards[i].screenshot({ path: path.join(OUT_DIR, `project-${i + 1}.png`) });
    console.log(`✓ project-${i + 1}.png`);
  }

  await browser.close();
  console.log('\nAll screenshots saved to', OUT_DIR);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});