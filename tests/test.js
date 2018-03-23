const selectors = require('../test-assets/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url("https://cards-beta.devclock.com/login")
    },
    after: browser => {
        browser.end()
    },
    "Initial Load (DT-)": (browser) => {
        browser
            .pause(8000)
        browser.expect.element(selectors.signUpText).text.to.contain('SIGN UP')
        browser
            .verify.containsText(selectors.loginTitle, 'Login')
            .verify.containsText(selectors.loginText, 'LOGIN')
            //.verify.containsText(selectors.emailInput, 'Email')
            //.verify.containsText(selectors.passwordInput, 'Password')
            .verify.containsText(selectors.loginButton, 'Login')
            .verify.containsText(selectors.loginGoogle, 'Login with Google')
    },
    "Log in With Google, Creating a Deck, and Logging Out (BP-45)(BP-38": (browser) =>
        browser
            .click(selectors.loginGoogle)
            .waitForElementPresent(selectors.gmailEmailInput, 8000)
            .click(selectors.gmailEmailInput)
            .pause(2000)
            .keys('testdude2447')
            .pause(2000)
            .useXpath()
            .click(selectors.gmailNext)
            .useCss()
            .waitForElementPresent(selectors.gmailPasswordInput, 8000)
            .click(selectors.gmailPasswordInput)
            .pause(2000)
            .keys('Coolpassword')
            .pause(2000)
            .useXpath()
            .click(selectors.gmailNext2)
            .pause(5000)
            .useCss()
            .waitForElementPresent(selectors.deckIcon, 8000)
            .useXpath()
            .click(selectors.deckButton)
            .useCss()
            .waitForElementPresent(selectors.deckTitle, 8000)
            .pause(1000)
            .click(selectors.deckAddButton)
            .waitForElementPresent(selectors.masteryDecay, 8000)
            .waitForElementPresent(selectors.deckInput, 8000)
            .click(selectors.deckCancelButton)
            .waitForElementPresent(selectors.deckStudyButton, 8000)
            .pause(1000)
            .click(selectors.deckAddButton)
            .waitForElementPresent(selectors.deckInput, 8000)
            .click(selectors.deckInput)
            .keys('Test123')
            .pause(1000)
            .click(selectors.deckSaveButton)
            .pause(1000)
            .verify.containsText(selectors.deckLabel, 'Test123')
            .click(selectors.deckBackArrow)
            .pause(1000)
            .waitForElementPresent(selectors.outLabel, 8000)
            .useXpath()
            .click(selectors.outButton)
            .useCss()
            .waitForElementPresent(selectors.loginTitle, 8000)
}

