$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/WalesFeature.feature");
formatter.feature({
  "name": "As a person from Wales",
  "description": "  I need to know what help I can get with my NHS costs\n  So that I can get the treatment I need",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Age greater than 16 Wales test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Second"
    }
  ]
});
formatter.step({
  "name": "the user is from Wales",
  "keyword": "When "
});
formatter.step({
  "name": "the user is greater than sixteen years of age \"\u003cday\u003e\" \"\u003cmonth\u003e\" \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user is not living with partner",
  "keyword": "Then "
});
formatter.step({
  "name": "the user claims benifits and tax credits",
  "keyword": "And "
});
formatter.step({
  "name": "the user recieves Universal Credit and have responsibilty of a child",
  "keyword": "And "
});
formatter.step({
  "name": "the take home pay from universal credit is less than ninefiftyfive",
  "keyword": "And "
});
formatter.step({
  "name": "the user should get free adult NHS help",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "month",
        "year"
      ]
    },
    {
      "cells": [
        "26",
        "11",
        "1983"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Age greater than 16 Wales test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Second"
    }
  ]
});
formatter.step({
  "name": "the user is from Wales",
  "keyword": "When "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_is_from_Wales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is greater than sixteen years of age \"26\" \"11\" \"1983\"",
  "keyword": "And "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_is_greater_than_sixteen_years_of_age(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is not living with partner",
  "keyword": "Then "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_is_not_living_with_partner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user claims benifits and tax credits",
  "keyword": "And "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_claims_benifits_and_tax_credits()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user recieves Universal Credit and have responsibilty of a child",
  "keyword": "And "
});
formatter.match({
  "location": "WalesFeatureSteps.the_user_recieves_Universal_Credit_and_have_responsibilty_of_a_child()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//fieldset[@id\u003d\u0027paidUniversalCredit_fieldset\u0027]/label[1]\"}\n  (Session info: chrome\u003d80.0.3987.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-9NMK4T7\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.106, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:56937}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b246e02b422c62afd227a94be8c7d112\n*** Element info: {Using\u003dxpath, value\u003d//fieldset[@id\u003d\u0027paidUniversalCredit_fieldset\u0027]/label[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.submit(Unknown Source)\r\n\tat com.cc.practicaltest.Pages.UniversalCreditClaimPage.YesClaim(UniversalCreditClaimPage.java:25)\r\n\tat com.cc.practicaltest.steps.WalesFeatureSteps.the_user_recieves_Universal_Credit_and_have_responsibilty_of_a_child(WalesFeatureSteps.java:83)\r\n\tat ✽.the user recieves Universal Credit and have responsibilty of a child(file:src/test/resources/features/WalesFeature.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the take home pay from universal credit is less than ninefiftyfive",
  "keyword": "And "
});
formatter.match({
  "location": "WalesFeatureSteps.theTakeHomePayFromUniversalCreditIsLessThanNinefiftyfive()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should get free adult NHS help",
  "keyword": "Then "
});
formatter.match({
  "location": "WalesFeatureSteps.theUserShouldGetFreeAdultNHSHelp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});