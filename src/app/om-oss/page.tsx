import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/om-oss",
  "title": "Om EcoDrone – drönarbaserad utsläppsmätning",
  "description": "EcoDrone erbjuder drönarbaserad utsläppsmätning för anläggningar och industri i Sverige. Läs om inriktningen och kontakta oss om ert mätbehov.",
  "intro": "EcoDrone erbjuder drönarbaserad utsläppsmätning för anläggningar och industri i Sverige. Målet är att göra mätresultaten användbara för kontroll, åtgärdsplanering och uppföljning.",
  "sections": [
    {
      "heading": "Vilka behov arbetar vi med?",
      "paragraphs": [
        "Vi riktar oss till driftansvariga, miljöansvariga och andra beställare som behöver undersöka gasutsläpp eller förbättra sitt mätunderlag. Webbplatsen beskriver tillämpningar för deponier, biogas, reningsverk, olja och gas, gruvor och hamnar.",
        "Behovet avgör uppdragets avgränsning. Att hitta en misstänkt läcka, beräkna utsläppsflöde och ta fram en årsrapport är olika uppgifter."
      ]
    },
    {
      "heading": "Så börjar ett uppdrag",
      "paragraphs": [
        "Beskriv anläggningen och vilket beslut mätningen ska stödja. Metod, omfattning, förutsättningar och leverans behöver därefter stämmas av. Ni behöver inte känna till sensorbeteckningar för att kontakta oss.",
        "Begär ett tydligt förslag där utrustningens relevanta egenskaper, kvalitetsunderlag och ansvarsfördelning framgår. Om ni har särskilda krav på kompetens eller dokumentation, ta med dem redan i förfrågan."
      ]
    },
    {
      "heading": "Verksamhetsområde och kontakt",
      "paragraphs": [
        "Vi tar emot förfrågningar om uppdrag i hela Sverige och har vår utgångspunkt i Göteborg/Västra Götaland. Plats, åtkomst och önskad tidsram behöver ingå när uppdraget planeras.",
        "Kontakta EcoDrone på info@ecodrone.se eller använd kontaktformuläret. Beskriv gärna vilken anläggning det gäller och vilken fråga ni behöver få svar på."
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
      "href": "/kontakt",
      "title": "Kontakta EcoDrone",
      "description": "Beskriv behovet och få hjälp att avgränsa mätningen."
    },
    {
      "href": "/branscher",
      "title": "Branscher",
      "description": "Tillämpningar för olika anläggningar."
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
