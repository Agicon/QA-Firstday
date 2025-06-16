const { When } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");
const LoginWebPage = require("../pageobjects/Web/loginPage");
const androidPage = require("../pageobjects/Android/androidPage");
import TestUtils from "../pageobjects/testUtils";
const superAdminPage = require("../pageobjects/Web/superAdminPage");

const customerAccountPage = require("../pageobjects/Web/customerAccountPage");
const managingProviderAccountPage = require("../pageobjects/Web/managingProviderAccountPage");

const pages = {};

//-------------Web-Super admin--------------//

When(/^Web app login using (.*)$/, async (userName) => {
  await LoginWebPage.login(userName);
});

When(/^I click on the "Customers" tab$/, async () => {
  await superAdminPage.clickOnCustomerLink();
});

When(/^I click on the "New Customer" button$/, async () => {
  await superAdminPage.clickOnNewCustomerButton();
});

When(/^I fill (.*) data in clinic name field$/, async (text) => {
  await superAdminPage.fillClinicNameField(text);
});

When(/^I fill (.*) data in first name field$/, async (text) => {
  await superAdminPage.fillFirstNameField(text);
});

When(/^I fill (.*) data in last name field$/, async (text) => {
  await superAdminPage.fillLastNameField(text);
});
When(/^I fill (.*) data in email field$/, async (text) => {
  await superAdminPage.fillEmailField(text);
});

When(/^I fill (.*) data in phone number field$/, async (text) => {
  await superAdminPage.fillPhoneNumberField(text);
});

When(/^I fill (.*) data in office number field$/, async (text) => {
  await superAdminPage.fillOfficeNumberField(text);
});

When(/^I fill (.*) data in zip code field$/, async (text) => {
  await superAdminPage.fillZipCodeField(text);
});

When(/^I fill (.*) data in number of licence field$/, async (text) => {
  await superAdminPage.fillNumberOfLicenceField(text);
});

When(/^I fill (.*) data in expiry field$/, async (text) => {
  await superAdminPage.fillExpireField(text);
});

When(/^I fill valid date in expiry field$/, async () => {
  await superAdminPage.fillValidExpireField();
});

When(/^I fill valid and unique data in email$/, async () => {
  await superAdminPage.fillEmailFieldWithUniqueData();
});

When(/^I click on the button with text (.*)$/, async (text) => {
  await superAdminPage.clickOnButtonWithText(text);
});

When(/^I fill (.*) data in office information field$/, async (text) => {
  await superAdminPage.fillOfficeInformationField(text);
});

When(/^I fill (.*) data in country field$/, async (text) => {
  await superAdminPage.fillCountryField(text);
});

When(/^I fill (.*) data in state field$/, async (text) => {
  await superAdminPage.fillStateField(text);
});

When(/^I fill (.*) data in city field$/, async (text) => {
  await superAdminPage.fillCityField(text);
});

When(/^I populate fields but I populate "Email field" with already registered email$/, async () => {
  var actEmail = await $("(//tr[@class='odd']//td)[5]").getText();
  await superAdminPage.clickOnNewCustomerButton();
  await superAdminPage.newCustomerFormIsDisplayed();
  await superAdminPage.fillEmailField(actEmail);
});

When(/^I click on the "View" icon under "Action" column$/, async () => {
  await superAdminPage.clickOnViewIcon();
});

When(/^I click On "Edit" icon$/, async () => {
  await superAdminPage.clickOnEditIcon();
});

When(/^I click On "Delete" icon$/, async () => {
  await superAdminPage.clickOnDeleteIcon();
});

When(/^User click on the "Back" button on "update customer" page$/, async () => {
  await superAdminPage.clickOnBackButton();
});

When(/^I update the "Customer form" but does not populate one of the mandatory field and click on the (.*) button$/, async (button) => {
  await superAdminPage.clearClinicNameField();
  await superAdminPage.clickOnButtonWithText(button);
});

