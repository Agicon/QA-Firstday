Feature: Test cases for verification of medical records

    Scenario Outline: Verify that login is not allowed with "empty email" field and "empty password" field and "invalid email and password" and "valid email and invalid password" but user is able to login on "Caregiver" app with valid credentials and Verify the user is not logged out from the "Caregiver" account if selects 'No" option on the "Logout confirmation" popup and Verify the user is able to logout from "Caregiver" account

        When login to app using <validLoginEmail>
        Then Select child <firstChild> from the child list
        Then For iOS, verify the homepage
        When User clicks on medical report module
        Then Verify all the features inside medical report
        Then User click on the medication tab
        Then Details of medication should be visible in the list with <medicationName> and <currentDose_And_measurement> and <frequency> and <interval>
        When User click on the button with text All
        Then Details of medication should be visible in the list with <medicationName> and <currentDose_And_measurement> and <frequency> and <interval>

        Examples:
            | validLoginEmail | invalidPassword | invalidEmail       | firstChild        | medicationName         | currentDose_And_measurement | frequency   | additionalInformation                         | interval | status |
            | FHDCMobileLogin | 123450000       | testuser@gmail.com | Patient_Auto_Test | Update_Auto_Medication | 3 (Milliliter)              | Three Times | Consult the doctor before using this medicine | Week     | Active |

    Scenario Outline: Verify "Diagnosis" data under medical records
        Then I click on the back button
        When I click on Diagnosis option
        Then Added record data <diagnosisType> text is displaying on mobile screen
        Then Added record data <description> text is displaying on mobile screen
        When User click on the button with text All
        Then Added record data <diagnosisType> text is displaying on mobile screen
        Then Added record data <description> text is displaying on mobile screen
        Examples:
            | diagnosisType | description                                            | status |
            | Twisted hair  | Get a medical consultation before taking this vaccine. | Active |

    Scenario Outline: Verify "Vaccination" data under medical records
        Then I click on the back button
        When I click on Vaccination option
        Then Added record data <diagnosisType> text is displaying on mobile screen
        Then Added record data <description> text is displaying on mobile screen

        Examples:
            | diagnosisType     | description                                   |
            | Auto_Test_Vaccine | Consult the doctor before using this vaccine. |


    Scenario Outline: Verify "Media" data under medical records
        Then I click on the back button
        When For ios, user click on the "Media" module
        Then Added record data <image> text is displaying on mobile screen
        Then Added record data <description> text is displaying on mobile screen

        Examples:
            | image          | description           |
            | Picture(2).jpg | Auto Test description |

    Scenario Outline: Verify "Hospital Records" data under medical records
        Then I click on the back button
        When I click on Documents option
        When I click on Hospital Records option
        Then Added record data <UpdatedHospital> text is displaying on mobile screen
        Then Added record data <updatedDescription> text is displaying on mobile screen
        Then Added record data <hospitalNote> text is displaying on mobile screen
        Then I click on the back button
        Examples:
            | UpdatedHospital | updatedDescription            | hospitalNote       |
            | Default         | Updated Auto Test description | Auto_Hospital_Note |

    Scenario Outline: Verify "Imaging-SubModules" data under medical records
        Then I click on the back button
        When For ios, user click on the Results module
        When I click on Imaging option
        Then Added record data <XRay_Type> text is displaying on mobile screen
        Then Added record data <result> text is displaying on mobile screen
        When I click on CT option
        Then Added record data <CT_Type> text is displaying on mobile screen
        Then Added record data <result> text is displaying on mobile screen
        When I click on MRI option
        Then Added record data <MRI_Type> text is displaying on mobile screen
        Then Added record data <result> text is displaying on mobile screen
        When I click on Other option
        Then Added record data <other_Type> text is displaying on mobile screen
        Then Added record data <result> text is displaying on mobile screen
        When I click on UltraSound option
        Then Added record data <ultrasound_Type> text is displaying on mobile screen
        Then Added record data <result> text is displaying on mobile screen
        Then I click on the back button

        Examples:
            | XRay_Type     | CT_Type    | MRI_Type    | ultrasound_Type    | other_Type   | result                                                  |
            | Digital X-ray | Digital CT | Digital MRI | Digital Ultrasound | Other result | No evidence of disease or injury, Everything is normal. |

