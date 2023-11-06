import Page from './page.js';

class MTDemoPage extends Page {
    open () {
        return super.open('developers.php');
    }
}

export default new MTDemoPage();
