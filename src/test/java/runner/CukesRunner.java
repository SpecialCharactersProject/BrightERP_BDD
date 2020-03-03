package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        plugin={"json:target/destination/pretty-reports.json","html:target/cucumber-reports"},
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@SC_SmokeTest"
)

public class CukesRunner {

}
