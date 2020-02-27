package steps_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.BasePage;
import pages.ImportPage;
import pages.LoginPage;
import sun.jvm.hotspot.debugger.Page;
import utilities.Driver;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

public class Import_StepDefs {

    ImportPage importPage = new ImportPage();

    @Given("user is logged into the APP")
    public void user_is_logged_into_the_APP() {
        new LoginPage().login();
    }

    @When("user clicks on the contacts module")
    public void user_clicks_on_the_contacts_module() {
        new BasePage().contactsButton.click();
    }

    @When("user verify the import button displays")
    public void user_verify_the_import_button_displays() {
        Assert.assertTrue("Import Button did not Display",importPage.importBtn.isDisplayed());

    }

    @When ("user clicks on the import button")
    public void user_clicks_on_the_import_button() {
        importPage.importBtn.click();
    }

    @Then("user verify the current page title with the expected title")
    public void user_verify_the_current_page_title_with_the_expected_title() {
        String expectedTitle= "Import a File - Odoo";
        Assert.assertTrue(expectedTitle.contains(Driver.getDriver().getTitle()));

        Assert.assertEquals(expectedTitle,Driver.getDriver().getTitle());
        //try with current URL
       // http://app.briteerp.com/web?#model=res.partner&action=import
    }

    @When("user verify the Load File button displays")
    public void user_verify_the_Load_File_button_displays() {
        Assert.assertTrue("ImportLoadFile did not Display",importPage.importLoadFile.isDisplayed());
    }

    @When("user verify the No file chosen… text on the load file input box")
    public void user_verify_the_No_file_chosen_text_on_the_load_file_input_box() {
        Assert.assertTrue(importPage.loadFileInputBox.getAttribute("placeholder").contains("No file chosen..."));
    }

    @When("user should pass the path of the file on")
    public void user_should_pass_the_path_of_the_file_on() {

        uploadFile("/Users/mikaildurur/Desktop/contacs.xlsx");
        throw new cucumber.api.PendingException();
    }

    @Then("user should be able to import file")
    public void user_should_be_able_to_import_file() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
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

    }
}