When(/^I click on link text (.*)$/, async (text) => {
  await superAdminPage.clickOnLinkText(text);
});
// ======================================Web-CoustomerAccount=============================================//

When(/^User click on "Managing Provider" tab$/, async () => {
  await customerAccountPage.clickOnManagingProviderTab();
});

When(/^User click on the "New Managing Provider" button$/, async () => {
  await customerAccountPage.clickOnNewManagingProviderButton();
});

When(/^User click on the "Close" button$/, async () => {
  await customerAccountPage.clickOnCloseButton();
});

When(/^User add (.*) in name field$/, async (text) => {
  await customerAccountPage.fillNameField(text);
});

When(/^User add (.*) in email field$/, async (text) => {
  await customerAccountPage.fillEmailField(text);
});

When(/^User add (.*) in mobile number field$/, async (text) => {
  await customerAccountPage.fillMoblieNumberField(text);
});

When(/^User add (.*) in website field$/, async (text) => {
  await customerAccountPage.fillWebsiteField(text);
});

When(/^User add (.*) in office number field$/, async (text) => {
  await customerAccountPage.fillOfficeNumberField(text);
});

When(/^User add (.*) in zipcode field$/, async (text) => {
  await customerAccountPage.fillzipCodeField(text);
});

When(/^User add (.*) in office information field$/, async (text) => {
  await customerAccountPage.fillOfficeInformationField(text);
});

When(/^User add (.*) in State field$/, async (text) => {
  await customerAccountPage.fillStateField(text);
});

When(/^User add (.*) in city field$/, async (text) => {
  await customerAccountPage.fillCityField(text);
});

When(/^User add (.*) in address field$/, async (text) => {
  await customerAccountPage.fillAddressField(text);
});
When(/^User search the created provider (.*)$/, async (name) => {
  await customerAccountPage.searchCreatedProvider(name);
});

When(/^User fill unique data in email field$/, async () => {
  await customerAccountPage.fillEmailFieldWithUniqueEmail();
});
When(/^User use already registered (.*) and email to create new providing manager and click on (.*) button$/, async (name, button) => {
  var actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
  await customerAccountPage.clickOnNewManagingProviderButton();
  await customerAccountPage.nameFieldIsDisplayed();
  await customerAccountPage.fillNameField(name);
  await customerAccountPage.fillEmailField(actEmail);
  await superAdminPage.clickOnButtonWithText(button);
});
When(/^I use already registered (.*) and email to create new other providing manager and click on (.*) button$/, async (name, button) => {
  var actEmail = await $("(//tr[@class='odd']//td)[4]").getText();
  await customerAccountPage.clickOnNewOtherProviderButton();
  await customerAccountPage.nameFieldIsDisplayed();
  await customerAccountPage.fillNameField(name);
  await customerAccountPage.fillEmailField(actEmail);
  await superAdminPage.clickOnButtonWithText(button);
});

When(/^User use already registered (.*) and email to create new providing manager and click on (.*) button$/, async (name, button) => {
  var actEmail = await $("(//tr[@class='odd']//td)[3]").getText();
  await customerAccountPage.clickOnNewManagingProviderButton();
  await customerAccountPage.nameFieldIsDisplayed();
  await customerAccountPage.fillNameField(name);
  await customerAccountPage.fillEmailField(actEmail);
  await superAdminPage.clickOnButtonWithText(button);
});

When(/^User click on the "View or Update" option under "Action" section$/, async () => {
  await customerAccountPage.clickOnViewOrUpdateButton();
});

When(/^User click on the "Back" button on "Update Managing Provider Details" page$/, async () => {
  await customerAccountPage.clickOnBackButton();
});

When(/^User update the "Managing Provider form" but does not populate one of the mandatory field$/, async () => {
  await customerAccountPage.nameField.waitForDisplayed({ timeout: 20000 });
  await customerAccountPage.nameField.click();
  await customerAccountPage.nameField.clearValue();
});

