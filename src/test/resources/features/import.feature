@ImportFile
Feature: Import a File on Contacts Module

  Background:
    Given user is logged into the APP

  Scenario: Verifying the import button

    When user clicks on the contacts module
    And user verify the import button displays
    And user clicks on the import button
    Then user verify the current page title with the expected title


  Scenario: : Validation of load file button

    When user clicks on the contacts module
    And user clicks on the import button
    And user verify the Load File button displays
    And user verify the No file chosen… text on the load file input box
    And user should pass the path of the file on
    Then user should be able to import file