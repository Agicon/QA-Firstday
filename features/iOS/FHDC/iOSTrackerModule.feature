Feature: Testcases for the modules in caregiver mobile app

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Bottle" details of patient
        When login to app using <validLoginEmail>
        Then Select child <firstChild> from the child list
        Then For iOS, verify the homepage
        When User clicks on medical report module
        When I click on Tracker option
        Then I get navigated to Growth screen
        When I click on Nutrition option
        When For ios user click on the Bottle button
        Then I get navigated to Select Milk screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the ios button with second index Save
        Then Validation message appears Please select minutes
        When For ios I fill <minutes> data in "Minutes" field
        When User click on the ios button with second index Save
        When I fill <selectMilk> data in "Select Milk" field for ios
        When User click on the button with text Done
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When For ios I fill <fortification> data in "Select Fortification" field
        When User click on the button with text Done
        When I fill <calories> data in mobile "Calories" field for ios
        When User click on the button with text Done
        When I fill <note> data in "Note" field
        When User click on the button with text Done
        Then User click on the cross button
        Examples:
            | validLoginEmail | firstChild        | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              |
            | FHDCMobileLogin | Patient_Auto_Test | 10      | Mother Milk | 50           | Auto test     | 20       | Observe Your Baby’s Response while Bottle Feeding |


    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Breast Feed" details of patient
        When For ios, when user click on Left Breast option
        Then I get navigated to Add Manual Time screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please select minutes
        When For ios I fill <minutes> data in "Minutes" field
        Then User click on the cross button
        When For ios, when user click on Right Breast option
        Then I get navigated to Add Manual Time screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please select minutes
        When For ios I fill <minutes> data in "Minutes" field
        Then User click on the cross button
        Examples:
            | minutes | startingModule |
            | 10      | Left Breast    |


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
            | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              | startingModule |
            | 10      | Mother Milk | 50           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding | Gavage Fed     |


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
            | minutes | startingModule |
            | 10      | Sleep          |


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
            | note                                | diaperWeight | startingModule |
            | Observe your baby’s little gestures | 50           | Diapering      |


    Scenario Outline: Verify the "Caregiver" is able to view and Edit "Growth" results added by the provider through web and Verify the "Caregiver" is able to delete "Growth" results added by the provider through web
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        When I click on Edit option
        When I fill <updatedHeightInch> data in mobile "Height Inch" field
        When I fill <updatedWeightPound> data in mobile "Weight Pound" field
        When I fill <updateWeightOunce> data in mobile "Weight Ounce" field
        When I fill <updatedHeadCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Save
        Then Added mobile growth details should be visible with Height inch <updatedHeightInch> and Weight Pound <updatedWeightPound> and Weight Ounce <updateWeightOunce> and Head Circumference <updatedHeadCircumference>
        When Delete the mobile record using "Delete" button
        Then Deleted mobile record should not be visible in the list
        Examples:
            | updatedHeightInch | updatedWeightPound | updateWeightOunce | updatedHeadCircumference | startingModule |
            | 24                | 10                 | 12                | 16                       | Growth         |


    Scenario Outline: Verify the validation message is displaying while mandatory fields is not filled for "Growth" results and Verify the "Caregiver" is able to Add "Growth" results with valid data
        Then I click on the back button
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Add Growth
        Then I get navigated to New Growth Result screen
        When User click on the button with text Create
        Then Validation message appears Date is required field
        When User selects date in "Date" field
        When User click on the form "OK" button
        When I fill <heightInch> data in mobile "Height Inch" field
        When I fill <weightPound> data in mobile "Weight Pound" field
        When I fill <weightOunce> data in mobile "Weight Ounce" field
        When I fill <headCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Create
        Then Validation message appears Growth result added successfully!
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        Then Added mobile growth details should be visible with Height inch <heightInch> and Weight Pound <weightPound> and Weight Ounce <weightOunce> and Head Circumference <headCircumference>
        Examples:
            | heightInch | weightPound | weightOunce | headCircumference | startingModule |
            | 20         | 8           | 10          | 15                | Growth         |


    Scenario Outline: Verify the "Caregiver" is able to "Edit" the added "Growth Results"
        When I click on Edit option
        When I fill <updatedHeightInch> data in mobile "Height Inch" field
        When I fill <updatedWeightPound> data in mobile "Weight Pound" field
        When I fill <updateWeightOunce> data in mobile "Weight Ounce" field
        When I fill <updatedHeadCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Save
        Then Added mobile growth details should be visible with Height inch <updatedHeightInch> and Weight Pound <updatedWeightPound> and Weight Ounce <updateWeightOunce> and Head Circumference <updatedHeadCircumference>
        When Delete the mobile record using "Delete" button
        Then Deleted mobile record should not be visible in the list
        Examples:
            | updatedHeightInch | updatedWeightPound | updateWeightOunce | updatedHeadCircumference |
            | 24                | 10                 | 12                | 16                       |


    Scenario Outline: Verify the "Caregiver" is able to Add "Growth" results with valid data and created record should be visible on the web
        Then I click on the back button
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Add Growth
        Then I get navigated to New Growth Result screen
        When User selects date in "Date" field
        When User click on the form "OK" button
        When I fill <heightInch> data in mobile "Height Inch" field
        When I fill <weightPound> data in mobile "Weight Pound" field
        When I fill <weightOunce> data in mobile "Weight Ounce" field
        When I fill <headCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Create
        Then Validation message appears Growth result added successfully!
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        Then Added mobile growth details should be visible with Height inch <heightInch> and Weight Pound <weightPound> and Weight Ounce <weightOunce> and Head Circumference <headCircumference>
        Examples:
            | heightInch | weightPound | weightOunce | headCircumference | startingModule |
            | 20         | 8           | 10          | 15                | Growth         |
