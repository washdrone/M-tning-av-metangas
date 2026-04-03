import { test, expect } from '@playwright/test'

test.describe('Responsive layout', () => {
  test('no horizontal overflow on home page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(overflow).toBe(false)
  })

  test('no horizontal overflow on tjanster page', async ({ page }) => {
    await page.goto('/tjanster')
    await page.waitForLoadState('domcontentloaded')

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(overflow).toBe(false)
  })

  test('no horizontal overflow on kontakt page', async ({ page }) => {
    await page.goto('/kontakt')
    await page.waitForLoadState('domcontentloaded')

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(overflow).toBe(false)
  })

  test('no horizontal overflow on branscher/deponier page', async ({ page }) => {
    await page.goto('/branscher/deponier')
    await page.waitForLoadState('domcontentloaded')

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(overflow).toBe(false)
  })

  test('primary CTA is visible and clickable on home page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    // Target the hero CTA link by text
    const cta = page.getByRole('link', { name: 'Boka konsultation' })
    await expect(cta).toBeVisible({ timeout: 10000 })

    const box = await cta.boundingBox()
    expect(box).not.toBeNull()
    const viewport = page.viewportSize()!
    expect(box!.x).toBeGreaterThanOrEqual(0)
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1)
  })

  test('footer is visible at bottom', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
  })

  test('container does not exceed viewport width', async ({ page }) => {
    await page.goto('/')
    const containers = page.locator('.container-wide, .container-narrow')
    const count = await containers.count()

    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await containers.nth(i).boundingBox()
      if (box) {
        const viewport = page.viewportSize()!
        expect(box.x).toBeGreaterThanOrEqual(0)
        expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1)
      }
    }
  })
})
