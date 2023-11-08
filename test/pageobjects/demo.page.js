import Page from './page.js';

class MTDemoPage extends Page {
    get arabicNotationButton () {
        return $('#new_tab_container > div > a:nth-child(3)')
    }
    open () {
        return super.open('developers.php');
    }
}

export default new MTDemoPage();
