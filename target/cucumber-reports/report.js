$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/create.feature");
formatter.feature({
  "name": "US#SC-214 Contact creation, editing, discarding workflow for individuals and company",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Contact Creation negative scenario for company",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@milos2"
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
  "name": "User fills out company  page fields neg scenario",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_company_page_fields_neg_scenario()"
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
  "name": "User should see error message pops up.",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_see_error_message_pops_up()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});