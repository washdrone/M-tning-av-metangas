import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/tjanster/ldar-inspektion",
  "title": "LDAR-inspektion och drönarbaserad läcksökning",
  "description": "Planera läcksökning med tydlig omfattning, dokumentation och uppföljning. Ange om inspektionen ska ingå i ett LDAR-program med särskilda metodkrav.",
  "intro": "Hitta misstänkta gasläckor och ge driftteamet underlag för fortsatt kontroll. EcoDrone erbjuder drönarbaserad inspektion där metod och omfattning anpassas efter anläggningen. Ange om arbetet ska stödja ett föreskrivet LDAR-program redan vid förfrågan.",
  "sections": [
    {
      "heading": "Vad betyder LDAR?",
      "paragraphs": [
        "LDAR står för Leak Detection and Repair: att upptäcka läckor och hantera reparation samt uppföljning. En mätinspektion är en del av arbetet; en komplett LDAR-process omfattar fler ansvar och aktiviteter.",
        "Bestäm om uppdraget gäller screening av ett område, kontroll av namngivna komponenter eller uppföljning av tidigare fynd. Det gör leveransen lättare att använda i driftarbetet."
      ]
    },
    {
      "heading": "Vad kan drönaren bidra med?",
      "paragraphs": [
        "En drönare kan ge överblick och möjlighet att undersöka vissa svårtillgängliga delar. Metodens lämplighet beror på gas, sensor, mätavstånd, väder och anläggningens säkerhetsförutsättningar.",
        "OGI (Optical Gas Imaging) kan visualisera gas under lämpliga förhållanden. TDLAS använder laserspektroskopi. Ingen av beteckningarna är i sig ett löfte om kvantifiering, full täckning eller regeluppfyllelse."
      ]
    },
    {
      "heading": "Screening eller föreskriven inspektion?",
      "paragraphs": [
        "Om resultatet ska ingå i ett kontrollprogram behöver instrumentets förmåga och uppdragets genomförande bedömas mot kraven. För EU:s metanförordning är artikel 14 och bilaga I relevanta vid kontroll av olje- och fossilgaskomponenter. Intervall och metodvillkor är inte identiska för alla komponenter.",
        "Drönarmätning kan behöva kompletteras från marken. Ange vilka komponenter som ska kontrolleras och hur sådant som inte går att inspektera ska dokumenteras."
      ]
    },
    {
      "heading": "Från fynd till uppföljning",
      "paragraphs": [
        "Begär en observationslista som kopplar fynd till plats och underlag. Den bör skilja mellan misstänkt läcka, bekräftad läckpunkt och eventuell beräknad läckmängd. För vidare arbete behövs tydlig ansvarsfördelning."
      ],
      "items": [
        "Observation och identifiering av plats.",
        "Kompletterande kontroll där det behövs.",
        "Överlämning till ansvarig för reparation.",
        "Överenskommen uppföljning med jämförbar dokumentation."
      ]
    },
    {
      "heading": "Vad behöver ni lämna inför offert?",
      "paragraphs": [
        "Beskriv anläggningen, komponentantal eller område, gaser, kända läckor, åtkomst och önskad tidsram. Ange också kontrollprogram eller myndighetskrav om sådana ska styra uppdraget. Ni behöver inte själva välja sensor innan kontakt."
      ]
    }
  ],
  "related": [
    {
      "href": "/compliance/eu-metanforordning",
      "title": "EU:s metanförordning",
      "description": "Kontrollera tillämpning och metodkrav inför ett LDAR-uppdrag."
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
      "href": "/tjanster/metanmatning",
      "title": "Metanmätning med drönare",
      "description": "Kartlägg metan och planera vidare kontroll."
    }
  ],
  "sources": [
    {
      "href": "https://eur-lex.europa.eu/eli/reg/2024/1787/oj/eng",
      "title": "Förordning (EU) 2024/1787 – särskilt artikel 1, artikel 14 och bilaga I"
    }
  ],
  "service": true,
  "interest": "ldar",
  "cta": "Begär upplägg för läcksökning"
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
