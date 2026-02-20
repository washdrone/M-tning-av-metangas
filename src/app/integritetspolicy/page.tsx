import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'WashDrones integritetspolicy. Läs om hur vi hanterar personuppgifter i samband med våra tjänster och webbplats.',
  alternates: { canonical: '/integritetspolicy' },
  robots: { index: true, follow: true },
}

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
            WashDrone (organisationsnummer: [ANGE]) är personuppgiftsansvarig för behandlingen
            av personuppgifter som samlas in via denna webbplats.
          </p>
          <p>Kontakt: <a href="mailto:info@washdrone.se">info@washdrone.se</a></p>

          <h2>2. Vilka uppgifter vi samlar in</h2>
          <p>Vi samlar in personuppgifter som du frivilligt lämnar via vårt kontaktformulär:</p>
          <ul>
            <li>Företagsnamn</li>
            <li>Kontaktperson (namn)</li>
            <li>E-postadress</li>
            <li>Telefonnummer (valfritt)</li>
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
            Kontakta oss på <a href="mailto:info@washdrone.se">info@washdrone.se</a> för att
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
    </>
  )
}
