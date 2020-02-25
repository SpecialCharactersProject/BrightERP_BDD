package runner;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin="html:target/cucumber-reports",
        features = "src/test/resources/features",
        glue= "steps_definitions",
        dryRun =false,
        tags="@smokeTest"
)

public class CukesRunner {
}
