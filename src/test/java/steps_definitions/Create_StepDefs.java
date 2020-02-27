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
        String name;
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
                  name=faker.name().firstName() + " " + faker.name().lastName();
                createPage.contactName.sendKeys(name);
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



    @Then("User sees {string} displayed")
    public void user_sees_displayed(String searchValue) {
            searchValue=name;
            BriteERPUtil.pause(5);
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(actualTitle.contains(searchValue));

    }

        @When("User chooses company option")
        public void user_chooses_company_option() {

                Assert.assertTrue("Individual radio selection by default is FAILED",createPage.individualRadioBtn.isSelected());
                BriteERPUtil.pause(2);
                createPage.companyRadioButton.click();

        }
        @When("User fills out company  page fields")
        public void user_fills_out_company_page_fields() {
                BriteERPUtil.pause(1);
                createPage.contactName.sendKeys(faker.name().firstName()+" "+faker.name().lastName());
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


}
