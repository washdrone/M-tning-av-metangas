import { useState } from "react";

const NAV_ITEMS = ["Tjänster", "Branscher", "Metodik", "Compliance", "Dataskydd", "Kontakt"];

const SERVICES = [
  {
    icon: "⬡",
    title: "Metanmätning",
    sub: "CH₄ · TDLAS-sensor",
    desc: "Drönarbaserad plymmätning och kvantifiering av metanutsläpp. OGMP 2.0 nivå 4-kompatibel. Levererar massflödesdata i kg/h med dokumenterad mätosäkerhet.",
    tags: ["OGMP 2.0", "ESRS E1", "EU-metanförordning"],
  },
  {
    icon: "◈",
    title: "LDAR-inspektion",
    sub: "Leak Detection & Repair",
    desc: "Systematisk genomsökning av ventiler, flänsförband, kompressorer och tankar. Möter krav enligt EU-metanförordningen 2024/1787 för ovan- och underjordisk infrastruktur.",
    tags: ["EU 2024/1787", "LDAR", "OGI"],
  },
  {
    icon: "◎",
    title: "OGI-kamerainspektioner",
    sub: "Optisk gasavbildning",
    desc: "Infraröd visualisering av osynliga gasplymer. Identifierar och lokaliserar läckpunkter i realtid. Komplett med georefererade läckkartor och bildbevis för revision.",
    tags: ["OGI", "Infraröd", "Georef"],
  },
  {
    icon: "⬡",
    title: "Växthusgasmätning",
    sub: "CH₄ · N₂O · CO₂",
    desc: "Fullständig kartläggning av Scope 1-utsläpp. Mäter samtliga klimatgaser relevant för CSRD/ESRS E1-rapportering. Levereras som revisionsklara datapunkter.",
    tags: ["Scope 1", "CSRD", "ESRS E1"],
  },
  {
    icon: "◈",
    title: "Ytemissionsmätning",
    sub: "Deponier · Reningsverk",
    desc: "Kvantitativ drönarbaserad plymmätning enligt Avfall Sveriges vägledning 2024:12. Standardiserad metodik för kommunala och privata avfallsanläggningar.",
    tags: ["Avfall Sverige", "Deponi", "SMP"],
  },
  {
    icon: "◎",
    title: "Pre-compliance screening",
    sub: "Preliminär läckagebedömning",
    desc: "Kostnadseffektiv inledande flygning för att kartlägga om er anläggning har mätbara utsläppskällor. Naturlig inledning till fullständig LDAR eller plymmätning.",
    tags: ["Screening", "Snabb insats"],
  },
  {
    icon: "⬡",
    title: "Årsavtal / Löpande monitoring",
    sub: "Kvartalsvisa mätningar",
    desc: "Strukturerat abonnemangsupplägg för anläggningar med återkommande mätbehov. Inkluderar trendanalys och jämförbarhet mellan mätperioder för revision.",
    tags: ["Abonnemang", "Trend", "Revision"],
  },
  {
    icon: "◈",
    title: "Kombinerad termisk inspektion",
    sub: "Utsläpp + värmekarta",
    desc: "Termokamera och gassensor monterade parallellt. Dubbelt datavärde under ett flygtillfälle — gasdetektion och termisk kartläggning av processutrustning samtidigt.",
    tags: ["Termisk", "Kombination", "Effektivitet"],
  },
];

const SECTORS = [
  { name: "Deponier & avfallsanläggningar", note: "Avfall Sverige 2024:12 · SMP · CH₄" },
  { name: "Avloppsreningsverk", note: "CH₄ + N₂O · Slamlagring · IPCC" },
  { name: "Biogasanläggningar", note: "Läckagekontroll · RNG · ESG" },
  { name: "Raffinaderier & petrokemi", note: "LDAR · OGMP 2.0 · EU-metanförordning" },
  { name: "Hamnar & LNG-terminaler", note: "Komplex infrastruktur · Svårtillgängliga ytor" },
  { name: "Gruvdrift & tungindustri", note: "Diffusa utsläpp · Arealmätning · CSRD" },
];

