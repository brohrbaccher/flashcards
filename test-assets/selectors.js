module.exports = {
    //Splash Page Selectors
    loginTitle: 'label[data-bind="text: strings.title"]',
    loginText: 'label[data-bind ="text: strings.loginTab"]',
    signUpText: 'label[data-bind="text: strings.signUpTab"]',
    loginButton: 'div[data-bind="textclick: clickLoginTab"]',
    signUpButton: 'div [data-bind="textclick: clickSignUpTab"]',
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    loginButton: 'button[class="primary"]',
    loginSeperator: 'lab [data-bind = "text: strings.loginSeperator"]',
    loginGoogle: 'button[class="google"]',
    //Main Page Selectors
    cardsTitle: 'label[data-bind="text: strings.title"]',
    deckIcon: 'i[data-bind="css: strings.decksIcon"]',
    deckButton: '/html/body/div[2]/div[2]/div/div/div[1]',
    subIcon: 'i[data-bind="css: strings.subscriptionIcon"]',
    subLabel:'label[data-bind="text: strings.subscription"]',
    subButton: 'div[data-bind="click: clickSubscription"]',
    contactIcon: 'i[data-bind="css: strings.contactIcon"]',
    contactLabel: 'label[data-bind="text: strings.contact"]',
    contButton: 'div[data-bind="click: clickContact"]',
    setIcon: 'i[data-bind="css: strings.contactIcon"]',
    setLabel: 'label[data-bind="text: strings.settings"]',
    setButton: 'div[data-bind="click: clickSettings"]',
    outIcon: 'i[data-bind="css: strings.logoutIcon"]',
    outLabel: 'label[data-bind ="text: strings.logout"]',
    outButton: '/html/body/div[2]/div[2]/div/div/div[5]',
    //Google Login Page
    gmailEmailInput: 'input[type=email]',
    gmailPasswordInput: '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input',
    gmailNext: '//*[@id="identifierNext"]/content/span',
    gmailNext2:'//*[@id="passwordNext"]/content/span',
    //Terms of Use Page
    termsOfUseLabel: 'label[data-bind="text: strings.title"]',
    acceptButton: 'button[class="primary"]',
    declineButton: 'button[class="destructive"]',
    scrollBar: 'div[class="topSection"]',
    //Welcome Page
    welcomeTitle: 'label[data-bind="text: strings.title"]',
    thankYouField: 'label[data-bind="text: strings.thankYouHeader"]',
    masteryField: 'label[data-bind="text: strings.masteryHeader"]',
    studyField: 'label[data-bind="text: strings.studyHeader"]',
    subscriptionField: 'label[data-bind="text: strings.subscriptionHeader"]',
    getStartedButton: 'button[class="primary"]',
    //Deck Page Main
    deckBackArrow: 'i[data-bind="css: strings.backIcon"]',
    deckTitle: 'label[data-bind="text: strings.title"]',
    deckLabel: 'label[data-bind="text: name"]',
    deckAddButton: 'button[class="right"]',
    deckStudyButton: 'button[class="primary study"]',
    //Deck Create Page
    deckName: 'label[data-bind="text: strings.name"]',
    deckInput: 'textArea[placeholder="Enter deck name"]',
    masteryDecay: 'label[data-bind="text: strings.masteryDecay"]',
    masterySlider: 'input[data-bind="value: masteryDecay"]',
    deckHelp: 'label[data-bind="text: strings.masteryDecayHelp"]',
    deckSaveButton:'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(7) > div > div > button.primary',
    deckCancelButton:'body > div.main > div.content > div > div:nth-child(1) > div:nth-child(7) > div > div > button:nth-child(2)',
    permText:'label[data-bind="text: strings.permissions"]',
    permLabel:'label[data-bind="text: strings.permissionsNotAvailableForNewDecks"]  '




}

