import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { pugPages } from './build/pug-pages.js';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  appType: 'mpa',
  plugins: [pugPages(), tailwindcss()],
  build: { outDir: '../dist', emptyOutDir: true },
});
