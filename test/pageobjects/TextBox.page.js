const Page = require('./Page')

class TextBoxPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get userName() {
        return $('//input[@id="userName"]');
    }

    get userEmail() {
        return $('//input[@id="userEmail"]');
    }

    get curAddress() {
        return $('//textarea[@id="currentAddress"]');
    }

    get perAddress() {
        return $('//textarea[@id="permanentAddress"]');
    }

    get submit() {
        return $('//button[@id="submit"]');
    }

    get result() {
        return $('//div[@class="border col-md-12 col-sm-12"]');
    }

    open() {
        return super.open('text-box');
    }
}
module.exports = new TextBoxPage();