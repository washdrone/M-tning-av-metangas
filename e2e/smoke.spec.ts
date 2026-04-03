import { test, expect } from '@playwright/test'

const pages = [
  { path: '/', name: 'Startsida' },
  { path: '/tjanster', name: 'Tjänster' },
  { path: '/branscher', name: 'Branscher' },
  { path: '/compliance', name: 'Compliance' },
  { path: '/kontakt', name: 'Kontakt' },
  { path: '/faq', name: 'FAQ' },
  { path: '/om-oss', name: 'Om oss' },
  { path: '/case', name: 'Case' },
]

test.describe('Smoke tests', () => {
  for (const page of pages) {
    test(`${page.name} (${page.path}) loads without errors`, async ({ page: p }) => {
      const errors: string[] = []
      p.on('pageerror', (err) => errors.push(err.message))

      const response = await p.goto(page.path)
      expect(response?.status()).toBeLessThan(400)

      // Verify page has content
      await expect(p.locator('body')).not.toBeEmpty()

      // No blocking JS errors from own code
      const ownErrors = errors.filter(
        (e) => !e.includes('gtag') && !e.includes('googletagmanager')
      )
      expect(ownErrors).toHaveLength(0)
    })
  }
})
