import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import test from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'
import React from 'react'
import Renderer from 'react-test-renderer'
const { act } = Renderer
const require = createRequire(import.meta.url)
function load(file, mocks = {}, globals = {}) {
  const code = ts.transpileModule(readFileSync(new URL(file, import.meta.url), 'utf8'), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const exports = {}
  vm.runInNewContext(code, { exports, require: name => mocks[name] ?? require(name), URLSearchParams, console, ...globals })
  return exports
}
const config = load('../src/contact-config.ts')
function analyticsHarness(saved) {
  const events = [], cookies = new Map(), storage = new Map(saved ? [['ecodrone-analytics-consent-v1', saved]] : [])
  const localStorage = { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) }
  const window = { location: { origin: 'https://www.ecodrone.se', pathname: '/', hostname: 'www.ecodrone.se' }, gtag: undefined }
  let pathname = '/'
  const { Analytics, trackEvent } = load('../src/components/Analytics.tsx', { 'next/script': { default: props => React.createElement('script-stub', props) }, 'next/navigation': { usePathname: () => pathname } }, { window, localStorage, document: { get cookie() { return [...cookies].join(';') }, set cookie(value) { events.push(value) } } })
  let tree
  act(() => { tree = Renderer.create(React.createElement(Analytics)) })
  return { tree, window, storage, trackEvent, renderPath(path) { pathname = path; act(() => tree.update(React.createElement(Analytics))) } }
}
test('analytics script is absent before consent and after decline', () => {
  const h = analyticsHarness(); assert.equal(h.tree.root.findAllByType('script-stub').length, 0)
  act(() => h.tree.root.findAllByType('button').find(b => b.children.includes('Avstå')).props.onClick())
  assert.equal(h.tree.root.findAllByType('script-stub').length, 0)
  assert.equal(h.storage.get('ecodrone-analytics-consent-v1'), 'denied')
  h.tree.unmount()
})
test('grant loads analytics, tracks paths once, revoke disables analytics', () => {
  const h = analyticsHarness()
  act(() => h.tree.root.findAllByType('button').find(b => b.children.includes('Tillåt analys')).props.onClick())
  const script = h.tree.root.findByType('script-stub'); act(() => script.props.onReady())
  const pageViews = () => h.window.dataLayer.map(args => [...args]).filter(args => args[1] === 'page_view')
  assert.equal(pageViews().length, 1)
  h.renderPath('/kontakt'); assert.equal(pageViews().length, 2)
  h.renderPath('/kontakt'); assert.equal(pageViews().length, 2)
  act(() => h.tree.root.findAllByType('button').find(b => b.children.includes('Inställningar för webbanalys')).props.onClick())
  act(() => h.tree.root.findAllByType('button').find(b => b.children.includes('Avstå')).props.onClick())
  assert.equal(h.window['ga-disable-G-8X2EQZZFK4'], true)
  assert.equal(h.tree.root.findAllByType('script-stub').length, 0)
  const eventCount = h.window.dataLayer.length; h.trackEvent('generate_lead')
  assert.equal(h.window.dataLayer.length, eventCount)
  h.tree.unmount()
})
test('saved decline never loads analytics', () => {
  const h = analyticsHarness('denied'); assert.equal(h.tree.root.findAllByType('script-stub').length, 0); h.tree.unmount()
})
function formHarness(search, ok) {
  const events = [], requests = []
  const { ContactForm } = load('../src/components/ContactForm.tsx', { '@/contact-config': config, './Analytics': { trackEvent: (...args) => events.push(args) } }, { window: { location: { search } }, fetch: async (url, init) => { requests.push(JSON.parse(init.body)); return { ok, json: async () => ({ error: 'Testfel' }) } } })
  let tree; act(() => { tree = Renderer.create(React.createElement(ContactForm)) })
  return { tree, events, requests }
}
test('buyer intent prefills the assignment, unknown intent keeps help option', () => {
  for (const [query, expected] of [['?behov=deponi', 'Metanmätning – deponi'], ['?behov=unknown', config.HELP_WITH_MEASUREMENT]]) {
    const h = formHarness(query, true)
    assert.equal(h.tree.root.findByProps({ id: 'uppdragstyp' }).props.value, expected)
    assert.equal(h.tree.root.findByType('form').props.noValidate, undefined)
    assert.equal(h.tree.root.findByProps({ id: 'gdpr' }).props.required, true)
    h.tree.unmount()
  }
})
for (const ok of [true, false]) test(`lead event ${ok ? 'is emitted after success' : 'is absent after failure'}`, async () => {
  const h = formHarness('', ok)
  for (const [name, value] of Object.entries({ foretag: 'Test', kontaktperson: 'Test', epost: 'test@example.com' })) {
    act(() => h.tree.root.findByProps({ id: name }).props.onChange({ target: { name, value } }))
  }
  await act(async () => { await h.tree.root.findByType('form').props.onSubmit({ preventDefault() {} }) })
  assert.equal(h.requests.length, 1); assert.equal(h.requests[0].gdpr, true)
  assert.equal(h.events.filter(event => event[0] === 'generate_lead').length, ok ? 1 : 0)
  if (!ok) assert.equal(h.tree.root.findByProps({ id: 'epost' }).props.value, 'test@example.com')
  h.tree.unmount()
})
