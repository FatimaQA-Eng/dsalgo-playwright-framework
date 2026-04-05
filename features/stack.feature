Feature: Stack Data Structure

  Background:
    Given User is logged in with valid credentials

  Scenario: Navigate to Stack page
    When User selects "Stack" from Data Structures dropdown
    Then User should be redirected to Stack page

  Scenario: Navigate to Operations in Stack page
    Given User is on Stack page
    When User clicks "Operations in Stack" link
    Then User should be redirected to Operations in Stack page

  Scenario: Navigate to Try Editor from Operations page
    Given User is on Operations in Stack page
    When User clicks "Try here" button
    Then User should be redirected to Try Editor page

  Scenario: Run invalid python code
    Given User is on Try Editor page
    When User runs code "invalid" in stack
    Then Error alert should be displayed in stack

  Scenario: Handle popup alert
    Given User is on Try Editor page
    When User clicks Run button without code in stack
    Then Error alert should be displayed in stack

  Scenario: Run valid python code
    Given User is on Try Editor page
    When User runs code "valid" in stack
    Then Output should be displayed in stack

  Scenario: Navigate back to Operations page
    Given User is on Try Editor page
    When User clicks browser back button
    Then User should be redirected to Operations in Stack page

  Scenario: Navigate to Implementation page
    Given User is on Operations in Stack page
    When User clicks "Implementation" link
    Then User should be redirected to Implementation page

  Scenario: Navigate to Try Editor from Implementation page
    Given User is on Implementation page
    When User clicks "Try here" button
    Then User should be redirected to Try Editor page

    # ================= IMPLEMENTATION FLOW =================

Scenario: Run invalid python code in Implementation
  Given User is on Try Editor page
  When User runs code "invalid" in stack
  Then Error alert should be displayed in stack

Scenario: Handle popup alert in Implementation
  Given User is on Try Editor page
  When User clicks Run button without code in stack
  Then Error alert should be displayed in stack

Scenario: Run valid python code in Implementation
  Given User is on Try Editor page
  When User runs code "valid" in stack
  Then Output should be displayed in stack

Scenario: Navigate back to Implementation page
  Given User is on Implementation page
  When User clicks "Try here" button
  And User clicks browser back button
  Then User should be redirected to Implementation page

# ================= APPLICATION FLOW =================

Scenario: Navigate to Application page
  Given User is on Implementation page
  When User clicks "Application" link
  Then User should be redirected to Application page

Scenario: Navigate to Try Editor from Application page
  Given User is on Application page
  When User clicks "Try here" button
  Then User should be redirected to Try Editor page

Scenario: Run invalid python code in Application
  Given User is on Try Editor page
  When User runs code "invalid" in stack
  Then Error alert should be displayed

Scenario: Run valid python code in Application
  Given User is on Try Editor page
  When User runs code "valid" in stack
  Then Output should be displayed

Scenario: Navigate back to Application page
  Given User is on Application page
  When User clicks "Try here" button
  And User clicks browser back button
  Then User should be redirected to Application page

# ================= PRACTICE FLOW =================

Scenario: Navigate to Practice Questions page
  Given User is on Application page
  When User clicks "Practice Questions" link
  Then User should be redirected to Practice page

Scenario: Logout from Practice page
  Given User is on Practice page
  When User clicks "Sign out" link
  Then User should be redirected to Home page