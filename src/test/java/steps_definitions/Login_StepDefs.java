package steps_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;

public class Login_StepDefs {

    @Given("Landing page of BriteERP")
    public void landing_page_of_BriteERP() {
            LoginPage loginPage = new LoginPage();
        loginPage.login();


    }


}
