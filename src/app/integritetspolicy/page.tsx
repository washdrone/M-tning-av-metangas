import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Integritetspolicy & dataskydd',
  description: 'EcoDrones integritetspolicy och dataskydd. Läs om hur vi hanterar personuppgifter och mätdata i samband med våra tjänster.',
  alternates: { canonical: '/integritetspolicy' },
  robots: { index: true, follow: true },
}

const dataPolicyItems = [
  { question: 'Hur bestäms hanteringen av anläggningsdata?', answer: 'Åtkomst, överföring, lagring, sekretess och leveransformat behöver avtalas för uppdraget. Beskriv era krav före beställning.' },
  { question: 'Vilket underlag ska vi skicka i första kontakten?', answer: 'Beskriv anläggningen och mätbehovet. Undvik känsliga anläggningsritningar och personuppgifter som inte behövs för förfrågan. Överföringssätt för ytterligare material bestäms i fortsatt kontakt.' },
]

export default function IntegritetspolicyPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Integritetspolicy', href: '/integritetspolicy' },
      ]} />

      <article className="section-padding">
        <div className="container-narrow max-w-3xl [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_p]:mt-3 [&_p]:text-slate-300 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-slate-300 [&_a]:text-cyan-400 [&_a:hover]:text-cyan-300">
          <h1 className="text-3xl font-bold sm:text-4xl">Integritetspolicy</h1>
          <p className="!text-slate-500 text-sm">Senast uppdaterad: 2026-09-10</p>

          <h2>1. Personuppgiftsansvarig</h2>
          <p>
            EcoDrone är personuppgiftsansvarig för behandlingen
            av personuppgifter som samlas in via denna webbplats.
          </p>
          <p>Kontakt: <a href="mailto:info@ecodrone.se">info@ecodrone.se</a></p>

          <h2>2. Vilka uppgifter vi samlar in</h2>
          <p>Vi samlar in personuppgifter som du frivilligt lämnar via vårt kontaktformulär:</p>
          <ul>
            <li>Företagsnamn</li>
            <li>Kontaktperson (namn)</li>
            <li>E-postadress och telefonnummer om du lämnar det</li>
            <li>Information om ert mätbehov (typ av uppdrag, plats, tidsram, beskrivning)</li>
          </ul>

          <h2>3. Ändamål och rättslig grund</h2>
          <p>Vi behandlar uppgifterna för att:</p>
          <ul>
            <li>Hantera och besvara er förfrågan (rättslig grund: samtycke)</li>
            <li>Ta fram offert eller förslag på upplägg (rättslig grund: berättigat intresse)</li>
          </ul>
          <p>Vi använder aldrig era uppgifter för marknadsföring utan separat samtycke.</p>

          <h2>4. Lagring och radering</h2>
          <p>
            Personuppgifter lagras så länge det behövs för att hantera er förfrågan, dock
            aldrig längre än 12 månader efter senaste kontakt om inget uppdrag inleds.
            Vid pågående uppdrag lagras uppgifterna under uppdragstiden plus 24 månader.
          </p>

          <h2>5. Delning med tredje part</h2>
          <p>
            Vi säljer aldrig personuppgifter. Uppgifter kan delas med tekniska
            underleverantörer (t.ex. e-posttjänst) som behövs för att hantera förfrågan,
            under samma skyddsnivå.
          </p>

          <h2>6. Dina rättigheter</h2>
          <p>Enligt GDPR har du rätt att:</p>
          <ul>
            <li>Begära tillgång till dina personuppgifter</li>
            <li>Begära rättelse av felaktiga uppgifter</li>
            <li>Begära radering av dina uppgifter</li>
            <li>Invända mot behandlingen</li>
            <li>Begära dataportabilitet</li>
          </ul>
          <p>
            Kontakta oss på <a href="mailto:info@ecodrone.se">info@ecodrone.se</a> för att
            utöva dina rättigheter. Du har även rätt att lämna klagomål till
            Integritetsskyddsmyndigheten (IMY).
          </p>

          <h2>7. Webbanalys</h2>
          <p>
            Google Analytics laddas när du väljer att tillåta webbanalys. Analysen används för att förstå sidbesök och hur kontaktformuläret används. Fritext, namn, telefonnummer och e-postadress från formuläret skickas inte som analysfält. Du kan avstå eller ändra ditt val via Inställningar för webbanalys längst ner på sidan.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Ditt val om webbanalys sparas lokalt i webbläsaren. Google Analytics kan använda analyscookies efter att du har tillåtit analys. Om du avstår laddas inte analysverktyget. Formuläret fungerar även när du avstår.
          </p>

          <h2>9. Ändringar</h2>
          <p>
            Vi kan uppdatera denna policy vid behov. Senaste versionen finns alltid på denna
            sida med angivet datum.
          </p>
        </div>
      </article>

      {/* Dataskydd & Konfidentialitet – mätdata */}
      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">Dataskydd &amp; konfidentialitet – mätdata</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Mätdata från er anläggning är affärskänslig. Hanteringen behöver vara tydlig i uppdragsavtalet.
          </p>
        </div>
      </section>

      <FaqAccordion items={dataPolicyItems} heading="" />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-dark p-6 border-l-2 border-l-cyan-500">
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Databehandlaravtal (DPA):</strong>{' '}
              Om ett personuppgiftsbiträdesavtal behövs ska ansvar och villkor klargöras innan uppdragsstart. Kontakta oss om era dataskydds- och sekretesskrav.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
