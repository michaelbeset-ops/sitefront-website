// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import seo from './seo.config.json' with { type: 'json' };

import vue from '@astrojs/vue';

// ignorePaths uit seo.config.json: die pagina's krijgen noindex (SEO.astro leest dezelfde
// lijst) en blijven uit de sitemap. Eén bron, dus de twee kunnen niet uit elkaar lopen.
const negeer = (seo.ignorePaths ?? []).map((pad) => pad.replace(/\/?$/, '/'));

export default defineConfig({
  site: seo.site,

  // GitHub Pages serveert /pad/index.html op /pad/ en stuurt /pad met een 301 door.
  // Met 'always' maakt Astro overal de slash-variant, dus geen enkele interne link
  // kost nog een omleiding.
  trailingSlash: 'always',

  build: {
    format: 'directory',

    // De CSS is ~5 kB. Inline zetten scheelt een render-blocking request,
    // én de @font-face-regels staan meteen in de HTML, dus de browser
    // begint direct met het laden van de fonts.
    // Heroverwegen zodra de site veel pagina's heeft: dan wint caching
    // van één los CSS-bestand het weer van inlinen op elke pagina.
    inlineStylesheets: 'always',
  },

  devToolbar: { enabled: false },

  // Fonts via Astro in plaats van losse @font-face-regels in fonts.css.
  // De winst zit in optimizedFallbacks: Astro meet het echte font door en
  // maakt een fallback van een systeemfont met dezelfde verhoudingen. Tot
  // het webfont binnen is staat de tekst dus al op de goede hoogte, en
  // verspringt de pagina niet zodra hij omwisselt. Dat verspringen was op
  // de trage machine in de CI 0,12, boven de norm van 0,1.
  fonts: [
    {
      // Koppen, knoppen en labels.
      name: 'Archivo',
      cssVariable: '--font-archivo',
      provider: fontProviders.fontsource(),
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      optimizedFallbacks: true,
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Lopende tekst.
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex',
      provider: fontProviders.fontsource(),
      weights: ['100 700'],
      styles: ['normal'],
      subsets: ['latin'],
      optimizedFallbacks: true,
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
    },
  ],

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

  integrations: [
    vue(),
    sitemap({
      filter: (pagina) => {
        const pad = new URL(pagina).pathname;
        return !negeer.includes(pad) && pad !== '/404/';
      },
      // Geen lastmod: een builddatum zegt niets over de inhoud, en dan negeert Google hem.
    }),
  ],
});