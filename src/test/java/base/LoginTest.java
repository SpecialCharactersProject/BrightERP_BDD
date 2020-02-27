package base;

//import org.testng.annotations.Test;
import org.junit.Test;
import pages.LoginPage;

public class LoginTest extends BaseTest {
    LoginPage loginPage = new LoginPage();
    @Test
    public void login(){
        loginPage.login();
    }
}