const REGS = [
  {
    reg: "CSRD / ESRS E1",
    krav: "Scope 1-utsläppsmätning i hållbarhetsrapport",
    berord: "Stora bolag (>500 ans) → alla stora bolag",
    datum: "Rapportering 2025/2026",
    status: "Aktiv",
  },
  {
    reg: "EU Metanförordning 2024/1787",
    krav: "LDAR-inspektioner, OGMP 2.0 nivå 1–5",
    berord: "Olja, gas, gruvdrift i EU",
    datum: "2025–",
    status: "Aktiv",
  },
  {
    reg: "SMP / Miljöbalken",
    krav: "Årlig miljörapportering med utsläppsdata",
    berord: "Industri, avfall, VA",
    status: "Löpande",
  },
  {
    reg: "Avfall Sverige 2024:12",
    krav: "Kvantitativ mätning av ytemissioner",
    berord: "Deponier och avfallsanläggningar",
    datum: "2024–",
    status: "Aktiv",
  },
  {
    reg: "OGMP 2.0 nivå 4/5",
    krav: "Direktmätt data, ej emissionsfaktorer",
    berord: "Olje- och gasbolag",
    datum: "Löpande",
    status: "Frivilligt/krav",
  },
];

const METHODS = [
  {
    id: "01",
    name: "TDLAS",
    full: "Tunable Diode Laser Absorption Spectroscopy",
    desc: "Laserspektroskopi med hög känslighet. Detekterar metan från upp till 100 m avstånd. Möter OGMP 2.0 nivå 4 och EU-metanförordningens Type 2 LDAR-krav.",
    specs: ["Detektering < 1 g CH₄/h", "Räckvidd 10–100 m", "OGMP 2.0 nivå 4-kompatibel"],
  },
  {
    id: "02",
    name: "OGI",
    full: "Optical Gas Imaging",
    desc: "Infraröd kamera som visualiserar osynliga gasplymer i realtid. Identifierar läckpunkter och ger bildbevis för revision och reparationsplanering.",
    specs: ["Visualisering i realtid", "Georefererade bilder", "EPA-godkänd metod"],
  },
  {
    id: "03",
    name: "Plymmätning",
    full: "Mass Balance / Flux Wall",
    desc: "Drönaren flyger tvärgående mot vindriktningen och mäter hela utsläppsplymen från en anläggning. Ger totalutsläpp i kg/h med kvantifierad osäkerhet.",
    specs: ["Totalutsläpp i kg/h", "Dokumenterad osäkerhet", "OGMP 2.0 nivå 5"],
  },
  {
    id: "04",
    name: "Plattform",
    full: "DJI Matrice 400",
    desc: "Industriell drönare med PDRA S-01 certifiering. Bär sensorer upp till 2,7 kg. Opererar i krävande miljöer och svårtillgängliga anläggningar.",
    specs: ["PDRA S-01 certifierad", "2,7 kg payload", "IP54-skydd"],
  },
];

const DATA_POLICY = [
  {
    q: "Vilka data samlar EcoDrone in vid ett uppdrag?",
    a: "Vi samlar in mätdata (gaskoncentrationer, GPS-koordinater, tidsstämplar), meteorologiska data (vindhastighet, vindrikting, temperatur, lufttryck) samt flygloggar. Inga personuppgifter samlas in som en del av mätuppdraget.",
  },
  {
    q: "Lagras mätdata hos EcoDrone efter leverans?",
    a: "Rådata lagras i krypterat format i 12 månader efter uppdragets slutförande för att möjliggöra kompletterande analyser eller revisionsförfrågningar. Därefter raderas all data om inte kunden begärt förlängd lagring.",
  },
  {
    q: "Kan EcoDrone dela mätdata med tredje part?",
    a: "Nej. Mätdata delas aldrig med tredje part — inklusive myndigheter, konkurrenter eller databrokers — utan skriftligt godkännande från kunden. Det enda undantaget är om EcoDrone är föremål för lagakraftvunnen domstolsorder.",
  },
  {
    q: "Var lagras data fysiskt?",
    a: "All data lagras på servrar inom EU (Sverige/Frankfurt) med ISO 27001-certifierade leverantörer. Ingen data överförs till länder utanför EES.",
  },
  {
    q: "Hur hanteras känsliga anläggningsdata?",
    a: "Vi förstår att utsläppsdata från er anläggning är affärskänslig. Alla EcoDronemedarbetare undertecknar sekretessavtal (NDA) innan uppdragsstart. På begäran ingår vi separat databehandlaravtal (DPA) anpassat till er compliance-avdelnings krav.",
  },
  {
    q: "Vad händer med bildmaterial från OGI-inspektioner?",
    a: "Allt bildmaterial — termiska bilder, videosekvenser och georefererade foton — levereras till kunden och raderas från EcoDrones system efter leveransgodkännande, om inte kunden begärt arkivering.",
  },
];

