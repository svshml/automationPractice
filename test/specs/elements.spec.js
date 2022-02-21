const MainPage = require("../pageobjects/Main.page");
const ElementsPage = require("../pageobjects/Elements.page");
const TextBoxPage = require("../pageobjects/TextBox.page");
const data = require("../test_data/testData");
const CheckBoxPage = require("../pageobjects/CheckBox.page");
const RadioButtonPage = require("../pageobjects/RadioButton.page");
const WebTablesPage = require("../pageobjects/WebTables.page");

  async function addRecord( firstName, lastName, age, email, salary, department){
     await WebTablesPage.addButton.click();
     await WebTablesPage.firstNameForm.setValue(firstName);
     await WebTablesPage.lastNameForm.setValue(lastName);
     await WebTablesPage.ageForm.setValue(age),
     await WebTablesPage.emailForm.setValue(email);
     await WebTablesPage.salaryForm.setValue(salary);
     await WebTablesPage.departmentForm.setValue(department);
     await WebTablesPage.submitForm.click();
  }

  async function textFromRowsInColumn(numberOfColumn) {
    const arrayRows = [];
    const array = await WebTablesPage.rowsInColumn(numberOfColumn);
     for (let i = 0; i < array.length; i++) {
         const row = array[i];
         const textRow = await row.getText();
         arrayRows.push(textRow);
     }
    return arrayRows;
  }

 async function textFromRow(text) {
    const arrayText = [];
    const array = await WebTablesPage.allColumnInRowWithText(text);
    for (let i = 0; i < array.length-1; i++) {
        const column = array[i];
        const textColumn = await column.getText();
        arrayText.push(textColumn);
    }
    return arrayText.join(',');
 }

async function clearInputValue(element) {
    while (await element.getValue() !== '') {
        await element.doubleClick();
        element.keys("Delete");
    }
}

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

    describe('Web Tables', () => {
        before(async () => {
            await browser.maximizeWindow();
            await ElementsPage.open();
        });

        it('User can navigate to [Web Tables] page', async () => {
            await ElementsPage.webTablesMenuItem.click();
            await expect(WebTablesPage.pageLabel).toHaveText("Web Tables");
        });

        it('User can create a new record with valid data', async () => {
            const amountRowsBefore = await WebTablesPage.amountRows.length;
            await addRecord("Caty","Mierra", "20", "cm@google.com", "0", "HR");
            const amountRowsAfter = await WebTablesPage.amountRows.length;
            const diff = amountRowsAfter - amountRowsBefore;
            await expect(diff).toEqual(1);
            await expect(await textFromRow("Caty")).toEqual("Caty,Mierra,20,cm@google.com,0,HR")
        });

        it( "User can sort data by [First name] column in ASC order", async () => {
            await WebTablesPage.columnHeader("First Name").click();
            const textInRows = await textFromRowsInColumn(1);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().join(","));
        });

        it( "User can sort data by [First name] column in DESC order", async () => {
            await WebTablesPage.columnHeader("First Name").click();
            const textInRows = await textFromRowsInColumn(1);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().reverse().join(','));
        });

        it( "User can sort data by [Last name] column in ASC order", async () => {
            await WebTablesPage.columnHeader("Last Name").click();
            const textInRows = await textFromRowsInColumn(2);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().join(","));
        });

        it( "User can sort data by [Last name] column in DESC order", async () => {
            await WebTablesPage.columnHeader("Last Name").click();
            const textInRows = await textFromRowsInColumn(2);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().reverse().join(','));
        });

        it( "User can sort data by [Age] column in ASC order", async () => {
            await WebTablesPage.columnHeader("Age").click();
            const textInRows = await textFromRowsInColumn(3);
            await expect(textInRows.join(",")).toEqual(textInRows.sort((a,b)=> a-b).join(","));
        });

        it( "User can sort data by [Age] column in DESC order", async () => {
            await WebTablesPage.columnHeader("Age").click();
            const textInRows = await textFromRowsInColumn(3);
            await expect(textInRows.join(",")).toEqual(textInRows.sort((a,b)=>b-a).join(','));
        });

        it( "User can sort data by [Email] column in ASC order", async () => {
            await WebTablesPage.columnHeader("Email").click();
            const textInRows = await textFromRowsInColumn(4);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().join(","));
        });

        it( "User can sort data by [Email] column in DESC order", async () => {
            await WebTablesPage.columnHeader("Email").click();
            const textInRows = await textFromRowsInColumn(4);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().reverse().join(','));
        });

        it( "User can sort data by [Salary] column in ASC order", async () => {
            await WebTablesPage.columnHeader("Salary").click();
            const textInRows = await textFromRowsInColumn(5);
            await expect(textInRows.join(",")).toEqual(textInRows.sort((a,b)=> a-b).join(","));
        });

        it( "User can sort data by [Salary] column in DESC order", async () => {
            await WebTablesPage.columnHeader("Salary").click();
            const textInRows = await textFromRowsInColumn(5);
            await expect(textInRows.join(",")).toEqual(textInRows.sort((a,b)=>b-a).join(','));
        });

        it( "User can sort data by [Department] column in ASC order", async () => {
            await WebTablesPage.columnHeader("Department").click();
            const textInRows = await textFromRowsInColumn(6);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().join(","));
        });

        it( "User can sort data by [Department] column in DESC order", async () => {
            await WebTablesPage.columnHeader("Department").click();
            const textInRows = await textFromRowsInColumn(6);
            await expect(textInRows.join(",")).toEqual(textInRows.sort().reverse().join(','));
        });

        it( "User can find records by using full matching input data in the search", async () => {
            await WebTablesPage.searchField.setValue("HR");
            await expect(await WebTablesPage.rowWithText("HR").length).toEqual(1);
        });

        it( "User can find records by using partially matching substring in the search", async () => {
            await WebTablesPage.searchField.setValue("ierra");
            await expect(await WebTablesPage.rowWithText("ierra").length).toEqual(3);
        });

        it( "User can find records by using full matching input number in the search", async () => {
            await WebTablesPage.searchField.setValue("29");
            await expect(await WebTablesPage.rowWithText("29").length).toEqual(1);
        });

        it( "User can find records by using partially matching data in the search", async () => {
            await WebTablesPage.searchField.setValue("0");
            await expect(await WebTablesPage.rowWithText("0").length).toEqual(4);
        });

        it( "User can't find records by using not existing data in the search", async () => {
            await WebTablesPage.searchField.setValue("Sara");
            await expect(await WebTablesPage.rowWithText("Sara")).not.toExist();
            await clearInputValue(WebTablesPage.searchField);
        });

        it('User can change data in a record using valid data', async () => {
            await WebTablesPage.editRowWithText("Caty").click();
            await clearInputValue(WebTablesPage.firstNameForm);
            await WebTablesPage.firstNameForm.setValue("Katy");
            await clearInputValue(WebTablesPage.ageForm);
            await WebTablesPage.ageForm.setValue("30");
            await clearInputValue(WebTablesPage.salaryForm);
            await WebTablesPage.salaryForm.setValue("150000");
            await WebTablesPage.submitForm.click();
            await expect(await textFromRow("Katy")).toEqual("Katy,Mierra,30,cm@google.com,150000,HR")
        });

        it('User can delete a record ', async () => {
            await WebTablesPage.deleteRowWithText("Katy").click();
            await expect(WebTablesPage.rowWithText("Katy")).not.toExist();
        });

    })

})


