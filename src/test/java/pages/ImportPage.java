package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ImportPage {

    public ImportPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//button[@class='btn btn-sm btn-default o_button_import']")
    public WebElement importBtn;

    @FindBy(xpath = "//label[@class='btn btn-primary']")
    public WebElement importLoadFile;

    @FindBy(xpath = "//button[contains(text(), 'Cancel')]")
    public WebElement cancelButton;

    @FindBy(xpath = "//a[contains(text(), 'Help')]")
    public WebElement helpButton;

    @FindBy(xpath = "//input[@class='oe_import_file_show form-control']")
    public WebElement loadFileInputBox;





}
