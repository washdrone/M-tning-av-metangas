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
    slug: 'schabloner-vs-matdata',
    title: 'Schabloner vs mätdata – vad är skillnaden och när räcker schabloner inte?',
    excerpt: 'Schabloner är generella genomsnittsvärden, mätdata är verkliga observationer från er anläggning. Skillnaden avgör hur trovärdigt ert klimatbokslut är – och allt fler regelverk kräver nu det senare. En genomgång av när schabloner räcker och när de inte gör det.',
    content: `## Vad är en schablon?

**En schablon (emissionsfaktor) är ett generellt genomsnittsvärde som används för att beräkna utsläpp utifrån exempelvis produktionsvolym, avfallsmängd eller verksamhetstyp – utan att de faktiska utsläppen mäts.** Schabloner tas fram av myndigheter, branschorganisationer och forskningsinstitut som genomsnitt över många anläggningar, och appliceras sedan på den enskilda verksamheten.

En deponi kan exempelvis beräkna sin metanbildning ur en modell baserad på deponerad avfallsmängd och ålder, och ett reningsverk kan beräkna sina lustgasutsläpp som en procentsats av inkommande kvävebelastning. Beräkningen är snabb och billig – men den säger ingenting om hur just er anläggning presterar.

## Vad menas med mätdata?

**Mätdata är kvantitativa observationer av de faktiska utsläppen från er specifika anläggning, insamlade med kalibrerade instrument och dokumenterad mätosäkerhet.** För diffusa utsläpp innebär det i praktiken metoder som kan täcka stora ytor: drönarbaserad kartering med TDLAS-sensorer, OGI-visualisering av läckpunkter eller plymmätning nedvinds om anläggningen.

Skillnaden mot schabloner är fundamental: mätdata fångar anläggningens verkliga skick – täckskiktets kvalitet, den otäta flänsen, den överbelastade bassängen – medan schablonen bara återger ett branschgenomsnitt.

## Varför kan schabloner avvika kraftigt från verkligheten?

**Schabloner avviker från verkliga utsläpp därför att de inte tar hänsyn till anläggningens skick, driftförhållanden eller lokala förutsättningar – faktorer som i praktiken dominerar utsläppsbilden för diffusa källor.** Två deponier med identisk avfallsmängd kan ha helt olika verkliga utsläpp beroende på täckskiktets kvalitet och gasfångstsystemets funktion.

Avvikelsen går åt båda hållen. En välskött anläggning kan rapportera för höga utsläpp och därmed se sämre ut i klimatredovisningen än den förtjänar. En anläggning med okända läckor kan rapportera för låga utsläpp – och upptäcka problemet först vid tillsyn, revision eller när läckan vuxit sig stor.

Det finns ett andra problem som ofta förbises: schabloner ger ingen rumslig information. Även om totalsiffran råkade stämma vet verksamheten inte var utsläppen sker – och kan därför inte rikta åtgärder dit de gör störst nytta.

## När räcker schabloner?

**Schabloner räcker när utsläppsposten är oväsentlig i förhållande till verksamhetens totala klimatpåverkan, när ingen regulatorisk granskning kräver bättre underlag och när inga åtgärdsbeslut ska baseras på siffran.** Schabloner har en legitim roll som startpunkt och för screening av vilka poster som är värda att undersöka närmare.

En rimlig arbetsgång är att först beräkna alla poster med schabloner, sedan identifiera de poster som är stora, osäkra eller granskningsutsatta – och mäta just dem. Att mäta allt är sällan motiverat; att schablonberäkna allt är allt oftare otillräckligt.

## När kräver regelverken mätdata?

**Tre regelverk driver utvecklingen från schabloner mot mätdata: CSRD kräver revisorsgranskad Scope 1-rapportering, EU:s metanförordning (2024/1787) kräver mätbaserade LDAR-program för energisektorn, och svensk miljörapportering (SMP) förutsätter bästa tillgängliga underlag.** Kraven skiljer sig åt i skärpa:

- **CSRD/ESRS E1** – utsläpp ska rapporteras i ton CO₂e med dokumenterad metodik. Direktmätning är inte ett formellt krav – beräkning med emissionsfaktorer är tillåten – men för väsentliga poster med stor osäkerhet stärker mätdata rapporteringens kvalitet när den granskas.
- **EU:s metanförordning** – går längst: systematisk läcksökning, kvantifiering och reparation är obligatoriskt för olja, gas och kol. Schabloner uppfyller inte kraven.
- **SMP och miljötillstånd** – tillsynsmyndigheter kan förelägga om mätning, och egenkontrollförordningen förutsätter att verksamheten känner sin påverkan.

## Vad betyder skillnaden för era beslut?

**Den avgörande skillnaden är att mätdata går att agera på: en hotspot-karta pekar ut var åtgärder ska sättas in, medan en schablonsiffra bara kan rapporteras.** För en biogasanläggning innebär en lokaliserad metanläcka både minskad klimatpåverkan och minskad produktionsförlust när den tätas. För en deponi visar mätningen om gasfångstsystemet fungerar och var täckskiktet behöver förbättras.

Mätdata skapar också en verifierad baslinje. Den som genomför åtgärder utan baslinjemätning kan aldrig visa vilken effekt åtgärderna haft – varken för ledningen, revisorn eller tillsynsmyndigheten.

## Vanliga missförstånd om schabloner och mätdata

**Det vanligaste missförståndet är att valet står mellan att mäta allt och att schablonberäkna allt – i praktiken kombineras metoderna.** Andra vanliga missförstånd:

- **"Schablonen är godkänd, alltså räcker den"** – att en schablon är accepterad som beräkningsmetod betyder inte att den räcker när posten är väsentlig och granskas av revisor eller tillsynsmyndighet.
- **"En mätning ersätter schablonen för alltid"** – utsläpp varierar över tid. Mätningens värde ligger i att etablera baslinje, kalibrera beräkningar och följa upp åtgärder – ofta med återkommande intervall.
- **"Mätosäkerhet gör mätdata lika osäkra som schabloner"** – en mätning med dokumenterad osäkerhet är kvantifierbart tillförlitlig; en schablons avvikelse från er anläggning är okänd och kan inte bedömas alls.

## Vilka utsläppsposter är oftast mest osäkra?

**De mest schablonkänsliga posterna är diffusa utsläpp av metan och lustgas: deponigas genom täckskikt, metanläckage från biogasproduktion och gasuppgradering, lustgas från biologisk rening samt läckor från utspridda komponenter i gas- och petrokemisk infrastruktur.** Gemensamt för dessa är att utsläppen styrs av anläggningens faktiska skick – sprickor, tätningar, processbelastning – vilket är exakt det schabloner inte fångar.

Samma poster har ofta hög klimatvikt eftersom både metan och lustgas har betydligt högre GWP än koldioxid. En procentuellt liten avvikelse i en sådan post kan därför flytta hela klimatbokslutet mer än stora förändringar i väl kvantifierade poster som energianvändning.

## Hur går ni från schablon till mätdata i praktiken?

**Det praktiska första steget är att identifiera den största och mest osäkra utsläppsposten i ert klimatbokslut och genomföra en baslinjemätning av just den.** Resultatet visar dels de verkliga nivåerna, dels var utsläppen sker – och ger samtidigt underlag för att bedöma om schablonerna för övriga poster är rimliga. Därefter kan mätfrekvens och omfattning anpassas efter vad resultaten och regelverken kräver.`,
    datePublished: '2026-08-03T08:00:00+02:00',
    dateModified: '2026-08-03T08:00:00+02:00',
    author: 'EcoDrone Redaktion',
    tags: ['Schabloner', 'Mätdata', 'Emissionsfaktorer', 'CSRD', 'Klimatbokslut'],
    relatedLinks: [
      { title: 'Diffusa utsläpp – guide', href: '/blogg/diffusa-utslapp-guide', description: 'Varför diffusa utsläpp är svåra att mäta och hur de klassificeras.' },
      { title: 'CSRD & Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Vad ESRS E1 kräver av er Scope 1-rapportering.' },
      { title: 'Miljörapportering & SMP', href: '/compliance/miljorapportering', description: 'Så ersätter mätdata schabloner i den årliga miljörapporten.' },
      { title: 'Ordlista: emissionsfaktor, GWP och fler begrepp', href: '/ordlista', description: 'Definitioner av nyckelbegreppen inom utsläppsmätning.' },
    ],
  },
  {
    slug: 'hur-dronarbaserad-metanmatning-fungerar',
    title: 'Hur en drönarbaserad metanmätning går till – steg för steg',
    excerpt: 'Från första kontakt till levererad rapport: så genomförs en drönarbaserad metanmätning i praktiken. Vad som händer före, under och efter mätdagen – och vad som krävs av er som beställare.',
    content: `## Vad är en drönarbaserad metanmätning?

**En drönarbaserad metanmätning innebär att en drönare med TDLAS-sensor flyger systematiskt över en anläggning och registrerar metankoncentrationer kontinuerligt med GPS-koppling, vilket ger en georefererad karta över var metan läcker ut och i vilka halter.** Metoden används på deponier, biogasanläggningar, reningsverk och industrianläggningar där utsläppen är diffusa och utspridda över stora ytor.

Den här artikeln beskriver hela förloppet ur beställarens perspektiv – från förfrågan till levererad rapport. Den tekniska kvalitetssäkringen beskrivs mer ingående på vår metodiksida.

## Vad händer före mätningen?

**Före mätningen kartläggs anläggningens potentiella utsläppskällor, geometri och restriktioner, och en mätplan tas fram med flygmönster, flyghöjd och referenspunkter.** Underlag som brukar användas är anläggningsritningar, tidigare mätresultat och processinformation – allt som hjälper till att rikta mätningen rätt.

I planeringen ingår också det praktiska: tillträde, säkerhetsregler på anläggningen och samordning med driften. Mätningen är kontaktfri och kräver normalt inga driftstopp, men vissa moment – som läcksökning nära processutrustning – planeras med fördel när anläggningen är i normal drift, eftersom det är då läckorna är representativa.

Vädret är en aktiv del av planeringen. Mätningen kräver torra förhållanden och måttlig vind, därför planeras mätfönstret efter prognos och med reservdagar.

## Vad händer på mätdagen?

**På mätdagen kalibreras sensorn mot certifierade referensgaser, en meteorologisk station etableras på plats, och därefter flygs anläggningen systematiskt – först en heltäckande screening, sedan detaljmätning av identifierade hotspots.** Momenten i tur och ordning:

- **Säkerhetsgenomgång** – piloten går igenom anläggningens regler och flygområdet tillsammans med er kontaktperson.
- **Kalibrering** – sensorns nollpunkt och spann verifieras mot referensgas med känd metankoncentration. Kalibreringen dokumenteras och intyget följer med rapporten.
- **Väderstation** – vindhastighet, vindriktning, temperatur och luftfuktighet loggas parallellt med flygningen, vilket krävs för emissionsberäkningen.
- **Screening-flygning** – drönaren flyger ett rutnätsmönster över hela mätområdet medan metankoncentrationer registreras kontinuerligt med GPS-position.
- **Detaljmätning** – områden med förhöjda halter flygs igen med tätare linjer och lägre höjd för att avgränsa och kvantifiera enskilda källor.

En typisk deponi eller industrianläggning kan mätas under en dag; större eller komplexa områden kan kräva flera flygpass under samma mättillfälle.

## Vilka väderförhållanden krävs – och vad händer om vädret inte håller?

**Mätningen kräver torra förhållanden, vindhastigheter under 10 m/s och en någorlunda stabil vindriktning; regn, kraftig turbulens eller inversionsväder påverkar mätningens representativitet.** Det är därför väderprognosen är en del av planeringen och reservdagar planeras in från början.

Att kraven är tydliga är i sig en kvalitetssignal: en mätning som genomförs under olämpliga förhållanden ger data som inte kan försvaras vid granskning. Om vädret inte håller flyttas mätningen hellre än att datakvaliteten äventyras – och ni informeras om eventuella begränsningar innan flygningen genomförs.

## Kan mätningen kvantifiera anläggningens totala utsläpp?

**Ja – genom plymmätning, där drönaren flyger tvärsnitt genom utsläppsplymen nedvinds om anläggningen och koncentrationerna kombineras med vinddata i en massbalansberäkning, kan det samlade utsläppet beräknas i kg metan per timme.** Metoden fångar även källor som är svåra att lokalisera individuellt och kräver lämpliga vindförhållanden och en identifierbar plymstruktur.

Screening och plymmätning kompletterar varandra: screeningen visar var läckorna finns så att de kan åtgärdas, plymmätningen ger den totalsiffra som rapporteringen behöver. Vid ett och samma mättillfälle kan ofta båda genomföras.

## Hur blir mätvärden till resultat?

**Efter fältarbetet bearbetas rådata till koncentrationskartor, hotspot-listor och emissionsberäkningar, där uppmätta halter kombineras med vinddata för att beräkna utsläppsflöden i kg metan per timme.** Databearbetningen omfattar kvalitetskontroll av mätserierna, georeferering, interpolering till kartlager och en osäkerhetsanalys som redovisar vilka faktorer som påverkar resultatet och hur mycket.

Att osäkerheten kvantifieras är inte en formalitet – det är det som gör resultaten användbara i granskade sammanhang som CSRD-rapportering, SMP och tillsynsärenden.

## Vad innehåller leveransen?

**Leveransen består av en komplett mätrapport med metodik, resultat och mätosäkerhet, georefererade koncentrationskartor, en prioriterad hotspot-lista med koordinater samt digitala kartlager i GeoJSON-, KML- eller Shapefile-format.** Kartlagren kan läsas in direkt i ert GIS-system, och hotspot-listan fungerar som åtgärdslista för underhåll och drift.

Rapporten utformas efter det rapporteringsbehov ni har – underlag för klimatbokslut, LDAR-dokumentation, tillsynsärende eller åtgärdsuppföljning.

## Vad krävs av er som beställare?

**Det som krävs av beställaren är i praktiken tre saker: en kontaktperson på anläggningen, tillträde för mätteamet på mätdagen och det underlag om anläggningen som finns tillgängligt.** Ju bättre bild av potentiella källor och tidigare mätningar, desto mer riktad blir mätplanen. Inga förberedande installationer behövs på anläggningen.

## Vad händer efter leveransen?

**Efter leveransen används resultaten typiskt till tre saker: åtgärder på identifierade läckor, verifierade siffror i rapporteringen och en baslinje för uppföljande mätningar.** Vid återkommande mätningar används samma flygmönster och referenspunkter, vilket gör resultaten jämförbara över tid – och gör det möjligt att visa svart på vitt att genomförda åtgärder haft effekt.

Hur ofta mätningen bör upprepas beror på verksamhetstyp och regelverk: deponier mäts vanligen en till två gånger per år, medan verksamheter med LDAR-krav kan behöva tätare intervall. Rätt intervall fastställs bäst utifrån den första mätningens resultat – hittades stora läckor motiverar det tätare uppföljning, medan en anläggning med låga och stabila nivåer kan mäta mer sällan.`,
    datePublished: '2026-08-03T08:00:00+02:00',
    dateModified: '2026-08-03T08:00:00+02:00',
    author: 'EcoDrone Redaktion',
    tags: ['Metanmätning', 'TDLAS', 'Mätprocess', 'Drönare', 'LDAR'],
    relatedLinks: [
      { title: 'Metanmätning med TDLAS-sensor', href: '/tjanster/metanmatning', description: 'Tjänsten i detalj: vad vi mäter, detekterar och levererar.' },
      { title: 'Metodik och kvalitetssäkring', href: '/tjanster/metodik', description: 'Den tekniska kvalitetssäkringen bakom varje mätning.' },
      { title: 'Dataleveranser – vad ni får', href: '/tjanster/leveranser', description: 'Rapporter, kartlager och format som ingår i leveransen.' },
      { title: 'Schabloner vs mätdata', href: '/blogg/schabloner-vs-matdata', description: 'Varför verkliga mätvärden slår generella emissionsfaktorer.' },
    ],
  },
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
      { title: 'Schabloner vs mätdata', href: '/blogg/schabloner-vs-matdata', description: 'Djupdykning i skillnaden mellan emissionsfaktorer och verkliga mätvärden.' },
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
