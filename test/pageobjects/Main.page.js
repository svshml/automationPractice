const Page = require('./Page')

class MainPage extends Page {
    get elementsLabel() {
        return $('//h5[contains(.,"Element")]');
    }

    open() {
        return super.open("");
    }
}
module.exports = new MainPage();