

Feature: TreePage Functionality
@tree  
    Scenario: Verify that user is able to navigate to "Tree" page
    Given user is on the Home page
    When user clicks Get Started button under Tree section
    Then user should be navigated to Tree page successfully
@tree  
 Scenario: Validate "Overview of Trees" page
    Given user is on the Tree page
    When user clicks on "Overview of Trees" section
    Then user should be able to see the content of "Overview of Trees" section 

@tree
Scenario: Validate "Type of Trees" page

    When user clicks on "Type of Trees" section
    Then user should be able to see the content of "Type of Trees" section  

@tree
Scenario: Validate "Terminologies" page

    When user clicks on "terminologies" 
    Then user should be able to see the content of "terminologies"  

@tree
Scenario: Validate "Traversals-Illustration" page

    When user clicks on "Traversals-Illustration" 
    Then user should be able to see the content of "Traversals-Illustration"  
@tree
Scenario: Validate "Tree Traversals" page

    When user clicks on "Tree Traversals" 
    Then user should be able to see the content of "Tree Traversals"  
@tree
Scenario: Validate "Binary Trees" page

    When user clicks on "Binary Trees" 
    Then user should be able to see the content of "Binary Trees"  
@tree
Scenario: Validate "Types of Binary Trees" page

    When user clicks on "Types of Binary Trees" 
    Then user should be able to see the content of "Types of Binary Trees"  

@tree
Scenario: Validate "Implementation in Python" page

    When user clicks on "Implementation in Python"
    Then user should be able to see the content of "Implementation in Python"
@tree
Scenario: Validate "Types of Binary Trees" page

    When user clicks on "Types of Binary Trees" 
    Then user should be able to see the content of "Types of Binary Trees" 

    @tree
Scenario: Validate "Binary Tree Traversals" page

    When user clicks on "Binary Tree Traversals" 
    Then user should be able to see the content of "Binary Tree Traversals"  

    @tree
Scenario: Validate "Implementation of Binary Trees" page

    When user clicks on "Implementation of Binary Trees" 
    Then user should be able to see the content of "Implementation of Binary Trees"  

 @tree
Scenario: Validate "Applications of Binary trees" page

    When user clicks on "Applications of Binary trees" 
    Then user should be able to see the content of "Applications of Binary trees" 

 @tree
    Scenario: Validate "Binary Search Trees" page

    When user clicks on "Binary Search Trees" 
    Then user should be able to see the content of "Binary Search Trees" 
    
 @tree
    Scenario: Validate "Implementation of Binary Trees" page

    When user clicks on "Implementation of Binary Trees" 
    Then user should be able to see the content of "Implementation of Binary Trees" 

     @tree
    Scenario: Validate "Implementation of Binary Trees" page

    When user clicks on "Implementation Of BST" 
    Then user should be able to see the content of "Implementation Of BST" 


@tree
Scenario: Validate "Practice Questions" page

    When user clicks on "Practice Questions" section
    Then user should be able to see the content of "Practice Questions" section  
@tree
Scenario: Verify that user is able to navigate to "Try Here>>>" page 
    Given The user is in the "Overview of Trees" page
    When user clicks on "Try Here>>>" button in "Overview of Trees" section
    Then user should be navigated to "Try Editor" page successfully

@tree
Scenario: Verify that user is able to enter valid Java code in Text Box
    Given The user is in the "Try Editor" page
    When user enters valid Java code in Text Box and clicks on "Run" button
    Then user should be able to see the output of the code in the output section 

@tree
Scenario: Verify that user is getting alert by entering wrong syntax in text area and click on "Run" button

When user enters invalid Java code in Text Box and clicks on "Run" button
Then The user should be able to see Alert Message "Syntax Error"

@tree
Scenario: Verify that user is getting alert by entering random alphanumeric characters in text area and click on "Run" button

When user enters random alphanumeric characters in Text Box and clicks on "Run" button
Then The user should be able to see Alert Message "Not Defined"

@tree
Scenario: Verify that user is getting alert by clicking on "Run" button leaving text area blank

When user clicks on "Run" button leaving text area blank
Then The user should be able to see Alert Message for blank text area
