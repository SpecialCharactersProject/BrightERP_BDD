package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin={"json:target/destinationJSON/report.json","html:target/destinationHTML/report.html"},
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@create"
)

public class CukesRunner {
}
