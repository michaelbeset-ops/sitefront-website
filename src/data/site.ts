/**
 * Alle tekst en gegevens van de site op één plek.
 * Componenten bevatten geen losse copy, zodat je hier kunt schrijven
 * zonder door de markup te hoeven.
 *
 * TE CONTROLEREN door Michael, dit zijn bedrijfsafspraken en geen
 * ontwerpkeuzes: de antwoorden in de FAQ en de inhoud van de pakketten.
 */

export const bedrijf = {
  naam: 'Sitefront',
  plaats: 'Dordrecht',
  email: 'info@sitefront.nl',
  instagram: 'https://www.instagram.com/sitefrontnl/',
  linkedin: 'https://www.linkedin.com/in/michael-beset-25822240a/',
  kvk: '42057398',
  // De live site toont hier nog "[nummer invullen]". Invullen of weglaten.
  btw: null as string | null,

  /**
   * Portretfoto. Zet hier het pad neer zodra je er een hebt, dan
   * verschijnt hij vanzelf naast "Waarom Sitefront":
   *
   *   1. zet het bestand in src/assets/ (bijvoorbeeld michael.jpg)
   *   2. importeer het bovenin Waarom.astro
   *   3. zet portret op true
   *
   * Zolang dit false is blijft de sectie tekst-only, zodat er geen
   * leeg grijs vak op de pagina staat te wachten.
   */
  portret: false,
};

