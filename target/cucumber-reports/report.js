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
formatter.uri("src/test/resources/features/search.feature");
formatter.feature({
  "name": "US#SC-208 Using a search box to find contacts of users and the users\u0027 companies.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.scenario({
  "name": "Entering multiple parameters in the search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@MultipleParameters"
    }
  ]
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
  "status": "passed"
});
formatter.step({
  "name": "the user enters a \"Alan\" and presses enter",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.the_user_enters_a_and_presses_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters another \"General Manager\" and presses enter",
  "keyword": "And "
});
formatter.match({
  "location": "Search_StepDefs.the_user_enters_another_and_presses_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see OR displayed between the entered parameters",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_see_OR_displayed_between_the_entered_parameters()"
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
      "name": "@search"
    },
    {
      "name": "@DisplayStyle"
    }
  ]
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@class\u003d\u0027o_list_view table table-condensed table-striped o_list_view_ungrouped\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Karina-Ulanova.local\u0027, ip: \u0027fe80:0:0:0:18d6:dc02:2c0:e57d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/gv/3vnzdnjs5nb...}, goog:chromeOptions: {debuggerAddress: localhost:62331}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2743d2ca16927211775e49cceeb45740\n*** Element info: {Using\u003dxpath, value\u003d//table[@class\u003d\u0027o_list_view table table-condensed table-striped o_list_view_ungrouped\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat steps_definitions.Search_StepDefs.the_user_should_be_able_to_see_contacts_displayed_in_the_List_style(Search_StepDefs.java:55)\n\tat ✽.the user should be able to see contacts displayed in the List style(src/test/resources/features/search.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on the Kanban button under the search box",
  "keyword": "When "
});
formatter.match({
  "location": "Search_StepDefs.the_user_clicks_on_the_Kanban_button_under_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to see contacts displayed in the Kanban style again",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_StepDefs.the_user_should_be_able_to_see_contacts_displayed_in_the_Kanban_style_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Number of Contacts displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@NumberOfContacts"
    }
  ]
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
});