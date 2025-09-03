
const { remote } = require("webdriverio");
const BasePage = require("./testBase");
import { timeEnd } from "console";
import TestUtils from "../testUtils";
const path = require("path");
const fs = require("fs");

class AndroidPage extends BasePage {
  get emailField() {
    return $('//XCUIElementTypeTextField|//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_email"]');
  }
  get paswordField() {
    return $('//XCUIElementTypeSecureTextField|//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_password"]');
  }

  get signInButton() {
    return $('//XCUIElementTypeStaticText[@name="Login"]|//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/text"]|//android.widget.TextView[@resource-id="com.firsthc.alert.staging:id/text"]');
  }

  get noThanksButton() {
    return $("//*[@resource-id='android:id/autofill_dialog_no']");
  }

  get savePasswordOption() {
    return $("//android.widget.Button[@resource-id='android:id/autofill_save_no']");
  }

  get videoAndPicPermissionPopup() {
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]');
  }

  get recordAudioPopup() {
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]');
  }

  get deviceLocationPopup() {
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
  }

  get notificationAlertPermission() {
    return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']");
  }

  get okButton() {
    return $("//android.widget.Button");
  }

  get clickonbackbutton() {
    return $("android.widget.ImageButton");
  }

  get dashboard() {
    return $("(//android.widget.TextView)[1]");
  }

  get FHDAMobileProviderDashborad() {
    return $("//android.widget.EditText[@resource-id='com.firsthc.alert.staging:id/tie_search']");
  }

  get downloadAnywayButton() {
    return $("//input[@value='Download anyway']");
  }

  get settingsModule() {
    return $("(//android.widget.TextView)[7]|//XCUIElementTypeStaticText[@name='Settings']");
  }

  get logoutOption() {
    return $('//android.widget.TextView[@text="Logout"]|//XCUIElementTypeStaticText[@name="Logout"]');
  }

  get noButton() {
    return $('//android.widget.Button[@resource-id="com.firsthc.alert.staging:id/btn_no"] | //android.widget.Button[@resource-id="com.app.neonatal.staging:id/btn_no"]|//XCUIElementTypeButton[contains(@name, "NO")]');
  }

  get vitalSign() {
    return $("(//android.widget.TextView)[2]|(//XCUIElementTypeStaticText)[3]");
  }

  get backButton() {
    return $("(//android.widget.ImageView)[1]|//XCUIElementTypeButton[@name='ic back']");
  }

  get medicalRecord() {
    return $("(//android.widget.TextView)[3]|//XCUIElementTypeImage[@name='boxCard_darkblue']");
  }

  get diagnosis() {
    return $("(//android.widget.TextView)[3]|//XCUIElementTypeStaticText[@name='Diagnosis']");
  }

  get medication() {
    return $("(//android.widget.TextView)[4]|//XCUIElementTypeStaticText[@name='Medications']");
  }

  get results() {
    return $("(//android.widget.TextView)[5]|//XCUIElementTypeStaticText[@name='Results']");
  }

  get tracker() {
    return $("(//android.widget.TextView)[6]|//XCUIElementTypeStaticText[@name='Tracker']");
  }

  get vaccinations() {
    return $("(//android.widget.TextView)[7]|//XCUIElementTypeStaticText[@name='Vaccinations']");
  }

  get media() {
    return $("(//android.widget.TextView)[8]|//XCUIElementTypeStaticText[@name='Media']");
  }

  get documents() {
    return $("(//android.widget.TextView)[9]|//XCUIElementTypeStaticText[@name='Documents']");
  }

  get sendUsresult() {
    return $("(//android.widget.TextView)[10]|//XCUIElementTypeStaticText[@name='Send us a result']");
  }

  get provider() {
    return $("(//android.widget.TextView)[4]|//XCUIElementTypeImage[@name='boxCard_pink']");
  }

  get providerTab() {
    return $("(//android.widget.TextView)[2]|//XCUIElementTypeButton[@name='Providers']");
  }

  get myContactInformation() {
    return $("(//android.widget.TextView)[2]|//XCUIElementTypeStaticText[@name='My Contact Information']");
  }

  get myAccount() {
    return $("(//android.widget.TextView)[3]|//XCUIElementTypeStaticText[@name='My Account']");
  }

  get myBabysInformation() {
    return $("(//android.widget.TextView)[4]|(//XCUIElementTypeStaticText)[5]");
  }

  get changeChild() {
    return $("(//android.widget.TextView)[5]|//XCUIElementTypeStaticText[@name='Change Child']");
  }

  get changePassword() {
    return $("(//android.widget.TextView)[6]|//XCUIElementTypeStaticText[@name='Change Password']");
  }

  get FHDCHamburgerButton() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_navigation_menu"]|//XCUIElementTypeButton[@name="icn menu"]');
  }

  get verifyiOSHompgage() {
    return $('//XCUIElementTypeTextField[@value="Search Patient"]|//XCUIElementTypeImage[@name="boxCard_blue"]');
  }

  get notificationCancelButton() {
    return $('//XCUIElementTypeButton[@name="Cancel"]');
  }

  get appointmentsTab() {
    return $("(//android.widget.TextView)[3]|//XCUIElementTypeButton[@name='Appointments']");
  }

  get editProfileIcon() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_edit_pic"]|//XCUIElementTypeButton[@name="icn edit"]');
  }

  get galleryOption() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_gallery"]|//XCUIElementTypeButton[@name="From Gallery"]');
  }

  get selectImage() {
    return $('//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"]|(//XCUIElementTypeImage)[4]');
  }

  get cropButton() {
    return $('//android.widget.Button[@resource-id="com.app.neonatal.staging:id/crop_image_menu_crop"]|//XCUIElementTypeStaticText[@name="Choose"]');
  }

  get verifyImage() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_child_profile"]|//XCUIElementTypeImage');
  }

  get moduleBackButton() {
    return $('//XCUIElementTypeButton[@name="icn back"]');
  }

  get allPatientsTab() {
    return $("//android.widget.TextView[contains(@text,'All Patients')]|//XCUIElementTypeButton[contains(@name,'All Patients')]");
  }

  get myPatientsTab() {
    return $("//android.widget.TextView[contains(@text,'My Patients')]|//XCUIElementTypeButton[contains(@name,'My Patients')]");
  }

  get alertsTab() {
    return $("//android.widget.TextView[contains(@text,'Alerts')]|//XCUIElementTypeButton[contains(@name,'Alerts')]");
  }

  get settingsTab() {
    return $("//android.widget.TextView[contains(@text,'Settings')]|//XCUIElementTypeButton[contains(@name,'Settings')]");
  }
  get audioAlertSettingsTab() {
    return $("//android.widget.TextView[contains(@text,'Audio Alert Setting')]|//XCUIElementTypeStaticText[contains(@name,'Audio Alert Setting')]");
  }

  get myProfileTab() {
    return $("//android.widget.TextView[contains(@text,'My Profile')]|//XCUIElementTypeStaticText[contains(@name,'My Profile')]");
  }

  get changePasswordTab() {
    return $("//android.widget.TextView[contains(@text,'Change Password')]|//XCUIElementTypeStaticText[contains(@name,'Change Password')]");
  }

  get contactUsTab() {
    return $("//android.widget.TextView[contains(@text,'Contact Us')]|//XCUIElementTypeStaticText[contains(@name,'Contact Us')]");
  }

  get termsAndConditionsTab() {
    return $("//android.widget.TextView[contains(@text,'Terms & Conditions')]|//XCUIElementTypeStaticText[contains(@name,'Terms & Conditions')]");
  }

  get privacyPolicyTab() {
    return $("//android.widget.TextView[contains(@text,'Privacy Policy')]|//XCUIElementTypeStaticText[contains(@name,'Privacy Policy')]");
  }

  get logOutTab() {
    return $("//android.widget.TextView[contains(@text,'Logout')]|//XCUIElementTypeStaticText[contains(@name,'Logout')]");
  }

  get backButton() {
    return $("(//android.widget.ImageView)[1]|//XCUIElementTypeButton[@name='ic back']");
  }

  get milkMinutesField() {
    return $("//android.widget.EditText[contains(@text,'Minutes')]");
  }

  get iosMilkMinutesField() {
    return $('//XCUIElementTypeTextField[@value="Minutes"]');
  }

  get addedMinutes() {
    return $("(//android.view.View)[3]");
  }

  get selectMilkField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_select_milk"]|//XCUIElementTypeTextField[@value="Select"]');
  }

  get bottleVolumnField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_volume"]|//XCUIElementTypeTextField[@value="00"]');
  }

  get selectFortificationField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_fortification"]|//XCUIElementTypeTextField[@value="Select Human Milk Fortifier"]');
  }

  get caloriesField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_calories"]|//XCUIElementTypeTextField[@value="20"]');
  }

  get noteField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_note"]|//XCUIElementTypeTextField[@value="Note"]');
  }

  get crossButton() {
    return $('//XCUIElementTypeButton[@name="icn close"]|//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_close"]');
  }

  get rightArrowButton() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_right_arrow"]');
  }

  get diaperWeightField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_gram"]');
  }

  get dateField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_growth_date"]');
  }

  get form_OK_Button() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  get heightInchField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_growth_inch"]');
  }

  get weightPoundField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_growth_pound"]');
  }

  get weightOunceField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_growth_ounce"]');
  }

  get headCircumferenceField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_head_inch"]');
  }

  get growthHeightRecord() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_height_value"]');
  }

  get growthWeightRecord() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_weight_value"]');
  }

  get growthHeadRecord() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_head_circum_value"]');
  }

  get deleteButton() {
    return $("//android.widget.TextView[contains(@text,'Delete')]");
  }

  get noRecordFoundText() {
    return $("//android.widget.TextView[contains(@text,'No Record Found.')]");
  }

  get temperatureModule() {
    return $('//XCUIElementTypeStaticText[@name="Temperature"]');
  }

  get iosSaveButton() {
    return $('//XCUIElementTypeStaticText[@name="Select"]');
  }

  get iosPickerWheel() {
    return "//XCUIElementTypePickerWheel";
  }

  get laboratoryChart() {
    return $("//android.view.ViewGroup[@resource-id='com.app.neonatal.staging:id/chart_lab']");
  }

  get dropdownArrow() {
    return $("//android.view.ViewGroup//android.widget.Spinner");
  }

  async open(url) {
    var data = TestUtils.getUserCredetials(url);
    await browser.pause(1000);
    var url = data[0];
    console.log("LOGIN PAGE URL:" + url);
    await browser.url(url);
  }

  async login(userName) {
    var data = TestUtils.getUserCredetials(userName);
    await browser.pause(2000);
    var username = data[0];
    var password = data[1];
    try {
      await browser.acceptAlert();
    } catch (error) {}

    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.click();
    await this.verifyNoThanksPopup();
    await this.emailField.setValue(username);
    await this.paswordField.click();
    await this.paswordField.setValue(password);
    await this.signInButton.click();
  }

  async returnText() {
    var actAtt = await this.search.getAttribute("label");
    return actAtt;
  }

  async denySavePasswordPopup() {
    try {
      await this.savePasswordOption.waitForDisplayed({ timeout: 5000 });
      await this.savePasswordOption.click();
    } catch (error) {}
  }

  async clickOnRecordAudioPopup() {
    await this.recordAudioPopup.waitForDisplayed({ timeout: 20000 });
    await this.recordAudioPopup.click();
  }

  async clickOnOkButton() {
    await this.okButton.waitForDisplayed({ timeout: 20000 });
    await this.okButton.click();
  }

  async dashboardIsDisplayed() {
    await this.dashboard.waitForDisplayed({ timeout: 25000 });
    return this.dashboard.isDisplayed();
  }

  async verifyDashboard() {
    if ((await this.dashboardIsDisplayed()) === true) {
      console.log("User successfully redirected to homepage");
    } else {
      throw new Error("Dashboard is not displayed");
    }
  }

  async verifyNoThanksPopup() {
    try {
      await this.noThanksButton.waitForDisplayed({ timeout: 5000 });
      await this.noThanksButton.click();
    } catch (error) {}
  }

  async fillEmailField(email) {
    await this.emailField.click();
    await this.verifyNoThanksPopup();
    await this.emailField.clearValue();
    await this.emailField.setValue(email);
  }

  async fillPasswordField(password) {
    await this.paswordField.click();
    await this.verifyNoThanksPopup();
    await this.paswordField.clearValue();
    await this.paswordField.setValue(password);
    await this.paswordField.click();
  }

  async FHDAMobileProviderDashboradIsDisplayed() {
    await this.FHDAMobileProviderDashborad.waitForDisplayed({ timeout: 20000 });
    return await this.FHDAMobileProviderDashborad.isDisplayed();
  }

  async verifyFHDAMobileProviderDashboradIsDisplayed() {
    if ((await this.FHDAMobileProviderDashboradIsDisplayed()) === true) {
      console.log("User is successfully redirected to homepage");
    } else {
      throw new Error("Failed to redirect on dashboard");
    }
  }

  async clickOnMobileButtonWithText(text) {
    const buttonText = await $("//android.widget.Button[contains(@text,'" + text + "')]|(//XCUIElementTypeButton[contains(@name,'" + text + "')])[1]");
    await buttonText.waitForDisplayed({ timeout: 20000 });

    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click();
    } else {
      throw new Error("❌ Button is not displaying: " + text);
    }
  }

  async verifyMobileValidationMessage(text) {
    const messageText1 = await $("//XCUIElementTypeStaticText[@name='" + text + "']|//android.widget.Toast");
    var actualMessage = await messageText1.getText();
    await expect(actualMessage).toEqual(text);
    await messageText1.waitForDisplayed({ reverse: true, timeout: 20000 });
  }

  async settingsTAbIsDisplayed() {
    await this.settingsTab.waitForDisplayed({ timeout: 20000 });
    return await this.settingsTab.isDisplayed();
  }

  async clickOnSettingsTAb() {
    if ((await this.settingsTAbIsDisplayed()) === true) {
      await this.settingsTab.click();
    } else {
      throw new Error("❌ Failed to click on settings tab");
    }
  }

  async logoutOptionIsDisplayed() {
    await this.logoutOption.waitForDisplayed({ timeout: 20000 });
    return await this.logoutOption.isDisplayed();
  }

  async clickOnLogoutOption() {
    if ((await this.logoutOptionIsDisplayed()) === true) {
      await this.logoutOption.click();
    } else {
      throw new Error("❌ logout option is not visible");
    }
  }

  async noButtonIsDisplayed() {
    await this.noButton.waitForDisplayed({ timeout: 20000 });
    return await this.noButton.isDisplayed();
  }

  async patientVitalSigns() {
    const patientVital = await $("(//android.widget.TextView)[2]");
    await patientVital.waitForDisplayed({ timeout: 25000 });
    var actualText = await patientVital.getText();
    var expectedText = "Patient's Vital Signs";
    if (expectedText.includes(actualText)) {
      console.log("First module of app is verified");
    } else {
      console.log("First module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientsMedicalRecord() {
    const medicalRecord = await $("(//android.widget.TextView)[3]");
    await medicalRecord.waitForDisplayed({ timeout: 25000 });
    let actualText = await medicalRecord.getText();
    let expectedText = "Patient's Medical Record";
    if (actualText.includes(expectedText)) {
      console.log("Second module of healthcare app is matching");
    } else {
      console.log("Second module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientsProviders() {
    const providers = await $("(//android.widget.TextView)[4]");
    await providers.waitForDisplayed({ timeout: 25000 });
    let actualText = await providers.getText();
    let expectedText = "Patient's Providers";
    if (actualText.includes(expectedText)) {
      console.log("Third module of healthcare app is matching");
    } else {
      console.log("Third module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async needHelp() {
    const help = await $("(//android.widget.TextView)[5]");
    await help.waitForDisplayed({ timeout: 25000 });
    let actualText = await help.getText();
    let expectedText = "I need help";
    if (actualText.includes(expectedText)) {
      console.log("Fourth module of healthcare app is matching");
    } else {
      console.log("Fourth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientsVideoCamera() {
    const videoCamera = await $("(//android.widget.TextView)[6]");
    await videoCamera.waitForDisplayed({ timeout: 25000 });
    let actualText = await videoCamera.getText();
    let expectedText = "Patient's Video Camera";
    if (actualText.includes(expectedText)) {
      console.log("Fifth module of healthcare app is matching");
    } else {
      console.log("Fifth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async settings() {
    const settings = await $("(//android.widget.TextView)[7]");
    await settings.waitForDisplayed({ timeout: 25000 });
    let actualText = await settings.getText();
    let expectedText = "Settings";
    if (actualText.includes(expectedText)) {
      console.log("Sixth module of healthcare app is matching");
    } else {
      console.log("Sixth module is not verified on homepage Expected " + expectedText + " Actual " + actualText);
    }
  }

  async patientVitalIsDisplayed() {
    await this.vitalSign.waitForDisplayed({ timeout: 25000 });
    return await this.vitalSign.isDisplayed();
  }

  async clickOnPatientsVitalSigns() {
    if ((await this.patientVitalIsDisplayed()) === true) {
      await this.vitalSign.click();
    } else {
      throw new Error("Failed to click on patient's vital signs module on homepage");
    }
  }

  async clickOnModuleBackButton() {
    await this.moduleBackButton.waitForDisplayed({ timeout: 15000 });
    await this.moduleBackButton.click();
  }

  async medicalRecordIsDisplayed() {
    await this.medicalRecord.waitForDisplayed({ timeout: 25000 });
    return await this.medicalRecord.isDisplayed();
  }

  async clickOnMedicalReport() {
    if ((await this.medicalRecordIsDisplayed()) === true) {
      await this.medicalRecord.click();
    } else {
      throw new Error("Medical record is not displayed on homepage");
    }
  }

  async heartRateIsDisplayed() {
    const heartRate = await $("(//android.widget.TextView)[3]|//XCUIElementTypeStaticText[@name='Heart Rate']");
    await heartRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await heartRate.getText();
    let expectedText = "Heart Rate";
    if (actualText.includes(expectedText)) {
      console.log("Heart rate is displayed inside patient vital signs");
    } else {
      console.log("Heart rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async respiratoryRateDisplayed() {
    const respiratoryRate = await $("(//android.widget.TextView)[7]|//XCUIElementTypeStaticText[@name='Respiratory Rate']");
    await respiratoryRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await respiratoryRate.getText();
    let expectedText = "Respiratory Rate";
    if (actualText.includes(expectedText)) {
      console.log("Respiratory Rate is displayed inside patient vital signs");
    } else {
      console.log("Respiratory Rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async TemperatureIsDisplayed() {
    const temp = await $('(//android.widget.TextView)[9]|//XCUIElementTypeStaticText[@name="Temperature"]');
    let actualText = await temp.getText();
    let expectedText = "Temperature";
    if (actualText.includes(expectedText)) {
      console.log("Temperature is displayed inside patient vital signs");
    } else {
      console.log("Temperature is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async deviceStatusIsDisplayed() {
    const status = await $("(//android.widget.TextView)[9]|(//XCUIElementTypeStaticText)[10]");
    let actualText = await status.getText();
    let expectedText = "Device Status";
    if (actualText.includes(expectedText)) {
      console.log("Device Status is displayed inside patient vital signs");
    } else {
      console.log("Device Status is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async o2SaturationIsDisplayed() {
    const o2Saturation = await $("(//android.widget.TextView)[5]|//XCUIElementTypeStaticText[@name='O2 Saturation']");
    await o2Saturation.waitForDisplayed({ timeout: 25000 });
    let actualText = await o2Saturation.getText();
    let expectedText = "O2 Saturation";
    if (actualText.includes(expectedText)) {
      console.log("O2 Saturation is displayed inside patient vital signs");
    } else {
      console.log("O2 Saturation is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async diagnosisIsDisplayed() {
    await this.diagnosis.waitForDisplayed({ timeout: 25000 });
    return await this.diagnosis.isDisplayed();
  }

  async medicationIsDisplayed() {
    await this.medication.waitForDisplayed({ timeout: 25000 });
    return await this.medication.isDisplayed();
  }

  async resultsIsDisplayed() {
    await this.results.waitForDisplayed({ timeout: 25000 });
    return await this.results.isDisplayed();
  }

  async trackerIsDisplayed() {
    await this.tracker.waitForDisplayed({ timeout: 25000 });
    return await this.tracker.isDisplayed();
  }

  async vaccinationsIsDisplayed() {
    await this.vaccinations.waitForDisplayed({ timeout: 25000 });
    return await this.vaccinations.isDisplayed();
  }

  async mediaIsDisplayed() {
    await this.media.waitForDisplayed({ timeout: 25000 });
    return await this.media.isDisplayed();
  }

  async documentsIsDisplayed() {
    await this.documents.waitForDisplayed({ timeout: 25000 });
    return await this.documents.isDisplayed();
  }

  async sendUsresultIsDisplayed() {
    await this.sendUsresult.scrollIntoView();
    await this.sendUsresult.waitForDisplayed({ timeout: 25000 });
    return await this.sendUsresult.isDisplayed();
  }

  async providerIsDisplayed() {
    await this.provider.waitForDisplayed({ timeout: 25000 });
    return await this.provider.isDisplayed();
  }

  async clickOnProvider() {
    if ((await this.providerIsDisplayed()) === true) {
      await this.provider.click();
    } else {
      throw new Error("Provider module is not displayed");
    }
  }

  async iOShomepageIsDisplayed() {
    await this.verifyiOSHompgage.waitForDisplayed({ timeout: 25000 });
    return await this.verifyiOSHompgage.isDisplayed();
  }

  async providerTabIsDisplayed() {
    await this.providerTab.waitForDisplayed({ timeout: 25000 });
    return await this.providerTab.isDisplayed();
  }

  async appointmentsTabIsDisplayed() {
    await this.appointmentsTab.waitForDisplayed({ timeout: 25000 });
    return await this.appointmentsTab.isDisplayed();
  }

  async settingsModuleIsDisplayed() {
    await this.settingsModule.waitForDisplayed({ timeout: 25000 });
    return await this.settingsModule.isDisplayed();
  }

  async clickOnSettingsModule() {
    if ((await this.settingsModuleIsDisplayed()) === true) {
      await this.settingsModule.click();
    } else {
      throw new Error("❌ Settings module is not displayed on dashboard");
    }
  }

  async myContactInformationIsDisplayed() {
    await this.myContactInformation.waitForDisplayed({ timeout: 25000 });
    return await this.myContactInformation.isDisplayed();
  }

  async myAccountIsDisplayed() {
    await this.myAccount.waitForDisplayed({ timeout: 25000 });
    return await this.myAccount.isDisplayed();
  }

  async myBabysInformationIsDisplayed() {
    await this.myBabysInformation.waitForDisplayed({ timeout: 25000 });
    return await this.myBabysInformation.isDisplayed();
  }

  async changeChildIsDisplayed() {
    await this.changeChild.waitForDisplayed({ timeout: 25000 });
    return await this.changeChild.isDisplayed();
  }

  async changePasswordIsDisplayed() {
    await this.changePassword.waitForDisplayed({ timeout: 25000 });
    return await this.changePassword.isDisplayed();
  }

  async clickOnFHDCHamburgerButton() {
    await this.FHDCHamburgerButton.waitForDisplayed({ timeout: 20000 });
    await this.FHDCHamburgerButton.click();
  }

  async verifyScreenIsDisplayed(data) {
    const title = await $("//android.widget.TextView[contains(@text,'" + data + "')]|//android.widget.Button[contains(@text,'" + data + "')]|//android.widget.TextView[contains(@text,'" + data + "')]|//android.widget.Button[contains(@text,'" + data + "')]|//android.widget.EditText[contains(@text,'" + data + "')]|//XCUIElementTypeButton[contains(@name,'" + data + "')]|//XCUIElementTypeStaticText[contains(@name,'" + data + "')]");
    await title.waitForDisplayed({ timeout: 15000 });
    if ((await title.isDisplayed()) === true) {
      console.log("✅ " + data + " screen is dispalyed");
    } else {
      throw new Error("❌ " + data + "screen is not dispalyed");
    }
  }

  async clickOnOption(data) {
    const option = await $('//android.widget.TextView[contains(@text,"' + data + '")]|//XCUIElementTypeButton[contains(@name,"' + data + '")]|//XCUIElementTypeStaticText[contains(@name,"' + data + '")]');
    await option.scrollIntoView();
    await option.waitForDisplayed({ timeout: 15000 });
    if ((await option.isDisplayed()) === true) {
      await option.click();
    } else {
      throw new Error("❌ " + option + " is not dispalyed");
    }
  }

  async clickOnIosOption(data) {
    const option = await $('//XCUIElementTypeButton[contains(@name,"' + data + '")]|//XCUIElementTypeStaticText[contains(@name,"' + data + '")]');
    await option.waitForDisplayed({ timeout: 15000 });
    if ((await option.isDisplayed()) === true) {
      await option.click();
    } else {
      throw new Error("❌ " + option + " is not dispalyed");
    }
  }

  async clickOnEditProfileIcon() {
    await this.editProfileIcon.waitForDisplayed({ timeout: 15000 });
    await this.editProfileIcon.click();
  }

  async uploadFileImage(image) {
    const path = require("path");
    const fileName = image.endsWith(".jpg") ? image : image + ".jpg";
    const filePath = path.join(__dirname, "..", "testData", "Images", fileName);
    const imageBase64 = fs.readFileSync(filePath, { encoding: "base64" });
    await driver.pushFile("/sdcard/Download/image.jpg", imageBase64);
    await this.galleryOption.waitForDisplayed({ timeout: 15000 });
    await this.galleryOption.click();
    await this.selectImage.click();
    await this.cropButton.click();
    await this.verifyImage.waitForDisplayed({ timeout: 15000 });
    if ((await this.verifyImage.isDisplayed()) === true) {
      console.log("✅ Baby's image updated successfully");
    } else {
      throw new Error("❌ Updated image is not dispalyed");
    }
  }

  async downloadApp() {
    const downloadDir = path.resolve(__dirname, "../../downloadApps");
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
      console.log(`Created folder: ${downloadDir}`);
    } else {
      console.log(`Folder already exists: ${downloadDir}`);
    }
    await this.downloadAnywayButton.waitForDisplayed({ timeout: 35000 });
    await this.downloadAnywayButton.click();
    await browser.pause(60000);
    const apkFile = fs.readdirSync(downloadDir).find((file) => file.endsWith(".apk"));

    try {
      const files = fs.readdirSync(downloadDir);

      files.forEach((file) => {
        const oldFilePath = path.join(downloadDir, file);

        if (fs.statSync(oldFilePath).isFile()) {
          const newFileName = file.substring(0, 4) + path.extname(file);
          const newFilePath = path.join(downloadDir, newFileName);

          if (oldFilePath !== newFilePath && !fs.existsSync(newFilePath)) {
            fs.renameSync(oldFilePath, newFilePath);
            console.log(`Renamed: ${file} → ${newFileName}`);
          } else if (fs.existsSync(newFilePath)) {
            console.warn(`Skipped (target file exists): ${newFileName}`);
          }
        }
      });
    } catch (err) {
      console.error("Error renaming files:", err);
    }
  }

  async selectChildOption(option) {
    try {
      await $("//XCUIElementTypeStaticText[contains(@name, '" + option + "')]|//android.widget.TextView[contains(@text,'" + option + "')]").waitForDisplayed({ timeout: 30000 });
      (await $("//XCUIElementTypeStaticText[contains(@name, '" + option + "')]|//android.widget.TextView[contains(@text,'" + option + "')]")).click();
    } catch (error) {}
  }

  async clickOnMedicationTab() {
    if ((await this.medicationIsDisplayed()) === true) {
      await this.medication.click();
    } else {
      throw new Error("Medication tab is not displayed");
    }
  }

  async clickOnBackButton() {
    await this.backButton.waitForDisplayed({ timeout: 25000 });
    await this.backButton.click();
  }

  async clickOnNotificationButton() {
    try {
      await this.notificationCancelButton.waitForDisplayed({ timeout: 80000 });
      await this.notificationCancelButton.click();
    } catch (error) {}
  }

  async verifyMobileMedicationDetails(medicationName, currentDose_And_measurement, frequency, interval) {
    await $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_diagnosis_title"]|(//XCUIElementTypeCell//XCUIElementTypeStaticText)[1]').waitForDisplayed({ timeout: 15000 });
    const actMedication = await $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_diagnosis_title"]|(//XCUIElementTypeCell//XCUIElementTypeStaticText)[1]').getText();
    const actDose = await $("(//android.widget.TextView)[4]|(//XCUIElementTypeCell//XCUIElementTypeStaticText)[3]").getText();
    const actFrequency = await $("(//android.widget.TextView)[6]|(//XCUIElementTypeCell//XCUIElementTypeStaticText)[5]").getText();
    const actInterval = await $("(//android.widget.TextView)[8]|(//XCUIElementTypeCell//XCUIElementTypeStaticText)[7]").getText();

    expect(actMedication).toEqual(medicationName);
    expect(actDose).toEqual(currentDose_And_measurement);
    expect(actFrequency).toEqual(frequency);
    expect(actInterval).toEqual(interval);
  }

  async allPatientsTabIsDisplayed() {
    await this.allPatientsTab.waitForDisplayed({ timeout: 15000 });
    return await this.allPatientsTab.isDisplayed();
  }

  async myPatientsTabIsDisplayed() {
    await this.myPatientsTab.waitForDisplayed({ timeout: 15000 });
    return await this.myPatientsTab.isDisplayed();
  }

  async alertsTabIsDisplayed() {
    await this.alertsTab.waitForDisplayed({ timeout: 15000 });
    return await this.alertsTab.isDisplayed();
  }

  async settingsTabIsDisplayed() {
    await this.settingsTab.waitForDisplayed({ timeout: 15000 });
    return await this.settingsTab.isDisplayed();
  }

  async verifyProviderDashboard() {
    await this.allPatientsTabIsDisplayed();
    await this.myPatientsTabIsDisplayed();
    await this.alertsTabIsDisplayed();
    await this.settingsTabIsDisplayed();
  }

  async audioAlertSettingsTabIsDisplayed() {
    await this.audioAlertSettingsTab.waitForDisplayed({ timeout: 15000 });
    return await this.audioAlertSettingsTab.isDisplayed();
  }

  async myProfileTabIsDisplayed() {
    await this.myProfileTab.waitForDisplayed({ timeout: 15000 });
    return await this.myProfileTab.isDisplayed();
  }

  async changePasswordTabIsDisplayed() {
    await this.changePasswordTab.waitForDisplayed({ timeout: 15000 });
    return await this.changePasswordTab.isDisplayed();
  }

  async contactUsTabIsDisplayed() {
    await this.contactUsTab.waitForDisplayed({ timeout: 15000 });
    return await this.contactUsTab.isDisplayed();
  }

  async termsAndConditionsTabIsDisplayed() {
    await this.termsAndConditionsTab.waitForDisplayed({ timeout: 15000 });
    return await this.termsAndConditionsTab.isDisplayed();
  }

  async privacyPolicyTabIsDisplayed() {
    await this.privacyPolicyTab.waitForDisplayed({ timeout: 15000 });
    return await this.privacyPolicyTab.isDisplayed();
  }

  async logOutTabIsDisplayed() {
    await this.logOutTab.waitForDisplayed({ timeout: 15000 });
    return await this.logOutTab.isDisplayed();
  }

  async verifyProviderSettingsModule() {
    await this.audioAlertSettingsTabIsDisplayed();
    await this.myProfileTabIsDisplayed();
    await this.changePasswordTabIsDisplayed();
    await this.contactUsTabIsDisplayed();
    await this.termsAndConditionsTabIsDisplayed();
    await this.privacyPolicyTabIsDisplayed();
    await this.logOutTabIsDisplayed();
  }

  async fillMinutesField(data) {
    await this.milkMinutesField.waitForDisplayed({ timeout: 15000 });
    await this.milkMinutesField.setValue(data);
  }

  async verifyAddedMinutes(minutes) {
    await this.addedMinutes.waitForDisplayed({ timeout: 15000 });
    const actMin = await this.addedMinutes.getText();
    console.log("time" + actMin);
    const minText = await actMin.replace("00::00", "");
    console.log("time text" + minText);
    expect(actMin).toEqual(minutes);
  }

  async fillSelectMilkField(data) {
    await this.selectMilkField.waitForDisplayed({ timeout: 15000 });
    await this.selectMilkField.click();
    await $("//android.widget.TextView[contains(@text,'" + data + "')]").click();
  }

  async fillIosSelectMilkField(data) {
    await this.selectMilkField.waitForDisplayed({ timeout: 15000 });
    await this.selectMilkField.click();
  }

  async fillBottleVolumnField(data) {
    await this.bottleVolumnField.waitForDisplayed({ timeout: 15000 });
    await this.bottleVolumnField.setValue(data);
  }

  async fillSelectFortificationField(data) {
    await this.selectFortificationField.waitForDisplayed({ timeout: 15000 });
    await this.selectFortificationField.click();
    const option = await $("//android.widget.TextView[contains(@text,'" + data + "')]");
    await option.waitForDisplayed({ timeout: 15000 });
    await option.click();
  }

  async fillIosSelectFortificationField(data) {
    await this.selectFortificationField.waitForDisplayed({ timeout: 15000 });
    await this.selectFortificationField.click();
  }

  async fillCaloriesField(data) {
    await this.caloriesField.waitForDisplayed({ timeout: 15000 });
    await this.caloriesField.click();
    const option = await $("//android.widget.CheckedTextView[contains(@text,'" + data + "')]");
    await option.waitForDisplayed({ timeout: 15000 });
    await option.click();
  }

  async fillIosCaloriesField(data) {
    await this.caloriesField.waitForDisplayed({ timeout: 15000 });
    await this.caloriesField.click();
  }

  async fillNoteField(data) {
    await this.noteField.waitForDisplayed({ timeout: 15000 });
    await this.noteField.setValue(data);
  }

  async clickOnCrossButton() {
    await this.crossButton.waitForDisplayed({ timeout: 15000 });
    await this.crossButton.click();
  }

  async clickOnRightArrowButton() {
    await this.rightArrowButton.waitForDisplayed({ timeout: 15000 });
    await this.rightArrowButton.click();
  }

  async fillDiaperWeightField(data) {
    await this.diaperWeightField.waitForDisplayed({ timeout: 15000 });
    await this.diaperWeightField.setValue(data);
  }

  async selectDate() {
    await this.dateField.waitForDisplayed({ timeout: 15000 });
    await this.dateField.click();
  }

  async clickOnFormOKButton() {
    await this.form_OK_Button.waitForDisplayed({ timeout: 15000 });
    await this.form_OK_Button.click();
  }

  async fillHeightInchField(data) {
    await this.heightInchField.waitForDisplayed({ timeout: 15000 });
    await this.heightInchField.click();
    await this.heightInchField.setValue(data);
    await browser.keys("Tab");
    await browser.keys("Tab");
  }

  async fillWeightPoundField(data) {
    await this.weightPoundField.waitForDisplayed({ timeout: 15000 });
    await this.weightPoundField.click();
    await this.weightPoundField.setValue(data);
    await browser.keys("Tab");
  }

  async fillWeightOunceField(data) {
    await this.weightOunceField.waitForDisplayed({ timeout: 15000 });
    await this.weightOunceField.click();
    await this.weightOunceField.setValue(data);
    await browser.keys("Tab");
    await browser.keys("Tab");
  }

  async fillHeadCircumferenceField(data) {
    await this.headCircumferenceField.waitForDisplayed({ timeout: 15000 });
    await this.headCircumferenceField.click();
    await this.headCircumferenceField.setValue(data);
    await browser.keys("Tab");
    await browser.keys("Tab");
  }

  async verifyMobileGrowthDetails(heightInch, weightPound, weightOunce, headCircumference) {
    const regex = /^\d+/;
    await this.growthHeightRecord.waitForDisplayed({ timeout: 15000 });
    const actHeight = await this.growthHeightRecord.getText();
    const actHeightText = await actHeight.match(regex)[0];
    const actWeightPound = await this.growthWeightRecord.getText();
    const actWeightPoundText = await actWeightPound.match(regex)[0];
    const actWeightOunce = await this.growthWeightRecord.getText();
    const parts = actWeightOunce.split("&");
    const actOunceValue = parts.length > 1 ? parts[1].match(/\d+/)[0] : null;
    const actHead = await this.growthHeadRecord.getText();
    const actHeadText = await actHead.match(regex)[0];

    await expect(actHeightText).toEqual(heightInch);
    await expect(actWeightPoundText).toEqual(weightPound);
    await expect(actOunceValue).toEqual(weightOunce);
    await expect(actHeadText).toEqual(headCircumference);
  }

  async deleteRecord() {
    await this.deleteButton.waitForDisplayed({ timeout: 15000 });
    await this.deleteButton.click();
    await this.clickOnMobileButtonWithText("Yes");
  }

  async verifyDeletedMobileRecord() {
    await this.noRecordFoundText.waitForDisplayed({ timeout: 15000 });
    if ((await this.noRecordFoundText.isDisplayed()) == true) {
      console.log("✅ Record deleted successfully");
    } else {
      throw new Error("❌ Failed to delete record");
    }
  }

  async clickToTheStartingPoint(text) {
    const startingPoint = await $("//android.widget.TextView[contains(@text,'" + text + "')]");
    while ((await startingPoint.isDisplayed()) === false) {
      if ((await this.crossButton.isDisplayed()) === true) {
        await this.crossButton.click();
      }

      if (await startingPoint.isDisplayed()) {
        return;
      }

      await browser.back();

      if (await startingPoint.isDisplayed()) {
        return;
      }
    }
  }

  async verifyText(data) {
    const recordText = await $("//android.widget.TextView[@text='" + data + "']");
    await recordText.waitForDisplayed({ timeout: 15000 });
    if ((await recordText.isDisplayed()) == true) {
      console.log("✅ Record displaying successfully");
    } else {
      throw new Error("❌ Failed to verify record");
    }
  }

  async iOSClickHoldScrollDownMethod() {
    const element = await $("//XCUIElementTypeStaticText[@name='Vaccinations']");
    const location = await element.getLocation();
    const size = await element.getSize();
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", x: startX, y: startY, button: 0 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", x: startX, y: startY + -500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async iOSClickHoldScrollUpMethod() {
    const element = await $("//XCUIElementTypeStaticText[@name='Vaccinations']");
    const location = await element.getLocation();
    const size = await element.getSize();
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", x: startX, y: startY, button: 0 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", x: startX, y: startY + 500 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async clickOnTemperatureModule() {
    await this.temperatureModule.tap();
  }

  async clickOnMediaTab() {
    await this.iOSClickHoldScrollDownMethod();
    if ((await this.mediaIsDisplayed()) === true) {
      await this.media.click();
    } else {
      throw new Error("Media module is not displayed");
    }
  }

  async clickOnIosOption(button) {
    const iosButton = await $('//XCUIElementTypeStaticText[contains(@name,"' + button + '")]');
    await iosButton.tap();
  }

  async scrollDownForIosMinutes() {
    const element = await $('//XCUIElementTypePickerWheel[@value="00"]');
    const location = await element.getLocation();
    const size = await element.getSize();
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", x: startX, y: startY, button: 0 },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          { type: "pointerMove", x: startX, y: startY + -320 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async fillIosMilkMinutesField(text) {
    await browser.pause(2000);
    await this.iosMilkMinutesField.tap();
    const pickerWheel = await $("//XCUIElementTypePickerWheel");
    await pickerWheel.addValue(text);
    await this.iosSaveButton.click();
  }

  async clickOnSecondIndexIosButton(text) {
    const secondIndexButton = await $("(//XCUIElementTypeButton[contains(@name,'" + text + "')])[2]");
    await secondIndexButton.waitForDisplayed({ timeout: 15000 });
    await secondIndexButton.click();
  }

  async laboratoryChartIsDisplayed() {
    await this.laboratoryChart.waitForDisplayed({ timeout: 25000 });
    if ((await this.laboratoryChart.isDisplayed()) === true) {
      console.log("User successfully redirected to homepage");
      await browser.back();
    } else {
      throw new Error("Dashboard is not displayed");
    }
  }

  async clickOnDropDownArrow() {
    if ((await this.dropdownArrow.isDisplayed()) === true) {
      console.log("click on dropdown arrow");
      await browser.pause(2000);
      await this.dropdownArrow.click();
    } else {
      throw new Error("options dropdown arrow is not displayed");
    }
  }

  async selectDropDownOption(data) {
    const option = await $("//android.widget.CheckedTextView[@text='" + data + "']");
    await option.waitForDisplayed({ timeout: 2000 });

    await option.click();
  }
}
module.exports = new AndroidPage();
