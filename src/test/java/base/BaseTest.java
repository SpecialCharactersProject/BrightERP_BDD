package base;

//import org.testng.annotations.AfterClass;
//import org.testng.annotations.BeforeClass;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import utilities.ConfigurationReader;
import utilities.Driver;

public class BaseTest {

    @BeforeClass
    public void setUp() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));

    }

    @AfterClass

    public void quit(){
        Driver.quitDriver();
    }
}
