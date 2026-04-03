import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.SITE_URL || 'http://localhost:3000'

const chromiumLaunchOptions = {
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_PATH ||
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
}

export default defineConfig({
  testDir: './e2e',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'iPhone 13',
      use: {
        // Use Chromium with iPhone 13 viewport/UA (WebKit not available)
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'Pixel 7',
      use: {
        ...devices['Pixel 7'],
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'iPad Mini',
      use: {
        // Use Chromium with iPad Mini viewport/UA (WebKit not available)
        ...devices['iPad Mini'],
        defaultBrowserType: 'chromium',
        launchOptions: chromiumLaunchOptions,
      },
    },
  ],
  webServer: process.env.SITE_URL
    ? undefined
    : {
        command: 'npm run dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 60000,
      },
})
