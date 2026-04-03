import { test, expect } from '@playwright/test'

// Helper to click via JS (works around React hydration timing with Playwright trusted events)
async function jsClick(page: import('@playwright/test').Page, selector: string, nth = 0) {
  await page.evaluate(({ sel, n }) => {
    const els = document.querySelectorAll(sel)
    if (els[n]) (els[n] as HTMLElement).click()
  }, { sel: selector, n: nth })
}

test.describe('FAQ Accordion', () => {
  test('accordion opens and closes', async ({ page }) => {
    await page.goto('/faq')

    const firstButton = page.locator('dt button').first()
    await expect(firstButton).toBeVisible()

    // Initially no answers visible
    expect(await page.locator('dd').count()).toBe(0)

    // Click via JS to work around hydration timing
    await jsClick(page, 'dt button', 0)
    await expect(page.locator('dd').first()).toBeVisible({ timeout: 5000 })

    // Click again to close
    await jsClick(page, 'dt button', 0)
    await expect(page.locator('dd')).toHaveCount(0, { timeout: 5000 })
  })

  test('only one accordion item open at a time', async ({ page }) => {
    await page.goto('/faq')

    await expect(page.locator('dt button').first()).toBeVisible()

    // Open first item
    await jsClick(page, 'dt button', 0)
    await expect(page.locator('dd')).toHaveCount(1, { timeout: 5000 })

    // Open second item
    await jsClick(page, 'dt button', 1)
    await expect(page.locator('dd')).toHaveCount(1, { timeout: 5000 })
  })
})
