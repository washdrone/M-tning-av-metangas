# Genomförande av webbgranskningen

Arbetsunderlag för projektet, inte kundtext. Datum: 2026-09-10.

## Status per åtgärd i rapporten

| Rapportens åtgärd | Genomfört i denna gren | Kvarstående beroende |
| --- | --- | --- |
| CSRD och schabloner | Ny avgränsad CSRD-sida, källor, korrigerad regelverksöversikt och tre reviderade artiklar | Bekräfta svensk tillämpning för kundens rapporteringsår med sakkunnig. Ingen kundspecifik juridisk bedömning utförd. |
| LDAR och EU-metanförordningen | Generella intervall och påståenden om automatiskt godkända instrument ersatta med metod- och uppdragsspecifika villkor | Verifiera instrument och eventuella myndighetsgodkännanden. |
| Metodik och resultatnivåer | Detektion, koncentration, kg/h och årsutsläpp särskilda; konkret beställarchecklista | Instrumentmodell, kalibreringsunderlag, validering, detektionsgränser, ansvarig specialist. |
| Referensetikett | Exempeluppdrag används konsekvent i navigation och exempel skiljs från kundreferenser | Verkliga kundcase och publiceringstillstånd. |
| Leveranser | Rapportstruktur och läsanvisning som uttryckligen inte visar riktiga kundresultat | Verklig kommenterad karta och rapportutdrag. Inga mätvärden eller kundbilder har fabricerats. |
| Företagsidentitet | Schema använder synliga varumärket EcoDrone; obekräftat juridiskt namn borttaget | Juridiskt namn, organisationsnummer, adress och kontaktansvarig. Integritetspolicyn behöver samma identitet. |
| Fyra köpsidor | Startsida, metanmätning, deponi och biogas omarbetade med erbjudande, CTA, leverans och frågor | Bekräfta aktuell tjänstekapacitet och kommersiell prioritering. |
| Kontaktflöde | Hjälp med metodval, förval från köpsidor, native validering, servervalidering, tydliga fel och fokus, dubbelklicksskydd | Produktionsmottagning och svarstid. E-postleverantörens accept är inte bevis på mottagning i inkorgen. |
| Internlänkar och ämnesroller | Kunskapsbank, metodik och leverans länkade globalt; tydligare roller för köpsidor och stödartiklar | Följ verkliga sökfrågor innan eventuella sammanslagningar. |
| Mätning och indexering | Opt-in för GA4, generate_lead först efter accepterat utskick; SEO-kontroll utökad med internlänkar och JSON-LD | Search Console, GA4, CRM; fältdata och faktisk indexering/AI-synlighet. |
| Mobil och tillgänglighet | Fokusmarkering, hopplänk, menyns höjd/fokus/escape, naturliga FAQ-kontroller utan JS och minskad rörelse | Visuell mobilkontroll och fältprestanda behöver verifieras i tillgänglig webbläsare/enhet. |
| Återkommande uppföljning | Beställarstöd om jämförbarhet, drift och återbesök | Pris, kapacitet och villkor för återkommande paket. |

## Ytterligare fel som koden visade

- Formuläret hade `noValidate` men kontrollerade varken korrekt e-postformat eller den obligatoriska kryssrutan i klientens egen kontroll. Nu används webbläsarens validering och servern kontrollerar fält och samtycke.
- GA4 laddades direkt trots text om samtycke i integritetspolicyn. Nu laddas det bara vid aktivt tillåtande. Återkallat val stänger av GA och tar bort åtkomliga GA-cookies.
- Servern kunde ta emot felaktiga fälttyper och lämnade leverantörens felmeddelande till besökaren. Typer och längder valideras, och publika fel är generella.
- FAQ-kontroller har ersatts med native details/summary så att svar är åtkomliga också utan JavaScript.

## Drift och uppföljning efter publicering

1. Kontrollera `RESEND_API_KEY`, verifierad avsändardomän, `FROM_EMAIL` och `CONTACT_EMAIL` i driftsmiljön. Inga hemligheter ska läggas i GitHub eller chatten.
2. Genomför ett avtalat test med identifierbart testärende och kontrollera mottagarens inkorg. Inga sådana prov har skickats i detta arbete.
3. I GA4: använd `generate_lead` som nyckelhändelse. Undvik att samtidigt räkna automatiskt `form_submit` som affärsresultat. Kontrollera enhanced measurement/historikspårning så att sidvisningar inte dubbelräknas när anpassad SPA-spårning används.
4. Jämför besök med samtycke, accepterade e-postutskick, faktiskt mottagna ärenden och kvalificerade ärenden separat. Samtyckesbaserad analys visar inte alla besök eller ärenden.
5. I Search Console: kontrollera sitemap, relevanta URL:er och verkliga sökfrågor. Indexeringsmöjlighet i byggtest är inte bekräftad Google-indexering. Sätt inga tillväxtmål utan baslinje.
6. Koppla manuellt/CRM: datum, källa, bransch, behov, offert, vunnet/förlorat och orsak. Lägg inte kunduppgifter i GA-händelser.

## Underlag som Johan behöver bekräfta

- Vilket bolag driver EcoDrone och vem är ansvarig kontaktperson?
- Vilka av webbplatsens gaser, metoder och leveranser kan faktiskt levereras idag, i egen regi respektive via partner?
- Vilka instrument, metodvalideringar och kompetensbevis får publiceras?
- Finns godkänd exempelrapport, karta, arbetsbilder och verkligt kundcase?
- Vilka svarstider, prisdrivare, vädervillkor och uppföljningsupplägg gäller?
- Vilka faktiska lagringstider, personuppgiftsbiträden och tredjelandsöverföringar gäller? Policyns administrativa uppgifter måste stämmas av mot verklig hantering.

Övriga tjänstesidors detaljerade sensor- och leveranspåståenden behöver samma verksamhetsunderlag. Riktade rättningar är gjorda, men det är inte en verifiering av hela tjänstekapaciteten.

## Källor till centrala rättningar

- EU-rådet, CSRD-ändringar, 24 februari 2026: https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/
- ESRS E1, AR 39/43: https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/ESRS%20E1%20Delegated-act-2023-5303-annex-1_en.pdf
- Förordning EU 2024/1787: https://eur-lex.europa.eu/eli/reg/2024/1787/oj/eng (läst i ursprungsgranskningen; omhämtning 10 september mötte robotkontroll).
- Google, strukturerad data: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google, samtycke: https://developers.google.com/tag-platform/security/guides/consent

## Kontroller

- `npm test`: 21 tester: 15 av serverfunktionen och 6 komponenttester av samtycke, sidvisningar, metodförval och lead-händelser. E-postleverantör och analysinläsning är mockade; detta är inte ett riktigt webbläsar- eller mottagningstest. Ingen riktig e-post skickas.
- `npm run build`: produktionsbygge med typkontroll och lint.
- `npm run seo:audit`: kör mot lokalt produktionsbygge; HTTP, sitemap, canonical, robots, metadata, H1, JSON-LD och interna länkmål.

Resultat av sista körningen redovisas i pull request. Inga uppgifter om faktisk ranking, konvertering eller Core Web Vitals har mätts.
