# fastighetsprospekt

Fristående tjänst som samlar in, normaliserar och filtrerar **svenska
fastighetsbolag och deras kontaktpersoner** – specifikt tekniska förvaltare och
andra roller med **beslutsmandat över yttre underhåll**: fasadtvätt, taktvätt
och fönsterputs.

Tjänsten är **källagnostisk**: indata kommer från pluggbara adaptrar
(CSV/manuell import fungerar direkt; en kommersiell-API-adapter finns som mall).
Inga runtime-beroenden – bara Nodes inbyggda moduler.

## ⚠️ Läs detta först: juridik och datakällor

Den här tjänsten hanterar **personuppgifter** (namngivna kontaktpersoner). Innan
du använder den skarpt:

- **Laglig grund (GDPR):** För B2B-prospektering är *berättigat intresse*
  (`legitimate-interest`) vanligast, men du måste göra och dokumentera en
  intresseavvägning, kunna informera de registrerade och kunna gallra. Tjänsten
  sätter aldrig "samtycke" automatiskt.
- **Datakälla – aldrig gissa:** Det finns inget gratis register som listar
  "person med mandat över fasad-/tak-/fönstertvätt". Den uppgiften härleds från
  titel (se nedan). Var datan kommer ifrån måste **du** bestämma:
  - **Kommersiell data-API** (lagligt rent, kräver avtal/nyckel): t.ex. Roaring,
    Bisnode/Dun & Bradstreet, Vainu, Bizzdo. Konfigureras i kod – se
    `src/sources/commercial-api-source.ts`. Tjänsten hittar inte på leverantör,
    endpoint eller fältmappning.
  - **Offentliga register** (Bolagsverket/SCB): ger bolag och SNI-koder men inte
    namngivna underhållsansvariga.
  - **Webbskrapning** (allabolag/hitta/ratsit/LinkedIn): juridiskt riskabelt
    (användarvillkor + GDPR) – ingår medvetet inte.
  - **CSV/manuell import:** enklast att börja med – se nedan.

Riktiga datafiler och exportresultat versionshanteras **inte** (se
`.gitignore`), eftersom de innehåller personuppgifter.

## Installation

```bash
cd fastighetsprospekt
npm install
```

## Användning (CSV)

```bash
# CSV in → CSV ut (en rad per kontaktperson)
npm run prospekt -- --source csv --file data/exempel.csv --out out.csv

# Bara fasad/tak/fönster, högre tröskel, JSON till stdout
npm run prospekt -- --source csv --file data/exempel.csv \
  --scopes fasadtvatt,taktvatt,fonsterputs --min-confidence 0.6 --format json
```

Se alla flaggor: `npm run prospekt -- --help`.

### CSV-format

Rubrikrad krävs. Kolumnnamn matchas flexibelt (se `DEFAULT_COLUMN_MAP` i
`src/sources/csv-source.ts`). Minimum är `orgnummer` och `foretag`; en rad kan
ha en kontaktperson (`kontaktperson`, `titel`, …) eller bara vara ett bolag.
Flera rader med samma orgnummer slås ihop. Se `data/exempel.csv`.

## Så identifieras beslutsfattarna

Eftersom mandatet inte finns i något register **härleds** det regelbaserat från
titeln (`src/roles.ts`). Varje kontakt får en `rollkategori`, sannolika
`beslutsomraden` och en `rollkonfidens` (0–1). Pipelinen behåller kontakter vars
beslutsområde matchar `--scopes` och vars konfidens ≥ `--min-confidence`.
Konfidensen är en **härledning, inte verifierad sanning** – granska träffarna.

Exempel på mappning:

| Titel | Rollkategori | Konfidens |
|---|---|---|
| Teknisk förvaltare | `teknisk-forvaltare` | 0.9 |
| Underhållsansvarig | `underhallsansvarig` | 0.85 |
| Driftchef / Teknisk chef | `driftansvarig` | 0.8 |
| Fastighetschef | `fastighetschef` | 0.75 |
| Inköps-/upphandlingschef | `inkop-upphandling` | 0.6 (endast upphandling) |
| Fastighetsskötare | `operativ-skotsel` | 0.15 (filtreras oftast bort) |

## Arkitektur

```
src/
  types.ts                      Domänmodell + GDPR-fält
  roles.ts                      Titel → rollkategori, beslutsområden, konfidens
  normalize.ts                  Org.nr-normalisering, dedup, råpost → domänobjekt
  csv.ts                        CSV-parser/-serialiserare (utan beroenden)
  pipeline.ts                   Kör källor → normalisera → klassificera → filtrera
  export.ts                     Export till CSV/JSON
  cli.ts                        Kommandoradsgränssnitt
  sources/
    source.ts                   ProspectSource-gränssnitt
    csv-source.ts               CSV-adapter (fungerar direkt)
    commercial-api-source.ts    Mall för kommersiell data-API (kräver konfig)
```

Lägg till en ny källa genom att implementera `ProspectSource` och returnera
`RawRecord[]` – resten av pipelinen är oförändrad.

## Utveckling

```bash
npm test         # kör enhetstester (node:test)
npm run typecheck
```
