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
    sleutel: 'playerpath',
    stack: ['Laravel', 'Vue', 'Inertia'],
    naam: 'PlayerPath',
    domein: 'playerpath.nl',
    url: 'https://playerpath.nl' as string | null,
    // Staat er een verslag bij, dan vraagt de kaart bij een klik waar je
    // heen wilt: de website of het verslag. Zie Werk.astro.
    verslag: '/werk/playerpath',
    soort: 'SaaS-platform',
    tekst:
      'Een compleet platform voor keeper- en voetbalscholen. Inschrijven, trainingen, betalen, en een spelerskaart die meegroeit met elk rapport van de trainer.',
    feit: 'Website en verslag',
    alt: 'De website van PlayerPath, software voor keeper- en voetbalscholen.',
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
    sleutel: 'b-advice',
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
    sleutel: 'den-witten-haen',
    stack: [] as string[],
    naam: 'Den Witten Haen',
    domein: 'denwittenhaen.com',
    url: 'https://denwittenhaen.com',
    soort: 'Website met reserveringssysteem',
    tekst:
      'Lunchroom in het hart van Dordrecht. Lunch, high tea en groepen, met een eigen reserveringssysteem zodat gasten meteen een tafel kunnen vastleggen.',
    feit: 'Hart van Dordrecht',
    alt: 'De website van Den Witten Haen in Dordrecht.',
  },
  {
    sleutel: 'aroma',
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
    sleutel: 'rosi',
    stack: [] as string[],
    naam: 'Lunchroom Rosí',
    // Het definitieve domein is nog niet bekend. Zet het hier neer, en de
    // url eronder, zodra de site live staat. Haal dan ook status weg.
    domein: 'binnenkort online',
    url: null as string | null,
    soort: 'Website',
    // 'preview' legt een band over de schermafbeelding, zodat duidelijk
    // is dat dit nog niet de live site is.
    status: 'preview' as const,
    tekst:
      'Lunchroom in het hart van Monster, begonnen als de droom van Fay. Verse koffie, huisgemaakte lunch, taart uit eigen oven en wine nights.',
    feit: 'Binnenkort live',
    alt: 'De nieuwe website van Lunchroom Rosí in Monster.',
  },
  {
    sleutel: 'donker-en-blond',
    stack: [] as string[],
    naam: 'Donker & Blond',
    // Zet domein en url zodra de site live staat, en haal status weg.
    domein: 'binnenkort online',
    url: null as string | null,
    soort: 'Website',
    status: 'preview' as const,
    tekst:
      'Gezellige lunchroom in winkelstraat Hof van den Houte in Etten-Leur. Koffie, lekkernijen, lunch en op vrijdag burgers, met twee terrassen en een grote speelhoek.',
    feit: 'Binnenkort live',
    alt: 'De nieuwe website van lunchroom Donker & Blond in Etten-Leur.',
  },
  {
    sleutel: 'zus-en-zo',
    stack: [] as string[],
    naam: 'Lunchcafé Zus & Zo',
    domein: 'binnenkort online',
    url: null as string | null,
    soort: 'Website met reserveringssysteem',
    status: 'preview' as const,
    tekst:
      'Lunchcafé aan het Raadhuisplein in Etten-Leur. Lunch, high tea en vrijdagavonddiner, met een eigen reserveringsmodule zodat gasten online een tafel vastleggen.',
    feit: 'Binnenkort live',
    alt: 'De nieuwe website van Lunchcafé Zus & Zo in Etten-Leur.',
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
/**
 * PlayerPath: de tekst van het verslag op pages/werk/playerpath.astro.
 * De kaart in de carrousel staat hierboven bij projecten.
 *
 * De stack komt uit composer.json en package.json van het project zelf
 * (Herd/Voetbal systeem). Voeg je iets toe aan de app, werk het dan hier bij.
 */
export const playerpath = {
  naam: 'PlayerPath',
  site: 'https://playerpath.nl',
  app: 'https://app.playerpath.nl',
  soort: 'SaaS-platform voor keeper- en voetbalscholen',
  kort:
    'Van inschrijving tot incasso, en van trainersrapport tot spelerskaart. Een compleet platform waar meerdere voetbalscholen tegelijk in draaien, elk met strikt eigen data.',


  demo: 'https://playerpath.nl/#proefperiode',

  /** Wat het is, in gewone taal. Eén alinea per gedachte. */
  watIsHet: [
    'PlayerPath is software voor keeper- en voetbalscholen: de scholen die naast de club trainingen, kampen en privélessen geven, en daar hun brood mee verdienen. Het neemt alles over wat nu in Excel, WhatsApp en losse Tikkies zit, en voegt er iets aan toe wat die losse gereedschappen nooit konden: zichtbaar maken hoe een speler vooruitgaat.',
    'Het is een SaaS-platform. Dat betekent dat elke school gewoon inlogt op app.playerpath.nl, zonder iets te installeren, en dat alle scholen in hetzelfde systeem draaien. Toch ziet een school nooit iets van een andere school. Die scheiding zit diep in de techniek, niet in een instelling die iemand per ongeluk verkeerd kan zetten.',
    'Ik heb het van het eerste idee tot de live omgeving zelf bedacht, ontworpen en gebouwd: het datamodel, de schermen, de betalingen, de marketingsite en de server waar het op draait.',
  ],

  /** De vier mensen die het gebruiken, en wat het voor ieder doet. */
  voorWie: [
    {
      rol: 'De eigenaar',
      tekst:
        'Eén dashboard met actieve spelers, omzet, openstaande rekeningen en wie er al een tijd geen rapport heeft gehad. Inschrijvingen komen binnen in een inbox, en met één klik op goedkeuren staan speler, ouderaccount en betaling klaar.',
    },
    {
      rol: 'De trainer',
      tekst:
        'Ziet alleen zijn eigen groepen en trainingen. Vinkt op zijn telefoon naast het veld af wie er is, en vult na de training per speler in dertig seconden een rapport in, voorgevuld met het vorige.',
    },
    {
      rol: 'De ouder',
      tekst:
        'Schrijft zijn kind in via één link, betaalt met iDEAL of incasso, meldt af voor een training en krijgt bericht zodra er een nieuw rapport is. In een tijdlijn ziet hij hoe zijn kind groeit, zonder ooit de cijfers van een ander kind te zien.',
    },
    {
      rol: 'De speler',
      tekst:
        'Krijgt een eigen spelerskaart, zoals in een voetbalgame, die na elk rapport verandert. Een kind zonder e-mailadres krijgt een eigen link zonder inlog, die je als app op de tablet zet.',
    },
  ],

  /** Van nieuwe school tot draaiende school, stap voor stap. */
  hoeHetWerkt: [
    {
      titel: 'Een school start nooit met een leeg scherm',
      tekst:
        'Een nieuwe school krijgt meteen voorbeeldspelers met rapporten, een groep en trainingen, zodat je direct ziet wat het product doet. Een rondleiding loopt door de echte app, en een wizard van negen stappen richt daarna je eigen school in: naam, logo, kleur, locatie, aanbod en betalen. Zodra je klaar bent, verdwijnen de voorbeelden vanzelf.',
    },
    {
      titel: 'Ouders schrijven zichzelf in',
      tekst:
        'Elke school heeft een eigen aanmeldpagina, die ook op de eigen website van de school past. Eerst het aanbod, met prijs, data, leeftijd en hoeveel plekken er nog zijn; pas daarna de gegevens. Is iets vol, dan komt er een wachtlijst, en schuift de volgende vanzelf door als er een plek vrijkomt.',
    },
    {
      titel: 'Trainen, afvinken, beoordelen',
      tekst:
        'Trainingen herhalen wekelijks, met trainer en locatie. De trainer vinkt aanwezigheid af, de ouder meldt zelf af, en die twee worden apart bijgehouden. Na de training een rapport van zes categorieën, met keeper-onderdelen als reflexen, uitkomen en voetenwerk apart van die voor veldspelers.',
    },
    {
      titel: 'Het geld komt vanzelf binnen',
      tekst:
        'Via Mollie: iDEAL, maandelijkse incasso met mandaat, of in termijnen. Veertien dagen voor een incasso krijgt de ouder een aankondiging. Mislukt een betaling, dan gaat er na drie, zeven en veertien dagen een herinnering met een nieuwe betaallink. De eigenaar hoeft niets na te lopen.',
    },
  ],

  /** De spelerskaart, het deel waar kinderen en ouders voor terugkomen. */
  kaart: [
    'De spelerskaart is het hart van PlayerPath. Elke speler krijgt er een, met een overall rating, zes categorieën, badges en een level. Na elk rapport rekent het systeem de kaart opnieuw uit, en een kind ziet zijn eigen vooruitgang letterlijk groeien.',
    'Er zitten drie getallen in die bewust los van elkaar staan. De rating zegt hoe goed je bent ten opzichte van je leeftijdsgroep en kan dalen. XP staat voor inzet: aanwezig zijn, rapporten, groei. Dat daalt nooit. En het level, van brons via zilver en goud naar elite, loopt op XP. Wie trouw komt trainen, komt dus op goud, ook zonder groot talent.',
    'De kaart kantelt mee als je hem beweegt, het frame verandert per level, en elk seizoen blijft bewaard als verzamelkaart. Er zijn bewust geen ranglijsten: een kind van elf hoort niet op plek veertien van twintig te staan.',
  ],

  /** Keuzes die PlayerPath bewust anders maakt, van playerpath.nl. */
  keuzes: [
    { titel: 'Geen prijs per speler', tekst: 'Eén bedrag per maand. Groeit een school van veertig naar honderdveertig spelers, dan blijft de rekening gelijk.' },
    { titel: 'Geen jaarcontract', tekst: 'Geen opstartkosten en maandelijks opzegbaar. Als het niet werkt, moet je weg kunnen zonder gedoe.' },
    { titel: 'Geen ranglijsten', tekst: 'Groei ten opzichte van jezelf en je leeftijdsgroep, geen klassement waarin iemand altijd onderaan staat.' },
    { titel: 'Gegevens blijven van de school', tekst: 'Het gaat om kinderen. Data blijft binnen de EU, gaat niet naar derden, en bij vertrek krijg je een export mee.' },
  ],

  /** Zoals op playerpath.nl/tarieven, exclusief btw. */
  pakketten: [
    { naam: 'Basic', prijs: 89, voor: 'Kleine scholen', tekst: 'Inschrijven, betalen, leden, rooster, aanwezigheid en mededelingen.' },
    { naam: 'Pro', prijs: 119, voor: 'Groeiende scholen', tekst: 'Alles van Basic, plus spelerskaarten, rapporten, doelen en voortgang voor ouders.' },
    { naam: 'Ultimate', prijs: 249, voor: 'Grote scholen', tekst: 'Alles van Pro, plus eigen logo en domein, meerdere vestigingen en exports.' },
  ],

  /** Per laag, zodat je ziet waarom elk stuk er zit. */
  stack: [
    {
      laag: 'Backend',
      items: ['Laravel 12', 'PHP 8.4'],
      waarom: 'Routes, controllers, validatie en alle rekenregels. Wat mag en wat klopt, wordt hier beslist.',
    },
    {
      laag: 'Frontend',
      items: ['Vue 3', 'Inertia 2', 'TypeScript', 'Tailwind CSS'],
      waarom: 'Voelt als een app, zonder losse API ertussen. De controller geeft data mee, Vue krijgt het als props.',
    },
    {
      laag: 'Inloggen en rechten',
      items: ['Laravel Fortify', 'Spatie Permission'],
      waarom: 'Vier rollen: eigenaar, trainer, ouder en speler. Elk ziet alleen wat voor hem bedoeld is.',
    },
    {
      laag: 'Betalen',
      items: ['Mollie'],
      waarom: 'iDEAL, doorlopende incasso met mandaat, termijnen, storno’s en herinneringen.',
    },
    {
      laag: 'Data en achtergrond',
      items: ['MySQL', 'Redis', 'Queues'],
      waarom: 'Mails, maandoverzichten en facturen draaien op de achtergrond, zodat niemand op een scherm wacht.',
    },
    {
      laag: 'Hosting en kwaliteit',
      items: ['Hetzner (EU)', 'Nginx', 'PHPUnit', 'Astro'],
      waarom: 'Kinderdata blijft binnen de EU. De marketingsite is apart gebouwd in Astro, net als deze site.',
    },
  ],

  /** Het verslag: probleem, aanpak, wat het kan, wat ik leerde. */
  verslag: {
    probleem:
      'Een keeper- of voetbalschool draait vaak op WhatsApp-groepen, een Excel-lijst en losse Tikkies. Ouders weten niet hoe hun kind vooruitgaat, trainers schrijven niets op, en de eigenaar zit ’s avonds betalingen na te lopen. Bestaande pakketten zijn gebouwd voor clubs met vrijwilligers, niet voor een school die ervan moet leven.',
    aanpak: [
      {
        titel: 'Eerst het fundament, dan pas de features',
        tekst:
          'Meerdere scholen in één systeem betekent dat de ene school nooit de data van de andere mag zien. Dat is geregeld op één centrale plek aan de serverkant, en er zijn tests die dat bij elke wijziging opnieuw bewijzen.',
      },
      {
        titel: 'Het onderscheidende deel als eerste werkend',
        tekst:
          'Een trainer vult in dertig seconden een rapport in, en de spelerskaart van het kind verandert zichtbaar mee. Rating, XP en level komen uit één rekenkern, zodat elk getal op de kaart altijd uit te leggen is.',
      },
      {
        titel: 'Betalen bewust als laatste',
        tekst:
          'Het gevoeligste stuk kwam pas op een product dat al werkte. Geld staat overal in hele centen, nooit als kommagetal, en elke betaalstatus loopt via een vaste statusmachine.',
      },
      {
        titel: 'In fasen, en elke fase getest',
        tekst:
          'Twaalf fasen, van datamodel tot productie. Een fase begon pas als de vorige werkte, en elke werkende stap staat in git. Daardoor kan er altijd terug.',
      },
    ],
    functies: [
      'Online inschrijven per school, met wachtlijst',
      'Trainingen plannen en aanwezigheid afvinken',
      'Rapport in 30 seconden, spelerskaart groeit mee',
      'Voortgangsgrafieken en doelen per speler',
      'iDEAL, incasso, termijnen en facturen via Mollie',
      'Eigen logo en kleur per school',
      'Mededelingen en meldingen naar ouders',
      'Exports naar Excel voor leden en financiën',
      'Installeerbaar op de telefoon als app',
      'Platformbeheer: scholen, pakketten en logboek',
    ],
    geleerd: [
      {
        titel: 'Beveiliging hoort in de server, niet in het scherm',
        tekst:
          'Een knop verbergen is geen beveiliging. Wie wat mag zien, beslist de server, en een test controleert het.',
      },
      {
        titel: 'Een getal moet uit te leggen zijn',
        tekst:
          'Elke XP-punt is een regel met een reden. Vraagt een ouder waarom de kaart zilver is, dan is daar een antwoord op.',
      },
      {
        titel: 'Tests zijn wat je laat doorbouwen',
        tekst:
          'Bij bijna achthonderd tests durf je iets om te gooien. Zonder die tests was elke nieuwe functie een gok geweest.',
      },
    ],
  },
};

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
  melding: false,
};
