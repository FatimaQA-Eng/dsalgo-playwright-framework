@home
Feature: Home Page - DS Algo Portal

  Background:
    Given User is in Launch page
    When User clicks Get Started button
    Then User lands on Home page

  # ---------------- NON-FUNCTIONAL ----------------

  Scenario: Verify Home Page Title
    Then Page title should be "NumpyNinja"

  Scenario: Verify Register and Sign in links
    Then Register and Sign in links should be visible

  Scenario: Verify Register navigation
    When User clicks Register link
    Then User lands on Register page

  Scenario: Verify Sign in navigation
    When User clicks Sign in link
    Then User lands on Login page

  # ---------------- UNREGISTERED USER ----------------

  Scenario Outline: Verify alert for cards (not logged in)
    When User clicks "<card>" card Get Started
    Then Alert message "You are not logged in" should be displayed

    Examples:
      | card              |
      | Data Structures   |
      | Array             |
      | Linked List       |
      | Stack             |
      | Queue             |
      | Tree              |
      | Graph             |

  Scenario Outline: Verify alert for dropdown (not logged in)
    When User selects "<option>" from dropdown
    Then Alert message "You are not logged in" should be displayed

    Examples:
      | option            |
      | Arrays            |
      | Linked List       |
      | Stack             |
      | Queue             |
      | Tree              |
      | Graph             |

  # ---------------- REGISTERED USER ----------------

  Scenario: Verify login success
    Given User logs in with valid credentials
    Then User should land on Home page

  Scenario: Verify username display
    Given User logs in with valid credentials
    Then Username should be visible on top

  Scenario Outline: Verify navigation after login
    Given User logs in with valid credentials
    When User clicks "<card>" card Get Started
    Then User should navigate to "<page>" page

    Examples:
      | card            | page        |
      | Data Structures | Data        |
      | Array           | Array       |
      | Linked List     | Linked List |
      | Stack           | Stack       |
      | Queue           | Queue       |
      | Tree            | Tree        |
      | Graph           | Graph       |

  Scenario: Verify logout
    Given User logs in with valid credentials
    When User clicks Sign out
    Then Logout message should be displayed