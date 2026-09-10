import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/compliance/eu-metanforordning",
  "title": "EU:s metanförordning och LDAR – välj rätt upplägg",
  "description": "Läs om tillämpningen av EU:s metanförordning 2024/1787 och vad som behöver kontrolleras innan drönarbaserad läcksökning används i ett LDAR-program.",
  "intro": "Ska mätningen ingå i ett lagstyrt kontrollprogram? Beskriv anläggningen, komponenterna och det konkreta kravet innan metod väljs. Drönarbaserad kartläggning och föreskriven komponentinspektion är inte automatiskt samma sak.",
  "sections": [
    {
      "heading": "Vilka verksamheter berörs?",
      "paragraphs": [
        "Förordning (EU) 2024/1787 gäller metanutsläpp inom de delar av olje-, fossilgas- och kolsektorn som anges i dess tillämpningsområde. Den är inte ett generellt LDAR-krav för alla deponier, biogasanläggningar eller gruvor.",
        "Kontrollera artikel 1 mot den egna verksamheten. En anläggning kan även omfattas av andra tillståndsvillkor och krav som behöver hanteras separat."
      ]
    },
    {
      "heading": "Hur ofta ska inspektion ske?",
      "paragraphs": [
        "Intervall och genomförandekrav behöver bestämmas utifrån relevant bestämmelse, anläggningsdel och typ av inspektion. En generell regel om kvartalsvis kontroll för alla komponenter ger inte ett tillräckligt beställningsunderlag.",
        "För olje- och fossilgaskomponenter är artikel 14 och bilaga I centrala vid planering av LDAR. Lägg till aktuella tidsfrister och ansvar i anläggningens kontrollprogram."
      ]
    },
    {
      "heading": "Är drönare, OGI eller TDLAS automatiskt godkända?",
      "paragraphs": [
        "Nej. Att utrustning kallas OGI eller TDLAS avgör inte om ett visst uppdrag uppfyller kraven. Avancerad teknik behöver uppfylla förordningens villkor och, när bestämmelsen kräver det, godkännas av behörig myndighet.",
        "Specificera detektionsförmåga, mätavstånd, täckning, mätförhållanden och dokumentation. Fastställ också om drönaren används för orienterande screening, kvantifiering eller den föreskrivna inspektionen."
      ]
    },
    {
      "heading": "Vad behöver ett uppdrag avgränsa?",
      "paragraphs": [
        "Skilj mellan att hitta en misstänkt läcka, bekräfta fyndet, kvantifiera, reparera och kontrollera efter åtgärd. Ansvar och tidplan behöver vara tydliga även när flera leverantörer medverkar."
      ],
      "items": [
        "Anläggning och komponenter som ska ingå.",
        "Relevant regel, inspektionstyp och tidsfrist.",
        "Mätmetod och dess dokumenterade förutsättningar.",
        "Hantering av otillgängliga komponenter och behov av komplettering.",
        "Rapportformat och överlämning till ansvarig operatör.",
        "Separat ansvar för reparation och uppföljning."
      ]
    }
  ],
  "related": [
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
  "sources": [
    {
      "href": "https://eur-lex.europa.eu/eli/reg/2024/1787/oj/eng",
      "title": "Förordning (EU) 2024/1787 – särskilt artikel 1, artikel 14 och bilaga I"
    }
  ],
  "interest": "ldar"
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
