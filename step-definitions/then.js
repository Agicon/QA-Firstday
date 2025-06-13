const { Then } = require("@wdio/cucumber-framework");
const { expect, $, browser } = require("@wdio/globals");
const LoginWebPage = require("../pageobjects/Web/loginPage");
const androidPage = require("../pageobjects/Android/androidPage");
const superAdminPage = require("../pageobjects/Web/superAdminPage");
const customerAccountPage = require("../pageobjects/Web/customerAccountPage");
const managingProviderAccountPage = require("../pageobjects/Web/managingProviderAccountPage");


//---------------Web-Super Admin----------------------//

Then(/^I navigate to the "Customers" page$/, async () => {
  await superAdminPage.newCustomerButtonIsDisplayed();
});

Then(/^Search and delete duplicate data (.*)$/, async (data) => {
  await superAdminPage.searchAndDeleteDuplicateData(data);
});

Then(/^"New customer" form displays$/, async () => {
  await superAdminPage.newCustomerFormIsDisplayed();
});

Then(
  /^A "New Customer" gets created and it displays clinic name (.*) first name (.*) last name (.*) email and licence number (.*) on the "Customers list"$/,
  async (clinicName, firstName, lastName, licenceNumber) => {
    await superAdminPage.verifyNewCreatedClinic(
      clinicName,
      firstName,
      lastName,
      licenceNumber
    );
  }
);

Then(/^validation message (.*) appears$/, async (message) => {
  await superAdminPage.verifyValidationMessage(message);
});

Then(/^A "New Customer" form closes$/, async () => {
  await superAdminPage.verifyClosedCustomerForm();
});

Then(/^I navigates to the Customer (.*) details page$/, async (name) => {
  await superAdminPage.verifyCustomerDetailPage(name);
});

Then(/^Success message (.*) appears$/, async (Message) => {
  await superAdminPage.verifySuccessMessage(Message);
});

Then(/^Status should be displayed as (.*)$/, async (text) => {
  await superAdminPage.verifyCustomerStatus(text);
});

Then(/^I Search data (.*)$/, async (data) => {
  await superAdminPage.searchData(data);
});

// ======================================Web-CustomerAccount=============================================//

Then(/^Verify that user successfully redirected on homepage$/, async () => {
  if ((await customerAccountPage.managingProviderIsDisplayed()) === true) {
    console.log("User sucessfully redirected to homepage");
  } else {
    throw new Error("Managing providers tab is not displayed on homepage");
  }
});

Then(/^User should on "Managing Provider" page$/, async () => {
  if ((await customerAccountPage.newManagingProviderButtonIsDisplayed()) === true) {
    console.log("User sucessfully redirected to Managing Provider page");
  } else {
    throw new Error("User is not sucessfully redirected to Managing Provider page");
  }
});

Then(/^"New Managing Provider" form displays$/, async () => {
  if ((await customerAccountPage.nameFieldIsDisplayed()) === true) {
    console.log("New managing provider form is successfully opened");
  } else {
    throw new Error("Form is not displayed after clicked on new managing provider ");
  }
});

Then(/^The "New Managing Provider" form should be closed$/, async () => {
  await customerAccountPage.verifyClosedForm();
});

Then(/^a "New Managing Provider" gets created And it displays (.*) in the "Managing Provider" list$/, async (registerName) => {
  await customerAccountPage.verifyCreatedProvider(registerName);
});

Then(/^Search and delete already added provider (.*)$/, async (data) => {
  await customerAccountPage.searchAndDeleteAddedProvider(data);
});

Then(/^User should navigate back to the "Managing Provider" page And the Managing Provider does not get updated (.*)$/, async (providerName) => {
  await customerAccountPage.verifyClosedForm();
  await customerAccountPage.verifyCreatedProvider(providerName);
});

Then(/^User click on the "Update" button$/, async () => {
  await customerAccountPage.clickOnUpdateButton();
});

Then(/^User should navigate to the "Update Managing Provider Details" page$/, async () => {
  await customerAccountPage.updateProviderPageIsDisplayed();
});

Then(/^The updated Managing provider displays in the "Managing provider list" with updated (.*)$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Verify inactive provider (.*) has removed from "Managing provider list"$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyUpdatedStatusProvider(UpdatedProviderName);
});

Then(/^The "Managing Provider" now displayed there in the "Inactive Managing Provider" list (.*)$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Verify active provider (.*) has removed from "Inactive Managing provider list"$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyUpdatedStatusProvider(UpdatedProviderName);
});

Then(/^The "Managing Provider" now displayed there in the "Active Managing Provider" list (.*)$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
});

Then(/^Verify provider (.*) has removed from list$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyUpdatedStatusProvider(UpdatedProviderName);
});

Then(/^The "Managing Provider" now displayed there in list (.*)$/, async (UpdatedProviderName) => {
  await customerAccountPage.verifyCreatedProvider(UpdatedProviderName);
});
Then(/^(.*) page displays$/, async (text) => {
  await superAdminPage.verifyPageUrl(text);
});