/** Het hoofdmenu, in de volgorde die Michael heeft gekozen. */
export const navigatie = [
  { label: 'Home', href: '/' },
  { label: 'Diensten', href: '/#diensten' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Werk', href: '/#werk' },
  { label: 'Contact', href: '/#contact' },
];

export const heroTrust = [
  'Van eerste gesprek tot oplevering bij mij',
  'Broncode en database op jouw naam',
  'Eén vast aanspreekpunt, geen tussenlagen',
  'Werkzaam in Dordrecht en omstreken',
];

export const diensten = [
  {
    icoon: 'app' as const,
    titel: 'Software op maat',
    link: '/software-op-maat',
    haak: 'Een systeem dat om jouw werk heen past.',
    tekst:
      'Inloggen, rollen en rechten, dashboards, rapportages. Gebouwd rond de manier waarop jij werkt, in plaats van dat jij je aanpast aan een pakket.',
    punten: ['Inlog en gebruikersrollen', 'Dashboards en rapportage', 'Groeit mee met je bedrijf'],
  },
  {
    icoon: 'site' as const,
    titel: 'Websites',
    haak: 'Snel, vindbaar en van jou.',
    tekst:
      'Een site die laadt voordat iemand afhaakt en die gevonden wordt door de mensen die je zoekt. Op maat ontworpen, geen sjabloon met een ander logo erop.',
    punten: ['Ontwerp op maat', 'Technische SEO ingebouwd', 'Snel op elk toestel'],
  },
  {
    icoon: 'koppeling' as const,
    titel: 'Koppelingen',
    haak: 'Laat je pakketten met elkaar praten.',
    tekst:
      'Boekhouding, voorraad, planning, webshop. Zolang die los van elkaar staan zit jij ertussen om gegevens over te tikken. Dat is precies wat een koppeling weghaalt.',
    punten: ['Koppelen via API', 'Gegevens automatisch synchroon', 'Minder overtypen, minder fouten'],
  },
  {
    icoon: 'automatiseren' as const,
    titel: 'Processen automatiseren',
    haak: 'Het handwerk eruit halen.',
    tekst:
      'Terugkerende stappen die nu in Excel of in iemands hoofd zitten, kun je laten uitvoeren door een systeem. Dat scheelt tijd, en het gaat niet mis als iemand ziek is.',
    punten: ['Vaste stappen geautomatiseerd', 'Meldingen op het juiste moment', 'Altijd terug te vinden'],
  },
  {
    icoon: 'betalen' as const,
    titel: 'Betalen en factureren',
    haak: 'Geld binnen zonder gedoe.',
    tekst:
      'Online betalen, abonnementen, facturen die vanzelf de deur uit gaan. Gekoppeld aan wat je al gebruikt, zodat je administratie klopt zonder dat je erover nadenkt.',
    punten: ['iDEAL en creditcard', 'Terugkerende betalingen', 'Facturen automatisch'],
  },
  {
    icoon: 'beheer' as const,
    titel: 'Beheer en doorontwikkeling',
    haak: 'Het houdt niet op bij oplevering.',
    tekst:
      'Updates, beveiliging, en nieuwe functies wanneer je bedrijf erom vraagt. Je zit nergens aan vast, maar je staat er ook niet alleen voor.',
    punten: ['Updates en beveiliging', 'Nieuwe functies in overleg', 'Nooit een verplicht abonnement'],
  },
];

export const werkwijze = [
  {
    nummer: '01',
    titel: 'We gaan zitten',
    tekst:
      'Bij jou of bij mij, met koffie erbij. Je vertelt wat er nu misgaat of blijft liggen. Ik stel vooral veel vragen, want de juiste oplossing begint bij het juiste probleem.',
  },
  {
    nummer: '02',
    titel: 'Een plan met een prijs',
    tekst:
      'Je krijgt op papier wat ik ga bouwen, met welke techniek, in welke volgorde en wat het kost. Geen open eind, en geen technische termen zonder uitleg.',
  },
  {
    nummer: '03',
    titel: 'Bouwen, met de deur open',
    tekst:
      'Je kunt tussendoor meekijken op een testadres. Zo zie je het groeien en kunnen we bijsturen zolang dat nog goedkoop is.',
  },
  {
    nummer: '04',
    titel: 'Live, en daarna',
    tekst:
      'Oplevering met uitleg, alles op jouw naam. Daarna help ik je verder als je dat wilt, met onderhoud of met de volgende stap.',
  },
];

export const pakketten = [
  {
    naam: 'Software op maat',
    voor: 'Voor een systeem dat om jouw werkwijze heen gebouwd is.',
    prijs: 'Op aanvraag',
    prijsnoot: 'omvang bepalen we samen in de kennismaking',
    punten: [
      'Inlog, rollen en rechten',
      'Dashboards en rapportage',
      'Betalingen en facturatie',
      'Koppelingen met wat je al gebruikt',
      'In fasen op te leveren',
    ],
    uitgelicht: true,
  },
  {
    naam: 'Website',
    voor: 'Voor ondernemers die online gevonden willen worden.',
    prijs: 'Op aanvraag',
    prijsnoot: 'offerte vooraf, geen nacalculatie zonder overleg',
    punten: [
      'Ontwerp op maat, geen sjabloon',
      'Technische SEO ingebouwd',
      'Getest op snelheid en toegankelijkheid',
      'Formulieren en koppelingen',
      'Broncode en domein op jouw naam',
    ],
    uitgelicht: false,
  },
  {
    naam: 'Koppelen en automatiseren',
    voor: 'Voor wie al software heeft, maar er nog te veel handwerk omheen zit.',
    prijs: 'Op aanvraag',
    prijsnoot: 'vaak kleiner dan je denkt, we kijken eerst',
    punten: [
      'Pakketten aan elkaar koppelen',
      'Terugkerend handwerk automatiseren',
      'Gegevens automatisch synchroon',
      'Los project, geen langlopend traject',
      'Werkt met wat je nu al gebruikt',
    ],
    uitgelicht: false,
  },
];

export const vragen = [
  {
    vraag: 'Kun je koppelen met de pakketten die ik al gebruik?',
    antwoord:
      'Bijna altijd. Boekhouding, planning, kassa, webshop: de meeste pakketten hebben tegenwoordig een API, en daar kan ik op aansluiten. Heeft een pakket er geen, dan zeg ik dat eerlijk en kijken we naar een andere route, bijvoorbeeld via import en export.',
  },
  {
    vraag: 'Moet alles in een keer, of kan het in stappen?',
    antwoord:
      'In stappen, en dat raad ik meestal ook aan. We bouwen eerst het deel dat je grootste probleem oplost en zetten dat live. Werkt dat, dan bouwen we verder. Zo zie je snel resultaat en betaal je nooit voor iets waarvan nog moet blijken of je het nodig hebt.',
  },
  {
    vraag: 'Wat kost het?',
    antwoord:
      'Dat hangt af van wat het moet doen. Na de kennismaking krijg je een offerte met een vaste omvang en prijs, zodat je weet waar je aan toe bent voordat er iets gebouwd wordt. Geen nacalculatie zonder overleg.',
  },
  {
    vraag: 'Waar draait mijn systeem, en is mijn data veilig?',
    antwoord:
      'Op hosting die op jouw naam staat, bij een Europese partij als je dat wilt. Verbindingen zijn versleuteld, back-ups zijn geregeld voordat er iets live gaat, en wie wat mag zien regelen we met rollen en rechten in het systeem zelf.',
  },
  {
    vraag: 'Is het van mij, of zit ik aan je vast?',
    antwoord:
      'Het is van jou. Broncode, database, domein en hosting staan op jouw naam, en ik bouw met techniek waar duizenden ontwikkelaars mee werken. Wil je ooit verder met iemand anders, dan kan diegene er direct mee uit de voeten.',
  },
  {
    vraag: 'Wat als er iets stuk gaat als het live staat?',
    antwoord:
      'Dan los ik het op. Voor doorlopend onderhoud kunnen we een afspraak maken, met updates, back-ups en beveiliging, maar het is geen voorwaarde om met me te werken. Ook zonder contract laat ik je niet staan met een systeem dat stilligt.',
  },
];

export const projectTypes = [
  'Website',
  'Webapp of software op maat',
  'Bestaande site verbeteren',
  'Weet ik nog niet',
];

export const waarom = [
  {
    titel: 'Je praat met de bouwer',
    tekst:
      'Geen accountmanager die het doorgeeft aan een team dat je nooit spreekt. Wat we afspreken bouw ik zelf, dus er gaat onderweg niets verloren.',
  },
  {
    titel: 'Ik begin bij je proces, niet bij de techniek',
    tekst:
      'Eerst begrijpen hoe je werkt, dan pas kiezen waarmee ik bouw. Andersom levert software op die technisch klopt maar in de praktijk niemand gebruikt.',
  },
  {
    titel: 'Alles blijft van jou',
    tekst:
      'Broncode, database, domein en hosting staan op jouw naam. Wil je ooit verder met iemand anders, dan kan dat gewoon.',
  },
  {
    titel: 'Eerlijk over wat je nodig hebt',
    tekst:
      'Soms is een goede website genoeg en heb je dat systeem helemaal niet nodig. Dan zeg ik dat, ook al levert het mij minder op.',
  },
];

/**
 * Echte, opgeleverde projecten. De teksten hieronder komen uit wat de
 * sites zelf vertellen, niet uit mijn fantasie.
 *
 * De afbeeldingen staan in src/assets/werk en worden in Werk.astro
 * geimporteerd, zodat Astro ze kan optimaliseren.
 */
export const projecten = [
  {
    sleutel: 'b-advice',
    // Vul in waarmee je dit gebouwd hebt, dan verschijnt het op de kaart.
    // Leeg laten mag: dan toont de kaart het gewoon niet.
    stack: [] as string[],
    naam: 'B-Advice',
    domein: 'b-advice.info',
    url: 'https://b-advice.info',
    soort: 'Website',
    tekst:
      'Specialist in ondergrondse afvalinfrastructuur, van plaatsing tot digitaal containerbeheer. De site moet in een oogopslag duidelijk maken wat ze doen voor gemeenten die daarover beslissen.',
    feit: 'Actief in ruim veertig gemeenten',
    alt: 'De website van B-Advice, specialist in ondergrondse afvalcontainers.',
  },
  {
    sleutel: 'slobtuinen',
    // Vul in waarmee je dit gebouwd hebt, dan verschijnt het op de kaart.
    // Leeg laten mag: dan toont de kaart het gewoon niet.
    stack: [] as string[],
    naam: 'Slob Tuinen',
    domein: 'slobtuinen.nl',
    url: 'https://slobtuinen.nl',
    soort: 'Website',
    tekst:
      'Grond, groen en straat uit Leerdam. Tuinaanleg, grondverzet, beschoeiing en straatwerk, met het vakmanschap van Martin Slob als uitgangspunt.',
    feit: 'Leerdam en omgeving',
    alt: 'De website van Slob Tuinen, grond groen en straat.',
  },
  {
    sleutel: 'aroma',
    // Vul in waarmee je dit gebouwd hebt, dan verschijnt het op de kaart.
    // Leeg laten mag: dan toont de kaart het gewoon niet.
    stack: [] as string[],
    naam: 'Aroma Lunchroom',
    domein: 'aromalunchroom.com',
    url: 'https://aromalunchroom.com',
    soort: 'Website',
    tekst:
      'Lunchroom in hartje Gorinchem met Grieks ontbijt, verse lunch en specialty koffie. Een site die de sfeer van de zaak laat zien en meteen duidelijk maakt wanneer je terecht kunt.',
    feit: 'Open maandag tot en met zaterdag',
    alt: 'De website van Aroma Lunchroom in Gorinchem.',
  },
  {
    sleutel: 'den-witten-haen',
    // Vul in waarmee je dit gebouwd hebt, dan verschijnt het op de kaart.
    // Leeg laten mag: dan toont de kaart het gewoon niet.
    stack: [] as string[],
    naam: 'Den Witten Haen',
    domein: 'denwittenhaen.nl',
    // Nog niet live: op denwittenhaen.nl staat op dit moment nog de oude
    // site. Zet de url hier zodra de nieuwe online staat, dan wordt de
    // kaart vanzelf klikbaar.
    url: null as string | null,
    soort: 'Website met reserveringssysteem',
    // 'preview' legt een band over de schermafbeelding, zodat duidelijk
    // is dat dit nog niet de live site is.
    status: 'preview' as const,
    tekst:
      'Lunchroom in het hart van Dordrecht. Lunch, high tea en groepen, met een eigen reserveringssysteem zodat gasten meteen een tafel kunnen vastleggen.',
    feit: 'Binnenkort live',
    alt: 'De nieuwe website van Den Witten Haen in Dordrecht.',
  },
];

/**
 * LET OP, DIT MOET NOG BEVESTIGD WORDEN.
 *
 * Michael vroeg mij dit citaat te schrijven. Het is dus een concept en
 * geen uitspraak die Ricardo daadwerkelijk gedaan heeft. Laat hem het
 * lezen en goedkeuren (of iets in zijn eigen woorden geven) voordat de
 * site live gaat. Een verzonnen aanbeveling op naam van een echt
 * persoon wil je niet publiceren.
 *
 * Vul "rol" aan zodra je weet hoe hij genoemd wil worden.
 */
export const citaat = {
  bevestigd: false,
  tekst:
    'Michael denkt mee in plaats van alleen te bouwen. Hij heeft me een keer afgeraden iets te laten maken omdat ik het niet nodig had. Daar koop je uiteindelijk meer voor.',
  naam: 'Ricardo Beset',
  rol: null as string | null,
};

/**
 * Alleen de namen. Wie het kent herkent het, en wie het niet kent
 * heeft niks aan een uitleg van één zin. De eerste vijf gaf Michael
 * zelf op, de laatste drie horen daarbij; haal weg wat je niet wilt
 * claimen.
 */
export const techniek = [
  'Laravel',
  'Vue.js',
  'Inertia.js',
  'React',
  'Astro',
  'Tailwind CSS',
  'TypeScript',
  'MySQL',
];

/**
 * Cookiemelding.
 *
 * Staat bewust uit. Deze site plaatst op dit moment niets: geen
 * statistieken, geen advertentiepixels, en de lettertypen komen van de
 * site zelf. Toestemming vragen voor iets wat niet gebeurt is juridisch
 * niet nodig en zit bezoekers alleen in de weg.
 *
 * Zet 'melding' op true zodra je wel iets plaatst dat toestemming
 * vereist, bijvoorbeeld statistieken. De balk is af en werkt meteen.
 * Werk dan ook cookiebeleid.astro bij met welke cookies het zijn.
 */
export const cookieInstellingen = {
  melding: true,
};
