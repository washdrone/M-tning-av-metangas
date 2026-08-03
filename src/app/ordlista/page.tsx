import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { CtaBand } from '@/components/CtaBand'
import { RelatedContent } from '@/components/RelatedContent'
import { SITE_URL, OG_IMAGE } from '@/site-config'

export const metadata: Metadata = {
  title: 'Ordlista – begrepp inom utsläppsmätning och gasdetektion',
  description:
    'Ordlista med definitioner av nyckelbegrepp inom utsläppsmätning: TDLAS, OGI, LDAR, diffusa utsläpp, GWP, Scope 1, CSRD, OGMP 2.0, plymmätning och fler.',
  alternates: { canonical: '/ordlista' },
  openGraph: {
    images: [OG_IMAGE],
    title: 'Ordlista – utsläppsmätning och gasdetektion | EcoDrone',
    description:
      'Tydliga definitioner av TDLAS, OGI, LDAR, diffusa utsläpp, GWP, Scope 1, CSRD, OGMP 2.0 och andra centrala begrepp.',
    url: '/ordlista',
  },
}

interface GlossaryTerm {
  id: string
  term: string
  /** Definition – första meningen är komplett och citerbar. Används även i schema. */
  definition: string
  /** Fördjupande kontext (valfri) */
  context?: string
  links?: { label: string; href: string }[]
}

