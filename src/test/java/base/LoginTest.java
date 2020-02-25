package base;

import org.testng.annotations.Test;
import pages.LoginPage;

public class LoginTest extends BaseTest {
    LoginPage loginPage = new LoginPage();
    @Test
    public void login(){
        loginPage.login();
    }
}
