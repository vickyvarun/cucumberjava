package cucumberjava;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features/login.feature", glue = { "" },monochrome = true, plugin = {
		"pretty", "html:target/HtmlReports", "json:target/JSONReports/report.json",
		"json:target/JunitReports/report.xml" })

public class TestRunner {

}
