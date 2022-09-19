/// <reference types="Cypress" />

import HomePage from "../home.page"

class CreateLineItemPage {

    // Create New App page

    static createNewLineItem(_name: string, _desc: string, _type: string, _onRoff: string, _priority: any, _percentage: string, _startDate: string, _endDate: string, _rateOption: string, _rate: string, _setOn: string) {

        HomePage.clickButtonWithLabel('New Line Item')
        
        this.fillLineItemName(_name)
        this.fillDescription(_desc)
        this.selectType(_type)
        this.setStatus(_onRoff)
        this.selectPriority(_priority)
        
        this.fillTrafficAllocation(_percentage)
        this.fillStartDate(_startDate)
        this.fillEndDate(_endDate)
        this.selectRate(_rateOption)
        this.fillRate(_rate)
        this.selectSmaatoAdNetDemand(_setOn)        
    }

    static fillLineItemName(name: string) {
        const field = cy.get('.col-6 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(name)
        return this
    }
     
    static fillDescription(desc: string) {
        const field = cy.get('.p-inputtextarea', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(desc)
        return this
    }
    static selectType(type: string) {
        const field = cy.get('#pr_id_46_label', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(type)
        cy.get('#p-highlighted-option > .ng-star-inserted').click();

        return this
    }
    static setStatus(onRoff: string) {
        const field = cy.get('.col-10 > spx-toggle.ng-untouched > .toggle > .toggle-slider > .toggle-switch', {
            timeout: Cypress.env('elementTimeout')
        })
        if(onRoff=='off') {
           field.click()
        }
        return this
    }
    static selectPriority(priority: string) {
        const field = cy.get(':nth-child(4) > .col-10 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(priority)
        return this
    }
    static fillTrafficAllocation(percentage: string) {
        const field = cy.get(':nth-child(4) > :nth-child(2) > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.clear()
        field.type(percentage)
        return this
    }
    static fillStartDate(startDate: string) { 
        const field = cy.get(':nth-child(4) > .left', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(startDate)
        return this
    }
    static fillEndDate(endDate: string) {
        const field = cy.get(':nth-child(4) > .right', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(endDate)
        return this
    }
    // static enableDayNTimeTargeting() {
    //     const field = cy.get(':nth-child(4) > .col-10 > .p-inputtext', {
    //         timeout: Cypress.env('elementTimeout')
    //     })
    //     field.type(name)
    //     return this
    // }
    static selectRate(rateOption: string) {

        const field1 = cy.get('[label="Targeted eCPM"] > .p-radiobutton > .p-radiobutton-box', {
            timeout: Cypress.env('elementTimeout')
        })
        const field2 = cy.get('[label="Floor Price"] > .p-radiobutton > .p-radiobutton-box', {
            timeout: Cypress.env('elementTimeout')
        })
        
        if(rateOption=='Floor Price') {
            field2.click()
        }else {
            field1.click()
        }
        return this
        
    }
    static fillRate(rate: string) {
        const field = cy.get('.col-3.ng-star-inserted > .ui-grid > :nth-child(2) > .col-8 > .p-inputtext', {
            timeout: Cypress.env('elementTimeout')
        })
        field.type(rate)
        return this
    }
    static selectSmaatoAdNetDemand(setOn: string) {
        const field = cy.get('.col-10 > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon', {
            timeout: Cypress.env('elementTimeout')
        })
        if(setOn=='On') {
            field.click()
        }
        return this
    }

    // RTB Rules

    static selectRTBRules() {

    }

    static selectTargeting() {

    }

}