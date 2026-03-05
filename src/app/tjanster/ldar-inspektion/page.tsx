import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { ProcessSteps } from '@/components/ProcessSteps'
import { DeliverablesList } from '@/components/DeliverablesList'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LDAR-inspektion med drönare | EcoDrone Sverige',
  description:
    'LDAR-inspektion (Leak Detection and Repair) med drönare. Uppfyll EU:s metanförordning med effektiv screening av fugitiva emissioner. Hela Sverige.',
  alternates: { canonical: '/tjanster/ldar-inspektion' },
  openGraph: {
    title: 'LDAR-inspektion med drönare | EcoDrone Sverige',
    description:
      'Drönarbaserad LDAR-inspektion för industri och energi. Detektera fugitiva emissioner snabbare och säkrare. Compliance med EU:s metanförordning.',
    url: '/tjanster/ldar-inspektion',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'LDAR-inspektion med drönare',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Drönarbaserad Leak Detection and Repair (LDAR) inspektion för detektering av fugitiva emissioner vid industriella anläggningar.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'LDAR-inspektion',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vad är LDAR och varför behövs det?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LDAR (Leak Detection and Repair) är ett systematiskt program för att identifiera och reparera gasläckor vid industriella anläggningar. EU:s metanförordning (EU 2024/1787) ställer krav på regelbundna LDAR-inspektioner inom energisektorn för att minska fugitiva metanutsläpp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur uppfyller drönarbaserad LDAR EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning specificerar krav på inspektionsfrekvens och detektionsgränser. Vår drönarbaserade LDAR-inspektion uppfyller dessa krav genom OGI-kamerateknik och TDLAS-mätning som detekterar läckor enligt förordningens standarder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan drönare ersätta traditionell LDAR med sniffare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drönarbaserad LDAR fungerar utmärkt som komplement till traditionella sniffmetoder. Drönaren ger snabb screening av hela anläggningen och identifierar problemområden som sedan kan följas upp med punktmätning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka typer av anläggningar inspekterar ni?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi utför LDAR-inspektioner vid raffinaderier, petrokemiska anläggningar, naturgasterminaler, kompressorstationer, biogasanläggningar, kemianläggningar och andra verksamheter med processutrustning som kan ha fugitiva emissioner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta bör LDAR-inspektion genomföras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning kräver inspektion var tredje månad för de flesta komponenter i energisektorn. Frekvensen kan variera beroende på komponenttyp och riskbedömning.',
      },
    },
  ],
}

const steps = [
  {
    title: 'Komponentinventering',
    description:
      'Vi kartlägger era komponentgrupper – ventiler, flänsar, pumpar, kompressorer – och planerar inspektionsrutten baserat på er anläggningsritning och riskbedömning.',
  },
  {
    title: 'OGI-screening',
    description:
      'Drönaren flyger med OGI-kamera (Optical Gas Imaging) och skannar alla tillgängliga komponenter. Gasplymer visualiseras i realtid och läckor identifieras visuellt.',
  },
  {
    title: 'Kvantitativ uppföljning',
    description:
      'Identifierade läckor kvantifieras med TDLAS eller Hi-Flow-mätning. Läckageflöden dokumenteras i gram per timme eller kilogram per timme.',
  },
  {
    title: 'Rapportering',
    description:
      'Komplett LDAR-rapport med läckageregister, prioriteringslista, OGI-videodokumentation och rekommendationer för reparation. Redo för ert reparationsteam.',
  },
  {
    title: 'Uppföljning efter reparation',
    description:
      'Efter reparation verifierar vi att läckorna är åtgärdade med förnyad OGI-inspektion. Resultaten dokumenteras som bevis på compliance.',
  },
]

const deliverables = [
  {
    title: 'LDAR-inspektionsrapport',
    description:
      'Komplett rapport enligt EU:s metanförordning med inspekterade komponenter, identifierade läckor, kvantifierade flöden och reparationsrekommendationer.',
  },
  {
    title: 'Läckageregister',
    description:
      'Strukturerat register med varje identifierad läcka: komponent-ID, position, läckagetyp, kvantifierat flöde, prioritering och reparationsstatus.',
  },
  {
    title: 'OGI-videodokumentation',
    description:
      'Inspelade videosekvenser från OGI-kameran som visar identifierade gasplymer. Varje sekvens är tidsmarkerad och kopplad till specifik komponent.',
  },
  {
    title: 'Prioriterad åtgärdslista',
    description:
      'Läckor rankade efter emissionsstorlek och reparerbarhet. De största och mest kostnadseffektiva reparationerna identifieras tydligt.',
  },
  {
    title: 'Compliance-dokumentation',
    description:
      'Sammanställning som visar att inspektionen uppfyller kraven i EU:s metanförordning. Inklusive inspektionsmetodik, detektionsgränser och operatörsinformation.',
  },
]

