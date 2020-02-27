package base;

import org.junit.Test;

import pages.LoginPage;

public class LoginTest  {
    LoginPage loginPage = new LoginPage();
    @Test
    public void login(){
        loginPage.login();
    }
}
