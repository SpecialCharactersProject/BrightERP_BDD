$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/aaLogin.feature");
formatter.feature({
  "name": "Log In and Log Out",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of login functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
    },
    {
      "name": "@import"
    },
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "Landing page of BriteERP",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.landing_page_of_BriteERP()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/import.feature");
formatter.feature({
  "name": "Import a File on Contacts Module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@import"
    }
  ]
});
formatter.scenario({
  "name": "Verifying the import button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@import"
    }
  ]
});
formatter.step({
  "name": "user is on the contacts module",
  "keyword": "Given "
});
formatter.match({
  "location": "Import_StepDefs.user_is_on_the_contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the import button displays",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_verify_the_import_button_displays()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the import button",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_clicks_on_the_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the current page title with the expected title",
  "keyword": "Then "
});
formatter.match({
  "location": "Import_StepDefs.user_verify_the_current_page_title_with_the_expected_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": ": Validation of load file button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@import"
    }
  ]
});
formatter.step({
  "name": "user is on the contacts module",
  "keyword": "Given "
});
formatter.match({
  "location": "Import_StepDefs.user_is_on_the_contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the import button",
  "keyword": "When "
});
formatter.match({
  "location": "Import_StepDefs.user_clicks_on_the_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the Load File button displays",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_verify_the_Load_File_button_displays()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the No file chosen… text on the load file input box",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_verify_the_No_file_chosen_text_on_the_load_file_input_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should pass the path of the file on",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_should_pass_the_path_of_the_file_on()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps_definitions.Import_StepDefs.user_should_pass_the_path_of_the_file_on(Import_StepDefs.java:67)\n\tat ✽.user should pass the path of the file on(src/test/resources/features/import.feature:15)\n",
  "status": "pending"
});
formatter.step({
  "name": "user should be able to import file",
  "keyword": "Then "
});
formatter.match({
  "location": "Import_StepDefs.user_should_be_able_to_import_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of the cancel button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@import"
    }
  ]
});
formatter.step({
  "name": "user is on the contacts module",
  "keyword": "Given "
});
formatter.match({
  "location": "Import_StepDefs.user_is_on_the_contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the import button",
  "keyword": "When "
});
formatter.match({
  "location": "Import_StepDefs.user_clicks_on_the_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  click cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_click_cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate back to import button",
  "keyword": "Then "
});
formatter.match({
  "location": "Import_StepDefs.user_should_navigate_back_to_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of the help button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@import"
    }
  ]
});
formatter.step({
  "name": "User is on the contact module",
  "keyword": "Given "
});
formatter.match({
  "location": "Import_StepDefs.user_is_on_the_contact_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click import button",
  "keyword": "When "
});
formatter.match({
  "location": "Import_StepDefs.user_click_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees help window display",
  "keyword": "And "
});
formatter.match({
  "location": "Import_StepDefs.user_sees_help_window_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to navigate back to import button",
  "keyword": "Then "
});
formatter.match({
  "location": "Import_StepDefs.user_able_to_navigate_back_to_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});