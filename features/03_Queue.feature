Feature: QueuePage Functionality

@queue  
    Scenario: Verify that user is able to navigate to "Queue" page
    Given user is on the Home page
    When user clicks Get Started button under Queue section
    Then user should be navigated to Queue page successfully
    
@queue  
 Scenario: Verify that user is able to see the content of "Implementation of Queue in Python" section
    Given user is on the Queue page
    When user clicks on "Implementation of Queue in Python" section
    Then user should be able to see the content of "Implementation of Queue in Python" section  
@queue
Scenario: Verify that user is able to navigate to "Implementation using collections.deque" page

    When user clicks on "Implementation using collections.deque" section
    Then user should be able to see the content of "Implementation using collections.deque" section  
@queue
Scenario: validate Implementation using array

    When user clicks on "Implementation using array"
    Then user should be able to see the content of "Implementation using array"  

@queue
Scenario: validate Queue Operations

    When user clicks on "Queue Operations"
    Then user should be able to see the content of "Queue Operations"


@queue  
Scenario: Verify that user is able to navigate to "Try Here>>>" page from "Implementation of Queue in Python" section
    Given The user is in the "Implementation of Queue in Python" page
    When user clicks on "Try Here>>>" button in "Implementation of Queue in Python" section
    Then user should be navigated to "Try Editor" page successfully from "Implementation of Queue in Python" section

@queue
Scenario: Verify that user is able to navigate to "Try Here>>>" page from "Implementation using collections.deque" section
    Given The user is in the "Implementation using collections.deque" page
    When user clicks on "Try Here>>>" button in "Implementation using collections.deque" section
    Then user should be navigated to "Try Editor" page successfully from "Implementation using collections.deque" section   

@queue
Scenario: Verify that user is able to navigate to "Practice Questions" page

    When user clicks on "Practice Questions" section
    Then user should be able to see the content of "Practice Questions" section

    

