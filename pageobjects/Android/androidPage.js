const { $, browser } = require("@wdio/globals");
const { remote } = require("webdriverio");
const BasePage = require("./testBase");
import TestUtils from "../testUtils";
const path = require("path");
const fs = require("fs");

class AndroidPage extends BasePage {
  get emailField() {
    return $(
      '//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_email"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_email"]'
    );
  }
  get paswordField() {
    return $(
      '//android.widget.EditText[@resource-id="com.app.neonatal.staging:id/ed_login_pass"]|//android.widget.EditText[@resource-id="com.firsthc.alert.staging:id/edt_password"]'
    );
  }

  get signInButton() {
    return $(
      '//android.widget.TextView[@resource-id="com.app.neonatal.staging:id/text"]|//android.widget.TextView[@resource-id="com.firsthc.alert.staging:id/text"]'
    );
  }

  get noThanksButton() {
    return $("//*[@resource-id='android:id/autofill_dialog_no']");
  }

  get savePasswordOption() {
    return $(
      "//android.widget.Button[@resource-id='android:id/autofill_save_no']"
    );
  }

  get videoAndPicPermissionPopup() {
    return $(
      "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']"
    );
  }

  get recordAudioPopup() {
    return $("(//android.widget.Button)[3]");
  }

  get deviceLocationPopup() {
    return $(
      "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_deny_button']"
    );
  }

  get notificationAlertPermission() {
    return $(
      "//android.widget.Button[@resource-id='com.android.permissioncontroller:id/permission_allow_button']"
    );
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
    return $(
      "//android.widget.EditText[@resource-id='com.firsthc.alert.staging:id/tie_search']"
    );
  }

  get downloadAnywayButton() {
    return $("//input[@value='Download anyway']");
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
      await this.savePasswordOption.waitForDisplayed({ timeout: 50000 });
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
    const buttonText = await $(
      "//android.widget.Button[contains(@text,'" + text + "')]"
    );
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

  async downloadApp() {
    await this.downloadAnywayButton.waitForDisplayed({ timeout: 25000 });
    await this.downloadAnywayButton.click();
    await browser.pause(60000);
    const downloadDir = path.resolve(__dirname, "../../downloadApps");
    const apkFile = fs
      .readdirSync(downloadDir)
      .find((file) => file.endsWith(".apk"));

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
