const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, 'ad-line-guide.html');
  await page.goto(filePath);
  await page.pdf({
    path: path.resolve(__dirname, 'ad-line-guide.pdf'),
    format: 'A4',
    margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
    printBackground: true,
  });
  await browser.close();
})();
