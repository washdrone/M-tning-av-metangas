import { test } from 'node:test'
import assert from 'node:assert/strict'
import { normalizeOrgNumber, normalizeRecords } from './normalize'
import type { Provenance, RawRecord } from './types'

const PROV: Provenance = { source: 'csv-import', sourceName: 'test', collectedAt: '2026-06-05T00:00:00.000Z' }

test('normaliserar org.nr i olika format', () => {
  assert.equal(normalizeOrgNumber('556677-8899'), '5566778899')
  assert.equal(normalizeOrgNumber('165566778899'), '5566778899') // 12-siffrigt
  assert.equal(normalizeOrgNumber('5566778899'), '5566778899')
  assert.equal(normalizeOrgNumber('abc'), undefined)
  assert.equal(normalizeOrgNumber(undefined), undefined)
})

test('avvisar poster utan giltigt orgnummer eller namn', () => {
  const records: RawRecord[] = [
    { companyName: 'Saknar orgnr' },
    { orgNumber: '556677-8899' }, // saknar namn
  ]
  const out = normalizeRecords(records, { provenance: PROV, defaultLegalBasis: 'legitimate-interest' })
  assert.equal(out.companies.size, 0)
  assert.equal(out.rejected.length, 2)
})

test('dedupliceras bolag på orgnummer och slår ihop fält', () => {
  const records: RawRecord[] = [
    { orgNumber: '556677-8899', companyName: 'Fastighets AB', website: 'a.se' },
    { orgNumber: '5566778899', companyName: 'Fastighets AB', municipality: 'Stockholm' },
  ]
  const out = normalizeRecords(records, { provenance: PROV, defaultLegalBasis: 'legitimate-interest' })
  assert.equal(out.companies.size, 1)
  const company = out.companies.get('5566778899')
  assert.equal(company?.website, 'a.se')
  assert.equal(company?.municipality, 'Stockholm')
})

test('dedupliceras kontaktpersoner på bolag + namn', () => {
  const records: RawRecord[] = [
    { orgNumber: '5566778899', companyName: 'X AB', contactName: 'Anna Ek', contactTitle: 'Teknisk förvaltare' },
    { orgNumber: '5566778899', companyName: 'X AB', contactName: 'anna ek', contactTitle: 'Teknisk förvaltare' },
  ]
  const out = normalizeRecords(records, { provenance: PROV, defaultLegalBasis: 'legitimate-interest' })
  assert.equal(out.contactsByOrg.get('5566778899')?.length, 1)
})

test('sätter laglig grund och gallringsdatum på personer', () => {
  const records: RawRecord[] = [
    { orgNumber: '5566778899', companyName: 'X AB', contactName: 'Bo Vik', contactTitle: 'Fastighetschef' },
  ]
  const out = normalizeRecords(records, {
    provenance: PROV,
    defaultLegalBasis: 'legitimate-interest',
    retentionUntil: '2027-06-05',
  })
  const contact = out.contactsByOrg.get('5566778899')?.[0]
  assert.equal(contact?.legalBasis, 'legitimate-interest')
  assert.equal(contact?.retentionUntil, '2027-06-05')
})
