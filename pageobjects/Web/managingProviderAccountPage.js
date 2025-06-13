const { $, browser } = require("@wdio/globals");
const BasePage = require("./testBase");
const { remote } = require("webdriverio");
const superAdminPage = require("./superAdminPage");
const customerAccountPage = require("./customerAccountPage");

class ManagingProviderAccountPage extends BasePage {
  get settingsButton() {
    return $("//a[@title='Notification']");
  }

  get dashboard_AllPatientsButton() {
    return $("(//a[contains(text(),'Dashboard - All Patients')])[2]");
  }

  get babyFirstNameField() {
    return $("(//input[@id='full_name']|//input[@id='first_name'])[1]");
  }

  get babyLastNameField() {
    return $("(//input[@id='full_name'])[2]|//input[@id='last_name']");
  }

  get birthDateField() {
    return $("#date_of_birth:nth-of-type(1)");
  }

  get birthTimeField() {
    return $("#time_of_birth:nth-of-type(1)");
  }

  get hospitalField() {
    return $("#hospital_id:nth-of-type(1),#hospital");
  }

  get caregiverField() {
    return $("//span[@class='select2-selection select2-selection--multiple']");
  }

  get weekField() {
    return $("//select[@name='gestational_week']");
  }

  get daysField() {
    return $("//select[@name='gestational_day']");
  }

  get treatmentLocationField() {
    return $("//label[contains(text(),'Hospital / Clinic')]");
  }

  get startServiceDateField() {
    return $("#service_date:nth-of-type(1)");
  }

  get hospitalLocationField() {
    return $("#hospital_location");
  }
  get hospitalRecordNumberField() {
    return $("#hospital_record_number");
  }

  get ECG_MAC_AddressField() {
    return $("#device_1_address");
  }

  get saturation_MAC_AddressField() {
    return $("#device_2_address");
  }

  get temperature_MAC_AddressField() {
    return $("#device_3_address");
  }

  get generateMedicalReportNumberButton() {
    return $("#mrn:nth-of-type(1)");
  }

  get QRCodeImage() {
    return $("//img[@alt='my alt']");
  }

  get searchField() {
    return $("//input[@type='search']");
  }

  get activePatientScreen() {
    return $("//section[@class='content-header']//h1");
  }

  get deletePatientMessage() {
    return $("//div[contains(text(),'Patient Deleted !!')]");
  }

  get updateButton() {
    return $("//a[@title='View / Update']");
  }

  get dateOfDischargeField() {
    return $("#date_of_discharge:nth-of-type(1)");
  }

  get LastNameField() {
    return $("#mother_last_name");
  }

  get relationshipField() {
    return $("#relationship");
  }

  get specialtyField() {
    return $("#provider_specialty");
  }

  get medicationField() {
    return $("#medication_on:nth-of-type(1)");
  }

  get currentDoseField() {
    return $("#dose");
  }

  get measurementField() {
    return $("#measurement");
  }

  get frequencyField() {
    return $("#frequency:nth-of-type(1)");
  }

  get intervalField() {
    return $("#interval");
  }

  get additionalInformationField() {
    return $("#additional_information");
  }

  get startDateField() {
    return $("#start_date:nth-of-type(1)");
  }
  async settigsButtonIsDisplayed() {
    await this.settingsButton.waitForDisplayed({ timeout: 20000 });
    return await this.settingsButton.isDisplayed();
  }

  async clickOnSettingsButton() {
    if ((await this.settigsButtonIsDisplayed()) === true) {
      await this.settingsButton.click();
    } else {
      throw new Error("❌ Settings button is not displayed on homepage");
    }
  }

  async hoverOnDashboard_AllPatientsButton() {
    await this.dashboard_AllPatientsButton.waitForDisplayed({ timeout: 15000 });
    await this.dashboard_AllPatientsButton.moveTo();
  }

  async clickOnAddANewPatientOption(data) {
    await $("(//a[contains(text(),'" + data + "')])[2]").waitForDisplayed({ timeout: 15000 });
    await $("(//a[contains(text(),'" + data + "')])[2]").click();
  }

