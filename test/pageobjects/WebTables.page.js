const Page = require('./Page')

class WebTablesPage extends Page {
    get pageLabel() {
        return $('//div[@class="main-header"]');
    }

    get addButton() {
        return $( '//button[@id="addNewRecordButton"]');
    }

    get firstNameForm() {
        return $( '//input[@id="firstName"]');
    }

    get lastNameForm() {
        return $( '//input[@id="lastName"]');
    }

    get emailForm() {
        return $( '//input[@id="userEmail"]');
    }

    get ageForm() {
        return $( '//input[@id="age"]');
    }

    get salaryForm() {
        return $( '//input[@id="salary"]');
    }

    get departmentForm() {
        return $( '//input[@id="department"]');
    }

    get submitForm() {
        return $( '//button[@id="submit"]');
    }

    rowWithText(text){
        return $$(`//div[@class="rt-tr-group"and contains(.,"${text}")]`);
    }

    get rowsOnPage(){
        return $$(`//div[@class="rt-tr-group"]`);
    }

    allColumnInRowWithText(text){
        return $$(`//div[contains(@class,"rt-tr ")and contains(.,"${text}")]/div`);
    }

    get amountRowsWithData() {
        return $$( '//div[contains(@class, "rt-tr")]/div[contains(text(),.)]/parent::div');
    }

    rowsInColumn(numberOfColumn) {
       return $$ (`//div[contains(@class,"rt-tr ")]/div[contains(text(),*)][${numberOfColumn}]`);
    }

    columnHeader(column) {
        return  $(`//div[text()="${column}"]`);
    }

    editRowWithText(text) {
        return $(`//div[contains(.,"${text}")]/div/div/span[@title="Edit"]`);
    }

    deleteRowWithText(text) {
        return $(`//div[contains(.,"${text}")]/div/div/span[@title="Delete"]`);
    }

    get searchField() {
        return $('//input[@id="searchBox"]');
    }

    get selectRowPerPage() {
      return $('//select[@aria-label="rows per page"]');
    }

    get nextButton() {
        return $('//button[contains(.,"Next")]');
    }

    get previousButton() {
        return $('//button[contains(.,"Previous")]');
    }

    open() {
        return super.open('webtables');
    }
}
module.exports = new WebTablesPage();
