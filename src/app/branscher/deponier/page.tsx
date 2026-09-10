import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/branscher/deponier",
  "title": "Metanmätning på deponier med drönare",
  "description": "Kartlägg förhöjda metanhalter på deponier. Få kartor och rapport för kontroll och uppföljning. Beskriv er anläggning för ett anpassat mätupplägg.",
  "intro": "Få en bild av var metanhalterna är förhöjda över deponin. EcoDrone kartlägger området med drönare och redovisar resultat i kartor och rapport. Upplägget anpassas efter om ni vill undersöka misstänkta läckor, följa upp åtgärder eller ta fram underlag för fortsatt utsläppsbedömning.",
  "sections": [
    {
      "heading": "Välj områden för närmare kontroll",
      "paragraphs": [
        "Kartläggningen kan ge miljö- och driftansvariga underlag för att prioritera kontroll av täckning, brunnar och gasinsamling. Koppla observationerna till anläggningens karta och aktuella driftläge. Förhöjd koncentration visar inte ensam vilken konstruktion som orsakar utsläppet."
      ],
      "items": [
        "Undersök områden med misstänkt gasläckage.",
        "Dokumentera ett mättillfälle före en planerad åtgärd.",
        "Följ upp förändringar i täckning eller gasinsamling.",
        "Identifiera var kompletterande kontroll behövs."
      ]
    },
    {
      "heading": "Vad ska kartan och rapporten visa?",
      "paragraphs": [
        "Begär en karta med mätområde, mätstråk, parameter och enhet. Observationer bör kunna kopplas till en kontrollista med läge och föreslaget nästa undersökningssteg. Rapporten behöver också visa datum, vindförhållanden och vilka delar som inte kunde mätas.",
        "Om syftet är att uppskatta ett totalutsläpp krävs ett separat kvantifieringsupplägg. En karta över koncentration kan inte ensam användas som karta över ytflöde eller som årsutsläpp."
      ]
    },
    {
      "heading": "Förbered underlaget inför offert",
      "paragraphs": [
        "Beskriv deponins yta, terräng och vilka delar som är aktiva eller sluttäckta. Bifoga eller erbjud en anläggningskarta i den fortsatta kontakten. Uppgifter om brunnar, gasuttag, kända problemområden och planerade arbeten hjälper till att avgränsa uppdraget."
      ],
      "items": [
        "Anläggningens plats och ungefärliga yta.",
        "Vad ni vill undersöka och vilket beslut resultatet ska stödja.",
        "Aktuellt driftläge, gasinsamling och kända avvikelser.",
        "Tillståndsvillkor eller kontrollprogram som leveransen ska förhålla sig till."
      ]
    },
    {
      "heading": "Mätunderlag för tillsyn och uppföljning",
      "paragraphs": [
        "Utgå från anläggningens tillstånd och kontrollprogram när rapportens innehåll bestäms. Mätunderlag är en del av dokumentationen; det innebär inte automatiskt att en komplett miljörapport eller myndighetsgodkännande ingår.",
        "Vid återbesök behöver skillnader i väder, drift och mätområde redovisas. Det gör det lättare att bedöma om en skillnad kan knytas till en åtgärd eller om fler mättillfällen behövs."
      ]
    }
  ],
  "related": [
    {
      "href": "/tjanster/metanmatning",
      "title": "Metanmätning med drönare",
      "description": "Kartlägg metan och planera vidare kontroll."
    },
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
      "href": "/case",
      "title": "Illustrativa exempeluppdrag",
      "description": "Se hur en deponifråga kan avgränsas."
    }
  ],
  "service": true,
  "interest": "deponi",
  "cta": "Begär mätupplägg för er deponi",
  "faq": [
    {
      "question": "Kan hela deponin undersökas?",
      "answer": "Mätområdet bestäms utifrån yta, terräng, åtkomst och flygförutsättningar. Begränsningar ska framgå av mätplanen."
    },
    {
      "question": "Kan resultaten användas i miljörapporten?",
      "answer": "Det beror på vilka uppgifter ni ska redovisa och hur mätningen är genomförd. Ange tillståndsvillkor och önskat rapporteringsändamål före beställning."
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
