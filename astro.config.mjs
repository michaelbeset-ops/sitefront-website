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

  // Content-Security-Policy. GitHub Pages laat geen eigen headers toe,
  // dus Astro zet hem als <meta> in elke pagina, met een hash per inline
  // script en stijlblok. Daardoor hoeft 'unsafe-inline' niet aan voor
  // scripts: een script dat iemand zou weten te injecteren draait niet.
  //
  // Wat een meta-CSP NIET kan: frame-ancestors (inbedden in een iframe
  // tegenhouden). Dat vraagt een echte header, dus Cloudflare ervoor.
  //
  // Voeg je een externe dienst toe (statistieken, kaart, video), zet het
  // domein dan hieronder bij de juiste regel, anders blokkeert de browser
  // het zonder foutmelding op de pagina. Kijk in de console.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        // Het contactformulier verstuurt via Web3Forms.
        "connect-src 'self' https://api.web3forms.com",
        "form-action 'self' https://api.web3forms.com",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-src 'none'",
        'upgrade-insecure-requests',
      ],
      // Vier koppen en de hero hebben een style-attribuut (--regel en een
      // verloop). Hashes werken niet voor attributen, dus die mogen inline.
      // Het risico daarvan is klein: via een style-attribuut draai je geen
      // code.
      styleDirective: {
        resources: [{ resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [vue(), sitemap()],
});