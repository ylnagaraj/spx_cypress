/// <reference types="Cypress" />

import HomePage from "../home.page"

class AppNAdSpacePage {


// Create New App page

    static createNewApp(_appType: string, _appName: string, _desc: string, _downloadURL: string, _category: any, _button: string) {

        HomePage.clickButtonWithLabel('New App')
        this.selectAppType(_appType)
        this.fillAppName(_appName)
        this.fillAppDescription(_desc)

        this.fillDownloadURL(_downloadURL)
        this.selectAppCategory(_category)
        this.selectCOPPA()
        HomePage.clickButtonWithLabel(_button)
    }
    static selectAppType(appType: string) {
        
        var iOS = ':nth-child(1) > .p-element > .p-radiobutton > .p-radiobutton-box'
        var android = ':nth-child(2) > .p-element > .p-radiobutton > .p-radiobutton-box'
        var mobileSite = ':nth-child(3) > .p-element > .p-radiobutton > .p-radiobutton-box'
        
        const field = cy.get(iOS, {timeout: Cypress.env('elementTimeout')})

        if(appType == 'android') {
            const field = cy.get(android, {timeout: Cypress.env('elementTimeout')})
        }else if(appType == 'mobileSite') {
            const field = cy.get(mobileSite, {timeout: Cypress.env('elementTimeout')})
        }
        field.click()
        return this
    } 
    static fillAppName(appName: string) {
        const field = cy.get(':nth-child(4) > .col-10 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(appName)
        //Cypress.env('')
        return this
    }
    static fillAppDescription(description: string) {
        const field = cy.get('.p-inputtextarea', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(description)
        return this
    }
    static fillDownloadURL(url: string) {
        const field = cy.get(':nth-child(8) > .col-10 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(url)
        return this
    }
    static selectAppCategory(category: string | number | (string | number)[]) {
        const field = cy.get('.p-dropdown-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        const option = cy.get(':nth-child('+ category +') > .p-ripple > .ng-star-inserted', {
            timeout: Cypress.env('elementTimeout')
        })
        option.click()
        //field.select(category).should('have.value', category)
        return this
    }
    static selectCOPPA() {
        const field = cy.get('.p-checkbox-box', { 
            timeout: Cypress.env('elementTimeout') 
        })
        field.click()
        return this
    }
    static clickSaveBtn() {
        const field = cy.get('.p-button-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }

    static clickCancelBtn() {
        const field = cy.get('.cancel-link', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }
    
//  Create New AdSpace

static createNewAdSpace(_name: string, _desc: string, _adFormat: any, _dimension: any, _category: any, _adPosition: any, _sxDemand: string, _button: string) {
    
    this.enterAdSpaceName(_name)
    this.enterAdSpaceDesc(_desc)
    this.selectAdFormat(_adFormat)
    this.selectDimension(_dimension)
    this.selectAdSpaceCategory(_category)
    this.selectAdPosition(_adPosition)
    this.smaatoExchangeDemand(_sxDemand)
    
    HomePage.clickButtonWithLabel(_button)
}

    static enterAdSpaceName(name: string) {
        const field = cy.get('.col-4 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(name)
        return this
    }
    static enterAdSpaceDesc(description: string){
        const field = cy.get('.p-inputtextarea', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(description)
        return this
    }
    static selectAdFormat(adformatValue: string | number | (string | number)[]) {
        
        const field = cy.get(':nth-child(4) > .col-6 > .p-element > .p-dropdown > .p-dropdown-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        const option = cy.get('#pr_id_6_list > :nth-child(' + adformatValue + ') > .p-ripple > .ng-star-inserted', {
            timeout: Cypress.env('elementTimeout')
        })
        option.click()
        return this
    }
    static selectDimension(dimensionValue: string | number | (string | number)[]) {
        const field = cy.get('.auto-width > .ui-dimension-dropdown', {
            //':nth-child(4) > .col-6 > .p-element > .p-dropdown > .p-dropdown-label'
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        const option = cy.get('.p-dropdown-items > :nth-child('+ dimensionValue +')', {
            timeout: Cypress.env('elementTimeout')
        })
        option.click()
        return this
    }
    static selectAdSpaceCategory(category: string | number | (string | number)[]) {
        const field = cy.get('#pr_id_7_label', {
            //cy.get(':nth-child(5) > .ng-tns-c62-51
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        const option = cy.get(':nth-child('+ category +') > .p-ripple > .ng-star-inserted', {
            timeout: Cypress.env('elementTimeout')
        })
        option.click()
        return this
    }
    static selectAdPosition(position: string | number | (string | number)[]) {
        const field = cy.get('#pr_id_11_label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        const option = cy.get(':nth-child('+ position +') > .p-ripple > .ng-star-inserted', {
            timeout: Cypress.env('elementTimeout')
        })
        option.click()
        return this
    }
    static smaatoExchangeDemand(sxDemand: string) {
        const field = cy.get('.col-6 > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon', {
            timeout: Cypress.env('elementTimeout')
        })
        if(sxDemand!='') {
            field.click()
            return this    
        }
    }
    static clickAdSpaceSaveBtn() {
        const field = cy.get('[icon="pi pi-check"] > .p-button-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }
    static clickSaveNCreateNewBtn() {
        const field = cy.get('[icon="pi pi-external-link"] > .p-button-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }

} export default AppNAdSpacePage