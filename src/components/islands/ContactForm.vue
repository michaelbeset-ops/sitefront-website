<script setup lang="ts">
/**
 * Het enige interactieve onderdeel van de pagina, en daarom het enige
 * Vue-island. De rest van de site is statieke HTML zonder JavaScript.
 *
 * Versturen gaat via Web3Forms: die dienst mailt de inzending door
 * naar het adres dat aan de sleutel hangt. Geen eigen backend nodig,
 * en de sleutel mag in de clientcode staan, want hij kan alleen naar
 * jouw eigen mailbox sturen.
 *
 * Zolang de sleutel niet is ingevuld valt het formulier na validatie
 * terug op een vooringevulde mail, in plaats van te doen alsof er iets
 * verstuurd is.
 */
import { computed, ref } from 'vue';

const props = defineProps<{
  email: string;
  types: string[];
  sleutel?: string;
}>();

const naam = ref('');
const email = ref('');
const type = ref(props.types[0] ?? '');
const bericht = ref('');

/* Honeypot. Bots vullen elk veld in dat ze tegenkomen; mensen zien dit
   veld niet. Is het gevuld, dan gooit Web3Forms de inzending weg. */
const bot = ref('');

const aangeraakt = ref<Record<string, boolean>>({});
const bezig = ref(false);
const verzonden = ref(false);
const fout = ref<string | null>(null);

const fouten = computed(() => {
  const f: Record<string, string> = {};
  if (!naam.value.trim()) f.naam = 'Vul je naam in.';
  if (!email.value.trim()) f.email = 'Vul je e-mailadres in.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()))
    f.email = 'Dit adres klopt nog niet.';
  if (bericht.value.trim().length < 10) f.bericht = 'Vertel kort waar het over gaat.';
  return f;
});

const toon = (veld: string) => aangeraakt.value[veld] && fouten.value[veld];

const mailtoLink = computed(() => {
  const body = [
    `Naam: ${naam.value}`,
    `E-mail: ${email.value}`,
    `Type project: ${type.value}`,
    '',
    bericht.value,
  ].join('\n');
  return `mailto:${props.email}?subject=${encodeURIComponent(
    `Aanvraag via de site: ${type.value}`,
  )}&body=${encodeURIComponent(body)}`;
});

async function verstuur() {
  aangeraakt.value = { naam: true, email: true, bericht: true };
  if (Object.keys(fouten.value).length > 0) {
    // Focus het eerste veld dat nog niet klopt, zodat toetsenbord- en
    // schermlezergebruikers meteen op de juiste plek staan.
    const eerste = document.querySelector<HTMLElement>('[data-fout="true"]');
    eerste?.focus();
    return;
  }

  if (!props.sleutel) {
    fout.value =
      'Het formulier is nog niet gekoppeld aan een verzenddienst. Je bericht staat klaar in een mail, klik hieronder om die te openen.';
    return;
  }

  bezig.value = true;
  fout.value = null;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: props.sleutel,
        subject: `Aanvraag via de site: ${type.value}`,
        from_name: 'Sitefront website',
        name: naam.value,
        email: email.value,
        'Type project': type.value,
        message: bericht.value,
        botcheck: bot.value,
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data || data.success !== true) throw new Error(String(res.status));
    verzonden.value = true;
  } catch {
    fout.value = 'Versturen lukte niet. Mail me gerust rechtstreeks.';
  } finally {
    bezig.value = false;
  }
}

const labelClasses = 'font-display text-ink mb-2 block text-sm font-bold';
const veldClasses =
  'w-full rounded-md border bg-sand px-4 py-3 text-ink transition-colors duration-150 placeholder:text-soft';
</script>

