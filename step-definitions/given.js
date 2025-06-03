import { Given } from "@cucumber/cucumber";
const { expect, $, browser } = require("@wdio/globals");

import LoginWebPage from "../pageobjects/Web/loginPage";
import androidPage from "../pageobjects/Android/androidPage";
const pages = {};
//---------------Web-Steps----------------------//

Given(/^Open web url (.*)$/, async (url) => {
  await browser.maximizeWindow();
  await LoginWebPage.open(url);
});

//---------------Android-steps-----------------//
