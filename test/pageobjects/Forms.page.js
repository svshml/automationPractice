const Page = require('./Page')

class FormsPage extends Page {
    open() {
        return super.open('elements');
    }
}
module.exports = new FormsPage();