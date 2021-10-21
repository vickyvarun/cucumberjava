$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "feature to test login functionality",
  "description": "",
  "id": "feature-to-test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check login is successful with valid credentials",
  "description": "",
  "id": "feature-to-test-login-functionality;check-login-is-successful-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter email and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is Navigated to home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});