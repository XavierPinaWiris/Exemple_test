import Page from './page.js';

class MTDemoDevelopersPage extends Page {

    open () {
        return super.open('developers.php');
    }
}

export default new MTDemoDevelopersPage();
