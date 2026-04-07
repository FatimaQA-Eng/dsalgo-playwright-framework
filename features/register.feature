Feature: User Registration Flow (Data Driven)

  Background:
    Given User is on Registration page

  Scenario: Empty fields validation
    When User enters registration data "empty"
    And User clicks Register button
    Then Required field validation should be displayed

  Scenario: Only username entered
    When User enters registration data "onlyUsername"
    And User clicks Register button
    Then Required field validation should be displayed
    
  Scenario: Only password entered
    When User enters registration data "onlyPassword"
    And User clicks Register button
    Then Required field validation should be displayed

  Scenario: Password mismatch
    When User enters registration data "mismatch"
    And User clicks Register button
    Then Required field validation should be displayed


  Scenario: Successful registration
  When User enters registration data "valid"
  And User clicks Register button
  Then Success message should be displayed
  When User logs in with same credentials
  Then Username should be visible on top