const puppeteer = require('puppeteer')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3001')
  await page.type('input', 'Headless Chrome')
  await page.screenshot({ path: 'kuva.png' })
  await browser.close()
}


main()
