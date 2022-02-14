const Page = require('./Page')

class ElementsPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get TextBoxMenuItem() {
        return $( '//li[contains(.,"Text Box")]');
    }

    open() {
        return super.open('elements');
    }
}
module.exports = new ElementsPage();