Then(/^Search and active if provider (.*) is already inactive under (.*) section$/, async (providerName, button) => {
  await customerAccountPage.searchAndActive(providerName, button);
});

// ===============================Master_Menu=============================

Then(/^(.*) popup should be closed successfully$/, async (text) => {
  await customerAccountPage.verifyClosedPopup(text)
});

Then(/^list of diagnosis should appear according to added character$/, async () => {
  await customerAccountPage.verifyDiagnosisList()
});

Then(/^A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with (.*) and (.*) and (.*)$/, async (type, code, moreInfo) => {
  await customerAccountPage.verifyCreatedDiagnosis(type, code, moreInfo);
});

Then(/^New Hospital note (.*) should display under list$/, async (note) => {
 await customerAccountPage.verifyCreatedHospitalNote(note);
});

Then(/^"Vaccine type" details should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/, async (cvxCode,brandName,vaccineName,description,note,status,internalID,nonVaccine,favourite,date) => {
  await customerAccountPage.verifyCreatedVaccine(cvxCode,brandName,vaccineName,description,note,status,internalID,nonVaccine,favourite,date);
});

Then(/^Alert values should be visible in the list with heart rate (.*) and heart rate (.*) and respiratory (.*) and respiratory (.*) and saturation (.*) and saturation (.*) and pulse rate (.*) and pulse rate (.*) and temperature type (.*) and temperature (.*) and temperature (.*)$/, async (heartLessThan, heartGreaterthan, respiratorylessThan, respiratoryGreaterthan, saturationlessThan, saturationGreaterthan, pulselessThan, pulseGreaterthan, tempType, temperaturelessThan, temperatureGreaterthan) => {
  await customerAccountPage.verifyAlertValues(heartLessThan, heartGreaterthan, respiratorylessThan, respiratoryGreaterthan, saturationlessThan, saturationGreaterthan, pulselessThan, pulseGreaterthan, tempType, temperaturelessThan, temperatureGreaterthan);
});

// ===============================Web-ManagingProviderAccount======================//

Then(/^I get logged out from my account$/, async () => {
  await LoginWebPage.signInButton.waitForDisplayed({ timeout: 10000 });
  if ((await LoginWebPage.signInButton.isDisplayed()) === true) {
    console.log("✅ User has successfully logout");
  } else {
    throw new Error("❌ Log out button is not working");
  }
});

Then(/^"Add Patient Details" form displays$/, async () => {
  if ((await managingProviderAccountPage.babyFirstNameFieldIsDisplayed()) === true) {
    console.log("✅ Add Patient Details form displays");
  } else {
    throw new Error("❌ Add Patient Details form is not displays");
  }
});

Then(/^QR code should be generated and First day Healthcare Medical Record Number should be generated$/, async () => {
  await managingProviderAccountPage.QRImageIsDisplayed();
});

Then(/^A "New Patient" gets created And it is displayed on the "My Patient list" with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/, async (firstName, lastName, services, location, hospitalLocation, status) => {
  await managingProviderAccountPage.verifyCreatedPatient(firstName, lastName, services, location, hospitalLocation, status);
});

Then(/^It redirects on the (.*) screen$/, async (text) => {
  await managingProviderAccountPage.screenIsDisplayed(text);
});

Then(/^(.*) should be displayed$/, async (text) => {
  await managingProviderAccountPage.verifyText(text);
});

Then(/^Default values (.*) and (.*) should be displayed in dropdown list$/, async (hospital, location) => {
  await managingProviderAccountPage.defaultValuesDisplayed(hospital, location);
});

Then(/^The results are displayed on the "Active Patient" list as per applied filter$/, async () => {
  await managingProviderAccountPage.patientListIsDisplayed();
});

Then(/^Search and delete duplicate user (.*)$/, async (data) => {
  await managingProviderAccountPage.searchAndDeleteAddedUser(data);
});

Then(/^Verify, status should be changed and (.*) should not be visible in the list$/, async (data) => {
  await managingProviderAccountPage.verifyUserStatus(data);
});

Then(/^Verify (.*) is displayed with (.*)$/, async (data1, data2) => {
  await managingProviderAccountPage.verifyInactiveDetails(data1, data2);
});

Then(/^Successfully able to "close" the "Update Patient Treatment Details" screen$/, async () => {
  await managingProviderAccountPage.verifyPatientTreatmentDetailsPopup();
});

Then(/^The (.*) gets assigned to the patient and provider displays in the dedicated slot on the list$/, async (data) => {
  await managingProviderAccountPage.verifyAssignedProvider(data);
});

Then(/^Created caregiver should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*)$/, async (name, mobile, relationship, children, status) => {
  await managingProviderAccountPage.verifyCreatedCaregiver(name, mobile, relationship, children, status);
});

Then(/^Deleted record should not be visible in the list$/, async () => {
  await superAdminPage.verifyDeletedRecord();
});

Then(/^A "Other Provider" gets created and it displays on the "Other Providers" list with (.*) and (.*) and (.*)$/, async (specialty, name, status) => {
  await managingProviderAccountPage.verifyCreatedOtherProvider(specialty, name, status);
});

