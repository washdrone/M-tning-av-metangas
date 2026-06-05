import { test } from 'node:test'
import assert from 'node:assert/strict'
import { classifyTitle } from './roles'

test('teknisk förvaltare får hög konfidens och alla yttre områden', () => {
  const r = classifyTitle('Teknisk förvaltare')
  assert.equal(r.roleCategory, 'teknisk-forvaltare')
  assert.ok(r.confidence >= 0.9)
  assert.ok(r.decisionScopes.includes('fasadtvatt'))
  assert.ok(r.decisionScopes.includes('taktvatt'))
  assert.ok(r.decisionScopes.includes('fonsterputs'))
})

test('inköpschef hamnar i upphandling', () => {
  const r = classifyTitle('Inköpschef')
  assert.equal(r.roleCategory, 'inkop-upphandling')
  assert.deepEqual(r.decisionScopes, ['upphandling'])
})

test('fastighetsskötare är operativ och låg konfidens', () => {
  const r = classifyTitle('Fastighetsskötare')
  assert.equal(r.roleCategory, 'operativ-skotsel')
  assert.ok(r.confidence < 0.5)
  assert.deepEqual(r.decisionScopes, [])
})

test('titel som nämner fasad får konfidensboost', () => {
  const base = classifyTitle('Driftchef')
  const boosted = classifyTitle('Driftchef fasad och tak')
  assert.ok(boosted.confidence > base.confidence)
})

test('saknad titel ger nollklassning', () => {
  const r = classifyTitle(undefined)
  assert.equal(r.roleCategory, 'ovrig')
  assert.equal(r.confidence, 0)
  assert.deepEqual(r.decisionScopes, [])
})

test('okänd titel matchar inget', () => {
  const r = classifyTitle('Kommunikatör')
  assert.equal(r.roleCategory, 'ovrig')
  assert.equal(r.confidence, 0)
})
