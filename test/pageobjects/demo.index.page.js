import Page from './page.js';

class MTDemoIndexPage extends Page {

    open () {
        return super.open('index.php');
    }
}

export default new MTDemoIndexPage();