const Page = require('./Page')

class ElementsPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get textBoxMenuItem() {
        return $( '//li[contains(.,"Text Box")]');
    }

    get checkBoxMenuItem() {
        return $( '//li[contains(.,"Check Box")]');
    }

    get radioButtonsMenuItem() {
        return $( '//li[contains(.,"Rudio Buttons")]');
    }

    get webTablesMenuItem() {
        return $( '//li[contains(.,"Web Tables")]');
    }

    open() {
        return super.open('elements');
    }
}
module.exports = new ElementsPage();