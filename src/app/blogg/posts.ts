export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  datePublished: string
  dateModified: string
  author: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'csrd-scope-1-guide',
    title: 'Vad innebär CSRD Scope 1 för svenska företag?',
    excerpt: 'CSRD kräver att cirka 4 100 svenska företag rapporterar verifierade Scope 1-utsläppsdata. Här förklarar vi vad det innebär i praktiken.',
    content: `## Vad kräver CSRD för Scope 1-rapportering?

**CSRD (Corporate Sustainability Reporting Directive) kräver att berörda företag rapporterar sina direkta växthusgasutsläpp i ton CO₂-ekvivalenter enligt ESRS E1.** I Sverige berörs uppskattningsvis 4 100 företag stegvis mellan 2025 och 2028.

## Varför räcker inte schabloner?

**Generella emissionsfaktorer kan avvika från verkliga utsläpp med en faktor 2–10x, vilket innebär att klimatbokslutet kan vara allvarligt felaktigt.** Revisorer förväntas gradvis kräva bättre dataunderlag än schabloner.

## Hur mäter man Scope 1-utsläpp?

**Drönarbaserad mätning med TDLAS-sensorer och OGI-kameror ger verifierade utsläppsdata direkt från anläggningen.** Resultaten levereras med dokumenterad metodik och mätosäkerhet som tål revision.

## Vilka branscher behöver mäta?

**Deponier, reningsverk, biogasanläggningar, raffinaderier och gruvdrift har typiskt de mest osäkra Scope 1-posterna.** Diffusa utsläpp av metan och lustgas är svåra att beräkna med schabloner.

## Nästa steg

Kontakta EcoDrone för en genomgång av era utsläppskällor och hur drönarbaserad mätning kan stärka er CSRD-rapportering.`,
    datePublished: '2025-01-15T08:00:00+01:00',
    dateModified: '2025-03-10T10:00:00+01:00',
    author: 'EcoDrone Redaktion',
    tags: ['CSRD', 'Scope 1', 'ESRS E1'],
  },
  {
    slug: 'ldar-eu-metanforordning',
    title: 'LDAR enligt EU:s metanförordning – vad gäller?',
    excerpt: 'EU:s metanförordning (2024/1787) kräver LDAR-program för energisektorn. Vi förklarar kraven och hur drönarbaserad inspektion uppfyller dem.',
    content: `## Vad kräver EU:s metanförordning?

**EU:s metanförordning (EU 2024/1787) är det första EU-regelverket med bindande krav på LDAR-program, emissionsrapportering och förbud mot rutinmässig ventilering inom energisektorn.** Förordningen trädde i kraft 2024.

## Vilka komponenter ska inspekteras?

**Ventiler, flänsar, kompressorer, pumptätningar och övriga relevanta komponenter ska inspekteras systematiskt med definierade inspektionsintervall.** Identifierade läckor ska kvantifieras och repareras inom tidsfrister.

## Hur fungerar drönarbaserad LDAR?

**Drönare med OGI-kamera detekterar gasläckor visuellt medan TDLAS-sensorer kvantifierar utsläppet – båda kraven uppfylls i samma inspektion.** Varje läcka dokumenteras med GPS-position och komponent-ID.

## Tidsfrister för implementering

**Full efterlevnad krävs senast 2026 för befintliga anläggningar.** Nya anläggningar ska ha LDAR-program från start.

## Kom igång med LDAR

Kontakta EcoDrone för att planera ert LDAR-program enligt EU:s metanförordning.`,
    datePublished: '2025-02-10T08:00:00+01:00',
    dateModified: '2025-03-10T10:00:00+01:00',
    author: 'EcoDrone Redaktion',
    tags: ['LDAR', 'EU-metanförordning', 'OGI'],
  },
  {
    slug: 'metanmatning-deponier',
    title: 'Metanmätning vid deponier – så fungerar det',
    excerpt: 'Deponier är en av de största källorna till diffusa metanutsläpp. Drönarbaserad mätning identifierar var metanet läcker genom täckskiktet.',
    content: `## Varför mäta metan vid deponier?

**Deponier är en av de största källorna till diffusa metanutsläpp i Sverige, och schablonbaserade beräkningar kan avvika kraftigt från verkliga utsläpp.** Mätning identifierar var metanet läcker genom täckskiktet.

## Hur genomförs mätningen?

**En drönare med TDLAS-sensor flyger systematiskt över deponiytan och registrerar metankoncentrationer med GPS-koppling.** Resultatet blir en detaljerad karta som visar hotspots där åtgärder behövs.

## Vad får ni?

**Ni får en rapport med kvantifierade utsläpp i kg/h, georefererade kartor med hotspots och en prioriterad åtgärdslista.** Data kan användas för SMP-rapportering, CSRD Scope 1 och egenkontroll.

## Regulatoriska krav för deponier

**Tillståndspliktiga deponier ska rapportera utsläpp årligen via SMP, och CSRD kräver verifierade Scope 1-data.** Drönarbaserad mätning uppfyller kraven på bästa tillgängliga teknik.

## Boka en mätning

Kontakta EcoDrone för att planera en metanmätning vid er deponi.`,
    datePublished: '2025-03-01T08:00:00+01:00',
    dateModified: '2025-03-15T10:00:00+01:00',
    author: 'EcoDrone Redaktion',
    tags: ['Metan', 'Deponier', 'SMP'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
