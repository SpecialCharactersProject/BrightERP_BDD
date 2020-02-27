package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
       plugin="json:target/Destination/cucumber.json",
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@ind,@com"
)

public class CukesRunner {
}
