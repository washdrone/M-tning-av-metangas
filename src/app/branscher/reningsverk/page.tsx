import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metanläcka reningsverk – lustgasmätning avlopp',
  description:
    'Mät metan- och lustgasutsläpp från ert reningsverk med drönare. Ersätt schabloner med verkliga mätvärden. Lustgasmätning avloppsreningsverk – EcoDrone Sverige.',
  alternates: { canonical: '/branscher/reningsverk' },
  openGraph: {
    title: 'Metanläcka reningsverk – lustgasmätning | EcoDrone',
    description: 'Drönarbaserad mätning av metan- och lustgasutsläpp från reningsverk i Sverige.',
    url: '/branscher/reningsverk',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning för reningsverk',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description: 'Drönarbaserad mätning av metan- och lustgasutsläpp från avloppsreningsverk. Kartlägg processemissioner och ersätt schabloner.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning reningsverk',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Varför behöver reningsverk mäta sina utsläpp av metan och lustgas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reningsverk släpper ut metan (CH₄) och lustgas (N₂O) som biprodukter av reningsprocessen. Lustgas har ungefär 265 gånger starkare växthuseffekt än koldioxid per kg. Många VA-bolag förlitar sig på grova schabloner – faktiska mätningar visar ofta att utsläppen avviker kraftigt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka gaser kan mätas med drönare vid reningsverk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter primärt metan (CH₄) från slamhantering och förprocesser. Lustgas (N₂O) från biologiska reningssteg erbjuds som valbart tillägg. Sensorkapaciteten klargörs i uppdragsplaneringen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätningen kopplas till specifika processteg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Genom att mäta systematiskt med GPS-koppling kan vi knyta mätvärdena till specifika bassänger och processteg – luftningsbassänger, sedimentering, slamhantering och utlopp. Det ger underlag för riktade åtgärder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad visar forskningen vid Linköpings universitet om reningsverksutsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Forskning vid Linköpings universitet (LiU) har visat att lustgasutsläpp från avloppsreningsverk kan vara betydligt högre än vad schablonberäkningar anger. Studierna betonar vikten av platssspecifika mätningar framför generella emissionsfaktorer – något som drönarbaserad mätning möjliggör.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur påverkas reningsverk av CSRD och kommande klimatkrav?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VA-bolag som omfattas av CSRD behöver rapportera Scope 1-utsläpp med verifierad data. Metan och lustgas från reningsprocessen är Scope 1-utsläpp. Drönarbaserad mätning ger det dataunderlag som krävs för revisionsbar rapportering enligt ESRS E1.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur lång tid tar en mätning vid ett reningsverk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En typisk mätning tar 1–2 dagar på plats beroende på anläggningens storlek och komplexitet. Databearbetning och rapportleverans sker inom 2–3 veckor. Mätningen sker utan avbrott i er drift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan resultaten jämföras över tid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Vi levererar digitala kartlager (GeoJSON/KML) som möjliggör jämförelse mellan mättillfällen. Det gör det enkelt att följa upp effekten av processförändringar eller åtgärder över tid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ersätter drönarmätning stationär mätning vid reningsverk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nej, drönarbaserad mätning ersätter inte stationär övervakning utan kompletterar den. Drönarmätning ger en detaljerad ögonblicksbild av hela anläggningen och identifierar var de största utsläppen sker, medan stationär mätning ger kontinuerlig data från utvalda punkter.',
      },
    },
  ],
}

