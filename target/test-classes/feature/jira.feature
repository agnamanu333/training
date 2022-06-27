Feature: mail

  Background: background session
    Given user in homepage

  Scenario Outline: login
    When user enter the valid username"<email>" and password "<password>"
    Then user click the login

    Examples: 
      | email | password  |
      | admin | Admin@123 |
