import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    keystatic(),
  ],
  site: 'https://vidaacessivel.pt',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
