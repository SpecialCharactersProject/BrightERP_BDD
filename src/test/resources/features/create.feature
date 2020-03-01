@create
Feature: US#SC-214 Contact creation, editing, discarding workflow for individuals and company

  Scenario: Contact Creation workflow for individual
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses individual option
    And  User fills out individual page fields
    And  User clicks on save button
    Then User sees "new contact " individual displayed

  Scenario: Contact Creation workflow for company
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And User chooses company option
    And User fills out company  page fields
    And  User clicks on save button
    Then User sees "new contact " company displayed


  Scenario: Try to see if the discard button works
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And  User chooses individual option
    And  User fills out individual page fields
    And  User clicks on discard button
    Then User should be able to discard the information

  Scenario: Try to see if the edit button works
    Given BriteERP Contacts Module Page
    When User clicks on create button
    And User chooses company option
    And User fills out company  page fields
    And  User clicks on save button
    And user clicks edit button
    And user edit what he wants
    And User clicks on the save button
    Then User should be able edit the page

#
#  -When user logs in Contacts Module should appear  as a forth module  in the column.
#
#  -When user clicks on the Contacts Module, it should display the page with all existing contacts  and  with "CREATE" and " IMPORT" buttons.
#
#  -When user  clicks on "CREATE" button, it should display small window where user  enters all the information and click to "SAVE" or "DISCARD" button to complete the task.
#
#  -When user saves  the  contact , user  sees the added "New Contact"  with all the information  right away without refreshing the page. If user wants to edit the existing contact or create a new contact user can choose necessary  button and proceed to action.
#
#  -When user discards the "New Contact", user can click the "Discard"next to the "Save" button and discard it.
#   