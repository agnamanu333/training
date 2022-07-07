package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class test1 {
	WebDriver driver;
	@Given("user in homepage")
	public void user_in_homepage() {
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://uniformm1.upskills.in/admin/");
	}

	@When("user enter the valid username{string} and password {string}")
	public void user_enter_the_valid_username_and_password(String user1, String pass1) {
	    driver.findElement(By.name("username")).sendKeys(user1);
	    driver.findElement(By.name("password")).sendKeys(pass1);
	}

	@Then("user click the login")
	public void user_click_the_login() {
		driver.findElement(By.tagName("button")).click();
	}	
		@When("user enter the valid usernames{string} and password {string}")
		public void user_enter_the_valid_usernames_and_password(String user2, String pass2) {
			driver.findElement(By.name("username")).sendKeys(user2);
		    driver.findElement(By.name("password")).sendKeys(pass2);
		}

		@Then("user clicks the login")
		public void user_clicks_the_login() {
			driver.findElement(By.tagName("button")).click();
		}


	
	@Then("click on catalog")
	public void click_on_catalog() {
		driver.findElement(By.id("catalog")).click();
		driver.findElement(By.xpath("//i[@class='active open']")).click();
	}
} 
