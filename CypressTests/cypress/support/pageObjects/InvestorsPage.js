
const ADD_INVESTOR_GROUP_BUTTON = '//button[text()="+ Add investor group"]'
const INVESTOR_GROUP_NAME = 'input[name="name"]'
const SUBMIT_BUTTON = '//button[@type="submit"]'



class InvestorsPage 

{

    static clickOnInvestorsModule(){
        cy.contains('Investors').click()
    }
    static clickOnInvestorGroupsLink(){
        cy.contains('Investor Groups').click({force: true})
    }
    static clickOnAddInvestorGroupButton(){
        cy.xpath(ADD_INVESTOR_GROUP_BUTTON).click()
    }
    static fillInvestorGroupName(investorName){
        cy.get(INVESTOR_GROUP_NAME).type(investorName)
        }
    static clickOnSubmitButton(){
        cy.xpath(SUBMIT_BUTTON).contains('Add').click()

        }
        static verifyKPI(kpi){
            cy.get('form div:nth-child(3)').should('contain.text', kpi)
        }
    static verifyInvestorGroupNameIsCreate(investorName){
        cy.xpath('//tbody').children('tr').last().should('contain.text', investorName)
        

        }

    }
        export default InvestorsPage

   









