import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/tjanster/metodik",
  "title": "Metodik, mätresultat och kvalitetssäkring",
  "description": "Förstå detektion, koncentration och utsläppsflöde. Se vilket metodunderlag, vilka enheter och vilka begränsningar som behövs för ett mätuppdrag.",
  "intro": "Rätt mätmetod utgår från frågan ni behöver besvara. Här förklarar vi skillnaden mellan att hitta metan, mäta koncentration och beräkna utsläpp – och vilket kvalitetsunderlag ni bör efterfråga inför beställning.",
  "sections": [
    {
      "heading": "Tre resultatnivåer som behöver hållas isär",
      "paragraphs": [
        "Metoderna ger olika slags information. Drönaren är en bärare av utrustning; den avgör inte i sig mätresultatets noggrannhet eller lämplighet."
      ],
      "items": [
        "Detektion: en observation av gas eller förhöjt utslag inom metodens förutsättningar.",
        "Koncentration: gasens andel i luft, exempelvis ppm, eller ett strålintegrerat mätvärde beroende på instrument.",
        "Utsläppsflöde: en beräknad massmängd per tid, exempelvis kg/h, med dokumenterade indata.",
        "Årsutsläpp: en bedömning över tid som också kräver information om drift och representativitet."
      ]
    },
    {
      "heading": "Vilka metoder kan ingå?",
      "paragraphs": [
        "TDLAS använder laserspektroskopi för gasdetektion. En OGI-kamera visualiserar gas med infraröd teknik under lämpliga betingelser. Bildmaterial är inte i sig en kvantifiering av massflöde.",
        "Plymmätning med massbalans kombinerar koncentrations- och vinddata över en mätsektion. Resultatet beror på hur plymen fångas, hur bakgrunden hanteras och hur vädret varierar. Val av sensor och beräkningsmetod behöver göras för det aktuella uppdraget."
      ]
    },
    {
      "heading": "Vad ska framgå i ett metodunderlag?",
      "paragraphs": [
        "Be om uppgifter som gör leveransen bedömbar före beställning. En hänvisning till en standard eller ett ramverk är inte ett certifikat eller bevis på ackreditering."
      ],
      "items": [
        "Instrumentmodell, mätprincip, gas och redovisad enhet.",
        "Relevanta detektionsgränser och de förhållanden som gränserna gäller under.",
        "Kalibrerings- och funktionskontroller samt tillgängliga underlag.",
        "Beräkningsmetod, bakgrundskorrigering, vinddata och hantering av osäkerhet.",
        "Ansvar för mätning, analys och kvalitetsgranskning.",
        "Mätområde, undantagna delar och avtalad leverans."
      ]
    },
    {
      "heading": "Planera, samla in och tolka",
      "paragraphs": [
        "Börja med syfte och avgränsning. Planera sedan åtkomst och mätförhållanden. Vid datainsamlingen behöver mätvärden kunna kopplas till tid, plats och drift. Bearbetningen ska gå att följa från indata till slutsats.",
        "För jämförelser över tid behöver skillnader i drift, metod och väder redovisas. Om förutsättningarna inte medger ett tillförlitligt svar behöver mätupplägget ändras eller kompletteras."
      ]
    },
    {
      "heading": "När kan resultatet användas i rapportering?",
      "paragraphs": [
        "Rapporteringskrav och mätförmåga måste bedömas tillsammans. Ett instrument är inte generellt godkänt för alla LDAR-program, och en mätning innebär inte automatiskt att CSRD eller OGMP 2.0 är uppfyllt. Ange det konkreta kravet och överenskom ansvar innan arbetet beställs."
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
      "href": "/tjanster/metanmatning",
      "title": "Metanmätning med drönare",
      "description": "Kartlägg metan och planera vidare kontroll."
    },
    {
      "href": "/compliance/eu-metanforordning",
      "title": "EU:s metanförordning",
      "description": "Kontrollera tillämpning och metodkrav inför ett LDAR-uppdrag."
    },
    {
      "href": "/compliance/csrd",
      "title": "CSRD och Scope 1",
      "description": "När mätdata kan komplettera klimatrapporteringen."
    }
  ],
  "sources": [
    {
      "href": "https://eur-lex.europa.eu/eli/reg/2024/1787/oj/eng",
      "title": "Förordning (EU) 2024/1787 – särskilt artikel 1, artikel 14 och bilaga I"
    },
    {
      "href": "https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/ESRS%20E1%20Delegated-act-2023-5303-annex-1_en.pdf",
      "title": "ESRS E1 – klimatrapportering, bland annat AR 39 och AR 43 (PDF)"
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
