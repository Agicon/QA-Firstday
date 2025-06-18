Feature: Test cases for the 'Patient' page

  Scenario Outline: Verify the "Managing Provider" is able to create "New Caregiver" when all the fields are populated with valid data And 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and if any mandatory field is not populated And Verify "Managing Provider is able to "Delete" the "caregiver" when clicked on "Delete" icon
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I click on the second index link Caregivers
    Then It redirects on the Active Caregivers screen
    Then Search and delete duplicate data <validName>
    When I click on the button with text New Caregiver
    Then It redirects on the New Caregiver screen
    When I click on the button with text Create
    Then validation message Please enter first name appears
    Then validation message Please enter last name appears
    Then validation message Please enter email address appears
    Then validation message This field is required. appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidData> in last name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    Then validation message Please enter a valid email address. appears
    When User add <invalidData> in mobile number field
    Then validation message Please enter at least 9 digits. appears
    When User add <invalidEmail> in mobile number field
    Then validation message Please enter no more than 13 digits. appears
    When User add <specialCharactors> in mobile number field
    Then validation message Please enter only numbers appears
    When User add <validName> in name field
    When User add <validLastName> in last name field
    When I fill valid and unique data in email
    When User add <validMobile> in mobile number field
    When I click on the button with text Create
    Then Success message Caregiver Added Succesfully ! appears
    When I populate data <validName> in the "Search" field
    When I fill fields with <validName> and <validLastName> and <validMobile> but I populate "Email field" with already registered email
    Then validation message This email is already registerd with system please choose different email appears
    When I click on the button with text Close
    When I populate data <validName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Caregivers Deleted !! appears
    Then Deleted record should not be visible in the list
    When I click on the button with text New Caregiver
    Then It redirects on the New Caregiver screen
    When User add <validName> in name field
    When User add <validLastName> in last name field
    When I fill valid and unique data in email
    When User add <validMobile> in mobile number field
    When User add <validRelationshipName> in relationship field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    Then Success message Caregiver Added Succesfully ! appears
    When I populate data <caregiverName> in the "Search" field
    Then Created caregiver should be visible in the list with <caregiverName> and <validMobile> and <validRelationshipName> and <children> and <status>

    Examples:
      | url      | userA                     | validName           | validLastName | validMobile | validRelationshipName | validState | validCity | validAddress     | validZipcode | status | caregiverName               | invalidData | invalidEmail   | specialCharactors |
      | loginUrl | providerLoginCrendentails | Auto_Test_Caregiver | Autonix       |  3652900000 | Doctor                | Texas      | Fairview  | 880 Red Oak Lane |        10001 | Active | Auto_Test_Caregiver Autonix |           1 | #####gmail.com | !@#$%%$#@!        |

  Scenario Outline: Verify "Caregiver "Active/Inactive" status
    When I click on the second index link Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <validName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to inactive caregiver? should be displayed
    When I click on the button with text Yes
    Then Success message Caregiver Inactive successfully !! appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Inactive Caregivers
    Then It redirects on the Inactive Caregivers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <inactiveStatus>
    When I click on the link text Inactive
    Then Are you sure you want to active caregiver? should be displayed
    When I click on the button with text Yes
    Then Success message Caregiver Active successfully appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Active Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <status>

    Examples:
      | validName           | status | inactiveStatus |
      | Auto_Test_Caregiver | active | Inactive       |

  Scenario Outline: Verify "Managing Provider" is not able to update the "Caregiver" and validation displays if any mandatory field is not populated while updating the Caregiver And Verify "Managing Provider" is not able to update the "Caregiver" with invalid details And Verify "Managing Provider" is able to update the "Caregiver" details
    When I click on the second index link Caregivers
    Then It redirects on the Active Caregivers screen
    When I populate data <caregiverName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Caregivers screen
    When I update the "Caregiver" but does not populate one of the mandatory field
    When I click on the button with text Update
    Then validation message Please enter first name appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidData> in last name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    When I click on the button with text Update
    Then validation message Please enter a valid email address. appears
    When User add <invalidData> in mobile number field
    When I click on the button with text Update
    Then validation message Please enter at least 8 characters. appears
    When User add <invalidEmail> in mobile number field
    Then validation message Please enter a valid number. appears
    When User add <specialCharactors> in mobile number field
    Then validation message Please enter no more than 16 characters. appears
    When I click on the button with text Update
    When User add <updatedCaregiverName> in name field
    When User add <updatedLastName> in last name field
    When I fill valid and unique data in email
    When User add <updatedMobile> in mobile number field
    When User add <updatedRelationshipName> in relationship field
    When User add <updatedState> in State field
    When User add <updatedCity> in city field
    When User add <updatedAddress> in address field
    When User add <updatedZipcode> in zipcode field
    When I click on the button with text Update
    Then Success message Caregiver details updated ! appears
    When I populate data <caregiverName> in the "Search" field
    Then Created caregiver should be visible in the list with <updatedCaregiver> and <updatedMobile> and <updatedRelationshipName> and <children> and <status>

    Examples:
      | caregiverName               | invalidData | invalidEmail   | specialCharactors | updatedCaregiverName        | updatedLastName | updatedMobile | updatedRelationshipName | updatedState | updatedCity | updatedAddress       | updatedZipcode | status | updatedCaregiver                    |
      | Auto_Test_Caregiver Autonix |           1 | #####gmail.com | !@#$%%$#@! ^&^&^& | Updated_Auto_Test_Caregiver | Autonix         |    2026859019 | Parents                 | Florida      | Miami       | 8900 Canyon Trail Rd |          00123 | Active | Updated_Auto_Test_Caregiver Autonix |

  Scenario Outline: User logged in as Provider And Verify the "Managing Provider" is not able to create "New Patient" and validation displays when mandatory field is not populated And Verify the "Managing Provider" is able to create "New Patient " when all the fields are populated with valid data
    Given Open web url <url>
    When I login on web portal using invalid credentials <invalidEmail> and <invalidPassword>
    Then validation message These credentials do not match our records. appears
    When I login on web portal using invalid credentials <validEmail> and <invalidPassword>
    Then validation message Invalid password please try again. appears
    When I click on the link text Magic Link Login
    Then magic page displays
    When I click on the link text Back Login
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I click on the button with text Save
    Then validation message Please enter first name. appears
    Then validation message Please enter last name. appears
    Then validation message Please select Gender. appears
    Then validation message Please select Hospital. appears
    Then validation message Please select treatment location appears
    When I fill <validFirstName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <startServiceDate> data in birth date field
    When I fill <birthTime> data in birth time field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <week> data in gestational Age week field
    When I fill <days> data in gestational Age days field
    When I fill <treatmentLocation> data in treatment Location field
    When I fill <startServiceDate> data in start service date field
    When I fill <hospitalLocation> data in hospital Location field
    When I fill <defaultNumber> data in hospital Record Number field
    When I fill <defaultNumber> data in ECG MAC Address field
    When I fill <defaultNumber> data in Saturation MAC Address field
    When I fill <defaultNumber> data in Temperature MAC Address field
    When I click on the button with text Save
    Then validation message Please Generate MRN Number appears
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validFirstName> and <validLastName> and <services> and <treatment> and <hospitalLocation> and <status>
    When I hover over the "Settings" icon
    When I click on the link text Logout
    Then I get logged out from my account

    Examples:
      | url      | invalidEmail       | invalidPassword | validEmail                   | userA                     | validFirstName    | validLastName | birthTime | defaultNumber | gender | hospital | caregiver                                                          | week | days | treatmentLocation | location | startServiceDate | hospitalLocation | dashboard-AddPatientOption | dashboard-ManagePatientsOption | services        | treatment | status |
      | loginUrl | provider@gmail.com |          261561 | testprovider2may@yopmail.com | providerLoginCrendentails | Auto_Test_Patient | Auto_Johan    |   5:00 Am |      12356478 | Male   | Default  | testcaregiver 2may (testcaregiver2may@yopmail.com) (+1 1987654356) |   40 |    6 | Hospital / Clinic | Hospital |       21/05/2025 | Greenville       | Add A New Patient          | Manage Patients                | RPM,TELEMED,EMR | Discharge | Active |

  Scenario Outline: Verify the "Managing Provider" is able to create "New patient" when only the mandatory fields are populated with valid data And Verify "Managing Provider" is able to update the "Patient" details And Verify Filters, search features on Active Patient screen And Verify the "Managing Provider" is able to create "New Patient " with "Treatment Location" set as "Home"
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    Then Search and delete duplicate user <updatedFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    When I fill <secondPatientName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <homeLocation> data in treatment Location field
    When I fill <homeLocation> data in date of hospital Discharge field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <secondPatientName> and <validLastName> and <formServices> and <treatmentHomeLocation> and <hospitalLocation> and <status>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    When I populate data <randomText> in the "Search" field
    Then No matching records found should be displayed
    When I click on the button with text Reset
    When I fill <hospital> data in hospital or office field
    When I fill <location> data in treatment Location field under active patients
    Then The results are displayed on the "Active Patient" list as per applied filter
    When I fill <homeLocation> data in treatment Location field under active patients
    Then Verify <secondPatientName> is displayed with <treatmentHomeLocation>
    When I click on the button with text Reset
    Then Default values All Hospital and Both should be displayed in dropdown list
    When I populate data <secondPatientName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I click on the button with text Back
    Then It redirects on the Active Patients screen
    When I populate data <secondPatientName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I remove required field on patient form
    When I click on the button with text Update
    Then validation message Please enter first name. appears
    Then validation message Please enter last name. appears
    When I fill <invalidData> data in baby first name field
    When I fill <invalidData> data in baby last name field
    When I click on the button with text Update
    Then validation message Please enter at least 2 characters. appears
    When I fill <updatedFirstName> data in baby first name field
    When I fill <updatedLastName> data in baby last name field
    When I uncheck <servicesCheckbox> checkbox in baby service field
    When I click on the button with text Update
    Then Success message Patient Updated Succesfully ! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <updatedFirstName> and <updatedLastName> and <services> and <treatmentLocation> and <updatedHospitalLocation> and <status>

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | primaryProvider  | homeLocation | dashboard-AddPatientOption | validLastName | gender | hospital | formServices    | treatmentHomeLocation | randomText | location |
      | loginUrl | providerLoginCrendentails | Manage Patients                | QA_Patient        |           1 | Updated_QA_Patient | Testman         | Lakewood                | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive       | Readmit           | Auto_Test_Patient | My Patient List             | testprovider2may | Home         | Add A New Patient          | Testman       | Female | Default  | RPM,TELEMED,EMR | Readmit               | @@@@@@     | Hospital |

  Scenario Outline: Verify managing provider is able change "Patient's status to "Active/Inactive" status And Verify the "Managing Provider" is able to "Discharge" Patient Successfully And Verify "Managing Provider" is able to "Delete" the "Patient" when clicked on "Delete" icon And "Managing Provider" is able to assign "Primary provider" to the patient
    When I populate data <updatedFirstName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to 	inactive Patient ? should be displayed
    When I click on the button with text Yes
    Then Success message Patient inactivated succesfully appears
    Then Verify, status should be changed and <updatedFirstName> should not be visible in the list
    When I click on the link text Inactive Patients
    Then It redirects on the Inactive Patients screen
    When I populate data <updatedFirstName> in the "Search" field
    Then Verify <updatedFirstName> is displayed with <inactiveStatus>
    When I click on the link text Inactive
    Then Are you sure you want to 	active Patient ? should be displayed
    When I click on the button with text Yes
    Then Success message Patient activated succesfully appears
    Then Verify, status should be changed and <updatedFirstName> should not be visible in the list
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    When I populate data <validFirstName> in the "Search" field
    When I click on the button with text Discharge
    Then It redirects on the Update Patient Treatment Details screen
    When I click on the button with text Close
    Then Successfully able to "close" the "Update Patient Treatment Details" screen
    When I click on the button with text Discharge
    When I select a "Date of hospital Discharge" date Less than or equal to the patient's date of birth
    When I click on the button with text Update
    Then validation message Date of discharge must be greater than or equal to patient date of birth appears
    When I select a "Date of hospital Discharge" date greater than or equal to the patient's date of birth
    When I click on the button with text Update
    Then Success message Patient Details Updated Succesfully ! appears
    When I populate data <updatedFirstName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Patient Deleted !! appears
    Then Deleted record should not be visible in the list
    When I populate data <validFirstName> in the "Search" field
    Then Verify <validFirstName> is displayed with <treatmentLocation>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-PatientListOption> option
    Then It redirects on the Assign Patient screen
    When I populate data <validFirstName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Assign Patient screen
    When I checkmark the <providerOptionCheckbox> option
    When I click on the button with text Assign
    When I populate data <validFirstName> in the "Search" field
    Then The <primaryProvider> gets assigned to the patient and provider displays in the dedicated slot on the list

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | providerOptionCheckbox | primaryProvider  |
      | loginUrl | providerLoginCrendentails | Manage Patients                | QA_Patient        |           1 | Updated_QA_Patient | Testman         | Lakewood                | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive       | Readmit           | Auto_Test_Patient | My Patient List             | Primary Provider       | testprovider2may |

  Scenario Outline: Create a static patient and verify this patient in mobile caregiver app
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validName>
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-AddPatientOption> option
    Then "Add Patient Details" form displays
    When I fill <validName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <caregiver> data in caregiver field
    When I fill <treatmentLocation> data in treatment Location field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then Success message Patient Added Succesfully! appears
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <validName> and <validLastName> and <formServices> and <treatment> and <hospitalLocation> and <status>

    Examples:
      | validName         | validLastName | gender | hospital | caregiver                                                                     | formServices    | treatmentLocation | status | dashboard-ManagePatientsOption | dashboard-AddPatientOption | treatment |
      | Patient_Auto_Test | Ben           | Male   | Default  | Auto_Test_Caregiver Autonix (Auto_test1749802897805@auto.com) (+1 3652900000) | RPM,TELEMED,EMR | Hospital / Clinic | Active | Manage Patients                | Add A New Patient          | Discharge |

  Scenario Outline: Verify the "Managing Provider" is not able to create "New Other Provider" and validation displays if any mandatory field is not populated and if invalid data is added in mandatory field and 	Verify the "Managing Provider" is able to create "Other Provider" when only the mandatory fields are populated with valid data and 	Verify the "Customer" is not able to create "New Other Provider" with already registered email
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    Then Search and delete duplicate data <validOtherProviderName>
    When I click on the button with text New Other Provider
    Then It redirects on the New Other Provider screen
    When I click on the button with text Create
    Then validation message Please enter first name appears
    Then validation message Please enter email address appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <invalidEmail> in email field
    Then validation message Please enter valid email. appears
    When User add <textInMobileNumber> in mobile number field
    When I click on the button with text Create
    Then validation message Please enter only numbers appears
    When User add <invalidMobileNumber> in mobile number field
    Then validation message Please enter at least 10 digits. appears
    When User add <invalidEmail> in website field
    When I click on the button with text Create
    Then validation message Please enter a valid website URL appears
    When User add <textInMobileNumber> in office number field
    When I click on the button with text Create
    When User add <invalidMobileNumber> in office number field
    When User add <invalidData> in zipcode field
    When I click on the button with text Create
    Then validation message Please enter valid zipcode appears
    When I click on the button with text Close
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    When I click on the button with text New Other Provider
    When User add <validOtherProviderName> in name field
    When I fill valid and unique data in email
    When I click on the button with text Create
