const puppeteer = require('puppeteer')

describe('note app', () => {

  it('renders main page', async () => {
    const browser = await puppeteer.launch({})
    global.__BROWSER__ = browser
    const page = await global.__BROWSER__.newPage()
    await page.goto('http://localhost:3001')
    const textContent = await page.$eval('body', el => el.textContent)

    expect(textContent.includes('Muistiinpanot')).toBe(true)
  })

})