const faqItems = [
  {
    question: 'Vad är LDAR och varför behövs det?',
    answer:
      'LDAR (Leak Detection and Repair) är ett systematiskt program för att identifiera och reparera gasläckor vid industriella anläggningar. Fugitiva emissioner – oavsiktliga utsläpp från ventiler, flänsar, pumpar och andra komponenter – kan stå för en betydande del av en anläggnings totala utsläpp. EU:s metanförordning (EU 2024/1787) ställer krav på regelbundna LDAR-inspektioner inom energisektorn.',
  },
  {
    question: 'Hur uppfyller drönarbaserad LDAR EU:s metanförordning?',
    answer:
      'EU:s metanförordning specificerar krav på inspektionsfrekvens, detektionsgränser och dokumentation. Vår drönarbaserade LDAR-inspektion uppfyller dessa krav genom OGI-kamerateknik och TDLAS-mätning som detekterar och kvantifierar läckor enligt förordningens standarder. Alla resultat dokumenteras i format som accepteras vid tillsyn av behörig myndighet.',
  },
  {
    question: 'Kan drönare ersätta traditionell LDAR med sniffare?',
    answer:
      'Drönarbaserad LDAR fungerar utmärkt som komplement till traditionella sniffmetoder (Method 21). Drönaren ger snabb screening av hela anläggningen och identifierar problemområden som sedan kan verifieras med punktmätning. Drönaren är särskilt värdefull för svårtillgängliga komponenter som annars kräver ställning, kranarbete eller produktionsstopp för åtkomst.',
  },
  {
    question: 'Vilka typer av anläggningar inspekterar ni?',
    answer:
      'Vi utför LDAR-inspektioner vid raffinaderier, petrokemiska anläggningar, naturgasterminaler, kompressorstationer, biogasanläggningar, kemianläggningar och andra verksamheter med processutrustning som kan ge upphov till fugitiva emissioner. Vi anpassar inspektionsmetodiken efter er anläggningstyp och regulatoriska krav.',
  },
  {
    question: 'Hur ofta bör LDAR-inspektion genomföras?',
    answer:
      'EU:s metanförordning kräver inspektion var tredje månad för de flesta komponenttyper i energisektorn. Vissa komponenter med lägre risk kan inspekteras med längre intervall. Frekvensen kan även påverkas av nationella krav och tillståndsvillkor. Vi hjälper er fastställa rätt inspektionsschema baserat på era specifika regulatoriska skyldigheter.',
  },
  {
    question: 'Vad kostar en LDAR-inspektion med drönare?',
    answer:
      'Priset beror på anläggningens storlek, antal komponenter och inspektionens omfattning. Drönarbaserad inspektion ger ofta lägre totalkostnad jämfört med manuella metoder tack vare snabbare genomförande och reducerat behov av åtkomstutrustning. Kontakta oss för en offert baserad på er anläggning.',
  },
]

