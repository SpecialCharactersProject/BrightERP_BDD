
Feature: Delete a Student
  @schoolBDD
  Scenario: Verifying delete student function
    Given the user is on the Student's Module
    When the user clicks on Students dropdown menu
    And the user chooses All Students option
    And the user hovers over any of already created studends
    And the user clicks on 3 dots sign in top right corner of student's name
    And the user clicks on delete option
    And the user clicks on red Delete button
    And the user sees that student removed from the All Students page (UI).
    Then the user should be able to see that student removed from the database.