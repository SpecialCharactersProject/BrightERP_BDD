$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/1.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "Contact Creation workflow for individual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-296"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "User sees \"new contact\" individual displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_sees_individual_displayed(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat steps_definitions.Create_StepDefs.user_sees_individual_displayed(Create_StepDefs.java:78)\n\tat ✽.User sees \"new contact\" individual displayed(src/test/resources/features/1.feature:12)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact Creation workflow for company",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-297"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "User sees \"new contact\"  company displayed",
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
  "name": "Contact Creation negative scenario for individual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-300"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "User fills out individual page fields neg scenario",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_individual_page_fields_neg_scenario()"
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
formatter.scenario({
  "name": "Contact Creation negative scenario for company",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-301"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
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
formatter.scenario({
  "name": "Try to see if the edit button works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-298"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BriteERP Contacts Module Page with error",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on create button",
  "keyword": "When "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User chooses company option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_company_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills out company  page fields",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_company_page_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks edit button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user edit what he wants",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_edit_what_he_wants()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_clicks_on_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able edit the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_be_able_edit_the_page()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-299"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "Verifying the import button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-280"
    },
    {
      "name": "@SC-285"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "name": "Validation of load file button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-281"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
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
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat steps_definitions.Import_StepDefs.user_should_pass_the_path_of_the_file_on(Import_StepDefs.java:68)\n\tat ✽.user should pass the path of the file on(src/test/resources/features/1.feature:84)\n",
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
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-282"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
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
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-283"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
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
formatter.scenario({
  "name": "Verifying dropdown menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-287"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Contacts module",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_the_Contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies three dropdown menu display",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_verifies_three_dropdown_menu_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of the seach button with entering a character",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-288"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Contacts module",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_the_Contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies search button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_verifies_search_button_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types one special character into search input box",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_types_one_special_character_into_search_input_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation of finding a contact by name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-289"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Contacts module",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_the_Contacts_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies search button is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_verifies_search_button_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks search input box",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_search_input_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User types a \"name\"",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_types_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the search name for  enteredName",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_the_search_name_for_enteredName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies enteredName is displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_verifies_enteredName_is_displayed_on_the_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Style of the contacts display",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-291"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the List button under the search box",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.the_user_clicks_on_the_List_button_under_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see contacts displayed in the List style",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_be_able_to_see_contacts_displayed_in_the_List_style()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Kanban button under the search box",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.the_user_clicks_on_the_Kanban_button_under_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see contacts displayed in the Kanban style again",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_be_able_to_see_contacts_displayed_in_the_Kanban_style_again()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Number of Contacts displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-292"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the page box",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.the_clicks_on_the_page_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see number of contacts contacts displayed in the box",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_be_able_to_see_number_of_contacts_contacts_displayed_in_the_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Favorite Button Validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-293"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Favorites",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_Favorites()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".fa-search-plus\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:e1c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:57281}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 52222f728ee2545a54b2388bca6d582c\n*** Element info: {Using\u003dcss selector, value\u003d.fa-search-plus}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps_definitions.Search_StepDefs.user_clicks_on_Favorites(Search_StepDefs.java:50)\n\tat ✽.user clicks on Favorites(src/test/resources/features/1.feature:151)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Add to my dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_Add_to_my_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to add the search to the dashboard for future use under Dashboard module",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_should_be_able_to_add_the_search_to_the_dashboard_for_future_use_under_Dashboard_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Button Validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-294"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.userClicksOnFilterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on one of the options",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.user_clicks_on_one_of_the_options()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Persons\u0027)]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:e1c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:57281}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 52222f728ee2545a54b2388bca6d582c\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Persons\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps_definitions.Search_StepDefs.user_clicks_on_one_of_the_options(Search_StepDefs.java:74)\n\tat ✽.user clicks on one of the options(src/test/resources/features/1.feature:161)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see only the filtered contacts",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_should_see_only_the_filtered_contacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Partial text search validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-295"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"partial text\" for a new search",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.user_enters_for_a_new_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see all the contacts which have the entered characters in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.user_should_see_all_the_contacts_which_have_the_entered_characters_in_the_list()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Entering multiple parameters in the search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC_SmokeTest"
    },
    {
      "name": "@SC-290"
    },
    {
      "name": "@SC-285"
    },
    {
      "name": "@SC-286"
    },
    {
      "name": "@Automation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "BrightERP Contacts Module Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search_StepDefs.brighterp_Contacts_Module_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the search box",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.the_user_clicks_on_the_search_box()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:e1c0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:57281}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 52222f728ee2545a54b2388bca6d582c\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps_definitions.Search_StepDefs.the_user_clicks_on_the_search_box(Search_StepDefs.java:84)\n\tat ✽.the user clicks on the search box(src/test/resources/features/1.feature:177)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters a \"Alan\" and presses enter",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.the_user_enters_a_and_presses_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters another \"General Manager\" and presses enter",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.the_user_enters_another_and_presses_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see OR displayed between the entered parameters",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_see_OR_displayed_between_the_entered_parameters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});