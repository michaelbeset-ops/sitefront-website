<script setup lang="ts">
/**
 * Snelheidstest. Roept vanuit de browser de PageSpeed Insights API van
 * Google aan en toont de echte uitslag. Geen eigen backend en geen
 * verzonnen cijfers: wat hier staat komt rechtstreeks van Google.
 *
 * Er is een gratis API-sleutel nodig (PUBLIC_PAGESPEED_KEY). Zonder
 * sleutel geeft Google na een paar verzoeken een 429 en zou de tool
 * onbetrouwbaar zijn.
 */
import { computed, ref } from 'vue';

const props = defineProps<{ apiKey?: string }>();

type Vital = { label: string; waarde: string; oordeel: string; uitleg: string };
type Uitslag = {
  url: string;
  scores: { sleutel: string; label: string; waarde: number }[];
  vitals: Vital[];
  rapport: string;
};

const invoer = ref('');
const strategie = ref<'mobile' | 'desktop'>('mobile');
const bezig = ref(false);
const fout = ref<string | null>(null);
const uitslag = ref<Uitslag | null>(null);

const normaliseer = (waarde: string) => {
  const schoon = waarde.trim();
  if (!schoon) return null;
  const met = /^https?:\/\//i.test(schoon) ? schoon : 'https://' + schoon;
  try {
    const u = new URL(met);
    if (!u.hostname.includes('.')) return null;
    return u.toString();
  } catch {
    return null;
  }
};

const oordeelVan = (waarde: number, goed: number, matig: number) =>
  waarde <= goed ? 'goed' : waarde <= matig ? 'matig' : 'traag';

async function test() {
  const url = normaliseer(invoer.value);
  if (!url) {
    fout.value = 'Vul een geldig webadres in, bijvoorbeeld jouwbedrijf.nl';
    return;
  }

  bezig.value = true;
  fout.value = null;
  uitslag.value = null;

  const params = new URLSearchParams({ url, strategy: strategie.value });
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) {
    params.append('category', c);
  }
  if (props.apiKey) params.set('key', props.apiKey);

  try {
    const res = await fetch(
      'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?' + params.toString(),
    );
    const data = await res.json();

    if (!res.ok || data.error) {
      const code = data && data.error ? data.error.code : res.status;
      const bericht = (data && data.error && data.error.message) || '';

      if (/api key/i.test(bericht)) {
        // Komt alleen voor tijdens het instellen, niet bij bezoekers.
        fout.value = 'De API-sleutel klopt niet. Controleer PUBLIC_PAGESPEED_KEY.';
      } else if (code === 429) {
        fout.value =
          'Google laat op dit moment geen nieuwe metingen toe. Probeer het over een minuut nog eens.';
      } else if (code === 400) {
        fout.value =
          'Google kon deze site niet bereiken. Klopt het adres, en staat de site online?';
      } else {
        fout.value = 'De meting lukte niet. Probeer het zo nog eens.';
      }
      return;
    }

    const lh = data.lighthouseResult;
    const c = lh.categories;
    const a = lh.audits;

    uitslag.value = {
      url: lh.finalUrl || url,
      scores: [
        {
          sleutel: 'performance',
          label: 'Snelheid',
          waarde: Math.round(c.performance.score * 100),
        },
        {
          sleutel: 'accessibility',
          label: 'Toegankelijkheid',
          waarde: Math.round(c.accessibility.score * 100),
        },
        {
          sleutel: 'best-practices',
          label: 'Best practices',
          waarde: Math.round(c['best-practices'].score * 100),
        },
        { sleutel: 'seo', label: 'SEO', waarde: Math.round(c.seo.score * 100) },
      ],
      vitals: [
        {
          label: 'Grootste element zichtbaar',
          waarde: a['largest-contentful-paint'].displayValue,
          oordeel: oordeelVan(a['largest-contentful-paint'].numericValue, 2500, 4000),
          uitleg: 'Hoe lang een bezoeker wacht voordat het belangrijkste in beeld staat.',
        },
        {
          label: 'Verschuivende pagina',
          waarde: a['cumulative-layout-shift'].displayValue,
          oordeel: oordeelVan(a['cumulative-layout-shift'].numericValue, 0.1, 0.25),
          uitleg: 'Springt de pagina nog terwijl hij laadt, waardoor je op het verkeerde klikt.',
        },
        {
          label: 'Pagina reageert niet',
          waarde: a['total-blocking-time'].displayValue,
          oordeel: oordeelVan(a['total-blocking-time'].numericValue, 200, 600),
          uitleg: 'Hoe lang de pagina bevroren is doordat er te veel script draait.',
        },
      ],
      rapport: 'https://pagespeed.web.dev/analysis?url=' + encodeURIComponent(url),
    };
  } catch {
    fout.value = 'De verbinding met Google lukte niet. Controleer je internetverbinding.';
  } finally {
    bezig.value = false;
  }
}

const kleurVan = (n: number) => (n >= 90 ? 'text-mint' : n >= 50 ? 'text-accent-ink' : 'text-bad');

const oordeelKleur = (oordeel: string) =>
  oordeel === 'goed' ? 'text-mint' : oordeel === 'matig' ? 'text-accent-ink' : 'text-bad';

