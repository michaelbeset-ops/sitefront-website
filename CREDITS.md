# Beeldmateriaal

## Projecten
De afbeeldingen bij de projecten komen van de sites zelf en staan op onze
eigen server, dus geen hotlinks naar de sites van klanten.

- B-Advice, deelafbeelding van b-advice.info
- Aroma Lunchroom, interieurfoto van aromalunchroom.com
- Slob Tuinen, deelafbeelding van slobtuinen.nl

Even bevestigen bij de klanten dat je hun site en beeld mag tonen. Bij de
interieurfoto van Aroma kan het werk van een fotograaf zijn.

## Logo

- Bron: `Logo Sitefront-geconverteerd-van-png.svg`, aangeleverd door Michael
- Component: `src/components/Logo.astro` en `src/components/Beeldmerk.astro`

Het aangeleverde bestand was met imagetracer.js uit een PNG getrokken en telde
110 paden. Daarvan waren er 97 ruis: haarlijntjes uit de anti-aliasing, plus een
dekkend vlak dat het logo onbruikbaar maakte op een donkere achtergrond. De
component bevat alleen de 13 paden die het logo echt zijn, met currentColor als
vulling zodat hij wit is op het blauw en donker op wit.

Let op: omdat het een natrekking van een PNG is, zijn de rondingen benaderd met
korte rechte stukjes. Op logoformaat zie je dat niet, op een groot vlak wel.
Heb je het originele vectorbestand (van de ontwerper, .ai of .svg), stuur dat
dan, want dat is beter.

## Achtergrond in de hero

De eerder toegevoegde Unsplash-foto is er op verzoek weer uit. De hero heeft nu
een egaal blauwverloop. Het bestand is verwijderd.
