const Page = require('./Page')

class ButtonsPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get doubleClickButton() {
        return $('//button[@id="doubleClickBtn"]');
    }

    get rightClickButton() {
        return $('//button[@id="rightClickBtn"]');
    }

    get clickMeButton() {
        return $('//button[text()="Click Me"]');
    }

    get resultDoubleClick() {
        return $('//p[@id="doubleClickMessage"]');
    }

    get resultRightClick() {
        return $('//p[@id="rightClickMessage"]');
    }

    get resultClick() {
        return $('//p[@id="dynamicClickMessage"]');
    }

    open() {
        return super.open('buttons');
    }
}
module.exports = new ButtonsPage();