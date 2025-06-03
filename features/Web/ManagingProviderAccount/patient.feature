Feature: Test cases for the 'Patient' page


  Scenario Outline: User logged in as Provider And Verify the "Managing Provider" is not able to create "New Patient" and validation displays when mandatory field is not populated And Verify the "Managing Provider" is able to create "New Patient " when all the fields are populated with valid data
    Given Open web url <url>
    When I login on web portal using invalid credentials <invalidEmail> and <invalidPassword>
    Then validation message These credentials do not match our records. appears
    When I login on web portal using invalid credentials <validEmail> and <invalidPassword>
    Then validation message Invalid password please try again. appears
    When I click on link text Magic Link Login
    Then magic page displays
    When I click on link text Back Login
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click on the <dashboard-ManagePatientsOption> option
    Then Search and delete duplicate user <validFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click on the <dashboard-AddPatientOption> option
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
    When I click on link text Logout
    Then I get logged out from my account

    Examples:
      | url      | invalidEmail       | invalidPassword | validEmail                   | userA                     | validFirstName    | validLastName | birthTime | defaultNumber | gender | hospital | caregiver                                                          | week | days | treatmentLocation | location | homeLocation | startServiceDate | hospitalLocation | dashboard-AddPatientOption | dashboard-ManagePatientsOption | randomText | secondPatientName | services        | treatment | status | updatedFirstName   | treatmentHomeLocation |
      | loginUrl | provider@gmail.com | 261561          | testprovider2may@yopmail.com | providerLoginCrendentails | Auto_Test_Patient | Auto_Johan    | 5:00 Am   | 12356478      | Male   | Default  | testcaregiver 2may (testcaregiver2may@yopmail.com) (+1 1987654356) | 40   | 6    | Hospital / Clinic | Hospital | Home         | 21/05/2025       | Greenville       | Add A New Patient          | Manage Patients                | @@@@@@     | QA_Patient        | RPM,TELEMED,EMR | Discharge | Active | Updated_QA_Patient | Readmit               |

  Scenario Outline: Verify the "Managing Provider" is able to create "New patient" when only the mandatory fields are populated with valid data And Verify "Managing Provider" is able to update the "Patient" details And Verify Filters, search features on Active Patient screen And Verify the "Managing Provider" is able to create "New Patient " with "Treatment Location" set as "Home"
    Given Open web url <url>
    When Web app login using <userA>
    Then providers/dashboard page displays
    When I hover on the "Dashboard-All Patient" tab
    When I click on the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    Then Search and delete duplicate user <updatedFirstName>
    When I hover on the "Dashboard-All Patient" tab
    When I click on the <dashboard-AddPatientOption> option
    When I fill <secondPatientName> data in baby first name field
    When I fill <validLastName> data in baby last name field
    When I fill <gender> data in gender field
    When I fill <hospital> data in hospital or office field
    When I fill <homeLocation> data in treatment Location field
    When I fill <homeLocation> data in date of hospital Discharge field
    When I click on the button with text Generate Firstday Healthcare Medical Record Number
    Then QR code should be generated and First day Healthcare Medical Record Number should be generated
    When I click on the button with text Save
    Then A "New Patient" gets created And it is displayed on the "My Patient list" with <secondPatientName> and <validLastName> and <services> and <treatmentHomeLocation> and <hospitalLocation> and <status>
    When I hover on the "Dashboard-All Patient" tab
    When I click on the <dashboard-ManagePatientsOption> option
    Then It redirects on the Active Patients screen
    When I populate <randomText> in the "Search" field
    Then No matching records found should be displayed
    When I click on the button with text Reset
    When I fill <hospital> data in hospital or office field
    When I fill <location> data in treatment Location field under active patients
    Then The results are displayed on the "Active Patient" list as per applied filter
    When I fill <homeLocation> data in treatment Location field under active patients
    Then Verify patient <secondPatientName> is displayed with <treatmentHomeLocation>
    When I click on the button with text Reset
    Then Default values All Hospital and Both should be displayed in dropdown list
    When I populate <secondPatientName> in the "Search" field
    When I click on the "View or Update" option under the "Action" section
    Then It redirects on the Update Patient Details screen
    When I click on the button with text Back
    Then It redirects on the Active Patients screen
    When I populate <secondPatientName> in the "Search" field
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
      | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | primaryProvider  | homeLocation |
      | loginUrl | providerLoginCrendentails | Manage Patients                | QA_Patient        | 1           | Updated_QA_Patient | Testman         | Lakewood                | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive       | Readmit           | Auto_Test_Patient | My Patient List             | testprovider2may | Home         |

  # Scenario Outline: Verify managing provider is able change "Patient's status to "Active/Inactive" status And Verify the "Managing Provider" is able to "Discharge" Patient Successfully And Verify "Managing Provider" is able to "Delete" the "Patient" when clicked on "Delete" icon And "Managing Provider" is able to assign "Primary provider" to the patient
  #   When I populate <updatedFirstName> in the "Search" field
  #   When I click on link text Active
  #   Then Are you sure you want to 	inactive Patient ? should be displayed
  #   When I click on the button with text Yes
  #   Then Success message Patient inactivated succesfully appears
  #   Then Verify patient status is changed and patient is not visible in the list <updatedFirstName>
  #   When I click on link text Inactive Patients
  #   Then It redirects on the Inactive Patients screen
  #   When I populate <updatedFirstName> in the "Search" field
  #   Then Verify patient <updatedFirstName> is displayed with <inactiveStatus>
  #   When I click on link text Inactive
  #   Then Are you sure you want to 	active Patient ? should be displayed
  #   When I click on the button with text Yes
  #   Then Success message Patient activated succesfully appears
  #   Then Verify patient status is changed and patient is not visible in the list <updatedFirstName>
  #   When I hover on the "Dashboard-All Patient" tab
  #   When I click on the <dashboard-ManagePatientsOption> option
  #   Then It redirects on the Active Patients screen
  #   When I populate <validFirstName> in the "Search" field
  #   When I click on the button with text Discharge
  #   Then It redirects on the Update Patient Treatment Details screen
  #   When I click on the button with text Close
  #   Then Successfully able to "close" the "Update Patient Treatment Details" screen
  #   When I click on the button with text Discharge
  #   When I select a "Date of hospital Discharge" date Less than or equal to the patient's date of birth
  #   When I click on the button with text Update
  #   Then validation message Date of discharge must be greater than or equal to patient date of birth appears
  #   When I select a "Date of hospital Discharge" date greater than or equal to the patient's date of birth
  #   When I click on the button with text Update
  #   Then Success message Patient Details Updated Succesfully ! appears
  #   When I populate <updatedFirstName> in the "Search" field
  #   When I click On "Delete" icon
  #   Then Success message Patient Deleted !! appears
  #   Then Deleted record should not be visible in the list
  #   When I populate <validFirstName> in the "Search" field
  #   Then Verify patient <validFirstName> is displayed with <treatmentLocation>
  #   When I hover on the "Dashboard-All Patient" tab
  #   When I click on the <dashboard-PatientListOption> option
  #   Then It redirects on the Assign Patient screen
  #   When I populate <validFirstName> in the "Search" field
  #   When I click on the "View or Update" option under the "Action" section
  #   Then It redirects on the Assign Patient screen
  #   When I checkmark the <providerOptionCheckbox> option
  #   When I click on the button with text Assign
  #   When I populate <validFirstName> in the "Search" field
  #   Then The <primaryProvider> gets assigned to the patient and provider displays in the dedicated slot on the list
  #   Examples:
  #     | url      | userA                     | dashboard-ManagePatientsOption | secondPatientName | invalidData | updatedFirstName   | updatedLastName | updatedHospitalLocation | services    | treatment | status | servicesCheckbox          | inactiveStatus | treatmentLocation | validFirstName    | dashboard-PatientListOption | providerOptionCheckbox | primaryProvider  |
  #     | loginUrl | providerLoginCrendentails | Manage Patients                | QA_Patient        | 1           | Updated_QA_Patient | Testman         | Lakewood                | TELEMED,EMR | Discharge | Active | Remote patient monitoring | Inactive       | Readmit           | Auto_Test_Patient | My Patient List             | Primary Provider       | testprovider2may |

  # Scenario Outline: Verify the "Managing Provider" is able to create "New Caregiver" when all the fields are populated with valid data And 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and 	Verify the "Managing Provider" is able to create "New Caregiver" when only the mandatory fields are populated with valid data and if any mandatory field is not populated And Verify "Managing Provider is able to "Delete" the "caregiver" when clicked on "Delete" icon
  #   When I click on the second index button Caregivers
  #   Then It redirects on the Active Caregivers screen
  #   Then Search and delete duplicate data <validName>
  #   When I click on the button with text New Caregiver
  #   Then It redirects on the New Caregiver screen
  #   When I click on the button with text Create
  #   Then validation message Please enter first name appears
  #   Then validation message Please enter last name appears
  #   Then validation message Please enter email address appears
  #   Then validation message This field is required. appears
  #   When User add <invalidData> in name field
  #   Then validation message Please enter at least 2 characters. appears
  #   When User add <invalidData> in last name field
  #   Then validation message Please enter at least 2 characters. appears
  #   When User add <invalidEmail> in email field
  #   Then validation message Please enter a valid email address. appears
  #   When User add <invalidData> in mobile number field
  #   Then validation message Please enter at least 9 digits. appears
  #   When User add <invalidEmail> in mobile number field
  #   Then validation message Please enter no more than 13 digits. appears
  #   When User add <specialCharactors> in mobile number field
  #   Then validation message Please enter only numbers appears
  #   When User add <validName> in name field
  #   When User add <validLastName> in last name field
  #   When I fill valid and unique data in email
  #   When User add <validMobile> in mobile number field
  #   Then Wait for few seconds
  #   When I click on the button with text Create
  #   Then Success message Caregiver Added Succesfully ! appears
  #   When I populate <validName> in the "Search" field
  #   When I populate fields <validName> and <validLastName> and <validMobile> but I populate "Email field" with already registered email
  #   Then validation message This email is already registerd with system please choose different email appears
  #   When I click on the button with text Close
  #   When I populate <validName> in the "Search" field
  #   When I click On "Delete" icon
  #   Then Success message Caregivers Deleted !! appears
  #   Then Deleted record should not be visible in the list
  #   When I click on the button with text New Caregiver
  #   Then It redirects on the New Caregiver screen
  #   When User add <validName> in name field
  #   When User add <validLastName> in last name field
  #   When I fill valid and unique data in email
  #   When User add <validMobile> in mobile number field
  #   When User add <validRelationshipName> in relationship field
  #   When User add <validState> in State field
  #   When User add <validCity> in city field
  #   When User add <validAddress> in address field
  #   When User add <validZipcode> in zipcode field
  #   Then Wait for few seconds
  #   When I click on the button with text Create
  #   Then Success message Caregiver Added Succesfully ! appears
  #   When I populate <caregiverName> in the "Search" field
  #   Then Created caregiver should be visible in the list with <caregiverName> and <validMobile> and <validRelationshipName> and <children> and <status>
  #   Examples:
  #     | validName           | validLastName | validMobile | validRelationshipName | validState | validCity | validAddress     | validZipcode | status | caregiverName               | invalidData | invalidEmail   | specialCharactors |
  #     | Auto_Test_Caregiver | Autonix       | 3652900000  | Doctor                | Texas      | Fairview  | 880 Red Oak Lane | 10001        | Active | Auto_Test_Caregiver Autonix | 1           | #####gmail.com | !@#$%%$#@!        |

  # Scenario Outline: Verify "Managing Provider" is not able to update the "Caregiver" and validation displays if any mandatory field is not populated while updating the Caregiver And Verify "Managing Provider" is not able to update the "Caregiver" with invalid details And Verify "Managing Provider" is able to update the "Caregiver" details
  #   When I click on the second index button Caregivers
  #   Then It redirects on the Active Caregivers screen
  #   When I populate <caregiverName> in the "Search" field
  #   When I click on the "View or Update" option under the "Action" section
  #   Then It redirects on the Update Caregivers screen
  #   When I update the "Caregiver" but does not populate one of the mandatory field
  #   When I click on the button with text Update
  #   Then validation message Please enter first name appears
  #   When User add <invalidData> in name field
  #   Then validation message Please enter at least 2 characters. appears
  #   When User add <invalidData> in last name field
  #   Then validation message Please enter at least 2 characters. appears
  #   When User add <invalidEmail> in email field
  #   When I click on the button with text Update
  #   Then validation message Please enter a valid email address. appears
  #   When User add <invalidData> in mobile number field
  #   When I click on the button with text Update
  #   Then validation message Please enter at least 8 characters. appears
  #   When User add <invalidEmail> in mobile number field
  #   Then validation message Please enter a valid number. appears
  #   When User add <specialCharactors> in mobile number field
  #   Then validation message Please enter no more than 16 characters. appears
  #   When I click on the button with text Update
  #   When User add <updatedCaregiverName> in name field
  #   When User add <updatedLastName> in last name field
  #   When I fill valid and unique data in email
  #   When User add <updatedMobile> in mobile number field
  #   When User add <updatedRelationshipName> in relationship field
  #   When User add <updatedState> in State field
  #   When User add <updatedCity> in city field
  #   When User add <updatedAddress> in address field
  #   When User add <updatedZipcode> in zipcode field
  #   When I click on the button with text Update
  #   Then Success message Caregiver details updated ! appears
  #   When I populate <caregiverName> in the "Search" field
  #   Then Created caregiver should be visible in the list with <updatedCaregiver> and <updatedMobile> and <updatedRelationshipName> and <children> and <status>
  #   Examples:
  #     | caregiverName               | invalidData | invalidEmail   | specialCharactors | updatedCaregiverName        | updatedLastName | updatedMobile | updatedRelationshipName | updatedState | updatedCity | updatedAddress       | updatedZipcode | status | updatedCaregiver                    |
  #     | Auto_Test_Caregiver Autonix | 1           | #####gmail.com | !@#$%%$#@! ^&^&^& | Updated_Auto_Test_Caregiver | Autonix         | 2026839019    | Parents                 | Florida      | Miami       | 8900 Canyon Trail Rd | 00123          | Active | Updated_Auto_Test_Caregiver Autonix |
