import demoPage from '../pageobjects/demo.page.js';

describe('Demo test', () => {
    it('The cookie button is clicked correctly', async () => {
        await demoPage.open()
        await demoPage.cookiebtn.click()

    })
    it('The Arabic Notation button is clicked correctly', async () => {
        console.log(demoPage.cookiebtn)
        await demoPage.arabicbtn.click()
    })
})

