$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/jira.feature");
formatter.feature({
  "name": "mail",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the valid username\"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123"
      ]
    }
  ]
});
formatter.background({
  "name": "background session",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user in homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "test1.user_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the valid username\"admin\" and password \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "test1.user_enter_the_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the login",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.user_click_the_login()"
});
formatter.result({
  "status": "passed"
});
});