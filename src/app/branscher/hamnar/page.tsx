import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emissionsinspektion LNG-terminal & hamnar – EcoDrone',
  description:
    'Drönarbaserad emissionsinspektion för hamnar och LNG-terminaler. Identifiera metanläckor vid rörledningar, lagring och lastningsoperationer. EcoDrone Sverige.',
  alternates: { canonical: '/branscher/hamnar' },
  openGraph: {
    title: 'Emissionsinspektion LNG-terminal & hamnar | EcoDrone',
    description: 'Drönarbaserad gasdetektion och emissionsinspektion vid hamnar och LNG-terminaler.',
    url: '/branscher/hamnar',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emissionsinspektion för hamnar och LNG-terminaler',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad gasdetektion och emissionsinspektion vid hamnar, LNG-terminaler och marin bunkringsinfrastruktur.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsinspektion hamn',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Varför behöver hamnar och LNG-terminaler emissionsinspektion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hamnar och LNG-terminaler hanterar stora volymer fossila bränslen och naturgas. Läckor vid rörledningar, tankar, lastningsarmar och bunkringsoperationer innebär både säkerhetsrisker och klimatpåverkan. EU:s metanförordning omfattar även LNG-infrastruktur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka delar av en hamn kan inspekteras med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi inspekterar LNG-lagringstankar, rörledningar, lastnings- och lossningsarmar, bunkringsinfrastruktur, kompressorstationer, ventiler, flänsar och övrig processinfrastruktur. Drönarteknik når svårtillgängliga platser som tanktoppar och höga rörkonstruktioner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur påverkas LNG-terminaler av EU:s metanförordning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning omfattar hela LNG-kedjan inklusive import, regasifiering och distribution. LNG-terminaler ska genomföra LDAR-program med specificerad inspektionsfrekvens och detektionsgränser. EcoDrone levererar inspektioner som uppfyller dessa krav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan inspektionen göras utan att störa hamnverksamheten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Drönarinspektionen samordnas med hamnens operativa schema för att minimera påverkan. Flygning sker utan att blockera kajer, kranar eller transportvägar. Vi koordinerar med hamnens säkerhetsorganisation för optimal planering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka sensorer används vid hamninspektion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi använder OGI-kameror (Optical Gas Imaging) för visuell gasdetektion och TDLAS-sensorer för kvantitativ mätning av metankoncentrationer. Kombinationen ger både snabb screening och exakt kvantifiering av identifierade läckor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur ofta bör en LNG-terminal inspekteras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s metanförordning anger minimikrav för inspektionsfrekvens baserat på komponenttyp och risknivå. Vi rekommenderar kvartalsvis OGI-screening med mer detaljerad kvantifiering årsvis. Kontakta oss för en anpassad inspektionsplan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Inkluderar inspektionen bunkringsoperationer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi kan inspektera bunkringsoperationer i realtid för att identifiera läckor vid kopplingar och överföringsutrustning. Det ger er dokumentation av emissionsprestanda under faktiska operativa förhållanden.',
      },
    },
  ],
}

