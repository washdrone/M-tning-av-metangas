import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/tjanster/metanmatning",
  "title": "Metanmätning med drönare och läcksökning",
  "description": "Hitta förhöjda metanhalter och planera rätt mätning. Läs om metod, mätförutsättningar och leveranser eller begär ett mätupplägg från EcoDrone.",
  "intro": "Hitta områden med förhöjda metanhalter och få underlag för nästa åtgärd. EcoDrone kartlägger metan med drönare för deponier, biogasanläggningar och industri. Mätupplägget anpassas efter om ni vill söka läckor, följa upp åtgärder eller undersöka utsläppsflöden.",
  "sections": [
    {
      "heading": "Vad behöver ni få svar på?",
      "paragraphs": [
        "En orienterande kartläggning och en beräkning av utsläppsmängd är olika uppdrag. Börja med det beslut ni behöver fatta, så kan mätområde och leverans avgränsas."
      ],
      "items": [
        "Lokalisera: var finns förhöjda halter som behöver kontrolleras närmare?",
        "Följa upp: har en åtgärd förändrat mätresultatet under jämförbara förhållanden?",
        "Kvantifiera: går det att beräkna ett utsläppsflöde med den valda metoden?",
        "Rapportera: vilka underlag efterfrågas av er miljöansvariga eller rapportör?"
      ]
    },
    {
      "heading": "Vad mäter sensorn – och vad beräknas?",
      "paragraphs": [
        "TDLAS betyder Tunable Diode Laser Absorption Spectroscopy och använder ljusabsorption för gasdetektion. Mätvärdets enhet beror på instrument och mätgeometri. En punktkoncentration och en koncentration integrerad längs laserstrålen ska inte tolkas som samma storhet.",
        "Ett koncentrationsvärde är inte ett utsläpp i kg/h. Kvantifiering kräver ett särskilt upplägg med exempelvis vinddata, bakgrundsmätning och en dokumenterad beräkning. Årsutsläpp kräver dessutom underlag om variation över tid och drift."
      ]
    },
    {
      "heading": "Vad får ni efter mätningen?",
      "paragraphs": [
        "Bestäm leveransen i offerten: en karta som visar var data samlats in, en lista över observationer och en rapport som förklarar metod och begränsningar. Om emissionsberäkning ingår ska den skiljas från de direkt uppmätta värdena."
      ],
      "items": [
        "Karta med parameter, enhet, datum och geografisk avgränsning.",
        "Observationslista som driftteamet kan använda för vidare kontroll.",
        "Redovisning av relevanta mätförhållanden och osäkerheter.",
        "Överenskomna digitala format för fortsatt bearbetning."
      ]
    },
    {
      "heading": "Vilka förutsättningar påverkar resultatet?",
      "paragraphs": [
        "Vind, bakgrundshalter, åtkomst, anläggningens drift och sensorns egenskaper påverkar vad mätningen kan visa. Platser som inte kan undersökas behöver framgå. Frånvaro av ett detekterat utslag bevisar inte att en anläggning är läckfri.",
        "Beskriv kända utsläppspunkter, områdets storlek, driftläge och säkerhetszoner inför planeringen. Om frågan kräver komponentnära kontroll kan markbaserad komplettering behövas."
      ]
    },
    {
      "heading": "Vad påverkar pris och planering?",
      "paragraphs": [
        "Områdets storlek, antal mätpunkter, åtkomst, resor, önskade analyser och rapportformat påverkar uppdraget. Beskriv också om ni behöver ett enstaka mättillfälle eller återkommande uppföljning. Framförhållning och villkor vid olämpligt väder behöver framgå i förslaget."
      ]
    }
  ],
  "related": [
    {
      "href": "/tjanster/leveranser",
      "title": "Rapport, karta och resultatlista",
      "description": "Välj ett underlag som fungerar för drift, uppföljning och rapportering."
    },
    {
      "href": "/tjanster/metodik",
      "title": "Metod och mätosäkerhet",
      "description": "Förstå skillnaden mellan detektion, koncentration och beräknat utsläppsflöde."
    },
    {
      "href": "/branscher/deponier",
      "title": "För deponier",
      "description": "Täckning, gasinsamling och uppföljning."
    },
    {
      "href": "/branscher/biogas",
      "title": "För biogas",
      "description": "Läcksökning och driftuppföljning."
    }
  ],
  "service": true,
  "interest": "metan",
  "faq": [
    {
      "question": "Behöver vi välja sensor innan kontakt?",
      "answer": "Nej. Beskriv vad ni vill veta och vad resultatet ska användas till. Metod och utrustning behöver väljas utifrån den frågan."
    },
    {
      "question": "Kan mätningen ge totalutsläpp?",
      "answer": "Det kräver separat kvantifiering och lämpliga mätförhållanden. Ange behovet av kg/h eller årsutsläpp redan i förfrågan; en koncentrationskarta räcker inte som sådant underlag."
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
