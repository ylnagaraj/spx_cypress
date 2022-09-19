/// <reference types="Cypress" />

import HomePage from "../home.page"

class CreateOrderPage {

// Create New Order page

    static createNewOrder(name: string, advertiser: string, desc: string, statusPaused: string, button: string) {

        HomePage.clickButtonWithLabel('New Direct Order')
        this.fillOrderName(name)
        this.selectAdvertiser(advertiser)
        this.fillDescription(desc)
        this.setStatus(statusPaused)
        HomePage.clickButtonWithLabel(button)        
    }

    static fillOrderName(name: string) {
        const field = cy.get('.col-6 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(name)
        return this
    }

    static selectAdvertiser(advertiser: string) {
        const field = cy.get('.p-dropdown-label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click().type(advertiser)
        return this
    }

    static fillDescription(desc: string) {
        const field = cy.get('.p-inputtextarea', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(desc)
        return this
    }

    static setStatus(statusPaused: string) {
        const field = cy.get('.toggle-switch', {
            timeout: Cypress.env('elementTimeout')
        })
        if(statusPaused!='') {
            field.click()
            return this
        }
    }

    // static saveOrder(button: string) {
        
    //     const field = cy.get('[label="Save"] > .p-button-label', {
    //         timeout: Cypress.env('elementTimeout')
    //     })
    //     field.click()
    //     return this
    // }
} export default CreateOrderPage