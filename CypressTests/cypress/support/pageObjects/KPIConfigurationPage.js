
const EDIT_CONFIGURATION_BUTTON = '//button[text()="Edit configuration"]'
const ADD_KPI_BUTTON = '//button[text()="Add KPI"]'
const KPI_DROPDOWNS_PREFIX = 'div[name^="kpis"]'
const EDIT_BOX_TEXT = 'textarea[name$=".instruction"]'
const SAVE_KPIS_BUTTON = '//button[@type="button"]'



class KPIConfigurationPage

{
   static clickOnKPIConfigurationModule(){
    cy.contains('KPI Configuration').click({force: true})
   }
   static clickOnEditConfigurationButton(){
    cy.xpath(EDIT_CONFIGURATION_BUTTON).click()
    
    }
    static clickOnAddKPIButton(){
        cy.xpath(ADD_KPI_BUTTON).click()
    }
    static selectKPIs(kpi){
         cy.get(KPI_DROPDOWNS_PREFIX).first().click().type('{downarrow}').click().type(kpi)
         cy.contains(kpi).type('{enter}')
         cy.get(KPI_DROPDOWNS_PREFIX).eq(1).type('{enter}')
         cy.get(KPI_DROPDOWNS_PREFIX).last().type('{downarrow}{enter}')
    }
    static fillKPIEditBox(editBoxText){
        cy.get(EDIT_BOX_TEXT).type(editBoxText)
    }
    static clickOnSaveKPIButton(){
        cy.xpath(SAVE_KPIS_BUTTON).contains('Save').click()
    }


}

    export default KPIConfigurationPage 

    