export default function LdarInspektionPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'LDAR-inspektion', href: '/tjanster/ldar-inspektion' },
      ]} />

      <Hero
        title="LDAR-inspektion med drönare"
        subtitle="Uppfyll EU:s metanförordning med effektiv drönarbaserad LDAR-inspektion. Vi identifierar och kvantifierar fugitiva emissioner snabbare, säkrare och mer kostnadseffektivt än traditionella metoder."
        ctaText="Boka LDAR-inspektion"
        ctaHref="/kontakt"
        trustItems={[
          'EU-metanförordning (2024/1787)',
          'OGI + TDLAS-kvantifiering',
          'Compliance-redo rapporter',
        ]}
      />

      {/* Introduktion */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Leak Detection and Repair – nästa generation</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            LDAR (Leak Detection and Repair) är det systematiska tillvägagångssättet för att
            identifiera och åtgärda fugitiva gasemissioner vid industriella anläggningar. Med
            EU:s metanförordning (EU 2024/1787) har kraven på LDAR-inspektioner skärpts avsevärt,
            med krav på regelbundna inspektioner och dokumenterad uppföljning av reparationer.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Traditionella LDAR-program med handburna sniffare (Method 21) är tidskrävande och
            begränsade till komponenter som är fysiskt åtkomliga. Vår drönarbaserade LDAR
            erbjuder ett kraftfullt komplement: snabb screening av hela anläggningen med
            OGI-kamera, kvantifiering med TDLAS och fullständig dokumentation – utan
            driftstopp och med minimalt behov av åtkomstutrustning.
          </p>
        </div>
      </section>

      {/* EU:s metanförordning */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">EU:s metanförordning och LDAR-krav</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            EU:s metanförordning (Regulation (EU) 2024/1787) trädde i kraft 2024 och ställer
            bindande krav på minskning av metanutsläpp inom energisektorn. Förordningen
            inkluderar specifika krav på LDAR-inspektioner som påverkar operatörer inom
            olja, gas och kol i EU.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                bold: 'Inspektionsfrekvens',
                text: '– var tredje månad för de flesta komponenttyper. Vissa komponenter med låg risk kan inspekteras halvårsvis.',
              },
              {
                bold: 'Detektionsgräns',
                text: '– kraven specificerar minimigränser för detektion. OGI-kameror och TDLAS uppfyller kraven med god marginal.',
              },
              {
                bold: 'Reparationstider',
                text: '– identifierade läckor ska repareras inom fastställda tidsramar. Rapporteringen ska visa reparationsstatus.',
              },
              {
                bold: 'Dokumentation',
                text: '– fullständig dokumentation av inspektionsmetodik, resultat, reparationer och verifiering krävs vid tillsyn.',
              },
              {
                bold: 'Rapportering',
                text: '– operatörer ska rapportera inspektionsresultat och emissionsdata till behörig myndighet.',
              },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fördelar med drönarbaserad LDAR */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Fördelar med drönarbaserad LDAR</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Snabbare inspektion',
                desc: 'En drönare kan screena hundratals komponenter per timme jämfört med 50–100 per dag med handburen sniffare. Det innebär kortare inspektionstider och lägre kostnad.',
              },
              {
                title: 'Åtkomst utan ställning',
                desc: 'Drönaren når komponenter på höga höjder, inuti rörbryggor och på svårtillgängliga platser utan behov av ställning, skylift eller kranarbete.',
              },
              {
                title: 'Ingen driftpåverkan',
                desc: 'Inspektionen genomförs utan att påverka pågående produktion. Inga produktionsstopp, inga intrång i processområden med personal.',
              },
              {
                title: 'Visuell dokumentation',
                desc: 'OGI-kameran ger videodokumentation av varje identifierad läcka. Bilder och video är kraftfulla bevis vid tillsyn och internrapportering.',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Komponenttyper */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Komponenter vi inspekterar</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vår LDAR-inspektion täcker alla relevanta komponenttyper vid industriella
            anläggningar. Vi anpassar inspektionsplanen efter er anläggnings specifika
            komponentinventering och riskprofil.
          </p>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'Ventiler – avstängnings-, regler- och säkerhetsventiler',
              'Flänsar och kopplingar – alla typer av röranslutningar',
              'Pumpar och kompressorer – packboxar, tätningar och anslutningar',
              'Öppna linjer – provtagningspunkter, dräneringar och avluftningar',
              'Trycksäkerhetsventiler – säkerhetsventiler och brottskivor',
              'Instrumentering – mätinstrument, manometrar och transmittrar',
              'Lagringstankar – tak, skalväggar och anslutningar',
              'Lastningsutrustning – armar, slangar och kopplingar',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="Så genomför vi LDAR-inspektionen" />
      <DeliverablesList items={deliverables} heading="Leveranser" />

      <FaqAccordion items={faqItems} heading="Vanliga frågor om LDAR-inspektion" />

      <CtaBand
        heading="Behöver ni LDAR-inspektion?"
        description="Kontakta oss för en genomgång av era behov. Vi planerar inspektionen utifrån er anläggning och era regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterade tjänster</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/ogi-kamera" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGI-kamera
            </Link>
            <Link href="/tjanster/metanmatning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Metanmätning
            </Link>
            <Link href="/tjanster/gasdetektion" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Gasdetektion
            </Link>
            <Link href="/tjanster/utslappsmating-dronare" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Utsläppsmätning med drönare
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
