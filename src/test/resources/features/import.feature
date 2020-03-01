@import

Feature: Import a File on Contacts Module
  Scenario: Verifying the import button
    Given user is on the contacts module
    And user verify the import button displays
    And user clicks on the import button
    Then user verify the current page title with the expected title

  Scenario: : Validation of load file button
    Given user is on the contacts module
    When user clicks on the import button
    And user verify the Load File button displays
    And user verify the No file chosen… text on the load file input box
    Then user should pass the path of the file on



  Scenario: Validation of the cancel button

    Given user is on the contacts module
    When  user clicks on the import button
    And   user  click cancel button
    Then  User should navigate back to import button

  Scenario: Validation of the help button

    Given User is on the contact module
    When User click import button
    And User sees help window display
    Then User able to navigate back to import button





