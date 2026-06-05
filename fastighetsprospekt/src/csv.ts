/**
 * Minimal CSV-parser och -serialiserare utan externa beroenden.
 *
 * Stödjer citattecken (RFC 4180-stil): fält som omges av " kan innehålla
 * kommatecken, radbrytningar och escapade citattecken ("").
 */

/** Tolkar CSV-text till en lista av rader, där varje rad är en lista av fält. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let field = ''
  let row: string[] = []
  let inQuotes = false

  // Normalisera radslut och ta bort ev. BOM.
  const input = text.replace(/^﻿/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (inQuotes) {
      if (char === '"') {
        if (input[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
  }

  // Sista fältet/raden (om filen inte slutar med radbrytning).
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows
}

/**
 * Tolkar CSV med rubrikrad till en lista av objekt nyckel→värde.
 * Tomma rader hoppas över.
 */
export function parseCsvWithHeader(text: string): Record<string, string>[] {
  const rows = parseCsv(text).filter((r) => r.some((cell) => cell.trim() !== ''))
  if (rows.length === 0) return []

  const headers = (rows[0] ?? []).map((h) => h.trim())
  const out: Record<string, string>[] = []

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i] ?? []
    const obj: Record<string, string> = {}
    headers.forEach((header, idx) => {
      obj[header] = (row[idx] ?? '').trim()
    })
    out.push(obj)
  }

  return out
}

/** Escapar ett fält för CSV-utdata. */
function escapeField(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

/** Serialiserar en lista av objekt till CSV-text med given kolumnordning. */
export function toCsv(rows: Record<string, string>[], columns: string[]): string {
  const lines: string[] = []
  lines.push(columns.map(escapeField).join(','))
  for (const row of rows) {
    lines.push(columns.map((col) => escapeField(row[col] ?? '')).join(','))
  }
  return lines.join('\n') + '\n'
}
