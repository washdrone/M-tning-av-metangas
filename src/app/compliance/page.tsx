import { BuyerPage, buyerMetadata, type BuyerContent } from '@/components/BuyerPage'

const page: BuyerContent = {
  "path": "/compliance",
  "title": "Regelverk och underlag för utsläppsrapportering",
  "description": "Hitta rätt information om CSRD, EU:s metanförordning, OGMP 2.0 och miljörapportering. Avgränsa vilket mätunderlag er verksamhet behöver.",
  "intro": "Mätning och rapportering behöver utgå från den egna verksamhetens krav. Här hittar ni vägledning till olika rapporteringsändamål och frågor att stämma av innan ett mätuppdrag beställs.",
  "sections": [
    {
      "heading": "Vilket krav ska underlaget stödja?",
      "paragraphs": [
        "Håll lagkrav, frivilliga ramverk och kundens egna kontrollbehov åtskilda. Samma mätdata kan vara relevanta i flera sammanhang, men det betyder inte att en leverans automatiskt uppfyller alla krav."
      ],
      "items": [
        "CSRD och ESRS E1: klimatrapportering där både beräkningar och mätningar kan ingå. Kontrollera ändrad omfattning och tillämpliga svenska regler.",
        "EU:s metanförordning: krav inom de delar av olje-, fossilgas- och kolsektorn som omfattas. Kontrollera metodvillkor och inspektionstyp.",
        "OGMP 2.0: ett rapporteringsramverk för metan i olje- och gassektorn. Ange vilka datakrav uppdraget ska stödja.",
        "Miljörapportering: anläggningens tillstånd, kontrollprogram och redovisningskrav styr behovet av underlag."
      ]
    },
    {
      "heading": "Börja med rapporteringsansvarig och anläggningens underlag",
      "paragraphs": [
        "Ta fram vilket år, vilka utsläppskällor och vilken enhet som rapporteringen gäller. Beskriv därefter vad som saknas i dagens underlag. Det kan vara information om misstänkta källor, en beräkning av utsläppsflöde eller bättre dokumentation av en förändring.",
        "En karta över förhöjda halter ersätter inte automatiskt en utsläppsberäkning. Mätning, fullständig rapport, inrapportering och oberoende granskning behöver avgränsas var för sig."
      ]
    }
  ],
  "related": [
    {
      "href": "/compliance/csrd",
      "title": "CSRD och Scope 1",
      "description": "När mätdata kan komplettera klimatrapporteringen."
    },
    {
      "href": "/compliance/eu-metanforordning",
      "title": "EU:s metanförordning",
      "description": "Kontrollera tillämpning och metodkrav inför ett LDAR-uppdrag."
    },
    {
      "href": "/compliance/ogmp",
      "title": "OGMP 2.0",
      "description": "Avgränsa vilket rapporteringsunderlag som behövs."
    },
    {
      "href": "/compliance/miljorapportering",
      "title": "Miljörapportering",
      "description": "Utgå från tillstånd och kontrollprogram."
    }
  ],
  "sources": [
    {
      "href": "https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/",
      "title": "EU-rådet: ändringar av CSRD antagna den 24 februari 2026"
    },
    {
      "href": "https://www.efrag.org/sites/default/files/sites/webpublishing/SiteAssets/ESRS%20E1%20Delegated-act-2023-5303-annex-1_en.pdf",
      "title": "ESRS E1 – klimatrapportering, bland annat AR 39 och AR 43 (PDF)"
    },
    {
      "href": "https://eur-lex.europa.eu/eli/reg/2024/1787/oj/eng",
      "title": "Förordning (EU) 2024/1787 – särskilt artikel 1, artikel 14 och bilaga I"
    }
  ]
}

export const metadata = buyerMetadata(page)

export default function Page() { return <BuyerPage page={page} /> }
