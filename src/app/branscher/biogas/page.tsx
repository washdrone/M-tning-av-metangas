import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/branscher/biogas",
  "title": "Läcksökning av metan vid biogasanläggningar",
  "description": "Undersök metanläckor vid biogasanläggningar och få underlag för kontroll, åtgärder och uppföljning. Kontakta EcoDrone om ett anpassat mätupplägg.",
  "intro": "Misstänker ni metanläckor vid rötkammare, gaslager eller uppgradering? EcoDrone undersöker anläggningen med ett anpassat mätupplägg och redovisar var förhöjda halter har upptäckts. Resultatet ger er underlag för vidare kontroll, åtgärder och uppföljande mätning.",
  "sections": [
    {
      "heading": "Ge driftteamet ett tydligt nästa steg",
      "paragraphs": [
        "Utgå från anläggningsdelarna där en läcka misstänks och vad personalen behöver för att kontrollera den. Drönarmätning kan ge överblick, men komponentnära undersökning kan krävas för att bekräfta en läckpunkt."
      ],
      "items": [
        "Rötkammare och anslutande utrustning.",
        "Gaslager och ledningsstråk.",
        "Uppgradering och andra överenskomna processdelar.",
        "Områden där driftteamet observerat avvikelser."
      ]
    },
    {
      "heading": "Från observation till uppföljning",
      "paragraphs": [
        "Mätplanen ska skilja mellan att hitta förhöjda halter, bekräfta en komponentläcka och beräkna läckans storlek. OGI (Optical Gas Imaging) och TDLAS kan ha olika roller beroende på utrustning och mätförhållanden.",
        "En observationslista och karta ger er ett underlag att arbeta vidare med. Ansvar för komponentkontroll, reparation och eventuell uppföljningsmätning behöver vara tydligt i beställningen. En inspektion innebär inte att reparation ingår."
      ]
    },
    {
      "heading": "Hur bedöms den ekonomiska betydelsen?",
      "paragraphs": [
        "En uppmätt halt är inte ett mått på förlorad produktion. En ekonomisk bedömning behöver en underbyggd läckmängd, relevant tidsperiod, gasens sammansättning och anläggningens egna pris- och driftuppgifter.",
        "All gas som läcker kan inte automatiskt återvinnas och säljas. Åtgärdens kostnad och genomförbarhet behöver ingå. Därför finns ingen generell besparing eller återbetalningstid som gäller för alla anläggningar."
      ]
    },
    {
      "heading": "Förbered plats och säkerhet",
      "paragraphs": [
        "Beskriv tillgänglighet, säkerhetszoner, aktuellt driftläge och pågående arbeten. Behov av avspärrning, samordning eller driftanpassning måste bedömas för platsen; mätning utan driftstopp kan inte lovas generellt."
      ],
      "items": [
        "Plats och vilka anläggningsdelar ni vill undersöka.",
        "Kända läckor, tidigare resultat och genomförda åtgärder.",
        "Önskad tidsram och tillgänglig kontaktperson på plats.",
        "Om ni behöver lokalisering, kvantifiering eller jämförelse över tid."
      ]
    },
    {
      "heading": "Planera återbesök så att resultaten går att jämföra",
      "paragraphs": [
        "Vid uppföljning behöver drift, väder, täckning och metod dokumenteras. Ett lägre mätvärde vid ett senare besök behöver tolkas tillsammans med dessa förhållanden innan slutsatsen kan dras att läckan har minskat. Bestäm redan från början vilka punkter som ska kontrolleras igen."
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
      "href": "/tjanster/ldar-inspektion",
      "title": "LDAR och läcksökning",
      "description": "Avgränsa inspektion, reparation och uppföljning."
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
    }
  ],
  "service": true,
  "interest": "biogas",
  "cta": "Begär upplägg för läcksökning",
  "faq": [
    {
      "question": "Undersöks alla komponenter?",
      "answer": "Omfattningen behöver avtalas. Åtkomst och säkerhet kan begränsa vad som går att undersöka med drönare."
    },
    {
      "question": "Vem reparerar en upptäckt läcka?",
      "answer": "Ansvar och genomförande av reparation behöver avtalas separat från mätningen. Driftteamet kan använda observationslistan för fortsatt hantering."
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
