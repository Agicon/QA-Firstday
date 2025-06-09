Feature: Test cases for login page

  Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Caregiver" app with valid credentials and Verify the user is not logged out from the "Caregiver" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Caregiver" account
    When User leave the "Email  field" empty And populate the <invalidPassword> "Password field" And click on "Login" button
    Then User is not able to login
    When User leave the "Password field" empty And populate the <invalidEmail> "Email field" And click on "Login" button
    Then User is not able to login
    When User enter invalid <invalidEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears This Email is not registered with us
    Then User is not able to login
    When User enter valid <validLoginEmail> and <invalidPassword> in their respective fields And click on "Login" button
    Then Validation message appears Email or Password is incorrect
    Then User is not able to login
    When login to app using <validLoginEmail>
    Then Verify that user is on homepage
    When Verfiy all modules of Firstday-HC app on homepage
    When User clicks on vital signs module
    Then Verify all the features inside vital signs
    Then I click on the back button
    When User clicks on medical report module
    Then Verify all the features inside medical report
    Then I click on the back button
    When User clicks on providers module on homepage
    Then Verify all the tabs inside providers module
    Then I click on the back button
    When User clicks on settings module on homepage
    Then Verify all the tabs inside settings module
    Then I click on the back button
    When User click on "Hamburger" icon displaying in the top left corner
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text NO
    Then The logout confirmation popup closes and provider remains logged in
    When User click on "Hamburger" icon displaying in the top left corner
    When User click on the "Logout" option
    Then A logout confirmation popup displays
    When User click on the button with text YES
    Then User get logged out from my account and gets navigated to login page
    Examples:
      | validLoginEmail | invalidPassword | invalidEmail       |
      | FHDCMobileLogin | 123450000       | testuser@gmail.com |

  Scenario Outline: Verify the "Caregiver" is able to view "My account" and verify "Caregiver" is able to to view "Baby's Information" and Verify the "Caregiver" can "View and update" the information from "My Contact Information" screen and verify "Caregiver" is able to change "Profile picture"
    When login to app using <validLoginEmail>
    Then Verify that user is on homepage
    When User clicks on settings module on homepage
    Then Verify all the tabs inside settings module
    When I click on My Account option
    Then I get navigated to My Account screen
    Then I click on the back button
    When I click on My Contact Information option
    Then I get navigated to Contact Details screen
    Then I click on the back button
    When I click on My Baby's Information option
    Then I get navigated to Information screen
    When I click on "Edit" icon from "Profile Picture" section
    Then The selected image <babyImage> should get updated and displays on "Caregiver's" main screen of the app
    Then Validation message appears Profile picture updated successfully.
    Examples:
      | validLoginEmail | babyImage  |
      | FHDCMobileLogin | Picture(2) |
