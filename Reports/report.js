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
formatter.scenarioOutline({
  "name": "attributes",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the valid usernames\"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks the login",
  "keyword": "Then "
});
formatter.step({
  "name": "click on catalog",
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
  "name": "attributes",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the valid usernames\"admin\" and password \"Admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "test1.user_enter_the_valid_usernames_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the login",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.user_clicks_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on catalog",
  "keyword": "Then "
});
formatter.match({
  "location": "test1.click_on_catalog()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//i[@class\u003d\u0027active open\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WIN-QLT92MEOVH4\u0027, ip: \u00279.113.187.180\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\003QU0~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52745}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 989d56a7b59004f528562ca5aded6ad6\n*** Element info: {Using\u003dxpath, value\u003d//i[@class\u003d\u0027active open\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdefinition.test1.click_on_catalog(test1.java:46)\r\n\tat ✽.click on catalog(file:src/test/java/feature/jira.feature:17)\r\n",
  "status": "failed"
});
});