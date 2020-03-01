Feature: Search Box Favorite, Filter and Partial Text

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

