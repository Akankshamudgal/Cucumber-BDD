Feature: freeCrm login test the application 
Scenario Outline: freeCrm login test scenarios for the application 
Given user is already on the login page
When title of the login page is Facebook
Then user enters "<username>" and "<password>"
Then user clicks on login button
And user is on homepage

Examples:
| username  | password     |
| 8076016429| @jaingolu1234|
| 8076236420| @jaingolu1234|
