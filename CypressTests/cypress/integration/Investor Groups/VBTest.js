
/// <reference types="Cypress" />
import LoginPage from '../../support/pageObjects/LoginPage'
import KPIConfigurationPage from '../../support/pageObjects/KPIConfigurationPage'
import InvestorsPage from '../../support/pageObjects/InvestorsPage'

describe('fero', function() {

    before(function() {
        cy.fixture('VBTestFixture').then(function(data) {
            this.data = data
        })
      }) 
     /* beforeEach(function() {
          cy.visit(Cypress.env('url'))
      }) */

    it('jozo', function() {

        LoginPage.visit()

        LoginPage.fillEmail(this.data.email)

        LoginPage.fillPassword(this.data.password)

        LoginPage.submitCredentials()

        KPIConfigurationPage.clickOnKPIConfigurationModule()

        KPIConfigurationPage.clickOnEditConfigurationButton()

        KPIConfigurationPage.clickOnAddKPIButton()

        KPIConfigurationPage.selectKPIs(this.data.kpi)

        KPIConfigurationPage.fillKPIEditBox(this.data.editBoxText)

        KPIConfigurationPage.clickOnSaveKPIButton()

        InvestorsPage.clickOnInvestorsModule()

        InvestorsPage.clickOnInvestorGroupsLink()

        InvestorsPage.clickOnAddInvestorGroupButton()

        InvestorsPage.fillInvestorGroupName(this.data.investorName)

        InvestorsPage.verifyKPI(this.data.kpi)

        InvestorsPage.clickOnSubmitButton()

        InvestorsPage.verifyInvestorGroupNameIsCreate(this.data.investorName)




        




        

    })
})