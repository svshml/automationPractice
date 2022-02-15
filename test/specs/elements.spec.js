const MainPage = require("../pageobjects/Main.page");
const ElementsPage = require("../pageobjects/Elements.page");

describe('Elements', () => {
    before( async () => {
        await browser.maximizeWindow();
        await MainPage.open();
    });

    it ('User can navigate to [Elements] section', async () => {
            await MainPage.elementsLabel.scrollIntoView();
            await MainPage.elementsLabel.click();
            await expect(ElementsPage.pageLabel).toHaveText("Elements");
    });
})