When(/^User click on the link (.*)$/, async (link) => {
  await customerAccountPage.clickOnLink(link);
});
//===============================Master_Menu=============================

When(/^I add first 4 character (.*) in "Diagnosis Type" fields on the form$/, async (type) => {
  await customerAccountPage.fillDiagnosisTypeField(type)
});

When(/^I select any "Diagnosis Type" (.*) from the list$/, async (type) => {
  await customerAccountPage.selectSuggestedDiagnosisType(type)
});

When(/^I fill (.*) data in more information field$/, async (data) => {
  await customerAccountPage.fillMoreInformationField(data)
});


When(/^I fill (.*) data in cvx code field$/, async (data) => {
  await customerAccountPage.fillCVXCodeField(data)
});

When(/^I fill (.*) data in vaccine Name field$/, async (data) => {
  await customerAccountPage.fillVaccineNameField(data)
});

When(/^I fill (.*) data in brand Name field$/, async (data) => {
  await customerAccountPage.fillBrandNameField(data)
});

When(/^I fill (.*) data in description field$/, async (data) => {
  await customerAccountPage.fillDescriptionField(data)
});

When(/^I fill (.*) data in note field$/, async (data) => {
  await customerAccountPage.fillNoteField(data)
});

When(/^I fill (.*) data in status field$/, async (data) => {
  await customerAccountPage.fillStatusField(data)
});

When(/^I fill (.*) data in internal ID field$/, async (data) => {
  await customerAccountPage.fillInternalIDField(data)
});

When(/^I fill (.*) data in non vaccine field$/, async (data) => {
  await customerAccountPage.fillNonVaccineField(data)
});

When(/^I fill (.*) data in update date field$/, async (data) => {
  await customerAccountPage.fillUpdateDateField(data)
});

When(/^I fill (.*) data in favourite field$/, async (data) => {
  await customerAccountPage.fillFavouriteField(data)
});

When(/^I directly clicking on the "Create" button without filling in any value in the vaccine name and status field$/, async () => {
  await customerAccountPage.removefilledFields();
});

//------------------------------Other-Provider-----------------------//

When(/^User click on "Other Provider" tab$/, async () => {
  await customerAccountPage.clickOnOtherProviderTab();
});

When(/^User click on the "New Other Provider" button$/, async () => {
  await customerAccountPage.clickOnNewOtherProviderButton();
});

When(/^User click on the link (.*) and yes button$/, async (link) => {
  await customerAccountPage.clickOnLinkAndYesButton(link);
});


When(/^I fill (.*) in hospital note field$/, async (note) => {
  await customerAccountPage.fillHospitalNoteField(note);
});

When(/^User click on the button text (.*)$/, async (text) => {
  await customerAccountPage.clickOnButtonWithText(text);
});

When(/^User click on the link having text (.*)$/, async (link) => {
  await customerAccountPage.clickOnLink(link);
});

When(/^Click on select patient dropdown$/, async () => {
  await customerAccountPage.clickOnSelectPatientDropdown();
});


When(/^Click on select primary provider dropdown$/, async () => {
  await customerAccountPage.clickOnPrimaryProviderDropdownDropdown();
});

When(/^Click on select secondary provider dropdown$/, async () => {
  await customerAccountPage.clickOnSecondaryProviderDropdown();
});
//=============================Web-ManagingProviderAccount======================//

// When(/^Open web url (.*)$/, async (url) => {
//   await browser.maximizeWindow();
//   await LoginWebPage.open(url);
// });

When(/^I login on web portal using invalid credentials (.*) and (.*)$/, async (invalidName, invalidPassword) => {
  await LoginWebPage.loginWithInvalidData(invalidName, invalidPassword);
});

When(/^I hover over the "Settings" icon$/, async () => {
  await managingProviderAccountPage.clickOnSettingsButton();
});

When(/^I hover on the "Dashboard-All Patient" tab$/, async () => {
  await managingProviderAccountPage.hoverOnDashboard_AllPatientsButton();
});

