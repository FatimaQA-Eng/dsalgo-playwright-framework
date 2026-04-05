Feature: Functional - Sign In

  Background:
    Given User is on Launch page
    When User clicks on Get Started button
    Then User should land on Home Page
    When User clicks on Sign in link
    Then User should land on Login Page

  Scenario: Invalid password
    When User enters username "username" and password "invalidPass"
    And User clicks Login button
    Then Error message should be displayed

  Scenario: Invalid username
    When User enters username "invalidUser" and password "password"
    And User clicks Login button
    Then Error message should be displayed

  Scenario: Empty fields
    When User clicks Login button
    Then Validation message should be displayed

  Scenario: Valid login
    When User enters username "username" and password "password"
    And User clicks Login button
    Then User should be redirected to Home page

  Scenario: Logout
    Given User is logged in
    When User clicks Sign out from login
    Then User should be redirected to Home page with logout message

  Scenario: Auto focus on username
    Then Cursor should be in username field

  Scenario: Keyboard navigation
    When User presses Tab key
    Then Focus should move in correct order