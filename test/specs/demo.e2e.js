import demoPage from '../pageobjects/demo.page.js';

describe('Demo test', () => {
    it('The Arabic Notation button is clicked correctly', async () => {
        await demoPage.open();
        await demoPage.acceptCookies();
        await demoPage.arabicNotationButton.click()
    })
})

