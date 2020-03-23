package Runnercalss;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
			features="C:\\Users\\akanksha.mudgal\\eclipse-workspace\\freeCrmBDDFrameworkontrial\\src\\main\\java\\Login\\login.Feature", glue= { "StepDefinationPkg"},
			plugin= {"pretty","html:test-outout"},
			monochrome= true,
			dryRun=false
			)
	
	
	public class RunnerClass {
}
