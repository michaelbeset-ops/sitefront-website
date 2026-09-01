# Zo bouw je een site die er niet uitziet als AI-werk

Dit is de complete werkwijze achter sitefront.nl. Deel 1 is de stack,
deel 2 is de prompt die je in Claude Code plakt, deel 3 legt uit waarom
het werkt zodat je het kunt aanpassen aan je eigen project.

---

## Deel 1: De stack

Alles hieronder is bewust gekozen, met de reden erbij, zodat je kunt
afwijken als jouw project iets anders vraagt.

### Wat je installeert

| Wat | Waarom |
|---|---|
| **Node 24** (of 22 LTS) | draait alles; via nodejs.org of Laravel Herd |
| **Astro 7** | statische site, nul JavaScript standaard. Dit is de grootste reden dat de site overal 100 haalt |
| **Tailwind CSS 4** via `@tailwindcss/vite` | geen configbestand meer, alles in CSS met `@theme` |
| **Vue 3** via `@astrojs/vue` | alleen voor de paar echt interactieve stukken, zoals het formulier |
| **@astrojs/sitemap** | sitemap.xml automatisch, nodig voor Google |
| **@fontsource-variable/...** | fonts zelf hosten, geen verzoek naar Google |
| **sharp** | afbeeldingen bijsnijden en comprimeren (zit al bij Astro) |
| **Lighthouse CLI** | echte scores meten in plaats van beweren |

Opzetten:

```
npm create astro@latest
npm install @tailwindcss/vite tailwindcss @astrojs/vue vue @astrojs/sitemap
npm install @fontsource-variable/archivo @fontsource-variable/ibm-plex-sans
```

### Wat je NIET gebruikt

- **Geen UI-bibliotheek.** Geen shadcn, geen daisyUI, geen Flowbite.
  Daar komt de sjabloonlook vandaan: iedereen die het gebruikt krijgt
  dezelfde site.
- **Geen CMS**, tenzij de klant echt zelf teksten moet wijzigen.
- **Geen animatiebibliotheek.** Wat je nodig hebt kan met CSS.
- **Geen compleet iconenpakket.** Teken de zes of zeven iconen die je
  echt gebruikt zelf als SVG.

### Hosting

Cloudflare Pages of Netlify, allebei gratis voor statische sites.
Formulier via een serverless dienst (Formspree, Web3Forms), dan heb je
geen backend nodig.

---

## Deel 2: De prompt

Plak dit in Claude Code aan het begin van een project. Pas de eerste
alinea aan op jouw opdracht, de rest laat je staan.

```
Ik bouw een website voor [BEDRIJF], dat [WAT ZE DOEN] voor
[DOELGROEP]. Het belangrijkste dat een bezoeker moet doen is [ACTIE].
Ik wil dat deze site er NIET uitziet als AI-werk. Geen sjabloon, geen
standaard bootstrap-gevoel. Houd je aan het volgende.

STACK, dit ligt vast
- Astro, volledig statisch. Geen CMS, geen backend.
- Tailwind 4 via @tailwindcss/vite, met een @theme blok in CSS.
- Vue 3 alleen als island voor onderdelen die echt interactief zijn.
  De rest is gewone HTML.
- Fonts zelf hosten via fontsource, alleen de latin-subset.
- Geen UI-bibliotheek. Geen shadcn, geen daisyUI, geen component die
  je van internet plukt.

DESIGN
- Bouw op EIGEN design tokens. Zet in het @theme blok
  "--color-*: initial" zodat het complete standaardpalet van Tailwind
  verdwijnt, en definieer daarna je eigen kleuren, typeschaal, radii
  en schaduwen. Ik wil nergens bg-blue-500 of text-gray-600 zien. Komt
  een klasse uit de standaard van Tailwind, dan is dat een fout.
- Een accentkleur, spaarzaam gebruikt. Niet elk element een kleurtje.
- Koppen zwaar en strak: font-weight 800 of 900 met negatieve
  letter-spacing, ongeveer -0.03em. Koppen worden groot door gewicht,
  niet door extreme afmetingen.
- Twee lettertypes, meer niet. Een display voor koppen, een voor
  lopende tekst. Geen mono voor labels, dat is een designer-tic.
- Niet alles gecentreerd. Werk asymmetrisch. Laat een vlak bewust leeg
  in plaats van het vol te zetten.
- Schaduwen laag en zacht, of helemaal niet.

DIT NOOIT
- Overal afgeronde kaarten met zachte schaduw
- Emoji als icoon
- Glasmorphism, gradient-tekst, gloeiende randen, neon op zwart
- Drie kaartjes naast elkaar met een icoontje erboven en drie regels
  tekst eronder
- Golf- of diagonaaldividers tussen secties
- Stockillustraties, generieke laptopmockups, mensen met headsets
- Een hero met een gecentreerde kop, een emoji en twee knoppen

TEKST
- Gebruik GEEN em-dashes. Komma's of punten. Dit is het duidelijkste
  teken dat een tekst door AI is geschreven.
- Geen "Kortom", "In de wereld van", "Of je nu X bent of Y", "niet
  alleen ... maar ook". Geen drieslagen als opsmuk.
- Korte, directe zinnen. Schrijf zoals een mens praat, niet zoals een
  brochure. Concreet boven abstract: "geen overtypwerk meer" in plaats
  van "efficientere processen".
- Verzin NOOIT feiten, cijfers, ervaringsjaren, testimonials,
  klantnamen of technieken die een project gebruikt zou hebben. Weet
  je iets niet, laat het leeg, zet er een duidelijke markering bij en
  zeg wat je van mij nodig hebt.
- Schrijf je een citaat van een echt persoon op, zet het dan achter een
  vlag zodat het pas op de site komt als diegene het heeft goedgekeurd.

KWALITEITSEISEN
- Mobile-first. Test op 320, 360 en 390 pixels breed en zorg dat er
  nergens horizontaal gescrold kan worden.
- Zichtbare focus-outline voor toetsenbordgebruikers.
- Respecteer prefers-reduced-motion.
- Tekstcontrast minimaal 4.5:1. Controleer dit, gok het niet.
- Een h1 per pagina, en de koppen mogen geen niveau overslaan.
- Beweging minimaal en met een reden. Twee bewegende dingen op een
  site is genoeg.

WERKWIJZE
- Bouw NIET meteen de hele site. Laat me eerst alleen de hero zien.
  Pas als de toon klopt gaan we verder.
- Verzin geen extra secties die ik niet gevraagd heb.
- Meet je werk in plaats van het te beweren. Draai Lighthouse in
  mobiele modus, niet alleen desktop, en laat de echte scores zien,
  inclusief wat er niet goed is.
- Zeg aan het eind van elke stap eerlijk wat je zelf het zwakst vindt
  aan wat je net hebt gemaakt.
- Schrijf commentaar in de code dat uitlegt WAAROM iets zo is, niet
  wat er staat.
```

