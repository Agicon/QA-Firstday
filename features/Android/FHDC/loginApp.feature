Feature: Test cases for login page

  Scenario Outline: User login to caregiver app
    When login to app using <validLoginEmail>
    Then Verify that user is on homepage

    Examples:
      | validLoginEmail |
      | FHDCMobileLogin |
