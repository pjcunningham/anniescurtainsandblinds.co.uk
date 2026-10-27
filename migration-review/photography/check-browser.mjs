// Optional visual QA: set PLAYWRIGHT_MODULE to an installed playwright-core entry point.
// Start pnpm preview (4173) or pnpm dev and set PHOTO_QA_URL accordingly.
import { pathToFileURL } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const browser = await chromium.launch({ headless: true });
const results = [];
mkdirSync('tmp/photography-qa', { recursive: true });
try {
  for (const width of [375, 768, 1023, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
    const requests = [];
    page.on('request', request => requests.push(request.url()));
    await page.goto(process.env.PHOTO_QA_URL || 'http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    for (const img of await page.locator('main img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(async image => { await image.decode(); });
    }
    const images = await page.locator('main img').evaluateAll(images => images.map(img => {
      const box = img.getBoundingClientRect();
      return { src: img.currentSrc, width: box.width, height: box.height, naturalWidth: img.naturalWidth,
        complete: img.complete, position: getComputedStyle(img).objectPosition, sizes: img.sizes };
    }));
    assert.equal(images.length, 5);
    assert(images.every(img => img.complete && img.naturalWidth > 0 && img.src.includes('/images/home/')));
    assert(!requests.some(url => /unsplash/i.test(url)));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `tmp/photography-qa/home-${width}.png`, fullPage: true });
    for (const [i, img] of (await page.locator('main img').all()).entries()) {
      await img.screenshot({ path: `tmp/photography-qa/crop-${width}-${i}.png` });
    }
    results.push({ width, images, unsplashRequests: 0 });
    await page.close();
  }
} finally {
  await browser.close();
}
writeFileSync('tmp/photography-qa/results.json', JSON.stringify(results, null, 2) + '\n');
console.log('Five viewport checks passed: images decoded, no Unsplash requests or horizontal overflow.');
