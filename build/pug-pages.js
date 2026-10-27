import { readdirSync, readFileSync, mkdirSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { resolve, relative, dirname, sep } from 'node:path';
import pug from 'pug';

const root = resolve('src');
const pagesRoot = resolve(root, 'pages');

// Each pages/**/index.pug is a page; its adjacent JSON contains only metadata.
export function discoverPages(directory = pagesRoot) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = resolve(directory, entry.name);
    if (entry.isDirectory()) return discoverPages(filename);
    if (entry.name !== 'index.pug') return [];
    const output = relative(pagesRoot, filename).replace(/\.pug$/, '.html');
    const path = '/' + output.split(sep).join('/').replace(/index\.html$/, '');
    const metadata = JSON.parse(readFileSync(filename.replace(/\.pug$/, '.json'), 'utf8'));
    return [{ filename, output: resolve(root, output), path, metadata }];
  });
}

export function pugPages() {
  let generated = new Set();
  function render() {
    const pages = discoverPages();
    const current = new Set(pages.map((page) => page.output));
    for (const filename of generated) {
      if (!current.has(filename) && existsSync(filename)) unlinkSync(filename);
    }
    for (const page of pages) {
      const html = pug.renderFile(page.filename, {
        pretty: true,
        page: { ...page.metadata, path: page.path },
        canonical: new URL(page.path, 'https://anniescurtainsandblinds.co.uk').href,
      });
      mkdirSync(dirname(page.output), { recursive: true });
      if (!existsSync(page.output) || readFileSync(page.output, 'utf8') !== html) {
        writeFileSync(page.output, html);
      }
    }
    generated = current;
    return pages;
  }
  return {
    name: 'local-pug-pages',
    config() {
      return { build: { rolldownOptions: { input: render().map((page) => page.output) } } };
    },
    configureServer(server) {
      server.watcher.add([pagesRoot, resolve(root, 'layouts'), resolve(root, 'components')]);
      const update = (filename) => {
        if (!/\.(pug|json)$/.test(filename) || !filename.startsWith(root + sep)) return;
        try {
          render();
          server.ws.send({ type: 'full-reload' });
        } catch (error) {
          server.config.logger.error(error.message);
          server.ws.send({ type: 'error', err: { message: error.message, stack: error.stack } });
        }
      };
      server.watcher.on('add', update).on('change', update).on('unlink', update);
    },
  };
}