  async babyFirstNameFieldIsDisplayed() {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 20000 });
    return await this.babyFirstNameField.isDisplayed();
  }

  async clickOnSaveFormButton() {
    await this.saveFormButton.waitForDisplayed({ timeout: 15000 });
    await this.saveFormButton.click();
  }

  async fillBabyNameField(text) {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyFirstNameField.clearValue();
    await this.babyFirstNameField.setValue(text);
  }

  async fillBabyLastNameField(text) {
    await this.babyLastNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyLastNameField.clearValue();
    await this.babyLastNameField.setValue(text);
  }

  async clickOnBirthDateField() {
    await this.birthDateField.waitForDisplayed({ timeout: 15000 });
    await this.birthDateField.click();
    await browser.keys("Enter");
  }

  async fillBirthTimeField(text) {
    await this.birthTimeField.waitForDisplayed({ timeout: 15000 });
    await this.birthTimeField.setValue(text);
  }

  async selectBabyGender(text) {
    await $("//input[@id='gender' and contains(following-sibling::text(), '" + text + "')]").waitForDisplayed({ timeout: 5000 });
    await $("//input[@id='gender' and contains(following-sibling::text(), '" + text + "')]").click();
  }

  async selecthospital(text) {
    await this.hospitalField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalField.click();
    await $("//option[contains(text(),'" + text + "')]").click();
  }

  async selectCaregiver(text) {
    await this.caregiverField.waitForDisplayed({ timeout: 15000 });
    await this.caregiverField.click();
    await $("//li[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 5000 });
    await $("//li[contains(text(),'" + text + "')]").click();
  }

  async selectWeek(text) {
    await this.weekField.waitForDisplayed({ timeout: 15000 });
    await this.weekField.click();
    await $("//option[contains(text(),'" + text + "')]").click();
  }
  async selectDays(text) {
    await this.daysField.waitForDisplayed({ timeout: 15000 });
    await this.daysField.click();
    await $("(//option[contains(text(),'" + text + "')])[7]").click();
  }

  async selectTreatmentLocationOnActivePatient(text) {
    await $("#patient_treatment_location:nth-of-type(1)").waitForDisplayed({ timeout: 5000 });
    await $("#patient_treatment_location:nth-of-type(1)").click();
    await $("(//option[contains(text(),'" + text + "')])[2]|//option[contains(text(),'" + text + "')]").click();
  }

  async selectTreatmentLocationField(text) {
    await $("//label[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 15000 });
    await $("//label[contains(text(),'" + text + "')]").click();
  }

  async selectStartServiceDateField() {
    await this.startServiceDateField.waitForDisplayed({ timeout: 15000 });
    await this.startServiceDateField.click();
  }

  async fillHospitalLocationField(text) {
    await this.hospitalLocationField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalLocationField.clearValue();
    await this.hospitalLocationField.setValue(text);
  }

  async fillHospitalRecordNumberField(text) {
    await this.hospitalRecordNumberField.waitForDisplayed({ timeout: 15000 });
    await this.hospitalRecordNumberField.setValue(text);
  }

  async fill_ECG_MAC_AddressField(text) {
    await this.ECG_MAC_AddressField.waitForDisplayed({ timeout: 15000 });
    await this.ECG_MAC_AddressField.setValue(text);
  }

  async fillSaturation_MAC_AddressField(text) {
    await this.saturation_MAC_AddressField.waitForDisplayed({ timeout: 15000 });
    await this.saturation_MAC_AddressField.setValue(text);
  }

  async fillTemperature_MAC_AddressField(text) {
    await this.temperature_MAC_AddressField.waitForDisplayed({ timeout: 15000 });
    await this.temperature_MAC_AddressField.setValue(text);
    await browser.pause(1000);
  }

  async clickOnGenerateMedicalReportNumberButton() {
    await this.generateMedicalReportNumberButton.waitForDisplayed({ timeout: 25000 });
    await this.generateMedicalReportNumberButton.click();
  }

  async QRImageIsDisplayed() {
    await this.QRCodeImage.waitForDisplayed({ timeout: 10000 });
    if ((await this.QRCodeImage.isDisplayed()) === true) {
      console.log("✅ QR image is successfully generated");
    } else {
      throw new Error("❌ QR image is not displayed");
    }
  }

  async verifyCreatedPatient(name, lastName, services, location, hospitalLocation, status) {
    await this.searchField.clearValue();
    await this.searchField.setValue(name);
    await browser.pause(2000);
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    var actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    var actualLastName = await $("(//tr[@class='odd']//td)[3]").getText();
    var actualServices = await $("(//tr[@class='odd']//td)[4]").getText();
    var actualLocation = await $("(//tr[@class='odd']//td)[5]").getText();
    var actualHospitalLocation = await $("(//tr[@class='odd']//td)[6]").getText();
    var actualStatus = await $("(//tr[@class='odd']//td)[7]").getText();
    await expect(actualName).toEqual(name);
    await expect(actualLastName).toEqual(lastName);
    await expect(actualServices).toEqual(services);
    await expect(actualLocation).toEqual(location);
    try {
      await expect(actualHospitalLocation).toEqual(hospitalLocation);
    } catch (error) {}
    await expect(actualStatus).toEqual(status);
  }

  async screenIsDisplayed(text) {
    await (await $("//h1[contains(text(),'" + text + "')]|//h2[contains(text(),'" + text + "')]")).waitForDisplayed({ timeout: 10000 });
    if ((await $("//h1[contains(text(),'" + text + "')]|//h2[contains(text(),'" + text + "')]").isDisplayed()) === true) {
      console.log("✅ " + text + " Screen is displayed");
    } else {
      throw new Error("❌" + text + " Screen is not displayed");
    }
  }

  async fillSearchField(data) {
    await this.searchField.clearValue();
    await this.searchField.setValue(data);
    await browser.pause(1500);
  }

  async verifyText(data) {
    const Text = await $("//td[contains(text(),'" + data + "')]|//div[contains(text(),'" + data + "')]");
    await Text.click();
    await Text.waitForDisplayed({ timeout: 20000 });
    if ((await Text.isDisplayed()) === true) {
      console.log(" ✅ Text ==> " + data + " is displayed");
    } else {
      throw new Error("❌ Text ==> " + data + " is not displayed");
    }
  }

  async defaultValuesDisplayed(expHospital, expLocation) {
    let defaultHospital = await $("(//select[@id='hospital']//option)[1]");
    let actualDefaultHospital = await defaultHospital.getText();

    let defaultLocation = await $("(//select[@id='patient_treatment_location']//option)[1]");
    let actualDefaultLocation = await defaultLocation.getText();
    await expect(actualDefaultHospital).toEqual(expHospital);
    await expect(actualDefaultLocation).toEqual(expLocation);
  }

  async patientListIsDisplayed() {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    if ((await $("(//tr[@class='odd']//td)[2]").isDisplayed()) === true) {
      console.log("✅ Patient is displayed after the applied dropdown values");
    } else {
      throw new Error("❌ Patient is not displayed after the applied dropdown values");
    }
  }

  async searchAndDeleteAddedUser(text) {
    await this.searchField.clearValue();
    await this.searchField.setValue(text);
    try {
      for (let i = 1; i < 4; i++) {
        await $("(//tr[@class='odd']//td)[4]").click();
        await $("//a[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 10000 });
        await superAdminPage.deleteButton.click();
        await superAdminPage.clickOnButtonWithText("Yes");
        await this.deletePatientMessage.waitForDisplayed({ timeout: 20000 });
        await this.deletePatientMessage.waitForDisplayed({ reverse: true, timeout: 20000 });
      }
    } catch (error) {}
  }

  async clickOnUpdateButton() {
    await this.updateButton.waitForClickable({ timeout: 15000 });
    await this.updateButton.click();
  }

  async removeRequiredField() {
    await this.babyFirstNameField.waitForDisplayed({ timeout: 20000 });
    await this.babyFirstNameField.clearValue();
    await this.babyLastNameField.waitForDisplayed({ timeout: 15000 });
    await this.babyLastNameField.clearValue();
  }

  async uncheckServiceCheckbox(text) {
    await $("//label[contains(text(),'" + text + "')]").waitForDisplayed({ timeout: 10000 });
    await $("//label[contains(text(),'" + text + "')]").click();
  }

  async verifyUserStatus(text) {
    if ((await $("//a[contains(text(),'" + text + "')]").isDisplayed()) === true) {
      throw new Error("❌ " + text + " is still displayed in the list");
    } else {
      console.log("✅ " + text + " is not displayed in the list");
    }
  }

  async verifyInactiveDetails(value1, value2) {
    const name = await $("//a[contains(text(),'" + value1 + "')]|//td[contains(text(),'" + value1 + "')]");
    await name.waitForDisplayed({ timeout: 10000 });
    const status = await $("//a[contains(text(),'" + value2 + "')]|//button[contains(text(),'" + value2 + "')]");
    if ((await name.isDisplayed()) === true && (await status.isDisplayed()) === true) {
      console.log("✅ Details are matching");
    } else {
      throw new Error("❌ Details are not matching " + value1 + value2);
    }
  }

  async verifyPatientTreatmentDetailsPopup() {
    await (await $("//h2[contains(text(),'Update Patient Treatment Details')]")).waitForDisplayed({ reverse: true, timeout: 7000 });
    if ((await $("//h2[contains(text(),'Update Patient Treatment Details')]").isDisplayed()) === true) {
      throw new Error("❌ Patient treatment details popup is still displayed");
    } else {
      console.log("✅ Patient treatment details popup is not displayed");
    }
  }

  async selectDischargeDate() {
    await this.dateOfDischargeField.waitForDisplayed({ timeout: 10000 });
    await this.dateOfDischargeField.click();
  }

  async selectDischagerNextday() {
    await this.dateOfDischargeField.waitForDisplayed({ timeout: 10000 });
    await this.dateOfDischargeField.click();
    await browser.keys("ArrowRight");
    await $("//h2[contains(text(),'Update Patient Treatment Details')]").click();
  }

  async selectProviderCheckbox(option) {
    await $("//input[@type='checkbox' and contains(following-sibling::text(),'" + option + "')]").waitForDisplayed({ timeout: 10000 });
    await browser.pause(1000);
    (await $("//input[@type='checkbox' and contains(following-sibling::text(),'" + option + "')]")).click();
  }

  async verifyAssignedProvider(text) {
    const provider = await $("(//tr[@class='odd']//td)[4]");
    await provider.waitForDisplayed({ timeout: 10000 });
    const actProvider = await provider.getText();
    expect(actProvider).toEqual(text);
  }

  async fillLastNameField(Data) {
    await this.LastNameField.waitForDisplayed({ timeout: 20000 });
    await this.LastNameField.click();
    await this.LastNameField.clearValue();
    await this.LastNameField.setValue(Data);
  }

  async fillRelationshipField(Data) {
    await this.relationshipField.waitForDisplayed({ timeout: 20000 });
    await this.relationshipField.click();
    await this.relationshipField.clearValue();
    await this.relationshipField.setValue(Data);
  }

  async clickOnSecondIndexLinkText(text) {
    const linkText = await $("(//a[contains(text(),'" + text + "')])[2]");
    await linkText.waitForClickable({ timeout: 10000 });
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async verifyCreatedCaregiver(name, mobile, relationship, children, status) {
    const actualName = await $("(//tr[@class='odd']//td)[2]").getText();
    const actualMobile = await $("(//tr[@class='odd']//td)[4]").getText();
    const actualRelationship = await $("(//tr[@class='odd']//td)[5]").getText();
    const actualChildren = await $("(//tr[@class='odd']//td)[6]").getText();
    const actualStatus = await $("(//tr[@class='odd']//td)[7]").getText();
    await expect(actualName).toEqual(name);
    await expect(actualMobile).toEqual(mobile);
    await expect(actualRelationship).toEqual(relationship);
    await expect(actualStatus).toEqual(status);
  }

  async clearNameField() {
    await customerAccountPage.nameField.waitForDisplayed({ timeout: 20000 });
    await customerAccountPage.nameField.click();
    await customerAccountPage.nameField.clearValue();
  }

  async fillAlreadyRegisteredEmail(name, lastName, mobile) {
    const actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
    await $("//button[contains(text(),'New Caregiver')]").click();
    await await customerAccountPage.fillNameField(name);
    await superAdminPage.fillLastNameField(lastName);
    await customerAccountPage.fillEmailField(actEmail);
    await customerAccountPage.fillMoblieNumberField(mobile);
    await $("//button[contains(text(),'Create')]").click();
  }

  async clickOnLinkText(text) {
    const linkText = await $("//a[contains(text(),'" + text + "')]");
    await linkText.waitForDisplayed({ timeout: 15000 });
    if ((await linkText.isDisplayed()) === true) {
      await linkText.click();
    } else {
      throw new Error("link is not displaying: " + text);
    }
  }

  async verifyCreatedOtherProvider(specialty, name, status) {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actSpecialty = await $("(//tr[@class='odd']//td)[2]").getText();
    const actName = await $("(//tr[@class='odd']//td)[3]").getText();
    const actStatus = await $("(//tr[@class='odd']//td)[6]").getText();
    try {
      expect(actSpecialty).toEqual(specialty);
    } catch (error) {}
    expect(actName).toEqual(name);
    expect(actStatus).toEqual(status);
  }

  async fillAlreadyRegisteredEmailForOtherProvider(name) {
    const actEmail = await $("(//tr[@class='odd']//td)[4]").getText();
    await $("//button[contains(text(),'New Other Provider')]").click();
    await await customerAccountPage.fillNameField(name);
    await customerAccountPage.fillEmailField(actEmail);
    await $("//button[contains(text(),'Create')]").click();
  }

  async fillSpecialtyField(data) {
    await this.specialtyField.click;
    await this.specialtyField.clearValue();
    await this.specialtyField.setValue(data);
  }

  async fillMedicationField(value) {
    await this.medicationField.waitForDisplayed({ timeout: 15000 });
    await this.medicationField.clearValue();
    await this.medicationField.setValue(value);
  }

  async fillCurrentDoseField(value) {
    await this.currentDoseField.clearValue();
    await this.currentDoseField.setValue(value);
  }

  async fillMeasurementField(value) {
    await this.measurementField.selectByVisibleText(value);
  }

  async fillFrequencyField(value) {
    await this.frequencyField.selectByVisibleText(value);
  }

  async fillIntervalField(value) {
    await this.intervalField.click();
  }

  async fillAdditionalInformationField(value) {
    await this.additionalInformationField.clearValue();
    await this.additionalInformationField.setValue(value);
  }

  async fillStartDateField() {
    await this.startDateField.click();
    await browser.keys("Enter");
  }

  async verifyCreatedMedication(medicationName, currentDose, measurement, frequency, interval, status) {
    await $("(//tr[@class='odd']//td)[2]").waitForDisplayed({ timeout: 15000 });
    const actMedication = await $("(//tr[@class='odd']//td)[2]").getText();
    const actDose = await $("(//tr[@class='odd']//td)[3]").getText();
    const actMeasurement = await $("(//tr[@class='odd']//td)[4]").getText();
    const actFrequency = await $("(//tr[@class='odd']//td)[5]").getText();
    const actInterval = await $("(//tr[@class='odd']//td)[6]").getText();
    const actStatus = await $("(//tr[@class='odd']//td)[10]").getText();

    expect(actMedication).toEqual(medicationName);
    expect(actDose).toEqual(currentDose);
    expect(actMeasurement).toEqual(measurement);
    expect(actFrequency).toEqual(frequency);
    expect(actInterval).toEqual(interval);
    expect(actStatus).toEqual(status);
  }
}
module.exports = new ManagingProviderAccountPage();
