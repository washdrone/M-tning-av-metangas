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
  {
    question: 'Vilka data samlar EcoDrone in vid ett uppdrag?',
    answer: 'Vi samlar in mätdata (gaskoncentrationer, GPS-koordinater, tidsstämplar), meteorologiska data (vindhastighet, vindriktning, temperatur, lufttryck) samt flygloggar. Inga personuppgifter samlas in som en del av mätuppdraget.',
  },
  {
    question: 'Lagras mätdata hos EcoDrone efter leverans?',
    answer: 'Rådata lagras i krypterat format i 12 månader efter uppdragets slutförande för att möjliggöra kompletterande analyser eller revisionsförfrågningar. Därefter raderas all data om inte kunden begärt förlängd lagring.',
  },
  {
    question: 'Kan EcoDrone dela mätdata med tredje part?',
    answer: 'Nej. Mätdata delas aldrig med tredje part — inklusive myndigheter, konkurrenter eller databrokers — utan skriftligt godkännande från kunden. Det enda undantaget är om EcoDrone är föremål för lagakraftvunnen domstolsorder.',
  },
  {
    question: 'Var lagras data fysiskt?',
    answer: 'All data lagras på servrar inom EU med ISO 27001-certifierade leverantörer. Ingen data överförs till länder utanför EES.',
  },
  {
    question: 'Hur hanteras känsliga anläggningsdata?',
    answer: 'Vi förstår att utsläppsdata från er anläggning är affärskänslig. Alla EcoDrone-medarbetare undertecknar sekretessavtal (NDA) innan uppdragsstart. På begäran ingår vi separat databehandlaravtal (DPA) anpassat till er compliance-avdelnings krav.',
  },
  {
    question: 'Vad händer med bildmaterial från OGI-inspektioner?',
    answer: 'Allt bildmaterial — termiska bilder, videosekvenser och georefererade foton — levereras till kunden och raderas från EcoDrones system efter leveransgodkännande, om inte kunden begärt arkivering.',
  },
]

export default function IntegritetspolicyPage() {
  return (
    <>
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Integritetspolicy', href: '/integritetspolicy' },
      ]} />

      <article className="section-padding">
        <div className="container-narrow max-w-3xl [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_p]:mt-3 [&_p]:text-dark-300 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-dark-300 [&_a]:text-brand-400 [&_a:hover]:text-brand-300">
          <h1 className="text-3xl font-bold sm:text-4xl">Integritetspolicy</h1>
          <p className="!text-dark-500 text-sm">Senast uppdaterad: 2026-02-20</p>

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
            <li>E-postadress</li>
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
            Om webbanalys (t.ex. Google Analytics) används på webbplatsen samlas anonymiserad
            besöksdata in med IP-anonymisering aktiverad. Inga personidentifierbara uppgifter
            lagras via analysen.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Webbplatsen använder nödvändiga cookies för att fungera tekniskt. Om analysverktyg
            aktiveras kan analyticscookies tillkomma. Dessa sätts först efter att du godkänt
            det via cookie-bannern.
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
          <p className="mt-4 text-dark-300 leading-relaxed">
            Mätdata från er anläggning är affärskänslig. Här är våra åtaganden — utan juridisk finstilt.
          </p>
        </div>
      </section>

      <FaqAccordion items={dataPolicyItems} heading="" />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-dark p-6 border-l-2 border-l-accent-500">
            <p className="text-dark-300 leading-relaxed">
              <strong className="text-white">Databehandlaravtal (DPA):</strong>{' '}
              Alla uppdrag inkluderar ett standardiserat databehandlaravtal.
              Kunder med specifika compliance-krav kan begära anpassat DPA
              utformat för er organisations krav — kontakta oss innan uppdragsstart.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
