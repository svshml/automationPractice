const Page = require('./Page')

class AFWPage extends Page {
    open() {
        return super.open('elements');
    }
}
module.exports = new AFWPage();