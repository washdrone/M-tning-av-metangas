import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseCsv, parseCsvWithHeader, toCsv } from './csv'

test('parsar enkel CSV', () => {
  const rows = parseCsv('a,b,c\n1,2,3')
  assert.deepEqual(rows, [['a', 'b', 'c'], ['1', '2', '3']])
})

test('hanterar citerade fält med komma och radbrytning', () => {
  const rows = parseCsv('namn,not\n"Ek, Anna","rad1\nrad2"')
  assert.deepEqual(rows, [['namn', 'not'], ['Ek, Anna', 'rad1\nrad2']])
})

test('hanterar escapade citattecken', () => {
  const rows = parseCsv('x\n"säger ""hej"""')
  assert.deepEqual(rows, [['x'], ['säger "hej"']])
})

test('parseCsvWithHeader mappar rubriker och hoppar tomma rader', () => {
  const objs = parseCsvWithHeader('orgnr,namn\n556677-8899,X AB\n\n5566778800,Y AB\n')
  assert.equal(objs.length, 2)
  assert.deepEqual(objs[0], { orgnr: '556677-8899', namn: 'X AB' })
})

test('toCsv round-trippar med escaping', () => {
  const csv = toCsv([{ a: 'Ek, Anna', b: 'x' }], ['a', 'b'])
  const back = parseCsvWithHeader(csv)
  assert.deepEqual(back[0], { a: 'Ek, Anna', b: 'x' })
})
