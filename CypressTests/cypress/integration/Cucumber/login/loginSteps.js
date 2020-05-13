/// <reference types="cypress" />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPage'


Given('I open the login page', function() {
    
    LoginPage.visit()
    
  })

  When('I fill an email', function() {
     LoginPage.fillEmail('filipkupco@yahoo.com')
  })
  And('I fill a password', function() {
    LoginPage.fillPassword('demoPassword')
  })
  And('I click on submit button', function() {
    LoginPage.submitCredentials()
  })

  Then('I should see home page', function() {
      cy.get('#main-layout').should('not.be.empty')
    }) 







    

















