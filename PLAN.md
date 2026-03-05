# EcoDrone SEO & AEO Implementeringsplan

## Fas 1: KRITISKT — Rebranding & Teknisk grund

### 1.1 Rebrand WashDrone → EcoDrone (alla filer)
- Byt `WashDrone` → `EcoDrone` i Header, Footer, layout.tsx, alla sidor
- Byt domän `washdrone.se` → `ecodrone.se` i metadata, sitemap, robots.txt
- Uppdatera Organization schema: `EcoDrone Sverige AB`
- Uppdatera e-post till `info@ecodrone.se`

### 1.2 Förbättra Organization Schema (startsida)
- Lägg till `LocalBusiness` typ (dubbel-typ: Organization + LocalBusiness)
- Lägg till `knowsAbout`, `serviceType`, `address`, `telephone`
- Följa handbokens JSON-LD-mall exakt

### 1.3 Robots.txt & Sitemap uppdatering
- Uppdatera sitemap URL till ecodrone.se
- Förbereda sitemap för nya sidor

---

## Fas 2: HÖG — Ny URL-struktur & sidor

### 2.1 Ny URL-struktur enligt handboken
Nuvarande → Ny:
- `/matning` → `/tjanster` (tjänstehub)
- `/matning/deponi` → `/branscher/deponier`
- `/matning/biogas` → `/branscher/biogas`
- `/matning/reningsverk` → `/branscher/reningsverk`
- `/matning/industri` → `/branscher/olja-gas` + `/tjanster/ldar-inspektion`
- `/matning/leveranser` → behåll som undersida eller integrera
- `/matning/metodik` → behåll som undersida eller integrera
- `/matning/faq` → `/tjanster/faq` eller integrera FAQ per sida
- `/matning/case` → `/case` (egen sektion)
- `/matning/kontakt` → `/kontakt`

### 2.2 Nya tjänstesidor (8 st enligt handbok)
- `/tjanster/utslappsmating-dronare/` — Kärntjänst
- `/tjanster/metanmatning/` — Metanmätning CH4
- `/tjanster/ogi-kamera/` — OGI-kamerainspektioner
- `/tjanster/ldar-inspektion/` — LDAR
- `/tjanster/plymmating/` — Plymmätning
- `/tjanster/vaxthusgasmatning/` — Växthusgasmätning
- `/tjanster/gasdetektion/` — Gasdetektion
- `/tjanster/luftkvalitet/` — Luftkvalitetsmätning

### 2.3 Nya branschartikar (6 st)
- `/branscher/deponier/` (befintligt innehåll, utökat)
- `/branscher/reningsverk/` (befintligt innehåll, utökat)
- `/branscher/biogas/` (befintligt innehåll, utökat)
- `/branscher/olja-gas/` (nytt — raffinaderier, LDAR)
- `/branscher/gruva/` (nytt)
- `/branscher/hamnar/` (nytt)

### 2.4 Compliance-sidor (4 st — HÖG prioritet)
- `/compliance/csrd/` — CSRD & ESRS E1
- `/compliance/eu-metanforordning/` — EU-metanförordningen
- `/compliance/ogmp/` — OGMP 2.0
- `/compliance/miljorapportering/` — SMP/Naturvårdsverket

### 2.5 Om oss-sida
- `/om-oss/` — Team, certifieringar, utrustning, E-E-A-T-stärkande

---

## Fas 3: MEDEL — Geografiska sidor & Blogg

### 3.1 Regionala landningssidor (7 st)
- `/platser/goteborg/`
- `/platser/stockholm/`
- `/platser/malmo/`
- `/platser/vastsverige/`
- `/platser/norrland/`
- `/platser/gavleborg/`
- `/platser/norrbotten/`

### 3.2 Blogg-infrastruktur & första artiklar
- `/blogg/` — Hub-sida
- 6 artiklar enligt kvartal 1-plan i handboken

---

## Fas 4: Schema Markup & AEO

### 4.1 FAQPage schema på alla tjänste- och branschartikar
- Implementera FAQ-sektioner med `FAQPage` JSON-LD
- 6–10 frågor per sida

### 4.2 Article schema på blogg- och compliance-sidor
### 4.3 BreadcrumbList schema på alla sidor
### 4.4 HowTo schema där relevant

---

## Fas 5: SEO-metadata & Innehållsoptimering

### 5.1 Unika title tags (max 60 tecken) per sida med målsökord
### 5.2 Meta descriptions (max 160 tecken) per sida
### 5.3 H1-H3-hierarki optimerad per sida
### 5.4 Intern länkstrategi mellan sidor
### 5.5 Core Web Vitals-optimering

---

## UI/UX-ändringar som krävs

1. **Navigation** — Ny menystruktur: Tjänster | Branscher | Compliance | Platser | Blogg | Om oss | Kontakt
2. **Footer** — Uppdatera med ny struktur och alla länkar
3. **Breadcrumbs** — Anpassa till ny URL-hierarki
4. **CTA-band** — Uppdatera texter med compliance-vinkel
5. **Startsidan** — Omarbeta hero med EcoDrone-branding och compliance-fokus

---

## Vad jag implementerar nu (denna session)

Givet sessionens omfång fokuserar jag på:

1. **Fas 1 komplett** — Rebranding + teknisk grund
2. **Fas 2.1** — Ny URL-struktur (flytta befintliga sidor)
3. **Fas 2.2–2.5** — Skapa nya sidor (tjänster, branscher, compliance, om oss)
4. **Fas 4.1** — FAQPage schema
5. **UI/UX** — Ny navigation, footer, startsida
6. **Fas 5.1–5.3** — Metadata och rubriker

Fas 3 (blogg & geosidor) lämnas till nästa iteration då det kräver mycket unikt innehåll.
