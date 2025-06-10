Feature: Test cases for "Master Menu" page

    Scenario Outline: Verify that "Customer" is able to update " Diagnosis Type" details with valid data and Verify "Customer" is able to "Search" Diagnosis Type and Verify "Customer is able to "Delete" the "Diagnosis Type" when clicked on "Delete" icon and Verify that "Customer" is not able to add "New Diagnosis Type" and validation message is displaying if mandatory fields is not populated
        When Open web url <url>
        When Web app login using <userA>
        Then Verify that user successfully redirected on homepage
        When I click on the second index button Master
        When I click on the second index button Diagnosis Type
        Then diagnosisType page displays
        Then Search and delete duplicate data <suggestedDiagnosisType>
        When I click on the button with text New Diagnosis Type
        Then It redirects on the New Diagnosis Type screen
        When I click on the button with text Create
        Then validation message Please Enter Diagnosis Type appears
        When I fill <specialCharactors> data in more information field
        When I click on the button with text Create
        Then validation message Please enter a valid URL appears
        When I click on the button with text Close
        Then New Diagnosis Type popup should be closed successfully
        When I click on the button with text New Diagnosis Type
        Then It redirects on the New Diagnosis Type screen
        When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
        Then list of diagnosis should appear according to added character
        When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
        When I fill <moreInformation> data in more information field
        When I click on the button with text Create
        Then Success message Diagnosis Type Added Succesfully! appears
        When I populate data <suggestedDiagnosisType> in the "Search" field
        Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <suggestedDiagnosisType> and <diagnosisCode> and <moreInformation>
        When I populate data <suggestedDiagnosisType> in the "Search" field
        When User click on the "View or Update" option under "Action" section
        Then It redirects on the Update Diagnosis Type Detail screen
        When I add first 4 character <updatedDiagnosisType> in "Diagnosis Type" fields on the form
        Then list of diagnosis should appear according to added character
        When I select any "Diagnosis Type" <updatedsuggestedType> from the list
        When I click on the button with text Update
        Then Success message Diagnosis Type Updated Succesfully! appears
        When I populate data <updatedsuggestedType> in the "Search" field
        Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <updatedsuggestedType> and <updatedDiagnosisCode> and <moreInformation>
        When I populate data <specialCharactors> in the "Search" field
        Then No matching records found should be displayed
        When I populate data <updatedsuggestedType> in the "Search" field
        When I click On "Delete" icon
        Then Success message Diagnosis Type Deleted !! appears
        Then Deleted record should not be visible in the list

        Examples:
            | url      | userA                     | suggestedDiagnosisType | specialCharactors | updatedDiagnosisType | updatedsuggestedType | moreInformation                          | updatedDiagnosisCode | diagnosisType | diagnosisCode |
            | loginUrl | customerLoginCrendentails | Skin rash              | @@##$%$%%%        | Hair                 | Twisted hair         | https://portal.test.firstdayhc.com/login | 17170005             | Skin          | 271807003     |


    Scenario Outline: Verify that "Customer" is able to create "New Diagnosis Type" populated with valid data and Verify that "Customer " is not able to create "New Diagnosis type" with same name
        When I click on the second index button Master
        When I click on the second index button Diagnosis Type
        Then diagnosisType page displays
        Then Search and delete duplicate data <suggestedDiagnosisType>
        When I click on the button with text New Diagnosis Type
        Then It redirects on the New Diagnosis Type screen
        When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
        Then list of diagnosis should appear according to added character
        When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
        When I fill <moreInformation> data in more information field
        When I click on the button with text Create
        Then Success message Diagnosis Type Added Succesfully! appears
        When I populate data <suggestedDiagnosisType> in the "Search" field
        Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <suggestedDiagnosisType> and <diagnosisCode> and <moreInformation>
        When I click on the button with text New Diagnosis Type
        Then It redirects on the New Diagnosis Type screen
        When I add first 4 character <diagnosisType> in "Diagnosis Type" fields on the form
        Then list of diagnosis should appear according to added character
        When I select any "Diagnosis Type" <suggestedDiagnosisType> from the list
        When I click on the button with text Create
        Then validation message Please enter a unique diagnosis type appears
        When I click on the button with text Close
        Examples:
            | url      | userA                     | diagnosisType | suggestedDiagnosisType | moreInformation                          | diagnosisCode |
            | loginUrl | customerLoginCrendentails | Skin          | Skin rash              | https://portal.test.firstdayhc.com/login | 271807003     |