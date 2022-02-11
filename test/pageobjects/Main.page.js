const Page = require('./Page')

class MainPage extends Page {
    get elementsLabel() {
        return $('(//div[@class="card-up"])[1]');
    }

    open() {
        return super.open("");
    }
}
module.exports = new MainPage();