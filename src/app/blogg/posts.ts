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
    title: "Schabloner och mätdata – välj underlag efter frågan",
    excerpt: "När passar emissionsfaktorer, och när behövs mätning? Förstå vad underlagen visar, hur de kan kombineras och vad ett mättillfälle inte kan besvara.",
    content: `## Vad skiljer emissionsfaktorer från mätdata?

**En emissionsfaktor används tillsammans med aktivitetsdata för att beräkna utsläpp. Mätdata beskriver observationer under ett visst mättillfälle.** De två underlagen kan komplettera varandra. Det avgörande är vilken fråga ni behöver besvara och vilket rapporteringskrav som gäller.

Generella faktorer kan sakna information om lokala förhållanden. Samtidigt kan en kort mätning missa variation över ett år. Varken en faktor eller en mätning blir automatiskt rätt för varje beslut.

## När är beräkning relevant?

**Beräkningar kan vara en lämplig metod när underlaget och faktorn är relevanta för utsläppskällan och rapporteringsändamålet.** Dokumentera vilken faktor som används, dess källa, version, enhet och vilka aktivitetsdata den kombineras med. Bedöm också om avgränsningen stämmer med den egna verksamheten.

En faktor behöver inte vara ett grovt branschgenomsnitt; det kan finnas mer specifika underlag. En beräkning kan därför inte bedömas enbart utifrån att den saknar en drönarmätning.

## När tillför mätning information?

**Mätning är särskilt relevant när ni behöver undersöka var förhöjda halter förekommer eller hur ett resultat förändras mellan dokumenterade driftlägen.** En karta kan hjälpa driftteamet att välja områden för vidare kontroll. En separat kvantifiering kan undersöka ett utsläppsflöde om mätförutsättningarna medger det.

Mätningen behöver planeras efter frågan. Förhöjd metankoncentration bevisar inte ensam vilken komponent som läcker eller hur många kilogram som släpps ut per timme.

## Kräver CSRD direktmätning av allt?

**Nej. ESRS E1 beskriver både beräknade och uppmätta utsläpp och användning av emissionsfaktorer.** Kontrollera först om bolaget omfattas, vilket rapporteringsår som gäller och vilka uppgifter rapporteringen behöver. CSRD:s omfattning har ändrats på EU-nivå under 2026, och tillämpliga svenska regler och övergångsbestämmelser behöver beaktas.

Ett mätuppdrag, en årsberäkning och en granskad hållbarhetsrapport är olika leveranser. Stäm av hur materialet ska användas med den som ansvarar för er rapportering.

## Vilka jämförelser är meningsfulla?

**Jämför underlag med samma enhet, avgränsning och tidsperiod.** Ett mätvärde i ppm kan inte jämföras direkt med ett beräknat årsutsläpp i ton. Om ett momentant flöde i kg/h ska användas för en längre period krävs antaganden om drift och variation.

- Dokumentera källa, parameter, enhet och tidsperiod.
- Skilj uppmätta värden från beräknade resultat.
- Redovisa osäkerhet och saknade uppgifter.
- Undersök om skillnader kan bero på avgränsning eller drift.

## Vad är ett bra första steg?

**Lista de beslut som dagens underlag inte räcker till för.** Behöver ni hitta misstänkta läckor, förbättra en beräkning eller följa upp en åtgärd? Samla befintliga driftdata och rapporteringskrav. Beställ sedan ett avgränsat underlag som svarar på just den frågan.

Det gör det lättare att jämföra offerter. Be leverantören beskriva vad som ska mätas, vad som ska beräknas, vilken dokumentation som ingår och vad som måste kompletteras av er eller en annan specialist.`,
    datePublished: '2026-08-03T08:00:00+02:00',
    dateModified: '2026-09-10T10:00:00+02:00',
    author: 'EcoDrone Redaktion',
    tags: ['Schabloner', 'Mätdata', 'Emissionsfaktorer', 'CSRD', 'Klimatbokslut'],
    relatedLinks: [
      { title: 'Diffusa utsläpp – guide', href: '/blogg/diffusa-utslapp-guide', description: 'Varför diffusa utsläpp är svåra att mäta och hur de klassificeras.' },
      { title: 'CSRD & Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Vad ESRS E1 kräver av er Scope 1-rapportering.' },
      { title: 'Miljörapportering & SMP', href: '/compliance/miljorapportering', description: 'Avgränsa vilket mätunderlag miljörapporteringen behöver.' },
      { title: 'Ordlista: emissionsfaktor, GWP och fler begrepp', href: '/ordlista', description: 'Definitioner av nyckelbegreppen inom utsläppsmätning.' },
    ],
  },
  {
    slug: 'hur-dronarbaserad-metanmatning-fungerar',
    title: "Hur en drönarbaserad metanmätning går till – steg för steg",
    excerpt: "Från förfrågan till användbart mätunderlag. Se vad som behöver planeras före mätningen, vad som påverkar resultatet och hur leveransen avgränsas.",
    content: `## Börja med frågan, inte sensorn

**Ett mätuppdrag behöver börja med vad ni vill få svar på.** Kartläggning av förhöjda halter, komponentnära läcksökning och beräkning av utsläppsflöde kräver olika upplägg. Beskriv vilket beslut mätningen ska stödja och vem som ska använda leveransen.

För en deponi kan frågan gälla var kontroll av täckningen bör prioriteras. Vid en biogasanläggning kan det handla om misstänkta läckor eller uppföljning efter en åtgärd. En rapportör kan behöva underlag för en emissionsberäkning. Avgränsningen måste vara tydlig innan utrustning väljs.

## Vad behövs inför offert?

**Anläggningens plats, mätområde, drift och önskat resultat hjälper till att avgränsa uppdraget.** Lämna den information som finns; ni behöver inte själva avgöra vilken sensor som passar.

- Beskriv anläggningen och det område som ska undersökas.
- Ange kända läckor, tidigare mätningar och planerade arbeten.
- Förklara om resultatet ska användas för drift, uppföljning eller rapportering.
- Ange önskad tidsram, åtkomst och säkerhetsförutsättningar.

## Vad fastställs i mätplanen?

**Mätplanen behöver beskriva metod, omfattning, förutsättningar och begränsningar.** Kontrollera att gas, enhet och resultatnivå framgår. Be om relevant instrument- och kvalitetsunderlag, samt besked om vilka delar som inte kan undersökas med den valda metoden.

Flygförutsättningar och säkerhetszoner behöver bedömas för platsen. Behov av avspärrning, samordning eller driftanpassning kan inte avgöras generellt. Villkor för olämpligt väder och ombokning bör framgå i förslaget.

## Vad händer under mätningen?

**Datainsamlingen ska kunna kopplas till plats, tid och de förhållanden som påverkar tolkningen.** Relevant funktion och kalibreringsstatus behöver kontrolleras för utrustningen. Hur kontrollen görs beror på instrumentet; samma kalibreringsrutin kan inte förutsättas för alla sensorer.

Mätområde och mätstråk behöver dokumenteras tillsammans med drift och väder. Om upplägget ska ge utsläppsflöde krävs också de indata som beräkningsmetoden använder. Ett utslag vid screening kan behöva kontrolleras närmare innan en läckpunkt är bekräftad.

## Hur blir observationerna ett resultat?

**Bearbetningen ska skilja mellan observation, beräkning och slutsats.** Koncentrationsvärden kan redovisas i kartor och listor. Beräkning av kg/h kräver ett separat metodunderlag. Ange vilka data som har uteslutits, vilka antaganden som gjorts och vilka osäkerheter som påverkar slutsatsen.

En koncentrationskarta visar inte automatiskt totalutsläpp. Ett kort mättillfälle visar inte heller hur anläggningen fungerar under hela året. Om det är årsutsläpp ni behöver måste representativiteten hanteras i uppdraget.

## Vad ska ni kunna göra efter leveransen?

**Leveransen bör göra nästa steg tydligt.** Driftteamet kan använda observationerna för fortsatt kontroll. Miljöansvariga kan bedöma vilka delar som är användbara i rapporteringen och var komplettering behövs.

Bestäm vid behov hur återbesök ska genomföras. För jämförelser behövs dokumentation av ändrad drift, väder, täckning och metod. En skillnad mellan två mätvärden är inte i sig bevis på effekten av en reparation.`,
    datePublished: '2026-08-03T08:00:00+02:00',
    dateModified: '2026-09-10T10:00:00+02:00',
    author: 'EcoDrone Redaktion',
    tags: ['Metanmätning', 'TDLAS', 'Mätprocess', 'Drönare', 'LDAR'],
    relatedLinks: [
      { title: 'Metanmätning med TDLAS-sensor', href: '/tjanster/metanmatning', description: 'Tjänsten i detalj: vad vi mäter, detekterar och levererar.' },
      { title: 'Metodik och kvalitetssäkring', href: '/tjanster/metodik', description: 'Den tekniska kvalitetssäkringen bakom varje mätning.' },
      { title: 'Dataleveranser – vad ni får', href: '/tjanster/leveranser', description: 'Rapporter, kartlager och format som ingår i leveransen.' },
      { title: 'Schabloner vs mätdata', href: '/blogg/schabloner-vs-matdata', description: 'Hur mätdata och emissionsfaktorer kan komplettera varandra.' },
    ],
  },
  {
    slug: 'diffusa-utslapp-guide',
    title: "Diffusa utsläpp – avgränsning, mätning och uppföljning",
    excerpt: "Förstå varför spridda utsläpp behöver ett tydligt mätupplägg. Läs om kartläggning, komponentkontroll och skillnaden mellan koncentration och utsläppsflöde.",
    content: `## Vad menas med diffusa utsläpp?

**Diffusa utsläpp används som benämning för utsläpp som inte samlas i en tydligt avgränsad utsläppspunkt, exempelvis en skorsten.** I en anläggning kan det finnas både utsläpp över ytor och läckage vid komponenter. Definition och avgränsning behöver anpassas till den metod eller det rapporteringssammanhang som används.

Begreppet beskriver inte i sig utsläppets storlek. En källa som är svår att se eller lokalisera kan behöva undersökas, men ett generellt antagande om hur stor andel den utgör av klimatbokslutet ersätter inte underlag.

## Varför behöver mätningen planeras särskilt?

**Spridning i luft gör att en uppmätt halt påverkas av mer än själva utsläppskällan.** Vind, bakgrundshalter, terräng, byggnader och drift kan påverka var ett utslag registreras. En observation behöver därför tolkas i sitt sammanhang.

Mätområdet behöver vara tillräckligt för frågan. Det är skillnad mellan att undersöka en misstänkt punkt och att försöka bedöma ett helt områdes utsläpp. Dokumentera vad som ingår och vilka delar som inte är åtkomliga.

## Vilka frågor kan en kartläggning besvara?

**Kartläggning kan visa var förhöjda halter observeras och var vidare kontroll är relevant.** Resultatet kan ge driftteamet bättre geografiskt underlag, men det bekräftar inte alltid en enskild orsak.

- På deponier kan observationer kopplas till områden för fortsatt kontroll av täckning och gasinsamling.
- Vid biogas kan undersökningen avgränsas till gaslager, rötkammare och anslutande processdelar.
- I industri kan en översikt behöva följas av komponentnära kontroll.

## Hur skiljer sig detektion och kvantifiering?

**Detektion visar ett utslag inom metodens förutsättningar; kvantifiering av utsläppsflöde kräver ytterligare underlag.** TDLAS använder laserspektroskopi. OGI visualiserar gas med infraröd teknik under lämpliga förhållanden. En sensorbeteckning säger inte ensam vilket resultat som går att leverera.

Vid plymmätning kan koncentrations- och vinddata kombineras i en massbalansberäkning. Förutsättningar som bakgrund, täckning och stabilitet behöver bedömas. Resultatets avgränsning och osäkerhet ska följa med enheten kg/h.

## Kan emissionsfaktorer fortfarande användas?

**Mätning och beräkning kan komplettera varandra.** En emissionsfaktor kan stödja en beräkning men ger normalt inte en karta över misstänkta läckpunkter. Mätdata ger observationer från ett visst tillfälle men ersätter inte automatiskt underlag för en hel rapporteringsperiod.

Om materialet ska användas i rapportering behöver metod, tidsperiod och enhet stämmas av med rapporteringsansvarig. Vilka regler som gäller beror på verksamheten; alla anläggningar har inte samma mät- eller LDAR-krav.

## Hur planeras uppföljning?

**Bestäm i förväg vad som ska jämföras och vilka förhållanden som behöver dokumenteras.** Återbesök kan stödja kontroll efter en åtgärd, men jämförelsen behöver ta hänsyn till drift, väder och metod.

Börja med en avgränsad fråga och begär en leverans där observationer går att hitta igen. En karta, en resultatlista och en tydlig metodbeskrivning gör det enklare att avgöra vad som bör kontrolleras eller kompletteras.`,
    datePublished: '2025-03-20T08:00:00+01:00',
    dateModified: '2026-09-10T10:00:00+02:00',
    author: 'EcoDrone Redaktion',
    tags: ['Diffusa utsläpp', 'Mätmetodik', 'Schabloner', 'TDLAS', 'OGI'],
    relatedLinks: [
      { title: 'Schabloner vs mätdata', href: '/blogg/schabloner-vs-matdata', description: 'Djupdykning i skillnaden mellan emissionsfaktorer och verkliga mätvärden.' },
      { title: 'Metanmätning med TDLAS-sensor', href: '/tjanster/metanmatning', description: 'Kvantitativ metanmätning med hög precision för industriella tillämpningar.' },
      { title: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion', description: 'Systematisk läckdetektering och kvantifiering enligt EU:s metanförordning.' },
      { title: 'CSRD Scope 1 – verifierade utsläppsdata', href: '/compliance/csrd', description: 'Scope 1-rapportering och val av lämpligt underlag.' },
      { title: 'Metanmätning vid deponier', href: '/branscher/deponier', description: 'Kartlägg metanutsläpp genom täckskiktet med drönarbaserad mätning.' },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
