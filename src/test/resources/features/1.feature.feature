@SC-284 @SC_SmokeTest
Feature:


  @SC-296 @SC-285 @SC-286 @Automation
  Scenario: Contact Creation workflow for individual
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses individual option
    And  User fills out individual page fields
    And  User clicks on save button
    Then User sees "new contact" individual displayed


  @SC-297 @SC-285 @SC-286
  Scenario: Contact Creation workflow for company
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And User chooses company option
    And User fills out company  page fields
    And  User clicks on save button
    Then User sees "new contact"  company displayed


  @SC-300 @SC-285 @SC-286
  Scenario: Contact Creation negative scenario for individual
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses individual option
    And  User fills out individual page fields neg scenario
    And  User clicks on save button
    Then User should see error message pops up.


  @SC-301 @SC-285 @SC-286 @Automation
  Scenario: Contact Creation negative scenario for company
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses company option
    And  User fills out company  page fields neg scenario
    And  User clicks on save button
    Then User should see error message pops up.


  @SC-298 @SC-285 @SC-286
  Scenario: Try to see if the edit button works
    Given BriteERP Contacts Module Page with error
    When User clicks on create button
    And User chooses company option
    And User fills out company  page fields
    And  User clicks on save button
    And user clicks edit button
    And user edit what he wants
    And User clicks on the save button
    Then User should be able edit the page


  @SC-299 @SC-285 @SC-286
  Scenario: Try to see if the discard button works
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses individual option
    And  User fills out individual page fields
    And  User clicks on discard button
    Then User should be able to discard the information


  @SC-280 @SC-285
  Scenario: Verifying the import button
    Given user is on the contacts module
    And user verify the import button displays
    And user clicks on the import button
    Then user verify the current page title with the expected title


  @SC-281 @SC-285 @SC-286 @Automation
  Scenario: Validation of load file button
    Given user is on the contacts module
    When user clicks on the import button
    And user verify the Load File button displays
    And user verify the No file chosen… text on the load file input box
    And user should pass the path of the file on
    Then user should be able to import file


  @SC-282 @SC-285 @SC-286 @Automation
  Scenario: Validation of the cancel button
    Given user is on the contacts module
    When  user clicks on the import button
    And   user  click cancel button
    Then  User should navigate back to import button


  @SC-283 @SC-285 @SC-286 @Automation
  Scenario: Validation of the help button
    Given User is on the contact module
    When User click import button
    And User sees help window display
    Then User able to navigate back to import button


  @SC-287 @SC-285 @SC-286 @Automation
  Scenario: Verifying dropdown menu
    When User clicks on the Contacts module
    And User clicks on the search button
    Then User verifies three dropdown menu display


  @SC-288 @SC-285 @SC-286 @Automation
  Scenario: Validation of the seach button with entering a character
    When User clicks on the Contacts module
    And User verifies search button is displayed
    Then User types one special character into search input box


  @SC-289 @SC-285 @SC-286 @Automation
  Scenario:  Validation of finding a contact by name
    When User clicks on the Contacts module
    And User verifies search button is displayed
    And User clicks search input box
    And User types a "name"
    And User clicks on the search name for  enteredName
    Then User verifies enteredName is displayed on the screen


  @SC-291 @SC-285 @SC-286 @Automation
  Scenario: Style of the contacts display
    Given BrightERP Contacts Module Page
    When the user clicks on the List button under the search box
    And the user should be able to see contacts displayed in the List style
    When the user clicks on the Kanban button under the search box
    Then the user should be able to see contacts displayed in the Kanban style again


  @SC-292 @SC-285 @SC-286 @Automation
  Scenario:  Number of Contacts displayed
    Given BrightERP Contacts Module Page
    When the user clicks on the page box
    Then the user should be able to see number of contacts contacts displayed in the box


  @SC-293 @SC-285 @SC-286 @Automation
  Scenario: Favorite Button Validation
    Given BrightERP Contacts Module Page
    When user clicks on Favorites
    And user clicks on Add to my dashboard
    Then user should be able to add the search to the dashboard for future use under Dashboard module


  @SC-294 @SC-285 @SC-286 @Automation
  Scenario:  Filter Button Validation
    Given BrightERP Contacts Module Page
    When user clicks on filter button
    And user clicks on one of the options
    Then user should see only the filtered contacts


  @SC-295 @SC-285 @SC-286 @Automation
  Scenario: Partial text search validation
    Given BrightERP Contacts Module Page
    When user enters "partial text" for a new search
    Then user should see all the contacts which have the entered characters in the list


  @SC-290 @SC-285 @SC-286 @Automation
  Scenario: Entering multiple parameters in the search box
    Given BrightERP Contacts Module Page
    When the user clicks on the search box
    And the user enters a "Alan" and presses enter
    And the user enters another "General Manager" and presses enter
    Then the user should see OR displayed between the entered parameters