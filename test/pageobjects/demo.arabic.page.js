import Page from './page.js';

class MTDemoArabicPage extends Page {

    open () {
        return super.open('arabic.php');
    }
}

export default new MTDemoArabicPage();
