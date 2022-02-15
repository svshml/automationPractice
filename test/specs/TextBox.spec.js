const ElementsPage = require("../pageobjects/Elements.page");
const TextBoxPage =require("../pageobjects/TextBox.page");
const data =require("../test_data/testData");

describe('Text Box', () => {
    before( async () => {
        await browser.maximizeWindow();
        await ElementsPage.open();
    });

    it ('User can navigate to [Text Box] page', async () => {
            await ElementsPage.textBoxMenuItem.click();
            await expect(TextBoxPage.pageLabel).toHaveText("Text Box");
    });

    it ('User can successfully submit form with valid data', async () => {
        await TextBoxPage.userName.setValue(data.textBox.name);
        await TextBoxPage.userEmail.setValue(data.textBox.email);
        await TextBoxPage.curAddress.setValue(data.textBox.perAddress);
        await TextBoxPage.perAddress.setValue(data.textBox.curAddress);
        await TextBoxPage.submit.scrollIntoView();
        await TextBoxPage.submit.click();
        await expect(TextBoxPage.result).toHaveTextContaining(data.textBox.result);
    });

})



