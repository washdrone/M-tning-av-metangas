import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/compliance/csrd",
  "title": "CSRD, Scope 1 och underlag för klimatrapportering",
  "description": "Förstå hur mätdata kan komplettera Scope 1-rapportering. Läs om CSRD-ändringar, emissionsfaktorer och vad som behöver avgränsas före ett mätuppdrag.",
  "intro": "Behöver ni bättre underlag om anläggningens direkta växthusgasutsläpp? Börja med att fastställa rapporteringskravet och vilka utsläpp som behöver beskrivas. Mätningar kan komplettera beräkningar och driftdata när de är relevanta för frågan.",
  "sections": [
    {
      "heading": "CSRD har ändrats – kontrollera ert rapporteringsår",
      "paragraphs": [
        "EU-rådet antog den 24 februari 2026 ändringar som begränsar CSRD:s omfattning. Äldre tabeller över vilka företag som skulle börja rapportera 2025–2028 ska därför inte användas som enda beslutsunderlag.",
        "Vilka krav som gäller ert bolag behöver kontrolleras mot tillämplig svensk lagstiftning, övergångsbestämmelser, koncernförhållanden och rapporteringsår. Ta den bedömningen tillsammans med er rapporteringsansvariga eller revisor."
      ]
    },
    {
      "heading": "Måste alla utsläpp mätas direkt?",
      "paragraphs": [
        "Nej. ESRS E1 beskriver både beräknade och uppmätta utsläpp samt användning av emissionsfaktorer. Ett generellt påstående om att schabloner är förbjudna eller att alla Scope 1-utsläpp måste drönarmätas är missvisande.",
        "Metoden behöver vara lämplig för utsläppskällan och rapporteringsändamålet. Mätdata kan ge mer platsspecifik information, men ett enstaka mättillfälle är inte automatiskt representativt för ett helt år."
      ]
    },
    {
      "heading": "När tillför mätning ett användbart underlag?",
      "paragraphs": [
        "Kartläggning kan hjälpa er att undersöka misstänkta metankällor eller följa upp en förändring. Om en utsläppsmängd behövs måste mätningen också kunna stödja kvantifiering."
      ],
      "items": [
        "Undersöka var förhöjda halter finns på anläggningen.",
        "Pröva om befintliga antaganden behöver undersökas vidare.",
        "Dokumentera förhållanden före och efter en åtgärd.",
        "Komplettera beräkningar med avgränsade, platsspecifika observationer."
      ]
    },
    {
      "heading": "Avgränsa leveransen före beställning",
      "paragraphs": [
        "Ange gas, utsläppskällor, tidsperiod, önskad enhet och vad er rapportör behöver. Mätunderlag, årsberäkning, full hållbarhetsrapport och oberoende granskning är olika arbetsuppgifter. En mätleverans innebär inte i sig att hela rapporteringen uppfyller CSRD.",
        "Begär dokumentation av mätförhållanden, metod, antaganden och osäkerhet. Underlagets användning behöver stämmas av med den som ansvarar för den samlade rapporteringen."
      ]
    }
  ],
  "related": [
    {
      "href": "/tjanster/metodik",
      "title": "Metod och mätosäkerhet",
      "description": "Förstå skillnaden mellan detektion, koncentration och beräknat utsläppsflöde."
    },
    {
      "href": "/tjanster/leveranser",
      "title": "Rapport, karta och resultatlista",
      "description": "Välj ett underlag som fungerar för drift, uppföljning och rapportering."
    },
    {
      "href": "/blogg/schabloner-vs-matdata",
      "title": "Emissionsfaktorer och mätdata",
      "description": "Välj underlag efter frågan som ska besvaras."
    }
  ],
  "sources": [
    {
      "href": "https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/",
      "title": "EU-rådet: ändringar av CSRD antagna den 24 februari 2026"
    },
    {
      "href": "https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/ESRS%20E1%20Delegated-act-2023-5303-annex-1_en.pdf",
      "title": "ESRS E1 – klimatrapportering, bland annat AR 39 och AR 43 (PDF)"
    }
  ],
  "interest": "rapportering"
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
