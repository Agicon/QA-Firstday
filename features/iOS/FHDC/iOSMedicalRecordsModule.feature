Feature: Test cases for login page

    Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Caregiver" app with valid credentials and Verify the user is not logged out from the "Caregiver" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Caregiver" account

        When login to app using <validLoginEmail>
        Then Select child <firstChild> from the child list
        Then For iOS, verify the homepage
        When User clicks on medical report module
        Then Verify all the features inside medical report
        Then User click on the medication tab
        Then Details of medication should be visible in the list with <medicationName> and <currentDose_And_measurement> and <frequency> and <interval>
        Examples:
            | validLoginEmail | invalidPassword | invalidEmail       | firstChild        | medicationName         | currentDose_And_measurement | frequency   | additionalInformation                         | interval | status |
            | FHDCMobileLogin | 123450000       | testuser@gmail.com | Patient_Auto_Test | Update_Auto_Medication | 3 (Milliliter)              | Three Times | Consult the doctor before using this medicine | Week     | Active |
