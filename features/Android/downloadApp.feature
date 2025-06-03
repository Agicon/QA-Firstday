Feature: Download and install latest build of mobile app

  Scenario Outline: User install or open the latest FHDC build
    Given Open web url <url>
    Then Download app from link

    Examples:
      | url              |
      | downloadFHDCLink |

  Scenario Outline: User install or open the latest FHDA build
    Given Open web url <url>
    Then Download app from link

    Examples:
      | url              |
      | downloadFHDALink |
