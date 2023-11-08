/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    get forDevelopersButton () {
        return $('#new_tab_container > div > a:nth-child(4)')
    }

    get arabicNotationButton () {
        return $('#new_tab_container > div > a:nth-child(3)')
    }

    get chemTypeButton () {
        return $('#new_tab_container > div > a:nth-child(2)')
    }
    
    get mathTypeButton () {
        return $('#new_tab_container > div > a:nth-child(1)')
    }

    get acceptCookiesButton () {
        return $('#onetrust-accept-btn-handler')
    }

    async acceptCookies() {
        await this.acceptCookiesButton.click()
    }
}
