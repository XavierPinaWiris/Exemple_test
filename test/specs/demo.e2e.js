import demoPage from '../pageobjects/demo.page.js';

var allure = require('allure-commandline');
var generation = allure(['generate', 'allure-results']);

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await demoPage.open()
        await browser.debug()
    })
    generation.on('exit', function(exitCode) {
        console.log('Generation is finished with code:', exitCode);
    });
})

