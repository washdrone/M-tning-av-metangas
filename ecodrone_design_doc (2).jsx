import { useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const PROFILES = [
  {
    id: "P1",
    title: "Miljöchefen",
    org: "Kommunalt VA-bolag eller avfallsbolag",
    age: "45–58 år",
    kön: "Ofta kvinna",
    utb: "Civilingenjör miljö/kemi eller naturvetare med vidareutbildning",
    roll: "Ansvarar för egenkontroll, SMP-rapportering och kontakt med länsstyrelsen. Sitter i ledningsgruppen men är inte VD.",
    drivkraft: "Vill göra rätt sak och slippa överraskningar från tillsynsmyndigheten. Trygghet och korrekthet väger tyngre än kostnad.",
    farhaga: "Att lämna in felaktiga data i miljörapporten. Att revisorn eller länsstyrelsen ifrågasätter metodiken.",
    köpprocess: "Initierar behovet. Inhämtar 2–3 offerter. Beslutsfattare är ofta teknisk chef eller kommunalråd. Tar lång tid.",
    kommunikation: "E-post och telefon. Läser rapporter noga. Vill ha hänvisningar till lagtext och standarder.",
    nyckelord: ["Egenkontroll", "Länsstyrelsen", "SMP", "Metodkvalitet", "Dokumentation"],
    citat: "\"Vi behöver kunna visa länsstyrelsen exakt hur vi mätte och att metoden är godkänd.\"",
    färg: "#2d5a3d",
  },
  {
    id: "P2",
    title: "HSE-chefen",
    org: "Raffinaderi, petrokemi, LNG-terminal",
    age: "48–60 år",
    kön: "Ofta man",
    utb: "Processing­enjör eller kemist med HSE-certifieringar",
    roll: "Ansvarar för säkerhet, hälsa och miljö. Rapporterar till fabrikschefen. Hanterar tillstånd, ISO 14001 och externrevisioner.",
    drivkraft: "Compliance, undvika böter och incidenter. Preem Lysekil, Nynas och St1 lyder under EU-metanförordningen — det är inte frivilligt.",
    farhaga: "Att missa ett rapporteringskrav och få tillsynsåtgärd. Att en läcka i raffinaderiet eskalerar utan att ha detekterats.",
    köpprocess: "Kräver anbud med tydlig metodbeskrivning, cv på utförare och certifikathänvisningar. Upphandling via inköpsavdelning.",
    kommunikation: "Formell. Vill ha tekniska specifikationer och standardhänvisningar. Möten i förhand är vanliga.",
    nyckelord: ["EU 2024/1787", "OGMP 2.0", "LDAR", "ISO 14001", "Revision"],
    citat: "\"Visa mig metodiken och certifieringarna. Sedan pratar vi pris.\"",
    färg: "#1e3a5f",
  },
  {
    id: "P3",
    title: "Hållbarhetschefen",
    org: "Börsnoterat industribolag, >500 anst.",
    age: "38–50 år",
    kön: "Ofta kvinna",
    utb: "Ekonom eller samhällsvetare med hållbarhetsinriktning, ibland ingenjör",
    roll: "Driver CSRD-processen internt. Koordinerar Scope 1–3 datainsamling. Rapporterar till CFO och styrelse. Nytt yrke — många i rollen sedan 2–3 år.",
    drivkraft: "Att leverera en hållbarhetsrapport som håller för extern granskning. Revisorn och ESG-analytiker läser den.",
    farhaga: "Att Scope 1-data saknar mätunderlag och revisorn flaggar osäkerheten. Att ESG-rating sänks p.g.a. otillräcklig metodik.",
    köpprocess: "Identifierar leverantörer, men beslutet tas ofta gemensamt med CFO/ekonomidirektör. Tidspressad — CSRD-deadline styr.",
    kommunikation: "Digital. LinkedIn, mail. Vill ha tydlig koppling till ESRS E1 och CSRD-krav. Hatar teknisk jargong.",
    nyckelord: ["CSRD", "ESRS E1", "Scope 1", "ESG", "Revisionsunderlag"],
    citat: "\"Jag behöver data som revisorn kan godkänna, inte en uppskattning.\"",
    färg: "#5a3d6b",
  },
  {
    id: "P4",
    title: "Driftchefen / VA-chefen",
    org: "Avloppsreningsverk, kommunalt",
    age: "50–62 år",
    kön: "Ofta man",
    utb: "Processoperatör med lång erfarenhet, ibland ingenjörsexamen",
    roll: "Ansvarar för det dagliga driften av reningsverket. Praktisk och processfokuserad. Sitter inte i ledningsgruppen men har mandat för inköp upp till viss nivå.",
    drivkraft: "Att allt fungerar och att de slipper problem med tillsynsmyndigheten. Pragmatisk — om det finns ett krav ska det uppfyllas effektivt.",
    farhaga: "Att det kostar mer än det behöver. Att leverantören inte förstår hur ett reningsverk fungerar.",
    köpprocess: "Tar direktkontakt med leverantörer. Beslutar ofta på egen hand under ett tröskelvärde. Värdesätter enkel kommunikation och praktisk leverans.",
    kommunikation: "Telefon och kortfattad e-post. Vill snabbt förstå vad ni gör, hur lång tid det tar och vad ni levererar.",
    nyckelord: ["Egenkontroll", "Slamhantering", "Praktisk leverans", "Kommunalt", "Mättid"],
    citat: "\"Hur lång tid tar det och vad får jag i handen när ni är klara?\"",
    färg: "#3d5a6b",
  },
  {
    id: "P5",
    title: "Compliance-juristen / Inköparen",
    org: "Stor industrikoncern, >1 000 anst.",
    age: "35–50 år",
    kön: "Blandat",
    utb: "Jurist, ekonom eller upphandlingsspecialist",
    roll: "Granskar leverantörer inför ramavtal. Ser till att dataskydd, GDPR, sekretess och avtalskrav uppfylls. Är en grindvakt — inte initiativtagaren.",
    drivkraft: "Att minimera juridisk och operationell risk för organisationen. Checklistor och dokumentation.",
    farhaga: "Att industridata om läckage hamnar i fel händer. Att leverantören inte klarar en DPA-granskning.",
    köpprocess: "Slutgranskar leverantörslistan som hållbarhetschefen/HSE-chefen tagit fram. Kan stoppa ett avtal.",
    kommunikation: "Formell skriftlig. Begär avtal, policyer, certifikat och DPA-mallar.",
    nyckelord: ["GDPR", "NDA", "DPA", "Sekretess", "Avtalsvillkor", "EU-dataskydd"],
    citat: "\"Var lagras datan, vem har tillgång och vad händer om ni får en tillsynsförfrågan?\"",
    färg: "#4a4a3d",
  },
];

const PALETTE = [
  {
    label: "Primär",
    name: "Skiffer",
    hex: "#2C3E35",
    rgb: "44, 62, 53",
    use: "Bakgrund hero, nav, tyngdpunkt",
    note: "Mörk skogsgrön-grå. Industriell men naturlig. Inte tech.",
  },
  {
    label: "Sekundär",
    name: "Fältsten",
    hex: "#5C7A6A",
    rgb: "92, 122, 106",
    use: "Accenter, ikoner, rubriker",
    note: "Dämpad grön. Trovärdighet utan neon-känsla.",
  },
  {
    label: "Ljus accent",
    name: "Dimma",
    hex: "#E8EDE9",
    rgb: "232, 237, 233",
    use: "Sektionsbakgrunder, tabellrader",
    note: "Knappt märkbar grön ton. Ren och professionell.",
  },
  {
    label: "Papper",
    name: "Vit lera",
    hex: "#F7F5F0",
    rgb: "247, 245, 240",
    use: "Primär bakgrundsfärg",
    note: "Varmt vitt. Påminner om teknisk rapport, inte webb-startup.",
  },
  {
    label: "Text primär",
    name: "Kol",
    hex: "#1A2420",
    rgb: "26, 36, 32",
    use: "Löptext, brödtext",
    note: "Mjukare än ren svart. Lättläst på varmt vitt.",
  },
  {
    label: "Text sekundär",
    name: "Aska",
    hex: "#5A6860",
    rgb: "90, 104, 96",
    use: "Ingress, hjälptext, etiketter",
    note: "Behåller sammanhang med primärfärgen.",
  },
  {
    label: "Linje",
    name: "Mossa",
    hex: "#C8D4CC",
    rgb: "200, 212, 204",
    use: "Tabellkanter, dividers, card-borders",
    note: "Diskret. Strukturerar utan att dominera.",
  },
  {
    label: "Signal",
    name: "Järnmalm",
    hex: "#1A3A52",
    rgb: "26, 58, 82",
    use: "CTA-knappar, viktiga badges, compliance-taggar",
    note: "Djup industriblå. Signal och auktoritet utan aggressivitet.",
  },
];

const TYPO = [
  {
    role: "Display / Rubriker",
    font: "Playfair Display",
    weight: "700 (Bold)",
    rationale: "Serifffont med tyngd och trovärdighet. Används av advokatbyråer, banker, myndigheter. Inte tech, inte startup. Signalerar att vi har stått här länge.",
  },
  {
    role: "Brödtext / UI",
    font: "Source Serif 4",
    weight: "400 / 600",
    rationale: "Läsbar serifffont optimerad för skärm. Matchar display-fonten. Tekniska rapporter skrivs i seriff — det sänder rätt signal till målgruppen.",
  },
  {
    role: "Data / Taggar / Koder",
    font: "IBM Plex Mono",
    weight: "400 / 500",
    rationale: "Används sparsamt för regulatoriska koder, standardbeteckningar och mätvärden. Ger teknisk precision utan att sajten 'ser ut som kod'.",
  },
];

const PROMPT = `Du designar hemsidan för EcoDrone Sverige AB — ett företag som utför 
drönarbaserad utsläppsmätning av metan och industriutsläpp.

MÅLGRUPP (i prioritetsordning):
1. Miljöchefen på kommunala VA- och avfallsbolag (45–58 år, trygghet och metodkorrekthet)
2. HSE-chefen på raffinaderier och petrokemibolag (48–60 år, compliance och revision)
3. Hållbarhetschefen på börsnoterade industribolag (38–50 år, CSRD-data för revisorn)
4. Driftchefen på avloppsreningsverk (50–62 år, pragmatisk och praktiskt orienterad)
5. Compliance-juristen / inköparen (granskar dataskydd och avtalskrav)

DESIGNRIKTNING: Skandinavisk industriell auktoritet — inte tech, inte startup.
Tänk: en välgjord årsredovisning för ett tungt industribolag, möter
ett schweiziskt mätinstitut. Lugnt, precist, förtroendegivande.

KÄNSLA ATT UPPNÅ:
- "Det här är ett seriöst bolag som vet vad de gör"
- "Jag kan visa den här sajten för revisorn eller länsstyrelsen"
- "Det känns mer som Sweco eller SGI än som ett tech-startup"

KÄNSLA ATT UNDVIKA:
- Mörkt tema med neonaccenter (för tech/startup)
- Monospace-text som dekorativt element
- Geometriska hex-symboler och dataviz-estetik
- Snabba animationer och scroll-effekter
- Jargong som "cutting-edge", "next-gen", "AI-driven"

FÄRGSCHEMA:
Primär:    #2C3E35 (Skiffer — mörk skogsgrön-grå)
Sekundär:  #5C7A6A (Fältsten — dämpad grön)
Bakgrund:  #F7F5F0 (Vit lera — varmt vitt, som papper)
Ljus:      #E8EDE9 (Dimma — sektionsbakgrunder)
Text:      #1A2420 (Kol) / #5A6860 (Aska)
Signal:    #1A3A52 (Järnmalm — CTA och compliance-taggar)
Linje:     #C8D4CC (Mossa)

TYPOGRAFI:
Display:   Playfair Display 700 (seriff — tyngd och trovärdighet)
Brödtext:  Source Serif 4 400/600 (läsbar seriff, som teknisk rapport)
Data/koder: IBM Plex Mono 400 (sparsamt, bara för standardbeteckningar)

LAYOUTPRINCIPER:
- Generös luftighet — inte späckad med innehåll
- Breda textspalter, inte tre-kolumns-grid
- Fakta i raka tabeller med tydliga rubriker, inte infografik
- Certifikat och standardreferenser (OGMP 2.0, ESRS E1) visas tydligt
- Inga ikoner som dekoration — bara om de förklarar något
- Hero: stor serifffont, en menings budskap, white/varm bakgrund
- CTA-knapp: järnmalm (#1A3A52), inga rundade hörn, enkel text

INNEHÅLLSPRIORITET PER SEKTION:
1. Hero: "Compliance-redo mätdata för er miljörapportering" — ett löfte, inte en feature-lista
2. Tjänster: tydliga beskrivningar kopplade till vilken standard varje tjänst uppfyller
3. Branscher: visa att ni förstår deras specifika regelverk
4. Metodik: certifikat, sensorer, standarder — i en ren tabell
5. Dataskydd: ta upp detta proaktivt och tidigt
6. Kontakt: rakt och enkelt — telefon och mail, öppettider

UNDVIK I TEXT:
- "Innovativa lösningar"
- "State-of-the-art"  
- "Cutting-edge teknologi"
- "Vi är passionerade"
- Engelska ord i löptext utan anledning

ANVÄND ISTÄLLET:
- Standardreferenser: "uppfyller kraven i EU 2024/1787"
- Konkreta leveranser: "georefererad mätdata med dokumenterad mätosäkerhet"
- Myndighetsspråk de känner igen: "egenkontroll", "tillsynsmyndighet", "revisionsunderlag"`;

// ─── Component ─────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

  :root {
    --skiffer: #2C3E35;
    --feltsten: #5C7A6A;
    --dimma: #E8EDE9;
    --papper: #F7F5F0;
    --kol: #1A2420;
    --aska: #5A6860;
    --mossa: #C8D4CC;
    --jarnmalm: #1A3A52;
    --white: #ffffff;
  }

  body {
    background: var(--papper);
    color: var(--kol);
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 16px;
    line-height: 1.6;
  }

  /* NAV */
  nav {
    background: var(--skiffer);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 3rem; height: 64px;
    position: sticky; top: 0; z-index: 100;
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem; color: var(--white); letter-spacing: 0.01em;
  }
  .logo span { font-style: italic; color: var(--dimma); font-size: 0.95rem; }
  .nav-tabs { display: flex; gap: 0; }
  .tab {
    font-family: 'Source Serif 4', serif;
    font-size: 0.82rem; color: rgba(255,255,255,0.65);
    padding: 0 1.2rem; height: 64px;
    display: flex; align-items: center;
    cursor: pointer; border: none; background: none;
    border-bottom: 2px solid transparent;
    transition: all 0.15s; letter-spacing: 0.02em;
  }
  .tab:hover { color: var(--white); }
  .tab.active { color: var(--white); border-bottom-color: var(--feltsten); }

  /* MAIN LAYOUT */
  .page { max-width: 1100px; margin: 0 auto; }
  
  /* HERO */
  .hero-section {
    background: var(--skiffer);
    padding: 0;
  }
  .hero-inner {
    max-width: 1100px; margin: 0 auto;
    padding: 5rem 3rem 4rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .hero-overline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.72rem; color: var(--feltsten);
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .hero-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    color: var(--white); font-weight: 700;
    line-height: 1.15; max-width: 680px; margin-bottom: 1.5rem;
  }
  .hero-h1 em { color: var(--dimma); font-style: italic; }
  .hero-body {
    font-size: 1.05rem; color: rgba(232,237,233,0.8);
    max-width: 540px; line-height: 1.75;
    font-weight: 300; margin-bottom: 2.5rem;
  }
  .hero-cta {
    background: var(--jarnmalm); color: var(--white);
    border: none; padding: 0.85rem 2rem;
    font-family: 'Source Serif 4', serif;
    font-size: 0.9rem; cursor: pointer;
    letter-spacing: 0.02em; border-radius: 6px;
    transition: background 0.15s;
  }
  .hero-cta:hover { background: #253f5a; }

  /* SECTIONS */
  .section {
    padding: 4rem 3rem;
    border-bottom: 1px solid var(--mossa);
  }
  .section:last-child { border-bottom: none; }
  .section-overline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem; color: var(--feltsten);
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--skiffer); font-weight: 700;
    margin-bottom: 0.75rem; line-height: 1.2;
  }
  .section-lead {
    font-size: 1rem; color: var(--aska);
    max-width: 600px; line-height: 1.75;
    font-weight: 300; margin-bottom: 2.5rem;
  }

  /* PROFILES GRID */
  .profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  .profile-card {
    border: 1px solid var(--mossa);
    background: var(--white);
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.15s, border-color 0.15s;
  }
  .profile-card:hover { box-shadow: 0 4px 20px rgba(44,62,53,0.1); border-color: var(--feltsten); }
  .profile-card.expanded { border-color: var(--skiffer); }
  .profile-header {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid var(--mossa);
    display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;
  }
  .profile-id {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem; color: var(--aska); margin-bottom: 0.3rem;
  }
  .profile-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; color: var(--skiffer); font-weight: 700;
  }
  .profile-org { font-size: 0.82rem; color: var(--aska); margin-top: 0.2rem; font-style: italic; }
  .profile-toggle {
    width: 28px; height: 28px; border: 1px solid var(--mossa);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; color: var(--feltsten); flex-shrink: 0; margin-top: 2px;
    background: none; border-radius: 50%;
  }
  .profile-body { padding: 0 1.5rem; max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.2s; }
  .profile-body.open { max-height: 600px; padding: 1.2rem 1.5rem; }
  .profile-row { margin-bottom: 1rem; }
  .profile-lbl {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem; color: var(--feltsten);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.2rem;
  }
  .profile-val { font-size: 0.875rem; color: var(--kol); line-height: 1.6; }
  .profile-citat {
    font-style: italic; color: var(--skiffer);
    border-left: 3px solid var(--feltsten);
    padding: 0.7rem 1rem; font-size: 0.875rem;
    background: var(--dimma); margin-top: 0.5rem; line-height: 1.6;
  }
  .profile-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .profile-tag {
    font-family: 'IBM Plex Mono', monospace; font-size: 0.62rem;
    background: var(--dimma); color: var(--skiffer);
    padding: 0.2rem 0.55rem; letter-spacing: 0.03em;
    border-radius: 4px;
  }

  /* PALETTE */
  .palette-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
  .swatch-card { border: 1px solid var(--mossa); background: var(--white); overflow: hidden; border-radius: 8px; }
  .swatch-color { height: 80px; }
  .swatch-info { padding: 0.9rem 1rem; }
  .swatch-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.62rem; color: var(--aska); text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 0.2rem;
  }
  .swatch-name { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--skiffer); font-weight: 700; margin-bottom: 0.2rem; }
  .swatch-hex { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; color: var(--aska); margin-bottom: 0.4rem; }
  .swatch-use { font-size: 0.78rem; color: var(--kol); margin-bottom: 0.3rem; }
  .swatch-note { font-size: 0.75rem; color: var(--aska); font-style: italic; line-height: 1.5; }

  /* TYPO */
  .typo-table { width: 100%; border-collapse: collapse; }
  .typo-table th {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem; text-align: left;
    padding: 0.7rem 1rem; background: var(--skiffer);
    color: var(--dimma); letter-spacing: 0.07em; text-transform: uppercase;
  }
  .typo-table td { padding: 1rem; border-bottom: 1px solid var(--mossa); font-size: 0.88rem; vertical-align: top; }
  .typo-table tr:last-child td { border-bottom: none; }
  .typo-table tr:hover td { background: var(--dimma); }
  .font-preview { font-size: 1.5rem; line-height: 1.2; color: var(--skiffer); margin-bottom: 0.3rem; }

  /* PROMPT BOX */
  .prompt-box {
    background: var(--skiffer); color: var(--dimma);
    padding: 2rem 2.5rem; font-family: 'IBM Plex Mono', monospace;
    font-size: 0.78rem; line-height: 1.75; white-space: pre-wrap;
    position: relative;
  }
  .prompt-copy {
    position: absolute; top: 1rem; right: 1rem;
    background: var(--feltsten); color: var(--white); border: none;
    padding: 0.4rem 0.9rem; font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem; cursor: pointer; letter-spacing: 0.05em;
    border-radius: 4px;
  }
  .prompt-copy:hover { background: var(--jarnmalm); }

  /* MOCK PREVIEW */
  .mock-hero {
    background: var(--skiffer);
    padding: 3rem;
    margin-bottom: 0;
  }
  .mock-overline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem; color: var(--feltsten);
    letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem;
  }
  .mock-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem; color: var(--white);
    line-height: 1.15; margin-bottom: 1rem; font-weight: 700;
  }
  .mock-title em { color: var(--dimma); font-style: italic; }
  .mock-body { font-size: 0.92rem; color: rgba(232,237,233,0.75); max-width: 460px; line-height: 1.7; margin-bottom: 1.5rem; font-weight: 300; }
  .mock-btn {
    background: var(--jarnmalm); color: var(--white);
    border: none; padding: 0.75rem 1.8rem;
    font-family: 'Source Serif 4', serif; font-size: 0.85rem; cursor: default;
    border-radius: 6px;
  }
  .mock-card-row {
    background: var(--white);
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    border-top: 3px solid var(--feltsten);
    border-radius: 0 0 8px 8px;
    overflow: hidden;
  }
  .mock-card {
    padding: 1.5rem;
    border-right: 1px solid var(--mossa);
  }
  .mock-card:last-child { border-right: none; }
  .mock-card-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.62rem; color: var(--feltsten);
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem;
  }
  .mock-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem; color: var(--skiffer); font-weight: 700; margin-bottom: 0.4rem;
  }
  .mock-card-text { font-size: 0.78rem; color: var(--aska); line-height: 1.55; }

  @media (max-width: 640px) {
    nav { padding: 0 1.2rem; }
    .nav-tabs { gap: 0; }
    .tab { padding: 0 0.7rem; font-size: 0.72rem; }
    .section, .hero-inner { padding: 2.5rem 1.2rem; }
    .mock-card-row { grid-template-columns: 1fr; }
    .mock-card { border-right: none; border-bottom: 1px solid var(--mossa); }
  }
