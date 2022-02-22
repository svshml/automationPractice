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

    get radioButtonMenuItem() {
        return $( '//li[contains(.,"Radio Button")]');
    }

    get webTablesMenuItem() {
        return $( '//li[contains(.,"Web Tables")]');
    }

    get buttonsMenuItem() {
        return $( '//li[contains(.,"Buttons")]');
    }

    open() {
        return super.open('elements');
    }
}
module.exports = new ElementsPage();