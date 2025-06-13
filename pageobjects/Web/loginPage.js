const { $, browser } = require("@wdio/globals");
const BasePage = require("./testBase");
import TestUtils from "../testUtils";
const { remote } = require("webdriverio");


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  /**
   * define selectors using getter methods
   */
  get emailField() {
    return $("#email");
  }
  get paswordField() {
    return $("#password");
  }

  get signInButton() {
    return $("[type='submit']");
  }

  get managingProviderLink() {
    return $("(//a[@title='Managing Providers'])[2]");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async login(userName) {
    await browser.maximizeWindow();
    var data = TestUtils.getUserCredetials(userName);
    await browser.pause(1000);
    var username = data[0];
    var password = data[1];
    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.click();
    await this.emailField.setValue(username);
    await this.paswordField.click();
    await this.paswordField.setValue(password);
    await this.signInButton.click();
    try {
      await this.signInButton.waitForDisplayed({ reverse: true, timeout: 10000 });
    } catch (error) {}
  }

async open(url) {
    var data = TestUtils.getUserCredetials(url); 
    await browser.pause(1000);
    var url = data[0];
    console.log("LOGIN PAGE URL:" + url);
    await browser.url(url);
  } 
  
  async managingProviderIsDisplayed() {
    await this.managingProviderLink.waitForDisplayed({ timeut: 25000 });
    return await this.managingProviderLink.isDisplayed();
  }
async loginWithInvalidData(userName, password) {
    await browser.maximizeWindow();
    await this.emailField.waitForDisplayed({ timeout: 20000 });
    await this.emailField.click();
    await this.emailField.setValue(userName);
    await this.paswordField.click();
    await this.paswordField.setValue(password);
    await this.signInButton.click();
  }
}

module.exports = new LoginPage();
