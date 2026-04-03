import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utsläppsmätning gruvdrift – diffusa emissioner',
  description:
    'Utsläppsmätning vid gruvdrift med drönare. Kartlägg diffusa gasemissioner och dammspridning från gruvor, upplag och anrikningsverk. Hela Sverige.',
  alternates: { canonical: '/branscher/gruva' },
  openGraph: {
    title: 'Utsläppsmätning gruvdrift – diffusa emissioner | EcoDrone',
    description:
      'Drönarbaserad utsläppsmätning för gruvindustrin. Diffusa emissioner, dammspridning och miljöövervakning.',
    url: '/branscher/gruva',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Utsläppsmätning för gruvindustrin',
  provider: { '@type': 'Organization', name: 'EcoDrone' },
  description:
    'Drönarbaserad mätning av diffusa gasemissioner och dammspridning vid gruvor, upplag och anrikningsverk i hela Sverige.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Emissionsmätning gruvdrift',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vilka emissioner mäts vid gruvor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter diffusa gasemissioner som metan (CH₄) vid kolgruvor och torvtäkter, svaveldioxid (SO₂) och svavelväte (H₂S) vid sulfidmalmsgruvor, samt partiklar (PM2.5/PM10) från upplag och transporter. Sensoruppsättningen anpassas efter gruvtyp och specifika behov.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan drönare mäta dammspridning från gruvupplag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Med optiska partikelräknare monterade på drönare kartlägger vi PM2.5- och PM10-halter runt upplag, krossverk och transportleder. Resultaten visar spridningsmönster och kan användas som underlag för dammbekämpningsåtgärder och omgivningsbedömning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur hanteras säkerhet vid flygning nära gruvdrift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi samordnar alla flygningar med gruvans driftledning och säkerhetsorganisation. Flygzoner och tider planeras för att undvika konflikter med sprängning, transporter och annan gruvdrift. Våra piloter är utbildade enligt EASA:s regelverk för drönaroperationer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan resultaten användas för miljötillstånd och kontrollprogram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Rapporterna innehåller dokumenterad metodik, kalibreringsintyg och mätosäkerhet, vilket gör dem lämpliga som underlag vid tillståndsprövning, kontrollprogram och miljörapportering till SMP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur stor yta kan kartläggas per dag?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Den yta som kan kartläggas per dag beror på mätuppdragets komplexitet, terräng och antal sensorer. Stora dagbrott och utspridda upplag kräver fler flygpass men kartläggs ändå betydligt snabbare än med markbaserade metoder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vilka mätsensorer används vid gruvmätning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi anpassar sensoruppsättningen efter gruvtyp. Vanliga konfigurationer inkluderar TDLAS för metan, elektrokemiska sensorer för SO₂ och H₂S, optiska partikelräknare för PM2.5/PM10 samt PID-sensor för VOC. Alla sensorer kalibreras före varje mätkampanj.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hur påverkar väder och årstid mätningarna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vindförhållanden, temperatur och nederbörd påverkar både emissioner och mätförutsättningar. Vi mäter meteorologiska parametrar parallellt och tar hänsyn till dem i databearbetningen. Mätningar kan genomföras året runt, men vi rekommenderar att planera kampanjer utifrån gruvans driftcykel för representativa resultat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ni mäta emissioner från underjordiska gruvor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vi mäter emissioner som når ytan via ventilationsschakt, dagöppningar och sprickor i bergmassan. Drönaren flyger över och runt dessa punktkällor och kartlägger gasflödet med traversmetodik. För emissioner djupt under jord krävs kompletterande stationära mätsystem.',
      },
    },
  ],
}