When(/^I click the (.*) option$/, async (option) => {
  await managingProviderAccountPage.clickOnAddANewPatientOption(option);
});

When(/^I fill (.*) data in baby first name field$/, async (data) => {
  await managingProviderAccountPage.fillBabyNameField(data);
});

When(/^I fill (.*) data in baby last name field$/, async (data) => {
  await managingProviderAccountPage.fillBabyLastNameField(data);
});

When(/^I fill (.*) data in birth date field$/, async (data) => {
  await managingProviderAccountPage.clickOnBirthDateField(data);
});

When(/^I fill (.*) data in birth time field$/, async (data) => {
  await managingProviderAccountPage.fillBirthTimeField(data);
});

When(/^I fill (.*) data in gender field$/, async (data) => {
  await managingProviderAccountPage.selectBabyGender(data);
});

When(/^I fill (.*) data in hospital or office field$/, async (data) => {
  await managingProviderAccountPage.selecthospital(data);
});

When(/^I fill (.*) data in caregiver field$/, async (data) => {
  await managingProviderAccountPage.selectCaregiver(data);
});

When(/^I fill (.*) data in gestational Age week field$/, async (data) => {
  await managingProviderAccountPage.selectWeek(data);
});

When(/^I fill (.*) data in gestational Age days field$/, async (data) => {
  await managingProviderAccountPage.selectDays(data);
});

When(/^I fill (.*) data in treatment Location field$/, async (data) => {
  await managingProviderAccountPage.selectTreatmentLocationField(data);
});

When(/^I fill (.*) data in start service date field$/, async (data) => {
  await managingProviderAccountPage.selectStartServiceDateField(data);
});

When(/^I fill (.*) data in hospital Record Number field$/, async (data) => {
  await managingProviderAccountPage.fillHospitalRecordNumberField(data);
});

When(/^I fill (.*) data in ECG MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fill_ECG_MAC_AddressField(data);
});

When(/^I fill (.*) data in Saturation MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fillSaturation_MAC_AddressField(data);
});

When(/^I fill (.*) data in Temperature MAC Address field$/, async (data) => {
  await managingProviderAccountPage.fillTemperature_MAC_AddressField(data);
});

When(/^I fill (.*) data in hospital Location field$/, async (data) => {
  await managingProviderAccountPage.fillHospitalLocationField(data);
});

When(/^I populate data (.*) in the "Search" field$/, async (text) => {
  await managingProviderAccountPage.fillSearchField(text);
});

When(/^I fill (.*) data in treatment Location field under active patients$/, async (data) => {
  await managingProviderAccountPage.selectTreatmentLocationOnActivePatient(data);
});

When(/^I click on the "View or Update" option under the "Action" section$/, async () => {
  await managingProviderAccountPage.clickOnUpdateButton();
});

When(/^I remove required field on patient form$/, async () => {
  await managingProviderAccountPage.removeRequiredField();
});

When(/^I uncheck (.*) checkbox in baby service field$/, async (option) => {
  await managingProviderAccountPage.uncheckServiceCheckbox(option);
});

When(/^I select a "Date of hospital Discharge" date Less than or equal to the patient's date of birth$/, async () => {
  await managingProviderAccountPage.selectDischargeDate();
});

When(/^I select a "Date of hospital Discharge" date greater than or equal to the patient's date of birth$/, async () => {
  await managingProviderAccountPage.selectDischagerNextday();
});

When(/^I fill (.*) data in date of hospital Discharge field$/, async (data) => {
  await managingProviderAccountPage.selectDischargeDate(data);
});

When(/^I checkmark the (.*) option$/, async (data) => {
  await managingProviderAccountPage.selectProviderCheckbox(data);
});

When(/^User add (.*) in last name field$/, async (data) => {
  await managingProviderAccountPage.fillLastNameField(data);
});

When(/^User add (.*) in relationship field$/, async (data) => {
  await managingProviderAccountPage.fillRelationshipField(data);
});

