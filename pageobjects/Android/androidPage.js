const { $, browser } = require("@wdio/globals");
const { remote } = require("webdriverio");
const BasePage = require("./testBase");
import TestUtils from "../testUtils";
const path = require("path");
const fs = require("fs");

class AndroidPage extends BasePage {
  get emailField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_email"]');
  }
  get paswordField() {
    return $('//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_password"]');
  }

  get signInButton() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/text"]|//android.widget.TextView[@resource-id="com.firsthc.alert.staging:id/text"]');
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
    return $("//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']");
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

  get settingsTab() {
    return $("//android.widget.TextView[@text='Settings']");
  }

  get logoutOption() {
    return $('//android.widget.TextView[@text="Logout"]');
  }

  get noButton() {
    return $('//android.widget.Button[@resource-id="com.firsthc.alert.staging:id/btn_no"] | //android.widget.Button[@resource-id="com.app.neonatal.staging:id/btn_no"]');
  }

  get vitalSign() {
    return $("(//android.widget.TextView)[2]");
  }

  get backButton() {
    return $("(//android.widget.ImageView)[1]");
  }

  get medicalRecord() {
    return $("(//android.widget.TextView)[3]");
  }

  get diagnosis() {
    return $("(//android.widget.TextView)[3]");
  }

  get medication() {
    return $("(//android.widget.TextView)[4]");
  }

  get results() {
    return $("(//android.widget.TextView)[5]");
  }

  get tracker() {
    return $("(//android.widget.TextView)[6]");
  }

  get vaccinations() {
    return $("(//android.widget.TextView)[7]");
  }

  get media() {
    return $("(//android.widget.TextView)[8]");
  }

  get documents() {
    return $("(//android.widget.TextView)[9]");
  }

  get sendUsresult() {
    return $("(//android.widget.TextView)[10]");
  }

  get provider() {
    return $("(//android.widget.TextView)[4]");
  }

  get providerTab() {
    return $("(//android.widget.TextView)[2]");
  }

  get settingsModule() {
    return $("(//android.widget.TextView)[7]");
  }

  get myContactInformation() {
    return $("(//android.widget.TextView)[2]");
  }

  get myAccount() {
    return $("(//android.widget.TextView)[3]");
  }

  get myBabysInformation() {
    return $("(//android.widget.TextView)[4]");
  }

  get changeChild() {
    return $("(//android.widget.TextView)[5]");
  }

  get changePassword() {
    return $("(//android.widget.TextView)[6]");
  }

  get FHDCHamburgerButton() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_navigation_menu"]');
  }

  get appointmentsTab() {
    return $("(//android.widget.TextView)[3]");
  }

  get editProfileIcon() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_edit_pic"]');
  }

  get galleryOption() {
    return $('//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/tv_gallery"]');
  }

  get selectImage() {
    return $('//android.widget.ImageView[@resource-id="com.google.android.documentsui:id/icon_thumb"]');
  }

  get cropButton() {
    return $('//android.widget.Button[@resource-id="com.app.neonatal.staging:id/crop_image_menu_crop"]');
  }

  get verifyImage() {
    return $('//android.widget.ImageView[@resource-id="com.app.neonatal.staging:id/iv_child_profile"]');
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

  async clickOnButtonWithText(text) {
    const buttonText = await $("//android.widget.Button[contains(@text,'" + text + "')]");
    await buttonText.waitForDisplayed({ timeout: 20000 });
    if ((await buttonText.isDisplayed()) === true) {
      await buttonText.click();
    } else {
      throw new Error("❌ Button is not displaying: " + text);
    }
  }

  async verifyMobileValidationMessage(text) {
    const messageText1 = await $("//android.widget.Toast");
    var actualMessage = await messageText1.getText();
    await expect(actualMessage).toEqual(text);
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
    await this.backButton.waitForDisplayed({ timeout: 25000 });
    await this.backButton.click();
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
    const heartRate = await $("(//android.widget.TextView)[3]");
    await heartRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await heartRate.getText();
    let expectedText = "Heart Rate";
    if (actualText.includes(expectedText)) {
      console.log("Heart rate is displayed inside patient vital signs");
    } else {
      console.log("Heart rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async o2SaturationIsDisplayed() {
    const o2Saturation = await $("(//android.widget.TextView)[5]");
    await o2Saturation.waitForDisplayed({ timeout: 25000 });
    let actualText = await o2Saturation.getText();
    let expectedText = "O2 Saturation";
    if (actualText.includes(expectedText)) {
      console.log("O2 Saturation is displayed inside patient vital signs");
    } else {
      console.log("O2 Saturation is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async respiratoryRateDisplayed() {
    const respiratoryRate = await $("(//android.widget.TextView)[7]");
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
    const Temp = await $("(//android.widget.TextView)[9]");
    await Temp.waitForDisplayed({ timeout: 25000 });
    let actualText = await Temp.getText();
    let expectedText = "Temperature";
    if (actualText.includes(expectedText)) {
      console.log("Temperature is displayed inside patient vital signs");
    } else {
      console.log("Temperature is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async deviceStatusIsDisplayed() {
    const status = await $("(//android.widget.TextView)[9]");
    await status.waitForDisplayed({ timeout: 25000 });
    let actualText = await status.getText();
    let expectedText = "Device Status";
    if (actualText.includes(expectedText)) {
      console.log("Device Status is displayed inside patient vital signs");
    } else {
      console.log("Device Status is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async heartRateIsDisplayed() {
    const heartRate = await $("(//android.widget.TextView)[3]");
    await heartRate.waitForDisplayed({ timeout: 25000 });
    let actualText = await heartRate.getText();
    let expectedText = "Heart Rate";
    if (actualText.includes(expectedText)) {
      console.log("Heart rate is displayed inside patient vital signs");
    } else {
      console.log("Heart rate is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async o2SaturationIsDisplayed() {
    const o2Saturation = await $("(//android.widget.TextView)[5]");
    await o2Saturation.waitForDisplayed({ timeout: 25000 });
    let actualText = await o2Saturation.getText();
    let expectedText = "O2 Saturation";
    if (actualText.includes(expectedText)) {
      console.log("O2 Saturation is displayed inside patient vital signs");
    } else {
      console.log("O2 Saturation is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async respiratoryRateDisplayed() {
    const respiratoryRate = await $("(//android.widget.TextView)[7]");
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
    const Temp = await $("(//android.widget.TextView)[9]");
    await Temp.waitForDisplayed({ timeout: 25000 });
    let actualText = await Temp.getText();
    let expectedText = "Temperature";
    if (actualText.includes(expectedText)) {
      console.log("Temperature is displayed inside patient vital signs");
    } else {
      console.log("Temperature is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
    }
  }

  async deviceStatusIsDisplayed() {
    const status = await $("(//android.widget.TextView)[9]");
    await status.waitForDisplayed({ timeout: 25000 });
    let actualText = await status.getText();
    let expectedText = "Device Status";
    if (actualText.includes(expectedText)) {
      console.log("Device Status is displayed inside patient vital signs");
    } else {
      console.log("Device Status is not displayed inside patient vital signs " + expectedText + " Actual " + actualText);
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
    const title = await $("//android.widget.TextView[contains(@text,'" + data + "')]");
    await title.waitForDisplayed({ timeout: 15000 });
    if ((await title.isDisplayed()) === true) {
      console.log("✅ " + data + " screen is dispalyed");
    } else {
      throw new Error("❌ " + data + "screen is not dispalyed");
    }
  }

  async clickOnOption(data) {
    const option = await $('//android.widget.TextView[contains(@text,"' + data + '")]');
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
    // const downloadDir = path.resolve(__dirname, "../../downloadApps");
    const apkFile = fs.readdirSync(downloadDir).find((file) => file.endsWith(".apk"));

    try {
      const files = fs.readdirSync(downloadDir);

      files.forEach((file) => {
        const oldFilePath = path.join(downloadDir, file);

        // Only rename files, not folders
        if (fs.statSync(oldFilePath).isFile()) {
          const newFileName = file.substring(0, 4) + path.extname(file);
          const newFilePath = path.join(downloadDir, newFileName);

          // Avoid overwriting files accidentally
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
}
module.exports = new AndroidPage();
