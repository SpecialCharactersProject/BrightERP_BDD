@ImportFile
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
    And user should pass the path of the file on
    Then user should be able to import file