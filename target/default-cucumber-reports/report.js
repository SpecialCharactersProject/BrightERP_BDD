$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/create.feature");
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
  "name": "Try to see if the edit button works",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
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
  "name": "Contact Creation negative scenario for individual",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027milos-MacBook-Pro.local\u0027, ip: \u00272601:241:480:dd20:0:0:0:74ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/ss/ycwnbjls38v...}, goog:chromeOptions: {debuggerAddress: localhost:51002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 45ad4c564bab2074f2c967cb82a68363\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps_definitions.Create_StepDefs.briteerp_Contacts_Module_Page(Create_StepDefs.java:21)\n\tat ✽.BriteERP Contacts Module Page(src/test/resources/features/create.feature:43)\n",
  "status": "failed"
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
  "name": "User chooses individual option",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_chooses_individual_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills out individual page fields neg scenario",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_individual_page_fields_neg_scenario()"
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
  "name": "User should see error message pops up.",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_see_error_message_pops_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact Creation negative scenario for company",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@create"
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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027milos-MacBook-Pro.local\u0027, ip: \u00272601:241:480:dd20:0:0:0:74ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/ss/ycwnbjls38v...}, goog:chromeOptions: {debuggerAddress: localhost:51002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 45ad4c564bab2074f2c967cb82a68363\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat jdk.internal.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat steps_definitions.Create_StepDefs.briteerp_Contacts_Module_Page(Create_StepDefs.java:21)\n\tat ✽.BriteERP Contacts Module Page(src/test/resources/features/create.feature:51)\n",
  "status": "failed"
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
  "name": "User fills out company  page fields neg scenario",
  "keyword": "And "
});
formatter.match({
  "location": "Create_StepDefs.user_fills_out_company_page_fields_neg_scenario()"
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
  "name": "User should see error message pops up.",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_StepDefs.user_should_see_error_message_pops_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});