<template>
  <div>
    <div
      v-if="verzonden"
      class="bg-sand border-line-soft rounded-lg border p-8"
      role="status"
    >
      <p class="font-display text-ink text-2xl font-black">Bericht ontvangen.</p>
      <p class="text-body mt-3">
        Ik lees het en kom bij je terug. Heb je haast, mail dan gerust rechtstreeks naar
        <a class="text-accent-ink underline underline-offset-4" :href="`mailto:${email}`">{{ email }}</a>.
      </p>
    </div>

    <!--
      onsubmit="return false" staat er bewust naast @submit.prevent.
      Het island hydrateert pas als het in beeld komt, en in dat korte
      venster is dit gewone server-HTML. Zonder deze rem doet de browser
      dan een normale GET en komen naam, e-mail en bericht in de URL
      terecht, en dus in de geschiedenis en de referrer.
    -->
    <form
      v-else
      class="grid gap-5"
      novalidate
      onsubmit="return false"
      @submit.prevent="verstuur"
    >
      <!-- Bots vullen alles in wat ze tegenkomen. Dit veld staat buiten
           beeld en buiten de tabvolgorde, dus een mens raakt het nooit. -->
      <input
        v-model="bot"
        type="checkbox"
        name="botcheck"
        class="sr-only"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
      />

      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label :class="labelClasses" for="naam">
            Naam
          </label>
          <input
            id="naam"
            v-model="naam"
            type="text"
            name="naam"
            autocomplete="name"
            :class="[veldClasses, toon('naam') ? 'border-bad' : 'border-line focus:border-navy']"
            :aria-invalid="toon('naam') ? 'true' : undefined"
            :data-fout="toon('naam') ? 'true' : undefined"
            aria-describedby="naam-fout"
            @blur="aangeraakt.naam = true"
          />
          <p v-if="toon('naam')" id="naam-fout" class="text-bad mt-2 text-sm font-medium">
            {{ fouten.naam }}
          </p>
        </div>

        <div>
          <label
            :class="labelClasses"
            for="email"
          >
            E-mail
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            :class="[
              veldClasses,
              toon('email') ? 'border-bad' : 'border-line focus:border-navy',
            ]"
            :aria-invalid="toon('email') ? 'true' : undefined"
            :data-fout="toon('email') ? 'true' : undefined"
            aria-describedby="email-fout"
            @blur="aangeraakt.email = true"
          />
          <p v-if="toon('email')" id="email-fout" class="text-bad mt-2 text-sm font-medium">
            {{ fouten.email }}
          </p>
        </div>
      </div>

      <div>
        <label :class="labelClasses" for="type">
          Waar gaat het over
        </label>
        <select
          id="type"
          v-model="type"
          name="type"
          :class="[veldClasses, 'border-line focus:border-navy']"
        >
          <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>

      <div>
        <label
          :class="labelClasses"
          for="bericht"
        >
          Je bericht
        </label>
        <textarea
          id="bericht"
          v-model="bericht"
          name="bericht"
          rows="5"
          :class="[
            veldClasses,
            'resize-y',
            toon('bericht') ? 'border-bad' : 'border-line focus:border-navy',
          ]"
          :aria-invalid="toon('bericht') ? 'true' : undefined"
          :data-fout="toon('bericht') ? 'true' : undefined"
          aria-describedby="bericht-fout"
          @blur="aangeraakt.bericht = true"
        />
        <p v-if="toon('bericht')" id="bericht-fout" class="text-bad mt-2 text-sm font-medium">
          {{ fouten.bericht }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          :disabled="bezig"
          class="bg-accent text-ink shadow-btn font-display rounded-full px-7 py-3.5 text-lg font-bold transition-colors duration-150 hover:bg-navy hover:text-white disabled:opacity-60"
        >
          {{ bezig ? 'Bezig' : 'Verstuur' }}
        </button>

        <a class="text-body hover:text-ink text-base underline underline-offset-4" :href="`mailto:${email}`">
          of mail rechtstreeks
        </a>
      </div>

      <p v-if="fout" class="border-line-soft bg-sand text-body rounded-lg border p-4" role="alert">
        {{ fout }}
        <a class="text-accent-ink mt-2 inline-block font-semibold underline underline-offset-4" :href="mailtoLink">
          Open de mail met je bericht erin
        </a>
      </p>
    </form>
  </div>
</template>
