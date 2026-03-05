import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { CtaBand } from '@/components/CtaBand'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mätmetodik – kvalitetssäkrad process | EcoDrone',
  description:
    'EcoDrones kvalitetssäkrade mätmetodik i 5 steg: planering, datainsamling, bearbetning, osäkerhetsestimering och spårbarhet. Dokumenterad och reproducerbar.',
  alternates: { canonical: '/tjanster/metodik' },
  openGraph: {
    title: 'Mätmetodik – kvalitetssäkrad process | EcoDrone',
    description:
      'Vår 5-stegs mätmetodik säkerställer kvalitet, spårbarhet och reproducerbarhet i varje mätuppdrag.',
    url: '/tjanster/metodik',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mätmetodik',
  provider: { '@type': 'Organization', name: 'EcoDrone Sverige AB' },
  description:
    'Kvalitetssäkrad mätmetodik för drönarbaserad gasmätning med dokumenterad planering, datainsamling, bearbetning, osäkerhetsestimering och spårbarhet.',
  areaServed: { '@type': 'Country', name: 'SE' },
  serviceType: 'Mätmetodik',
}

export default function MetodikPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Breadcrumbs items={[
        { name: 'Hem', href: '/' },
        { name: 'Tjänster', href: '/tjanster' },
        { name: 'Metodik', href: '/tjanster/metodik' },
      ]} />

      <Hero
        title="Vår mätmetodik"
        subtitle="Kvalitetssäkrad mätprocess i fem steg – från planering till spårbar leverans. Varje mätuppdrag följer samma dokumenterade metodik för att säkerställa reproducerbarhet, jämförbarhet och regulatorisk acceptans."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
        trustItems={['5-stegs QA-process', 'Dokumenterad mätosäkerhet', 'Spårbar metodik']}
      />

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Kvalitet genom systematik</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Mätresultat är bara värdefulla om de är tillförlitliga. Därför följer varje
            EcoDrone-uppdrag en dokumenterad kvalitetssäkringsprocess som säkerställer att
            resultaten är korrekta, reproducerbara och spårbara. Vår metodik bygger på
            etablerade principer från ISO 14064, GHG Protocol och OGMP 2.0.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Fem steg till kvalitetssäkrade mätresultat</h2>
          <div className="mt-10 space-y-12">
            {[
              {
                step: '1',
                title: 'Planering',
                desc: 'Varje uppdrag börjar med en noggrann planering. Vi analyserar ert mätbehov, kartlägger anläggningens geometri och identifierar potentiella utsläppskällor. Flygvägar, sensorval och mätprotokoll definieras. Vi tar hänsyn till vindförhållanden, luftrumsrestriktioner och säkerhetszoner.',
                items: ['Mätmål och frågeställningar', 'Anläggningskartläggning', 'Sensorval och konfiguration', 'Flygplansplanering', 'Meteorologisk bedömning'],
              },
              {
                step: '2',
                title: 'Datainsamling',
                desc: 'Sensorer kalibreras mot certifierade referensgaser före varje uppdrag. Drönaren flyger förprogrammerade rutter med systematisk täckning av mätområdet. Gaskoncentrationer, GPS-position, höjd och meteorologiska data registreras kontinuerligt.',
                items: ['Sensorkalibrering mot referensgaser', 'Systematisk flygning med GPS-loggning', 'Parallell meteorologisk datainsamling', 'Realtids kvalitetskontroll under flygning'],
              },
              {
                step: '3',
                title: 'Databearbetning',
                desc: 'Rådata genomgår kvalitetskontroll – outliers, sensorfel och bakgrundskorrektion hanteras enligt dokumenterade rutiner. Data interpoleras till kartlager och emissioner beräknas med lämplig metodik (massbalans, IDM eller direktintegration).',
                items: ['Kvalitetskontroll och filtrering', 'Bakgrundskorrektion', 'Interpolering och kartläggning', 'Emissionsberäkning'],
              },
              {
                step: '4',
                title: 'Osäkerhetsestimering',
                desc: 'Varje mätresultat levereras med dokumenterad mätosäkerhet. Vi identifierar och kvantifierar osäkerhetskällor – sensorkalibrering, spatial interpolering, vindvariabilitet och beräkningsantaganden – och propagerar dem till slutresultatet.',
                items: ['Identifiering av osäkerhetskällor', 'Kvantifiering per källa', 'Propagering till totalosäkerhet', 'Rapportering med konfidensintervall'],
              },
              {
                step: '5',
                title: 'Spårbarhet',
                desc: 'Alla steg dokumenteras fullständigt – från kalibreringsintyg och flygloggar till bearbetningsparametrar och beräkningsantaganden. Det säkerställer att resultaten kan verifieras, reproduceras och jämföras med framtida mätningar.',
                items: ['Kalibreringsintyg med referensgasintyg', 'Flygloggar med GPS-spår', 'Bearbetningsparametrar och versionshantering', 'Komplett revisionskedja'],
              },
            ].map((section) => (
              <div key={section.step} className="flex gap-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg font-bold text-white">
                  {section.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <p className="mt-3 text-dark-300 leading-relaxed">{section.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-dark-400">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-darker">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold sm:text-3xl">Standarder och ramverk</h2>
          <p className="mt-5 text-dark-300 leading-relaxed">
            Vår metodik är utvecklad med hänsyn till etablerade standarder och ramverk
            för emissionsmätning och växthusgasrapportering:
          </p>
          <div className="mt-6 space-y-3">
            {[
              { bold: 'ISO 14064', text: '– specifikation för kvantifiering och rapportering av växthusgasutsläpp.' },
              { bold: 'GHG Protocol', text: '– riktlinjer för företags klimatredovisning och Scope 1-rapportering.' },
              { bold: 'OGMP 2.0', text: '– bästa praxis för mätning och rapportering av metanutsläpp inom olja och gas.' },
              { bold: 'EN 15259', text: '– krav på mätplaner och mätkvalitet vid emissionsmätning.' },
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

      <CtaBand
        heading="Frågor om vår metodik?"
        description="Kontakta oss om ni vill veta mer om hur vi kvalitetssäkrar våra mätningar och hur metodiken anpassas för ert specifika behov."
        ctaText="Kontakta oss"
        ctaHref="/kontakt"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-bold">Relaterat</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/tjanster/leveranser" className="card-dark px-4 py-2.5 text-sm text-dark-300 hover:text-white hover:border-dark-600 transition-colors">
              Leveranser
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