# Then Success message Other Provider Added Succesfully. Credentials will be sent to an email ! appears
    When I populate data <validOtherProviderName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <validOtherProviderName> and <status>
    When I populate fields <validOtherProviderName> but I populate "Email field" with already registered email
    Then validation message Please Enter Unique email. This email is already register with system. appears
    When I click on the button with text Close

    Examples:
      | url      | userA                     | validOtherProviderName   | invalidData | invalidEmail   | status | textInMobileNumber | invalidMobileNumber |
      | loginUrl | providerLoginCrendentails | Auto_Test_Other_Provider |           1 | #####gmail.com | Active | abcdef             |               12354 |

  Scenario Outline: Verify "Managing Provider" is not able to update the "Other Provider" with invalid details and 	Verify "Managing Provider" is not able to update the "Other Provider" and validation displays if any mandatory field is not populated while updating the customer and Verify "Managing Provider" is able to update the "Other Provider's" details
    Then Search and delete duplicate data <updatedName>
    When User search the created provider <validOtherProviderName>
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User update the "Managing Provider form" but does not populate one of the mandatory field
    Then User click on the "Update" button
    Then validation message Please enter name appears
    When User add <invalidData> in name field
    Then validation message Please enter at least 2 characters. appears
    When User add <updatedName> in name field
    When User click on the "Back" button on "Update Managing Provider Details" page
    When User click on the "View or Update" option under "Action" section
    Then User should navigate to the "Update Managing Provider Details" page
    When User add <updatedName> in name field
    When User add <updatedSpecialty> in specialty field
    Then User click on the "Update" button
    Then Success message Other Provider Updated Succesfully ! appears
    When I populate data <updatedName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <updatedName> and <status>
    When I populate data <updatedName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Other Provider Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | validOtherProviderName   | updatedName                      | updatedSpecialty | invalidData | status |
      | Auto_Test_Other_Provider | Updated_Auto_Test_Other_Provider | Skin             |           1 | Active |

  Scenario Outline: Verify the "Managing Provider" is able to create "Other Provider" when all the fields are populated with valid data
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    Then Search and delete duplicate data <validOtherProviderName>
    When I click on the button with text New Other Provider
    Then It redirects on the New Other Provider screen
    When I click on the button with text Create
    When User add <validOtherProviderName> in name field
    When I fill valid and unique data in email
    When User add <specialty> in specialty field
    When User add <validMobile> in mobile number field
    When User add <validWebsite> in website field
    When User add <validMobile> in office number field
    When User add <validOfficeInfo> in office information field
    When User add <validState> in State field
    When User add <validCity> in city field
    When User add <validAddress> in address field
    When User add <validZipcode> in zipcode field
    When I click on the button with text Create
    # Then Success message Other Provider Added Succesfully. Credentials will be sent to an email ! appears
    When I populate data <validOtherProviderName> in the "Search" field
    Then A "Other Provider" gets created and it displays on the "Other Providers" list with <specialty> and <validOtherProviderName> and <status>

    Examples:
      | validOtherProviderName   | specialty     | validMobile | validWebsite         | validOfficeInfo | validState | validCity   | validAddress            | validZipcode | status |
      | Auto_Test_Other_Provider | pediatricians |  2026839019 | https://webdriver.io | IT Office       | Bridgeland | Silverstone | Westwood Park, TX 24680 |        10001 | Active |

  Scenario Outline: Verify "Customer" is able to change the status of Other Provider to "Inactive" and Verify "Customer" is able to change the status of Managing Provider to "Active" and Verify a "Managing Provider" with "Inactive" status is not allowed to login on portal
    When User click on "Other Provider" tab
    When I populate data <validName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to inactive other provider ? should be displayed
    When I click on the button with text Yes
    Then Success message Other Provider Inactive Successfully !! appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Inactive Other Providers
    Then It redirects on the Inactive Other Providers screen
    When I populate data <validName> in the "Search" field
    Then Verify <validName> is displayed with <inactiveStatus>
    When Open web url <url>
    When Web app login using <provider>
    Then validation message You are not allow to login. Please contact support team. appears
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I click on the second index link Other Providers
    Then It redirects on the Other Providers screen
    When I click on the button with text Inactive Other Providers
    When I populate data <validName> in the "Search" field
    When I click on the link text Inactive
    Then Are you sure you want to active provider ? should be displayed
    When I click on the button with text Yes
    Then Success message Other Provider Active Successfully appears
    Then Verify, status should be changed and <validName> should not be visible in the list
    When I click on the button with text Active Other Providers
    Then The "Managing Provider" now displayed there in list <validName>
    When Open web url <url>
    When Web app login using <provider>
    Then provider/dashboard page displays

    Examples:
      | validName                             | url      | provider                            | userA                     | inactiveStatus |
      | Test_Auto_Other_Provider_For_Provider | loginUrl | otherProviderForProviderStatusCheck | providerLoginCrendentails | Inactive       |

  Scenario Outline: Verify the "Managing Provider" is able to add "Medication" for patient's Medical Record and 	Verify the "Managing Provider" is not able to add "Medications" and validation displays if any mandatory field is not populated
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text Patient_Auto_Test
    When I click on the link text Medical Record
    When I click on the link text Medications
    Then Search and delete duplicate data <medicationName>
    When I click on the button with text New Medication
    Then It redirects on the New Medication screen
    When I click on the button with text Create
    Then validation message Please enter medication. appears
    Then validation message Please enter dose. appears
    When I fill <medicationName> data in medication field
    When I fill <currentDose> data in current dose field
    When I fill <measurement> data in measurement field
    When I fill <frequency> data in frequency field
    When I fill <interval> data in interval field
    When I fill <additionalInformation> data in additional information field
    When I select date in start Date field
    When I click on the button with text Create
    Then Success message Medication Added Succesfully ! appears
    When I populate data <medicationName> in the "Search" field
    Then Medication details should be visible in the list with <medicationName> and <currentDose> and <measurement> and <frequency> and <interval> and <status>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | patientName       | medicationName  | currentDose | measurement | frequency | additionalInformation                         | interval | status | specialCharactors |
      | loginUrl | providerLoginCrendentails | Manage Patients                | Patient_Auto_Test | Auto_Medication |           1 | Teaspoon    | Twice     | Consult the doctor before using this medicine | Day      | Active | !@#$%%$#@!        |

  Scenario Outline: Verify the "Managing Provider" is able to "View and update" the added "Medications" and Verify the "Managing provider" is able to change the "Medications" status and Verify the "Managing provider" is able to search the "Medications" and 	Verify the "Managing provider" is able to delete the "Medications"
    When I populate data <medicationName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    When I update the "Medication" but does not populate one of the mandatory field
    When I click on the button with text Update
    Then validation message Please enter medication. appears
    Then validation message Please enter dose. appears
    When I fill <updatedMedicationName> data in medication field
    When I fill <updateCurrentDose> data in current dose field
    When I fill <updatedMeasurement> data in measurement field
    When I fill <updatedFrequency> data in frequency field
    When I fill <updatedInterval> data in interval field
    When I fill <updatedAdditionalInformation> data in additional information field
    When I select date in start Date field
    When I select date in Last adjusted date field
    When I click on the button with text Update
    Then Success message Medication Updated Succesfully ! appears
    When I populate data <updatedMedicationName> in the "Search" field
    Then Medication details should be visible in the list with <updatedMedicationName> and <updateCurrentDose> and <updatedMeasurement> and <updatedFrequency> and <updatedInterval> and <status>
    When I populate data <updatedMedicationName> in the "Search" field
    When I click on the link text Active
    Then Are you sure you want to change status ? It will end the medication today. should be displayed
    When I click on the button with text Yes
    Then Verify, status should be changed and <updatedMedicationName> should not be visible in the list
    When User select the value from the dropdown Inactive
    Then Verify <updatedMedicationName> is displayed with <inactiveStatus>
    When I click on the link text Inactive
    Then Are you sure you want to change status ? It will start the medication with current date. should be displayed
    When I click on the button with text Yes
    Then Verify, status should be changed and <updatedMedicationName> should not be visible in the list
    When User select the value from the dropdown Active
    Then Verify <updatedMedicationName> is displayed with <status>
    When I populate data <updatedMedicationName> in the "Search" field
    When I click On "Delete" icon
    Then Success message Medication Deleted !! appears
    Then Deleted record should not be visible in the list

    Examples:
      | dashboard-ManagePatientsOption | patientName       | medicationName  | updatedMedicationName  | updateCurrentDose | updatedMeasurement | updatedFrequency | updatedInterval | updatedAdditionalInformation                                   | status | inactiveStatus |
      | Manage Patients                | Patient_Auto_Test | Auto_Medication | Update_Auto_Medication |                 3 | Milliliter         | Three Times      | Week            | Updated info. => Consult the doctor before using this medicine | Active | Inactive       |

  Scenario Outline: Verify the "Managing Provider" is able to add "Medication" for patient's Medical Record
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text Patient_Auto_Test
    When I click on the link text Medical Record
    When I click on the link text Medications
    Then Search and delete duplicate data <medicationName>
    When I click on the button with text New Medication
    Then It redirects on the New Medication screen
    When I fill <medicationName> data in medication field
    When I fill <currentDose> data in current dose field
    When I fill <measurement> data in measurement field
    When I fill <frequency> data in frequency field
    When I fill <interval> data in interval field
    When I fill <additionalInformation> data in additional information field
    When I select date in start Date field
    When I click on the button with text Create
    Then Success message Medication Added Succesfully ! appears
    When I populate data <medicationName> in the "Search" field
    Then Medication details should be visible in the list with <medicationName> and <currentDose> and <measurement> and <frequency> and <interval> and <status>

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | patientName | medicationName  | currentDose | measurement | frequency | additionalInformation                         | interval | status |
      | loginUrl | providerLoginCrendentails | Manage Patients                | Baby 21     | Auto_Medication |           1 | Teaspoon    | Twice     | Consult the doctor before using this medicine | Day      | Active |
