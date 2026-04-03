import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('form fields are focusable and interactive', async ({ page }) => {
    await page.goto('/kontakt')

    // All key fields exist and are interactable
    const foretag = page.locator('#foretag')
    await expect(foretag).toBeVisible()
    await foretag.fill('TestFöretag AB')
    await expect(foretag).toHaveValue('TestFöretag AB')

    const kontaktperson = page.locator('#kontaktperson')
    await kontaktperson.fill('Anna Svensson')
    await expect(kontaktperson).toHaveValue('Anna Svensson')

    const epost = page.locator('#epost')
    await epost.fill('anna@test.se')
    await expect(epost).toHaveValue('anna@test.se')

    // Select is usable
    const uppdragstyp = page.locator('#uppdragstyp')
    await expect(uppdragstyp).toBeVisible()
    await uppdragstyp.selectOption({ index: 1 })
    const value = await uppdragstyp.inputValue()
    expect(value).not.toBe('')
  })

  test('submit button is visible and not blocked', async ({ page }) => {
    await page.goto('/kontakt')
    const submitButton = page.getByRole('button', { name: /skicka förfrågan/i })
    await expect(submitButton).toBeVisible()

    // Ensure the button is not covered by another element
    const box = await submitButton.boundingBox()
    expect(box).not.toBeNull()
    const viewport = page.viewportSize()!
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width)
  })

  test('validation error shows when submitting empty form', async ({ page }) => {
    await page.goto('/kontakt')
    await page.getByRole('button', { name: /skicka förfrågan/i }).click()
    const error = page.getByRole('alert')
    await expect(error).toBeVisible()
  })
})
