const { $ } = require('@wdio/globals')
const Page = require('./page');

class MTDemoPage extends Page {
    open () {
        return super.open('developers.php');
    }
}

module.exports = new MTDemoPage();