# //----------------assign other provider----------------------//

  Scenario Outline: Verify the functionality of "Assign other provider"
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click the <dashboard-ManagePatientsOption> option
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When User click on the button Other Provider under baby dashboard screen
    Then Search and delete duplicate data <otherProvider>
    When User click on the button text Assign Other Provider
    When Click on select provider dropdown
    Then Click on option <otherProvider> from list
    When I click on the button with text Assign
    Then Success message Providers Assign Succesfully appears
    When I populate data <otherProvider> in the "Search" field
    Then Added record <otherProvider> is displaying in list

    Examples:
      | url      | userA                     | dashboard-ManagePatientsOption | patientName       | otherProvider       |
      | loginUrl | providerLoginCrendentails | Manage Patients                | Patient_Auto_Test | other_auto_provider |
  # Scenario Outline: Check and verify user profile functionlities
  #   When I hover over the "Settings" icon
  #   When I click on the link text Profile
  #   Then profile page displays

  Scenario Outline: Verify the "Managing Provider" is able to delete the added "Vaccination" and Verify the "Managing Provider" is not able to add "Vaccination" and validation displays if any mandatory field is not populated and 	Verify the "Managing Provider" is able to add "Pre defined Vaccination" for patient's medical record
    When I click on the link text Medical Record
    When I click on the link text Vaccinations
    When I click On "Delete" icon
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I click on the button with text Create
    Then validation message Please select vaccine appears
    When I fill <comments> data in lot number field
    When I click on the button with text Create
    Then validation message Please enter only digits. appears
    When I click on the button with text Close
    When I click on the button with text New Vaccination
    Then It redirects on the New Vaccination screen
    When I fill <vaccineName> data in vaccine field
    When I select date in start Date field
    When I fill <lotNumber> data in lot number field
    When I fill <comments> data in comments field
    When I click on the button with text Create
    Then Success message Vaccinations Added Succesfully ! appears
    Then Vaccine details should be visible in the list with vaccine name <createdVaccineName> and brand <brandName> and lot number <lotNumber> and comments <comments>

    Examples:
      | vaccineName                    | lotNumber | comments                                      | createdVaccineName | brandName  |
      | Auto_Test_Vaccine (Healthcare) |    325698 | Consult the doctor before using this vaccine. | Auto_Test_Vaccine  | Healthcare |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Diagnosis" and validation displays if any mandatory field is not populated and 	Verify the "Managing Provider" is able to add pre-defined "Diagnosis" for patient's medical record
    When I click on the link text Medical Record
    When I click on the link text Diagnosis
    Then It redirects on the Patient_Auto_Test Ben's Diagnosis screen
    When I click on the button with text New Diagnosis
    Then It redirects on the New Diagnosis screen
    When I click on the button with text Create
    Then validation message Please enter start date. appears
    Then validation message Please enter type. appears
    Then validation message Please enter description. appears
    When I select date in start Date field
    When I fill <diagnosisType> data in diagnosis field
    When User fill <description> data in description field
    When I click on the button with text Create
    Then Success message Diagnosis Added Succesfully ! appears

    Examples:
      | diagnosisType | description                                   |
      | Skin rash     | Consult the doctor before using this vaccine. |

  Scenario Outline: Verify the "Managing Provider" is not able to add "Media" and validation displays if any mandatory field is not populated and Verify the "Managing Provider" is able to add "Media" for patient's medical record and 	Verify the "Managing provider" is able to search the "Media"
    When I click on the link text Medical Record
    When I click on the link text Media
    Then It redirects on the Patient_Auto_Test Ben's Media screen
    Then Search and delete duplicate data <image>
    When I click on the button with text New Media
    Then It redirects on the New Media screen
    When I click on the button with text Create
    Then validation message The files field is required when single file is not present. appears
    Then validation message The single file field is required when files is not present. appears
    Then validation message The date field is required. appears
    When User should be able to upload file <image>
    When I select date in start Date field
    When I fill <description> data in description field
    When I click on the button with text Create
    Then Success message Media Added Succesfully ! appears
    When I populate data <image> in the "Search" field
    Then File details should be visible with <image> and <fileType> and <description>
    When I populate data <specialCharactors> in the "Search" field
    Then No matching records found should be displayed
    When I populate data <image> in the "Search" field
    When I click on added <image> from the list

    Examples:
      | image      | fileType | description           | specialCharactors |
      | Picture(2) | jpg      | Auto Test description | !@#$%%$#@!        |
