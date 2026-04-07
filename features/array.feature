Feature: Array functionality

  # ─────────────────────────────────────────
  # ANONYMOUS PAGE
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Home page
    Given Array user is on the Home page after get started from anonymous page
    When Array user clicks the Get Started button in anonymous page
    Then Array user be directed to Home Page

  # ─────────────────────────────────────────
  # LANDING PAGE SIGN IN
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Login page
    Given Array user is in the Login page after get started from Home page
    When Array user clicks the Sign in Link in Home page
    Then Array user lands in the login page

  # ─────────────────────────────────────────
  # AUTHENTICATION
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to land on home page after login
    Given Array user is in the Home page after Signed in
    When Array user clicks the Login button after providing valid credentials
    Then Array user lands on home page after successfully authenticated

  # ─────────────────────────────────────────
  # HOME PAGE — NAVIGATE TO ARRAY
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to navigate to Array page
    Given Array user is in the Home page after Signed in
    When Array user clicks the Get Started button in Array Panel
    Then Array user is directed to Array Data Structure Page

  # ─────────────────────────────────────────
  # ARRAY PAGE CONTENT
  # ─────────────────────────────────────────

  Scenario: Verify Array page heading
    Given Array user is on the "Array" page
    When Array user views all contents in Array page
    Then The Array page heading should be "Array"

  Scenario: Verify Array page description
    Given Array user is on the "Array" page
    When Array user views all contents in Array page
    Then Array page should display description about arrays

  Scenario: Verify Topics Covered section is visible
    Given Array user is on the "Array" page
    When Array user views all contents in Array page
    Then Array Topics Covered section should be visible

  Scenario: Verify Array page contains all links
    Given Array user is on the "Array" page
    When Array user views all contents in Array page
    Then Array page should contain all the links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array

  # ─────────────────────────────────────────
  # ARRAYS IN PYTHON PAGE
  # ─────────────────────────────────────────

  Scenario: Verify user navigates to Arrays in Python page
    Given Array user is on the "Array" page
    When Array user clicks on Arrays in Python link
    Then Array user should be redirected to Arrays in Python page

  Scenario: Verify Arrays in Python page heading
    Given Array user is on the "Array" page
    When Array user clicks on Arrays in Python link
    Then Arrays in Python page heading should be "Arrays in Python"

  Scenario: Verify Arrays in Python page description
    Given Array user is on the "Arrays in Python" page
    When Array user views all contents in Arrays in Python page
    Then Arrays in Python page should display description about arrays in Python

  Scenario: Verify Arrays in Python code snippet
    Given Array user is on the "Arrays in Python" page
    When Array user views all contents in Arrays in Python page
    Then Arrays in Python page should contain code snippet for array declaration

  Scenario: Verify Arrays in Python operations
    Given Array user is on the "Arrays in Python" page
    When Array user views all contents in Arrays in Python page
    Then Arrays in Python page should display Insertion Deletion Search Update operations

  Scenario: Verify insert method example
    Given Array user is on the "Arrays in Python" page
    When Array user views all insertion content in Array in Python page
    Then Arrays in Python page should display example using insert method

  Scenario: Verify remove method example
    Given Array user is on the "Arrays in Python" page
    When Array user views all insertion content in Array in Python page
    Then Arrays in Python page should display example using remove method

  Scenario: Verify index method example
    Given Array user is on the "Arrays in Python" page
    When Array user views all insertion content in Array in Python page
    Then Arrays in Python page should display example using index method

  Scenario: Verify update array element example
    Given Array user is on the "Arrays in Python" page
    When Array user views all insertion content in Array in Python page
    Then Arrays in Python page should display example for updating array element

  Scenario: Verify output for insertion example
    Given Array user is on the "Arrays in Python" page
    When Array user scrolls to the output section
    Then Arrays in Python page should display output for insertion example

  Scenario: Verify output for deletion example
    Given Array user is on the "Arrays in Python" page
    When Array user scrolls to the output section
    Then Arrays in Python page should display output for deletion example

  Scenario: Verify output for search example
    Given Array user is on the "Arrays in Python" page
    When Array user scrolls to the output section
    Then Arrays in Python page should display output for search example

  Scenario: Verify updated array output
    Given Array user is on the "Arrays in Python" page
    When Array user scrolls to the output section
    Then Arrays in Python page should display updated array output

  Scenario: Verify all sidebar links are visible
    Given Array user is on the "Arrays in Python" page
    When Array user views the navigation links section
    Then All Array sidebar links should be visible

  Scenario: Verify sidebar contains correct links
    Given Array user is on the "Arrays in Python" page
    When Array user views the navigation links section on the left sidebar
    Then Array sidebar should contain links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array

  Scenario: Verify navigation to Arrays Using List from Arrays in Python
    Given Array user is on the "Arrays in Python" page
    When Array user clicks on Arrays Using List from Arrays in Python page
    Then Array user should be redirected to Arrays Using List page

  # ─────────────────────────────────────────
  # ARRAYS USING LIST PAGE
  # ─────────────────────────────────────────

  Scenario: Verify user navigates to Arrays Using List page
    Given Array user is on the Array page
    When Array user clicks on Arrays Using List link
    Then Array user should be redirected to Arrays Using List page

  Scenario: Verify Arrays Using List page heading
    Given Array user is on the Array page
    When Array user clicks on Arrays Using List link
    Then Arrays Using List page heading should be "Arrays Using List"

  Scenario: Verify Arrays Using List description about dynamic arrays
    Given Array user is on the "Arrays Using List" page
    When Array page is fully loaded
    Then Arrays Using List page should display description about lists as dynamic arrays

  Scenario: Verify list can grow and shrink
    Given Array user is on the "Arrays Using List" page
    When Array page is fully loaded
    Then Arrays Using List page should explain that list can grow and shrink

  Scenario: Verify index starting from 0
    Given Array user is on the "Arrays Using List" page
    When Array page is fully loaded
    Then Arrays Using List page should describe index starting from 0

  Scenario: Verify grocery list example
    Given Array user is on the "Arrays Using List" page
    When Array user views the example list section
    Then Arrays Using List page should display example list

  Scenario: Verify grocery list items
    Given Array user is on the "Arrays Using List" page
    When Array user views the example list section
    Then Arrays Using List list should contain apples bananas cucumbers dates strawberries

  Scenario: Verify index positions display
    Given Array user is on the "Arrays Using List" page
    When Array user views the list index section
    Then Arrays Using List page should display index values starting from 0

  Scenario: Verify index shown for each element
    Given Array user is on the "Arrays Using List" page
    When Array user views the list index section
    Then Arrays Using List index should be shown for each element

  Scenario: Verify append operation code snippet
    Given Array user is on the "Arrays Using List" page
    When Array user views the append operation section
    Then Arrays Using List page should display code snippet using append method

  Scenario: Verify append code contains oranges
    Given Array user is on the "Arrays Using List" page
    When Array user views the append operation section
    Then Arrays Using List code example should contain grocery append oranges

  Scenario: Verify updated list contains oranges
    Given Array user is on the "Arrays Using List" page
    When Array user views the append operation section
    Then Arrays Using List updated list should contain oranges

  Scenario: Verify updated list after append
    Given Array user is on the "Arrays Using List" page
    When Array user views the updated list after the append operation
    Then Arrays Using List updated list should display apples bananas cucumbers dates strawberries oranges

  Scenario: Verify Try Here button is visible
    Given Array user is on the "Arrays Using List" page
    When Array user views the Try Here section
    Then Arrays Using List Try here button should be visible

  Scenario: Verify navigation to Try Editor from Arrays Using List
    Given Array user is on the "Arrays Using List" page
    When Array user clicks Try here button in Arrays Using List page
    Then Array user should be redirected to a page having a Try Editor with a Run button

  # ─────────────────────────────────────────
  # BASIC OPERATIONS IN LISTS PAGE
  # ─────────────────────────────────────────

  Scenario: Verify navigation to Basic Operations in Lists page
    Given Array user is on the "Arrays Using List" page
    When Array user clicks on Basic Operations in Lists link
    Then Array user should be redirected to Basic Operations in Lists page

  Scenario: Verify Basic Operations in Lists page content
    Given Array user is on the "Basic Operations in Lists" page
    When Array Basic Operations Lists page is fully loaded
    Then Array page should display Insertion in Lists section and Deletion in Lists section

  Scenario: Verify insertion operation explanation
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the insertion section
    Then Array page should explain insertion at beginning and at given index

  Scenario: Verify insert syntax and example
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the insertion section
    Then Array page should display syntax list name insert index element and Code example should contain grocery insert 2 carrots

  Scenario: Verify list after insertion contains carrots
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the insertion Output
    Then Array updated list should contain carrots and List should display elements in correct order

  Scenario: Verify deletion operation explanation
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views deletion operation in lists
    Then Array page should explain deletion from end and beginning and at given index

  Scenario: Verify pop operation
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the pop operation section
    Then Array page should display pop method explanation and example using grocery pop and grocery pop 1

  Scenario: Verify remove operation explanation
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the remove operation
    Then Array page should display remove method explanation and Code example should contain grocery remove cucumbers

  Scenario: Verify list does not contain cucumbers after remove
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the remove operation
    Then Array updated list should not contain cucumbers

  Scenario: Verify navigation to Try Editor from Basic Operations
    Given Array user is on the "Basic Operations in Lists" page
    When Array user clicks Try here button in Basic Operations page
    Then Array user should be redirected to a page having a Try Editor with a Run button

  Scenario: Verify Basic Operations sidebar links
    Given Array user is on the "Basic Operations in Lists" page
    When Array user views the navigation links section on the left sidebar
    Then Array Basic Operations sidebar should contain links Arrays in Python Arrays Using List Basic Operations in Lists Applications of Array and Practice Questions

  # ─────────────────────────────────────────
  # APPLICATIONS OF ARRAY PAGE
  # ─────────────────────────────────────────

  Scenario: Verify navigation to Applications of Array page
    Given Array user is in the Basic Operations in Lists page
    When Array user clicks Applications of Array link
    Then Array user should be redirected to Applications of Array page

  Scenario: Verify Applications of Array real world use cases
    Given Array user is on the Applications of Array page
    When Applications of Array page loads
    Then Array page should display real world use cases

  Scenario: Verify Applications of Array list
    Given Array user is on the Applications of Array page
    When Applications of Array page loads
    Then Array page should display list of array applications

  Scenario: Verify temperature records
    Given Array user is on the Applications of Array page
    When Array user views the Applications of Array section
    Then Array user should see temperature records

  Scenario: Verify employee list
    Given Array user is on the Applications of Array page
    When Array user views the Applications of Array section
    Then Array user should see employee list

  Scenario: Verify products list
    Given Array user is on the Applications of Array page
    When Array user views the Applications of Array section
    Then Array user should see products list

  Scenario: Verify student scores
    Given Array user is on the Applications of Array page
    When Array user views the Applications of Array section
    Then Array user should see student scores

  Scenario: Verify customer telephone numbers
    Given Array user is on the Applications of Array page
    When Array user views the Practice Questions section
    Then Array user should see customer telephone numbers

  Scenario: Verify rainfall data
    Given Array user is on the Applications of Array page
    When Array user views the Applications of Array section
    Then Array user should see rainfall data

  # ─────────────────────────────────────────
  # PRACTICE QUESTIONS PAGE
  # ─────────────────────────────────────────

  Scenario: Verify navigation to Practice Questions page
    Given Array user is in the Application of Array page
    When Array user clicks Practice Questions link
    Then Array user should be redirected to Practice Questions page

  Scenario: Verify Search the array question
    Given Array user is in the Practice Questions list page
    When Array user clicks on Search the array from the list
    Then Array user should be redirected to Search the array questions page with run and submit button

  Scenario: Verify Max Consecutive Ones question
    Given Array user is in the Practice Questions list page
    When Array user clicks on Max Consecutive Ones from the list
    Then Array user should be redirected to Max Consecutive Ones questions page with run and submit button

  Scenario: Verify Find Numbers with Even Number of Digits question
    Given Array user is in the Practice Questions list page
    When Array user clicks on Find Numbers with Even Number of Digits from the list
    Then Array user should be redirected to Find Numbers with Even Number of Digits questions page with run and submit button

  Scenario: Verify Squares of a Sorted Array question
    Given Array user is in the Practice Questions list page
    When Array user clicks on Squares of a Sorted Array from the list
    Then Array user should be redirected to Squares of a Sorted Array questions page with run and submit button

  # ─────────────────────────────────────────
  # TRY EDITOR SCENARIOS — ARRAY
  # ─────────────────────────────────────────

  Scenario: Verify that user is able to execute valid python code in Try Editor
    Given Array user is on the "Arrays Using List" page
    When Array user clicks Try here button in Arrays Using List page
    And Array user enters valid python code in Try Editor
    Then Array user should be able to type code in the text area

  Scenario: Verify that user is able to see output after running code in Try Editor
    Given Array user is on the "Arrays Using List" page
    When Array user clicks Try here button in Arrays Using List page
    And Array user clicks Run button in Try Editor
    Then Array user should be able to see output in Try Editor

  Scenario: Verify that user gets alert when running without input in Try Editor
    Given Array user is on the "Arrays Using List" page
    When Array user clicks Try here button in Arrays Using List page
    And Array user clicks Run button without entering code in Try Editor
    Then Array user should receive an alert message in Try Editor

  Scenario: Verify that user gets error for invalid input in Try Editor
    Given Array user is on the "Arrays Using List" page
    When Array user clicks Try here button in Arrays Using List page
    And Array user enters invalid code in Try Editor
    Then Array user should receive an error message in Try Editor