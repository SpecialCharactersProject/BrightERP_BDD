package steps_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.Keys;
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
        searchPage.searchInputBox.sendKeys(string+ Keys.ENTER);

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

}
