Feature: Graph functionality

  # ─────────────────────────────────────────
  # LAUNCH PAGE SCENARIOS
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to open the application
    When The user enters correct dsAlgo URL
    Then The user should be able to land on dsAlgo portal

  Scenario: Verify presence of Get Started button
    When The user enters correct dsAlgo URL
    Then The user should see "Get Started" button in launch page

  Scenario: Verify state of button
    When The user enters correct dsAlgo URL
    Then The button should be in enabled state

  Scenario: Verify title of page
    When The user enters correct dsAlgo URL
    Then The page title should be "NumpyNinja"

  Scenario: Verify content of the page
    When The user enters correct dsAlgo URL
    Then The user should see page content text

  # ─────────────────────────────────────────
  # GRAPH NAVIGATION SCENARIOS
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Graph page
    Given The user is in the "Home" page after Sign in
    When The user clicks "Get Started" button in the Graph module at Home page
    Then The user should be redirected to "Graph" page

  Scenario: Verify Graph page content is visible
    Given The user is in the "Graph" page
    When The user verifies the content in "Graph" page
    Then The user should see the content of "Graph" page

  # ─────────────────────────────────────────
  # GRAPH PAGE CONTENT SCENARIOS
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to see Graph definition
    Given The user is on the "Graph" page
    When The page loads
    Then The user should be able to see Graph definition

  Scenario: Verify that user is able to see vertices and edges explanation
    Given The user is on the "Graph" page
    When The user verifies the content
    Then The user should be able to see "vertices and edges" explanation

  Scenario: Verify that user is able to see graph implementation details
    Given The user is on the "Graph" page
    When The user verifies the content
    Then The user should be able to see "graph implementation" details

  Scenario: Verify that user is able to see real-world examples
    Given The user is on the "Graph" page
    When The user verifies the content
    Then The user should be able to see "real-world" examples

  # ─────────────────────────────────────────
  # GRAPH REPRESENTATIONS SCENARIOS
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Graph Representations page
    Given The user is on the "Graph" page
    When The user clicks "Graph Representations" link
    Then The user should be redirected to "Graph Representations" page

  Scenario: Verify Graph Representations page content is visible
    Given The user is in the "Graph Representations" page
    When The user verifies the content in Graph Representations page
    Then The user should see the content of "Graph Representations" page

  Scenario: Verify that user is able to see Graph applications
    Given The user is on the "Graph Representations" page
    When The page loads
    Then The user should be able to see "Graph applications"

  Scenario: Verify that user is able to see Adjacency Matrix
    Given The user is on the "Graph Representations" page
    When The user verifies the content
    Then The user should be able to see "Adjacency Matrix"

  Scenario: Verify that user is able to see Adjacency List
    Given The user is on the "Graph Representations" page
    When The user verifies the content
    Then The user should be able to see "Adjacency List"

  Scenario: Verify that user is able to see Incidence Matrix
    Given The user is on the "Graph Representations" page
    When The user verifies the content
    Then The user should be able to see "Incidence Matrix"

  # ─────────────────────────────────────────
  # TRY EDITOR SCENARIOS
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Try Editor
    Given The user is on the "Graph" page
    When The user clicks "Try here>>>" button
    Then The user should be redirected to Try "Editor" page

  Scenario: Verify Try Editor page has code text area
    Given The user is on the "Try Editor" page
    When The user verifies the "page"
    Then The user should see a text area for "code" execution

  Scenario: Verify that user is able to execute valid python code
    Given The user is on the "Try Editor" page
    When The user enters valid "python code"
    Then The user should be able to type "code" in the text area

  Scenario: Verify that user is able to see output after running code
    Given The user is on the "Try Editor" page
    When The user clicks "Run" button
    Then The user should be able to see output

  Scenario: Verify that user gets alert when running without input
    Given The user is on the "Try Editor" page
    When The user clicks "Run" button without entering code
    Then The user should receive an "alert" message

  Scenario: Verify that user gets error for invalid input
    Given The user is on the Try Editor page
    When The user enters invalid input in text area
    Then The user should be able to click Run button

  Scenario: Verify error message appears for invalid code
    Given The user is on the Try Editor page
    When The user clicks Run button
    Then The user should receive an "error" message