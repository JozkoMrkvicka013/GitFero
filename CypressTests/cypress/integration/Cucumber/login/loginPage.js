
const EMAIL = 'input[type="email"]'
const PASSWORD = 'input[type="password"]'
const SUBMIT_CREDENTIALS = 'form'



class LoginPage

{
   static visit(){
    cy.visit(Cypress.env('url'))
   } 
   static fillEmail(email){

      cy.get(EMAIL).type(email)
   }
   static fillPassword(password){
      cy.get(PASSWORD).type(password, {log: false})
    }
    static submitCredentials(){
        cy.get(SUBMIT_CREDENTIALS).submit()
    }
    
}

    export default LoginPage






