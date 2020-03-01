package steps_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.BasePage;
import pages.ImportPage;
import utilities.BriteERPUtil;
import utilities.Driver;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class Import_StepDefs {
    BasePage basePage = new BasePage();

    ImportPage importPage = new ImportPage();

    @Given("user is on the contacts module")
    public void user_is_on_the_contacts_module() {
        BriteERPUtil.pause(3);
        new BasePage().contactsButton.click();
    }

    @When("user verify the import button displays")
    public void user_verify_the_import_button_displays() {
        BriteERPUtil.pause(3);
        Assert.assertTrue("Import Button did not Display", importPage.importBtn.isEnabled());

    }

    @When("user clicks on the import button")
    public void user_clicks_on_the_import_button() {
        BriteERPUtil.pause(3);
        importPage.importBtn.click();
    }

    @Then("user verify the current page title with the expected title")
    public void user_verify_the_current_page_title_with_the_expected_title() {
        BriteERPUtil.pause(3);
        String expectedTitle = "Import a File - Odoo";
        Assert.assertTrue(expectedTitle.contains(Driver.getDriver().getTitle()));

        Assert.assertEquals(expectedTitle, Driver.getDriver().getTitle());
        //try with current URL
        // http://app.briteerp.com/web?#model=res.partner&action=import
    }

    @When("user verify the Load File button displays")
    public void user_verify_the_Load_File_button_displays() {
        BriteERPUtil.pause(3);
        Assert.assertTrue("ImportLoadFile did not Display", importPage.importLoadFile.isDisplayed());
    }

    @When("user verify the No file chosen… text on the load file input box")
    public void user_verify_the_No_file_chosen_text_on_the_load_file_input_box() {
        Assert.assertTrue(importPage.loadFileInputBox.getAttribute("placeholder").contains("No file chosen..."));
    }

    @When("user should pass the path of the file on")
    public void user_should_pass_the_path_of_the_file_on() {

        uploadFile("/Users/mikaildurur/Desktop/contacs.xlsx");

        importPage.loadFileInputBox.sendKeys("contacs.xlsx");

    }


    public static void setClipboardData(String string) {
        //StringSelection is a class that can be used for copy and paste operations.
        StringSelection stringSelection = new StringSelection(string);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection, null);
    }

    public static void uploadFile(String fileLocation) {
        try {
            //Setting clipboard with file location
            setClipboardData(fileLocation);
            //native key strokes for CTRL, V and ENTER keys
            Robot robot = new Robot();

            robot.keyPress(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
        } catch (Exception exp) {
            exp.printStackTrace();
        }


        // Below is Binny's code
    }

    @When("user  click cancel button")
    public void user_click_cancel_button() {
        importPage.importBtn.click();


    }

    @Then("User should navigate back to import button")
    public void user_should_navigate_back_to_import_button() {
        BriteERPUtil.pause(3);
        importPage.cancelButton.click();
        BriteERPUtil.pause(5);


    }

    @Given("User is on the contact module")
    public void user_is_on_the_contact_module() {
        BriteERPUtil.pause(3);
        Assert.assertTrue(true);
    }

    @When("User click import button")
    public void user_click_import_button() {
        BriteERPUtil.pause(5);
        basePage.contactsButton.click();
        importPage.importBtn.click();
        BriteERPUtil.pause(3);

    }

    @When("User sees help window display")
    public void user_sees_help_window_display() {
        Assert.assertTrue("Help button is NOT displayed!",
                importPage.helpButton.isDisplayed());

    }

    @Then("User able to navigate back to import button")
    public void user_able_to_navigate_back_to_import_button() {

        String actualHelpUrl = "https://www.odoo.com/documentation" +
                "/user/11.0/general/base_import/import_faq.html";

        String expectedHelpUrl = importPage.helpButton.getAttribute("href");
        System.out.println(expectedHelpUrl);
        Assert.assertTrue("Url is NOT matching!",
                expectedHelpUrl.equals(actualHelpUrl));
        BriteERPUtil.pause(3);
        importPage.cancelButton.click();

    }

}