const CERT_DATA = [
  { label: "Driftauktorisation", val: "PDRA S-01 · Transportstyrelsen" },
  { label: "Drönare", val: "DJI Matrice 400 · C6-klass" },
  { label: "Pilotkompetens", val: "A2 CofC + STS-01 utbildad" },
  { label: "Sensorstandard", val: "TDLAS kalibrering enligt ISO 6145" },
  { label: "Mätprotokoll", val: "OGMP 2.0 · EU 2024/1787" },
  { label: "Rapportformat", val: "ESRS E1 · SMP · OGMP-format" },
  { label: "Dataskydd", val: "GDPR · NDA vid uppdragsstart" },
  { label: "Försäkring", val: "Ansvarsförsäkring 10 MSEK" },
];

// ── Styles
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --forest: #0d3b27;
    --moss: #1a6b3c;
    --sage: #4a9b6f;
    --mist: #d4e8dc;
    --cream: #f5f0e8;
    --ink: #0f1a14;
    --mid: #4a5e52;
    --line: #c8ddd0;
    --white: #ffffff;
    --accent: #b8d429;
  }

  body { background: var(--cream); color: var(--ink); font-family: 'Outfit', sans-serif; }

  .app { min-height: 100vh; }

  /* NAV */
  nav {
    position: sticky; top: 0; z-index: 100;
    background: var(--forest);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2.5rem; height: 60px;
    border-bottom: 2px solid var(--moss);
  }
  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.4rem; color: var(--accent); letter-spacing: 0.04em;
  }
  .nav-logo span { color: var(--mist); font-style: italic; font-size: 0.9rem; margin-left: 0.5rem; }
  .nav-links { display: flex; gap: 2rem; }
  .nav-link {
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--mist); cursor: pointer;
    transition: color 0.2s; border: none; background: none;
    font-family: 'DM Mono', monospace;
  }
  .nav-link:hover, .nav-link.active { color: var(--accent); }

  /* HERO */
  .hero {
    background: var(--forest);
    padding: 5rem 2.5rem 4rem;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; top: -40%; right: -10%;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(74,155,111,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem; color: var(--accent); letter-spacing: 0.12em;
    text-transform: uppercase; margin-bottom: 1.2rem;
  }
  .hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.4rem, 5vw, 4rem);
    color: var(--white); line-height: 1.1;
    max-width: 700px; margin-bottom: 1.5rem;
  }
  .hero-title em { color: var(--accent); font-style: italic; }
  .hero-sub {
    font-size: 1.05rem; color: var(--mist); max-width: 560px;
    line-height: 1.7; font-weight: 300; margin-bottom: 2.5rem;
  }
  .hero-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .hero-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem; padding: 0.3rem 0.8rem;
    border: 1px solid rgba(184,212,41,0.4); color: var(--accent);
    border-radius: 2px; letter-spacing: 0.06em;
  }

  /* SECTION */
  section { padding: 4rem 2.5rem; }
  section:nth-child(even) { background: var(--white); }
  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem; color: var(--sage); letter-spacing: 0.14em;
    text-transform: uppercase; margin-bottom: 0.6rem;
  }
  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    color: var(--forest); margin-bottom: 0.8rem; line-height: 1.2;
  }
  .section-sub { font-size: 1rem; color: var(--mid); max-width: 600px; line-height: 1.7; font-weight: 300; margin-bottom: 2.5rem; }

  /* SERVICES GRID */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1px; background: var(--line);
    border: 1px solid var(--line);
  }
  .service-card {
    background: var(--white); padding: 1.8rem;
    transition: background 0.2s;
    cursor: default;
  }
  .service-card:hover { background: var(--cream); }
  .service-icon { font-size: 1.4rem; color: var(--sage); margin-bottom: 0.8rem; }
  .service-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.15rem; color: var(--forest); margin-bottom: 0.2rem;
  }
  .service-sub { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--sage); margin-bottom: 0.8rem; letter-spacing: 0.05em; }
  .service-desc { font-size: 0.88rem; color: var(--mid); line-height: 1.65; margin-bottom: 1rem; }
  .service-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .service-tag {
    font-family: 'DM Mono', monospace; font-size: 0.65rem;
    background: var(--mist); color: var(--forest);
    padding: 0.2rem 0.5rem; border-radius: 2px; letter-spacing: 0.04em;
  }

  /* SECTORS */
  .sectors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
  .sector-card {
    border: 1px solid var(--line); padding: 1.4rem 1.6rem;
    display: flex; flex-direction: column; gap: 0.4rem;
    transition: border-color 0.2s, transform 0.2s;
  }
  .sector-card:hover { border-color: var(--sage); transform: translateY(-2px); }
  .sector-num { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--sage); }
  .sector-name { font-weight: 600; font-size: 0.95rem; color: var(--forest); }
  .sector-note { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--mid); }

  /* METHODS */
  .methods-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .method-card { border-left: 3px solid var(--sage); padding: 1.5rem 1.8rem; background: var(--cream); }
  .method-id { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--sage); margin-bottom: 0.4rem; }
  .method-name { font-family: 'DM Serif Display', serif; font-size: 1.4rem; color: var(--forest); margin-bottom: 0.2rem; }
  .method-full { font-size: 0.78rem; color: var(--mid); margin-bottom: 0.8rem; font-style: italic; }
  .method-desc { font-size: 0.88rem; color: var(--mid); line-height: 1.65; margin-bottom: 1rem; }
  .method-specs { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
  .method-spec { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--forest); }
  .method-spec::before { content: "→ "; color: var(--sage); }

  /* CERTS */
  .cert-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 0; border: 1px solid var(--line); }
  .cert-row {
    display: flex; align-items: stretch; border-bottom: 1px solid var(--line);
  }
  .cert-row:last-child { border-bottom: none; }
  .cert-label {
    font-family: 'DM Mono', monospace; font-size: 0.72rem;
    background: var(--forest); color: var(--mist);
    padding: 0.9rem 1.2rem; min-width: 180px;
    display: flex; align-items: center;
    letter-spacing: 0.04em;
  }
  .cert-val {
    font-size: 0.88rem; color: var(--ink); padding: 0.9rem 1.2rem;
    display: flex; align-items: center; font-weight: 500;
  }

  /* COMPLIANCE TABLE */
  .reg-table { width: 100%; border-collapse: collapse; }
  .reg-table th {
    font-family: 'DM Mono', monospace; font-size: 0.68rem;
    text-align: left; padding: 0.7rem 1rem;
    background: var(--forest); color: var(--mist);
    letter-spacing: 0.07em; text-transform: uppercase;
  }
  .reg-table td { padding: 0.9rem 1rem; font-size: 0.88rem; border-bottom: 1px solid var(--line); vertical-align: top; }
  .reg-table tr:last-child td { border-bottom: none; }
  .reg-table tr:hover td { background: var(--cream); }
  .badge {
    display: inline-block; font-family: 'DM Mono', monospace;
    font-size: 0.65rem; padding: 0.2rem 0.5rem; border-radius: 2px;
    background: var(--mist); color: var(--forest);
  }
  .badge.active { background: rgba(74,155,111,0.15); color: var(--moss); }

  /* DATA POLICY */
  .faq-list { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item:last-child { border-bottom: none; }
  .faq-q {
    padding: 1.2rem 1.5rem; cursor: pointer;
    font-weight: 600; font-size: 0.92rem;
    display: flex; justify-content: space-between; align-items: center;
    transition: background 0.15s; gap: 1rem;
  }
  .faq-q:hover { background: var(--cream); }
  .faq-q.open { background: var(--mist); }
  .faq-toggle { font-size: 1.2rem; color: var(--sage); flex-shrink: 0; line-height: 1; }
  .faq-a {
    padding: 0 1.5rem 1.2rem;
    font-size: 0.88rem; color: var(--mid); line-height: 1.75;
    background: var(--mist);
    display: none;
  }
  .faq-a.open { display: block; }

  /* CONTACT */
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 800px; }
  .contact-item { display: flex; flex-direction: column; gap: 0.3rem; }
  .contact-lbl { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--sage); text-transform: uppercase; letter-spacing: 0.1em; }
  .contact-val { font-size: 1rem; font-weight: 500; color: var(--forest); }
  .contact-note { font-size: 0.82rem; color: var(--mid); }

  /* CTA */
  .cta-bar {
    background: var(--forest); padding: 3rem 2.5rem;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;
    border-top: 3px solid var(--accent);
  }
  .cta-text h3 { font-family: 'DM Serif Display', serif; font-size: 1.6rem; color: var(--white); margin-bottom: 0.4rem; }
  .cta-text p { font-size: 0.9rem; color: var(--mist); max-width: 480px; }
  .cta-btn {
    background: var(--accent); color: var(--forest);
    border: none; padding: 0.9rem 2rem; font-family: 'DM Mono', monospace;
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; cursor: pointer;
    transition: opacity 0.2s;
  }
  .cta-btn:hover { opacity: 0.85; }

  @media (max-width: 640px) {
    nav { padding: 0 1.2rem; }
    .nav-links { gap: 1rem; }
    .nav-link { font-size: 0.68rem; }
    section { padding: 3rem 1.2rem; }
    .hero { padding: 3rem 1.2rem; }
    .contact-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .cta-bar { flex-direction: column; align-items: flex-start; }
    .reg-table { font-size: 0.78rem; }
  }
