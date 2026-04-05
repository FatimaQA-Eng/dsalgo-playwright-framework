Feature: Launch Page - dsAlgo Portal

  Scenario: Open dsAlgo portal
    Given the user has browser open
    When the user enters correct dsAlgo portal URL
    Then the user should be able to land on dsAlgo portal

  Scenario: Verify presence of Get Started button
    Given the user has browser open
    When the user enters correct dsAlgo portal URL
    Then user should see 1 button in launch page

  Scenario: Verify button is enabled
    Given the user has browser open
    When the user enters correct dsAlgo portal URL
    Then button should be in enabled state

  Scenario: Verify page title
    Given the user has browser open
    When the user enters correct dsAlgo portal URL
    Then page title should be "Numpy Ninja"

  Scenario: Verify page content
    Given the user has browser open
    When the user enters correct dsAlgo portal URL
    Then user should see launch page content