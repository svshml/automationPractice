const Page = require('./Page')

class CheckBoxPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get checkboxHome() {
        return $( '//span[@class="rct-checkbox"]');
    }

    get plus() {
        return $( '//button[@title="Expand all"]');
    }

    get notesCBox() {
        return $( '//label[@for="tree-node-notes"]');
    }

    get reactCBox() {
        return $( '//label[@for="tree-node-react"]');
    }

    get downloadsCBox() {
        return $( '//label[@for="tree-node-downloads"]');
    }

    get result(){
        return $('//div[@id="result"]');
    }

    open() {
        return super.open('checkbox');
    }
}
module.exports = new CheckBoxPage();