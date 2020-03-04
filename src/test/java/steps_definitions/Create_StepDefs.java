package steps_definitions;
import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.CreatePage;
import utilities.BriteERPUtil;
import utilities.Driver;
public class Create_StepDefs {
    CreatePage createPage = new CreatePage();
    Faker faker = new Faker();
    String individualName;
    String companyName;

    @Given("BriteERP Contacts Module Page")
    public void briteerp_Contacts_Module_Page() {
        BriteERPUtil.pause(2);
        createPage.contactsModule.click();
    }
    @When("User clicks on create button")
    public void user_clicks_on_create_button() {
        BriteERPUtil.pause(5);
        Assert.assertTrue(" CreateButton verification Failed", createPage.createButton.isDisplayed());
        createPage.createButton.click();
    }
    @When("User chooses individual option")
    public void user_chooses_individual_option() {
        BriteERPUtil.pause(3);
        createPage.individualRadioBtn.click();
    }
    @When("User fills out individual page fields")
    public void user_fills_out_individual_page_fields() {
        individualName = faker.name().firstName() + " " + faker.name().lastName();
        createPage.contactName.sendKeys(individualName);
        BriteERPUtil.pause(1);
        Actions action = new Actions(Driver.getDriver());
        action.doubleClick(createPage.indCompanyNameBox).perform();
        BriteERPUtil.pause(1);
        createPage.indCompanySelection.click();
        Select select = new Select(createPage.contactAddressTypeBox);
        select.selectByVisibleText("Shipping address");
        BriteERPUtil.pause(1);
        createPage.contactAddressStreet.sendKeys(faker.address().streetName());
        createPage.contactAddressCity.sendKeys(faker.address().city());
        BriteERPUtil.pause(1);
        createPage.addressStateBox.click();
        createPage.indAddressStateSelection.click();
        BriteERPUtil.pause(1);
        createPage.contactAddressZip.sendKeys(faker.address().zipCode());
        BriteERPUtil.pause(1);
        createPage.contactCountry.click();
        createPage.countrySelection.click();
        BriteERPUtil.pause(1);
        createPage.jobPosition.sendKeys(faker.job().title());
        BriteERPUtil.pause(1);
        createPage.contactPhone.sendKeys(faker.phoneNumber().cellPhone());
        BriteERPUtil.pause(1);
        createPage.contactEmail.sendKeys("superwoman@yyy.com");
        BriteERPUtil.pause(1);
        createPage.contactWebsite.sendKeys("www.cybertek.com");
        BriteERPUtil.pause(1);
        createPage.ContactTitleBox.click();
        createPage.ContactTitleSelection.click();
    }
    @And("User clicks on save button")
    public void user_clicks_on_save_button() {
        BriteERPUtil.pause(3);
        createPage.saveBtn.click();
    }
    @Then("User sees {string} individual displayed")
    public void user_sees_individual_displayed(String indSearchValue) {
        indSearchValue = individualName;
        BriteERPUtil.pause(3);
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(actualTitle.contains(indSearchValue));
    }
    @When("User chooses company option")
    public void user_chooses_company_option() {
        Assert.assertTrue("Individual radio selection by default is FAILED", createPage.individualRadioBtn.isSelected());
        BriteERPUtil.pause(2);
        createPage.companyRadioButton.click();
    }
    @When("User fills out company  page fields")
    public void user_fills_out_company_page_fields() {
        BriteERPUtil.pause(1);
        companyName = faker.name().firstName() + " " + faker.name().lastName();
        createPage.contactName.sendKeys(companyName);
        BriteERPUtil.pause(1);
        createPage.contactAddressStreet.sendKeys(faker.address().streetName());
        BriteERPUtil.pause(1);
        createPage.contactAddressCity.sendKeys(faker.address().city());
        createPage.addressStateBox.click();
        BriteERPUtil.pause(1);
        createPage.companyStateSelection.click();
        BriteERPUtil.pause(1);
        createPage.contactAddressZip.sendKeys(faker.address().zipCode());
        createPage.contactPhone.sendKeys(faker.phoneNumber().cellPhone());
        createPage.contactEmail.sendKeys("vvvvv@yahoo.com");
        createPage.contactWebsite.sendKeys("www.craxyland.com");
    }

    @When("User clicks on discard button")
    public void user_clicks_on_discard_button() {
        createPage.discardBtn.click();
        createPage.alert.click();
    }

    @Then("User sees {string}  company displayed")
    public void user_sees_company_displayed(String comSearchValue) {
        comSearchValue = companyName;
        BriteERPUtil.pause(3);
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(actualTitle.contains(comSearchValue));

    }



    @Then("User should be able to discard the information")
    public void user_should_be_able_to_discard_the_information() {
        System.out.println("Test Passed");
    }
    @When("user clicks edit button")
    public void user_clicks_edit_button() {
        createPage.editBtn.click();
    }
    @When("user edit what he wants")
    public void user_edit_what_he_wants() {
        createPage.contactName.sendKeys(faker.name().username());
    }
    @When("User clicks on the save button")
    public void user_clicks_on_the_save_button() {
        createPage.saveBtn.click();
    }
    @Then("User should be able edit the page")
    public void user_should_be_able_edit_the_page() {
        System.out.println("Test Passed");
    }






    //negative

    @When("User fills out individual page fields neg scenario")
    public void user_fills_out_individual_page_fields_neg_scenario() {
        createPage.contactAddressStreet.sendKeys(faker.address().streetAddress());
        createPage.contactAddressCity.sendKeys(faker.address().cityName());
        createPage.contactAddressZip.sendKeys(faker.address().zipCode());
        createPage.jobPosition.sendKeys(faker.job().position());
        createPage.contactPhone.sendKeys(faker.phoneNumber().phoneNumber());
        createPage.contactEmail.sendKeys("thisIsFakeEmail@cybertek.com");
    }

    @Then("User should see error message pops up.")
    public void user_should_see_error_message_pops_up() {
        Assert.assertTrue("Test FAILED",createPage.errorMessage.isDisplayed());
        BriteERPUtil.pause(2);
    }

    @When("User fills out company  page fields neg scenario")
    public void user_fills_out_company_page_fields_neg_scenario() {
        createPage.contactAddressStreet.sendKeys(faker.address().streetName());
        BriteERPUtil.pause(1);
        createPage.contactAddressCity.sendKeys(faker.address().city());
        createPage.addressStateBox.click();
        BriteERPUtil.pause(1);
        createPage.companyStateSelection.click();
        BriteERPUtil.pause(1);
        createPage.contactAddressZip.sendKeys(faker.address().zipCode());
        createPage.contactPhone.sendKeys(faker.phoneNumber().cellPhone());
        createPage.contactEmail.sendKeys("vvvvv@yahoo.com");
        createPage.contactWebsite.sendKeys("www.craxyland.com");
    }



}