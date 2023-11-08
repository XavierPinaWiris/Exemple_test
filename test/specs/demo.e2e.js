import demoDevPage from '../pageobjects/demo.developers.page.js';
import demoArabPage from '../pageobjects/demo.arabic.page.js';

describe('Demo test', () => {
    it('The Arabic Notation button redirects correctly from Developers', async () => {
        await demoDevPage.open();
        await demoDevPage.acceptCookies();
        await demoDevPage.arabicNotationButton.click()
        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/arabic.php")
    })
    it('The For Developers button redirects correctly from Arabic Notation', async () => {
        await demoArabPage.open();
        //await demoArabPage.acceptCookies();
        await demoArabPage.forDevelopersButton.click()
        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/developers.php")
    })
})

