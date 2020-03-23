package StepDefinationPkg;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	public static WebDriver driver;
	
	@Given("^user is already on the login page$")
	public void user_Already_on_login_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\akanksha.mudgal\\eclipse-workspace\\freeCrmBDDFrameworkontrial\\src\\main\\java\\Executables\\chromedriver1.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://www.facebook.com/");
		Thread.sleep(20000);
	}
	@When("^title of the login page is Facebook$")
	public void title_of_the_login_page(){
		System.out.println( driver.getTitle());
	
		
		
	}
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String Password) {
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"pass\"]")).sendKeys(Password);
		
		
	
	   

}
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("loginbutton")).click();
	}
	@Then("^user is on homepage$")
	public void user_is_on_homepage()  {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(driver.getTitle());
	    driver.quit();
}
}