`;

export default function EcoDroneDesignDoc() {
  const [activeTab, setActiveTab] = useState("Kundprofiler");
  const [expandedProfile, setExpandedProfile] = useState(null);
  const [copied, setCopied] = useState(false);

  const tabs = ["Kundprofiler", "Färgskala", "Typografi", "Designprompt", "Förhandsgranskning"];

  const copyPrompt = () => {
    navigator.clipboard.writeText(PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <style>{css}</style>

      <nav>
        <div className="logo">EcoDrone <span>— Designdokument</span></div>
        <div className="nav-tabs">
          {tabs.map(t => (
            <button key={t} className={`tab ${activeTab === t ? "active" : ""}`}
              onClick={() => setActiveTab(t)}>{t}</button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="hero-section">
        <div className="hero-inner">
          <div className="hero-overline">EcoDrone Sverige AB · Kundanalys & Designriktning</div>
          <h1 className="hero-h1">
            Designat för den som<br />
            <em>skriver miljörapporten,</em><br />
            inte den som kodar den.
          </h1>
          <p className="hero-body">
            Fem kundprofiler, en motiverad färgskala, typografival
            och en färdig designprompt för att bygga hemsidan som
            talar till rätt beslutsfattare.
          </p>
        </div>
      </div>

      <div className="page">

        {/* ── KUNDPROFILER ── */}
        {activeTab === "Kundprofiler" && (
          <div className="section">
            <div className="section-overline">Kundanalys</div>
            <h2 className="section-h2">Fem kundprofiler</h2>
            <p className="section-lead">
              Dessa fem profiler representerar de faktiska beslutsfattarna och påverkarna
              i en EcoDrone-upphandling. Designen, tonaliteten och innehållet på hemsidan
              ska primärt tala till P1 och P2 — de initierar behovet.
            </p>
            <div className="profiles-grid">
              {PROFILES.map((p) => (
                <div key={p.id}
                  className={`profile-card ${expandedProfile === p.id ? "expanded" : ""}`}>
                  <div className="profile-header"
                    onClick={() => setExpandedProfile(expandedProfile === p.id ? null : p.id)}>
                    <div>
                      <div className="profile-id">{p.id}</div>
                      <div className="profile-title">{p.title}</div>
                      <div className="profile-org">{p.org}</div>
                    </div>
                    <button className="profile-toggle">
                      {expandedProfile === p.id ? "−" : "+"}
                    </button>
                  </div>
                  <div className={`profile-body ${expandedProfile === p.id ? "open" : ""}`}>
                    <div className="profile-row">
                      <div className="profile-lbl">Ålder / bakgrund</div>
                      <div className="profile-val">{p.age} · {p.utb}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Roll & mandat</div>
                      <div className="profile-val">{p.roll}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Primär drivkraft</div>
                      <div className="profile-val">{p.drivkraft}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Störst farhåga</div>
                      <div className="profile-val">{p.farhaga}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Köpprocess</div>
                      <div className="profile-val">{p.köpprocess}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Kommunikationssätt</div>
                      <div className="profile-val">{p.kommunikation}</div>
                    </div>
                    <div className="profile-row">
                      <div className="profile-lbl">Nyckelord de söker på</div>
                      <div className="profile-tags">
                        {p.nyckelord.map(k => <span key={k} className="profile-tag">{k}</span>)}
                      </div>
                    </div>
                    <div className="profile-citat">{p.citat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FÄRGSKALA ── */}
        {activeTab === "Färgskala" && (
          <div className="section">
            <div className="section-overline">Visuell identitet</div>
            <h2 className="section-h2">Färgskala</h2>
            <p className="section-lead">
              Paletten är hämtad från industriell natur — skiffer, fältsten, dimma och mossa.
              Varm, dämpad och trovärdig. Ingen neon, inga startupfärger.
              Järnmalmsblå för CTA markerar tydlig auktoritet utan aggressivitet.
            </p>
            <div className="palette-grid">
              {PALETTE.map((c) => (
                <div key={c.hex} className="swatch-card">
                  <div className="swatch-color" style={{ background: c.hex }} />
                  <div className="swatch-info">
                    <div className="swatch-label">{c.label}</div>
                    <div className="swatch-name">{c.name}</div>
                    <div className="swatch-hex">{c.hex} · rgb({c.rgb})</div>
                    <div className="swatch-use">{c.use}</div>
                    <div className="swatch-note">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TYPOGRAFI ── */}
        {activeTab === "Typografi" && (
          <div className="section">
            <div className="section-overline">Typografi</div>
            <h2 className="section-h2">Teckensnitt</h2>
            <p className="section-lead">
              Seriff-baserad typografi kommunicerar auktoritet och stabilitet.
              Den här sajten ska kännas som en välgjord teknisk rapport,
              inte en produktlandningssida.
            </p>
            <table className="typo-table">
              <thead>
                <tr>
                  <th>Användning</th>
                  <th>Teckensnitt</th>
                  <th>Förhandsgranskning</th>
                  <th>Motivering</th>
                </tr>
              </thead>
              <tbody>
                {TYPO.map((t) => (
                  <tr key={t.font}>
                    <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "var(--feltsten)", whiteSpace: "nowrap" }}>{t.role}</td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.2rem" }}>{t.font}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.68rem", color: "var(--aska)" }}>{t.weight}</div>
                    </td>
                    <td>
                      {t.font === "Playfair Display" && (
                        <div className="font-preview" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                          Utsläppsmätning
                        </div>
                      )}
                      {t.font === "Source Serif 4" && (
                        <div className="font-preview" style={{ fontFamily: "'Source Serif 4', serif", fontWeight: 400, fontSize: "1rem" }}>
                          Revisionsklara mätdata för er miljörapportering.
                        </div>
                      )}
                      {t.font === "IBM Plex Mono" && (
                        <div className="font-preview" style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: "0.78rem" }}>
                          OGMP 2.0 · ESRS E1 · EU 2024/1787
                        </div>
                      )}
                    </td>
                    <td style={{ color: "var(--aska)", fontStyle: "italic" }}>{t.rationale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── DESIGNPROMPT ── */}
        {activeTab === "Designprompt" && (
          <div className="section">
            <div className="section-overline">Redo att använda</div>
            <h2 className="section-h2">Designprompt</h2>
            <p className="section-lead">
              Kopiera och klistra in direkt i Claude, Figma AI eller annat designverktyg.
              Innehåller kundprofiler, färgkoder, typografi och layoutprinciper.
            </p>
            <div style={{ position: "relative" }}>
              <div className="prompt-box">{PROMPT}</div>
              <button className="prompt-copy" onClick={copyPrompt}>
                {copied ? "Kopierat ✓" : "Kopiera →"}
              </button>
            </div>
          </div>
        )}

        {/* ── FÖRHANDSGRANSKNING ── */}
        {activeTab === "Förhandsgranskning" && (
          <div className="section">
            <div className="section-overline">Mockup</div>
            <h2 className="section-h2">Hur det ser ut i praktiken</h2>
            <p className="section-lead">
              En grov förhandsgranskning av ny design jämfört med den gamla "tech"-känslan.
              Seriff, varmt vitt, mossig grön och järnmalmsblå CTA.
            </p>

            <div style={{ border: "1px solid var(--mossa)", marginBottom: "2rem", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ background: "var(--dimma)", padding: "0.5rem 1rem", fontSize: "0.72rem", fontFamily: "'IBM Plex Mono',monospace", color: "var(--aska)", borderBottom: "1px solid var(--mossa)" }}>
                NY DESIGN — Skandinavisk industriell auktoritet
              </div>
              <div className="mock-hero">
                <div className="mock-overline">Drönarbaserad utsläppsmätning · Sverige</div>
                <div className="mock-title">
                  Mätdata som håller<br />
                  <em>för revisionen.</em>
                </div>
                <div className="mock-body">
                  EcoDrone levererar certifierad mätning av metan och industriutsläpp.
                  Revisionsklara rapporter för CSRD, LDAR och SMP-rapportering.
                </div>
                <button className="mock-btn">Kontakta oss</button>
              </div>
              <div className="mock-card-row">
                <div className="mock-card">
                  <div className="mock-card-label">CSRD / ESRS E1</div>
                  <div className="mock-card-title">Scope 1-mätning</div>
                  <div className="mock-card-text">Direktmätta utsläppsdata för er hållbarhetsrapportering. Uppfyller ESRS E1-krav.</div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-label">EU 2024/1787</div>
                  <div className="mock-card-title">LDAR-inspektion</div>
                  <div className="mock-card-text">Uppfyller EU-metanförordningens krav på Type 2 LDAR-inspektioner.</div>
                </div>
                <div className="mock-card">
                  <div className="mock-card-label">SMP / Miljöbalken</div>
                  <div className="mock-card-title">Egenkontroll</div>
                  <div className="mock-card-text">Mätdata formaterade för direkt användning i er miljörapportering till SMP.</div>
                </div>
              </div>
            </div>

            <div style={{ background: "var(--dimma)", padding: "1.2rem 1.5rem", borderLeft: "3px solid var(--feltsten)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--kol)", lineHeight: 1.7 }}>
                <strong>Skillnaden mot den gamla versionen:</strong> Seriff-typografi signalerar auktoritet och stabilitet.
                Varmt vitt bakgrund känns som ett tekniskt dokument, inte ett SaaS-dashboard.
                Järnmalmsblå CTA är tydlig utan att skrika. Inga hex-symboler, ingen monospace som dekoration,
                inga neonaccenter. En miljöchef på 53 år känner igen detta — det liknar rapporter
                och myndighetsdokument de jobbar med varje dag.
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
