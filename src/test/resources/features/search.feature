
@search
Feature: US#SC-208 Using a search box to find contacts of users and the users' companies.

#Sercan
  @skytester
  Scenario: Partial text search validation
    Given BrightERP Contacts Module Page
    When user enters "partial text" for a new search
    Then user should see all the contacts which have the entered characters in the list

  @skytester
  Scenario: Favorite Button Validation
    Given BrightERP Contacts Module Page
    When user clicks on Favorites
    And user clicks on Add to my dashboard
    Then user should be able to add the search to the dashboard for future use under Dashboard module
  @skytester
  Scenario: Filter Button Validation
    Given BrightERP Contacts Module Page
    When user clicks on filter button
    And user clicks on one of the options
    Then user should see only the filtered contacts


    #Kani

  @Dropdown
  Scenario: Verifying dropdown menu

    When User clicks on the Contacts module
    And User clicks on the search button
    Then User verifies three dropdown menu display

  @BYoneSpecialcharacter
  Scenario:Validation of the seach button with entering a character

    When User clicks on the Contacts module
    And User verifies search button is displayed
    Then User types one special character into search input box

  @BYname
  Scenario: Validation of finding a contact by name

    When User clicks on the Contacts module
    And User verifies search button is displayed
    And User clicks search input box
    And User types a "name"
    And User clicks on the search name for  enteredName
    Then User verifies enteredName is displayed on the screen

#Karina

  @MultipleParameters
  Scenario: Entering multiple parameters in the search box
    Given BrightERP Contacts Module Page
    When the user clicks on the search box
    And the user enters a "name" and presses enter
    And the user enters another "position" and presses enter
    Then the user should see OR displayed between the entered parameters
  @DisplayStyle
  Scenario: Style of the contacts display
    Given BrightERP Contacts Module Page
    When the user clicks on the List button under the search box
    And the user should be able to see contacts displayed in the List style
    When the user clicks on the Kanban button under the search box
    Then the user should be able to see contacts displayed in the Kanban style again
  @NumberOfContacts
  Scenario: Number of Contacts displayed
    Given BrightERP Contacts Module Page
    When the user clicks on the page box
    Then the user should be able to see number of contacts contacts displayed in the box