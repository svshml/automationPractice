const MainPage = require("../pageobjects/Main.page");
const ElementsPage = require("../pageobjects/Elements.page");

describe('Elements', () => {


    it ('open Elements', async () => {
            await MainPage.open();
            await MainPage.elementsLabel.click();
            await expect(ElementsPage.pageLabel).toHaveText("Elements");
    });



})



