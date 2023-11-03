const { expect } = require('@wdio/globals')
const Page = require('../pageobjects/page')

const page = new Page();
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await page.open()
        await browser.debug()
    })
})

