Feature: feature to test google search functionality

  Scenario: Validate google search is working
    Given browser is open
    And user is on google search page
    When user enter a text in searchbox
    And hits enter
    Then User is Navigated to search result