const terms: GlossaryTerm[] = [
  {
    id: 'co2e',
    term: 'CO₂e (koldioxidekvivalenter)',
    definition:
      'CO₂e är en gemensam enhet som räknar om olika växthusgasers klimatpåverkan till motsvarande mängd koldioxid, med hjälp av respektive gas GWP-värde. Enheten gör att utsläpp av metan, lustgas och koldioxid kan summeras och jämföras i samma klimatbokslut.',
    context:
      'Klimatrapportering enligt CSRD och GHG-protokollet uttrycks i ton CO₂e. Ett ton metan motsvarar 28 ton CO₂e räknat med GWP under 100 år enligt IPCC:s femte utvärderingsrapport (AR5).',
    links: [{ label: 'CSRD & Scope 1', href: '/compliance/csrd' }],
  },
  {
    id: 'csrd',
    term: 'CSRD (Corporate Sustainability Reporting Directive)',
    definition:
      'CSRD är EU:s direktiv om hållbarhetsrapportering som ålägger stora och noterade företag att redovisa sin miljö- och klimatpåverkan enligt standarderna ESRS, inklusive växthusgasutsläpp i Scope 1, 2 och 3.',
    context:
      'CSRD kräver inte direktmätning – utsläpp får beräknas med aktivitetsdata och emissionsfaktorer så länge metodik och antaganden redovisas. För verksamheter där diffusa utsläpp är en väsentlig och osäker post stärker faktiska mätdata dock kvaliteten och trovärdigheten i den granskade rapporteringen.',
    links: [
      { label: 'CSRD & Scope 1-rapportering', href: '/compliance/csrd' },
      { label: 'Miljörapportering (SMP)', href: '/compliance/miljorapportering' },
    ],
  },
  {
    id: 'diffusa-utslapp',
    term: 'Diffusa utsläpp (fugitive emissions)',
    definition:
      'Diffusa utsläpp är gasläckage som sprids utan en definierad utsläppspunkt, till skillnad från punktutsläpp som lämnar en skorsten eller ventil. De uppstår genom sprickor i täckskikt, otäta flänsförband, biologiska processer i öppna ytor och läckage från rörledningar.',
    context:
      'Diffusa utsläpp är ofta den mest osäkra posten i ett klimatbokslut eftersom de är utspridda över stora ytor och inte kan mätas med fasta sensorer i en utsläppspunkt.',
    links: [
      { label: 'Guide: diffusa utsläpp', href: '/blogg/diffusa-utslapp-guide' },
      { label: 'Metanmätning med drönare', href: '/tjanster/metanmatning' },
    ],
  },
  {
    id: 'emissionsfaktor',
    term: 'Emissionsfaktor (schablon)',
    definition:
      'En emissionsfaktor är ett generellt genomsnittsvärde som används för att beräkna utsläpp utifrån exempelvis produktionsvolym eller verksamhetstyp, i stället för att mäta de faktiska utsläppen. Schablonberäkningar tar inte hänsyn till anläggningens skick eller lokala förhållanden.',
    context:
      'Två anläggningar med samma schablon kan ha kraftigt olika verkliga utsläpp. Regelverk som CSRD och EU:s metanförordning driver därför mot mätdata i stället för schabloner för väsentliga poster.',
    links: [{ label: 'Så ersätter mätdata schabloner', href: '/compliance/miljorapportering' }],
  },
  {
    id: 'esrs-e1',
    term: 'ESRS E1 (klimatstandarden i CSRD)',
    definition:
      'ESRS E1 är den europeiska hållbarhetsrapporteringsstandard som styr hur klimatpåverkan ska redovisas under CSRD, inklusive krav på att växthusgasutsläpp i Scope 1 rapporteras i ton CO₂e med dokumenterad beräknings- eller mätmetodik.',
    links: [{ label: 'CSRD & ESRS E1', href: '/compliance/csrd' }],
  },
  {
    id: 'eu-metanforordningen',
    term: 'EU:s metanförordning (2024/1787)',
    definition:
      'EU:s metanförordning är en förordning från 2024 som ålägger energisektorn – olja, gas och kol – att mäta, rapportera och åtgärda metanutsläpp, bland annat genom obligatoriska LDAR-program med systematisk läcksökning och reparation.',
    links: [
      { label: 'Guide: EU:s metanförordning', href: '/compliance/eu-metanforordning' },
      { label: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion' },
    ],
  },
  {
    id: 'gwp',
    term: 'GWP (Global Warming Potential)',
    definition:
      'GWP anger hur mycket en växthusgas värmer klimatet jämfört med samma mängd koldioxid över en given tidshorisont, vanligen 100 år. Metan har GWP 28 och lustgas 265 enligt IPCC:s femte utvärderingsrapport (AR5).',
    context:
      'GWP-värden gör det möjligt att räkna om utsläpp av olika gaser till CO₂e. Värdena uppdateras mellan IPCC:s utvärderingsrapporter, därför ska rapporter alltid ange vilken rapport som använts.',
    links: [{ label: 'Växthusgasmätning', href: '/tjanster/vaxthusgasmatning' }],
  },
  {
    id: 'hotspot',
    term: 'Hotspot',
    definition:
      'En hotspot är ett avgränsat område eller en punkt med tydligt förhöjd gaskoncentration jämfört med omgivningen, exempelvis en spricka i en deponis täckskikt eller ett otätt flänsförband. Hotspots identifieras genom spatial kartering av gashalter.',
    context:
      'En hotspot-lista med koordinater och uppmätta nivåer fungerar som prioriterad åtgärdslista: de största läckorna kan åtgärdas först.',
    links: [{ label: 'Metanmätning vid deponier', href: '/branscher/deponier' }],
  },
  {
    id: 'ldar',
    term: 'LDAR (Leak Detection and Repair)',
    definition:
      'LDAR är ett systematiskt arbetssätt för att detektera, kvantifiera, reparera och följa upp gasläckor i industrianläggningar. Ett LDAR-program omfattar återkommande inspektioner, dokumentation av funna läckor och verifiering av att reparationer haft effekt.',
    context:
      'EU:s metanförordning gör LDAR obligatoriskt för energisektorn med fastställda inspektionsintervall. LDAR-inspektioner utförs bland annat med OGI-kameror och TDLAS-sensorer.',
    links: [
      { label: 'LDAR-inspektion med drönare', href: '/tjanster/ldar-inspektion' },
      { label: 'EU:s metanförordning', href: '/compliance/eu-metanforordning' },
    ],
  },
  {
    id: 'lustgas',
    term: 'Lustgas (N₂O)',
    definition:
      'Lustgas (dikväveoxid, N₂O) är en växthusgas med GWP 265 enligt IPCC AR5, som bland annat bildas vid biologiska kväveomvandlingsprocesser i reningsverk och vid gödselhantering. Även små lustgasutsläpp får därför stor klimatpåverkan.',
    links: [{ label: 'Mätning vid reningsverk', href: '/branscher/reningsverk' }],
  },
  {
    id: 'metan',
    term: 'Metan (CH₄)',
    definition:
      'Metan är en växthusgas och huvudkomponenten i naturgas och biogas, med GWP 28 över 100 år enligt IPCC AR5. Metan läcker bland annat från deponier, biogasanläggningar, avloppsrening samt olje- och gasinfrastruktur.',
    context:
      'Eftersom metan är både en klimatgas och en säljbar produkt innebär metanläckor från biogas- och gasanläggningar även direkta produktionsförluster.',
    links: [
      { label: 'Metanmätning med drönare', href: '/tjanster/metanmatning' },
      { label: 'Läcksökning för biogas', href: '/branscher/biogas' },
    ],
  },
  {
    id: 'matosakerhet',
    term: 'Mätosäkerhet',
    definition:
      'Mätosäkerhet är det kvantifierade intervall inom vilket ett mätvärdes sanna värde bedöms ligga, med hänsyn till osäkerhetskällor som sensorprecision, kalibrering, vindförhållanden och metodik. En mätning utan redovisad osäkerhet kan inte granskas eller jämföras.',
    context:
      'Revisorer och tillsynsmyndigheter förväntar sig att rapporterade mätvärden åtföljs av dokumenterad mätosäkerhet – det skiljer verifierbar mätdata från indikativa värden.',
    links: [{ label: 'Metodik och kvalitetssäkring', href: '/tjanster/metodik' }],
  },
  {
    id: 'ogi',
    term: 'OGI (Optical Gas Imaging)',
    definition:
      'OGI är en teknik där en infraröd kamera gör gasplymer synliga i realtid genom att avbilda våglängder där kolväten absorberar infrarött ljus. OGI används för att snabbt lokalisera läckor visuellt, men kvantifierar inte utsläppets storlek.',
    context:
      'OGI och TDLAS kompletterar varandra: OGI visar var läckan finns, TDLAS mäter hur mycket som läcker.',
    links: [{ label: 'OGI-kamera med drönare', href: '/tjanster/ogi-kamera' }],
  },
  {
    id: 'ogmp',
    term: 'OGMP 2.0 (Oil & Gas Methane Partnership)',
    definition:
      'OGMP 2.0 är FN:s rapporteringsramverk för metanutsläpp inom olje- och gassektorn, med fem rapporteringsnivåer där nivå 4 och 5 kräver källspecifika mätningar respektive mätbaserad verifiering på anläggningsnivå.',
    links: [
      { label: 'Guide: OGMP 2.0', href: '/compliance/ogmp' },
      { label: 'Plymmätning', href: '/tjanster/plymmating' },
    ],
  },
  {
    id: 'plymmatning',
    term: 'Plymmätning (massbalansmetod)',
    definition:
      'Plymmätning är en metod där gaskoncentrationer mäts i ett tvärsnitt nedvinds om en anläggning och kombineras med vinddata för att beräkna det totala utsläppsflödet, vanligen i kg per timme. Metoden kallas även massbalans- eller flux wall-mätning.',
    context:
      'Plymmätning fångar anläggningens samlade utsläpp inklusive källor som är svåra att hitta individuellt, och används bland annat för mätbaserad verifiering enligt OGMP 2.0 nivå 5.',
    links: [{ label: 'Plymmätning med drönare', href: '/tjanster/plymmating' }],
  },
  {
    id: 'ppm',
    term: 'ppm (parts per million)',
    definition:
      'ppm anger en gasandel i miljondelar av den omgivande luften och är standardenheten för uppmätta gaskoncentrationer. 1 ppm metan innebär en metanmolekyl per miljon luftmolekyler; bakgrundshalten av metan i atmosfären är cirka 2 ppm.',
  },
  {
    id: 'punktutslapp',
    term: 'Punktutsläpp',
    definition:
      'Punktutsläpp är utsläpp som lämnar en känd, definierad utsläppspunkt som en skorsten, ventil eller ett avgasrör. De kan mätas med fasta mätsystem i utsläppspunkten eller beräknas från processdata, till skillnad från diffusa utsläpp.',
    links: [{ label: 'Diffusa utsläpp – guide', href: '/blogg/diffusa-utslapp-guide' }],
  },
  {
    id: 'scope-1',
    term: 'Scope 1, 2 och 3',
    definition:
      'Scope 1 är verksamhetens direkta utsläpp från egna eller kontrollerade källor, Scope 2 är indirekta utsläpp från inköpt energi och Scope 3 är övriga indirekta utsläpp i värdekedjan, enligt GHG-protokollets indelning. Diffusa gasläckage tillhör Scope 1.',
    context:
      'För anläggningar med diffusa utsläpp är Scope 1 ofta den post som har störst mätosäkerhet – och därmed störst nytta av faktisk mätning.',
    links: [{ label: 'CSRD & Scope 1', href: '/compliance/csrd' }],
  },
  {
    id: 'smp',
    term: 'SMP (Svenska Miljörapporteringsportalen)',
    definition:
      'SMP är Naturvårdsverkets portal där tillståndspliktiga verksamheter i Sverige lämnar sin årliga miljörapport, inklusive utsläpp till luft. Rapporterade värden ska bygga på bästa tillgängliga underlag, vilket driver mot mätdata framför schabloner.',
    links: [{ label: 'Miljörapportering & SMP', href: '/compliance/miljorapportering' }],
  },
  {
    id: 'tdlas',
    term: 'TDLAS (Tunable Diode Laser Absorption Spectroscopy)',
    definition:
      'TDLAS är en laserbaserad mätteknik där en diodlaser stäms av till en specifik gas absorptionslinje, vilket ger kvantitativ koncentrationsmätning med hög selektivitet för just den gasen – vanligen metan. Tekniken påverkas därför minimalt av andra gaser i omgivningen.',
    context:
      'TDLAS-sensorer monterade på drönare gör det möjligt att kartlägga metankoncentrationer över stora ytor med GPS-kopplade mätvärden.',
    links: [{ label: 'Metanmätning med TDLAS', href: '/tjanster/metanmatning' }],
  },
  {
    id: 'voc',
    term: 'VOC (flyktiga organiska ämnen)',
    definition:
      'VOC (Volatile Organic Compounds) är ett samlingsnamn för organiska ämnen som lätt avdunstar vid rumstemperatur, exempelvis lösningsmedel och kolväten från petrokemisk industri. VOC bidrar till marknära ozon och kan vara hälsoskadliga.',
    links: [{ label: 'Gasdetektion', href: '/tjanster/gasdetektion' }],
  },
]

const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE_URL}/ordlista#termset`,
  name: 'Ordlista: utsläppsmätning och gasdetektion',
  description:
    'Definitioner av centrala begrepp inom drönarbaserad utsläppsmätning, gasdetektion och klimatrapportering.',
  inLanguage: 'sv-SE',
  url: `${SITE_URL}/ordlista`,
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    '@id': `${SITE_URL}/ordlista#${t.id}`,
    name: t.term,
    description: t.definition,
    inDefinedTermSet: `${SITE_URL}/ordlista#termset`,
  })),
}