const samenvatting = computed(() => {
  if (!uitslag.value) return null;
  const snelheid = uitslag.value.scores[0].waarde;
  if (snelheid >= 90) return 'Deze site staat er goed op. Daar valt weinig te winnen.';
  if (snelheid >= 50)
    return 'Hier valt winst te halen. Meestal zit dat in te zware afbeeldingen en te veel scripts.';
  return 'Hier laat je bezoekers wachten. Dat kost klanten, en het is bijna altijd op te lossen.';
});
</script>

<template>
  <div>
    <form
      class="bg-paper shadow-lift rounded-xl p-6 md:p-8"
      novalidate
      onsubmit="return false"
      @submit.prevent="test"
    >
      <label class="font-display text-ink mb-2 block text-sm font-bold" for="site">
        Adres van de website
      </label>

      <div class="flex flex-col gap-3 sm:flex-row">
        <input
          id="site"
          v-model="invoer"
          type="text"
          inputmode="url"
          placeholder="jouwbedrijf.nl"
          class="border-line bg-sand text-ink placeholder:text-soft focus:border-navy w-full rounded-md border px-4 py-3 transition-colors duration-150"
          :aria-invalid="fout ? 'true' : undefined"
          aria-describedby="test-fout"
        />
        <button
          type="submit"
          :disabled="bezig"
          class="bg-accent text-ink shadow-btn font-display shrink-0 rounded-full px-7 py-3.5 text-lg font-bold transition-colors duration-150 hover:bg-navy hover:text-white disabled:opacity-60"
        >
          {{ bezig ? 'Bezig' : 'Test de site' }}
        </button>
      </div>

      <fieldset class="mt-5">
        <legend class="text-soft mb-2 text-sm">Meten als</legend>
        <div class="flex gap-2">
          <label
            class="border-line cursor-pointer rounded-full border px-4 py-2 text-base font-medium transition-colors duration-150"
            :class="
              strategie === 'mobile' ? 'bg-navy border-navy text-white' : 'text-body hover:bg-sand'
            "
          >
            <input v-model="strategie" type="radio" name="strategie" value="mobile" class="sr-only" />
            Mobiel
          </label>
          <label
            class="border-line cursor-pointer rounded-full border px-4 py-2 text-base font-medium transition-colors duration-150"
            :class="
              strategie === 'desktop' ? 'bg-navy border-navy text-white' : 'text-body hover:bg-sand'
            "
          >
            <input
              v-model="strategie"
              type="radio"
              name="strategie"
              value="desktop"
              class="sr-only"
            />
            Desktop
          </label>
        </div>
      </fieldset>

      <p v-if="fout" id="test-fout" class="text-bad mt-4 text-base font-medium" role="alert">
        {{ fout }}
      </p>

      <template v-if="bezig">
        <p class="text-body mt-5 text-base" role="status">
          Google haalt de site nu op en meet hem na. Dat duurt meestal vijftien tot dertig seconden.
        </p>
        <div class="bg-sand mt-3 h-1.5 overflow-hidden rounded-full" aria-hidden="true">
          <div class="balk bg-accent h-full w-1/3 rounded-full"></div>
        </div>
      </template>
    </form>

    <div v-if="uitslag" class="mt-10">
      <p class="text-soft text-sm">Uitslag voor</p>
      <p class="font-display text-ink text-xl font-black break-all">{{ uitslag.url }}</p>

      <ul class="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <li
          v-for="score in uitslag.scores"
          :key="score.sleutel"
          class="bg-paper shadow-card border-line-soft rounded-xl border p-5 text-center"
        >
          <p class="font-display text-4xl font-heavy" :class="kleurVan(score.waarde)">
            {{ score.waarde }}
          </p>
          <p class="text-body mt-1 text-sm">{{ score.label }}</p>
        </li>
      </ul>

      <p class="text-body mt-7 text-lg">{{ samenvatting }}</p>

      <ul class="border-line-soft mt-6 border-t">
        <li
          v-for="v in uitslag.vitals"
          :key="v.label"
          class="border-line-soft flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b py-4"
        >
          <div class="min-w-0 flex-1">
            <p class="text-ink font-semibold">{{ v.label }}</p>
            <p class="text-soft text-sm">{{ v.uitleg }}</p>
          </div>
          <p class="font-display text-lg font-bold" :class="oordeelKleur(v.oordeel)">
            {{ v.waarde }}
          </p>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href="/#contact"
          class="bg-accent text-ink shadow-btn font-display rounded-full px-7 py-3.5 text-lg font-bold transition-colors duration-150 hover:bg-navy hover:text-white"
        >
          Bespreek de uitslag
        </a>
        <a
          :href="uitslag.rapport"
          target="_blank"
          rel="noopener"
          class="text-body hover:text-ink text-base underline underline-offset-4"
        >
          Bekijk het volledige rapport bij Google
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.balk {
  animation: schuiven 1.4s ease-in-out infinite;
}

@keyframes schuiven {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(300%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .balk {
    animation: none;
    width: 100%;
    opacity: 0.4;
  }
}
</style>
