@Wip
Feature: As a person from Wales
  I need to know what help I can get with my NHS costs
  So that I can get the treatment I need

  Background:
    Given the user is on landing page

  @First
  Scenario Outline: Age lessthan sixteen Wales test
    When the user is from Wales
    And the user is less than sixteen years of age "<day>" "<month>" "<year>"
    Then the user should get free NHS help

    Examples:
      | day |month|year|
      |01  | 01  | 2019|
      #|01  | 01  | 2004|cd

  @Second
  Scenario Outline: Age greater than 16 Wales test
    When the user is from Wales
    And the user is greater than sixteen years of age "<day>" "<month>" "<year>"
    Then the user is not living with partner
    And the user claims benifits and tax credits
    And the user recieves Universal Credit and have responsibilty of a child
    And the take home pay from universal credit is less than ninefiftyfive
    Then the user should get free adult NHS help

    Examples:
      | day | month | year |
      |  26   |   11    |   1983   |



