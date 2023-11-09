import Page from './page.js';

class MTDemoArabicPage extends Page {

    get arabicNotationToolbar () {
        return $('#editorContainerChem > div')
    }

    open () {
        return super.open('arabic.php');
    }
}

export default new MTDemoArabicPage();
