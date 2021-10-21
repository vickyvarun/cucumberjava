package cucumberjava;

import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import io.cucumber.java.en.*;

public class Stepdefinitions {
	
	WebDriver driver;

	@Given("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		System.out.println("Inside Step - user is on login page");
	}

	@When("^user enter email and password$")
	public void user_enter_email_and_password() throws Throwable {
		System.out.println("Inside Step - user enter email and password");
	}

	@And("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		System.out.println("Inside Step - user click on login button");
	}

	@Then("^User is Navigated to home page$")
	public void user_is_Navigated_to_home_page() throws Throwable {
		System.out.println("Inside step - user is navigated to home page");
	}

}
