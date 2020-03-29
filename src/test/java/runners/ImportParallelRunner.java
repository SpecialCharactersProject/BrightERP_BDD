package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/parallel-cucumber3.json",
        },
        features = "src/test/resources/features/import.feature",
        glue = "steps_definitions"
)
public class ImportParallelRunner {
}