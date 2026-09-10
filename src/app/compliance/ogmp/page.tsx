import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/compliance/ogmp",
  "title": "OGMP 2.0 – avgränsa underlaget för metanrapportering",
  "description": "Planera mätunderlag för OGMP 2.0 med tydlig omfattning, dokumenterade metoder och ansvar för rapportering. Diskutera datakraven med EcoDrone.",
  "intro": "Ska mätningen stödja er rapportering enligt OGMP 2.0? Ange vilka källor, rapporteringsnivåer och jämförelser underlaget ska omfatta. En sensortyp eller en enstaka mätning är inte i sig bevis på att rapporteringsramverket är uppfyllt.",
  "sections": [
    {
      "heading": "Utgå från ert rapporteringsupplägg",
      "paragraphs": [
        "OGMP 2.0 är ett ramverk för metanrapportering i olje- och gassektorn. Den som ansvarar för rapporteringen behöver precisera vilket underlag som efterfrågas för den aktuella anläggningen och perioden.",
        "Fastställ vilka utsläppskällor som ingår och hur mätresultat ska kombineras med övriga data. Hänvisningar till nivå 4 eller 5 behöver följas av konkreta krav på mätning, beräkning och jämförelse."
      ]
    },
    {
      "heading": "Skilj komponentdata från anläggningsmätning",
      "paragraphs": [
        "En komponentnära undersökning och en mätning över en större anläggningsdel har olika avgränsningar. För att jämföra resultat behöver tidsperiod, driftläge och omfattning vara förenliga. Avvikelser behöver utredas; resultaten ska inte bara summeras eller jämföras utan hänsyn till förutsättningarna."
      ]
    },
    {
      "heading": "Vad behöver framgå i beställningen?",
      "paragraphs": [
        "Beskriv vilken del av rapporteringsarbetet uppdraget ska stödja. Det gör det möjligt att avgöra om en drönarbaserad metod är lämplig eller om kompletterande underlag behövs."
      ],
      "items": [
        "Källor, anläggningsgräns och rapporteringsperiod.",
        "Önskad parameter, enhet och resultatnivå.",
        "Metod, mätförhållanden och osäkerhetsredovisning.",
        "Ansvar för sammanställning, jämförelse och slutlig rapportering."
      ]
    },
    {
      "heading": "Vilken roll har EcoDrones mätunderlag?",
      "paragraphs": [
        "Drönarbaserad kartläggning eller plymmätning kan undersökas som en del av ett avgränsat upplägg. Faktisk metodförmåga och rapportens innehåll behöver stämmas av mot datakraven före beställning. En mätleverans ska inte beskrivas som en generell OGMP-certifiering."
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
      "href": "/tjanster/plymmating",
      "title": "Plymmätning",
      "description": "Förutsättningar för beräkning av utsläppsflöde."
    },
    {
      "href": "/compliance/eu-metanforordning",
      "title": "EU:s metanförordning",
      "description": "Kontrollera tillämpning och metodkrav inför ett LDAR-uppdrag."
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
