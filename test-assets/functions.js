/**
 * Did the webpage load? DEM-2
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {string} selectors See selectors.js for more information
 */

let browserLoad = (browser, selectors) => {
    //check and see if certain selectors from the page loaded. no specifics are needed since version or title could change.
    browser.verify.element(selectors['employeeManagerTitle']).to.be.present
    browser.verify.element(selectors['noEmployeeSelected']).to.be.present
    browser.verify.element(selectors['managerFooter']).to.be.present
    browser.verify.element(selectors['employeeList']).to.be.present
    browser.verify.element(selectors['employeeCard']).to.be.present
}

/**
 * DEM-3, DEM-7, and DEM-8 - Selecting an employee, Generating an Error, and Clearing the Errors
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {string} selectors See selectors.js for more information
 * @param {object} data Using some bad data for this.
 */


let breakAndFix = (browser, selectors, data) => {
    //Verify that the employee card text, inputs, and buttons are available for use
    browser.click(selectors['employee'])
    browser.expect.element(selectors['employeeName']).to.be.present
    browser.expect.element(selectors['employeeID']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText1']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText2']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText3']).to.be.present
    browser.useCss()
    browser.expect.element(selectors['nameInput']).to.be.present
    browser.expect.element(selectors['phoneInput']).to.be.present
    browser.expect.element(selectors['titleInput']).to.be.present
    browser.expect.element(selectors['saveButton']).to.be.present
    browser.expect.element(selectors['saveButton']).to.contain.text('Save')
    browser.expect.element(selectors['cancelButton']).to.be.present
    browser.expect.element(selectors['saveButton']).to.contain.text('Cancel')
    //Generate an error for all input Fields
    browser.clearValue(selectors['nameInput'])
    browser.setValue(selectors.nameInput, data.badName)
    browser.clearValue(selectors['phoneInput'])
    browser.setValue(selectors.phoneInput, data.badPhone)
    browser.clearValue(selectors['titleInput'])
    browser.setValue(selectors.titleInput, data.badTitle)
    browser.click(selectors['saveButton'])
    //Verify an error is generated
    browser.useXpath().expect.element(selectors['errorCard1']).to.be.present
    browser.useXpath().expect.element(selectors['errorCard2']).to.be.present
    browser.useXpath().expect.element(selectors['errorCard3']).to.be.present
    browser.useCss()
    //Click the cancel button and check for good input
    browser.click(selectors['cancelButton'])
    browser.expect.element(selectors['nameInput']).value.to.contain('Bernice Ortiz')
    browser.expect.element(selectors['phoneInput']).value.to.contain('4824931093')
    browser.expect.element(selectors['titleInput']).value.to.contain('CEO')
}

/**
 * DEM-3, DEM-7, and DEM-8 - Selecting an employee, Generating an Error, and Clearing the Errors
 * @param {object} browser an object provided by NightwatchJS which hooks into the test browser
 * @param {string} selectors See selectors.js for more information
 * @param {object} data Using some bad data for this.
 */
let checkCard = (browser, selectors, data) => {
    //Verify that the employee card text, inputs, and buttons are available for use
    browser.click(selectors['employee'])
    browser.expect.element(selectors['employeeName']).to.be.present
    browser.expect.element(selectors['employeeID']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText1']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText2']).to.be.present
    browser.useXpath().expect.element(selectors['placeHolderText3']).to.be.present
    browser.useCss()
    browser.expect.element(selectors['nameInput']).to.be.present
    browser.expect.element(selectors['phoneInput']).to.be.present
    browser.expect.element(selectors['titleInput']).to.be.present
    browser.expect.element(selectors['saveButton']).to.be.present
    browser.expect.element(selectors['saveButton']).to.contain.text('Save')
    browser.expect.element(selectors['cancelButton']).to.be.present
    browser.expect.element(selectors['saveButton']).to.contain.text('Cancel')
    //Generate data
    browser.clearValue(selectors['nameInput'])
    browser.setValue(selectors.nameInput, data.goodName)
    browser.clearValue(selectors['phoneInput'])
    browser.setValue(selectors.phoneInput, data.goodPhone)
    browser.clearValue(selectors['titleInput'])
    browser.setValue(selectors.titleInput, data.goodTitle)
    browser.click(selectors['saveButton'])
    browser.expect.element(selectors['nameInput']).value.to.contain('Bernie Rohrbacher')
    browser.expect.element(selectors['phoneInput']).value.to.contain('7164356861')
    browser.expect.element(selectors['titleInput']).value.to.contain('The Dude')
}


module.exports = {
    browserLoad: browserLoad,
    breakAndFix: breakAndFix,
    checkCard: checkCard
}

 /*
 employeeName: 'p[id="employeeTitle"]',
employeeID: 'span[id="employeeID"]',
placeHolderText: 'span[class="placeholderText"]',
nameInput: 'input[name="nameEntry"]',
phoneInput: 'input[name="phoneEntry"]',
titleInput: 'input[name="titleEntry"]',
saveButton: 'button[name="save"]',
cancelButton: 'button[name="cancel"]'
.verify.cssProperty(selectors.nameInput, uiValues.underline, uiValues.underlineErrorProps)
}
*/