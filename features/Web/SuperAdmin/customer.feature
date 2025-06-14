Feature: Test cases for create customer page

  Scenario Outline: User logged in as admin
    Given Open web url <url>
    When Web app login using <userA>

    Examples:
      | url      | userA |
      | loginUrl | admin |

  # Scenario Outline: Verify the "Super Admin" is not able to create "New Customer" and validation displays if any mandatory field is not populated and verify the working of close button in popup
  #   When I click on the "Customers" tab
  #   Then I navigate to the "Customers" page
  #   When I click on the "New Customer" button
  #   Then "New customer" form displays
  #   When I click on the button with text Create
  #   Then validation message Please enter hospital/clinic name appears
  #   Then validation message Please enter first name appears
  #   Then validation message Please enter email address appears
  #   Then validation message Please enter last name appears
  #   Then validation message Please enter no of patient licence appears
  #   Then validation message Please enter service expiry date appears
  #   When I fill <invalidData> data in clinic name field
  #   When I click on the button with text Create
  #   Then validation message Please enter at least 2 characters. appears
  #   When I fill <validData> data in clinic name field
  #   When I fill <invalidData> data in first name field
  #   When I click on the button with text Create
  #   Then validation message Please enter at least 2 characters. appears
  #   When I fill <validData> data in first name field
  #   When I fill <invalidData> data in last name field
  #   When I click on the button with text Create
  #   Then validation message Please enter at least 2 characters. appears
  #   When I fill <validData> data in last name field
  #   When I fill <invalidData> data in email field
  #   When I click on the button with text Create
  #   Then validation message Please enter a valid email address. appears
  #   When I fill <invalidData> data in phone number field
  #   When I click on the button with text Create
  #   Then validation message Please enter at least 10 digits. appears
  #   When I fill <validData> data in phone number field
  #   When I click on the button with text Create
  #   Then validation message Please enter only numbers appears
  #   When I fill <validPhone> data in phone number field
  #   When I fill <invalidData> data in office number field
  #   When I click on the button with text Create
  #   Then validation message Please enter at least 10 digits. appears
  #   When I fill <validData> data in office number field
  #   When I click on the button with text Create
  #   Then validation message Please enter only numbers appears
  #   When I fill <validPhone> data in office number field
  #   When I fill <invalidData> data in zip code field
  #   When I click on the button with text Create
  #   Then validation message Please enter valid zipcode appears
  #   When I fill <invalidData> data in number of licence field
  #   When I click on the button with text Create
  #   Then validation message Please enter a value greater than or equal to 1. appears
  #   When I fill <invalidData> data in expiry field
  #   When I click on the button with text Create
  #   Then validation message Expiry date must be greater than today. appears
  #   When I click on the button with text Close
  #   Then A "New Customer" form closes

  #   Examples:
  #     | url      | userA | invalidData | validData | validPhone |
  #     | loginUrl | admin |           0 | Testing   | 2026839019 |

  # Scenario Outline: Verify the "Super Admin" is able to create "New Customer" when only mandatory fields are populated and check validation when using already registered email
  #   When I click on the "Customers" tab
  #   Then I navigate to the "Customers" page
  #   Then Search and delete duplicate data <validClinicName>
  #   When I click on the "Customers" tab
  #   When I click on the "New Customer" button
  #   Then "New customer" form displays
  #   When I fill <validClinicName> data in clinic name field
  #   When I fill <validFirstName> data in first name field
  #   When I fill <validLastName> data in last name field
  #   When I fill valid and unique data in email
  #   When I fill <validNumberOfLicence> data in number of licence field
  #   When I fill valid date in expiry field
  #   When I click on the button with text Create
  #   Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
  #   When I populate fields but I populate "Email field" with already registered email
  #   When I fill <validClinicName> data in clinic name field
  #   When I fill <validFirstName> data in first name field
  #   When I fill <validLastName> data in last name field
  #   When I fill <validNumberOfLicence> data in number of licence field
  #   When I fill valid date in expiry field
  #   When I click on the button with text Create
  #   Then validation message This email has already been taken appears
  #   When I click on the button with text Close

  #   Examples:
  #     | validClinicName  | validFirstName | validLastName | validNumberOfLicence |
  #     | Auto_Test_Clinic | David          | William       |                  998 |

  # Scenario Outline: Verify the "Super Admin" is able to create "New Customer" when all the fields are populated,view customer verification
  #   When I click on the "Customers" tab
  #   Then I navigate to the "Customers" page
  #   Then Search and delete duplicate data <validClinicName>
  #   When I click on the "Customers" tab
  #   When I click on the "New Customer" button
  #   Then "New customer" form displays
  #   When I fill <validClinicName> data in clinic name field
  #   When I fill <validFirstName> data in first name field
  #   When I fill <validLastName> data in last name field
  #   When I fill valid and unique data in email
  #   When I fill <validPhone> data in phone number field
  #   When I fill <validPhone> data in office number field
  #   When I fill <validZip> data in zip code field
  #   When I fill <validInformation> data in office information field
  #   When I fill <country> data in country field
  #   When I fill <state> data in state field
  #   When I fill <city> data in city field
  #   When I fill <validNumberOfLicence> data in number of licence field
  #   When I fill valid date in expiry field
  #   When I click on the button with text Create
  #   Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
  #   When I click on the "View" icon under "Action" column
  #   Then I navigates to the Customer <validClinicName> details page
  #   When I click on the "Customers" tab
  #   Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
  #   When I click On "Edit" icon
  #   When I update the "Customer form" but does not populate one of the mandatory field and click on the Update button
  #   Then validation message Please enter hospital/clinic name appears
  #   When I fill <invalidData> data in clinic name field
  #   When I click on the button with text Update
  #   Then validation message Please enter at least 2 characters. appears
  #   When User click on the "Back" button on "update customer" page
  #   Then I navigate to the "Customers" page
  #   Then A "New Customer" gets created and it displays clinic name <validClinicName> first name <validFirstName> last name <validLastName> email and licence number <validNumberOfLicence> on the "Customers list"
  #   When I click On "Edit" icon
  #   When I fill <updatedClinicName> data in clinic name field
  #   When I fill <updatedFirstName> data in first name field
  #   When I fill <updatedLastName> data in last name field
  #   When I fill <validNumberOfLicence> data in number of licence field
  #   When I click on the button with text Update
  #   Then Success message Customer Updated Succesfully ! appears
  #   Then A "New Customer" gets created and it displays clinic name <updatedClinicName> first name <updatedFirstName> last name <updatedLastName> email and licence number <validNumberOfLicence> on the "Customers list"
  #   When I click On "Delete" icon
  #   Then Success message Customer Deleted successfully !! appears

  #   Examples:
  #     | validClinicName  | validFirstName | validLastName | validNumberOfLicence | validPhone | validZip | validInformation | country | state | city   | invalidData | updatedClinicName     | updatedFirstName      | updatedLastName      |
  #     | Auto_Test_Clinic | John           | William       |                   98 | 3652984561 |    10001 | I am QA engg.    | India   | New   | tester |           2 | UpdateAutomatedClinic | updatedAutomatedFirst | updatedAutomatedLast |

  # Scenario Outline: Verify the functionality of active and inactive Status
  #   When I click on the "Customers" tab
  #   Then I navigate to the "Customers" page
  #   Then I Search data <validClinicName>
  #   When I click on link text Active
  #   Then Status should be displayed as Inactive
  #   Given Open web url <url>
  #   When Web app login using <customer>
  #   Then validation message You are not allow to login. Please contact support team. appears
  #   Given Open web url <url>
  #   When Web app login using <userA>
  #   When I click on the "Customers" tab
  #   Then I navigate to the "Customers" page
  #   Then I Search data <validClinicName>
  #   When I click on link text Inactive
  #   Then Status should be displayed as Active
  #   Given Open web url <url>
  #   When Web app login using <customer>
  #   Then Verify that user successfully redirected on homepage

  #   Examples:
  #     | validClinicName      | url      | userA | customer               |
  #     | Auto_cust_for_status | loginUrl | admin | customerForStatusCheck |
