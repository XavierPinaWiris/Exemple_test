const { expect } = require('@wdio/globals')
const demoPage = require('../pageobjects/demo.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await demoPage.open()
        await browser.debug()
    })
})

