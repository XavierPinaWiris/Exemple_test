import demoDevPage from '../pageobjects/demo.developers.page.js';
import demoArabPage from '../pageobjects/demo.arabic.page.js';
import demoChemtypePage from '../pageobjects/demo.chemtype.page.js';
import demoIndexPage from '../pageobjects/demo.index.page.js';

describe('Demo test', () => {
    
    it('The Developers page redirects to the Arabic page correctly', async () => {
        await demoDevPage.open();
        await demoDevPage.acceptCookies();
        await demoDevPage.arabicNotationButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/arabic.php")
    })

    it('The Developers page redirects to the ChemType page correctly', async () => {
        await demoDevPage.open();
        await demoDevPage.chemTypeButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/chemtype.php")
    })

    it('The Developers page redirects to the Index page correctly', async () => {
        await demoDevPage.open();
        await demoDevPage.indexButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/index.php")
    })

    it('The Arabic page redirects to the Developers page correctly', async () => {
        await demoArabPage.open();
        await demoArabPage.forDevelopersButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/developers.php")
    })

    it('The Arabic page redirects to the ChemType page correctly', async () => {
        await demoArabPage.open();
        await demoArabPage.chemTypeButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/chemtype.php")
    })

    it('The Arabic page redirects to the Index page correctly', async () => {
        await demoArabPage.open();
        await demoArabPage.indexButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/index.php")
    })

    it('The ChemType page redirects to the Developers page correctly', async () => {
        await demoChemtypePage.open();
        await demoChemtypePage.forDevelopersButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/developers.php")
    })

    it('The ChemType page redirects to the Arabic page correctly', async () => {
        await demoChemtypePage.open();
        await demoChemtypePage.arabicNotationButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/arabic.php")
    })

    it('The ChemType page redirects to the Index page correctly', async () => {
        await demoChemtypePage.open();
        await demoChemtypePage.indexButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/index.php")
    })

    it('The Index page redirects to the Developers page correctly', async () => {
        await demoIndexPage.open();
        await demoIndexPage.forDevelopersButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/developers.php")
    })

    it('The Index page redirects to the Arabic page correctly', async () => {
        await demoIndexPage.open();
        await demoIndexPage.arabicNotationButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/arabic.php")
    })

    it('The Index page redirects to the ChemType page correctly', async () => {
        await demoIndexPage.open();
        await demoIndexPage.chemTypeButton.click()

        await expect(browser).toHaveUrl("https://demo.wiris.com/mathtype/en/chemtype.php")
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