### Wat je erbij stuurt

Twee dingen maken meer verschil dan de hele prompt hierboven:

1. **Voorbeeldsites.** Plak de URL erbij: *"neem de kwaliteit van deze
   site als maatstaf: https://bluey.dev"*. Je mag ook de HTML van zo'n
   pagina meesturen, dan ziet het model hoe het echt is opgebouwd.
2. **Echt materiaal.** Screenshots van je eigen werk, het echte logo, de
   echte contactgegevens. Alles wat je niet aanlevert moet het model
   verzinnen, en verzonnen inhoud is de snelste route naar de AI-look.

---

## Deel 3: Waarom dit werkt

### De AI-look komt uit de standaarden, niet uit de vormgeving

Een taalmodel valt zonder tegendruk terug op het gemiddelde van wat het
gezien heeft. En het gemiddelde van "moderne website" is: Inter als
lettertype, `bg-blue-600` als knop, `rounded-lg shadow-md` op alles,
drie kaartjes met iconen, en een gecentreerde hero.

Daarom is dit de belangrijkste regel uit de hele prompt:

```css
--color-*: initial;
```

Daarmee bestaat `bg-blue-500` letterlijk niet meer. Het model kan niet
terugvallen op de standaard en moet jouw kleuren gebruiken. Hetzelfde
geldt voor `--text-*`, `--radius-*` en `--shadow-*`.

### Verboden werken, complimenten niet

"Maak het mooi" en "maak het uniek" leveren niets op, want het model
denkt al dat het mooi is. "Geen emoji-iconen, geen glasmorphism, geen
golfdivider" is uitvoerbaar. Wees dus concreet in wat je NIET wilt.

### De em-dash is de duidelijkste verklikker

Modellen schrijven em-dashes waar mensen komma's gebruiken. Zet dat
verbod erin en de tekst leest meteen menselijker. Hetzelfde geldt voor
"Kortom" en voor zinnen die alles in drieën opsommen.

### Laat het meten in plaats van beweren

Vraag om echte Lighthouse-cijfers in mobiele modus. Bij dit project
bleek daaruit dat de homepage een layoutverschuiving van 0,109 had, en
dat de hero-kop op telefoons op vijf regels stond in plaats van drie.
Allebei onzichtbaar in de gewone controle.

### Reken op rondes

Dit is de eerlijkste tip. De hero van deze site is ongeveer acht keer
omgegooid voordat hij stond. De prompt hierboven verkort dat, maar
vervangt het niet. "Nee, dit is het niet, doe iets anders" is een
volledig geldige en heel nuttige instructie.

---

## Checklist voor oplevering

- [ ] Geen enkele standaard Tailwind-klasse in de code
- [ ] Geen em-dashes in de zichtbare tekst
- [ ] Lighthouse mobiel: 100 op alle vier de onderdelen
- [ ] Geen horizontale scroll op 320 pixels
- [ ] Alle interne links en ankers werken
- [ ] Een h1 per pagina
- [ ] sitemap.xml, robots.txt, og-afbeelding en JSON-LD aanwezig
- [ ] Cookiemelding en juridische pagina's aanwezig
- [ ] Geen verzonnen feiten, cijfers of citaten op de site
