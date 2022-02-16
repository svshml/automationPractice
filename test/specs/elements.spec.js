const MainPage = require("../pageobjects/Main.page");
const ElementsPage = require("../pageobjects/Elements.page");
const TextBoxPage = require("../pageobjects/TextBox.page");
const data = require("../test_data/testData");
const CheckBoxPage = require("../pageobjects/CheckBox.page");
const RadioButtonPage = require("../pageobjects/RadioButton.page");

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

    describe('Check Box', () => {
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
    describe('Radio Button', () => {
        before( async () => {
            await browser.maximizeWindow();
            await ElementsPage.open();
        });

        it ('User can navigate to [Radio Button] page', async () => {
            await ElementsPage.radioButtonMenuItem.click();
            await expect(RadioButtonPage.pageLabel).toHaveText("Radio Button");
        });

        it ('User can select answer Yes', async () => {
            await RadioButtonPage.yesRadio.click();
            await expect(RadioButtonPage.result).toHaveText("You have selected Yes");
        });

        it ('User can select answer Yes', async () => {
            await RadioButtonPage.impressiveRadio.click();
            await expect(RadioButtonPage.result).toHaveText("You have selected Impressive");
        });

        it ('User can not select answer No', async () => {
            await browser.refresh();
            await RadioButtonPage.noRadio.click();
            await expect(RadioButtonPage.result).not.toBePresent();
        });

    })
})