export default function HamnarPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Hamnar & LNG', href: '/branscher/hamnar' },
      ]} />

      <Hero
        title="Emissionsinspektion för hamnar och LNG-terminaler"
        subtitle="Drönarbaserad gasdetektion vid komplexa hamninfrastrukturer och LNG-anläggningar. Identifiera läckor i rörledningar, lagring och lastningsoperationer – snabbt, säkert och utan driftstörning."
        ctaText="Boka inspektion"
        ctaHref="/kontakt"
        trustItems={['OGI-gasdetektion', 'LNG-terminaler', 'LDAR-kompatibel']}
      />

      {/* Utmaningen */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Komplexa emissionsutmaningar i hamnmiljö
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Hamnar och LNG-terminaler utgör komplexa infrastrukturmiljöer med många potentiella
            emissionskällor. Rörledningar, lagringstankar, lastningsarmar, kompressorstationer och
            bunkringsutrustning – varje komponent innebär en potentiell läckagepunkt. Traditionell
            inspektion med handhållna instrument är tidskrävande, begränsad till åtkomliga ytor och
            kan kräva kostsamma produktionsstopp.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Med LNG:s växande roll som övergångsbränsle byggs ny infrastruktur i Sveriges hamnar.
            EU:s metanförordning omfattar hela LNG-kedjan och ställer krav på systematisk
            läckageövervakning. Drönarbaserad inspektion erbjuder en effektiv metod att uppfylla
            dessa krav – med bättre täckning, högre säkerhet och lägre kostnad.
          </p>
        </div>
      </section>

      {/* LNG-specifikt */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            LNG-terminaler – fokusområden
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            LNG-terminaler hanterar naturgas i flytande form vid extremt låga temperaturer (-162 °C).
            Övergången mellan flytande och gasform skapar unika utmaningar för läckageövervakning.
            Metan som avgår vid boil-off, operativa ventileringar och komponentläckor bidrar till
            anläggningens totala emissionsprofil.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Lagringstankar och boil-off</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            LNG-tankar genererar naturlig boil-off-gas som normalt hanteras via återföringssystem.
            Läckor eller ineffektiv boil-off-hantering kan leda till metanutsläpp. Drönarbaserad
            OGI-inspektion identifierar avvikelser vid tanktoppar, säkerhetsventiler och
            anslutningspunkter.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Lastning och bunkring</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Lastningsarmar, bunkringskopplingar och överföringslinjer är kritiska punkter för
            metanutsläpp. Varje koppling och lossning innebär risk för restgasemissioner.
            Drönarburen OGI möjliggör inspektion av dessa operationer i realtid utan att
            personal behöver befinna sig i riskzonen.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Rörledningar och kompressorstationer</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Hamnars gasledningsinfrastruktur sträcker sig ofta över stora områden med många
            svåråtkomliga sektioner. Drönarteknik gör det möjligt att inspektera långa
            rörledningssträckor, ventiler och kompressorstationer effektivt – inklusive
            upphöjda rörbryggor och överbyggda sektioner.
          </p>
        </div>
      </section>

      {/* Vad vi erbjuder */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi erbjuder</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'OGI-screening', text: '– snabb visuell gasdetektion med drönarburen OGI-kamera. Identifierar gasplymer vid alla tillgängliga komponenter inklusive höjdpunkter.' },
              { bold: 'TDLAS-kvantifiering', text: '– exakt koncentrationsmätning av identifierade läckor för emissionsberäkning och regulatorisk rapportering.' },
              { bold: 'Infrastrukturinspektion', text: '– systematisk genomgång av tankar, rörledningar, ventiler, flänsar, lastningsarmar och kompressorstationer.' },
              { bold: 'Operativ inspektion', text: '– realtidsinspektion under lastnings- och bunkringsoperationer för att dokumentera emissionsprestanda.' },
              { bold: 'LDAR-program', text: '– uppbyggnad och genomförande av LDAR-program anpassat efter EU:s metanförordnings krav på LNG-infrastruktur.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en hamninspektion till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Planering & koordinering', desc: 'Vi kartlägger anläggningen, identifierar inspektionszoner och samordnar med hamnoperatör, HSE-avdelning och eventuell hamnkapten. Flygtillstånd och säkerhetsprotokoll fastställs.' },
              { step: '2', title: 'OGI-screening', desc: 'Drönaren flyger systematiskt över terminalens infrastruktur med OGI-kamera. Tankar, rörledningar, ventiler, lastningsarmar och kompressorstationer inspekteras.' },
              { step: '3', title: 'Kvantifiering & dokumentation', desc: 'Identifierade läckor kvantifieras med TDLAS. Varje läcka kopplas till specifik komponent med GPS-koordinat, komponent-ID och OGI-dokumentation.' },
              { step: '4', title: 'Rapport & LDAR-dokumentation', desc: 'Komplett inspektionsrapport med detekterade läckor, kvantifierade emissioner, åtgärdsprioriteringar och regulatorisk dokumentation.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-dark-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Säkerhet */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Säkerhet i hamnmiljö</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Hamnmiljöer innebär unika säkerhetsutmaningar: explosionsklassade zoner, tunga
            transporter, kranoperationer och farligt gods. Drönarbaserad inspektion minskar
            behovet av att skicka personal till riskfyllda platser – tanktoppar, höga
            rörkonstruktioner och zoner med potentiella gasansamlingar.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Våra piloter har erfarenhet av att arbeta i komplexa industriella hamnmiljöer.
            Flygningen samordnas med hamnens operativa schema och säkerhetsorganisation
            för att säkerställa trygg och störningsfri inspektion.
          </p>
        </div>
      </section>

      {/* Regulatoriskt */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Regulatoriska krav för LNG-infrastruktur
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            EU:s metanförordning (EU 2024/1787) omfattar hela LNG-kedjan – från produktion och
            import till regasifiering och distribution. LNG-terminaler och hamnar med gasinfrastruktur
            ska etablera LDAR-program med definierad inspektionsfrekvens och detektionsgränser.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Dessutom kan LNG-terminaler och hamnar som hanterar fossila bränslen omfattas av{' '}
            <Link href="/compliance/csrd" className="text-brand-400 hover:underline">CSRD:s krav på hållbarhetsrapportering</Link>{' '}
            och behöva rapportera Scope 1-utsläpp med verifierad data. EcoDrones inspektionsrapporter
            levererar den dokumentationskvalitet som krävs för båda ramverken.
          </p>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Inspektionsrapport', desc: 'Komplett LDAR-rapport med alla inspekterade komponenter, detekterade läckor och kvantifierade emissioner.' },
              { title: 'OGI-dokumentation', desc: 'Video- och bildmaterial som visar identifierade gasplymer kopplat till specifika infrastrukturkomponenter.' },
              { title: 'Åtgärdslista', desc: 'Prioriterad lista med rekommenderade reparationer, uppskattad utsläppsminskning och tidsramar.' },
              { title: 'Compliance-dokumentation', desc: 'Dokumentation formaterad för regulatorisk rapportering enligt EU:s metanförordning och OGMP 2.0.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om emissionsinspektion vid hamnar"
      />

      <CtaBand
        heading="Behöver ni emissionsinspektion vid er hamn eller LNG-terminal?"
        description="Kontakta oss för att diskutera hur vi kan anpassa inspektionen efter er infrastruktur och era regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher/olja-gas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Olja, gas & raffinaderier
            </Link>
            <Link href="/compliance/eu-metanforordning" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              EU:s metanförordning
            </Link>
            <Link href="/compliance/ogmp" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              OGMP 2.0
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
