import Page from './page.js';

class MTDemoChemTypePage extends Page {

    get chemTypeToolbar () {
        return $('#editorContainerChem > div')
    }

    open () {
        return super.open('chemtype.php');
    }
}

export default new MTDemoChemTypePage();
