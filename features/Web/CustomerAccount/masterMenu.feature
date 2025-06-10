Feature: Test cases for "Master Menu" page

    Scenario Outline: 	Verify that "Customer" is not able to add "New Diagnosis Type" and validation message is displaying if mandatory fields is not populated
        When Open web url <url>
        When Web app login using <userA>
        Then Verify that user successfully redirected on homepage
        When I click on the second index button Master
        When I click on the second index button Diagnosis Type
        Then diagnosisType page displays
        When I click on the button with text New Diagnosis Type
        Then It redirects on the New Diagnosis Type screen
        When I click on the button with text Create
        Then validation message Please Enter Diagnosis Type appears
        When I fill <suggestedDiagnosisType> data in more information field
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
        Then A "New Diagnosis type" gets created and it displays on the "Diagnosis type" list with <suggestedDiagnosisType> and <moreInformation>

        Examples:
            | url      | userA                     | diagnosisType | suggestedDiagnosisType | moreInformation                          |
            | loginUrl | customerLoginCrendentails | Skin          | Skin rash              | https://portal.test.firstdayhc.com/login |