Then(/^Medication details should be visible in the list with (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/, async (medicationName, currentDose, measurement, frequency, interval, status) => {
  await managingProviderAccountPage.verifyCreatedMedication(medicationName, currentDose, measurement, frequency, interval, status);
});

//---------------------------------Android-Cases------------------------------------//

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^Verify that user is on homepage$/, async () => {
  await androidPage.denySavePasswordPopup();
  await androidPage.videoAndPicPermissionPopup.click();
  await androidPage.clickOnRecordAudioPopup();
  await androidPage.deviceLocationPopup.click();
  await androidPage.notificationAlertPermission.click();
  await androidPage.clickOnOkButton();
  await androidPage.clickonbackbutton.click();
  await androidPage.verifyDashboard();
});

Then(/^Verify all the features inside vital signs$/, async () => {
  await androidPage.heartRateIsDisplayed();
  await androidPage.o2SaturationIsDisplayed();
  await androidPage.respiratoryRateDisplayed();
  await androidPage.TemperatureIsDisplayed();
  await androidPage.deviceStatusIsDisplayed();
});

Then(/^Verify all the features inside medical report$/, async () => {
  await androidPage.diagnosisIsDisplayed();
  await androidPage.medicationIsDisplayed();
  await androidPage.resultsIsDisplayed();
  await androidPage.trackerIsDisplayed();
  await androidPage.vaccinationsIsDisplayed();
  await androidPage.mediaIsDisplayed();
  await androidPage.documentsIsDisplayed();
  await androidPage.sendUsresultIsDisplayed();
});

Then(/^Verify all the tabs inside providers module$/, async () => {
  await androidPage.providerTabIsDisplayed();
  await androidPage.appointmentsTabIsDisplayed();
});

Then(/^Verify all the tabs inside settings module$/, async () => {
  await androidPage.myContactInformationIsDisplayed();
  await androidPage.myAccountIsDisplayed();
  await androidPage.myBabysInformationIsDisplayed();
  await androidPage.changeChildIsDisplayed();
  await androidPage.changePasswordIsDisplayed();
});

Then(/^Validation message appears (.*)$/, async (message) => {
  await androidPage.verifyMobileValidationMessage(message);
});

Then(/^User is not able to login$/, async () => {
  await androidPage.signInButton.waitForDisplayed({ timeout: 5000 });
  if ((await androidPage.signInButton.isDisplayed()) === true) {
    console.log("User is still on login page");
  } else {
    throw new Error("Login page is not displayed");
  }
});

Then(/^Verify that user is on FHDA moblie provider homepage$/, async () => {
  await androidPage.notificationAlertPermission.click();
  await androidPage.clickOnOkButton();
  await androidPage.clickonbackbutton.click();
  await androidPage.verifyFHDAMobileProviderDashboradIsDisplayed();
});

Then(/^A logout confirmation popup displays$/, async () => {
  if ((await androidPage.noButtonIsDisplayed()) === true) {
    console.log("✅ logout confirmation popup is visible");
  } else {
    throw new Error("❌ Failed to verify logout confirmation popup");
  }
});

Then(/^The logout confirmation popup closes and the provider remains logged in$/, async () => {
  if ((await androidPage.logoutOptionIsDisplayed()) === true) {
    console.log("✅ User is still login in the app");
  } else {
    throw new Error("❌ User has log out even after clicks 'No' button");
  }
});

Then(/^User get logged out from my account and gets navigated to login page$/, async () => {
  await androidPage.signInButton.waitForDisplayed({ timeout: 15000 });
  if ((await androidPage.signInButton.isDisplayed()) === true) {
    console.log("✅ User has successfully logout");
  } else {
    throw new Error("❌User is not able to log out");
  }
});

Then(/^The logout confirmation popup closes and provider remains logged in$/, async () => {
  if ((await androidPage.dashboardIsDisplayed()) === true) {
    console.log("✅ User is still login in the app");
  } else {
    throw new Error("❌ User has log out even after clicks 'No' button");
  }
});

Then(/^Download app from link$/, async () => {
  await androidPage.downloadApp();
});

Then(/^I get navigated to (.*) screen$/, async (text) => {
  await androidPage.verifyScreenIsDisplayed(text);
});

Then(/^I click on the back button$/, async () => {
  await androidPage.clickOnModuleBackButton();
});

Then(/^The selected image (.*) should get updated and displays on "Caregiver's" main screen of the app$/, async (pic) => {
  await androidPage.uploadFileImage(pic);
});

Then(/^Select child (.*) from the child list$/, async (data) => {
  await androidPage.selectChildOption(data);
});

Then(/^User click on the medication tab$/, async () => {
  await androidPage.clickOnMedicationTab();
});

Then(/^Details of medication should be visible in the list with (.*) and (.*) and (.*) and (.*)$/, async (medicationName, currentDose_And_measurement, frequency, interval) => {
  await androidPage.verifyMobileMedicationDetails(medicationName, currentDose_And_measurement, frequency, interval);
});
