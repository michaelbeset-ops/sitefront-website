// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import vue from '@astrojs/vue';

export default defineConfig({
  // Vervang dit door het echte domein zodra dat er is (nodig voor sitemap/canonical).
  site: 'https://sitefront.nl',

  build: {
    // De CSS is ~5 kB. Inline zetten scheelt een render-blocking request,
    // én de @font-face-regels staan meteen in de HTML, dus de browser
    // begint direct met het laden van de fonts.
    // Heroverwegen zodra de site veel pagina's heeft: dan wint caching
    // van één los CSS-bestand het weer van inlinen op elke pagina.
    inlineStylesheets: 'always',
  },

  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue(), sitemap()],
});