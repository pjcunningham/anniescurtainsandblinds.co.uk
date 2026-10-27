import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { build, createServer, preview } from 'vite';
import { parseHTML } from 'linkedom';
import { initNavigation } from '../src/navigation.js';

const routes = ['/', '/category/curtains/', '/category/blinds/', '/category/curtain-headings/', '/testimonials/', '/contact/'];
const documents = new Map();
let dev;
let production;

beforeAll(async () => {
  await build({ configFile: resolve('vite.config.js'), logLevel: 'silent' });
  for (const route of routes) {
    documents.set(route, parseHTML(readFileSync(`dist${route}index.html`, 'utf8')).document);
  }
  dev = await createServer({ configFile: resolve('vite.config.js'), logLevel: 'silent', server: { port: 0, host: '127.0.0.1' } });
  await dev.listen();
  production = await preview({ configFile: resolve('vite.config.js'), logLevel: 'silent', preview: { port: 0, host: '127.0.0.1' } });
});

afterAll(async () => {
  await dev?.close();
  await production?.close();
});

describe('static output', () => {
  it.each(routes)('%s has semantic HTML, metadata, working navigation and the published email', (route) => {
    const document = documents.get(route);
    expect(document.doctype.name).toBe('html');
    expect(document.querySelectorAll('h1')).toHaveLength(1);
    for (const tag of ['header', 'main', 'footer']) expect(document.querySelectorAll(tag)).toHaveLength(1);
    expect(document.title).toContain("Annie's Curtains and Blinds");
    expect(document.querySelector('link[rel="canonical"]').getAttribute('href')).toBe(`https://anniescurtainsandblinds.co.uk${route}`);
    const headerLinks = [...document.querySelectorAll('header a')].map((a) => a.getAttribute('href'));
    const mobileLinks = [...document.querySelectorAll('#mobile-navigation a')].map((a) => a.getAttribute('href'));
    expect(new Set(headerLinks)).toEqual(new Set(routes));
    expect(mobileLinks).toEqual(routes);
    const mailLinks = [...document.querySelectorAll('a[href^="mailto:"]')];
    expect(mailLinks.length).toBeGreaterThan(0);
    for (const link of mailLinks) expect(link.getAttribute('href')).toBe('mailto:annie@anniescurtainsandblinds.co.uk');
    expect(document.toString()).not.toMatch(/hello@|shuffle|global-\d+/i);
    expect(document.querySelector('link[rel="icon"]')).toBeNull();
    for (const asset of document.querySelectorAll('script[src], link[rel="stylesheet"][href^="/assets/"]')) {
      expect(existsSync(resolve('dist', '.' + (asset.getAttribute('src') || asset.getAttribute('href'))))).toBe(true);
    }
    if (route !== '/') {
      expect(document.querySelector('main').textContent).toContain('Development placeholder');
      expect(document.querySelector('meta[name="robots"]').content).toBe('noindex, follow');
      expect(document.querySelector('meta[name="description"]')).toBeNull();
    }
  });

  it('retains the homepage content, image slots and approved design classes', () => {
    const document = documents.get('/');
    expect(document.querySelector('h1').textContent).toBe('Beautifully Made Curtains & Blinds');
    expect(document.querySelector('meta[name="description"]').content).toBe('Hand made, made to measure curtains and blinds, Oxfordshire');
    expect(document.querySelector('meta[property="og:url"]').content).toBe('https://anniescurtainsandblinds.co.uk/');
    expect(document.querySelectorAll('img')).toHaveLength(5);
    for (const img of document.querySelectorAll('img')) expect(img.getAttribute('alt')).toBe('');
    const reference = parseHTML(readFileSync('design-reference/shuffle-homepage/public/index.html', 'utf8')).document;
    for (const id of ['home', 'services', 'work']) {
      const before = reference.getElementById(id);
      const after = document.getElementById(id);
      const copy = (element) => [...element.querySelectorAll('h1, h2, h3, h4, p, a, span, blockquote, figcaption')]
        .filter((node) => node.children.length === 0)
        .map((node) => node.textContent.replace(/\s+/g, ' ').trim());
      expect(copy(after)).toEqual(copy(before));
      expect([...after.querySelectorAll('[class]')].map((el) => el.className)).toEqual([...before.querySelectorAll('[class]')].map((el) => el.className));
    }
  });
});

describe('local HTTP serving', () => {
  it.each(routes)('serves %s in development and preview', async (route) => {
    for (const server of [dev, production]) {
      const response = await fetch(new URL(route, server.resolvedUrls.local[0]));
      expect(response.status).toBe(200);
      const { document } = parseHTML(await response.text());
      expect(document.querySelector('h1').textContent).toBe(documents.get(route).querySelector('h1').textContent);
    }
  });
  it('does not silently serve the homepage for unknown pages', async () => {
    for (const server of [dev, production]) {
      expect((await fetch(new URL('/missing-page/', server.resolvedUrls.local[0]))).status).toBe(404);
    }
  });
});

it('enhances mobile navigation with toggle, Escape/focus, link and breakpoint closing', () => {
  const { document, window } = parseHTML(documents.get('/').toString());
  let breakpointChanged;
  vi.stubGlobal('window', { matchMedia: () => ({ addEventListener: (_, handler) => { breakpointChanged = handler; } }) });
  try {
    const toggle = document.querySelector('[data-nav-toggle]');
    const panel = document.querySelector('#mobile-navigation');
    expect(toggle.hidden).toBe(true);
    expect(panel.hidden).toBe(false);
    toggle.focus = vi.fn();
    initNavigation(document);
    expect(toggle.hidden).toBe(false);
    expect(panel.hidden).toBe(true);
    toggle.click();
    expect(panel.hidden).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    const escape = new window.Event('keydown');
    escape.key = 'Escape';
    document.dispatchEvent(escape);
    expect(panel.hidden).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.focus).toHaveBeenCalledOnce();
    toggle.click();
    panel.querySelector('a').click();
    expect(panel.hidden).toBe(true);
    toggle.click();
    breakpointChanged();
    expect(panel.hidden).toBe(true);
  } finally {
    vi.unstubAllGlobals();
  }
});
