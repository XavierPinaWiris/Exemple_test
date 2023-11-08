import Page from './page.js';

class MTDemoChemTypePage extends Page {

    open () {
        return super.open('chemtype.php');
    }
}

export default new MTDemoChemTypePage();