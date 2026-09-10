import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/tjanster/leveranser",
  "title": "Mätrapport, kartor och underlag för åtgärder",
  "description": "Se vad en leverans från drönarbaserad metanmätning kan innehålla: rapport, karta, observationslista och digitala data. Bestäm omfattningen i offerten.",
  "intro": "En användbar leverans ska hjälpa er att fatta nästa beslut. Bestäm om ni behöver en karta för driftteamet, en observationslista för fortsatt kontroll eller ett mätunderlag för rapportering. Format och omfattning fastställs i mätupplägget.",
  "sections": [
    {
      "heading": "Vad kan leveransen innehålla?",
      "paragraphs": [
        "Välj innehåll efter vem som ska använda det. En sammanfattning för beslutsfattare och ett tekniskt underlag för miljöansvariga fyller olika uppgifter."
      ],
      "items": [
        "Rapport: frågeställning, omfattning, metod, observationer, begränsningar och slutsatser.",
        "Karta: mätstråk och observationer med parameter, enhet, tid och plats.",
        "Resultatlista: identifierade områden eller punkter för vidare kontroll.",
        "Digitala data: överenskommet tabell- eller kartformat för era system."
      ]
    },
    {
      "heading": "Så läser ni ett mätunderlag",
      "paragraphs": [
        "Börja med vad som faktiskt har mätts. Kontrollera därefter vad som är beräknat och vilka slutsatser som dras. Håll råa observationer, analyser och förslag till fortsatt arbete åtskilda.",
        "Nedan visas en läsanvisning för rapportens delar. Den illustrerar struktur och innehåll, inte ett genomfört kunduppdrag eller uppmätta resultat."
      ],
      "items": [
        "Mätområde och datum → visar var och när underlaget gäller.",
        "Parameter och enhet → skiljer koncentration från beräknat flöde.",
        "Karta och observations-ID → gör fynd möjliga att lokalisera vid vidare kontroll.",
        "Mätförhållanden → visar exempelvis driftläge och väder.",
        "Beräkningar och osäkerheter → förklarar resultatets begränsningar.",
        "Nästa undersökningssteg → skiljer observation från bekräftad orsak."
      ]
    },
    {
      "heading": "Behöver ni kg/h eller årsutsläpp?",
      "paragraphs": [
        "Kvantifiering ska anges uttryckligen i beställningen. En koncentrationskarta ger inte automatiskt utsläppsflöde. En emissionsberäkning behöver redovisa indata, antaganden och osäkerhet.",
        "För årsutsläpp behövs också en bedömning av hur mättillfällena representerar anläggningens drift över året. Årsrapportering och inrapportering ingår endast om det uttryckligen avtalas."
      ]
    },
    {
      "heading": "Digitala format och överlämning",
      "paragraphs": [
        "Ange vilka program eller kartverktyg som ska ta emot materialet. Begär vid behov CSV för tabeller eller GeoJSON för kartdata. Koordinatsystem, fältnamn, enheter och hantering av saknade data behöver definieras tillsammans med formatet.",
        "Om flera personer ska använda leveransen: ange vem som behöver en översikt, teknisk dokumentation respektive underlag för åtgärdsplanering."
      ]
    },
    {
      "heading": "Planera uppföljning och sekretess",
      "paragraphs": [
        "För återkommande kontroll behövs gemensamma observations-ID:n, versionshantering och dokumentation av ändrad drift. Bestäm vilka delar som ska jämföras och när ett nytt mättillfälle är relevant.",
        "Avtala om hantering av rådata, åtkomst, lagringstid och sekretess för anläggningsuppgifter. Skicka inte känsligt kartmaterial i det första kontaktformuläret; beskriv behovet så kan överföringssätt bestämmas."
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
      "href": "/case",
      "title": "Exempeluppdrag",
      "description": "Illustrativa tillämpningar för deponi och biogas."
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
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