`;

// ── Component
export default function EcoDroneSite() {
  const [activeSection, setActiveSection] = useState("Tjänster");
  const [openFaq, setOpenFaq] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const sectionMap = {
    Tjänster: "tjanster",
    Branscher: "branscher",
    Metodik: "metodik",
    Compliance: "compliance",
    Dataskydd: "dataskydd",
    Kontakt: "kontakt",
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">

        {/* NAV */}
        <nav>
          <div className="nav-logo">EcoDrone <span>Sverige AB</span></div>
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => scrollTo(sectionMap[item])}
              >{item}</button>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-eyebrow">Drönarbaserad utsläppsmätning · Sverige</div>
          <h1 className="hero-title">
            Mät det som<br />
            <em>lagstiftningen kräver.</em>
          </h1>
          <p className="hero-sub">
            EcoDrone levererar certifierad mätning av metan och industriutsläpp för kunder
            med krav på ESG-rapportering, LDAR-compliance och CSRD Scope 1-data.
            Snabb insats. Revisionsklara rapporter.
          </p>
          <div className="hero-tags">
            {["CSRD / ESRS E1", "EU-metanförordning 2024/1787", "OGMP 2.0 nivå 4/5", "SMP-rapportering", "PDRA S-01 certifierad"].map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* TJÄNSTER */}
        <section id="tjanster">
          <div className="section-label">Tjänster</div>
          <h2 className="section-title">Vad vi mäter</h2>
          <p className="section-sub">
            Alla uppdrag levereras med georefererad mätdata, dokumenterad mätosäkerhet
            och revisionsklara rapporter formaterade för er specifika compliance-standard.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-sub">{s.sub}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BRANSCHER */}
        <section id="branscher">
          <div className="section-label">Branscher</div>
          <h2 className="section-title">Vilka vi arbetar med</h2>
          <p className="section-sub">
            Vi har specialiserat oss på industrier med komplexa, diffusa utsläppskällor
            som är svåra att mäta med traditionella markbaserade metoder.
          </p>
          <div className="sectors-grid">
            {SECTORS.map((s, i) => (
              <div key={s.name} className="sector-card">
                <div className="sector-num">0{i + 1}</div>
                <div className="sector-name">{s.name}</div>
                <div className="sector-note">{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* METODIK & CERTIFIERING */}
        <section id="metodik">
          <div className="section-label">Metodik & Certifiering</div>
          <h2 className="section-title">Hur vi mäter</h2>
          <p className="section-sub">
            Våra mätresultat är reproducerbara, oberoende granskningsbara och
            dokumenterade enligt de standarder era revisorer och tillsynsmyndigheter kräver.
          </p>
          <div className="methods-grid" style={{ marginBottom: "3rem" }}>
            {METHODS.map((m) => (
              <div key={m.id} className="method-card">
                <div className="method-id">{m.id}</div>
                <div className="method-name">{m.name}</div>
                <div className="method-full">{m.full}</div>
                <div className="method-desc">{m.desc}</div>
                <ul className="method-specs">
                  {m.specs.map(s => <li key={s} className="method-spec">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-label" style={{ marginBottom: "0.8rem" }}>Certifikat & Standarder</div>
          <div className="cert-grid">
            {CERT_DATA.map((c) => (
              <div key={c.label} className="cert-row">
                <div className="cert-label">{c.label}</div>
                <div className="cert-val">{c.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLIANCE */}
        <section id="compliance">
          <div className="section-label">Regulatorisk Tracker</div>
          <h2 className="section-title">Aktuella krav & tidslinjer</h2>
          <p className="section-sub">
            Regelverken som styr era mätbehov. Uppdateras löpande när ny lagstiftning träder i kraft.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Regelverk</th>
                  <th>Krav</th>
                  <th>Berörda</th>
                  <th>Tidslinje</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {REGS.map((r) => (
                  <tr key={r.reg}>
                    <td style={{ fontWeight: 600, fontSize: "0.88rem", whiteSpace: "nowrap" }}>{r.reg}</td>
                    <td>{r.krav}</td>
                    <td>{r.berord}</td>
                    <td style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem" }}>{r.datum || "–"}</td>
                    <td>
                      <span className={`badge ${r.status === "Aktiv" ? "active" : ""}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DATASKYDD */}
        <section id="dataskydd">
          <div className="section-label">Dataskydd & Konfidentialitet</div>
          <h2 className="section-title">Vad händer med era data?</h2>
          <p className="section-sub">
            Mätdata från er anläggning är affärskänslig. Här är våra åtaganden —
            utan juridisk finstilt.
          </p>
          <div className="faq-list">
            {DATA_POLICY.map((item, i) => (
              <div key={i} className="faq-item">
                <div
                  className={`faq-q ${openFaq === i ? "open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle">{openFaq === i ? "−" : "+"}</span>
                </div>
                <div className={`faq-a ${openFaq === i ? "open" : ""}`}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", padding: "1.2rem 1.5rem", background: "var(--mist)", borderLeft: "3px solid var(--sage)" }}>
            <p style={{ fontSize: "0.85rem", color: "var(--mid)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--forest)" }}>Databehandlaravtal (DPA):</strong>{" "}
              Alla uppdrag inkluderar ett standardiserat databehandlaravtal.
              Kunder med specifika compliance-krav kan begära anpassat DPA
              utformat för er organisations krav — kontakta oss innan uppdragsstart.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-bar">
          <div className="cta-text">
            <h3>Redo att mäta det lagstiftningen kräver?</h3>
            <p>Kontakta oss för en inledande genomgång av er anläggning och era compliance-krav. Ingen upphandling krävs för en första konsultation.</p>
          </div>
          <button className="cta-btn">Boka konsultation →</button>
        </div>

        {/* KONTAKT */}
        <section id="kontakt">
          <div className="section-label">Kontakt</div>
          <h2 className="section-title">Ta kontakt</h2>
          <p className="section-sub" style={{ marginBottom: "2rem" }}>
            Vi svarar inom en arbetsdag. För akuta uppdrag — ring direkt.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-lbl">Telefon</span>
              <span className="contact-val">+46 (0) XX XXX XX XX</span>
              <span className="contact-note">Mån–fre 07:00–17:00</span>
            </div>
            <div className="contact-item">
              <span className="contact-lbl">E-post</span>
              <span className="contact-val">info@ecodrone.se</span>
              <span className="contact-note">Svar inom 1 arbetsdag</span>
            </div>
            <div className="contact-item">
              <span className="contact-lbl">Verksamhetsområde</span>
              <span className="contact-val">Hela Sverige</span>
              <span className="contact-note">Baserade i Göteborg / Västra Götaland</span>
            </div>
            <div className="contact-item">
              <span className="contact-lbl">Org.nr</span>
              <span className="contact-val">XXXXXX-XXXX</span>
              <span className="contact-note">EcoDrone Sverige AB</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
