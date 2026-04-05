export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  datePublished: string
  dateModified: string
  author: string
  tags: string[]
  /** Interna länkar som ska visas i RelatedContent */
  relatedLinks: { title: string; href: string; description: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'diffusa-utslapp-guide',
    title: 'Diffusa utsläpp – vad de är och varför de är svåra att mäta',
    excerpt: 'Diffusa utsläpp är okontrollerade gasläckage som sprids utan skorsten eller definierad utsläppspunkt. De utgör ofta den mest osäkra posten i ett klimatbokslut – och kräver helt andra mätmetoder än punktutsläpp.',
    content: `## Vad är diffusa utsläpp?

**Diffusa utsläpp är gasläckage som sprids utan en definierad utsläppspunkt – till skillnad från punktutsläpp som lämnar en skorsten, ventil eller avgasrör.** De uppstår genom sprickor i täckskikt, otäta flänsförband, biologiska processer i öppna ytor och läckage från underjordiska rörledningar. Gemensamt för diffusa utsläpp är att de är osynliga, utspridda över stora ytor och svåra att kvantifiera med traditionella metoder.

Termen "diffusa utsläpp" (engelska: fugitive emissions) används inom miljörapportering, klimatredovisning och regulatoriska ramverk som CSRD, EU:s metanförordning och OGMP 2.0. Det är en teknisk klassificering som avgör vilken mätmetod som krävs.

## Varför är diffusa utsläpp viktiga?

**Diffusa utsläpp av metan och lustgas står ofta för en betydande andel av en anläggnings totala växthusgasutsläpp, men de är samtidigt den post som har störst mätosäkerhet i klimatbokslutet.** Det innebär att verksamheter kan rapportera utsläppsnivåer som avviker kraftigt från verkligheten – uppåt eller nedåt – utan att veta om det.

Metan (CH₄) har en global uppvärmningspotential (GWP) som är 28 gånger högre än koldioxid över 100 år. Lustgas (N₂O) har en GWP på 265. Det innebär att även små mängder av dessa gaser har stor klimatpåverkan. När utsläppen dessutom är diffusa och svåra att kvantifiera blir konsekvensen dubbel: stor klimateffekt och stor osäkerhet i rapporteringen.

## Hur skiljer sig diffusa utsläpp från punktutsläpp?

**Punktutsläpp lämnar en känd utsläppspunkt (skorsten, ventil, avgasrör) och kan mätas med fasta sensorer eller provtagning i utsläppspunkten. Diffusa utsläpp saknar definierad utsläppspunkt och kräver helt andra mätmetoder.** Här är de viktigaste skillnaderna:

**Punktutsläpp** har en känd källa, mäts vanligen med kontinuerliga mätsystem (CEMS) eller engångsprovtagning och kan ofta beräknas från bränsleförbrukning eller processdrift. Osäkerheten är typiskt låg.

**Diffusa utsläpp** kommer från utbredda ytor (deponiytor, sedimenteringsbassänger), okända läckpunkter (packningar, ventiler) eller biologiska processer (nedbrytning, nitrifikation). De kräver mätmetoder som kan täcka stora ytor och identifiera rumslig variation – exempelvis drönarbaserad mätning med TDLAS-sensorer eller OGI-kameror.

## Varför fungerar inte schabloner för diffusa utsläpp?

**Schabloner (generella emissionsfaktorer) baseras på genomsnittsvärden för en verksamhetstyp och tar inte hänsyn till anläggningens faktiska skick, driftförhållanden eller lokala förutsättningar.** Det innebär att en deponi med bristande täckskikt kan rapportera samma utsläpp som en med intakt täckning – trots att verkligheten skiljer sig med en faktor 2–10x.

Schabloner utvecklades som en pragmatisk lösning när mätning var för dyrt eller tekniskt svårt. De har fortfarande en roll som startpunkt, men regulatoriska ramverk som CSRD och EU:s metanförordning driver mot krav på bättre dataunderlag. Revisorer förväntas gradvis kräva verifierade mätvärden framför schabloner, särskilt för väsentliga utsläppsposter.

Problemet med schabloner är inte bara precisionen utan även att de inte identifierar var utsläppen sker. Utan rumslig information kan verksamheten inte rikta åtgärder dit de gör störst skillnad.

## Vilka branscher har störst utmaning med diffusa utsläpp?

**Deponier, reningsverk, biogasanläggningar, raffinaderier och gruvdrift har typiskt de största och mest osäkra diffusa utsläppen.** Gemensamt för dessa branscher är att utsläppen uppstår från stora ytor eller många utspridda komponenter.

**Deponier** genererar metan genom anaerob nedbrytning av organiskt avfall. Gasen migrerar genom täckskiktet, och utsläppsfördelningen beror på täckskiktets kvalitet och tjocklek. Hotspots kan vara lokaliserade till sprickor, genomföringar och tunna partier.

**Reningsverk** producerar metan och lustgas från biologiska processer i öppna bassänger. Utsläppen varierar med processparametrar som temperatur, belastning och syretillgång.

**Biogasanläggningar** har potentiella läckpunkter vid rötkammare, gasledningar, uppgraderingsanläggningar och flänsförband. Läckor innebär både klimatpåverkan och produktionsförluster.

**Raffinaderier och petrokemisk industri** har tusentals potentiella läckpunkter i form av ventiler, flänsar, kompressorer och pumptätningar. EU:s metanförordning kräver systematisk LDAR-inspektion av dessa.

**Gruvdrift** genererar diffusa utsläpp från dammdeponier, processer och ventilation av underjordiska gruvor.

## Hur mäts diffusa utsläpp i praktiken?

**Drönarbaserad mätning med TDLAS-sensorer och OGI-kameror är en metod som kan täcka stora ytor, identifiera enskilda läckpunkter och kvantifiera utsläpp med dokumenterad mätosäkerhet.** Drönaren flyger systematiskt över mätområdet och registrerar gaskoncentrationer med GPS-koppling.

TDLAS (Tunable Diode Laser Absorption Spectroscopy) mäter gaskoncentrationer kvantitativt med hög selektivitet för specifika gasarter – primärt metan. OGI (Optical Gas Imaging) använder infrarött ljus för att visualisera gasplymer i realtid och identifiera läckpunkter visuellt.

Plymmätning (mass balance/flux wall) är en kompletterande metod där drönaren flyger tvärgående mot vindriktningen nedvinds om anläggningen och mäter den totala utsläppsplymen. Det ger totalutsläpp i kg/h med kvantifierad osäkerhet.

Resultatet levereras som georefererade kartor, hotspot-listor och kvantifierade utsläppsrapporter med dokumenterad metodik och mätosäkerhet.

## Vanliga missförstånd om diffusa utsläpp

**Det vanligaste missförståndet är att diffusa utsläpp är försumbara för att de är osynliga och utspridda.** I verkligheten kan diffusa metanutsläpp utgöra den dominerande klimatposten för verksamheter som deponier och reningsverk.

Andra vanliga missförstånd:

**"Vi har ingen mätplikt"** – CSRD kräver Scope 1-data för berörda företag, EU:s metanförordning kräver LDAR-program, och SMP kräver årlig miljörapportering. Att inte mäta diffusa utsläpp innebär att rapporteringen baseras på osäkra schabloner.

**"Schablonerna räcker"** – Schabloner kan avvika kraftigt från verkligheten. Revisorer och tillsynsmyndigheter förväntas gradvis kräva bättre underlag.

**"Det går inte att mäta"** – Tekniken har utvecklats avsevärt. Drönarbaserad mätning med TDLAS och OGI gör det möjligt att kartlägga diffusa utsläpp kostnadseffektivt och med hög rumslig upplösning.

## Regulatoriska krav på mätning av diffusa utsläpp

**Tre regulatoriska ramverk driver krav på att diffusa utsläpp mäts med faktiska data i Sverige: CSRD, EU:s metanförordning och svenska SMP-krav.** Varje ramverk har sitt fokus men de överlappar och kompletterar varandra.

CSRD (Corporate Sustainability Reporting Directive) kräver Scope 1-rapportering i ton CO₂e med dokumenterad metodik. Diffusa utsläpp är typiskt den mest osäkra Scope 1-posten.

EU:s metanförordning (2024/1787) kräver LDAR-program med systematisk inspektion, kvantifiering och reparation av läckor inom energisektorn.

SMP (Svenska MiljörapporteringsPortalen) kräver årlig rapportering av utsläpp till luft för tillståndspliktiga verksamheter, och bästa tillgängliga teknik bör användas.

## När bör en verksamhet mäta sina diffusa utsläpp?

**En verksamhet bör mäta sina diffusa utsläpp när den har väsentliga utsläppskällor som inte kan kvantifieras tillförlitligt genom beräkning – särskilt inför regulatorisk rapportering eller revision.** Konkreta situationer:

- Inför första CSRD-rapportering – för att fastställa en verifierad baslinje
- Vid tillståndsansökan eller tillståndsförnyelse – för att stödja miljökonsekvensbeskrivningen
- Vid misstanke om förhöjda utsläpp – för att identifiera och prioritera åtgärder
- Inför eller efter åtgärder – för att dokumentera effekt
- Vid krav från tillsynsmyndighet eller revisor – för att styrka rapporterade data
- Som del av LDAR-program – enligt EU:s metanförordning`,
    datePublished: '2025-03-20T08:00:00+01:00',
    dateModified: '2025-03-20T08:00:00+01:00',
    author: 'EcoDrone Redaktion',
    tags: ['Diffusa utsläpp', 'Mätmetodik', 'Schabloner', 'TDLAS', 'OGI'],
    relatedLinks: [
      { title: 'Metanmätning med TDLAS-sensor', href: '/tjanster/metanmatning', description: 'Kvantitativ metanmätning med hög precision för industriella tillämpningar.' },
      { title: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion', description: 'Systematisk läckdetektering och kvantifiering enligt EU:s metanförordning.' },
      { title: 'CSRD Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Krav på Scope 1-rapportering och hur mätdata ersätter schabloner.' },
      { title: 'Metanmätning vid deponier', href: '/branscher/deponier', description: 'Kartlägg metanutsläpp genom täckskiktet med drönarbaserad mätning.' },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
