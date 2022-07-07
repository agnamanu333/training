Feature: mail

  Background: background session
    Given user in homepage

  Scenario Outline: login
    When user enter the valid username"<email>" and password "<password>"
    Then user click the login

    Examples: 
      | email | password  |
      | admin | Admin@123 |
      
Scenario Outline: attributes 
When user enter the valid usernames"<email>" and password "<password>"
    Then user clicks the login
    Then click on catalog
    Examples: 
      | email | password  |
      | admin | Admin@123 |