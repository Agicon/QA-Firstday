import { Given } from "@cucumber/cucumber";


import LoginWebPage from "../pageobjects/Web/loginPage";
import mobileLoginPage from "../pageobjects/Mobile/loginPage";
const pages = {};
//---------------Web-Steps----------------------//

Given(/^Open web url (.*)$/, async (url) => {
  await browser.maximizeWindow();
  await LoginWebPage.open(url);
});

//---------------Android-steps-----------------//
