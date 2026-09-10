import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/tjanster/plymmating",
  "title": "Plymmätning och beräkning av utsläppsflöde",
  "description": "Förstå hur koncentrations- och vinddata kan användas för att beräkna utsläpp i kg/h. Se förutsättningar, osäkerhet och underlag inför plymmätning.",
  "intro": "Behöver ni undersöka ett utsläppsflöde från en anläggning? Plymmätning kombinerar mätningar i en utsläppsplym med vinddata och en dokumenterad beräkning. Mätupplägget behöver bedömas mot platsens och driftens förutsättningar.",
  "sections": [
    {
      "heading": "Från koncentration till kg/h",
      "paragraphs": [
        "Massbalans utgår från gas som passerar en mätsektion. Koncentration, bakgrund och lufttransport behöver beskrivas tillsammans. Sensorns råvärde är därför inte samma sak som det beräknade utsläppsflödet."
      ]
    },
    {
      "heading": "Vad avgör om metoden fungerar på platsen?",
      "paragraphs": [
        "Vindens riktning och variation, plymens utbredning, terräng och andra utsläppskällor påverkar beräkningen. Den relevanta plymen måste kunna fångas med tillräcklig täckning. En otillräckligt täckt mätsektion kan inte utan vidare behandlas som anläggningens totalutsläpp."
      ],
      "items": [
        "Identifierad frågeställning och avgränsning av källa.",
        "Mätning av bakgrund och dokumenterad vind.",
        "Lämplig placering och täckning av mätsektion.",
        "Driftuppgifter och hantering av andra möjliga källor."
      ]
    },
    {
      "heading": "Vad behöver rapporten innehålla?",
      "paragraphs": [
        "Begär separat redovisning av indata, beräkning och resultat. Enheten kg/h behöver följas av mättillfälle, avgränsning och osäkerhet. Dokumentera även mätningar som inte kan användas och varför de har uteslutits."
      ]
    },
    {
      "heading": "Kan kg/h räknas om till årsutsläpp?",
      "paragraphs": [
        "En enkel multiplikation med årets timmar visar inte automatiskt verkliga årsutsläpp. Drift, utsläpp och väder kan variera. En årsbedömning behöver ett representativt underlag och redovisade antaganden om tiden mellan mätningarna."
      ]
    },
    {
      "heading": "När är återkommande mätning relevant?",
      "paragraphs": [
        "Flera mättillfällen kan behövas för att undersöka variation eller följa upp en åtgärd. Ange om ni behöver en avgränsad ögonblicksbild, en jämförelse mellan driftlägen eller stöd för en längre rapporteringsperiod."
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
      "href": "/tjanster/metanmatning",
      "title": "Metanmätning med drönare",
      "description": "Kartlägg metan och planera vidare kontroll."
    },
    {
      "href": "/compliance/csrd",
      "title": "CSRD och Scope 1",
      "description": "När mätdata kan komplettera klimatrapporteringen."
    }
  ],
  "service": true,
  "interest": "metan"
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
