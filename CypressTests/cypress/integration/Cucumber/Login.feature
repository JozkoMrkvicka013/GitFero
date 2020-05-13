
@cucumber
Feature: Login to application

As a valid user
I want to login into application

Scenario: Valid login
Given I open the login page
When I fill an email
And I fill a password
And I click on submit button
Then I should see home page




   