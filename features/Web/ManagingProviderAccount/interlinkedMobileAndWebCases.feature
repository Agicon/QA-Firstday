Feature: Verification of the interlinked cases between Mobile and Web

    Scenario Outline: Verify the mobile "Nutrition" details are visible on the web
        Given Open web url <url>
        When Web app login using <userA>
        Then providers/dashboard page displays
        When I hover on the "Dashboard-All Patient" tab
        When I click the <dashboard-ManagePatientsOption> option
        When I populate data <patientName> in the "Search" field
        When I click on the link text <patientName>
        When I click on the link text Medical Record
        When Hover over link Tracker
        When I click on the second index link Nutrition
        When I choose <nutritionLeftBreastType> option from "Nutrition" dropdown
        Then Verify <nutritionLeftBreastType> on the web with value <graphValue>
        When I choose <nutritionRightBreastType> option from "Nutrition" dropdown
        Then Verify <nutritionRightBreastType> on the web with value <graphValue>
        When I choose <nutritionBottleType> option from "Nutrition" dropdown
        Then Verify <nutritionBottleType> on the web with value <bottleGraphValue>
        When I choose <nutritionGavageType> option from "Nutrition" dropdown
        Then Verify <nutritionGavageType> on the web with value <bottleGraphValue>
        Examples:
            | url      | userA                     | graphValue | dashboard-ManagePatientsOption | patientName       | nutritionLeftBreastType | nutritionRightBreastType | nutritionBottleType | nutritionGavageType | bottleGraphValue |
            | loginUrl | providerLoginCrendentails | 10         | Manage Patients                | Patient_Auto_Test | Left Breast Feeding     | Right Breast Feeding     | Bottle Feeding      | Gavage Feeding      | 50               |


    Scenario Outline: Verify the mobile "Sleep" details are visible on the web
        When Hover over link Tracker
        When I click on the link text Sleep
        Then Verify the graph of "Sleep" module on web with value <graphValue>
        Examples:
            | graphValue |
            | 150        |


    Scenario Outline: Verify the mobile "Diapering" details are visible on the web
        When Hover over link Tracker
        When I click on the link text Diapering
        Then Verify the <diaperingBothOption> graph on web with value <graphBothValue>
        When I select option <diaperingPeeOption> from diapering dropdown
        Then Verify the <diaperingPeeOption> graph on web with value <graphPeeValue>
        When I select option <diaperingPooOption> from diapering dropdown
        Then Verify the <diaperingPooOption> graph on web with value <graphPooValue>
        Examples:
            | graphBothValue | diaperingPeeOption | diaperingPooOption | graphPeeValue | graphPooValue | diaperingBothOption |
            | 35             | Pee                | Poo                | 25            | 30            | Both                |


    Scenario Outline: Verify the mobile "Growth" details are visible on the web
        When I click on the link text Medical Record
        When Hover over link Tracker
        When I click on the link text Growth
        Then It redirects on the Patient_Auto_Test Ben's Growth Chart screen
        When I click on the button with text Growth Results
        When I populate data <heightInches> in the "Search" field
        Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightOunce> and <weightkg> and <headCircumference_cm> and <headCircumference_inches>
        Examples:
            | heightInches | weightPounds | headCircumference_inches | heightcm | weightkg | headCircumference_cm | weightOunce |
            | 20           | 8            | 15                       | 50.80    | 3.91     | 38.10                | 10          |