const Page = require('./Page')

class ElementsPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    open() {
        return super.open('elements');
    }
}
module.exports = new ElementsPage();