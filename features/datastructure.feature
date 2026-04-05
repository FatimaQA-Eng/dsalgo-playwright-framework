Feature: Data Structures

  Scenario: Navigate to Data Structures Introduction
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    Then User should be in Data Structures Introduction page

  Scenario: Navigate to Time Complexity
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    Then User should be in Time Complexity page

  Scenario: Navigate to Practice Questions
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    And User clicks Practice Questions button
    Then User should be in Practice Questions page

  Scenario: Navigate to Try Editor
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    And User clicks Try Here button
    Then User should be in Try Editor page

  Scenario: Run without code
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    And User clicks Try Here button
    And User clicks Run button without code
    Then Error alert should be displayed

  Scenario: Run invalid code
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    And User clicks Try Here button
    And User runs code "invalid"
    Then Error alert should be displayed

  Scenario: Run valid code
    Given User is logged in with valid credentials
    When User clicks Data Structures Get Started
    And User clicks Time Complexity link
    And User clicks Try Here button
    And User runs code "valid"
    Then Output should be displayed