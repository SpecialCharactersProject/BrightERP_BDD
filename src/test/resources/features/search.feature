@SearchTest
Feature: US#SC-208 Using a search box to find contacts of users and the users' companies.


  @MultipleParameters
  Scenario: Entering multiple parameters in the search box
    Given BrightERP Contacts Module Page
    When the user clicks on the search box
    And the user enters a "Alan" and presses enter
    And the user enters another "General Manager" and presses enter
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

