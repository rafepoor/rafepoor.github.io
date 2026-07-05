const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: require('os').homedir() + '/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1400 } });
  const logs = [];
  page.on('console', (msg) => logs.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', (err) => logs.push(`pageerror: ${err.message}`));
  await page.goto('http://localhost:5183/Portfolio_Personal/', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Raul Fernando Polanco Ortiz');
  await page.screenshot({ path: '/private/tmp/claude-502/-Users-KEPINEDA-Downloads-Portfolio-Personal/46ee515c-2be8-40dc-8b11-148518333c13/scratchpad/cv-full.png', fullPage: true });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.screenshot({ path: '/private/tmp/claude-502/-Users-KEPINEDA-Downloads-Portfolio-Personal/46ee515c-2be8-40dc-8b11-148518333c13/scratchpad/cv-viewport.png' });
  await page.setViewportSize({ width: 390, height: 900 });
  await page.screenshot({ path: '/private/tmp/claude-502/-Users-KEPINEDA-Downloads-Portfolio-Personal/46ee515c-2be8-40dc-8b11-148518333c13/scratchpad/cv-mobile.png' });
  console.log('LOGS:', JSON.stringify(logs));
  await browser.close();
})();
