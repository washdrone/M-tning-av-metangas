import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { FaqAccordion } from '@/components/FaqAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metanmätning deponi – ytemissionsmätning med drönare',
  description:
    'Ytemissionsmätning av metan vid deponier med drönare. Kartlägg hotspots, uppfyll Avfallsdirektivet och SMP-rapportering. EcoDrone – metanmätning deponi Sverige.',
  alternates: { canonical: '/branscher/deponier' },
  openGraph: {
    title: 'Metanmätning deponi – ytemissionsmätning | EcoDrone',
    description: 'Drönarbaserad ytemissionsmätning av metan vid deponier i hela Sverige.',
    url: '/branscher/deponier',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Metanmätning för deponier',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description: 'Drönarbaserad ytemissionsmätning av diffusa metanemissioner från deponiytor med hotspot-identifiering och compliance-rapportering.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Ytemissionsmätning deponi',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hur ofta bör en deponi mätas för metanutsläpp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Det beror på tillståndskrav och deponins status. Aktiva deponier med gasfångst mäts vanligen årligen eller halvårsvis. Avslutade deponier mäts oftast i samband med kontrollprogram. Vi hjälper er hitta rätt intervall baserat på era regulatoriska krav.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad innebär ytemissionsmätning vid deponi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ytemissionsmätning innebär att vi systematiskt kartlägger metankoncentrationer ovanför deponins yta. Varje mätpunkt GPS-kopplas för att skapa en georefererad karta som visar var och hur mycket metan som läcker genom täckskiktet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fungerar resultaten som underlag vid tillsyn och SMP-rapportering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Rapporterna innehåller dokumenterad metodik och mätosäkerhet, vilket gör dem lämpliga som underlag vid tillsyn, SMP-rapportering till Naturvårdsverket, klimatredovisning och uppföljning av åtgärder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka krav ställer Avfallsdirektivet på deponiers utsläppsövervakning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EU:s Avfallsdirektiv och Deponidirektivet kräver att deponier övervakar och minimerar sina utsläpp av växthusgaser. I Sverige regleras detta genom miljötillståndet och kontrollprogrammet. Drönarbaserad mätning ger det detaljerade dataunderlag som krävs för att visa att ni uppfyller kraven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur jämför sig drönarmätning med traditionell markbunden mätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Markbundna mätningar med ackumulationskammare ger punktvisa värden och tar lång tid. Drönarmätning kartlägger hela ytan systematiskt på en bråkdel av tiden och ger en sammanhängande bild av utsläppen. Metoderna kompletterar varandra väl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan mätningen användas för att verifiera gasfångstens effektivitet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Genom att jämföra mätdata med gasfångstsystemets flöden kan ni beräkna fångstgraden och identifiera var kompletterande brunnar eller justeringar behövs. Det ger ett direkt underlag för att optimera er gasutvinning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vad kostar ytemissionsmätning med drönare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kostnaden beror på deponiytans storlek, komplexitet och önskad rapporteringsnivå. Kontakta oss för en offert anpassad efter er specifika situation. Generellt är drönarbaserad mätning betydligt kostnadseffektivare än motsvarande markbundna kartläggning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mäter ni även på avslutade och nedlagda deponier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Sverige har över 4 000 nedlagda avfallsupplag och många av dessa släpper fortfarande ut metan. Vi utför mätningar på både aktiva och avslutade deponier, inklusive historiska upplag som saknar aktiv gasfångst.',
      },
    },
  ],
}

