package steps_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.BasePage;
import pages.LoginPage;
import pages.SearchPage;
import utilities.BriteERPUtil;
import utilities.Driver;

public class Search_StepDefs {

    SearchPage searchPage = new SearchPage();


    //Entering multiple parameters in the search box
    @Given("BrightERP Contacts Module Page")
    public void brighterp_Contacts_Module_Page() {
        searchPage.contactsButton.click();
    }

    @When("the user clicks on the search box")
    public void the_user_clicks_on_the_search_box() {
        searchPage.searchInputBox.click();
    }

    @When("the user enters a {string} and presses enter")
    public void the_user_enters_a_and_presses_enter(String string) {
        searchPage.searchInputBox.sendKeys(string + Keys.ENTER);


    }

    @When("the user enters another {string} and presses enter")
    public void the_user_enters_another_and_presses_enter(String string) {
        searchPage.searchInputBox.sendKeys(string + Keys.ENTER);

    }

    @Then("the user should see OR displayed between the entered parameters")
    public void the_user_should_see_OR_displayed_between_the_entered_parameters() {
        Assert.assertTrue(searchPage.orDisplay.isDisplayed());
    }

    //Style of the contacts display
    @When("the user clicks on the List button under the search box")
    public void the_user_clicks_on_the_List_button_under_the_search_box() {
        searchPage.listButton.click();
        BriteERPUtil.pause(3);
    }

    @When("the user should be able to see contacts displayed in the List style")
    public void the_user_should_be_able_to_see_contacts_displayed_in_the_List_style() {
        Assert.assertTrue(searchPage.listTable.isDisplayed());
    }

    @When("the user clicks on the Kanban button under the search box")
    public void the_user_clicks_on_the_Kanban_button_under_the_search_box() {
        searchPage.kanbanButton.click();
        BriteERPUtil.pause(3);
    }

    @Then("the user should be able to see contacts displayed in the Kanban style again")
    public void the_user_should_be_able_to_see_contacts_displayed_in_the_Kanban_style_again() {
        searchPage.kanbanTable.isDisplayed();
    }

    //Number of Contacts displayed
    @When("the user clicks on the page box")
    public void the_clicks_on_the_page_box() {
        searchPage.num1_80Button.click();
        searchPage.searchInputBox.click();

    }

    @Then("the user should be able to see number of contacts contacts displayed in the box")
    public void the_user_should_be_able_to_see_number_of_contacts_contacts_displayed_in_the_box() {
        String actual = searchPage.num1_80Button.getText();
        String expected = "1-80";
        Assert.assertTrue(actual.equals(expected));
    }

    //Kani



    @When("User clicks on the Contacts module")
    public void user_clicks_on_the_Contacts_module() {
        new BasePage().contactsButton.click();

    }

    @When("User clicks on the search button")
    public void user_clicks_on_the_search_button() {
     BriteERPUtil.pause(3);
        Assert.assertTrue("Search button is NOT displayed!", searchPage.searchButtonn.isDisplayed());
       BriteERPUtil.pause(3);
        searchPage.searchButtonn.click();

    }

    @Then("User verifies three dropdown menu display")
    public void user_verifies_three_dropdown_menu_display() {

      BriteERPUtil.pause(5);

        Assert.assertTrue("Filter is not displayed", searchPage.filters.isDisplayed());
        Assert.assertTrue("GroupBy is not displayed!", searchPage.groupBy.isDisplayed());
        Assert.assertTrue("Favotires is not displayed!", searchPage.favorites.isDisplayed());
    }

    @When("User verifies search button is displayed")
    public void user_verifies_search_button_is_displayed() {
        Assert.assertTrue("The search button is not dispalyed", searchPage.searchButton.isDisplayed());

    }

    @Then("User types one special character into search input box")
    public void user_types_one_special_character_into_search_input_box() {
       BriteERPUtil.pause(3);
        searchPage.searchInputBox.sendKeys("&" + Keys.ENTER);

    }

    @When("User clicks search input box")
    public void user_clicks_search_input_box() {
        //    User clicks on the Contacts module
        //   User verifies search button is displayed
        //  User clicks search input box
        BriteERPUtil.pause(3);
        new BasePage().contactsButton.click();
        Assert.assertTrue("The search button is NOT displayed", searchPage.searchButton.isDisplayed());
        searchPage.searchInputBox.click();


    }

    @When("User types a {string}")
    public void user_types_a(String name) {
        BriteERPUtil.pause(3);
        name = "Mike";
        searchPage.searchInputBox.sendKeys(name + Keys.ENTER);

    }

    @When("User clicks on the search name for  enteredName")
    public void user_clicks_on_the_search_name_for_enteredName() {
        searchPage.searchInputBox.click();

    }

    @Then("User verifies enteredName is displayed on the screen")
    public void user_verifies_enteredName_is_displayed_on_the_screen() {
        BriteERPUtil.pause(3);
        searchPage.enteredName.click();
        System.out.println(searchPage.enteredName.getText());
        String expected = "Mike";
        String actual = searchPage.enteredName.getText();
        // Assert.assertTrue("Entered name is not dispalyed",searchPage.enteredName.isDisplayed());
        Assert.assertTrue("Actual name does not contain expected name", actual.contains(expected));


    }
}