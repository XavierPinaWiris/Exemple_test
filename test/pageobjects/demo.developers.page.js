import Page from './page.js';

class MTDemoDevelopersPage extends Page {

    get simpleToolbar () {
        return $('#editorContainer_simpletoolbar > div')
    }

    get customToolbar () {
        return $('#editorContainer_customtoolbar > div')
    }

    get parccToolbar () {
        return $('#editorContainer_parcc > div')
    }

    get publisherToolbar () {
        return $('#editorContainer_publishers > div')
    }

    get formatExampleToolbar () {
        return $('#editorContainer_formats > div')
    }

    get mathML_LaTeX_ExampleToolbar () {
        return $('#editorContainer_mathml_latex > div')
    }

    get accessibilityToolbar () {
        return $('#editorContainer_accessibility > div')
    }

    open () {
        return super.open('developers.php');
    }
}

export default new MTDemoDevelopersPage();
