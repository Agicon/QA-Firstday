Feature: Testcases for the modules in caregiver mobile app

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Bottle" details of patient
        When login to app using <validLoginEmail>
        Then Select child <firstChild> from the child list
        Then Verify that user is on homepage
        When User clicks on medical report module
        When I click on Tracker option
        Then I get navigated to Growth screen
        When I click on Nutrition option
        Then I get navigated to View Nutrition Graph screen
        When I click on Bottle option
        Then I get navigated to Select Milk screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        Then User click on the cross button
        Examples:
            | validLoginEmail | firstChild        | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              |
            | FHDCMobileLogin | Patient_Auto_Test | 10      | Mother Milk | 50           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding |


    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Breast Feed" details of patient
        When I click on Left Breast option
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time brefore saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        Then User click on the cross button
        When I click on Right Breast option
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time brefore saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        Then User click on the cross button
        Examples:
            | minutes |
            | 10      |


    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Gavage Fed" details of patient
        When I click on Gavage Fed option
        Then I get navigated to Select Milk screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        Then User click on the cross button
        Examples:
            | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              |
            | 10      | Mother Milk | 50           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding |


    Scenario Outline: Verify that "Caregiver" is able to add "Sleep" details of patient
        When I click on Sleep option
        Then I get navigated to View Sleep Graph screen
        Then Validation message appears No Record Found
        When User click on the right arrow button
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time brefore saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        Then User click on the cross button
        Examples:
            | minutes |
            | 10      |


    Scenario Outline: Verify that "Caregiver" is able to add "Diapering" details of patient
        When I click on Diapering option
        Then I get navigated to View Diapering Graph screen
        When I click on Pee option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        Then User click on the cross button
        When I click on Poo option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        Then User click on the cross button
        When I click on Both option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        Then User click on the cross button
        Examples:
            | note                                | diaperWeight |
            | Observe your baby’s little gestures | 50           |