export default function OrdlistaPage() {
  return (
    <>
      <JsonLd data={definedTermSetSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Ordlista', href: '/ordlista' },
      ]} />

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold sm:text-4xl">Ordlista: utsläppsmätning och gasdetektion</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            <strong className="text-white">Den här ordlistan definierar de centrala begreppen inom
            drönarbaserad utsläppsmätning, gasdetektion och klimatrapportering.</strong>{' '}
            Varje term förklaras med en fristående definition och länkar vidare till fördjupning.
            Termerna är sorterade alfabetiskt.
          </p>

          {/* Termindex */}
          <nav aria-label="Termindex" className="mt-8 flex flex-wrap gap-2">
            {terms.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="rounded border border-slate-700/60 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              >
                {t.term.split(' (')[0]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <div className="space-y-12">
            {terms.map((t) => (
              <article key={t.id} id={t.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold sm:text-2xl text-white">{t.term}</h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  <strong className="text-white">{t.definition}</strong>
                </p>
                {t.context && (
                  <p className="mt-3 text-slate-400 leading-relaxed">{t.context}</p>
                )}
                {t.links && t.links.length > 0 && (
                  <p className="mt-3 text-sm">
                    {t.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && <span className="text-slate-600 mx-2">·</span>}
                        <Link href={l.href} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {l.label} →
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Behöver ni mätdata bakom begreppen?"
        description="Kontakta oss för en genomgång av hur drönarbaserad mätning kan användas i er verksamhet och rapportering."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <RelatedContent items={[
        { title: 'Vanliga frågor', href: '/faq', description: 'Svar på de vanligaste frågorna om drönarbaserad utsläppsmätning.' },
        { title: 'Metodik och kvalitetssäkring', href: '/tjanster/metodik', description: 'Hur mätdata kvalitetssäkras från kalibrering till leverans.' },
        { title: 'Diffusa utsläpp – guide', href: '/blogg/diffusa-utslapp-guide', description: 'Djupgående artikel om vad diffusa utsläpp är och hur de mäts.' },
      ]} />
    </>
  )
}
