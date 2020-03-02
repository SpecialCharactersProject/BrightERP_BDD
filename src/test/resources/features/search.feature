
@search
Feature: US#SC-208 Using a search box to find contacts of users and the users' companies.


  Scenario: Favorite Button Validation
    Given the user is on the application page
    When the user puts username and password
    Then user should be able to log in to the application page.
    When user clicks on contacts
    Then user should see contact module script in white
    When user clicks on Favorites
    Then user should see two submodules underneath Save Current Search and Add to my Dashboard
    When user clicks on save current search
    Then user should be able to save the search.
    And  user should also have the options to save either Use by default or Share with other users
    When user clicks on Add to my dasbhoard
    Then user should be able to add the search to the dashboard for future use under Dashboard module


   Scenario: Filter Button Validation
     Given the user is on the application page
     When the user puts username and password
     Then user should be able to log in to the application page.
     When user clicks on contacts
     Then user should see contact module script in white
     When user clicks on Favorites
     When user clicks on plust button in search box
     Then user should see three modules underneath searchbox
     When user clicks on filter
     Then dropdown menu opens
     And user should see preset filters
     When use click on one of the options
     Then user should see only the filtered contacts
     When user clicks on more than one preset option to filter
     Then user should see contacts filltered by all options

  Scenario: Favorite Button Validation
    Given the user is on the application page
    When the user puts username and password
    Then user should be able to log in to the application page.
    When user clicks on contacts
    Then user should see contact module script in white
    When user enters partial text for a new search
    Then user should see all the contacts which have the entered characters in the list
    When user enters another partial text
    Then user should see all the contacts that contain either of the entered characters


    # Kani

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