const faqItems = faqSchema.mainEntity.map(q => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

export default function GruvaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Branscher', href: '/branscher' },
        { name: 'Gruva', href: '/branscher/gruva' },
      ]} />

      <Hero
        title="Utsläppsmätning för gruvindustrin"
        subtitle="Kartlägg diffusa gasemissioner och dammspridning vid gruvor med drönarbaserad mätning. Stora ytor, svårtillgängliga områden och säkerhetszoner – drönaren når överallt utan att störa driften."
        ctaText="Boka mätning"
        ctaHref="/kontakt"
        trustItems={['Diffusa emissioner', 'Dammspridning PM2.5/PM10', 'Stora ytor effektivt']}
      />

      {/* Branschutmaning */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Emissionsutmaningar vid gruvdrift</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Gruvdrift genererar diffusa emissioner från flera källor – sprängning, krossning,
            transport, upplag och avfallshantering. Dessa emissioner är geografiskt utspridda
            över stora ytor och varierar med väder, driftförhållanden och årstid. Traditionella
            mätmetoder med stationära mätpunkter ger bara punktvisa värden och missar den
            övergripande bilden av var utsläppen faktiskt sker.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Sverige har en betydande gruvindustri med aktiva gruvor i Norrbotten, Västerbotten
            och Bergslagen. Gruvoperatörer hanterar allt strängare miljökrav
            från tillsynsmyndigheter och investerare. CSRD-rapportering och klimatmål kräver
            verifierade emissionsdata – inte schabloner. Drönarbaserad mätning erbjuder en
            lösning som kombinerar kostnadseffektivitet med den datakvalitet som krävs.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Drönarbaserad mätning kartlägger emissioner över hela gruvområdet – inklusive
            svårtillgängliga dagbrott, slänter, upplag och dammvägar. Resultaten ger en
            spatial bild av var utsläppen är störst och var åtgärder gör mest nytta, vilket
            möjliggör prioriterade och kostnadseffektiva insatser.
          </p>
        </div>
      </section>

      {/* Vad vi mäter */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Vad vi mäter vid gruvor</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Sensoruppsättningen anpassas efter gruvtyp, malmtyp och specifika miljövillkor.
            Vi mäter både gasformiga emissioner och partikelspridning för att ge en komplett
            bild av gruvans miljöpåverkan.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Diffusa gasemissioner', desc: 'Metan (CH₄) vid kolgruvor och torvtäkter, svaveldioxid (SO₂) och svavelväte (H₂S) vid sulfidmalmsgruvor. Kartlägg emissioner från dagbrott, ventilationsschakt, upplag och anrikningsverk med hög spatial upplösning.' },
              { title: 'Dammspridning PM2.5/PM10', desc: 'Partikelmätning med optiska partikelräknare för att kartlägga spridningsmönster från krossning, transport och vinderodering av upplag. 3D-kartläggning visar var dammnivåerna är högst och hur spridningen påverkar omgivningen.' },
              { title: 'Omgivningspåverkan', desc: 'Luftkvalitetsscreening runt gruvområdet för att bedöma påverkan på närliggande bebyggelse, vattenförekomster och naturområden. Dokumenterar bakgrundsnivåer och identifierar om gränsvärden överskrids.' },
              { title: 'Sprängningsemissioner', desc: 'Kartlägg gashalter efter sprängning för att bedöma ventilationsbehov i dagbrott och omgivningspåverkan. Mät spridning av NOx och partiklar från sprängningsmoln för att optimera säkerhetsrutiner.' },
              { title: 'VOC och processgaser', desc: 'Vid anrikningsverk och processindustri kopplad till gruvdriften mäter vi flyktiga organiska ämnen och processgaser som kan bidra till miljöpåverkan och arbetsmiljörisker.' },
              { title: 'Deponigasemissioner', desc: 'Gruvavfall och sandmagasin kan avge gaser vid nedbrytning av organiskt material och kemiska processer. Vi kartlägger emissioner från dessa ytor för att identifiera hotspots och bedöma totala utsläpp.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varför drönare */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Varför drönarbaserad mätning vid gruvor?</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Gruvor är bland de mest krävande miljöerna för emissionsmätning. Stora arealer,
            svårtillgänglig terräng, aktiva säkerhetszoner och varierande driftförhållanden
            gör att traditionella markbaserade metoder ofta blir otillräckliga. Drönarbaserad
            mätning löser dessa utmaningar genom att kombinera mobilitet, säkerhet och
            datakvalitet.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Stora ytor effektivt', text: '– gruvområden omfattar ofta hundratals hektar med dagbrott, upplag och transportleder. Drönaren kartlägger stora ytor med systematisk rutnätsmätning, vilket ger data för hela området istället för enstaka punkter.' },
              { bold: 'Svårtillgängliga områden', text: '– dagbrottsslänter, tanktoppar, upplagshöjder och ventilationsschakt mäts säkert och effektivt från luften utan att personal behöver ta sig till riskfyllda positioner.' },
              { bold: 'Säkerhet först', text: '– ingen personal behöver befinna sig i riskzoner, nära sprängområden, instabila slänter eller områden med potentiellt farliga gaskoncentrationer. Drönaren opereras från ett säkert avstånd.' },
              { bold: 'Spatial upplösning', text: '– till skillnad från stationära mätpunkter ger drönarbaserad mätning en heltäckande bild av emissionernas rumsliga fördelning. Identifiera exakt var utsläppen är störst.' },
              { bold: 'Kostnadseffektivitet', text: '– en drönarbaserad mätkampanj kostar en bråkdel av att installera och underhålla ett permanent mätnätverk med stationära sensorer. Resultatet ger bättre datakvalitet för investeringen.' },
              { bold: 'Spårbar dokumentation', text: '– GPS-kopplad data med tidsstämplar, flygloggar och kalibreringsintyg ger fullständig spårbarhet för kontrollprogram, tillsyn och miljörapportering.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="text-slate-300">
                  <strong className="text-white">{item.bold}</strong> {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatoriska krav */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Regulatoriska krav för gruvemissioner</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Gruvindustrin omfattas av flera regulatoriska ramverk som kräver dokumenterade
            emissionsdata. Tillståndsprövning enligt miljöbalken, kontrollprogram och
            miljörapportering till SMP (Svenska MiljörapporteringsPortalen) ställer alla
            krav på att operatörer kan redovisa sina utsläpp med verifierade data.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: 'Miljöbalken & kontrollprogram', desc: 'Gruvor med miljötillstånd har kontrollprogram som ofta specificerar emissionsmätning. Drönarbaserad mätning ger den datakvalitet som tillsynsmyndigheter förväntar sig.' },
              { title: 'SMP-rapportering', desc: 'Årlig rapportering till Naturvårdsverkets miljörapporteringsportal kräver emissionsdata. Verifierade mätningar ger bättre precision än schablonbaserade beräkningar.' },
              { title: 'CSRD & hållbarhetsrapportering', desc: 'Stora gruvbolag omfattas av CSRD och ska rapportera enligt ESRS E1. Scope 1-utsläpp från gruvdriften kräver verifierade mätdata för trovärdig rapportering.' },
              { title: 'Industriutsläppsdirektivet (IED)', desc: 'Anrikningsverk och processindustri kopplad till gruvdrift kan omfattas av IED:s krav på bästa tillgängliga teknik (BAT) för emissionskontroll.' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processflöde */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Så genomför vi en mätkampanj</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Varje mätkampanj anpassas efter gruvans specifika förutsättningar, emissionstyper
            och regulatoriska krav. Vi följer en strukturerad process för att säkerställa
            datakvalitet och spårbarhet.
          </p>
          <div className="mt-8 space-y-8">
            {[
              { step: '1', title: 'Planering och riskanalys', desc: 'Vi analyserar gruvområdet, identifierar emissionskällor och planerar flygvägar. Samordning med driftledning och säkerhetsorganisation säkerställer konfliktfri flygning. Sensoruppsättning väljs utifrån gruvtyp och mätbehov.' },
              { step: '2', title: 'Kalibrering och förberedelse', desc: 'Alla sensorer kalibreras med certifierade referensgaser före mätkampanjen. Meteorologisk utrustning installeras för parallell väderdatainsamling. Drönarsystem genomgår funktionskontroll.' },
              { step: '3', title: 'Systematisk mätning', desc: 'Drönaren flyger planerade rutter i rutnätsmönster över mätområdet. Gashalter och partikelkoncentrationer registreras kontinuerligt med GPS-positionering. Flera flygpass kan genomföras för att täcka hela gruvområdet.' },
              { step: '4', title: 'Databearbetning och analys', desc: 'Rådata bearbetas med korrektion för meteorologiska förhållanden, bakgrundsnivåer och sensorrespons. Emissionskartor genereras med rumslig interpolation för att visa fördelningen över hela området.' },
              { step: '5', title: 'Rapport och leverabler', desc: 'Komplett rapport med emissionskartor, kvantifierade utsläpp, mätosäkerhetsanalys och åtgärdsrekommendationer. Data levereras i format kompatibelt med SMP-rapportering och kontrollprogram.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverabler */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Leverabler och rapportering</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Efter varje mätkampanj levererar vi ett komplett datapaket som fungerar som
            underlag för miljörapportering, kontrollprogram och beslutsfattande. Alla
            resultat är spårbara och dokumenterade enligt vetenskaplig standard.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { bold: 'Emissionskartor', text: '– georefererade kartor som visar gashalter och partikelkoncentrationer över hela mätområdet. Identifierar hotspots och bakgrundsnivåer.' },
              { bold: 'Kvantifierade utsläpp', text: '– beräknade emissionsflöden per källa och totalt för hela gruvområdet, uttryckt i kg/h eller ton/år.' },
              { bold: 'Mätosäkerhetsanalys', text: '– dokumenterad osäkerhet med konfidensintervall baserad på sensorkalibrering, mätförhållanden och beräkningsmetodik.' },
              { bold: 'SMP-kompatibel data', text: '– utsläppsdata formaterad för direkt användning i årlig miljörapportering till Naturvårdsverkets portal.' },
              { bold: 'Åtgärdsrekommendationer', text: '– prioriterad lista över emissionskällor med förslag på åtgärder för att minska utsläppen kostnadseffektivt.' },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                <span className="text-slate-300"><strong className="text-white">{item.bold}</strong> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={faqItems} heading="Vanliga frågor om mätning vid gruvor" />

      <CtaBand
        heading="Behöver ni kartlägga emissioner vid er gruva?"
        description="Kontakta oss för att diskutera era mätbehov och hur vi kan anpassa mätningen efter er gruvdrift och regulatoriska krav."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-white">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/compliance/miljorapportering" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Miljörapportering
            </Link>
            <Link href="/compliance/csrd" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              CSRD & ESRS E1
            </Link>
            <Link href="/branscher/deponier" className="card-dark px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors">
              Deponier
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
