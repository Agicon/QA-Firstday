const { $, browser } = require("@wdio/globals");
const BasePage = require("./testBase");
const { remote } = require("webdriverio");
const customerPage = require("../Web/customerAccountPage");
const superAdminPage = require("./superAdminPage");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CustomerAccountPage extends BasePage {
  get managingProviderLink() {
    return $("(//a[@title='Managing Providers'])[2]");
  }

  get newManagingProviderButton() {
    return $("//div//button[contains(text(),'New Managing Provider')]");
  }

  get nameField() {
    return $("#mother_first_name");
  }

  get emailField() {
    return $("#mother_email");
  }

  get closeButton() {
    return $("//button[@class='btn btn-default']");
  }

  get mobileNumberField() {
    return $("#mother_mobile_number");
  }

  get websiteField() {
    return $("#website");
  }

  get officeNumberField() {
    return $("#office_number");
  }

  get officeInformation() {
    return $("#office_information");
  }

  get stateField() {
    return $("#state");
  }

  get cityField() {
    return $("#city");
  }

  get addressField() {
    return $("#address");
  }

  get zipCodeField() {
    return $("#zipcode");
  }

  get createButton() {
    return $("#createBtn:nth-child(2)");
  }

  get searchField() {
    return $("input[type='search']");
  }

  get deleteButton() {
    return $("(//a[@title='Delete'])[1]");
  }

  get deleteProviderMessage() {
    return $("//div[contains(text(),'Managing Provider Deleted !!')]");
  }

  get backButton() {
    return $("#cancelBtn:nth-child(1)");
  }
  //--------------other-provider--------//
  get otherProviderLink() {
    return $("(//a[contains(text(),'Other Providers')])[2]");
  }

  get newOtherProviderButton() {
    return $("//div//button[contains(text(),'New Other Provider')]");
  }

  get viewOrUpdateButton() {
    return $("(//a[@title='View / Update'])[1]|//a[@title='Edit']");
  }

  get updateProviderPage() {
    return $("//section[@class='content-header text-center']//h1");
  }

  get updatedButton() {
    return $("#updateBtn:nth-child(2)");
  }

  // ===============================Patient-Master_Menu=============================

  get diagnosisTypeField() {
    return $("#type:nth-of-type(1)");
  }

  get diagnosisList() {
    return $("#ui-id-1");
  }

  get moreInformationField() {
    return $("#website");
  }

    get hospitalNoteField() {
    return $("#type");
  }

  async managingProviderIsDisplayed() {
    await this.managingProviderLink.waitForDisplayed({ timeut: 25000 });
    return await this.managingProviderLink.isDisplayed();
  }

  async clickOnManagingProviderTab() {
    if ((await this.managingProviderIsDisplayed()) === true) {
      await this.managingProviderLink.click();
    } else {
      throw new Error("Managing provider is not displayed on homepage");
    }
  }

  async newManagingProviderButtonIsDisplayed() {
    await this.newManagingProviderButton.waitForDisplayed({ timeout: 5000 });
    return await this.newManagingProviderButton.isDisplayed();
  }

  async clickOnNewManagingProviderButton() {
    if ((await this.newManagingProviderButtonIsDisplayed()) === true) {
      await this.newManagingProviderButton.click();
    } else {
      throw new Error("New Managing Provider Button is not displayed");
    }
  }

  async closeButtonIsDisplayed() {
    await this.closeButton.waitForDisplayed({ timeout: 25000 });
    return await this.closeButton.isDisplayed();
  }

  async clickOnCloseButton() {
    if ((await this.closeButtonIsDisplayed()) === true) {
      await this.closeButton.click();
    } else {
      throw new Error("Close button is not displayed on managing provider form");
    }
  }

  async verifyClosedForm() {
    await this.nameField.waitForDisplayed({ reverse: true, timeout: 20000 });
    if ((await this.nameField.isDisplayed()) === false) {
      console.log("New Managing Provider form has successfully closed");
    } else {
      throw new Error("Managing provider form is still displayed after clicked on the close button");
    }
  }

  async nameFieldIsDisplayed() {
    await this.nameField.waitForDisplayed({ timeout: 25000 });
    return await this.nameField.isDisplayed();
  }

  async fillNameField(Data) {
    await this.nameField.waitForDisplayed({ timeout: 20000 });
    await this.nameField.click();
    await this.nameField.clearValue();
    await this.nameField.setValue(Data);
  }

  async fillEmailField(Data) {
    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.setValue(Data);
  }

  async fillMoblieNumberField(Data) {
    await browser.scroll(0, -200);
    await this.mobileNumberField.waitForDisplayed({ timeout: 20000 });
    await this.mobileNumberField.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await this.mobileNumberField.setValue(Data);
    await browser.pause(2000);
  }

  async fillWebsiteField(Data) {
    await this.websiteField.waitForDisplayed({ timeout: 20000 });
    await this.websiteField.setValue(Data);
  }

  async fillOfficeNumberField(Data) {
    await browser.scroll(0, -200);
    await this.officeNumberField.waitForDisplayed({ timeout: 20000 });
    await this.officeNumberField.click();
    await browser.keys(["Control", "a"]);
    await browser.keys(["Delete"]);
    await this.officeNumberField.setValue(Data);
  }

  async fillzipCodeField(Data) {
    await this.zipCodeField.waitForDisplayed({ timeout: 20000 });
    await this.zipCodeField.setValue(Data);
    await browser.pause(2000);
  }

  async fillOfficeInformationField(Data) {
    await this.officeInformation.waitForDisplayed({ timeout: 20000 });
    await this.officeInformation.setValue(Data);
  }

  async fillStateField(Data) {
    await this.stateField.waitForDisplayed({ timeout: 20000 });
    await this.stateField.setValue(Data);
  }

  async fillCityField(Data) {
    await this.cityField.waitForDisplayed({ timeout: 20000 });
    await this.cityField.setValue(Data);
  }

  async fillAddressField(Data) {
    await this.addressField.waitForDisplayed({ timeout: 20000 });
    await this.addressField.setValue(Data);
  }

  async verifyCreatedProvider(name) {
    await this.searchField.clearValue();
    await this.searchField.setValue(name);
    await browser.pause(3000);
    await $("//td[contains(text(),'" + name + "')]").click();
    await $("//td[contains(text(),'" + name + "')]").waitForDisplayed({ timeout: 25000 });
    var actualName = await $("//td[contains(text(),'" + name + "')]").getText();
    await expect(actualName).toEqual(name);
  }

  async verifySuccessMessage(text) {
    const messageText = await $("//div[contains(text(),'" + text + "')]");
    await messageText.waitForDisplayed({ timeout: 20000 });
    if ((await messageText.isDisplayed()) === true) {
      console.log("Success message displaying successfully " + text);
    } else {
      throw new Error("Success message is not displaying: " + text);
    }
    await messageText.waitForDisplayed({ reverse: true, timeout: 20000 });
  }

  async clickOnLinkAndYesButton(text) {
    await $("//a[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 25000,
    });
    await $("//a[contains(text(),'" + text + "')]").click();
    await superAdminPage.clickOnButtonWithText("Yes");
  }

  async searchCreatedProvider(text) {
    await this.searchField.clearValue();
    await this.searchField.setValue(text);
    await browser.pause(1000);
    await $("//td[contains(text(),'" + text + "')]").click();
    await $("//td[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 25000,
    });
  }

  async fillEmailFieldWithUniqueEmail() {
    const randomEmail = `Auto_provider${Date.now()}@Pro.com`;
    if ((await this.emailField.isDisplayed()) === true) {
      await this.emailField.click();
      await this.emailField.clearValue();
      await this.emailField.setValue(randomEmail);
      console.log("email field is displaying");
    } else {
      throw new Error("email field is not displaying");
    }
  }

  async clickOnViewOrUpdateButton() {
    await this.viewOrUpdateButton.waitForExist({ timeout: 25000 });
    await browser.pause(1000);
    await this.viewOrUpdateButton.click();
  }

  async updateProviderPageIsDisplayed() {
    await this.updateProviderPage.waitForDisplayed({ timeout: 20000 });
    if ((await this.updateProviderPage.isDisplayed()) === true) {
      console.log("User is on update provider page");
    } else {
      throw new Error("Update provider page is not displaying");
    }
  }

  async clickOnBackButton() {
    await this.backButton.waitForDisplayed({ timeout: 20000 });
    await this.backButton.click();
  }

  async clickOnUpdateButton() {
    await this.updatedButton.waitForDisplayed({ timeout: 20000 });
    await this.updatedButton.click();
  }
  //-------------------other-provider---------------//

  async clickOnOtherProviderTab() {
    if ((await this.otherProviderIsDisplayed()) === true) {
      await this.otherProviderLink.click();
    } else {
      throw new Error("Managing provider is not displayed on homepage");
    }
  }
  async otherProviderIsDisplayed() {
    await this.otherProviderLink.waitForDisplayed({ timeut: 25000 });
    return await this.otherProviderLink.isDisplayed();
  }

  async newOtherProviderButtonIsDisplayed() {
    await this.newOtherProviderButton.waitForDisplayed({ timeout: 35000 });
    return await this.newOtherProviderButton.isDisplayed();
  }
  async clickOnNewOtherProviderButton() {
    if ((await this.newOtherProviderButtonIsDisplayed()) === true) {
      await this.newOtherProviderButton.click();
    } else {
      throw new Error("New Other Provider Button is not displayed");
    }
  }

  async verifyUpdatedStatusProvider(text) {
    if ((await $("//td[contains(text(),'" + text + "')]").isDisplayed()) === true) {
      throw new Error("❌ Provider is still visible in the list");
    } else {
      console.log("✅ provider has removed from the list");
    }
  }

  async searchAndActive(name, button) {
    superAdminPage.clickOnButtonWithText(button);
    await this.searchField.clearValue();
    await this.searchField.setValue(name);
    await browser.pause(3000);
    try {
      await this.clickOnLink("Inactive");
    } catch (error) {}
  }

  // ===============================Patient-Master_Menu=============================

  async verifyClosedPopup(text) {
    const popupTitle = await $("//h2[contains(text(),'" + text + "')]");
    await popupTitle.waitForDisplayed({ reverse: true, timeout: 5000 });
    if ((await popupTitle.isDisplayed()) === true) {
      throw new Error("❌ " + text + " popup is not closed");
    } else {
      console.log("✅ " + text + " popup is closed successfully");
    }
  }

  async fillDiagnosisTypeField(data) {
    await this.diagnosisTypeField.waitForDisplayed({ timeout: 20000 });
    await this.diagnosisTypeField.clearValue();
    await this.diagnosisTypeField.setValue(data);
    await browser.keys("Backspace");
    await browser.pause(1000);
    await this.diagnosisTypeField.setValue(data);
  }

  async verifyDiagnosisList() {
    await (await this.diagnosisList).waitForDisplayed({ timeout: 15000 });
    if ((await this.diagnosisList.isDisplayed()) === true) {
      console.log("✅  Diagnosis List is displayed");
    } else {
      throw new Error("❌ Diagnosis list is not displayed");
    }
  }

  async selectSuggestedDiagnosisType(text) {
    const suggestedDiagnosis = await $("//div[contains(text(),'" + text + "')]");
    await suggestedDiagnosis.waitForDisplayed({ timeout: 15000 });
    if ((await suggestedDiagnosis.isDisplayed()) === true) {
      await suggestedDiagnosis.click();
    } else {
      throw new Error("❌ " + text + " type is not displayed");
    }
  }

  async fillMoreInformationField(data) {
    await this.moreInformationField.waitForDisplayed({ timeout: 20000 });
    await this.moreInformationField.click();
    await this.moreInformationField.clearValue();
    await this.moreInformationField.setValue(data);
  }

  async verifyCreatedDiagnosis(type, code, moreInfo) {
    const typename = await $("(//tr[@class='odd']//td)[1]");
    await typename.waitForDisplayed({ timeout: 15000 });
    const actDiagnosis = await typename.getText();
    const actdiagnosisCode = await (await $("(//tr[@class='odd']//td)[2]")).getText();
    const actMoreInfo = await (await $("//a[@title='More Information']")).getAttribute("href");
    await expect(actDiagnosis).toEqual(type);
    await expect(actdiagnosisCode).toEqual(code);
    await expect(actMoreInfo).toEqual(moreInfo);
  }

  async fillHospitalNoteField(data) {
    await this.hospitalNoteField.waitForDisplayed({ timeout: 20000 });
    await this.hospitalNoteField.clearValue();
    await this.hospitalNoteField.setValue(data);
  }
  
    async clickOnLink(text) {
    await (await $("//a[contains(text(),'" + text + "')]")).waitForClickable({
      timeout: 25000,
    });
    await $("//a[contains(text(),'" + text + "')]").click();
  }

     async clickOnButtonWithText(text) {
    await $("//button[contains(text(),'" + text + "')]").waitForDisplayed({
      timeout: 25000,
    });
    await $("//button[contains(text(),'" + text + "')]").click();
  }
}
module.exports = new CustomerAccountPage();
