import demoDevPage from '../pageobjects/demo.developers.page.js';
import demoArabPage from '../pageobjects/demo.arabic.page.js';
import demoChemtypePage from '../pageobjects/demo.chemtype.page.js';
import demoIndexPage from '../pageobjects/demo.index.page.js';

describe('Demo test', () => {
    
    it('The Arabic Notation button redirects correctly from Developers', async () => {
        await demoDevPage.open();
        await demoDevPage.acceptCookies();
        await demoDevPage.arabicNotationButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/arabic.php")
    })

    it('The For Developers button redirects correctly from Arabic Notation', async () => {
        await demoArabPage.open();
        await demoArabPage.forDevelopersButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/developers.php")
    })
})

describe('Developers Toolbar Visibility', () => {
    it('The simple toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.simpleToolbar).toBeDisplayed()
    })

    it('The custom toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.customToolbar).toBeDisplayed()
    })

    it('The PARCC toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.parccToolbar).toBeDisplayed()
    })

    it('The publisher toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.publisherToolbar).toBeDisplayed()
    })

    it('The format toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.formatExampleToolbar).toBeDisplayed()
    })

    it('The mathML and LaTeX toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.mathML_LaTeX_ExampleToolbar).toBeDisplayed()
    })

    it('The accessibility toolbar is displayed', async () => {
        await demoDevPage.open();

        await expect(demoDevPage.accessibilityToolbar).toBeDisplayed()
    })
})

describe('Arabic Notation Toolbar Visibility', () => {
    it('The arabic notation toolbar is displayed', async () => {
        await demoArabPage.open();

        await expect(demoArabPage.arabicNotationToolbar).toBeDisplayed()
    })
})

describe('ChemType Toolbar Visibility', () => {
    it('The ChemType toolbar is displayed', async () => {
        await demoChemtypePage.open();

        await expect(demoChemtypePage.chemTypeToolbar).toBeDisplayed()
    })
})

describe('Index Toolbar Visibility', () => {
    it('The index toolbar is displayed', async () => {
        await demoIndexPage.open();

        await expect(demoIndexPage.indexToolbar).toBeDisplayed()
    })
})