When(/^I click on the second index link (.*)$/, async (data) => {
  await managingProviderAccountPage.clickOnSecondIndexLinkText(data);
});

When(/^I update the "Caregiver" but does not populate one of the mandatory field$/, async () => {
  await managingProviderAccountPage.clearNameField();
});

When(/^I fill fields with (.*) and (.*) and (.*) but I populate "Email field" with already registered email$/, async (name, lastName, mobile) => {
  await managingProviderAccountPage.fillAlreadyRegisteredEmail(name, lastName, mobile);
});

When(/^I click on the link text (.*)$/, async (text) => {
  await managingProviderAccountPage.clickOnLinkText(text);
});

When(/^I populate fields (.*) but I populate "Email field" with already registered email$/, async (text) => {
  await managingProviderAccountPage.fillAlreadyRegisteredEmailForOtherProvider(text);
});

When(/^User add (.*) in specialty field$/, async (text) => {
  await managingProviderAccountPage.fillSpecialtyField(text);
});

When(/^I click on the second index button (.*)$/, async (data) => {
  await managingProviderAccountPage.clickOnButtonText(data);
});

// =================================Android======================================//

When(/^login to app using (.*)$/, async (username) => {
  await androidPage.login(username);
});

When(/^Verfiy all modules of Firstday-HC app on homepage$/, async () => {
  await androidPage.patientVitalSigns();
  await androidPage.patientsMedicalRecord();
  await androidPage.patientsProviders();
  await androidPage.needHelp();
  await androidPage.patientsVideoCamera();
  await androidPage.settings();
});

When(/^User clicks on vital signs module$/, async () => {
  await androidPage.clickOnPatientsVitalSigns();
});

When(/^User clicks on medical report module$/, async () => {
  await androidPage.clickOnMedicalReport();
});

When(/^User clicks on providers module on homepage$/, async () => {
  await androidPage.clickOnProvider();
});

When(/^User clicks on settings module on homepage$/, async () => {
  await androidPage.clickOnSettingsModule();
});

When(/^User leave the "Email  field" empty And populate the (.*) "Password field" And click on "Login" button$/, async (password) => {
  await androidPage.fillPasswordField(password);
  await androidPage.signInButton.click();
});

When(/^User leave the "Password field" empty And populate the (.*) "Email field" And click on "Login" button$/, async (email) => {
  await androidPage.paswordField.click();
  await androidPage.paswordField.clearValue();
  await androidPage.fillEmailField(email);
  await androidPage.signInButton.click();
});

When(/^User enter invalid (.*) and (.*) in their respective fields And click on "Login" button$/, async (email, password) => {
  await androidPage.fillEmailField(email);
  await androidPage.fillPasswordField(password);
  await androidPage.signInButton.click();
});

When(/^User enter valid (.*) and (.*) in their respective fields And click on "Login" button$/, async (userName, invalidPassword) => {
  var data = TestUtils.getUserCredetials(userName);
  await browser.pause(2000);
  var username = data[0];
  await androidPage.fillEmailField(username);
  await androidPage.fillPasswordField(invalidPassword);
  await androidPage.signInButton.click();
});

When(/^User navigate to the "Settings" tab$/, async () => {
  await androidPage.clickOnSettingsTAb();
});

When(/^User click on the "Logout" option$/, async () => {
  await androidPage.clickOnLogoutOption();
});

When(/^User click on the button with text (.*)$/, async (Button) => {
  await androidPage.clickOnButtonWithText(Button);
});

When(/^User click on "Hamburger" icon displaying in the top left corner$/, async () => {
  await androidPage.clickOnFHDCHamburgerButton();
});

When(/^I click on (.*) option$/, async (text) => {
  await androidPage.clickOnOption(text);
});

When(/^I click on "Edit" icon from "Profile Picture" section$/, async () => {
  await androidPage.clickOnEditProfileIcon();
  await androidPage.clickOnOkButton();
});

