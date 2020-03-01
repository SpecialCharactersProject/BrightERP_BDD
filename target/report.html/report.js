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
formatter.uri("src/test/resources/features/create.feature");
formatter.feature({
  "name": "US#SC-214 Contact creation, editing, discarding workflow for individuals and company",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.scenario({
  "name": "Contact Creation workflow for individual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.step({
  "name": "BriteERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Create_StepDefs.briteerp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create button",
  "keyword": "When "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses individual option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_individual_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out individual page fields",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_individual_page_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees \"new contact \" individual displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_sees_individual_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact Creation workflow for company",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.step({
  "name": "BriteERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Create_StepDefs.briteerp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create button",
  "keyword": "When "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses company option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_company_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out company  page fields",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_company_page_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees \"new contact \" company displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_sees_company_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to see if the discard button works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.step({
  "name": "BriteERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Create_StepDefs.briteerp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create button",
  "keyword": "When "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses individual option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_individual_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out individual page fields",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_individual_page_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on discard button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_discard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to discard the information",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_be_able_to_discard_the_information()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to see if the edit button works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.step({
  "name": "BriteERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Create_StepDefs.briteerp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create button",
  "keyword": "When "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses company option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_company_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills out company  page fields",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_company_page_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks edit button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit what he wants",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_edit_what_he_wants()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able edit the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_be_able_edit_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});