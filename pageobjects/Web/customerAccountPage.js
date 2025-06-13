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

  // ===============================Master_Menu=============================

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

  get cvxCodeField() {
    return $("#cvx_code");
  }

  get vaccineNameField() {
    return $("#vaccine_name");
  }

  get brandNameField() {
    return $("#brand");
  }

  get descriptionField() {
    return $("#description");
  }

  get noteField() {
    return $("#note");
  }

  get statusField() {
    return $("#status");
  }

  get internalIDField() {
    return $("#internal_id");
  }

  get nonVaccineField() {
    return $("#non_vaccine");
  }

  get updateDateField() {
    return $("#update_date:nth-of-type(1)");
  }

  get favouriteField() {
    return $("#used");
  }

  get heartLessthanField() {
    return $("#heart_lessthan");
  }

  get heartGreaterthanField() {
    return $("#heart_greaterthan");
  }

  get respiratoryLessthanField() {
    return $("#respiratory_lessthan");
  }

  get respiratoryGreaterthanField() {
    return $("#respiratory_greaterthan");
  }

  get saturationLessthanField() {
    return $("#saturation_lessthan");
  }

  get saturationGreaterthanField() {
    return $("#saturation_greaterthan");
  }

  get pulseRateLessthanField() {
    return $("#pulserate_lessthan");
  }

  get pulseRateGreaterthanField() {
    return $("#pulserate_greaterthan");
  }

  get temperatureTypeField() {
    return $("#temperature_type");
  }

  get temperatureLessthanField() {
    return $("#temperature_lessthan");
  }

  get temperatureGreaterthanField() {
    return $("#temperature_greaterthan");
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

  // ===============================Master_Menu=============================

  async verifyClosedPopup(text) {
    const popupTitle = await $("//h2[contains(text(),'" + text + "')]");
    await popupTitle.waitForDisplayed({ reverse: true, timeout: 8000 });
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
    await suggestedDiagnosis.waitForClickable({ timeout: 15000 });
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
    await (
      await $("//a[contains(text(),'" + text + "')]")
    ).waitForClickable({
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

  async verifyCreatedHospitalNote(name) {
    await $("(//tr[@role='row'])[2]//td[1]").click();
    await $("(//tr[@role='row'])[2]//td[1]").waitForDisplayed({ timeout: 25000 });
    var actualName = await $("(//tr[@role='row'])[2]//td[1]").getText();
    await expect(actualName).toEqual(name);
  }

  async fillCVXCodeField(value) {
    await this.cvxCodeField.waitForDisplayed({ timeout: 15000 });
    await this.cvxCodeField.clearValue();
    await this.cvxCodeField.setValue(value);
  }

  async fillVaccineNameField(value) {
    await this.vaccineNameField.clearValue();
    await this.vaccineNameField.setValue(value);
  }

  async fillBrandNameField(value) {
    await this.brandNameField.clearValue();
    await this.brandNameField.setValue(value);
  }

  async fillDescriptionField(value) {
    await this.descriptionField.clearValue();
    await this.descriptionField.setValue(value);
  }

  async fillNoteField(value) {
    await this.noteField.clearValue();
    await this.noteField.setValue(value);
  }

  async fillStatusField(value) {
    await this.statusField.click();
    await $("//option[contains(text(),'" + value + "')]").click();
  }

  async fillInternalIDField(value) {
    await this.internalIDField.clearValue();
    await this.internalIDField.setValue(value);
  }

  async fillNonVaccineField(text) {
    await this.nonVaccineField.selectByVisibleText(text);
  }

  async fillUpdateDateField() {
    await this.updateDateField.click();
    await browser.keys("Enter");
  }

  async fillFavouriteField(value) {
    await this.favouriteField.waitForDisplayed({ timeout: 15000 });
    await this.favouriteField.selectByVisibleText(value);
  }

  async verifyCreatedVaccine(cvxCode, brandName, vaccineName, description, note, status, internalID, nonVaccine, favourite, date) {
    const CVXCode = await $("(//tr[@class='odd']//td)[2]");
    await CVXCode.waitForDisplayed({ timeout: 15000 });
    const actcvxCode = await CVXCode.getText();
    const actBrandName = await $("(//tr[@class='odd']//td)[3]").getText();
    const actVaccineName = await $("(//tr[@class='odd']//td)[4]").getText();
    const actDescription = await $("(//tr[@class='odd']//td)[5]").getText();
    const actNote = await $("(//tr[@class='odd']//td)[6]").getText();
    const actdStatus = await $("(//tr[@class='odd']//td)[7]").getText();
    const actInternalID = await $("(//tr[@class='odd']//td)[8]").getText();
    const actNonVaccine = await $("(//tr[@class='odd']//td)[9]").getText();
    const actFavourite = await $("(//tr[@class='odd']//td)[10]").getText();
    const actDate = await $("(//tr[@class='odd']//td)[11]").getText();

    await expect(actcvxCode).toEqual(cvxCode);
    await expect(actBrandName).toEqual(brandName);
    await expect(actVaccineName).toEqual(vaccineName);
    await expect(actDescription).toEqual(description);
    await expect(actNote).toEqual(note);
    await expect(actdStatus).toEqual(status);
    await expect(actInternalID).toEqual(internalID);
    await expect(actNonVaccine).toEqual(nonVaccine);
    await expect(actFavourite).toEqual(favourite);
  }

  async removefilledFields() {
    await this.cvxCodeField.clearValue();
    await this.vaccineNameField.clearValue();
    await $("//button[contains(text(),'Update')]").click();
  }

  async fillHeartLessThanField(value) {
    await this.heartLessthanField.waitForDisplayed({ timeout: 15000 });
    await this.heartLessthanField.clearValue();
    await this.heartLessthanField.setValue(value);
  }

  async fillHeartGreaterThanField(value) {
    await this.heartGreaterthanField.clearValue();
    await this.heartGreaterthanField.setValue(value);
  }

  async fillRespiratoryLessThanField(value) {
    await this.respiratoryLessthanField.clearValue();
    await this.respiratoryLessthanField.setValue(value);
  }

  async fillRespiratoryGreaterThanField(value) {
    await this.respiratoryGreaterthanField.clearValue();
    await this.respiratoryGreaterthanField.setValue(value);
  }

  async fillSaturationLessthanField(value) {
    await this.saturationLessthanField.clearValue();
    await this.saturationLessthanField.setValue(value);
  }

  async fillSaturationGreaterthanField(value) {
    await this.saturationGreaterthanField.clearValue();
    await this.saturationGreaterthanField.setValue(value);
  }

  async fillPulseRateLessthanField(value) {
    await this.pulseRateLessthanField.clearValue();
    await this.pulseRateLessthanField.setValue(value);
  }

  async fillPulseRateGreaterthanField(value) {
    await this.pulseRateGreaterthanField.clearValue();
    await this.pulseRateGreaterthanField.setValue(value);
  }

  async fillTemperatureTypeField(value) {
    await this.temperatureTypeField.selectByVisibleText(value);
  }

  async fillTemperatureLessthanField(value) {
    await this.temperatureLessthanField.clearValue();
    await this.temperatureLessthanField.setValue(value);
  }

  async fillTemperatureGreaterthanField(value) {
    await this.temperatureGreaterthanField.clearValue();
    await this.temperatureGreaterthanField.setValue(value);
  }

  async verifyAlertValues(heartLessThan, heartGreaterthan, respiratorylessThan, respiratoryGreaterthan, saturationlessThan, saturationGreaterthan, pulselessThan, pulseGreaterthan, tempType, temperaturelessThan, temperatureGreaterthan) {
    await $("(//tr[@class='odd']//td)[1]").waitForDisplayed({ timeout: 15000 });
    const actHeartRateLessThan = await $("(//tr[@class='odd']//td)[1]").getText();
    const actHeartRateGreaterThan = await $("(//tr[@class='odd']//td)[2]").getText();
    const actRespiratoryLessThan = await $("(//tr[@class='odd']//td)[3]").getText();
    const actRespiratoryGreaterThan = await $("(//tr[@class='odd']//td)[4]").getText();
    const actsaturationLessThan = await $("(//tr[@class='odd']//td)[5]").getText();
    const actsaturationGreaterThan = await $("(//tr[@class='odd']//td)[6]").getText();
    const actPulseLessThan = await $("(//tr[@class='odd']//td)[7]").getText();
    const actPulseGreaterThan = await $("(//tr[@class='odd']//td)[8]").getText();
    const actTemperatureType = await $("(//tr[@class='odd']//td)[9]").getText();
    const actTemperatureLessThan = await $("(//tr[@class='odd']//td)[10]").getText();
    const actTemperatureGreaterThan = await $("(//tr[@class='odd']//td)[11]").getText();

    await expect(actHeartRateLessThan).toEqual(heartLessThan);
    await expect(actHeartRateGreaterThan).toEqual(heartGreaterthan);
    await expect(actRespiratoryLessThan).toEqual(respiratorylessThan);
    await expect(actRespiratoryGreaterThan).toEqual(respiratoryGreaterthan);
    await expect(actsaturationLessThan).toEqual(saturationlessThan);
    await expect(actsaturationGreaterThan).toEqual(saturationGreaterthan);
    await expect(actPulseLessThan).toEqual(pulselessThan);
    await expect(actPulseGreaterThan).toEqual(pulseGreaterthan);
    await expect(actTemperatureType).toEqual(tempType);
    await expect(actTemperatureLessThan).toEqual(temperaturelessThan);
    await expect(actTemperatureGreaterThan).toEqual(temperatureGreaterthan);
  }
}
module.exports = new CustomerAccountPage();
