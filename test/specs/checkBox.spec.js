const CheckBoxPage = require("../pageobjects/CheckBox.page");
const ElementsPage = require("../pageobjects/Elements.page.js");
const data =require("../test_data/testData");
const {checkBox} = require("../test_data/testData");

describe('Text Box', () => {
    before( async () => {
        await browser.maximizeWindow();
        await ElementsPage.open();
    });

    it ('User can navigate to [Check Box] page', async () => {
            await ElementsPage.checkBoxMenuItem.click();
            await expect(CheckBoxPage.pageLabel).toHaveText("Check Box");
    });

    it ('User can successfully select all options', async () => {
        await CheckBoxPage.checkboxHome.click();
        await expect(CheckBoxPage.result).toHaveText(data.checkBox.result1);
    });

    it ('User can successfully deselect the selection', async () => {
        await CheckBoxPage.checkboxHome.click();
        await expect(CheckBoxPage.result).not.toBePresent();
    });

    it ('User can successfully select several options', async () => {
        await CheckBoxPage.plus.click();
        await CheckBoxPage.notesCBox.click();
        await CheckBoxPage.reactCBox.click();
        await CheckBoxPage.downloadsCBox.scrollIntoView();
        await CheckBoxPage.downloadsCBox.click();
        await expect(CheckBoxPage.result).toHaveText(data.checkBox.result2);
    });
})



