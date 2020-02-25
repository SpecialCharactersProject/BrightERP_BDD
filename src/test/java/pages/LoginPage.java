package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import pages.BasePage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginPage extends BasePage {

public LoginPage(){
    PageFactory.initElements(Driver.getDriver(),this);

}
@FindBy(id = "login")
    public WebElement usernameInputBox;
@FindBy(id = "password")
    public WebElement passwordInputBox;
@FindBy(xpath = "//button[@type='submit']")
    public WebElement loginButton;

public void login() {
    Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    usernameInputBox.sendKeys(ConfigurationReader.getProperty("username2"));
    passwordInputBox.sendKeys(ConfigurationReader.getProperty("password2"));
    loginButton.click();
}

}
