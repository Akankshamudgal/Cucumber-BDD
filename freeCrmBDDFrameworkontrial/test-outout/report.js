$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/akanksha.mudgal/eclipse-workspace/freeCrmBDDFrameworkontrial/src/main/java/Login/login.Feature");
formatter.feature({
  "line": 1,
  "name": "freeCrm login test the application",
  "description": "",
  "id": "freecrm-login-test-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "freeCrm login test scenarios for the application",
  "description": "",
  "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;;1"
    },
    {
      "cells": [
        "8076016429",
        "@jaingolu1234"
      ],
      "line": 11,
      "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;;2"
    },
    {
      "cells": [
        "8076236420",
        "@jaingolu1234"
      ],
      "line": 12,
      "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "freeCrm login test scenarios for the application",
  "description": "",
  "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"8076016429\" and \"@jaingolu1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_Already_on_login_page()"
});
formatter.result({
  "duration": 49283300100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_login_page()"
});
formatter.result({
  "duration": 6677800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8076016429",
      "offset": 13
    },
    {
      "val": "@jaingolu1234",
      "offset": 30
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 314592000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 121144800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 15128437700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "freeCrm login test scenarios for the application",
  "description": "",
  "id": "freecrm-login-test-the-application;freecrm-login-test-scenarios-for-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"8076236420\" and \"@jaingolu1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_Already_on_login_page()"
});
formatter.result({
  "duration": 38949197400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_login_page()"
});
formatter.result({
  "duration": 11174800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8076236420",
      "offset": 13
    },
    {
      "val": "@jaingolu1234",
      "offset": 30
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 299161300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 113944600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 13723905000,
  "status": "passed"
});
});