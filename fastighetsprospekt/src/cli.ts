#!/usr/bin/env -S npx tsx
/**
 * CLI för fastighetsprospekt.
 *
 * Exempel:
 *   npm run prospekt -- --source csv --file data/exempel.csv --out out.csv
 *   npm run prospekt -- --source csv --file data/exempel.csv \
 *     --scopes fasadtvatt,taktvatt,fonsterputs --min-confidence 0.6 --format json
 */

import { writeFile } from 'node:fs/promises'
import { parseArgs } from 'node:util'
import { runPipeline } from './pipeline'
import { toCsvExport, toJson } from './export'
import { CsvSource } from './sources/csv-source'
import type { ProspectSource } from './sources/source'
import type { MaintenanceDecisionScope } from './types'

const VALID_SCOPES: MaintenanceDecisionScope[] = [
  'fasadtvatt',
  'taktvatt',
  'fonsterputs',
  'yttre-underhall-generellt',
  'upphandling',
]

function fail(message: string): never {
  console.error(`Fel: ${message}`)
  process.exit(1)
}

function parseScopes(value: string | undefined): MaintenanceDecisionScope[] | undefined {
  if (!value) return undefined
  const parts = value.split(',').map((s) => s.trim()).filter(Boolean)
  for (const p of parts) {
    if (!(VALID_SCOPES as string[]).includes(p)) {
      fail(`okänt beslutsområde "${p}". Giltiga: ${VALID_SCOPES.join(', ')}`)
    }
  }
  return parts as MaintenanceDecisionScope[]
}

async function main(): Promise<void> {
  const { values } = parseArgs({
    options: {
      source: { type: 'string', default: 'csv' },
      file: { type: 'string' },
      scopes: { type: 'string' },
      'min-confidence': { type: 'string' },
      'legal-basis': { type: 'string', default: 'legitimate-interest' },
      'retention-until': { type: 'string' },
      'include-empty': { type: 'boolean', default: false },
      format: { type: 'string', default: 'csv' },
      out: { type: 'string' },
      help: { type: 'boolean', short: 'h', default: false },
    },
  })

  if (values.help) {
    printHelp()
    return
  }

  const sources: ProspectSource[] = []

  switch (values.source) {
    case 'csv': {
      if (!values.file) fail('--file krävs för --source csv')
      sources.push(new CsvSource(values.file as string))
      break
    }
    case 'commercial-api': {
      fail(
        'commercial-api kräver att du konfigurerar din dataleverantör i kod ' +
          '(se src/sources/commercial-api-source.ts). Tjänsten gissar aldrig ' +
          'leverantör, endpoint eller fältmappning.',
      )
    }
    default:
      fail(`okänd källa "${values.source}". Stödda: csv`)
  }

  const minConfidence = values['min-confidence']
    ? Number(values['min-confidence'])
    : undefined
  if (minConfidence !== undefined && (Number.isNaN(minConfidence) || minConfidence < 0 || minConfidence > 1)) {
    fail('--min-confidence måste vara ett tal mellan 0 och 1')
  }

  const result = await runPipeline(sources, {
    scopes: parseScopes(values.scopes),
    minConfidence,
    legalBasis: values['legal-basis'] as never,
    retentionUntil: values['retention-until'] as string | undefined,
    requireContact: !values['include-empty'],
  })

  const format = values.format === 'json' ? 'json' : 'csv'
  const output = format === 'json' ? toJson(result.prospects) : toCsvExport(result.prospects)

  if (values.out) {
    await writeFile(values.out as string, output, 'utf8')
    console.error(`Skrev ${result.prospects.length} prospekt till ${values.out}`)
  } else {
    process.stdout.write(output)
  }

  // Statistik till stderr så att stdout förblir ren data.
  const s = result.stats
  console.error(
    `\nStatistik: ${s.sources} källa/-or, ${s.rawRecords} råposter, ` +
      `${s.companies} bolag, ${s.contactsMatched}/${s.contactsTotal} matchande kontakter, ` +
      `${s.rejected} avvisade poster.`,
  )
}

function printHelp(): void {
  console.log(`fastighetsprospekt – samlar svenska fastighetsbolag och beslutsfattare för yttre underhåll

Användning:
  npm run prospekt -- --source csv --file <fil.csv> [flaggor]

Flaggor:
  --source <namn>          Datakälla. Stödd: csv. (commercial-api kräver kodkonfiguration)
  --file <sökväg>          CSV-fil (krävs för --source csv)
  --scopes <lista>         Kommaseparerade beslutsområden. Giltiga:
                           ${VALID_SCOPES.join(', ')}
  --min-confidence <0-1>   Lägsta rollkonfidens (default 0.5)
  --legal-basis <grund>    GDPR-grund (default legitimate-interest)
  --retention-until <ISO>  Gallringsdatum för personuppgifter
  --include-empty          Ta även med bolag utan matchande kontakt
  --format <csv|json>      Utdataformat (default csv)
  --out <sökväg>           Skriv till fil i stället för stdout
  -h, --help               Visa denna hjälp
`)
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
