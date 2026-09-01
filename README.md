# Sitefront

De website van Sitefront. Statische site, gebouwd met Astro en Tailwind.

## Draaien

```
npm install
npm run dev
```

De site staat dan op http://localhost:4321

## Bouwen

```
npm run build
```

Het resultaat komt in `dist/`. Dat is wat er live gaat.

## Instellen voor productie

Kopieer `.env.example` naar `.env` en vul de sleutel in:

```
PUBLIC_WEB3FORMS_KEY=jouw-sleutel
```

Zonder die sleutel werkt het contactformulier nog, maar valt het terug
op een vooringevulde e-mail in plaats van direct versturen.

Bij de hostingpartij zet je dezelfde variabele als environment variable.

## Structuur

- `src/data/site.ts` is de enige plek met inhoud: gegevens, diensten,
  projecten, prijzen en vragen. Tekst wijzigen doe je hier.
- `src/pages/` zijn de pagina's.
- `src/components/` zijn de onderdelen; `components/islands/` zijn de
  Vue-onderdelen die in de browser draaien.
- `src/components/parked/` staat buiten de site: onderdelen die we
  bewaard hebben maar niet gebruiken.
- `src/styles/app.css` bevat alle design tokens.

## Kwaliteit

Alle pagina's halen 100 op alle vier de Lighthouse-onderdelen, ook in
mobiele modus. Meten:

```
npm run preview
npm run audit
```
