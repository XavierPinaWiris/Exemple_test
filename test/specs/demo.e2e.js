import demoPage from '../pageobjects/demo.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await demoPage.open()
        await browser.debug()
    })
})