export default function ReningsverkPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Reningsverk', href: '/branscher/reningsverk' },
      ]} />

      <Hero
        title="Mät utsläpp från ert reningsverk"
        subtitle="Lustgas har ca 265 gånger starkare växthuseffekt än CO₂. Med drönarmätning ersätter ni grova schabloner med verkliga mätvärden – och ser var åtgärder ger störst effekt."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['Metan (CH₄)', 'Lustgas N₂O (tillägg)', 'Klimatbokslut-redo']}
      />

      {/* Varför mäta */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Varför mäta utsläpp från reningsverk?
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Biologisk avloppsrening bildar metan och lustgas som biprodukter. Lustgas (N₂O) har
            ungefär 265 gånger starkare växthuseffekt än koldioxid per kg, vilket gör den till en
            av de mest betydande utsläppskällorna vid reningsverk. Trots det förlitar sig många
            VA-bolag idag på grova schabloner istället för verkliga mätningar – och schablonerna
            kan avvika kraftigt från de faktiska utsläppen.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarmätning ger en detaljerad bild av var utsläppen uppstår i processen. Det är ett
            värdefullt komplement till eventuell stationär mätning och ger er underlag för att
            prioritera åtgärder där de gör störst skillnad.
          </p>
        </div>
      </section>

      {/* Forskning LiU */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Forskning bekräftar behovet av mätning
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Forskning vid Linköpings universitet (LiU) har visat att lustgasutsläpp från svenska
            avloppsreningsverk kan vara betydligt högre än vad standardiserade schablonberäkningar anger.
            Studierna betonar att generella emissionsfaktorer inte fångar den stora variationen mellan
            anläggningar – och att platssspecifika mätningar är nödvändiga för att förstå de verkliga
            utsläppen.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Liknande resultat har publicerats internationellt: utsläppen varierar kraftigt beroende på
            processutformning, belastning, temperatur och driftstyrning. Det innebär att varje
            reningsverk behöver egen mätdata för att kunna rapportera korrekt – och för att veta var
            insatserna gör störst nytta.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Metan (CH₄)', text: '– från slamhantering, förprocesser och eventuella biogasläckor i rötkammare och gasledningar.' },
              { bold: 'Lustgas (N₂O)', text: '– framför allt från biologiska reningssteg som nitrifikation/denitrifikation (valbart tillägg).' },
              { bold: 'Rumslig koppling', text: '– mätdata knyts till specifika bassänger och processzoner via GPS-koppling.' },
              { bold: 'Processanalys', text: '– identifiering av vilka processteg som bidrar mest till de totala utsläppen.' },
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
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en mätning till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Processgenomgång', desc: 'Vi går igenom er anläggning och identifierar var utsläppen troligen uppstår – luftningsbassänger, sedimentering, slamhantering, rötkammare och utlopp.' },
              { step: '2', title: 'Mätning', desc: 'Drönaren flyger över processytorna och mäter metan- och/eller lustgashalter med GPS-koppling, så varje mätvärde kopplas till rätt plats och processzon.' },
              { step: '3', title: 'Databearbetning', desc: 'Mätdata kopplas till era processzoner. Vi analyserar var utsläppen är störst, kvalitetssäkrar resultaten och dokumenterar mätosäkerheten.' },
              { step: '4', title: 'Leverans', desc: 'Ni får en utsläppskarta, processanalys som visar vilka steg som bidrar mest, och en sammanfattande rapport med konkreta rekommendationer.' },
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

      {/* Leverabler */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Utsläppskarta', desc: 'GPS-kopplad karta som visar gashalter knutna till era processzoner och bassänger – tydlig och direkt användbar.' },
              { title: 'Processanalys', desc: 'Analys av vilka processteg som bidrar mest till utsläppen – så att ni vet var åtgärder ger störst effekt.' },
              { title: 'Mätrapport', desc: 'Rapport med metod, resultat och mätosäkerhet – redo att använda i ert klimatbokslut och för tillsynsmyndigheter.' },
              { title: 'Digitala kartlager', desc: 'GeoJSON/KML för integration i ert GIS eller driftsystem. Möjliggör jämförelse mellan mättillfällen.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schabloner vs mätning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Gå från schabloner till faktiska mätvärden
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Genom att veta vilka processteg som genererar mest utsläpp kan ni rikta insatserna dit
            de gör mest nytta: justera luftning, ändra slamålder, optimera kväverening eller
            förbättra täckning av slamhantering. Resultatet blir ett lägre klimatavtryck, bättre
            data i ert klimatbokslut – och ofta bättre processekonomi.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Med CSRD och skärpta klimatmål behöver VA-bolag allt mer detaljerad utsläppsdata.
            Drönarmätning ger er den kvalitet och detaljnivå som krävs för att ersätta osäkra
            schabloner med verifierbara mätvärden – och för att visa att ni aktivt arbetar med
            att minska era klimatutsläpp.
          </p>
        </div>
      </section>

      {/* VA-branschens utmaningar */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            VA-branschens klimatutmaning
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Svenskt Vatten har satt ambitiösa klimatmål för VA-branschen. För att nå dessa mål behöver
            varje reningsverk förstå sin egen utsläppsprofil. Det kräver mätdata – inte antaganden.
            Drönarbaserad mätning ger VA-bolag det verktyg de behöver för att kartlägga, prioritera
            och följa upp sina klimatutsläpp på ett kostnadseffektivt sätt.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Vi har erfarenhet av mätningar vid reningsverk av olika storlek och processutformning,
            från mindre anläggningar till stora regionala verk. Kontakta oss för att diskutera hur
            en mätning kan se ut för just ert reningsverk.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om mätning vid reningsverk"
      />

      <CtaBand
        heading="Vill ni kartlägga utsläppen från ert reningsverk?"
        description="Boka en genomgång så planerar vi en mätning anpassad efter er anläggning och era frågeställningar."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/branscher/biogas" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Biogas – läcksökning
            </Link>
            <Link href="/branscher/deponier" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Deponier – metanmätning
            </Link>
            <Link href="/compliance/csrd" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              CSRD-compliance
            </Link>
            <Link href="/compliance/miljorapportering" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Miljörapportering & SMP
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
