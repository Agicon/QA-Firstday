Feature: Test cases for login page

  Scenario Outline: Verify that provider is able to login app
    When login to app using <validLoginEmail>
    Then Verify that user is on FHDA moblie provider homepage

    Examples:
      | validLoginEmail |
      | FHDAMobileLogin |
