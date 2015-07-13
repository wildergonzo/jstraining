# jstraining
rest api testing with javascript (frisby, jasmine, super agent)

## hltcs list

#### smoke tests
* verify user Login with valid credentials **(automate)**
* verify retrieving the Backlog list **(automate)**
* verify retrieving the Teams list **(automate)**
* verify retrieving the Stories list **(automate)**
* verify retrieving the Tasks list **(automate)**
* verify retrieving the Comments list
* verify retrieving the Users list

#### sanity tests
* verify getting the data of a specific User **(automate)**
* verify getting the data of a specific Backlog **(automate)**
* verify getting the data of a specific Team **(automate)**
* verify getting the data of a specific Story **(automate)**
* verify getting the data of a specific Task **(automate)**
* verify getting the content of a specific Comment
* verify getting the data of a specific User

#### crud tests
* verify creating a new Backlog **(automate)**
* verify updating an existent Backlog **(automate)**
* verify deleting an existent Backlog **(automate)**
* verify creating a new Story **(automate)**
* verify updating an existent Story **(automate)**
* verify creating a new Task
* verify updating an existent Task
* verify deleting an existent Task

#### negative tests
* verify login using invalid credentials **(automate)**
* verify creating a Story without required data **(automate)**
* verify updating an invalid Story **(automate)**
* verify deleting an invalid Story **(automate)**
* verify getting data of an invalid user **(automate)**
* verify creating a Task without required data
* verify updating an invalid Task
* verify deleting an invalid Task


#### boundary tests
* verify creating multiple Backlogs **(automate)**
* verify creating multiple Teams **(automate)**
* verify creating multiple Stories **(automate)**
* verify creating multiple Comments **(automate)**
* verify creating multiple Users **(automate)**

#### workflows
* verify create a new Backlog **(automate)**
* verify creating a Team and add it to Backlog **(automate)**
* verify creating a Stories for the Team **(automate)**
* verify adding a new Task to the Story **(automate)**
* verify adding Comments to the Story **(automate)**