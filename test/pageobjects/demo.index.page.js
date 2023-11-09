import Page from './page.js';

class MTDemoIndexPage extends Page {

    get indexToolbar () {
        return $('#editorContainer > div')
    }

    open () {
        return super.open('index.php');
    }
}

export default new MTDemoIndexPage();
