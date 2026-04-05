# EcoDrone Sverige AB – Webbplats

## Grundregel: Aldrig gissa eller anta

**All fakta som anges på webbplatsen ska vara verifierbar från säkra källor.** Gissa aldrig om:

- Utrustning (drönare, sensorer, kameror) – ange aldrig specifika märken, modeller eller tekniska specifikationer om de inte är bekräftade av företaget
- Certifieringar och tillstånd – ange aldrig specifika certifieringsnivåer (A2, STS etc.) om de inte är bekräftade
- Kundnamn och referensprojekt – nämn aldrig specifika företagsnamn utan uttryckligt godkännande
- Kapacitet och leveranstider – ange aldrig specifika siffror (hektar/dag, antal dagar) om de inte är bekräftade
- Försäkringar och ackrediteringar – gör inga påståenden utan bekräftelse

Om du inte kan verifiera en uppgift: fråga användaren istället för att gissa.

## Teknik

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Struktur

- `src/app/` – sidorna (Next.js App Router)
- `src/components/` – delade komponenter
- `src/content-config.ts` – content-taxonomi, topic clusters, kvalitetsregler och intern länkningslogik

## Contentregler

Följ alltid `src/content-config.ts` vid skapande av nytt innehåll. Nyckelregler:

1. **Sidtyper**: money-page, compliance-page, industry-page, authority-article, methodology-page, glossary-term, hub-page, company-page
2. **Minimilängd**: Se `contentRules.minimumWordCount` per sidtyp
3. **AEO-struktur**: H2 som frågor, bold first-sentence, definition-first-öppningar
4. **Förbjudet**: thin content, generiska öppningar, duplicering, svaga ankartexter
5. **Entity-disciplin**: "EcoDrone" i löptext, "EcoDrone Sverige AB" i schema/juridisk kontext
6. **Schema**: Alla `areaServed` ska använda `name: 'Sweden'`. Author-typ ska vara `Organization` (inte Person) för redaktionellt innehåll.
7. **Intern länkning**: Använd `RelatedContent`-komponenten. Hämta relationer från `content-config.ts`.
8. **Bloggregler**: Inga blogginlägg som duplicerar compliance- eller tjänstesidor. Varje artikel ska ha unikt djup och perspektiv.