export default function DeponierPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Deponier', href: '/branscher/deponier' },
      ]} />

      <Hero
        title="Metanmätning för deponier"
        subtitle="Kartlägg diffusa metanemissioner genom täckskiktet med drönarbaserad ytemissionsmätning. Identifiera hotspots, uppfyll regulatoriska krav och stärk ert klimatbokslut."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['Ytemissionsmätning CH₄', 'Hotspot-identifiering', 'SMP-rapportering']}
      />

      {/* Utmaningen */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Deponiers dolda klimatpåverkan
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Metan som bildas vid nedbrytning av organiskt avfall i deponier tar sig ut genom täckskiktet –
            ojämnt fördelat och omöjligt att se med blotta ögat. Sverige har över 4 000 nedlagda avfallsupplag,
            och de aktiva deponierna genererar betydande mängder deponigas. Metan är en kraftfull växthusgas
            som värmer klimatet ungefär 80 gånger mer än koldioxid på 20 års sikt (GWP₂₀).
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Traditionella markbundna mätningar med ackumulationskammare ger punktvisa värden och tar dagar att
            genomföra för en hel deponi. Med drönarbaserad ytemissionsmätning kartlägger EcoDrone hela ytan
            systematiskt på timmar – och ni ser direkt var de största läckorna finns.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter vid deponier</h2>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Metankoncentration (CH₄)', text: '– mätt i ppm ovanför deponiytan med TDLAS-sensor, kopplat till exakt GPS-position.' },
              { bold: 'Spatial fördelning', text: '– georefererade kartlager som visar hur metanhalterna varierar över hela deponiarealen.' },
              { bold: 'Hotspots', text: '– punkter med förhöjda halter som ofta beror på brister i täckskiktet, bristfällig kompaktering eller trasiga gasbrunnar.' },
              { bold: 'Emissionsflöde', text: '– uppskattning av totala metanemissioner per areaenhet (där mätförutsättningarna tillåter kvantifiering).' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                <span className="text-dark-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory compliance */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            Regulatoriska krav för deponier
          </h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Deponier omfattas av ett allt striktare regelverk för utsläppsövervakning. EU:s Avfallsdirektiv
            och Deponidirektivet (1999/31/EG) kräver att verksamhetsutövare övervakar och minimerar
            utsläpp av växthusgaser. I Sverige implementeras dessa krav genom miljöbalken och respektive
            verksamhets tillståndsvillkor.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">Avfallsdirektivet och Deponidirektivet</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Deponidirektivet ställer krav på att deponier ska ha system för uppsamling och behandling av
            deponigas. Operatörer ska kunna visa att gashanteringen är effektiv och att diffusa utsläpp
            minimeras. Drönarbaserad ytemissionsmätning ger det detaljerade underlag som behövs för att
            dokumentera gasfångstens effektivitet och identifiera var kompletterande åtgärder behövs.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">SMP-rapportering till Naturvårdsverket</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Miljörapporteringen via Svenska MiljörapporteringsPortalen (SMP) kräver att deponier redovisar
            sina utsläpp av växthusgaser. Med verklig mätdata från EcoDrone kan ni ersätta schablonberäkningar
            med faktiska mätvärden – vilket ger en mer korrekt bild av era utsläpp och ofta visar sig
            skilja sig markant från schablonestimat.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">CSRD och klimatbokslut</h3>
          <p className="mt-3 text-dark-300 leading-relaxed">
            Från 2025 omfattas allt fler svenska företag av{' '}
            <Link href="/compliance/csrd" className="text-brand-400 hover:underline">CSRD:s krav på hållbarhetsrapportering</Link>.
            Metanutsläpp från deponier utgör en del av Scope 1-utsläppen och ska rapporteras med verifierad
            data. EcoDrones mätrapporter levererar den kvalitet som krävs för revision.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så går en deponimätning till</h2>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Förberedelse', desc: 'Vi tar del av era underlag – ytgränser, celler, täckskikt, gasbrunnars placering – och planerar flygmönster och mätprotokoll. Vi samordnar med er personal och säkerställer nödvändiga flygtillstånd.' },
              { step: '2', title: 'Flygning & mätning', desc: 'Drönaren flyger systematiskt över deponiytorna på bestämd höjd och registrerar metankoncentrationer med GPS-koppling. Hela deponiarealen täcks av under en dag, beroende på storlek.' },
              { step: '3', title: 'Databearbetning', desc: 'Rådata kalibreras mot referensvärden, interpoleras till kartlager och kvalitetskontrolleras. Mätosäkerheten dokumenteras och hotspots identifieras och rangordnas.' },
              { step: '4', title: 'Leverans & genomgång', desc: 'Ni får rapport, georefererade koncentrationskartor, hotspot-lista och digitala kartlager (GeoJSON/KML). Vi går igenom resultaten tillsammans och diskuterar rekommenderade åtgärder.' },
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
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad ni får levererat</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Koncentrationskarta', desc: 'Georefererad karta över metankoncentrationer (ppm) med tydlig färgskala – ni ser direkt var det läcker genom täckskiktet.' },
              { title: 'Hotspot-lista', desc: 'Punkter med förhöjda halter, rangordnade efter nivå och position – direkt användbar för åtgärdsplanering och prioritering.' },
              { title: 'Emissionsrapport', desc: 'Resultat, metodik och mätosäkerhet sammanfattat – redo för tillsyn, SMP-rapportering, miljörapport eller klimatbokslut.' },
              { title: 'Digitala kartlager', desc: 'GeoJSON/KML-filer för ert GIS-system. Jämför mellan mättillfällen och kombinera med egna datalager för långsiktig uppföljning.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* När passar det */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            När passar drönarbaserad deponimätning?
          </h2>
          <ul className="mt-6 space-y-3 text-dark-300">
            {[
              'Årlig eller periodisk uppföljning av metanutsläpp enligt kontrollprogrammet',
              'Kontroll efter sluttäckning eller reparation av täckskikt',
              'Underlag för tillståndsprövning, omprövning eller miljörapport',
              'Utvärdering av gasfångstsystemets effektivitet och fångstgrad',
              'Identifiering av prioriterade åtgärdsområden vid stora deponiarealer',
              'Klimatbokslut och Scope 1-emissionsredovisning (CSRD)',
              'Verifiering av efterbehandlingsåtgärder på avslutade deponier',
            ].map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ekonomisk nytta */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Ekonomisk och miljömässig nytta</h2>
          <p className="mt-4 text-dark-300 leading-relaxed">
            Att identifiera och åtgärda metanläckor vid deponier ger dubbel vinst. Miljömässigt minskar ni
            era växthusgasutsläpp direkt. Ekonomiskt innebär det ofta att mer deponigas kan fångas upp och
            användas för energiproduktion – varje kubikmeter metan som fångas istället för att läcka ut
            har ett direkt ekonomiskt värde.
          </p>
          <p className="mt-4 text-dark-400 leading-relaxed">
            Drönarbaserad mätning är dessutom betydligt kostnadseffektivare än traditionell markbunden
            kartläggning med ackumulationskammare, särskilt vid stora deponiarealer. Ni får en heltäckande
            bild på en bråkdel av tiden – och kostnaden.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }))}
        heading="Vanliga frågor om metanmätning vid deponier"
      />

      <CtaBand
        heading="Behöver ni kartlägga metanutsläpp från er deponi?"
        description="Vi hjälper er planera mätningen, genomföra den och leverera underlag för tillsyn, SMP-rapportering och klimatbokslut."
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
            <Link href="/branscher/reningsverk" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Reningsverk – processemissioner
            </Link>
            <Link href="/compliance/miljorapportering" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Miljörapportering & SMP
            </Link>
            <Link href="/compliance/csrd" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              CSRD-compliance
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
