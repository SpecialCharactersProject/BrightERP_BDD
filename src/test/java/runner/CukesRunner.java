package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin="html:target/cucumber-reports",
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@create"
)

public class CukesRunner {

}
