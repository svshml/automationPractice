const Page = require('./Page')

class RadioButtonPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get yesRadio() {
        return $('//label[contains(.,"Yes")]');
    }

    get impressiveRadio() {
        return $('//label[contains(.,"Impressive")]');
    }

    get noRadio() {
        return $('//label[contains(.,"No")]');
    }

    get result() {
        return $('.mt-3');
    }

    open() {
        return super.open('radio-button');
    }
}
module.exports = new RadioButtonPage();