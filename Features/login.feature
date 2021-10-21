Feature: feature to test login functionality

  Scenario: check login is successful with valid credentials
    Given user is on login page
    When user enter email and password
    And user click on login button
    Then User is Navigated to home page
