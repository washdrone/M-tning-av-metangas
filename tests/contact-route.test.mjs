import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import test from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'
const require = createRequire(import.meta.url)
function load(file, customRequire = require) {
  const source = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const exports = {}
  vm.runInNewContext(source, { exports, require: customRequire, process: { env: { RESEND_API_KEY: 'test-only' } }, console: { error() {}, log() {} }, TextEncoder })
  return exports
}
const config = load('../src/contact-config.ts')
const valid = { foretag: 'Testbolag', kontaktperson: 'Testperson', epost: 'test@example.com', gdpr: true }
function setup(result = { data: { id: 'test-id' }, error: null }) {
  const messages = []
  const route = load('../src/app/api/kontakt/route.ts', name => {
    if (name === '@/contact-config') return config
    if (name === 'resend') return { Resend: class { emails = { send: async message => { messages.push(message); return result } } } }
    return require(name)
  })
  return { messages, post: body => route.POST(new Request('http://localhost/api/kontakt', { method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body) })) }
}
for (const [name, body] of [
  ['malformed JSON', '{'], ['null body', 'null'], ['array body', []],
  ['missing required fields', {}], ['whitespace company', { ...valid, foretag: '  ' }],
  ['invalid email', { ...valid, epost: 'no-email' }], ['missing consent', { ...valid, gdpr: false }],
  ['non-string field', { ...valid, telefon: {} }], ['long message', { ...valid, beskrivning: 'a'.repeat(5001) }],
  ['header newline', { ...valid, foretag: 'Test\r\nInjected' }], ['unknown assignment', { ...valid, uppdragstyp: 'unknown' }],
]) test(`rejects ${name} without sending`, async () => { const api = setup(); assert.equal((await api.post(body)).status, 400); assert.equal(api.messages.length, 0) })
test('accepts request without technical method selection and escapes email HTML', async () => {
  const api = setup(); const res = await api.post({ ...valid, foretag: ' <script>alert(1)</script> ' })
  assert.equal(res.status, 200); assert.equal(api.messages.length, 1)
  assert.match(api.messages[0].html, /&lt;script&gt;/); assert.doesNotMatch(api.messages[0].html, /<script>/)
  assert.match(api.messages[0].subject, /hjälp att välja mätning/)
})
test('provider rejection is not a successful lead and does not disclose provider error', async () => {
  const api = setup({ data: null, error: { message: 'provider-secret-detail' } }); const res = await api.post(valid)
  assert.equal(res.status, 502); assert.doesNotMatch(await res.text(), /provider-secret/)
})
test('missing provider message ID is not success', async () => { const api = setup({ data: null, error: null }); assert.equal((await api.post(valid)).status, 502) })
test('oversized payload rejected', async () => { const api = setup(); assert.equal((await api.post('a'.repeat(16001))).status, 413); assert.equal(api.messages.length, 0) })
